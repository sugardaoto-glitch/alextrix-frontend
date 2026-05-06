export const metadata = {
  title: "Kebijakan Privasi",
};

export default function PrivasiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="prose prose-slate max-w-none">
        <h1>Kebijakan Privasi</h1>
        <p className="text-sm text-slate-500">
          Berlaku sejak 1 Mei 2026
        </p>

        <h2>1. Data yang kami kumpulkan</h2>
        <p>
          Saat Anda mendaftar di Alextrix, kami mengumpulkan: nama lengkap,
          email, dan password (di-hash). Saat Anda menggunakan tool, kami
          menyimpan input dan output Anda di Pustaka pribadi (per akun).
        </p>

        <h2>2. API Key Anda</h2>
        <p>
          Alextrix menggunakan model BYOK (Bring Your Own Key). API key yang
          Anda input akan di-store dalam bentuk encrypted dan hanya digunakan
          untuk request ke provider AI yang Anda pilih. Kami tidak pernah
          membagikan, menjual, atau menggunakan key Anda untuk hal lain.
        </p>

        <h2>3. Cookie</h2>
        <p>
          Kami menggunakan cookie minimal untuk session management dan
          preference UI (mode theme, dll). Tidak ada tracking pixel pihak
          ketiga di area aplikasi.
        </p>

        <h2>4. Pengiriman email</h2>
        <p>
          Kami akan mengirim email transaksional (konfirmasi akun, reset
          password) dan optional newsletter (Anda bisa unsubscribe kapan saja).
        </p>

        <h2>5. Hak Anda</h2>
        <p>
          Anda berhak: (a) meminta export data Anda, (b) meminta penghapusan
          akun, (c) memperbaiki data yang salah. Hubungi kami via email
          hello@alextrix.id untuk request ini.
        </p>

        <h2>6. Kontak</h2>
        <p>
          Untuk pertanyaan privasi, hubungi: hello@alextrix.id
        </p>
      </div>
    </div>
  );
}
