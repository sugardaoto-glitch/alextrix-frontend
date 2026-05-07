import type { ProviderId } from "@/lib/types/tool";

export interface ProviderConfig {
  id: ProviderId;
  name: string;
  shortName: string;
  color: string;
  logoEmoji: string;
  defaultModels: string[];
  supportsVision: boolean;
  supportsImageGen: boolean;
  needsEndpoint: boolean;
  signupUrl: string;
  helpText: string;
}

export const PROVIDERS: ProviderConfig[] = [
  {
    id: "nvidia-nim",
    name: "NVIDIA NIM",
    shortName: "NVIDIA",
    color: "#76B900",
    logoEmoji: "🟢",
    defaultModels: [
      "meta/llama-3.1-405b-instruct",
      "meta/llama-3.1-70b-instruct",
      "microsoft/phi-3-medium-4k-instruct",
    ],
    supportsVision: false,
    supportsImageGen: false,
    needsEndpoint: false,
    signupUrl: "https://build.nvidia.com",
    helpText:
      "Buat kunci API di build.nvidia.com. Tersedia paket gratis dengan limit harian.",
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    shortName: "OpenRouter",
    color: "#F97316",
    logoEmoji: "🟠",
    defaultModels: [
      "anthropic/claude-3.5-sonnet",
      "openai/gpt-4o",
      "google/gemini-pro-1.5",
    ],
    supportsVision: true,
    supportsImageGen: false,
    needsEndpoint: false,
    signupUrl: "https://openrouter.ai/keys",
    helpText:
      "Buat kunci API di openrouter.ai/keys. Pakai bayar-sesuai-pakai (kredit minimal $1).",
  },
  {
    id: "gemini",
    name: "Google Gemini",
    shortName: "Gemini",
    color: "#4285F4",
    logoEmoji: "🔵",
    defaultModels: [
      "gemini-2.0-flash-exp",
      "gemini-1.5-pro",
      "gemini-1.5-flash",
    ],
    supportsVision: true,
    supportsImageGen: true,
    needsEndpoint: false,
    signupUrl: "https://aistudio.google.com",
    helpText:
      "Buat kunci API di aistudio.google.com → Dapatkan Kunci API. Paket gratis sudah cukup untuk 80% tool.",
  },
  {
    id: "openai",
    name: "OpenAI",
    shortName: "OpenAI",
    color: "#000000",
    logoEmoji: "⚫",
    defaultModels: ["gpt-4o", "gpt-4o-mini", "gpt-4-turbo"],
    supportsVision: true,
    supportsImageGen: true,
    needsEndpoint: false,
    signupUrl: "https://platform.openai.com/api-keys",
    helpText:
      "Buat kunci API di platform.openai.com → API Keys. Minimum tier-1 (deposit $5).",
  },
  {
    id: "openai-compatible",
    name: "Kompatibel OpenAI",
    shortName: "Kompatibel",
    color: "#64748B",
    logoEmoji: "⚪",
    defaultModels: ["llama-3.1-70b-versatile", "mixtral-8x7b-32768"],
    supportsVision: false,
    supportsImageGen: false,
    needsEndpoint: true,
    signupUrl: "https://groq.com",
    helpText:
      "Untuk Groq, Together, DeepInfra, dll. Anda butuh kunci API + URL endpoint dari penyedia tersebut.",
  },
];

export function getProvider(id: ProviderId): ProviderConfig {
  const found = PROVIDERS.find((p) => p.id === id);
  if (!found) throw new Error(`Provider not found: ${id}`);
  return found;
}
