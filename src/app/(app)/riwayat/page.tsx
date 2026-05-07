"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Star, Trash2, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { toast } from "sonner";
import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PillarBadge } from "@/components/shared/pillar-badge";
import { useRiwayatStore } from "@/lib/stores/riwayat-store";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import type { ToolRun } from "@/lib/types/tool";

const FILTERS = [
  { id: "all", label: "Semua" },
  { id: "starred", label: "⭐ Starred" },
  { id: "completed", label: "Berhasil" },
  { id: "failed", label: "Gagal" },
];

export default function RiwayatPage() {
  const hydrated = useHydrated();
  const runs = useRiwayatStore((s) => s.runs);
  const deleteRun = useRiwayatStore((s) => s.deleteRun);
  const toggleStar = useRiwayatStore((s) => s.toggleStar);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [toDelete, setToDelete] = useState<ToolRun | null>(null);

  const filtered = useMemo(() => {
    let list = runs;
    if (filter === "starred") list = list.filter((r) => r.starred);
    else if (filter === "completed")
      list = list.filter((r) => r.status === "completed");
    else if (filter === "failed")
      list = list.filter((r) => r.status === "failed" || r.status === "cancelled");
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((r) => r.toolName.toLowerCase().includes(q));
    }
    return list;
  }, [runs, filter, query]);

  const handleDelete = () => {
    if (!toDelete) return;
    deleteRun(toDelete.id);
    toast.success("Riwayat dihapus.");
    setToDelete(null);
  };

  return (
    <div>
      <PageHeader
        title="Riwayat"
        description="Semua tool runs Anda. Maks 200 item terbaru tersimpan."
      />

      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Cari tool..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="text-xs text-slate-500">
            {hydrated ? `${filtered.length} run` : "Memuat..."}
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                filter === f.id
                  ? "bg-brand-500 text-white"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {hydrated && filtered.length === 0 ? (
          <EmptyState
            icon="📜"
            title="Belum ada riwayat"
            description="Setiap kali Anda jalankan tool, run-nya akan muncul di sini."
            action={
              <Button asChild>
                <Link href={ROUTES.dashboard}>Buka Dasbor</Link>
              </Button>
            }
          />
        ) : (
          <div className="space-y-2">
            {filtered.map((run) => (
              <Card key={run.id}>
                <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 flex-1 items-start gap-3">
                    <button
                      onClick={() => toggleStar(run.id)}
                      aria-label={run.starred ? "Unstar" : "Star"}
                      className="text-slate-300 hover:text-amber-500"
                    >
                      <Star
                        className={cn(
                          "h-4 w-4",
                          run.starred && "fill-amber-400 text-amber-400",
                        )}
                      />
                    </button>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-slate-900">
                          {run.toolName}
                        </h3>
                        <PillarBadge pillar={run.pillar} />
                        {run.status === "completed" ? (
                          <Badge variant="success" className="text-[10px]">
                            Berhasil
                          </Badge>
                        ) : run.status === "cancelled" ? (
                          <Badge variant="warning" className="text-[10px]">
                            Dibatalkan
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="text-[10px]">
                            Gagal
                          </Badge>
                        )}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span>
                          {format(new Date(run.createdAt), "d MMM yyyy · HH:mm", {
                            locale: idLocale,
                          })}
                        </span>
                        <span>•</span>
                        <span>{run.tokensInput + run.tokensOutput} token</span>
                        <span>•</span>
                        <span>{(run.durationMs / 1000).toFixed(1)} detik</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={ROUTES.tool(run.toolId)}>
                        <ExternalLink className="h-3.5 w-3.5" />
                        Buka
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setToDelete(run)}
                      aria-label="Hapus"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <ConfirmDialog
        open={!!toDelete}
        onOpenChange={(o) => !o && setToDelete(null)}
        title="Hapus riwayat ini?"
        description="Riwayat tidak bisa dipulihkan setelah dihapus."
        variant="destructive"
        confirmLabel="Hapus"
        onConfirm={handleDelete}
      />
    </div>
  );
}
