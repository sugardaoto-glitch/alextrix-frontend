import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ROUTES } from "@/lib/constants/routes";

export function MarketingFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href={ROUTES.landing} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-base font-bold tracking-tight">
                Alextrix
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-600">
              40+ tool AI marketing untuk seller di Lynk.id Indonesia. Sekali
              bayar, akses selamanya.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-slate-900">Produk</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href={ROUTES.pricing} className="hover:text-slate-900">
                  Harga
                </Link>
              </li>
              <li>
                <Link href={ROUTES.faq} className="hover:text-slate-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={ROUTES.daftar} className="hover:text-slate-900">
                  Daftar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-slate-900">Hukum</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href={ROUTES.privasi} className="hover:text-slate-900">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href={ROUTES.ketentuan} className="hover:text-slate-900">
                  Ketentuan Layanan
                </Link>
              </li>
              <li>
                <Link href={ROUTES.refund} className="hover:text-slate-900">
                  Kebijakan Refund
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-slate-900">
              Kontak
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>📧 hello@alextrix.id</li>
              <li>💬 Telegram Komunitas</li>
              <li>📱 WhatsApp Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © 2026 Alextrix. Dibuat untuk seller Indonesia 🇮🇩
        </div>
      </div>
    </footer>
  );
}
