"use client";

import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { CheckCircle2, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLicenseStore } from "@/lib/stores/license-store";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { formatIDR } from "@/lib/utils/format-currency";

export default function TagihanPage() {
  const hydrated = useHydrated();
  const license = useLicenseStore((s) => s.license);
  const getDaysRemaining = useLicenseStore((s) => s.getDaysRemaining);

  if (!hydrated) {
    return <div className="text-sm text-slate-500">Memuat...</div>;
  }

  if (!license) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        Belum ada lisensi aktif. Aktivasi dulu di halaman Aktivasi.
      </div>
    );
  }

  const days = getDaysRemaining();

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            Lisensi Aktif
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Kode Lisensi
              </div>
              <div className="mt-1 font-mono text-sm text-slate-900">
                {license.code}
              </div>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Status
              </div>
              <Badge variant="success" className="mt-1">
                {license.status === "active" ? "Aktif" : license.status}
              </Badge>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Aktivasi
              </div>
              <div className="mt-1 text-sm text-slate-900">
                {format(new Date(license.activatedAt), "d MMMM yyyy", {
                  locale: idLocale,
                })}
              </div>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Harga
              </div>
              <div className="mt-1 text-sm text-slate-900">
                {formatIDR(license.purchasePriceIDR)}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Calendar className="h-4 w-4" />
              Window update
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">
                {Math.max(0, days)}
              </span>
              <span className="text-sm text-slate-500">hari tersisa</span>
            </div>
            <div className="mt-1 text-xs text-slate-500">
              Berakhir{" "}
              {format(new Date(license.updateWindowExpiresAt), "d MMMM yyyy", {
                locale: idLocale,
              })}
              . Setelah itu, Anda tetap bisa pakai semua tool tapi tidak dapat
              update fitur baru.
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tentang Akses Selamanya</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-slate-600">
          <p>
            Pembelian Anda termasuk akses semua tool selamanya. Tidak ada
            biaya bulanan, tidak ada upgrade tier.
          </p>
          <p>
            Window update 90 hari memungkinkan Anda dapat fitur baru gratis.
            Setelah itu, perpanjangan akses update tersedia opsional.
          </p>
          <p className="text-xs italic text-slate-500">
            Pertanyaan? Hubungi hello@alextrix.id atau Telegram support.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
