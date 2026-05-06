import { delay } from "./delay";
import type { ProviderId } from "@/lib/types/tool";

export interface VerifyResult {
  status: "verified" | "invalid";
  message: string;
  model: string;
}

export async function verifyApiKey(
  provider: ProviderId,
  _key: string,
  defaultModel: string,
): Promise<VerifyResult> {
  await delay(1500);

  // 80% success, 20% failure
  const success = Math.random() < 0.8;

  if (success) {
    return {
      status: "verified",
      message: `Koneksi berhasil! Key valid dan model ${defaultModel} tersedia.`,
      model: defaultModel,
    };
  }

  return {
    status: "invalid",
    message: `Koneksi gagal. Pastikan key valid dan punya akses ke model ${defaultModel}.`,
    model: defaultModel,
  };
}
