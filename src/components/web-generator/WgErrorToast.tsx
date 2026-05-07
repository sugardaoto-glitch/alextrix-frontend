"use client";

const ERROR_CODES = [
  -10001, -10002, -10003, -10004, -10005, -10006, -10007, -10008, -10009,
  -10010, -10011, -10012, -10018, -1024, -101, -100, -99,
];

const ERROR_MESSAGES: Record<string, string> = {
  "-10001": "API Key Alextrix tidak ditemukan",
  "-10002": "Alat ini telah dinonaktifkan/dihapus.",
  "-10003": "Kesalahan jaringan, silakan coba lagi nanti",
  "-10004": "Saldo akun tidak mencukupi.",
  "-10005": "Kredensial akun kedaluwarsa, silakan masuk kembali",
  "-10006": "Kuota total telah mencapai batas maksimum",
  "-10007": "Kuota harian telah mencapai batas maksimum",
  "-10008": "Tidak ada channel yang tersedia saat ini",
  "-10009": "Fungsi API saat ini tidak didukung",
  "-10010": "Sumber daya tidak ditemukan",
  "-10011": "Permintaan tidak valid",
  "-10012": "Kuota per jam alat gratis telah mencapai batas maksimum",
  "-10018": "Kuota bulanan telah mencapai batas maksimum",
  "-1024": "Koneksi antarmuka AI timeout, silakan coba lagi nanti",
  "-101": "Alat ini telah dihapus",
  "-100": "Alat ini telah dinonaktifkan",
  "-99": "Kode berbagi tidak valid",
  default: "Terjadi kesalahan yang tidak diketahui",
};

export function WgErrorToast({ code }: { code: number }) {
  const errorCode = ERROR_CODES.includes(code) ? String(code) : "default";
  const message = ERROR_MESSAGES[errorCode] || ERROR_MESSAGES["default"];

  return <div>{message}</div>;
}
