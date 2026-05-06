"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/auth-store";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { ROUTES } from "@/lib/constants/routes";
import { LoadingSpinner } from "@/components/shared/loading-spinner";

export default function ActivationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hydrated = useHydrated();
  const router = useRouter();
  const user = useAuthStore((s) => s.user);

  useEffect(() => {
    if (hydrated && !user) {
      router.replace(ROUTES.masuk);
    }
  }, [hydrated, user, router]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-50 via-white to-accent-50">
        <LoadingSpinner size="lg" />
      </div>
    );
  }
  if (!user) return null;

  return <>{children}</>;
}
