import Link from "next/link";
import { Sparkles, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants/routes";
import { TOOLS, FLAGSHIP_TOOLS } from "@/data/tools";
import { PILLAR_LIST } from "@/data/pillars";

export default function LandingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700">
              <Sparkles className="h-3.5 w-3.5" />
              Khusus untuk seller di Lynk.id Indonesia
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
                32 Tool AI Marketing
              </span>
              <br />
              dalam Bahasa Indonesia
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
              Dari mencari niche, bikin landing page, sampai email sequence —
              semua dalam satu dashboard. Bayar sekali, akses{" "}
              <strong>selamanya</strong>.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={ROUTES.daftar}>
                  Mulai Sekarang Rp 49.000
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={ROUTES.pricing}>Lihat Detail Harga</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              ✓ Sekali bayar, akses lifetime ✓ Tanpa biaya bulanan ✓ Garansi 7
              hari
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-medium text-slate-700">
                4.9/5 dari 100+ early users
              </span>
            </div>
            <div className="hidden h-6 w-px bg-slate-200 sm:block" />
            <p className="text-sm text-slate-600">
              <strong>Promo Rp 49.000</strong> untuk 100 buyer pertama
            </p>
          </div>
        </div>
      </section>

      {/* 4 PILLARS */}
      <section id="features" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {PILLAR_LIST.length} pillar marketing, {TOOLS.length} tool
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Dari menarik audience baru sampai retain buyer existing, plus
              copywriting e-commerce lengkap — kami bantu di setiap tahap.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PILLAR_LIST.map((p) => {
              const count = TOOLS.filter((t) => t.pillar === p.id).length;
              return (
                <div
                  key={p.id}
                  className={`rounded-xl border ${p.borderClass} ${p.bgClass} p-6`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="text-3xl">{p.emoji}</div>
                    <div>
                      <h3 className={`text-lg font-bold ${p.textClass}`}>
                        {p.label}
                      </h3>
                      <p className="text-xs font-medium text-slate-600">
                        {count} tool
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLAGSHIP TOOLS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              8 tool unggulan
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Tool yang paling banyak dipakai seller untuk hit milestone
              pertama.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FLAGSHIP_TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{tool.icon}</div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-600">{tool.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sekali bayar. Akses selamanya.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Tidak ada biaya bulanan. Tidak ada upgrade tier. Anda dapat semua 32
            tool plus update gratis 90 hari pertama.
          </p>

          <div className="mt-10 inline-block w-full max-w-md rounded-2xl border-2 border-brand-200 bg-white p-8 text-left shadow-lg">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
              🔥 Promo 100 buyer pertama
            </div>
            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-slate-900">
                Rp 49.000
              </span>
              <span className="text-base text-slate-400 line-through">
                Rp 99.000
              </span>
            </div>
            <p className="mb-6 text-sm text-slate-500">Akses lifetime</p>
            <ul className="mb-6 space-y-2.5 text-sm text-slate-700">
              {[
                "32 tool AI marketing siap pakai",
                "BYOK (Bring Your Own Key) — kontrol budget AI sendiri",
                "Update gratis 90 hari pertama",
                "Komunitas Telegram seller Indonesia",
                "100% Bahasa Indonesia, tanpa Inggris yang bikin pusing",
                "Garansi 7 hari money-back",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" fullWidth>
              <Link href={ROUTES.daftar}>Klaim Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-600 to-accent-600 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Siap untuk leveling up bisnis Anda?
          </h2>
          <p className="mt-4 text-base text-brand-100">
            Bergabung dengan 100+ seller yang sudah pakai Alextrix untuk hit
            milestone bisnis pertama mereka.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href={ROUTES.daftar}>
                Mulai Hari Ini
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
