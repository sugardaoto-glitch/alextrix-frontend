"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/stores/auth-store";
import { ROUTES } from "@/lib/constants/routes";
import { toast } from "sonner";

export default function KonfirmasiEmailPage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const resend = useAuthStore((s) => s.resendConfirmation);
  const confirmEmail = useAuthStore((s) => s.confirmEmail);
  const [resending, setResending] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const handleResend = async () => {
    if (!user) return;
    setResending(true);
    try {
      await resend(user.email);
      toast.success("Email konfirmasi terkirim ulang.");
    } catch {
      toast.error("Gagal mengirim ulang. Coba lagi.");
    } finally {
      setResending(false);
    }
  };

  const handleConfirm = async () => {
    setConfirming(true);
    try {
      await confirmEmail("demo-token");
      toast.success("Email berhasil dikonfirmasi! Lanjut aktivasi lisensi.");
      router.push(ROUTES.aktivasi);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal konfirmasi");
    } finally {
      setConfirming(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <Mail className="h-6 w-6" />
        </div>
        <CardTitle>Cek email Anda</CardTitle>
        <CardDescription>
          Kami sudah kirim link konfirmasi ke{" "}
          <strong>{user?.email ?? "email Anda"}</strong>. Klik link di email
          untuk mengaktifkan akun.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button onClick={handleConfirm} loading={confirming} fullWidth>
          Saya sudah konfirmasi
        </Button>
        <Button
          variant="outline"
          onClick={handleResend}
          loading={resending}
          fullWidth
        >
          Kirim ulang email konfirmasi
        </Button>
        <p className="pt-2 text-center text-xs text-slate-500">
          Tidak ketemu email? Cek folder Spam atau Promosi.{" "}
          <Link
            href={ROUTES.aktivasi}
            className="text-brand-600 hover:underline"
          >
            Lewati untuk sekarang
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
