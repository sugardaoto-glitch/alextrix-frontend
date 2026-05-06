export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "umum" | "harga" | "byok" | "teknis" | "support";
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-alextrix",
    question: "Apa itu Alextrix?",
    answer:
      "Alextrix adalah dashboard 32 tool AI marketing yang dibuat khusus untuk seller di Lynk.id Indonesia. Mulai dari mencari niche, bikin landing page, sampai email sequence — semua dalam Bahasa Indonesia.",
    category: "umum",
  },
  {
    id: "lifetime-deal",
    question: "Apakah benar Lifetime Deal? Tidak ada biaya bulanan?",
    answer:
      "Benar. Anda bayar sekali (Rp 49.000 untuk 100 buyer pertama, Rp 99.000 setelahnya) dan akses 32 tool selamanya. Update gratis selama 90 hari pertama dari aktivasi.",
    category: "harga",
  },
  {
    id: "byok-explained",
    question: "Apa itu BYOK (Bring Your Own Key)?",
    answer:
      "Anda menggunakan API key dari provider AI pilihan Anda (OpenAI, Gemini, OpenRouter, NVIDIA NIM, atau OpenAI-compatible). Alextrix tidak menjual token — Anda kontrol biaya dan keamanan key Anda sendiri.",
    category: "byok",
  },
  {
    id: "byok-cost",
    question: "Berapa biaya AI bulanan kira-kira?",
    answer:
      "Tergantung pemakaian. Untuk pemakaian moderate (5-10 tool run per hari), Gemini free tier sudah cukup. Power user biasanya pakai $5-20/bulan di OpenRouter atau OpenAI.",
    category: "byok",
  },
  {
    id: "supported-providers",
    question: "Provider AI apa saja yang didukung?",
    answer:
      "5 provider: OpenAI (GPT-4o), Google Gemini, OpenRouter (akses Claude + 100+ model), NVIDIA NIM (free tier), dan OpenAI-Compatible (Groq, Together, DeepInfra).",
    category: "byok",
  },
  {
    id: "tools-count",
    question: "Apa saja 32 tool-nya?",
    answer:
      "Dibagi 4 pillar: Acquire (5 tool — niche, persona, kompetitor), Convert (11 tool — landing page, copy, pricing), Retain (5 tool — email sequence, WA blast, loyalty), Optimize (11 tool — audit, A/B test, AI coach). Lihat list lengkap di halaman dashboard.",
    category: "umum",
  },
  {
    id: "for-beginners",
    question: "Saya pemula, apakah cocok?",
    answer:
      "Sangat cocok. AI Coach akan diagnosis bisnis Anda lewat 10 pertanyaan dan langsung kasih action plan. Tool seperti Niche Scanner dan Persona Builder dibuat untuk pemula tanpa background marketing.",
    category: "umum",
  },
  {
    id: "for-advanced",
    question: "Saya sudah experienced, apa nilai tambahnya?",
    answer:
      "Block Library 50+, A/B Test Lab, Sales Cockpit, dan Campaign Studio dibuat untuk seller yang sudah punya data dan ingin scale. Workflow Builder bantu Anda standardisasi proses.",
    category: "umum",
  },
  {
    id: "html-output",
    question: "Apakah HTML output kompatibel dengan Lynk.id?",
    answer:
      "Ya. Semua HTML output (Landing Page Builder, Block Library) sudah pakai inline-style dan tag whitelist Lynk.id. Hanya tag div, p, span, a, img, h1-h6, ul, ol, li, br, strong, em.",
    category: "teknis",
  },
  {
    id: "language",
    question: "Apakah output dalam Bahasa Indonesia?",
    answer:
      "100% Bahasa Indonesia. Setiap tool dirancang untuk seller Indonesia dengan konteks lokal — termasuk Marketing Calendar yang sudah pre-load event Indonesia (Lebaran, 17 Agustus, 11.11, Harbolnas).",
    category: "teknis",
  },
  {
    id: "data-privacy",
    question: "Apakah data saya aman?",
    answer:
      "Output Anda di-saved di Pustaka pribadi (per akun). API key Anda terenkripsi dan tidak pernah keluar dari server kami. Kami tidak training AI dengan data Anda.",
    category: "teknis",
  },
  {
    id: "refund",
    question: "Bisa refund?",
    answer:
      "Karena ini lifetime access dengan harga sangat terjangkau, kami tidak menyediakan refund standard. Tapi jika ada masalah teknis serius, hubungi kami via Telegram dan kami akan bantu.",
    category: "support",
  },
  {
    id: "support-channel",
    question: "Bagaimana kalau ada masalah?",
    answer:
      "Bergabunglah dengan grup Telegram Alextrix (link di halaman aktivasi). Tim kami dan komunitas seller lain aktif setiap hari.",
    category: "support",
  },
  {
    id: "device-compatibility",
    question: "Apakah bisa dipakai di HP?",
    answer:
      "Ya. Alextrix mobile-responsive penuh — bisa dipakai di iPhone SE sampai desktop 1440px. Tapi untuk tool yang butuh banyak typing seperti Landing Page Builder, lebih nyaman di laptop.",
    category: "teknis",
  },
  {
    id: "offline-use",
    question: "Bisa dipakai offline?",
    answer:
      "Tidak. Tool butuh koneksi ke API provider AI Anda. Tapi Pustaka (output yang disimpan) bisa diakses offline berkat localStorage.",
    category: "teknis",
  },
  {
    id: "team-account",
    question: "Bisa dipakai 1 license untuk team?",
    answer:
      "License dirancang untuk 1 user. Untuk team, hubungi admin via Telegram untuk diskusi license team.",
    category: "harga",
  },
  {
    id: "promo-end",
    question: "Kapan promo Rp 49.000 berakhir?",
    answer:
      "Promo berakhir setelah 100 buyer pertama atau jika kami menutup window promo lebih awal. Setelah itu harga regular Rp 99.000.",
    category: "harga",
  },
  {
    id: "future-tools",
    question: "Ada update tool baru di masa depan?",
    answer:
      "Ya. Selama 90 hari pertama dari aktivasi, semua update gratis. Setelah itu, update besar mungkin punya tier upgrade kecil.",
    category: "umum",
  },
];
