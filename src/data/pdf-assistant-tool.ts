import type { Tool } from "@/lib/types/tool";

const TASK_OPTIONS = [
  { value: "summary", label: "Ringkasan Dokumen — Buat ringkasan terstruktur dari teks dokumen" },
  { value: "qa", label: "Tanya Jawab Dokumen — Jawab pertanyaan berdasarkan isi dokumen" },
  { value: "translate", label: "Terjemahan Dokumen — Terjemahkan teks dokumen ke Bahasa Indonesia" },
  { value: "extract-key-points", label: "Poin Utama — Ekstrak poin-poin kunci dari dokumen" },
  { value: "explain", label: "Penjelasan Dokumen — Jelaskan isi dokumen secara sederhana" },
  { value: "to-markdown", label: "Konversi ke Markdown — Ubah teks ke format Markdown terstruktur" },
  { value: "to-outline", label: "Buat Outline — Buat kerangka/outline dari isi dokumen" },
  { value: "analyze-structure", label: "Analisis Struktur — Analisis struktur dan organisasi dokumen" },
  { value: "extract-data", label: "Ekstrak Data — Ambil data/angka penting ke format tabel" },
  { value: "rewrite-simple", label: "Sederhanakan — Tulis ulang dengan bahasa lebih sederhana" },
];

const TARGET_LANG_OPTIONS = [
  { value: "indonesia", label: "Bahasa Indonesia" },
  { value: "english", label: "English" },
  { value: "japanese", label: "日本語 (Jepang)" },
  { value: "korean", label: "한국어 (Korea)" },
  { value: "chinese", label: "中文 (Mandarin)" },
  { value: "malay", label: "Bahasa Melayu" },
  { value: "arabic", label: "العربية (Arab)" },
];

export const PDF_ASSISTANT_TOOL: Tool = {
  id: "pdf-assistant",
  name: "PDF AI Assistant",
  tagline: "Analisis, ringkas, terjemahkan, dan tanya jawab dengan dokumen menggunakan AI",
  icon: "📄",
  pillar: "optimize",
  isActive: true,
  uiVariant: "simple",
  outputType: "markdown",
  estimatedTokens: { input: 2000, output: 3000 },
  estimatedDurationSeconds: 30,
  inputs: [
    {
      id: "task",
      label: "Jenis operasi",
      type: "select",
      required: true,
      options: TASK_OPTIONS,
      defaultValue: "summary",
      helpText: "Pilih apa yang ingin dilakukan dengan dokumen.",
    },
    {
      id: "documentText",
      label: "Teks dokumen",
      type: "textarea",
      placeholder: "Paste teks dari dokumen PDF Anda di sini...\n\n(Copy-paste teks dari PDF reader, atau gunakan fitur Select All → Copy dari PDF viewer Anda)",
      required: true,
      validation: { minLength: 50, maxLength: 50000 },
      helpText: "Paste isi teks dari dokumen PDF. Semakin lengkap teks, semakin baik hasilnya.",
    },
    {
      id: "question",
      label: "Pertanyaan (untuk mode Tanya Jawab)",
      type: "text",
      placeholder: "Apa kesimpulan utama dari dokumen ini?",
      required: false,
      validation: { maxLength: 1000 },
      helpText: "Isi pertanyaan jika memilih mode 'Tanya Jawab Dokumen'.",
    },
    {
      id: "targetLang",
      label: "Bahasa target (untuk mode Terjemahan)",
      type: "select",
      required: false,
      options: TARGET_LANG_OPTIONS,
      defaultValue: "indonesia",
      helpText: "Pilih bahasa target untuk terjemahan.",
    },
  ],
};
