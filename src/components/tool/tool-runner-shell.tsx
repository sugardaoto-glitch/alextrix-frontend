"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft, Bookmark, History, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToolForm } from "@/components/tool/tool-form";
import { OutputRenderer } from "@/components/tool/output-renderer";
import { StreamingOutput } from "@/components/tool/streaming-output";
import { CopyButton } from "@/components/shared/copy-button";
import { PillarBadge } from "@/components/shared/pillar-badge";
import { useToolRunnerStore } from "@/lib/stores/tool-runner-store";
import { useToolRunner } from "@/lib/hooks/use-tool-runner";
import { useByokStore } from "@/lib/stores/byok-store";
import { usePustakaStore } from "@/lib/stores/pustaka-store";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { ROUTES } from "@/lib/constants/routes";
import type { Tool } from "@/lib/types/tool";

interface Props {
  tool: Tool;
}

export function ToolRunnerShell({ tool }: Props) {
  const router = useRouter();
  const hydrated = useHydrated();

  const {
    currentInputs,
    currentOutput,
    partialText,
    isStreaming,
    wizardStep,
    loadTool,
    setInput,
    nextStep,
    prevStep,
    reset,
  } = useToolRunnerStore();

  const { run, cancel } = useToolRunner();
  const activeProvider = useByokStore((s) => s.activeProvider);
  const keys = useByokStore((s) => s.keys);
  const addPustaka = usePustakaStore((s) => s.addItem);

  const [byokWarned, setByokWarned] = useState(false);

  useEffect(() => {
    loadTool(tool);
    return () => reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tool.id]);

  const hasByok =
    hydrated && activeProvider !== null && keys[activeProvider] !== null;

  const handleRun = async () => {
    if (!hasByok && !byokWarned) {
      setByokWarned(true);
      toast.warning("Anda belum atur API key. Output ini menggunakan demo.", {
        action: {
          label: "Atur sekarang",
          onClick: () => router.push(ROUTES.pengaturanApiKey),
        },
      });
    }

    try {
      await run(tool, currentInputs);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal menjalankan");
    }
  };

  const handleCancel = () => {
    cancel();
    toast.info("Generate dibatalkan.");
  };

  const handleSaveToPustaka = () => {
    if (!currentOutput) return;
    const item = addPustaka({
      type:
        tool.outputType === "html"
          ? "page-html"
          : tool.id === "persona-builder"
            ? "persona"
            : tool.id.includes("email")
              ? "email-sequence"
              : "prompt",
      title: `${tool.name} — ${new Date().toLocaleDateString("id-ID")}`,
      content: currentOutput,
      tags: [tool.id, tool.pillar],
    });
    toast.success(`Tersimpan ke Pustaka sebagai "${item.title}".`);
  };

  const wizardSteps = tool.wizardSteps;
  const isWizard = tool.uiVariant === "wizard" && wizardSteps && wizardSteps.length > 1;
  const visibleFields = isWizard
    ? tool.inputs.filter((f) => (f as any).step === wizardStep)
    : tool.inputs;

  const outputTextToCopy =
    currentOutput?.type === "markdown"
      ? currentOutput.content
      : currentOutput?.type === "html"
        ? currentOutput.content
        : JSON.stringify(currentOutput, null, 2);

  return (
    <div>
      {/* Header */}
      <div className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.push(ROUTES.dashboard)}
          className="mb-2 inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700"
        >
          <ArrowLeft className="h-3 w-3" />
          Kembali ke Dashboard
        </button>
        <div className="flex flex-wrap items-start gap-3">
          <div className="text-3xl">{tool.icon}</div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
                {tool.name}
              </h1>
              <PillarBadge pillar={tool.pillar} />
              {tool.flagshipTier && (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                  ⭐ Unggulan
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600">{tool.tagline}</p>
          </div>
        </div>

        {isWizard && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {wizardSteps.map((s) => (
              <div
                key={s.id}
                className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                  s.id === wizardStep
                    ? "bg-brand-500 text-white"
                    : s.id < wizardStep
                      ? "bg-brand-100 text-brand-700"
                      : "bg-slate-100 text-slate-500"
                }`}
              >
                <span>
                  {s.id}. {s.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Sparkles className="h-4 w-4 text-brand-500" />
                {isWizard ? wizardSteps[wizardStep - 1]?.title ?? "Input" : "Input"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ToolForm
                tool={tool}
                values={currentInputs}
                onChange={setInput}
                onSubmit={() => {
                  if (isWizard && wizardStep < wizardSteps.length) {
                    nextStep();
                  } else {
                    handleRun();
                  }
                }}
                onCancel={isStreaming ? handleCancel : undefined}
                isStreaming={isStreaming}
                visibleFields={visibleFields}
                submitLabel={
                  isWizard && wizardStep < wizardSteps.length ? "Lanjut" : "Generate"
                }
              />
              {isWizard && wizardStep > 1 && !isStreaming && (
                <Button
                  type="button"
                  variant="outline"
                  fullWidth
                  className="mt-2"
                  onClick={prevStep}
                >
                  Kembali
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Output */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Output</CardTitle>
                {currentOutput && (
                  <div className="flex gap-2">
                    <CopyButton value={outputTextToCopy ?? ""} label="Salin" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleSaveToPustaka}
                    >
                      <Bookmark className="h-4 w-4" />
                      Simpan
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {!isStreaming && !currentOutput && !partialText && (
                <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                  <div className="mb-2 text-3xl">✨</div>
                  <p className="text-sm font-medium text-slate-700">
                    Output akan muncul di sini
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Isi form di sebelah kiri lalu klik Generate.
                  </p>
                </div>
              )}

              {isStreaming && (
                <StreamingOutput text={partialText} isStreaming={isStreaming} />
              )}

              {!isStreaming && currentOutput && (
                <div>
                  <OutputRenderer output={currentOutput} />
                  <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
                    <History className="h-3.5 w-3.5" />
                    Tersimpan di Riwayat ·{" "}
                    <button
                      onClick={() => router.push(ROUTES.riwayat)}
                      className="font-medium text-brand-600 hover:underline"
                    >
                      Lihat semua
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
