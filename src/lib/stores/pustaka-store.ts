"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import type { PustakaItem, PustakaItemType } from "@/lib/types/tool";

interface PustakaState {
  items: PustakaItem[];
  seeded: boolean;
  isHydrated: boolean;
  setHydrated: () => void;
  setSeeded: (seeded: boolean) => void;
  setItems: (items: PustakaItem[]) => void;
  addItem: (item: Omit<PustakaItem, "id" | "createdAt"> & { id?: string }) => PustakaItem;
  deleteItem: (id: string) => void;
  updateItem: (id: string, patch: Partial<PustakaItem>) => void;
  getByType: (type: PustakaItemType) => PustakaItem[];
  getByTag: (tag: string) => PustakaItem[];
  searchByTitle: (query: string) => PustakaItem[];
  clear: () => void;
}

export const usePustakaStore = create<PustakaState>()(
  persist(
    (set, get) => ({
      items: [],
      seeded: false,
      isHydrated: false,
      setHydrated: () => set({ isHydrated: true }),
      setSeeded: (seeded) => set({ seeded }),
      setItems: (items) => set({ items }),

      addItem: (item) => {
        const newItem: PustakaItem = {
          ...item,
          id: item.id ?? nanoid(),
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ items: [newItem, ...state.items] }));
        return newItem;
      },

      deleteItem: (id) => {
        set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
      },

      updateItem: (id, patch) => {
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, ...patch } : i)),
        }));
      },

      getByType: (type) => get().items.filter((i) => i.type === type),
      getByTag: (tag) => get().items.filter((i) => i.tags.includes(tag)),
      searchByTitle: (query) =>
        get().items.filter((i) => i.title.toLowerCase().includes(query.toLowerCase())),

      clear: () => set({ items: [] }),
    }),
    {
      name: "alextrix.pustaka",
      partialize: (state) => ({
        items: state.items,
        seeded: state.seeded,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
