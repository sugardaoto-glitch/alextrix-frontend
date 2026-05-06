"use client";

import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { useLicenseStore } from "@/lib/stores/license-store";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { ROUTES } from "@/lib/constants/routes";

export function LicenseBanner() {
  const hydrated = useHydrated();
  const license = useLicenseStore((s) => s.license);
  const getDaysRemaining = useLicenseStore((s) => s.getDaysRemaining);

  if (!hydrated) return null;
  if (!license) return null;

  const days = getDaysRemaining();
  if (days > 14) return null;

  if (days <= 0) {
    return (
      <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-xs text-amber-800">
        <AlertCircle className="mr-1 inline h-3.5 w-3.5" />
        Window update Anda sudah habis. Anda tetap bisa menggunakan tool, tapi
        tidak akan dapat update baru.{" "}
        <Link
          href={ROUTES.pengaturanTagihan}
          className="font-medium underline underline-offset-2"
        >
          Detail
        </Link>
      </div>
    );
  }

  return (
    <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-xs text-amber-800">
      <AlertCircle className="mr-1 inline h-3.5 w-3.5" />
      Window update Anda berakhir dalam <strong>{days} hari</strong>. Setelah
      itu, Anda masih bisa pakai tool tapi tidak dapat update baru.
    </div>
  );
}
