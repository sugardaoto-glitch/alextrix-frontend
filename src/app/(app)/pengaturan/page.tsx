"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/stores/auth-store";
import { useHydrated } from "@/lib/hooks/use-hydrated";

export default function ProfilPage() {
  const hydrated = useHydrated();
  const user = useAuthStore((s) => s.user);
  const updateProfile = useAuthStore((s) => s.updateProfile);
  const [fullName, setFullName] = useState("");

  if (!hydrated) {
    return <div className="text-sm text-slate-500">Memuat...</div>;
  }

  if (!user) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        Anda belum login.
      </div>
    );
  }

  const displayName = fullName || user.fullName;

  const handleSave = () => {
    if (!fullName.trim()) {
      toast.error("Nama tidak boleh kosong.");
      return;
    }
    updateProfile({ fullName });
    toast.success("Profil tersimpan.");
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Profil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={user.email} disabled />
            <p className="text-xs text-slate-500">
              Email tidak bisa diubah. Hubungi support jika perlu ganti.
            </p>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="fullName">Nama lengkap</Label>
            <Input
              id="fullName"
              defaultValue={user.fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <Button onClick={handleSave}>Simpan</Button>
          <p className="text-xs text-slate-500">
            Halo {displayName} 👋, anggota sejak{" "}
            {new Date(user.createdAt).toLocaleDateString("id-ID")}.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Bahaya zone</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600">
            Hapus akun secara permanen. Semua data Pustaka, Riwayat, dan API
            key akan terhapus. Tindakan ini tidak bisa dibatalkan.
          </p>
          <Button
            variant="destructive"
            className="mt-3"
            onClick={() =>
              toast.info("Untuk menghapus akun, hubungi hello@alextrix.id")
            }
          >
            Hapus akun saya
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
