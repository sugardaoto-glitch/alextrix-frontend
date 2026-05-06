"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search, Eye, Bookmark } from "lucide-react";
import { toast } from "sonner";
import DOMPurify from "isomorphic-dompurify";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CopyButton } from "@/components/shared/copy-button";
import { BLOCKS, renderBlock } from "@/data/block-library";
import { usePustakaStore } from "@/lib/stores/pustaka-store";
import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import type { BlockTemplate } from "@/lib/types/tool";

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "hero", label: "Hero" },
  { id: "problem", label: "Problem" },
  { id: "benefits", label: "Benefits" },
  { id: "testimonial", label: "Testimoni" },
  { id: "cta", label: "CTA" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "stats", label: "Stats" },
  { id: "header", label: "Header" },
  { id: "footer", label: "Footer" },
  { id: "about", label: "About" },
  { id: "guarantee", label: "Garansi" },
  { id: "bonus", label: "Bonus" },
  { id: "social", label: "Social" },
  { id: "process", label: "Process" },
  { id: "utility", label: "Utility" },
  { id: "list", label: "List" },
];

export function BlockLibraryShell() {
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [preview, setPreview] = useState<BlockTemplate | null>(null);
  const addItem = usePustakaStore((s) => s.addItem);

  const filtered = useMemo(() => {
    let list = BLOCKS;
    if (filter !== "all") list = list.filter((b) => b.category === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q),
      );
    }
    return list;
  }, [filter, query]);

  const handleSave = (block: BlockTemplate) => {
    addItem({
      type: "block",
      title: `Block: ${block.name}`,
      content: { blockId: block.id, html: renderBlock(block, {}) },
      tags: [block.category, "block"],
    });
    toast.success("Block tersimpan ke Pustaka.");
  };

  return (
    <div>
      <div className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.push(ROUTES.dashboard)}
          className="mb-2 inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700"
        >
          <ArrowLeft className="h-3 w-3" />
          Kembali ke Dashboard
        </button>
        <div className="flex items-start gap-3">
          <div className="text-3xl">🧱</div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Block Library
            </h1>
            <p className="text-sm text-slate-600">
              {BLOCKS.length} block HTML siap copy ke editor Lynk.id Anda. Tidak
              ada CSS eksternal, semua inline.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Cari block..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                filter === c.id
                  ? "bg-brand-500 text-white"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 bg-white p-12 text-center">
            <p className="text-sm text-slate-500">Tidak ditemukan block.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((block) => (
              <Card key={block.id}>
                <div className="aspect-video overflow-hidden border-b border-slate-100 bg-slate-50">
                  <div
                    className="h-full origin-top-left scale-[0.4] overflow-hidden"
                    style={{ width: "250%", height: "250%" }}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(renderBlock(block, {})),
                    }}
                  />
                </div>
                <CardContent className="space-y-2 p-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {block.name}
                    </h3>
                    <p className="line-clamp-2 text-xs text-slate-500">
                      {block.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setPreview(block)}
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Preview
                    </Button>
                    <CopyButton
                      value={renderBlock(block, {})}
                      label="Copy HTML"
                      successMessage="Block HTML tersalin. Paste ke editor Lynk.id Anda."
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleSave(block)}
                    >
                      <Bookmark className="h-3.5 w-3.5" />
                      Simpan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!preview} onOpenChange={(o) => !o && setPreview(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{preview?.name}</DialogTitle>
            <DialogDescription>{preview?.description}</DialogDescription>
          </DialogHeader>
          {preview && (
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div
                className="max-h-[60vh] overflow-y-auto"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(renderBlock(preview, {})),
                }}
              />
            </div>
          )}
          {preview && (
            <div className="flex justify-end gap-2">
              <CopyButton value={renderBlock(preview, {})} label="Copy HTML" />
              <Button onClick={() => preview && handleSave(preview)}>
                <Bookmark className="h-4 w-4" />
                Simpan ke Pustaka
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
