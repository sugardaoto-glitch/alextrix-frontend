import type { Tool } from "@/lib/types/tool";

const FRAMEWORK_OPTIONS = [
  { value: "co-star", label: "CO-STAR — Framework Singapore Prompt Championship" },
  { value: "crispe", label: "CRISPE — Framework pembuatan prompt terstruktur" },
  { value: "chain-of-thought", label: "Chain of Thought (CoT) — Penalaran langkah-demi-langkah" },
  { value: "rise", label: "RISE — Recursive Introspection, perbaikan iteratif" },
  { value: "q-star", label: "Q* — Algoritma optimasi prompt cerdas" },
  { value: "meta-prompting", label: "Meta Prompting — Optimasi struktur & sintaks" },
  { value: "variational", label: "Variational — Perencanaan variasional untuk konten" },
  { value: "o1-style", label: "O1-Style — Penalaran mendalam dengan refleksi" },
  { value: "openai-style", label: "OpenAI Style — System prompt profesional" },
  { value: "claude-style", label: "Claude Style — Instruksi detail dengan contoh" },
  { value: "microsoft", label: "Microsoft — Optimasi prompt lanjutan" },
  { value: "draw", label: "DRAW — Optimasi prompt untuk AI image generation" },
];

export const PROMPT_OPTIMIZER_TOOL: Tool = {
  id: "prompt-optimizer",
  name: "Prompt Optimizer",
  tagline: "Ubah prompt sederhana menjadi prompt berkualitas tinggi dengan berbagai framework",
  icon: "✨",
  pillar: "optimize",
  isActive: true,
  uiVariant: "simple",
  outputType: "markdown",
  estimatedTokens: { input: 800, output: 3000 },
  estimatedDurationSeconds: 25,
  inputs: [
    {
      id: "task",
      label: "Prompt / tugas Anda",
      type: "textarea",
      placeholder: "Masukkan prompt atau deskripsi tugas yang ingin dioptimasi...\n\nContoh: Buatkan konten marketing untuk produk skincare baru",
      required: true,
      validation: { minLength: 10, maxLength: 5000 },
      helpText: "Tulis prompt sederhana Anda. AI akan mengoptimasi menjadi prompt profesional yang terstruktur.",
    },
    {
      id: "framework",
      label: "Framework optimasi",
      type: "select",
      required: true,
      options: FRAMEWORK_OPTIONS,
      defaultValue: "co-star",
      helpText: "Pilih framework yang sesuai dengan kebutuhan Anda.",
    },
  ],
};
