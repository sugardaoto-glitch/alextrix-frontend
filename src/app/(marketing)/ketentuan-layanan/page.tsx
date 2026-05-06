export const metadata = {
  title: "Ketentuan Layanan",
};

export default function KetentuanPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="prose prose-slate max-w-none">
        <h1>Ketentuan Layanan</h1>
        <p className="text-sm text-slate-500">Berlaku sejak 1 Mei 2026</p>

        <h2>1. Akses Selamanya</h2>
        <p>
          Pembelian Alextrix memberikan akses selamanya untuk 1 pengguna.
          Update besar gratis selama 90 hari pertama dari aktivasi.
        </p>

        <h2>2. Penggunaan</h2>
        <p>
          Anda boleh menggunakan output dari Alextrix untuk produk dan kampanye
          marketing pribadi. Output tidak boleh dijual sebagai produk siap pakai
          tanpa modifikasi (misal: ebook hasil AI dijual mentah).
        </p>

        <h2>3. BYOK & Pertanggungjawaban Biaya AI</h2>
        <p>
          Alextrix tidak menyediakan token AI. Anda menggunakan kunci API Anda
          sendiri di penyedia seperti OpenAI, Gemini, OpenRouter, NVIDIA NIM.
          Biaya pemakaian token sepenuhnya tanggung jawab Anda.
        </p>

        <h2>4. Konten yang Dilarang</h2>
        <p>
          Anda dilarang menggunakan Alextrix untuk: (a) konten ilegal, (b)
          spam, (c) penipuan, (d) konten yang melanggar HKI pihak lain, (e)
          konten yang melanggar UU ITE Indonesia.
        </p>

        <h2>5. Akun</h2>
        <p>
          Akun bersifat per individu. Sharing akun dapat menyebabkan
          penangguhan. Untuk team, hubungi kami via Telegram.
        </p>

        <h2>6. Penangguhan & Penghentian</h2>
        <p>
          Kami berhak menangguhkan akun yang melanggar ketentuan. Pengguna
          bisa minta refund dalam 7 hari pertama (lihat Kebijakan Refund).
        </p>

        <h2>7. Limitasi Tanggung Jawab</h2>
        <p>
          Output AI bersifat asistif — final review tetap tanggung jawab Anda
          sebelum publish. Kami tidak menjamin output 100% akurat.
        </p>
      </div>
    </div>
  );
}
