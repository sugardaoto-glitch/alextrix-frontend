import Link from "next/link";
import { MessageCircle, Users, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";

export const metadata = { title: "Komunitas" };

export default function KomunitasPage() {
  return (
    <div>
      <PageHeader
        title="Komunitas"
        description="Tempat ngumpul seller Lynk.id Indonesia. Tanya, share, dapat insight."
      />

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-6 sm:p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Telegram Group: Alextrix Sellers ID
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Bergabung dengan 100+ seller yang sudah pakai Alextrix. Kami share
              tips marketing, update produk baru, dan answer pertanyaan
              langsung.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <Users className="mx-auto mb-2 h-5 w-5 text-slate-500" />
                <div className="text-lg font-bold text-slate-900">100+</div>
                <div className="text-xs text-slate-500">Anggota</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <Heart className="mx-auto mb-2 h-5 w-5 text-slate-500" />
                <div className="text-lg font-bold text-slate-900">24/7</div>
                <div className="text-xs text-slate-500">Aktif</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <MessageCircle className="mx-auto mb-2 h-5 w-5 text-slate-500" />
                <div className="text-lg font-bold text-slate-900">Free</div>
                <div className="text-xs text-slate-500">Untuk member</div>
              </div>
            </div>

            <Button asChild fullWidth size="lg" className="mt-6">
              <a
                href="https://t.me/alextrix_id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Buka Telegram Group
              </a>
            </Button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Hanya untuk member Alextrix. Verifikasi di{" "}
              <Link
                href="/pengaturan/komunitas"
                className="font-medium text-brand-600 hover:underline"
              >
                pengaturan
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="mb-3 text-base font-semibold text-slate-900">
              Yang akan Anda dapat di komunitas
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✅ Update produk baru sebelum public release</li>
              <li>✅ Sharing case study seller lain</li>
              <li>
                ✅ Q&A langsung dengan tim Alextrix dan seller experienced
              </li>
              <li>✅ Free coaching session bulanan</li>
              <li>✅ Diskon eksklusif untuk tools/services partner</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
