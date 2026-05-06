"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Trash2, Tag, Calendar } from "lucide-react";
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
import { usePustakaStore } from "@/lib/stores/pustaka-store";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import type { PustakaItem, PustakaItemType } from "@/lib/types/tool";

const TYPE_LABELS: Record<PustakaItemType, { label: string; emoji: string }> = {
  prompt: { label: "Prompt", emoji: "📝" },
  "page-html": { label: "Halaman HTML", emoji: "📄" },
  block: { label: "Block", emoji: "🧱" },
  caption: { label: "Caption", emoji: "💬" },
  persona: { label: "Persona", emoji: "👤" },
  campaign: { label: "Kampanye", emoji: "📢" },
  funnel: { label: "Funnel", emoji: "🎯" },
  "email-sequence": { label: "Email", emoji: "📧" },
};

const FILTERS: { id: "all" | PustakaItemType; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "page-html", label: "Halaman" },
  { id: "block", label: "Block" },
  { id: "caption", label: "Caption" },
  { id: "persona", label: "Persona" },
  { id: "email-sequence", label: "Email" },
  { id: "prompt", label: "Prompt" },
  { id: "campaign", label: "Kampanye" },
  { id: "funnel", label: "Funnel" },
];

export default function PustakaPage() {
  const hydrated = useHydrated();
  const items = usePustakaStore((s) => s.items);
  const deleteItem = usePustakaStore((s) => s.deleteItem);
  const [filter, setFilter] = useState<"all" | PustakaItemType>("all");
  const [query, setQuery] = useState("");
  const [toDelete, setToDelete] = useState<PustakaItem | null>(null);

  const filtered = useMemo(() => {
    let list = items;
    if (filter !== "all") list = list.filter((i) => i.type === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [items, filter, query]);

  const handleDelete = () => {
    if (!toDelete) return;
    deleteItem(toDelete.id);
    toast.success(`"${toDelete.title}" dihapus dari Pustaka.`);
    setToDelete(null);
  };

  return (
    <div>
      <PageHeader
        title="Pustaka"
        description="Output yang Anda simpan untuk akses cepat. Tag & filter sesuai kebutuhan."
      />

      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Cari di pustaka..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="text-xs text-slate-500">
            {hydrated ? `${filtered.length} item` : "Memuat..."}
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
            icon="📚"
            title="Pustaka masih kosong"
            description="Setiap output yang Anda 'simpan' dari tool akan muncul di sini. Cobalah buat output dulu."
            action={
              <Button asChild>
                <Link href={ROUTES.dashboard}>Buka Dashboard</Link>
              </Button>
            }
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => {
              const meta = TYPE_LABELS[item.type];
              return (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <Badge variant="secondary" className="text-[10px]">
                        {meta.emoji} {meta.label}
                      </Badge>
                      <button
                        onClick={() => setToDelete(item)}
                        aria-label="Hapus"
                        className="text-slate-400 hover:text-rose-600"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-0.5 text-[10px] text-slate-500"
                        >
                          <Tag className="h-2.5 w-2.5" />
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
                      <Calendar className="h-2.5 w-2.5" />
                      {format(new Date(item.createdAt), "d MMM yyyy", {
                        locale: idLocale,
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      <ConfirmDialog
        open={!!toDelete}
        onOpenChange={(o) => !o && setToDelete(null)}
        title="Hapus dari Pustaka?"
        description={`Anda akan menghapus "${toDelete?.title}". Tindakan ini tidak bisa dibatalkan.`}
        variant="destructive"
        confirmLabel="Hapus"
        onConfirm={handleDelete}
      />
    </div>
  );
}
