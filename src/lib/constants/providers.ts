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
      "Generate API key di build.nvidia.com. Free tier dengan limit harian.",
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
      "Generate API key di openrouter.ai/keys. Pakai pay-as-you-go (any credit ≥ $1).",
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
      "Generate API key di aistudio.google.com → Get API key. Free tier sudah cukup untuk 80% tool.",
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
      "Generate API key di platform.openai.com → API Keys. Minimum tier-1 ($5 deposit).",
  },
  {
    id: "openai-compatible",
    name: "OpenAI-Compatible",
    shortName: "Compatible",
    color: "#64748B",
    logoEmoji: "⚪",
    defaultModels: ["llama-3.1-70b-versatile", "mixtral-8x7b-32768"],
    supportsVision: false,
    supportsImageGen: false,
    needsEndpoint: true,
    signupUrl: "https://groq.com",
    helpText:
      "Untuk Groq, Together, DeepInfra, dll. Anda butuh API key + endpoint URL dari provider tersebut.",
  },
];

export function getProvider(id: ProviderId): ProviderConfig {
  const found = PROVIDERS.find((p) => p.id === id);
  if (!found) throw new Error(`Provider not found: ${id}`);
  return found;
}
