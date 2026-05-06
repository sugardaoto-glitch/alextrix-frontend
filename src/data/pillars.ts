import type { Pillar } from "@/lib/types/tool";

export interface PillarConfig {
  id: Pillar;
  emoji: string;
  label: string;
  shortLabel: string;
  description: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  hexColor: string;
}

export const PILLARS: Record<Pillar, PillarConfig> = {
  acquire: {
    id: "acquire",
    emoji: "🎯",
    label: "Acquire",
    shortLabel: "Acquire",
    description:
      "Temukan niche, bedah kompetitor, bangun audience persona untuk bisnis Anda.",
    bgClass: "bg-blue-100",
    textClass: "text-blue-900",
    borderClass: "border-blue-200",
    hexColor: "#2563eb",
  },
  convert: {
    id: "convert",
    emoji: "💰",
    label: "Convert",
    shortLabel: "Convert",
    description:
      "Bangun landing page, copy yang konversi, dan harga yang masuk akal.",
    bgClass: "bg-emerald-100",
    textClass: "text-emerald-900",
    borderClass: "border-emerald-200",
    hexColor: "#059669",
  },
  retain: {
    id: "retain",
    emoji: "🔄",
    label: "Retain",
    shortLabel: "Retain",
    description:
      "Email sequence, WhatsApp blast, program loyalty untuk buyer kembali.",
    bgClass: "bg-purple-100",
    textClass: "text-purple-900",
    borderClass: "border-purple-200",
    hexColor: "#7c3aed",
  },
  optimize: {
    id: "optimize",
    emoji: "📊",
    label: "Optimize",
    shortLabel: "Optimize",
    description:
      "Audit halaman, A/B test, marketing calendar, AI Coach untuk pertumbuhan.",
    bgClass: "bg-amber-100",
    textClass: "text-amber-900",
    borderClass: "border-amber-200",
    hexColor: "#d97706",
  },
};

export const PILLAR_LIST: PillarConfig[] = [
  PILLARS.acquire,
  PILLARS.convert,
  PILLARS.retain,
  PILLARS.optimize,
];
