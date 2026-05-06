export type { DesignDNA, PageStructure, MasterPromptInput } from "./types";
export { DESIGN_STYLES } from "./design-dna";
export { THEME_PROMPTS } from "./themes-index";
export { PAGE_STRUCTURES } from "./structures-index";
export { buildMasterPrompt } from "./master-prompt";
export { buildReviserPrompt } from "./reviser-prompt";
export { PROMPT_CATEGORIES } from "./library";

export const PAGE_TYPE_OPTIONS: { value: string; label: string }[] = [
  { value: "Penjualan Produk Digital", label: "Penjualan Produk Digital" },
  { value: "Portofolio & Jasa", label: "Portofolio & Jasa" },
  { value: "Pendaftaran Webinar/Kelas", label: "Pendaftaran Webinar / Kelas" },
  { value: "Booking Sesi Konsultasi", label: "Booking Sesi Konsultasi" },
  { value: "Donasi & Dukungan", label: "Donasi & Dukungan" },
  { value: "Lead Magnet - Akses Gratis", label: "Lead Magnet - Akses Gratis" },
  {
    value: "Penjualan Produk Fisik - Barang",
    label: "Penjualan Produk Fisik - Barang",
  },
  {
    value: "Penjualan Produk Fisik - Non-Barang",
    label: "Penjualan Produk Fisik - Non-Barang",
  },
];
