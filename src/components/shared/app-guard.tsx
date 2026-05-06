"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/lib/stores/auth-store";
import { useLicenseStore } from "@/lib/stores/license-store";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { ROUTES } from "@/lib/constants/routes";
import { LoadingSpinner } from "@/components/shared/loading-spinner";

interface AppGuardProps {
  children: React.ReactNode;
}

export function AppGuard({ children }: AppGuardProps) {
  const hydrated = useHydrated();
  const router = useRouter();
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const isOnboarded = useAuthStore((s) => s.isOnboarded);
  const license = useLicenseStore((s) => s.license);

  useEffect(() => {
    if (!hydrated) return;

    if (!user) {
      router.replace(`${ROUTES.masuk}?next=${encodeURIComponent(pathname ?? "/dashboard")}`);
      return;
    }

    if (pathname?.startsWith("/aktivasi")) return;
    if (pathname?.startsWith("/onboarding")) return;

    if (!license) {
      router.replace(ROUTES.aktivasi);
      return;
    }
    if (!isOnboarded) {
      router.replace(ROUTES.onboarding);
      return;
    }
  }, [hydrated, user, license, isOnboarded, pathname, router]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!user) return null;
  if (
    !pathname?.startsWith("/aktivasi") &&
    !pathname?.startsWith("/onboarding") &&
    (!license || !isOnboarded)
  ) {
    return null;
  }

  return <>{children}</>;
}
