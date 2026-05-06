import type { NavItem } from "@/lib/types/tool";

export const ROUTES = {
  // Marketing
  landing: "/",
  pricing: "/pricing",
  faq: "/faq",
  privasi: "/kebijakan-privasi",
  ketentuan: "/ketentuan-layanan",
  refund: "/kebijakan-refund",

  // Auth
  masuk: "/masuk",
  daftar: "/daftar",
  lupaPassword: "/lupa-password",
  resetPassword: "/reset-password",
  konfirmasiEmail: "/konfirmasi-email",

  // App
  aktivasi: "/aktivasi",
  onboarding: "/onboarding",
  dashboard: "/dashboard",
  tool: (id: string) => `/tool/${id}`,
  riwayat: "/riwayat",
  pustaka: "/pustaka",
  komunitas: "/komunitas",
  pengaturan: "/pengaturan",
  pengaturanApiKey: "/pengaturan/api-key",
  pengaturanTagihan: "/pengaturan/tagihan",
  pengaturanKomunitas: "/pengaturan/komunitas",
} as const;

export const APP_NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: "LayoutGrid" },
  { id: "pustaka", label: "Pustaka", href: "/pustaka", icon: "BookmarkCheck" },
  { id: "riwayat", label: "Riwayat", href: "/riwayat", icon: "History" },
  { id: "komunitas", label: "Komunitas", href: "/komunitas", icon: "Users" },
];

export const APP_NAV_SETTINGS: NavItem[] = [
  { id: "profil", label: "Profil", href: "/pengaturan", icon: "User" },
  { id: "api-key", label: "API Key", href: "/pengaturan/api-key", icon: "Key" },
  { id: "tagihan", label: "Tagihan", href: "/pengaturan/tagihan", icon: "Receipt" },
  { id: "telegram", label: "Telegram", href: "/pengaturan/komunitas", icon: "MessageCircle" },
];

export const PILLAR_FILTER_ITEMS = [
  { id: "all", label: "Semua tool", emoji: "✨" },
  { id: "acquire", label: "Acquire", emoji: "🎯" },
  { id: "convert", label: "Convert", emoji: "💰" },
  { id: "retain", label: "Retain", emoji: "🔄" },
  { id: "optimize", label: "Optimize", emoji: "📊" },
] as const;

export const PROTECTED_ROUTES = [
  "/dashboard",
  "/tool",
  "/riwayat",
  "/pustaka",
  "/komunitas",
  "/pengaturan",
  "/aktivasi",
  "/onboarding",
];

export const AUTH_ONLY_ROUTES = ["/masuk", "/daftar", "/lupa-password"];
