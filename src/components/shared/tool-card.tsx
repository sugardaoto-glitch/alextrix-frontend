import Link from "next/link";
import { Star } from "lucide-react";
import { PILLARS } from "@/data/pillars";
import { cn } from "@/lib/utils/cn";
import type { Tool } from "@/lib/types/tool";

interface ToolCardProps {
  tool: Tool;
  variant?: "default" | "compact";
}

export function ToolCard({ tool, variant = "default" }: ToolCardProps) {
  const pillar = PILLARS[tool.pillar];

  return (
    <Link
      href={`/tool/${tool.id}`}
      className={cn(
        "group relative block overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-brand-300 hover:shadow-md",
        variant === "compact" ? "p-4" : "p-5",
      )}
    >
      {tool.flagshipTier && (
        <Star className="absolute right-3 top-3 h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      )}
      <div className="mb-3 flex items-center gap-3">
        <div
          className={cn(
            "flex items-center justify-center rounded-lg text-xl",
            variant === "compact" ? "h-9 w-9" : "h-10 w-10",
            pillar.bgClass,
          )}
        >
          {tool.icon}
        </div>
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
            pillar.bgClass,
            pillar.textClass,
            pillar.borderClass,
          )}
        >
          {pillar.label}
        </span>
      </div>
      <h3 className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-brand-700">
        {tool.name}
      </h3>
      <p
        className={cn(
          "text-xs text-slate-600",
          variant === "compact" ? "line-clamp-2" : "line-clamp-3",
        )}
      >
        {tool.tagline}
      </p>
    </Link>
  );
}
