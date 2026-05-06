import { DIGITAL_PRODUK } from "./structures/digital";
import { PORTOFOLIO_JASA } from "./structures/portofolio-jasa";
import { WEBINAR_KELAS } from "./structures/webinar-kelas";
import { BOOKING_KONSULTASI } from "./structures/booking-konsultasi";
import { DONASI } from "./structures/donasi";
import { LEAD_MAGNET } from "./structures/lead-magnet";
import { FISIK_BARANG } from "./structures/fisik-barang";
import { FISIK_NON_BARANG } from "./structures/fisik-non-barang";

export const PAGE_STRUCTURES: Record<string, string> = {
  "Penjualan Produk Digital": DIGITAL_PRODUK,
  "Portofolio & Jasa": PORTOFOLIO_JASA,
  "Pendaftaran Webinar/Kelas": WEBINAR_KELAS,
  "Booking Sesi Konsultasi": BOOKING_KONSULTASI,
  "Donasi & Dukungan": DONASI,
  "Lead Magnet - Akses Gratis": LEAD_MAGNET,
  "Penjualan Produk Fisik - Barang": FISIK_BARANG,
  "Penjualan Produk Fisik - Non-Barang": FISIK_NON_BARANG,
};
