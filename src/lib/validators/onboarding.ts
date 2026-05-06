import { z } from "zod";

export const onboardingSchema = z.object({
  sellerType: z.enum(["pemula", "experienced"]),
  lynkUsername: z.string().max(80).optional(),
  niche: z.string().min(2, "Niche wajib diisi").max(120),
  targetAudience: z
    .string()
    .min(10, "Deskripsi audience minimal 10 karakter")
    .max(500),
  goal30Days: z.enum([
    "find_niche",
    "build_first_product",
    "increase_conversion",
    "retain_buyers",
    "optimize",
  ]),
  notes: z.string().max(500).optional(),
});

export type OnboardingInput = z.infer<typeof onboardingSchema>;
