"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import {
  onboardingSchema,
  type OnboardingInput,
} from "@/lib/validators/onboarding";
import { useAuthStore } from "@/lib/stores/auth-store";
import { ROUTES } from "@/lib/constants/routes";

const STEPS = ["Tipe seller", "Niche & target", "Goal 30 hari"];

export default function OnboardingPage() {
  const router = useRouter();
  const completeOnboarding = useAuthStore((s) => s.completeOnboarding);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<OnboardingInput>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      sellerType: "pemula",
      goal30Days: "find_niche",
    },
  });

  const sellerType = watch("sellerType");
  const goal30Days = watch("goal30Days");

  const handleNext = async () => {
    let valid = false;
    if (step === 0) valid = await trigger(["sellerType", "lynkUsername"]);
    else if (step === 1) valid = await trigger(["niche", "targetAudience"]);
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const onSubmit = async (data: OnboardingInput) => {
    setSubmitting(true);
    try {
      completeOnboarding(data);
      toast.success("Selamat datang di Alextrix! Mari mulai eksplorasi.");
      router.push(ROUTES.dashboard);
    } finally {
      setSubmitting(false);
    }
  };

  const progress = ((step + 1) / STEPS.length) * 100;

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
        <div className="w-full max-w-lg">
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
              <span>
                Langkah {step + 1} dari {STEPS.length}
              </span>
              <span>{STEPS[step]}</span>
            </div>
            <Progress value={progress} />
          </div>

          <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 0 && (
                <>
                  <CardHeader>
                    <CardTitle>Mana yang lebih cocok?</CardTitle>
                    <CardDescription>
                      Bantu kami sesuaikan rekomendasi tool untuk Anda.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <RadioGroup
                      value={sellerType}
                      onValueChange={(v) =>
                        setValue("sellerType", v as "pemula" | "experienced")
                      }
                      className="space-y-2"
                    >
                      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-4 hover:bg-slate-50">
                        <RadioGroupItem value="pemula" className="mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold">
                            Saya pemula
                          </div>
                          <div className="text-xs text-slate-600">
                            Belum punya produk yang konsisten penjualannya, atau
                            baru mau mulai jualan online.
                          </div>
                        </div>
                      </label>
                      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-4 hover:bg-slate-50">
                        <RadioGroupItem value="experienced" className="mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold">
                            Saya sudah jualan
                          </div>
                          <div className="text-xs text-slate-600">
                            Punya produk yang sudah laku, mau scale up dengan
                            tool yang lebih efisien.
                          </div>
                        </div>
                      </label>
                    </RadioGroup>

                    <div className="space-y-1.5">
                      <Label htmlFor="lynkUsername">
                        Username Lynk.id (opsional)
                      </Label>
                      <Input
                        id="lynkUsername"
                        placeholder="namaanda"
                        {...register("lynkUsername")}
                      />
                      <p className="text-xs text-slate-500">
                        Nanti akan kami gunakan untuk import produk Anda
                        otomatis (di update mendatang).
                      </p>
                    </div>
                  </CardContent>
                </>
              )}

              {step === 1 && (
                <>
                  <CardHeader>
                    <CardTitle>Niche & target audience</CardTitle>
                    <CardDescription>
                      Cerita singkat tentang produk Anda. Tidak harus sempurna.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="niche">Niche / kategori produk</Label>
                      <Input
                        id="niche"
                        placeholder="Contoh: parenting, MPASI, productivity, fashion muslim"
                        {...register("niche")}
                        invalid={!!errors.niche}
                      />
                      {errors.niche && (
                        <p className="text-xs text-rose-600">
                          {errors.niche.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="targetAudience">
                        Target audience Anda
                      </Label>
                      <Textarea
                        id="targetAudience"
                        rows={4}
                        placeholder="Contoh: ibu muda 25-35 tahun di Jakarta yang baru punya bayi, ingin MPASI praktis tapi tetap sehat."
                        {...register("targetAudience")}
                        invalid={!!errors.targetAudience}
                      />
                      {errors.targetAudience && (
                        <p className="text-xs text-rose-600">
                          {errors.targetAudience.message}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </>
              )}

              {step === 2 && (
                <>
                  <CardHeader>
                    <CardTitle>Goal 30 hari ke depan</CardTitle>
                    <CardDescription>
                      Pilih satu fokus utama. Bisa diubah nanti.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup
                      value={goal30Days}
                      onValueChange={(v) =>
                        setValue("goal30Days", v as OnboardingInput["goal30Days"])
                      }
                      className="space-y-2"
                    >
                      {[
                        { v: "find_niche", l: "Cari niche dulu", d: "Belum punya ide produk yang jelas." },
                        { v: "build_first_product", l: "Bangun produk pertama", d: "Sudah punya niche, mau bikin produk." },
                        { v: "increase_conversion", l: "Naikkan konversi LP", d: "Sudah ada traffic, mau lebih banyak yang beli." },
                        { v: "retain_buyers", l: "Repeat order buyer existing", d: "Punya buyer, mau mereka beli lagi." },
                        { v: "optimize", l: "Optimize all-around", d: "Audit & perbaiki yang sudah jalan." },
                      ].map((opt) => (
                        <label
                          key={opt.v}
                          className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-4 hover:bg-slate-50"
                        >
                          <RadioGroupItem value={opt.v} className="mt-0.5" />
                          <div>
                            <div className="text-sm font-semibold">{opt.l}</div>
                            <div className="text-xs text-slate-600">{opt.d}</div>
                          </div>
                        </label>
                      ))}
                    </RadioGroup>

                    <div className="space-y-1.5">
                      <Label htmlFor="notes">Catatan tambahan (opsional)</Label>
                      <Textarea
                        id="notes"
                        rows={3}
                        placeholder="Bagikan tantangan terbesar Anda saat ini..."
                        {...register("notes")}
                      />
                    </div>
                  </CardContent>
                </>
              )}

              <CardContent className="flex items-center justify-between border-t border-slate-100 pt-4">
                {step > 0 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep((s) => s - 1)}
                  >
                    Kembali
                  </Button>
                ) : (
                  <span />
                )}
                {step < STEPS.length - 1 ? (
                  <Button type="button" onClick={handleNext}>
                    Lanjut
                  </Button>
                ) : (
                  <Button type="submit" loading={submitting}>
                    Mulai pakai Alextrix
                  </Button>
                )}
              </CardContent>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
}
