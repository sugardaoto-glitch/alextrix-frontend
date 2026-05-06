import type { Tool } from "@/lib/types/tool";

const CODE_TYPE_OPTIONS = [
  { value: "landing-page", label: "Landing Page — Halaman arahan produk/jasa" },
  { value: "dashboard", label: "Dashboard — Panel admin/analytics" },
  { value: "form", label: "Form/Formulir — Halaman form interaktif" },
  { value: "ecommerce", label: "E-Commerce — Halaman toko/produk online" },
  { value: "portfolio", label: "Portfolio — Halaman portofolio personal/bisnis" },
  { value: "blog", label: "Blog/Artikel — Layout blog atau halaman konten" },
  { value: "pricing", label: "Pricing Page — Halaman harga/paket" },
  { value: "auth", label: "Auth Page — Halaman login/register" },
  { value: "email-template", label: "Email Template — Template email HTML" },
  { value: "component", label: "Komponen UI — Komponen React spesifik" },
  { value: "3d-visualization", label: "3D Visualization — Halaman dengan elemen three.js" },
  { value: "free", label: "Bebas — Deskripsi custom tanpa template" },
];

const STYLE_OPTIONS = [
  { value: "modern-minimal", label: "Modern Minimalis" },
  { value: "bold-colorful", label: "Bold & Colorful" },
  { value: "corporate", label: "Korporat / Profesional" },
  { value: "playful", label: "Playful / Fun" },
  { value: "dark-elegant", label: "Dark & Elegant" },
  { value: "glassmorphism", label: "Glassmorphism" },
  { value: "gradient", label: "Gradient" },
  { value: "retro", label: "Retro / Vintage" },
];

export const CODE_GENERATOR_TOOL: Tool = {
  id: "code-generator",
  name: "AI Code Generator",
  tagline: "Generate kode halaman web dari deskripsi bahasa natural — React, Tailwind, shadcn/ui",
  icon: "💻",
  pillar: "optimize",
  isActive: true,
  uiVariant: "simple",
  outputType: "markdown",
  estimatedTokens: { input: 1200, output: 6000 },
  estimatedDurationSeconds: 45,
  inputs: [
    {
      id: "description",
      label: "Deskripsi halaman web",
      type: "textarea",
      placeholder: "Deskripsikan halaman web yang ingin dibuat...\n\nContoh: Buat landing page untuk produk skincare dengan hero section, fitur 3 kolom, testimonial carousel, dan CTA button. Warna utama pink soft dan putih.",
      required: true,
      validation: { minLength: 20, maxLength: 5000 },
      helpText: "Jelaskan secara detail halaman web yang ingin di-generate. Semakin spesifik, semakin baik hasilnya.",
    },
    {
      id: "codeType",
      label: "Jenis halaman",
      type: "select",
      required: true,
      options: CODE_TYPE_OPTIONS,
      defaultValue: "landing-page",
      helpText: "Pilih jenis halaman yang sesuai.",
    },
    {
      id: "style",
      label: "Gaya visual",
      type: "select",
      required: true,
      options: STYLE_OPTIONS,
      defaultValue: "modern-minimal",
      helpText: "Pilih gaya desain yang diinginkan.",
    },
    {
      id: "useShadcn",
      label: "Gunakan shadcn/ui",
      type: "select",
      required: true,
      options: [
        { value: "yes", label: "Ya — pakai komponen shadcn/ui" },
        { value: "no", label: "Tidak — Tailwind CSS saja" },
      ],
      defaultValue: "yes",
      helpText: "shadcn/ui menyediakan komponen UI yang konsisten dan profesional.",
    },
  ],
};
