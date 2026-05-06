"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Trash2, RefreshCcw, ExternalLink, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { useByokStore } from "@/lib/stores/byok-store";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { PROVIDERS, getProvider } from "@/lib/constants/providers";
import type { ProviderId } from "@/lib/types/tool";

export default function ApiKeyPage() {
  const hydrated = useHydrated();
  const keys = useByokStore((s) => s.keys);
  const activeProvider = useByokStore((s) => s.activeProvider);
  const setActive = useByokStore((s) => s.setActiveProvider);
  const saveKey = useByokStore((s) => s.saveKey);
  const deleteKey = useByokStore((s) => s.deleteKey);
  const verifyKey = useByokStore((s) => s.verifyKey);

  const [openProvider, setOpenProvider] = useState<ProviderId | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<ProviderId | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <div className="rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900">
        <strong>BYOK (Bawa Kunci API Sendiri)</strong>: Alextrix menggunakan kunci API
        Anda sendiri untuk akses model AI. Biaya pemakaian token = tanggung jawab
        Anda. Kunci Anda tersimpan terenkripsi di akun Anda.
      </div>

      {hydrated &&
        PROVIDERS.map((p) => {
          const entry = keys[p.id];
          return (
            <Card key={p.id}>
              <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{p.logoEmoji}</div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {p.name}
                      </h3>
                      {entry && (
                        <Badge
                          variant={
                            entry.status === "verified"
                              ? "success"
                              : entry.status === "invalid"
                                ? "destructive"
                                : "secondary"
                          }
                          className="text-[10px]"
                        >
                          {entry.status === "verified"
                            ? "Terverifikasi"
                            : entry.status === "invalid"
                              ? "Tidak Valid"
                              : "Belum diverifikasi"}
                        </Badge>
                      )}
                      {activeProvider === p.id && (
                        <Badge className="text-[10px]">Aktif</Badge>
                      )}
                    </div>
                    {entry ? (
                      <div className="mt-1 text-xs text-slate-500">
                        Kunci: <code className="font-mono">{entry.keyMasked}</code> ·
                        Model bawaan: <code>{entry.defaultModel}</code>
                      </div>
                    ) : (
                      <p className="mt-1 text-xs text-slate-500">{p.helpText}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-shrink-0 flex-wrap gap-2">
                  {!entry ? (
                    <Button
                      size="sm"
                      onClick={() => setOpenProvider(p.id)}
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Tambah Kunci
                    </Button>
                  ) : (
                    <>
                      {activeProvider !== p.id && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            try {
                              setActive(p.id);
                              toast.success(`${p.name} diset sebagai aktif.`);
                            } catch (err) {
                              toast.error(
                                err instanceof Error ? err.message : "Gagal",
                              );
                            }
                          }}
                        >
                          Jadikan aktif
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={async () => {
                          const res = await verifyKey(p.id);
                          if (res.status === "verified") toast.success(res.message);
                          else toast.error(res.message);
                        }}
                      >
                        <RefreshCcw className="h-3.5 w-3.5" />
                        Verifikasi
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setConfirmDelete(p.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </>
                  )}
                  <Button asChild size="sm" variant="ghost">
                    <a href={p.signupUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}

      <AddKeyDialog
        provider={openProvider}
        onClose={() => setOpenProvider(null)}
        onSave={async (raw, model, endpoint) => {
          if (!openProvider) return;
          const result = await saveKey(openProvider, raw, model, endpoint);
          if (result.status === "verified") {
            toast.success(`${result.message} ${getProvider(openProvider).name} aktif.`);
          } else {
            toast.error(result.message);
          }
          setOpenProvider(null);
        }}
      />

      <ConfirmDialog
        open={!!confirmDelete}
        onOpenChange={(o) => !o && setConfirmDelete(null)}
        title="Hapus kunci API?"
        description="Kunci akan dihapus dari akun Anda. Anda bisa tambahkan lagi nanti."
        variant="destructive"
        confirmLabel="Hapus kunci"
        onConfirm={() => {
          if (confirmDelete) {
            deleteKey(confirmDelete);
            toast.success("Kunci API dihapus.");
          }
          setConfirmDelete(null);
        }}
      />
    </div>
  );
}

function AddKeyDialog({
  provider,
  onClose,
  onSave,
}: {
  provider: ProviderId | null;
  onClose: () => void;
  onSave: (rawKey: string, model: string, endpoint?: string) => Promise<void>;
}) {
  const [rawKey, setRawKey] = useState("");
  const [model, setModel] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [saving, setSaving] = useState(false);

  const config = provider ? getProvider(provider) : null;

  const handleSave = async () => {
    if (!rawKey || !model || (config?.needsEndpoint && !endpoint)) {
      return;
    }
    setSaving(true);
    try {
      await onSave(rawKey, model, endpoint);
      setRawKey("");
      setModel("");
      setEndpoint("");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={!!provider} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        {config && (
          <>
            <DialogHeader>
              <DialogTitle>
                {config.logoEmoji} Tambah Kunci API {config.name}
              </DialogTitle>
              <DialogDescription>{config.helpText}</DialogDescription>
            </DialogHeader>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="rawKey">Kunci API</Label>
                <Input
                  id="rawKey"
                  type="password"
                  placeholder="sk-..."
                  value={rawKey}
                  onChange={(e) => setRawKey(e.target.value)}
                  className="font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="model">Model bawaan</Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger id="model">
                    <SelectValue placeholder="Pilih model..." />
                  </SelectTrigger>
                  <SelectContent>
                    {config.defaultModels.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {config.needsEndpoint && (
                <div className="space-y-1.5">
                  <Label htmlFor="endpoint">URL Endpoint</Label>
                  <Input
                    id="endpoint"
                    type="url"
                    placeholder="https://api.groq.com/openai/v1"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                  />
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onClick={onClose} disabled={saving}>
                  Batal
                </Button>
                <Button onClick={handleSave} loading={saving}>
                  Simpan & Verifikasi
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
