"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ExternalLink, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function KomunitasPengaturanPage() {
  const [linked, setLinked] = useState(false);
  const [username, setUsername] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleLink = async () => {
    if (!username) {
      toast.error("Masukkan username Telegram Anda.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setLinked(true);
      toast.success(
        `Username @${username.replace(/^@/, "")} terhubung. Bergabung sekarang.`,
      );
      setSubmitting(false);
    }, 800);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            🟢 Telegram Komunitas
            {linked && (
              <Badge variant="success" className="text-[10px]">
                Terhubung
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-600">
            Hubungkan username Telegram Anda untuk auto-verifikasi di group
            Alextrix Sellers ID.
          </p>

          <div className="space-y-1.5">
            <Label htmlFor="tg-username">Username Telegram</Label>
            <div className="flex gap-2">
              <Input
                id="tg-username"
                placeholder="@username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={linked}
              />
              {!linked ? (
                <Button onClick={handleLink} loading={submitting}>
                  Hubungkan
                </Button>
              ) : (
                <Button variant="outline" disabled>
                  <Check className="h-4 w-4" />
                  Terhubung
                </Button>
              )}
            </div>
          </div>

          {linked && (
            <Button asChild fullWidth>
              <a
                href="https://t.me/alextrix_id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Bergabung ke Telegram Group
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
