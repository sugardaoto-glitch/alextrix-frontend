/**
 * Template prompt untuk tool AI Code Generator Alextrix.
 * Menghasilkan kode React/HTML dari deskripsi bahasa natural.
 * Instruksi dalam Bahasa Indonesia, output kode dalam English (standar programming).
 */

import type { ChatMessage } from "@/data/ecommerce-prompts";

const SHADCN_COMPONENTS = `Komponen shadcn/ui yang tersedia:
- Button: import { Button } from "@/components/ui/button"
- Card: import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
- Input: import { Input } from "@/components/ui/input"
- Label: import { Label } from "@/components/ui/label"
- Badge: import { Badge } from "@/components/ui/badge"
- Avatar: import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
- Tabs: import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
- Dialog: import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
- Select: import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
- Switch: import { Switch } from "@/components/ui/switch"
- Separator: import { Separator } from "@/components/ui/separator"
- Progress: import { Progress } from "@/components/ui/progress"
- Tooltip: import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"`;

export function buildCodeGeneratorMessages(params: Record<string, string>): ChatMessage[] {
  const { description, codeType, style, useShadcn } = params;
  const includeShadcn = useShadcn === "yes";

  const styleDescriptions: Record<string, string> = {
    "modern-minimal": "clean, lots of whitespace, subtle shadows, neutral colors with one accent color",
    "bold-colorful": "vibrant colors, bold typography, eye-catching gradients, strong contrast",
    "corporate": "professional, structured, navy/gray/white palette, serif headings",
    "playful": "rounded corners, fun illustrations/icons, bright pastels, bouncy animations",
    "dark-elegant": "dark background, light text, gold/purple accents, sophisticated typography",
    "glassmorphism": "frosted glass effect, backdrop-blur, semi-transparent cards, gradient backgrounds",
    "gradient": "beautiful gradient backgrounds, smooth color transitions, modern feel",
    "retro": "vintage color palette, pixel-art inspired elements, nostalgic typography",
  };

  const codeTypeHints: Record<string, string> = {
    "landing-page": "Include hero section, features section, testimonials, and CTA. Make it conversion-focused.",
    "dashboard": "Include stats cards, charts (use recharts), data tables, and navigation sidebar.",
    "form": "Include proper form validation UI, input fields, select dropdowns, and submit button with loading state.",
    "ecommerce": "Include product grid, product cards with image/price/rating, filters, and cart summary.",
    "portfolio": "Include hero with name/title, project showcase grid, skills section, and contact form.",
    "blog": "Include article layout with featured image, typography for reading, sidebar, and related posts.",
    "pricing": "Include pricing tiers (3 columns), feature comparison, toggle for monthly/yearly, and CTA buttons.",
    "auth": "Include login/register form, social login buttons, password strength indicator, and form validation.",
    "email-template": "Generate HTML email template with inline styles (no Tailwind). Use table-based layout for email compatibility.",
    "component": "Create a self-contained, reusable React component with proper props typing.",
    "3d-visualization": "Use @react-three/fiber for 3D elements. Include Canvas, lighting, and interactive 3D objects.",
    "free": "Follow the user description exactly without additional structural assumptions.",
  };

  const systemPrompt = `Kamu adalah frontend engineer expert dan UI/UX designer profesional.
Tugasmu adalah menghasilkan kode React lengkap berdasarkan deskripsi pengguna.

ATURAN WAJIB:
- Buat React component dengan default export yang bisa jalan sendiri
- Gunakan TypeScript
- Gunakan Tailwind CSS untuk styling. JANGAN gunakan arbitrary values (e.g. h-[600px])
- Pastikan warna konsisten dan harmonis
- Gunakan margin & padding Tailwind yang proper
- JANGAN tambahkan komentar placeholder seperti "<!-- Add more items -->" — TULIS KODE LENGKAP
- Jika butuh gambar, gunakan placeholder dari https://placehold.co dengan alt text deskriptif
- Jika butuh icon, gunakan lucide-react: import { Camera } from "lucide-react"
- Jika butuh chart/grafik, gunakan recharts: import { LineChart, XAxis, ... } from "recharts"
- Jika butuh 3D, gunakan @react-three/fiber: import { Canvas } from "@react-three/fiber"
- Import React hooks yang digunakan (useState, useEffect, dll.)
- Buat app interaktif dan fungsional dengan state management yang proper
- HANYA return kode React lengkap dimulai dari imports. JANGAN tambahkan backticks atau penjelasan.

${includeShadcn ? SHADCN_COMPONENTS + "\n\nGunakan komponen shadcn/ui jika cocok untuk kebutuhan." : "JANGAN gunakan library UI selain Tailwind CSS."}

GAYA VISUAL: ${styleDescriptions[style] ?? "modern and clean"}
JENIS: ${codeTypeHints[codeType] ?? "Follow user description."}

PENTING: Kode harus lengkap, fungsional, dan siap dijalankan. Semua teks konten dalam Bahasa Indonesia.`;

  return [
    { role: "system", content: systemPrompt },
    { role: "user", content: description },
  ];
}
