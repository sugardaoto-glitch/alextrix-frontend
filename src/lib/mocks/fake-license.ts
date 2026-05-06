import { delay } from "./delay";

export const MOCK_VALID_CODES = [
  "ALEX-LIFE-TEST1-DEMO2-USER3-AB12CD34",
  "ALEX-LIFE-TEST4-DEMO5-USER6-EF56GH78",
  "ALEX-LIFE-TEST7-DEMO8-USER9-IJ90KL12",
] as const;

const USED_CODES_KEY = "alextrix.usedCodes";

export const LICENSE_CODE_PATTERN =
  /^ALEX-LIFE-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-F0-9]{8}$/;

export type ActivationError =
  | "format-invalid"
  | "code-not-found"
  | "code-already-used";

function getUsedCodes(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(USED_CODES_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function addUsedCode(code: string) {
  if (typeof window === "undefined") return;
  const used = getUsedCodes();
  if (!used.includes(code)) {
    used.push(code);
    localStorage.setItem(USED_CODES_KEY, JSON.stringify(used));
  }
}

export async function validateLicenseCode(
  code: string,
): Promise<{ valid: true; priceIDR: number } | { valid: false; error: ActivationError }> {
  await delay(800);

  const normalized = code.trim().toUpperCase();

  if (!LICENSE_CODE_PATTERN.test(normalized)) {
    return { valid: false, error: "format-invalid" };
  }

  const isKnown = (MOCK_VALID_CODES as readonly string[]).includes(normalized);
  if (!isKnown) {
    return { valid: false, error: "code-not-found" };
  }

  const used = getUsedCodes();
  if (used.includes(normalized)) {
    return { valid: false, error: "code-already-used" };
  }

  addUsedCode(normalized);
  // First two codes use promo price 49k, third uses 99k
  const priceIDR = normalized === MOCK_VALID_CODES[2] ? 99000 : 49000;

  return { valid: true, priceIDR };
}

export const ACTIVATION_ERROR_MESSAGES: Record<ActivationError, string> = {
  "format-invalid":
    "Format license code tidak sesuai. Pastikan ada di email pembelian Anda.",
  "code-not-found":
    "License code tidak ditemukan. Cek ejaan atau hubungi admin via Telegram.",
  "code-already-used":
    "License code ini sudah pernah diaktivasi. Hubungi admin jika ini bukan Anda.",
};
