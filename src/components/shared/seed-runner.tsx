"use client";

import { useEffect } from "react";
import { useRiwayatStore } from "@/lib/stores/riwayat-store";
import { usePustakaStore } from "@/lib/stores/pustaka-store";
import { MOCK_RIWAYAT } from "@/data/mock-riwayat";
import { MOCK_PUSTAKA } from "@/data/mock-pustaka";

export function SeedRunner() {
  const riwayat = useRiwayatStore();
  const pustaka = usePustakaStore();

  useEffect(() => {
    if (riwayat.isHydrated && !riwayat.seeded) {
      riwayat.setRuns(MOCK_RIWAYAT);
      riwayat.setSeeded(true);
    }
  }, [riwayat.isHydrated, riwayat.seeded, riwayat]);

  useEffect(() => {
    if (pustaka.isHydrated && !pustaka.seeded) {
      pustaka.setItems(MOCK_PUSTAKA);
      pustaka.setSeeded(true);
    }
  }, [pustaka.isHydrated, pustaka.seeded, pustaka]);

  return null;
}
