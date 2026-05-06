"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  ACTIVATION_ERROR_MESSAGES,
  validateLicenseCode,
} from "@/lib/mocks/fake-license";
import { PRICING } from "@/lib/constants/pricing";
import type { License } from "@/lib/types/license";

interface LicenseState {
  license: License | null;
  promoBuyersCount: number;
  isHydrated: boolean;
  setHydrated: () => void;
  activateLicense: (code: string) => Promise<void>;
  getDaysRemaining: () => number;
  incrementPromoCounter: () => void;
  reset: () => void;
}

export const useLicenseStore = create<LicenseState>()(
  persist(
    (set, get) => ({
      license: null,
      promoBuyersCount: 27,
      isHydrated: false,
      setHydrated: () => set({ isHydrated: true }),

      activateLicense: async (code) => {
        const result = await validateLicenseCode(code);
        if (!result.valid) {
          throw new Error(ACTIVATION_ERROR_MESSAGES[result.error]);
        }
        const now = new Date();
        const expiresAt = new Date(now);
        expiresAt.setDate(expiresAt.getDate() + PRICING.updateWindowDays);
        const license: License = {
          code: code.trim().toUpperCase(),
          status: "active",
          activatedAt: now.toISOString(),
          updateWindowExpiresAt: expiresAt.toISOString(),
          purchasePriceIDR: result.priceIDR,
        };
        set({ license });
        get().incrementPromoCounter();
      },

      getDaysRemaining: () => {
        const license = get().license;
        if (!license) return 0;
        const now = new Date();
        const expiresAt = new Date(license.updateWindowExpiresAt);
        const diffMs = expiresAt.getTime() - now.getTime();
        return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      },

      incrementPromoCounter: () => {
        const next = Math.min(get().promoBuyersCount + 1, PRICING.promoMaxBuyers);
        set({ promoBuyersCount: next });
      },

      reset: () => set({ license: null }),
    }),
    {
      name: "alextrix.license",
      partialize: (state) => ({
        license: state.license,
        promoBuyersCount: state.promoBuyersCount,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);

export function getCurrentPriceIDR(promoActive: boolean): number {
  return promoActive ? PRICING.promoPriceIDR : PRICING.regularPriceIDR;
}

export function isPromoActive(promoBuyersCount: number): boolean {
  return promoBuyersCount < PRICING.promoMaxBuyers;
}
