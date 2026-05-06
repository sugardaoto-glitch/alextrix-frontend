export interface IDEvent {
  date: string; // MM-DD or YYYY-MM-DD
  name: string;
  category: "national" | "religious" | "shopping" | "cultural";
  emoji: string;
  marketingHint: string;
}

export const ID_EVENTS_2026: IDEvent[] = [
  { date: "2026-01-01", name: "Tahun Baru", category: "national", emoji: "🎉", marketingHint: "Promo new year, resolusi konten" },
  { date: "2026-02-14", name: "Valentine", category: "cultural", emoji: "💌", marketingHint: "Bundle gift, couple promo" },
  { date: "2026-03-08", name: "Hari Perempuan Internasional", category: "national", emoji: "💪", marketingHint: "Konten empowerment" },
  { date: "2026-03-21", name: "Awal Ramadan (perkiraan)", category: "religious", emoji: "🌙", marketingHint: "Promo Ramadan, content jadwal" },
  { date: "2026-04-21", name: "Hari Kartini", category: "national", emoji: "👩‍🎓", marketingHint: "Konten women empowerment" },
  { date: "2026-04-30", name: "Lebaran (perkiraan)", category: "religious", emoji: "🎊", marketingHint: "Promo Idulfitri, hampers" },
  { date: "2026-05-01", name: "Hari Buruh", category: "national", emoji: "👷", marketingHint: "Promo karyawan, bundle" },
  { date: "2026-05-02", name: "Hari Pendidikan", category: "national", emoji: "📚", marketingHint: "Promo course, ebook" },
  { date: "2026-07-23", name: "Hari Anak Nasional", category: "national", emoji: "🧒", marketingHint: "Promo produk parenting" },
  { date: "2026-08-17", name: "Hari Kemerdekaan", category: "national", emoji: "🇮🇩", marketingHint: "Promo merdeka, diskon 17%" },
  { date: "2026-10-28", name: "Hari Sumpah Pemuda", category: "national", emoji: "🎓", marketingHint: "Konten youth & growth" },
  { date: "2026-11-11", name: "Singles Day 11.11", category: "shopping", emoji: "💸", marketingHint: "Flash sale 11.11" },
  { date: "2026-11-25", name: "Hari Guru Nasional", category: "national", emoji: "👩‍🏫", marketingHint: "Promo edukator" },
  { date: "2026-12-12", name: "Harbolnas 12.12", category: "shopping", emoji: "🛒", marketingHint: "Big sale, bundle special" },
  { date: "2026-12-25", name: "Natal", category: "religious", emoji: "🎄", marketingHint: "Promo akhir tahun" },
  { date: "2026-12-31", name: "Malam Tahun Baru", category: "national", emoji: "🎆", marketingHint: "Year-end review konten" },
];

export const ID_EVENTS_BY_MONTH: Record<number, IDEvent[]> = ID_EVENTS_2026.reduce(
  (acc, event) => {
    const month = parseInt(event.date.split("-")[1], 10);
    if (!acc[month]) acc[month] = [];
    acc[month].push(event);
    return acc;
  },
  {} as Record<number, IDEvent[]>,
);
