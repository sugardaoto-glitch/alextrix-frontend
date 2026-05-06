export const metadata = {
  title: "Kebijakan Refund",
};

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="prose prose-slate max-w-none">
        <h1>Kebijakan Refund</h1>
        <p className="text-sm text-slate-500">Berlaku sejak 1 Mei 2026</p>

        <h2>Garansi 7 Hari Money-Back</h2>
        <p>
          Kami percaya pada produk kami. Karena itu, semua pembelian Alextrix
          dilindungi garansi 7 hari money-back tanpa pertanyaan.
        </p>

        <h2>Cara Refund</h2>
        <ol>
          <li>Hubungi kami via email hello@alextrix.id atau Telegram dalam 7 hari setelah aktivasi.</li>
          <li>Sertakan email akun dan alasan refund (untuk membantu kami improve).</li>
          <li>Refund diproses dalam 3-5 hari kerja ke metode pembayaran asli.</li>
        </ol>

        <h2>Setelah 7 Hari</h2>
        <p>
          Setelah lewat 7 hari, refund tidak tersedia karena Anda dianggap sudah
          benefit dari produk. Tapi jika ada masalah teknis serius yang membuat
          Anda tidak bisa pakai produk, hubungi kami — kami akan bantu kasus
          per kasus.
        </p>

        <h2>Yang Tidak Refundable</h2>
        <ul>
          <li>Biaya yang Anda keluarkan ke provider AI Anda (BYOK)</li>
          <li>Pembelian yang sudah lewat 7 hari tanpa masalah teknis</li>
          <li>Refund yang dimotivasi oleh penyalahgunaan (multi-akun, dsb)</li>
        </ul>

        <h2>Kontak</h2>
        <p>
          Untuk request refund: hello@alextrix.id atau Telegram resmi.
        </p>
      </div>
    </div>
  );
}
