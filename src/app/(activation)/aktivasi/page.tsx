"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Sparkles, KeyRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { licenseSchema, type LicenseInput } from "@/lib/validators/license";
import { useLicenseStore } from "@/lib/stores/license-store";
import { useAuthStore } from "@/lib/stores/auth-store";
import { ROUTES } from "@/lib/constants/routes";

export default function AktivasiPage() {
  const router = useRouter();
  const activate = useLicenseStore((s) => s.activateLicense);
  const isOnboarded = useAuthStore((s) => s.isOnboarded);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LicenseInput>({
    resolver: zodResolver(licenseSchema),
  });

  const onSubmit = async (data: LicenseInput) => {
    setSubmitting(true);
    try {
      await activate(data.code);
      toast.success("Lisensi berhasil diaktifkan! Selamat datang di Alextrix.");
      router.push(isOnboarded ? ROUTES.dashboard : ROUTES.onboarding);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Aktivasi gagal");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-brand-50 via-white to-accent-50">
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <Link href={ROUTES.landing} className="inline-flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-base font-bold tracking-tight">Alextrix</span>
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <KeyRound className="h-6 w-6" />
              </div>
              <CardTitle>Aktivasi lisensi Anda</CardTitle>
              <CardDescription>
                Masukkan kode lisensi yang Anda terima setelah pembelian via
                Lynk.id atau pesan WhatsApp dari kami.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="code">Kode lisensi</Label>
                  <Input
                    id="code"
                    placeholder="ALEX-LIFE-XXXXX-XXXXX-XXXXX-XXXXXXXX"
                    {...register("code")}
                    invalid={!!errors.code}
                    autoComplete="off"
                    autoCapitalize="characters"
                    className="font-mono uppercase"
                  />
                  {errors.code && (
                    <p className="text-xs text-rose-600">{errors.code.message}</p>
                  )}
                </div>

                <Alert>
                  <AlertDescription className="text-xs">
                    Kode lisensi diawali <code className="font-mono">ALEX-LIFE-</code> dan
                    panjang 38 karakter. Cek email atau pesan WA dari kami.
                  </AlertDescription>
                </Alert>

                <Button type="submit" loading={submitting} fullWidth>
                  Aktivasi
                </Button>

                <p className="text-center text-xs text-slate-500">
                  Belum beli? Klik{" "}
                  <Link
                    href={ROUTES.pricing}
                    className="font-medium text-brand-600 hover:underline"
                  >
                    sini untuk lihat harga
                  </Link>
                  .
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
