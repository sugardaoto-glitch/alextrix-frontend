/**
 * Template prompt untuk tool PDF AI Assistant Alextrix.
 * Analisis, ringkasan, terjemahan, dan Q&A dokumen.
 * Instruksi dalam Bahasa Indonesia.
 */

import type { ChatMessage } from "@/data/ecommerce-prompts";

export function buildPdfAssistantMessages(params: Record<string, string>): ChatMessage[] {
  const { task, documentText, question, targetLang } = params;
  const lang = targetLang || "indonesia";

  const truncatedDoc = documentText.length > 30000
    ? documentText.slice(0, 30000) + "\n\n[...teks dipotong karena terlalu panjang]"
    : documentText;

  const prompts: Record<string, string> = {
    "summary": `Kamu adalah asisten analisis dokumen profesional. Buatkan ringkasan terstruktur dari dokumen berikut.

Instruksi:
- Buat ringkasan yang padat dan informatif
- Gunakan format Markdown dengan heading dan bullet points
- Sertakan: ringkasan eksekutif (2-3 kalimat), poin-poin utama, kesimpulan
- Bahasa output: Bahasa Indonesia
- Jangan tambahkan informasi yang tidak ada di dokumen

Dokumen:

${truncatedDoc}`,

    "qa": `Kamu adalah asisten Q&A dokumen yang akurat. Jawab pertanyaan berikut berdasarkan HANYA informasi yang ada di dokumen.

Instruksi:
- Jawab HANYA berdasarkan informasi di dokumen
- Jika jawaban tidak ditemukan di dokumen, katakan "Informasi ini tidak ditemukan dalam dokumen"
- Sertakan kutipan relevan dari dokumen jika memungkinkan
- Bahasa output: Bahasa Indonesia

Dokumen:

${truncatedDoc}

---

Pertanyaan: ${question || "Apa poin-poin utama dari dokumen ini?"}`,

    "translate": `Kamu adalah penerjemah profesional. Terjemahkan dokumen berikut ke ${lang === "indonesia" ? "Bahasa Indonesia" : lang === "english" ? "English" : lang === "japanese" ? "日本語" : lang === "korean" ? "한국어" : lang === "chinese" ? "中文" : lang === "malay" ? "Bahasa Melayu" : "العربية"}.

Instruksi:
- Terjemahkan secara akurat dengan tetap mempertahankan makna dan nuansa asli
- Pertahankan format dan struktur asli (paragraf, heading, list)
- Gunakan terminologi yang tepat sesuai konteks dokumen
- Jangan tambahkan penjelasan atau catatan — langsung terjemahan saja

Dokumen untuk diterjemahkan:

${truncatedDoc}`,

    "extract-key-points": `Kamu adalah analis dokumen profesional. Ekstrak semua poin-poin kunci dari dokumen berikut.

Instruksi:
- Identifikasi semua poin utama, temuan, atau argumen kunci
- Sajikan sebagai bullet points yang jelas dan ringkas
- Urutkan berdasarkan kepentingan/relevansi
- Sertakan data/angka penting jika ada
- Bahasa output: Bahasa Indonesia

Dokumen:

${truncatedDoc}`,

    "explain": `Kamu adalah guru/penjelasan yang sabar. Jelaskan isi dokumen berikut dengan bahasa yang sederhana dan mudah dipahami.

Instruksi:
- Jelaskan seolah-olah sedang menjelaskan ke orang yang tidak familiar dengan topik ini
- Hindari jargon teknis — jika harus digunakan, sertakan penjelasan singkat
- Gunakan analogi jika membantu pemahaman
- Bahasa output: Bahasa Indonesia

Dokumen:

${truncatedDoc}`,

    "to-markdown": `Kamu adalah formatter dokumen profesional. Konversi teks berikut ke format Markdown yang terstruktur dan rapi.

Instruksi:
- Identifikasi heading, sub-heading, paragraf, list, dan tabel
- Gunakan Markdown syntax yang proper (# ## ### untuk heading, - untuk list, | untuk tabel)
- Pertahankan semua informasi asli tanpa mengubah konten
- Perbaiki format yang berantakan menjadi terstruktur

Teks dokumen:

${truncatedDoc}`,

    "to-outline": `Kamu adalah content strategist. Buat outline/kerangka dari dokumen berikut.

Instruksi:
- Buat outline hierarkis yang menunjukkan struktur dokumen
- Gunakan format indentasi yang jelas
- Sertakan sub-poin penting di bawah setiap poin utama
- Bahasa output: Bahasa Indonesia

Dokumen:

${truncatedDoc}`,

    "analyze-structure": `Kamu adalah analis struktur dokumen. Analisis organisasi dan struktur dari dokumen berikut.

Instruksi:
- Identifikasi bagian-bagian utama dokumen
- Jelaskan alur logika dan organisasi informasi
- Berikan penilaian apakah struktur sudah efektif
- Sarankan perbaikan struktur jika ada
- Bahasa output: Bahasa Indonesia

Dokumen:

${truncatedDoc}`,

    "extract-data": `Kamu adalah data extractor profesional. Ekstrak semua data, angka, dan fakta penting dari dokumen berikut.

Instruksi:
- Identifikasi semua angka, statistik, tanggal, nama, dan data penting
- Sajikan dalam format tabel Markdown yang rapi
- Kelompokkan data berdasarkan kategori jika relevan
- Bahasa output: Bahasa Indonesia

Dokumen:

${truncatedDoc}`,

    "rewrite-simple": `Kamu adalah editor yang ahli menyederhanakan teks kompleks. Tulis ulang dokumen berikut dengan bahasa yang lebih sederhana.

Instruksi:
- Pertahankan semua informasi penting
- Gunakan kalimat yang lebih pendek dan sederhana
- Hindari jargon — ganti dengan kata sehari-hari
- Target: bisa dipahami oleh orang awam
- Bahasa output: Bahasa Indonesia

Dokumen:

${truncatedDoc}`,
  };

  const prompt = prompts[task] ?? prompts["summary"];

  return [
    { role: "user", content: prompt },
  ];
}
