"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { signupSchema, type SignupInput } from "@/lib/validators/auth";
import { useAuthStore } from "@/lib/stores/auth-store";
import { ROUTES } from "@/lib/constants/routes";

export default function DaftarPage() {
  const router = useRouter();
  const signup = useAuthStore((s) => s.signup);
  const login = useAuthStore((s) => s.login);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: { agreeTerms: false as unknown as true },
  });

  const onSubmit = async (data: SignupInput) => {
    setSubmitting(true);
    try {
      await signup(data.email, data.password, data.fullName);
      await login(data.email, data.password);
      toast.success("Akun berhasil dibuat. Cek email untuk konfirmasi.");
      router.push(ROUTES.konfirmasiEmail);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Gagal mendaftar");
    } finally {
      setSubmitting(false);
    }
  };

  const agreeTerms = watch("agreeTerms");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Buat akun Alextrix</CardTitle>
        <CardDescription>
          Sekali bayar, akses 32 tool selamanya.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="fullName">Nama lengkap</Label>
            <Input
              id="fullName"
              placeholder="Nama Anda"
              {...register("fullName")}
              invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <p className="text-xs text-rose-600">{errors.fullName.message}</p>
            )}
          </div>

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
            <Label htmlFor="password">Password (min. 8 karakter)</Label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              {...register("password")}
              invalid={!!errors.password}
            />
            {errors.password && (
              <p className="text-xs text-rose-600">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="confirmPassword">Konfirmasi password</Label>
            <Input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              {...register("confirmPassword")}
              invalid={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-rose-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="agreeTerms"
              checked={!!agreeTerms}
              onCheckedChange={(c) => setValue("agreeTerms", c === true ? true : (false as unknown as true))}
            />
            <label htmlFor="agreeTerms" className="text-xs text-slate-600">
              Saya setuju dengan{" "}
              <Link
                href={ROUTES.ketentuan}
                className="text-brand-600 hover:underline"
              >
                Ketentuan Layanan
              </Link>{" "}
              dan{" "}
              <Link
                href={ROUTES.privasi}
                className="text-brand-600 hover:underline"
              >
                Kebijakan Privasi
              </Link>
              .
            </label>
          </div>
          {errors.agreeTerms && (
            <p className="text-xs text-rose-600">{errors.agreeTerms.message}</p>
          )}

          <Button type="submit" loading={submitting} fullWidth>
            Daftar Sekarang
          </Button>

          <p className="text-center text-sm text-slate-600">
            Sudah punya akun?{" "}
            <Link
              href={ROUTES.masuk}
              className="font-medium text-brand-600 hover:underline"
            >
              Masuk di sini
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
