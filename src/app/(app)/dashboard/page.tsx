"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ToolCard } from "@/components/shared/tool-card";
import { PageHeader } from "@/components/shared/page-header";
import { TOOLS, FLAGSHIP_TOOLS, searchTools } from "@/data/tools";
import { PILLAR_LIST } from "@/data/pillars";
import { useAuthStore } from "@/lib/stores/auth-store";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { cn } from "@/lib/utils/cn";
import type { Pillar } from "@/lib/types/tool";

type Filter = "all" | Pillar | "flagship";

export default function DashboardPage() {
  const hydrated = useHydrated();
  const user = useAuthStore((s) => s.user);
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = TOOLS;
    if (filter === "flagship") list = FLAGSHIP_TOOLS;
    else if (filter !== "all") list = TOOLS.filter((t) => t.pillar === filter);
    if (query.trim()) {
      list = searchTools(query).filter((t) => list.includes(t));
    }
    return list;
  }, [filter, query]);

  const greetingName = hydrated && user ? user.fullName.split(" ")[0] : "Anda";

  return (
    <div>
      <PageHeader
        title={`Halo, ${greetingName} 👋`}
        description={`Pilih tool untuk mulai. ${TOOLS.length} tool siap pakai.`}
      />

      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {/* Quick actions */}
        <section className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Tool unggulan
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FLAGSHIP_TOOLS.map((tool) => (
              <ToolCard key={tool.id} tool={tool} variant="compact" />
            ))}
          </div>
        </section>

        {/* Filter & search */}
        <section>
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Cari tool..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
                ✨ Semua
              </FilterButton>
              {PILLAR_LIST.map((p) => (
                <FilterButton
                  key={p.id}
                  active={filter === p.id}
                  onClick={() => setFilter(p.id)}
                >
                  {p.emoji} {p.label}
                </FilterButton>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 bg-white p-12 text-center">
              <p className="text-sm text-slate-500">
                Tidak ditemukan tool dengan kata kunci{" "}
                <strong>&quot;{query}&quot;</strong>.{" "}
                <button
                  onClick={() => {
                    setQuery("");
                    setFilter("all");
                  }}
                  className="font-medium text-brand-600 hover:underline"
                >
                  Reset filter
                </button>
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </section>

        {/* Footer hint */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 text-center">
          <p className="text-sm text-slate-600">
            Belum atur API key?{" "}
            <Link
              href="/pengaturan/api-key"
              className="font-medium text-brand-600 hover:underline"
            >
              Tambahkan sekarang
            </Link>{" "}
            untuk bisa pakai semua tool.
          </p>
        </div>
      </div>
    </div>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "bg-brand-500 text-white"
          : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50",
      )}
    >
      {children}
    </button>
  );
}
