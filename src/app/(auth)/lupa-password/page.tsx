"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
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
import {
  forgotPasswordSchema,
  type ForgotPasswordInput,
} from "@/lib/validators/auth";
import { useAuthStore } from "@/lib/stores/auth-store";
import { ROUTES } from "@/lib/constants/routes";

export default function LupaPasswordPage() {
  const requestReset = useAuthStore((s) => s.requestPasswordReset);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({ resolver: zodResolver(forgotPasswordSchema) });

  const onSubmit = async (data: ForgotPasswordInput) => {
    setSubmitting(true);
    try {
      await requestReset(data.email);
      setSent(true);
      toast.success("Link reset terkirim. Cek inbox email Anda.");
    } catch {
      toast.error("Gagal mengirim link. Coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Cek email Anda</CardTitle>
          <CardDescription>
            Kami sudah kirim link reset password ke email Anda. Klik link
            tersebut untuk membuat password baru.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600">
            Belum dapat email? Cek folder spam atau{" "}
            <button
              onClick={() => setSent(false)}
              className="font-medium text-brand-600 hover:underline"
            >
              kirim ulang
            </button>
            .
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lupa password?</CardTitle>
        <CardDescription>
          Masukkan email Anda. Kami akan kirim link reset.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="anda@email.com"
              {...register("email")}
              invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-xs text-rose-600">{errors.email.message}</p>
            )}
          </div>

          <Button type="submit" loading={submitting} fullWidth>
            Kirim Link Reset
          </Button>

          <p className="text-center text-sm text-slate-600">
            Ingat password Anda?{" "}
            <Link
              href={ROUTES.masuk}
              className="font-medium text-brand-600 hover:underline"
            >
              Masuk
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
