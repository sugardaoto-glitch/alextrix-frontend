import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants/routes";
import { PRICING } from "@/lib/constants/pricing";
import { formatIDR } from "@/lib/utils/format-currency";

export const metadata = {
  title: "Harga",
  description: "Sekali bayar, akses selamanya. Rp 49.000 untuk 100 buyer pertama.",
};

export default function PricingPage() {
  const features = [
    "32 tool AI marketing",
    "Block Library 30+ HTML siap copy ke Lynk.id",
    "Output 100% Bahasa Indonesia",
    "BYOK: pakai kunci API Anda (OpenAI, Gemini, OpenRouter, NVIDIA NIM)",
    "Update gratis 90 hari pertama",
    "Pustaka pribadi untuk simpan hasil",
    "Riwayat semua tool dijalankan",
    "Akses komunitas Telegram",
    "Ramah seluler (bisa pakai di HP)",
    "Garansi 7 hari uang kembali",
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Sekali bayar. Akses selamanya.
        </h1>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Tidak ada biaya bulanan. Tidak ada tier upgrade yang bikin pusing.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* PROMO TIER */}
        <div className="relative rounded-2xl border-2 border-brand-200 bg-white p-8 shadow-lg">
          <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
            <Zap className="h-3 w-3" />
            PROMO TERBATAS
          </div>
          <h2 className="text-lg font-semibold text-slate-900">Harga Perdana</h2>
          <p className="mt-1 text-xs text-slate-500">
            Untuk 100 buyer pertama
          </p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-bold text-slate-900">
              {formatIDR(PRICING.promoPriceIDR)}
            </span>
            <span className="text-base text-slate-400 line-through">
              {formatIDR(PRICING.regularPriceIDR)}
            </span>
          </div>
          <p className="mt-2 text-sm text-emerald-600">
            Hemat {formatIDR(PRICING.regularPriceIDR - PRICING.promoPriceIDR)} ✨
          </p>

          <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" fullWidth className="mt-8">
            <Link href={ROUTES.daftar}>Klaim Promo Sekarang</Link>
          </Button>
          <p className="mt-3 text-center text-xs text-slate-500">
            Pembayaran via Lynk.id, transfer bank, e-wallet
          </p>
        </div>

        {/* REGULAR TIER */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-lg font-semibold text-slate-900">Reguler</h2>
          <p className="mt-1 text-xs text-slate-500">Setelah 100 buyer pertama</p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-bold text-slate-900">
              {formatIDR(PRICING.regularPriceIDR)}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-500">Akses selamanya</p>

          <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" variant="outline" fullWidth className="mt-8">
            <Link href={ROUTES.daftar}>Daftar Reguler</Link>
          </Button>
        </div>
      </div>

      {/* FAQ TEASER */}
      <div className="mt-16 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-slate-900">
          Pertanyaan yang sering ditanyakan
        </h3>
        <div className="mt-4 space-y-4 text-sm text-slate-700">
          <div>
            <p className="font-medium text-slate-900">Benar selamanya?</p>
            <p className="mt-1 text-slate-600">
              Benar. Bayar sekali, akses selamanya. Update gratis 90 hari
              pertama.
            </p>
          </div>
          <div>
            <p className="font-medium text-slate-900">
              Apakah saya perlu API key sendiri?
            </p>
            <p className="mt-1 text-slate-600">
              Ya. Anda pakai BYOK (Bawa Kunci API Sendiri) — kontrol biaya & data
              sendiri.
            </p>
          </div>
          <div>
            <p className="font-medium text-slate-900">Bisa refund?</p>
            <p className="mt-1 text-slate-600">
              Ya, garansi 7 hari uang kembali. Hubungi kami dan kami akan kembalikan
              100%.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Button asChild variant="link">
            <Link href={ROUTES.faq}>Lihat semua FAQ →</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
