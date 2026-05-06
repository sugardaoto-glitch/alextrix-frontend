"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema, type LoginInput } from "@/lib/validators/auth";
import { useAuthStore } from "@/lib/stores/auth-store";
import { useLicenseStore } from "@/lib/stores/license-store";
import { ROUTES } from "@/lib/constants/routes";

export default function MasukPage() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const isOnboarded = useAuthStore((s) => s.isOnboarded);
  const license = useLicenseStore((s) => s.license);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginInput) => {
    setSubmitting(true);
    try {
      await login(data.email, data.password);
      toast.success("Berhasil masuk. Selamat datang kembali!");
      if (!license) {
        router.push(ROUTES.aktivasi);
      } else if (!isOnboarded) {
        router.push(ROUTES.onboarding);
      } else {
        router.push(ROUTES.dashboard);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal masuk");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Masuk ke Alextrix</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="anda@email.com"
              autoComplete="email"
              {...register("email")}
              invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-xs text-rose-600">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href={ROUTES.lupaPassword}
                className="text-xs text-brand-600 hover:underline"
              >
                Lupa password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register("password")}
              invalid={!!errors.password}
            />
            {errors.password && (
              <p className="text-xs text-rose-600">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" loading={submitting} fullWidth>
            Masuk
          </Button>

          <p className="text-center text-sm text-slate-600">
            Belum punya akun?{" "}
            <Link
              href={ROUTES.daftar}
              className="font-medium text-brand-600 hover:underline"
            >
              Daftar di sini
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
