# Alextrix — Frontend

Frontend Next.js 15 untuk Alextrix, platform AI marketing untuk seller Lynk.id Indonesia.

> Ini adalah **frontend-only build**. Semua backend (Supabase, AI provider, payment, email)
> masih di-mock di sisi client menggunakan zustand + localStorage. Backend bisa dibangun di
> platform lain dan ditempel ke frontend ini dengan mengganti implementasi di
> `src/lib/mocks/` dan `src/lib/stores/`.

## Stack

- **Next.js 15** App Router + React 19 + TypeScript strict
- **TailwindCSS v4** + design tokens custom (`brand`, `accent`, pillar colors)
- **shadcn/ui** (copy-paste, no vendor lock)
- **zustand + persist** untuk semua state (localStorage)
- **react-hook-form + zod** untuk validasi form
- **lucide-react**, **react-markdown + remark-gfm**, **isomorphic-dompurify**, **date-fns**, **sonner**, **nanoid**

## Quick start

```bash
pnpm install
pnpm dev
# buka http://localhost:3000
```

```bash
pnpm lint        # eslint
pnpm typecheck   # tsc --noEmit
pnpm build       # next build (production)
pnpm start       # next start (production server)
pnpm format      # prettier --write
```

> Wajib pakai **pnpm** (sesuai `package.json`). Node ≥ 20.

## Struktur folder utama

```
src/
├── app/                       # App Router pages
│   ├── (marketing)/           # /, /pricing, /faq, /kebijakan-*, /ketentuan-*
│   ├── (auth)/                # /masuk, /daftar, /lupa-password, /reset-password, /konfirmasi-email
│   ├── (activation)/          # /aktivasi, /onboarding
│   ├── (app)/                 # /dashboard, /tool/[toolId], /pustaka, /riwayat, /komunitas, /pengaturan/*
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                    # shadcn/ui primitives
│   ├── layout/                # AppSidebar, AppHeader, MobileNav, MarketingHeader/Footer, LicenseBanner
│   ├── shared/                # PageHeader, EmptyState, ConfirmDialog, CopyButton, PillarBadge, AppGuard, SeedRunner
│   └── tool/                  # ToolForm, ToolInputField, OutputRenderer, StreamingOutput, ToolRunnerShell, BlockLibraryShell
├── data/
│   ├── tools.ts               # 32 tool definitions (input fields, validation, help text)
│   ├── mock-outputs.ts        # mock AI output untuk semua 32 tool
│   ├── block-library.ts       # 50+ HTML block templates
│   ├── pillars.ts             # 4 pillar config (acquire/convert/retain/optimize)
│   ├── faq.ts, id-events.ts
│   ├── mock-pustaka.ts, mock-riwayat.ts
└── lib/
    ├── stores/                # 7 zustand stores (auth, license, byok, pustaka, riwayat, tool-runner, ui)
    ├── mocks/                 # fake-stream, fake-license, fake-byok, delay
    ├── validators/            # zod schemas (auth, license, onboarding, byok)
    ├── hooks/                 # use-tool-runner, use-hydrated
    ├── constants/             # routes, providers, app metadata
    ├── utils/                 # cn, format-currency, mask-key
    └── types/                 # Tool, ToolOutput, dll
```

## Mock backend

Karena ini frontend-first, semua "API call" diganti dengan stores yang persist ke localStorage:

| Real backend                    | Mock di sini                                            |
|---------------------------------|---------------------------------------------------------|
| Supabase Auth                   | `src/lib/stores/auth-store.ts` + `fake-license.ts`      |
| License DB (lynk.id webhook)    | `src/lib/stores/license-store.ts` + `fake-license.ts`   |
| BYOK key encryption (KMS)       | `src/lib/stores/byok-store.ts` + `fake-byok.ts`         |
| AI streaming (SSE)              | `src/lib/mocks/fake-stream.ts` (AsyncGenerator)         |
| Pustaka (database)              | `src/lib/stores/pustaka-store.ts`                       |
| Riwayat (database)              | `src/lib/stores/riwayat-store.ts`                       |

**3 kode lisensi mock** (untuk testing aktivasi):
- `ALEX-LIFE-TEST1-DEMO2-USER3-AB12CD34`
- `ALEX-LIFE-TEST4-DEMO5-USER6-EF56GH78`
- `ALEX-LIFE-TEST7-DEMO8-USER9-IJ90KL12`

**Mock streaming**: 25-char chunks tiap 30-80ms, 5% random failure rate (untuk test error handling).

## Auth & guard flow

Auth state disimpan di localStorage (zustand `persist`), jadi guard dilakukan **client-side** di
`<AppGuard />` (lihat `src/components/shared/app-guard.tsx`):

1. User belum login → redirect `/masuk`
2. Sudah login tapi belum punya lisensi → redirect `/aktivasi`
3. Sudah login + lisensi tapi belum onboarded → redirect `/onboarding`
4. Lengkap → boleh masuk `/dashboard` dan tool runner

`src/middleware.ts` dibuat sebagai placeholder no-op (server tidak bisa baca localStorage).
Saat backend siap, pindahkan logic guard ke middleware dengan reading session cookie.

## Tools (32)

Lihat `src/data/tools.ts`. Mereka dibagi 4 pillar:

- **Acquire** (5): niche-scanner, persona-builder, competitor-spy, audience-pain-mining, trend-radar
- **Convert** (11): landing-page-builder, copy-stack, lead-magnet-generator, product-wizard, pricing-lab, bundle-architect, upsell-designer, testimonial-formatter, headline-tester, urgency-builder, social-proof-block
- **Retain** (5): email-sequence, whatsapp-blast, post-purchase-flow, loyalty-program, win-back-campaign
- **Optimize** (11): page-audit, ab-test-planner, marketing-calendar, ai-coach, conversion-diagnostician, traffic-analyzer, sales-funnel-mapper, content-repurposer, seo-keyword-finder, viral-hook-generator, block-library

`/tool/[toolId]` adalah halaman generic yang menangani **6 UI variant** (simple, wizard, workspace, image, calendar, dashboard) berdasarkan field `uiVariant` pada definisi tool.

`block-library` punya UI khusus (gallery + preview iframe) di `BlockLibraryShell`.

## Bahasa Indonesia

100% UI, microcopy, sample data, dan placeholder dalam Bahasa Indonesia. Tidak ada string
English yang user-facing.

## Yang harus dilakukan saat backend siap

1. Ganti panggilan di `src/lib/mocks/fake-*.ts` dengan API call beneran (fetch ke endpoint Anda).
2. Update `src/lib/stores/auth-store.ts` agar menyimpan session token (bukan localStorage saja).
3. Pindahkan auth/license guard dari `<AppGuard />` ke `src/middleware.ts`.
4. Implementasi real SSE streaming di `useToolRunner` (`src/lib/hooks/use-tool-runner.ts`).
5. Ganti BYOK encryption dummy (`maskKey`) dengan KMS / server-side encryption.

## Lisensi

Internal — untuk product Alextrix.
