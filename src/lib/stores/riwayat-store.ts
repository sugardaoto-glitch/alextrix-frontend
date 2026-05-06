"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import type { ToolRun } from "@/lib/types/tool";

interface RiwayatState {
  runs: ToolRun[];
  seeded: boolean;
  isHydrated: boolean;
  setHydrated: () => void;
  setSeeded: (seeded: boolean) => void;
  setRuns: (runs: ToolRun[]) => void;
  addRun: (run: Omit<ToolRun, "id" | "createdAt"> & { id?: string; createdAt?: string }) => ToolRun;
  deleteRun: (id: string) => void;
  toggleStar: (id: string) => void;
  getByTool: (toolId: string) => ToolRun[];
  getRecent: (limit: number) => ToolRun[];
  clear: () => void;
}

const MAX_RUNS = 200;

export const useRiwayatStore = create<RiwayatState>()(
  persist(
    (set, get) => ({
      runs: [],
      seeded: false,
      isHydrated: false,
      setHydrated: () => set({ isHydrated: true }),
      setSeeded: (seeded) => set({ seeded }),
      setRuns: (runs) => set({ runs }),

      addRun: (run) => {
        const newRun: ToolRun = {
          ...run,
          id: run.id ?? nanoid(),
          createdAt: run.createdAt ?? new Date().toISOString(),
        } as ToolRun;
        set((state) => {
          const next = [newRun, ...state.runs];
          if (next.length > MAX_RUNS) {
            const sorted = [...next].sort((a, b) => {
              if (a.starred !== b.starred) return a.starred ? 1 : -1;
              return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            });
            const toRemove = next.length - MAX_RUNS;
            const removeIds = new Set(sorted.slice(0, toRemove).map((r) => r.id));
            return { runs: next.filter((r) => !removeIds.has(r.id)) };
          }
          return { runs: next };
        });
        return newRun;
      },

      deleteRun: (id) => {
        set((state) => ({ runs: state.runs.filter((r) => r.id !== id) }));
      },

      toggleStar: (id) => {
        set((state) => ({
          runs: state.runs.map((r) => (r.id === id ? { ...r, starred: !r.starred } : r)),
        }));
      },

      getByTool: (toolId) => get().runs.filter((r) => r.toolId === toolId),
      getRecent: (limit) => get().runs.slice(0, limit),
      clear: () => set({ runs: [] }),
    }),
    {
      name: "alextrix.riwayat",
      partialize: (state) => ({
        runs: state.runs,
        seeded: state.seeded,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
