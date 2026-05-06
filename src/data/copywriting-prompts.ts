/**
 * Template prompt untuk tool AI Copywriting Assistant Alextrix.
 * 44 jenis tugas copywriting, semua instruksi dalam Bahasa Indonesia.
 */

import type { ChatMessage } from "@/data/ecommerce-prompts";

export function buildCopywritingMessages(params: Record<string, string>): ChatMessage[] {
  const { task, content, tone, keywords } = params;
  const toneText = tone || "profesional";
  const keywordsText = keywords || "";

  const prompts: Record<string, string> = {
    "grammar-check": `Lakukan pengecekan tata bahasa pada teks berikut. Identifikasi kesalahan dan berikan saran perbaikan.
Bahasa output: Bahasa Indonesia
Format: Markdown — tampilkan kesalahan dan koreksinya

Teks input:

${content}`,

    "article-title": `Buat 5 judul artikel berkualitas tinggi berdasarkan konten berikut.
Format: plain text, satu judul per baris, tanpa penjelasan tambahan
Gaya: ${toneText}
${keywordsText ? `Kata kunci: ${keywordsText}` : ""}
Bahasa: Bahasa Indonesia

Konten:

${content}`,

    "book-title": `Buat 5 judul buku yang menarik berdasarkan ringkasan berikut.
Format: plain text, satu judul per baris, tanpa penjelasan tambahan
Gaya: ${toneText}
Bahasa: Bahasa Indonesia

Ringkasan:

${content}`,

    "sentence-rewrite": `Tulis ulang kalimat berikut dengan gaya ${toneText}.
Bahasa: Bahasa Indonesia
Format: plain text, langsung hasilnya tanpa penjelasan.

Kalimat asli:

${content}`,

    "sentence-continue": `Lanjutkan kalimat berikut dengan meniru tone dan gayanya. Maksimal 200 kata.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan.

Kalimat:

${content}`,

    "sentence-expand": `Kembangkan kalimat pendek berikut menjadi paragraf yang lebih detail dan informatif. Maksimal 200 kata.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan.

Kalimat:

${content}`,

    "blog-outline": `Buat outline blog yang terstruktur untuk topik berikut.
Bahasa: Bahasa Indonesia
Format: Markdown tanpa penjelasan dan salam pembuka.

Topik: ${content}`,

    "content-summary": `Buat ringkasan yang padat dan jelas dari teks berikut.
Bahasa: Bahasa Indonesia
Format: plain text.

Teks:

${content}`,

    "text-shorten": `Persingkat teks berikut menjadi kalimat yang lebih ringkas tanpa kehilangan informasi penting.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan.

Teks:

${content}`,

    "twitter-post": `Buat post gaya Twitter/X berdasarkan draft berikut.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan
Tone: ${toneText}

Draft:

${content}`,

    "facebook-post": `Buat post gaya Facebook berdasarkan draft berikut.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan
Tone: ${toneText}

Draft:

${content}`,

    "instagram-post": `Buat caption Instagram yang menarik berdasarkan draft berikut. Sertakan hashtag relevan.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan
Tone: ${toneText}

Draft:

${content}`,

    "threads-post": `Buat post gaya Threads berdasarkan draft berikut.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan
Tone: ${toneText}

Draft:

${content}`,

    "tiktok-caption": `Buat caption TikTok yang viral dan engaging berdasarkan konten video berikut. Sertakan hashtag trending.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan
Tone: ${toneText}

Konten video:

${content}`,

    "social-bio": `Buat bio media sosial yang menarik dan profesional.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan
Gaya: ${toneText}
${keywordsText ? `Kata kunci: ${keywordsText}` : ""}

Informasi: ${content}`,

    "comment-write": `Kamu adalah asisten yang membantu menulis komentar berkualitas untuk media sosial.
Buat komentar berdasarkan input berikut.
Bahasa: Bahasa Indonesia
Format: plain text
Tone: ${toneText}

Konten post:

${content}
${keywordsText ? `\nPendapat saya: ${keywordsText}` : ""}`,

    "comment-reply": `Kamu adalah asisten yang membantu menulis balasan komentar berkualitas.
Buat balasan komentar berdasarkan input berikut.
Bahasa: Bahasa Indonesia
Format: plain text
Tone: ${toneText}

Komentar yang ingin dibalas:

${content}
${keywordsText ? `\nPoin yang ingin disampaikan: ${keywordsText}` : ""}`,

    "seo-title": `Buat 5 judul SEO-friendly berdasarkan konten berikut. Judul harus menarik dan mengandung kata kunci utama.
Format: plain text, satu per baris, tanpa penjelasan
Gaya: ${toneText}
Bahasa: Bahasa Indonesia

Konten:

${content}`,

    "seo-description": `Buat 5 meta description SEO berkualitas (maksimal 160 kata per deskripsi) berdasarkan konten berikut.
Format: plain text, satu per baris, tanpa penjelasan
Bahasa: Bahasa Indonesia

Konten:

${content}`,

    "long-tail-keyword": `Kamu adalah ahli SEO. Bantu generate long-tail keyword berkualitas dari kata kunci utama berikut.
Buat 10 variasi keyword yang relevan untuk pasar Indonesia.
Format: plain text, satu per baris, tanpa penomoran atau penjelasan
Bahasa: Bahasa Indonesia

Kata kunci utama:

${content}`,

    "video-title": `Kamu adalah kreator konten YouTube/TikTok top. Bantu buat judul video yang eye-catching (maksimal 70 karakter).
Buat 5 variasi judul.
Format: plain text, satu per baris
Tone: ${toneText}
Bahasa: Bahasa Indonesia
${keywordsText ? `Kata kunci: ${keywordsText}` : ""}

Konten video:

${content}`,

    "video-description": `Buat deskripsi video yang menarik berdasarkan konten berikut.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan
Tone: ${toneText}
${keywordsText ? `Kata kunci: ${keywordsText}` : ""}

Konten video:

${content}`,

    "video-script": `Buat outline script video yang terstruktur untuk topik berikut.
Bahasa: Bahasa Indonesia
Format: Markdown tanpa penjelasan

Topik: ${content}`,

    "email-write": `Kamu adalah asisten email profesional. Tulis email berkualitas (sekitar 200 kata) berdasarkan instruksi berikut.
Bahasa: Bahasa Indonesia
Format: plain text
Tone: ${toneText}

Instruksi:

${content}`,

    "email-reply": `Kamu adalah asisten email profesional. Tulis balasan email yang singkat dan tepat berdasarkan konteks berikut.
Bahasa: Bahasa Indonesia
Format: plain text
Tone: ${toneText}

Konteks email:

${content}
${keywordsText ? `\nPoin yang ingin disampaikan dalam balasan: ${keywordsText}` : ""}`,

    "daily-report": `Tulis laporan kerja harian yang profesional berdasarkan catatan berikut. Kembangkan poin-poin singkat menjadi laporan detail.
Bahasa: Bahasa Indonesia
Format: Markdown tanpa penjelasan

Catatan kerja:

${content}`,

    "weekly-report": `Tulis laporan kerja mingguan yang profesional berdasarkan catatan berikut.
Bahasa: Bahasa Indonesia
Format: Markdown tanpa penjelasan

Catatan kerja:

${content}`,

    "monthly-report": `Tulis laporan kerja bulanan yang profesional berdasarkan catatan berikut.
Bahasa: Bahasa Indonesia
Format: Markdown tanpa penjelasan

Catatan kerja:

${content}`,

    "meeting-summary": `Rangkum poin-poin utama rapat berdasarkan catatan berikut.
Bahasa: Bahasa Indonesia
Format: Markdown tanpa penjelasan

Catatan rapat:

${content}`,

    "task-breakdown": `Baca teks berikut, sintesis informasi menjadi task list yang terstruktur.
Bahasa: Bahasa Indonesia
Format: Markdown (bullet points)
Tanpa penjelasan dan salam.

Input:

${content}`,

    "quick-response": `Jawab pertanyaan berikut dengan singkat dan tepat.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan

Pertanyaan: ${content}`,

    "about-us": `Buat konten halaman "Tentang Kami" yang profesional berdasarkan informasi berikut.
Bahasa: Bahasa Indonesia
Format: Markdown tanpa penjelasan

Informasi:

${content}`,

    "expert-explain": `Jelaskan topik berikut dengan kompleksitas yang meningkat secara bertahap (4 level: pemula → ahli).
Bahasa: Bahasa Indonesia

Topik:

${content}`,

    "qa-generation": `Buat pasangan Q&A (pertanyaan dan jawaban) berdasarkan konteks berikut.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan
Gaya: ${toneText}

Konteks:

${content}`,

    "personal-intro": `Buat perkenalan diri yang ringkas dan profesional untuk interview berdasarkan informasi berikut.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan

Informasi:

${content}`,

    "interview-qa": `Buat 5 pertanyaan interview beserta contoh jawabannya berdasarkan informasi berikut.
Bahasa: Bahasa Indonesia
Format: plain text tanpa penjelasan

Posisi/Deskripsi:

${content}`,

    "career-plan": `Buat rencana pengembangan karir yang realistis berdasarkan informasi berikut.
Bahasa: Bahasa Indonesia
Format: Markdown tanpa penjelasan

Informasi:

${content}`,

    "fitness-plan": `Buat program olahraga mingguan yang realistis berdasarkan informasi berikut.
Bahasa: Bahasa Indonesia
Format: Markdown, langsung hasilnya

Informasi: ${content}`,

    "meal-plan": `Buat rencana menu makan mingguan yang sehat berdasarkan preferensi berikut.
Bahasa: Bahasa Indonesia
Format: Markdown, langsung hasilnya

Preferensi: ${content}`,

    "dinner-plan": `Buat ide menu makan malam berdasarkan bahan dan kemampuan memasak berikut.
Bahasa: Bahasa Indonesia
Format: plain text, langsung hasilnya

Informasi: ${content}`,

    "game-name": `Buat 10 nickname kreatif untuk karakter game berdasarkan informasi berikut.
Bahasa: Bahasa Indonesia/English campuran (sesuai game)
Format: plain text, satu per baris tanpa penomoran
${keywordsText ? `Kata kunci: ${keywordsText}` : ""}

Jenis game/karakter: ${content}`,

    "tone-analysis": `Analisis tone/nada tulisan dari teks berikut. Buat laporan singkat tentang gaya, nada, dan kesan yang ditimbulkan.
Bahasa: Bahasa Indonesia
Format: plain text

Teks:

${content}`,

    "text-to-table": `Ekstrak poin-poin kunci dari teks berikut dan sajikan dalam format tabel.
Bahasa: Bahasa Indonesia
Format: Tabel CSV

Teks:

${content}`,
  };

  const prompt = prompts[task] ?? prompts["article-title"];

  return [
    { role: "user", content: prompt },
  ];
}
