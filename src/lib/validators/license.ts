import { z } from "zod";
import { LICENSE_CODE_PATTERN } from "@/lib/mocks/fake-license";

export const licenseSchema = z.object({
  code: z
    .string()
    .min(1, "Kode lisensi wajib diisi")
    .transform((v) => v.trim().toUpperCase())
    .refine((v) => LICENSE_CODE_PATTERN.test(v), {
      message:
        "Format kode tidak benar. Cek kembali email atau pesan WA dari kami.",
    }),
});

export type LicenseInput = z.infer<typeof licenseSchema>;
