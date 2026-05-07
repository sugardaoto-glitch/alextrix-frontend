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
      "Alextrix adalah dasbor 40+ tool AI marketing yang dibuat khusus untuk seller di Lynk.id Indonesia. Mulai dari mencari niche, bikin landing page, sampai email sequence — semua dalam Bahasa Indonesia.",
    category: "umum",
  },
  {
    id: "lifetime-deal",
    question: "Apakah benar akses selamanya? Tidak ada biaya bulanan?",
    answer:
      "Benar. Anda bayar sekali (Rp 49.000 untuk 100 buyer pertama, Rp 99.000 setelahnya) dan akses semua tool selamanya. Update gratis selama 90 hari pertama dari aktivasi.",
    category: "harga",
  },
  {
    id: "byok-explained",
    question: "Apa itu BYOK (Bawa Kunci API Sendiri)?",
    answer:
      "Anda menggunakan kunci API dari penyedia AI pilihan Anda (OpenAI, Gemini, OpenRouter, NVIDIA NIM, atau Kompatibel OpenAI). Alextrix tidak menjual token — Anda kontrol biaya dan keamanan kunci Anda sendiri.",
    category: "byok",
  },
  {
    id: "byok-cost",
    question: "Berapa biaya AI bulanan kira-kira?",
    answer:
      "Tergantung pemakaian. Untuk pemakaian sedang (5–10 tool dijalankan per hari), paket gratis Gemini sudah cukup. Pengguna aktif biasanya pakai $5–20/bulan di OpenRouter atau OpenAI.",
    category: "byok",
  },
  {
    id: "supported-providers",
    question: "Penyedia AI apa saja yang didukung?",
    answer:
      "5 penyedia: OpenAI (GPT-4o), Google Gemini, OpenRouter (akses Claude + 100+ model), NVIDIA NIM (paket gratis), dan Kompatibel OpenAI (Groq, Together, DeepInfra).",
    category: "byok",
  },
  {
    id: "tools-count",
    question: "Apa saja tool yang tersedia?",
    answer:
      "Dibagi 4 pilar: Akuisisi, Konversi, Retensi, dan Optimasi. Termasuk 34 tool e-commerce copywriting, AI Code Generator, AI Copywriting Assistant, PDF AI Assistant, Prompt Optimizer, dan Prompt Expert. Lihat daftar lengkap di halaman dasbor.",
    category: "umum",
  },
  {
    id: "for-beginners",
    question: "Saya pemula, apakah cocok?",
    answer:
      "Sangat cocok. AI Coach akan diagnosis bisnis Anda lewat 10 pertanyaan dan langsung kasih rencana aksi. Tool seperti Niche Scanner dan Persona Builder dibuat untuk pemula tanpa latar belakang marketing.",
    category: "umum",
  },
  {
    id: "for-advanced",
    question: "Saya sudah berpengalaman, apa nilai tambahnya?",
    answer:
      "Block Library 50+, A/B Test Lab, Sales Cockpit, dan Campaign Studio dibuat untuk seller yang sudah punya data dan ingin berkembang. Workflow Builder bantu Anda standarisasi proses.",
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
      "Hasil Anda disimpan di Pustaka pribadi (per akun). Kunci API Anda terenkripsi dan tidak pernah keluar dari server kami. Kami tidak melatih AI dengan data Anda.",
    category: "teknis",
  },
  {
    id: "refund",
    question: "Bisa refund?",
    answer:
      "Karena ini akses selamanya dengan harga sangat terjangkau, kami tidak menyediakan pengembalian dana standar. Tapi jika ada masalah teknis serius, hubungi kami via Telegram dan kami akan bantu.",
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
      "Tidak. Tool butuh koneksi ke penyedia AI Anda. Tapi Pustaka (hasil yang disimpan) bisa diakses offline berkat penyimpanan lokal.",
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
