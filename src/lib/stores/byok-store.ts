"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { verifyApiKey } from "@/lib/mocks/fake-byok";
import { maskKey } from "@/lib/utils/mask-key";
import type { ByokEntry, ProviderId } from "@/lib/types/tool";

interface ByokState {
  keys: Record<ProviderId, ByokEntry | null>;
  activeProvider: ProviderId | null;
  isHydrated: boolean;
  setHydrated: () => void;
  saveKey: (
    provider: ProviderId,
    rawKey: string,
    defaultModel: string,
    endpointUrl?: string,
  ) => Promise<{ status: "verified" | "invalid"; message: string }>;
  deleteKey: (provider: ProviderId) => void;
  verifyKey: (provider: ProviderId) => Promise<{ status: "verified" | "invalid"; message: string }>;
  setActiveProvider: (provider: ProviderId) => void;
}

const initialKeys: Record<ProviderId, ByokEntry | null> = {
  "nvidia-nim": null,
  openrouter: null,
  gemini: null,
  openai: null,
  "openai-compatible": null,
};

export const useByokStore = create<ByokState>()(
  persist(
    (set, get) => ({
      keys: initialKeys,
      activeProvider: null,
      isHydrated: false,
      setHydrated: () => set({ isHydrated: true }),

      saveKey: async (provider, rawKey, defaultModel, endpointUrl) => {
        const result = await verifyApiKey(provider, rawKey, defaultModel);
        const entry: ByokEntry = {
          provider,
          keyMasked: maskKey(rawKey),
          status: result.status,
          defaultModel,
          endpointUrl: provider === "openai-compatible" ? endpointUrl : undefined,
          lastVerifiedAt: new Date().toISOString(),
        };
        set((state) => {
          const newKeys = { ...state.keys, [provider]: entry };
          const newActive =
            result.status === "verified" && !state.activeProvider
              ? provider
              : state.activeProvider;
          return { keys: newKeys, activeProvider: newActive };
        });
        return { status: result.status, message: result.message };
      },

      deleteKey: (provider) => {
        set((state) => {
          const newKeys = { ...state.keys, [provider]: null };
          const newActive = state.activeProvider === provider ? null : state.activeProvider;
          return { keys: newKeys, activeProvider: newActive };
        });
      },

      verifyKey: async (provider) => {
        const entry = get().keys[provider];
        if (!entry) {
          return { status: "invalid", message: "Belum ada API key untuk provider ini." };
        }
        const result = await verifyApiKey(provider, "***", entry.defaultModel);
        set((state) => ({
          keys: {
            ...state.keys,
            [provider]: {
              ...entry,
              status: result.status,
              lastVerifiedAt: new Date().toISOString(),
            },
          },
        }));
        return { status: result.status, message: result.message };
      },

      setActiveProvider: (provider) => {
        const entry = get().keys[provider];
        if (!entry) {
          throw new Error("Belum ada API key untuk provider ini. Tambah dulu.");
        }
        set({ activeProvider: provider });
      },
    }),
    {
      name: "alextrix.byok",
      partialize: (state) => ({
        keys: state.keys,
        activeProvider: state.activeProvider,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
