"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  value: string;
  label?: string;
  successMessage?: string;
  size?: "sm" | "md";
  variant?: "outline" | "default" | "ghost";
}

export function CopyButton({
  value,
  label = "Copy",
  successMessage = "Tersalin ke clipboard",
  size = "sm",
  variant = "outline",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(successMessage);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Gagal menyalin. Coba lagi.");
    }
  };

  return (
    <Button onClick={handleCopy} size={size} variant={variant} type="button">
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      {label}
    </Button>
  );
}
