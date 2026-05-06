import { PILLARS } from "@/data/pillars";
import { cn } from "@/lib/utils/cn";
import type { Pillar } from "@/lib/types/tool";

interface PillarBadgeProps {
  pillar: Pillar;
  size?: "sm" | "md";
  showEmoji?: boolean;
  className?: string;
}

export function PillarBadge({
  pillar,
  size = "sm",
  showEmoji = true,
  className,
}: PillarBadgeProps) {
  const config = PILLARS[pillar];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border font-medium",
        config.bgClass,
        config.textClass,
        config.borderClass,
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm",
        className,
      )}
    >
      {showEmoji && <span>{config.emoji}</span>}
      <span>{config.label}</span>
    </span>
  );
}
