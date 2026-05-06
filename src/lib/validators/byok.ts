import { z } from "zod";

export const byokSchema = z.object({
  provider: z.enum(["nvidia-nim", "openrouter", "gemini", "openai", "openai-compatible"]),
  rawKey: z.string().min(8, "Key terlalu pendek").max(2048),
  defaultModel: z.string().min(1, "Pilih model default"),
  endpointUrl: z.string().url("Format URL tidak valid").optional().or(z.literal("")),
});

export type ByokInput = z.infer<typeof byokSchema>;
