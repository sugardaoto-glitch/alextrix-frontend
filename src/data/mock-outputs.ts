import type { ToolOutput } from "@/lib/types/output";

const SAMPLE_LP_HTML = `<div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; color: #1e1b4b; line-height: 1.6;">
  <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 48px 24px; text-align: center; border-radius: 16px 16px 0 0;">
    <h1 style="color: white; font-size: 28px; margin: 0 0 12px 0; font-weight: 700;">Ebook Resep MPASI Praktis 6-12 Bulan</h1>
    <p style="color: rgba(255,255,255,0.92); font-size: 16px; margin: 0 0 24px 0;">25 resep terbukti, bahan mudah, untuk ibu yang sibuk tapi pengen bayinya makan bergizi.</p>
    <a href="#beli" style="display: inline-block; background: white; color: #4f46e5; padding: 14px 32px; border-radius: 8px; font-weight: 600; text-decoration: none;">Beli Sekarang Rp 49.000</a>
  </div>
  <div style="padding: 32px 24px; background: white;">
    <h2 style="font-size: 22px; margin: 0 0 16px 0; color: #1e1b4b;">Apakah Anda mengalami ini?</h2>
    <ul style="padding-left: 20px; margin: 0;">
      <li style="margin-bottom: 8px;">Bingung mau masak apa untuk si kecil setiap pagi</li>
      <li style="margin-bottom: 8px;">Bayi GTM, makan dikit-dikit, ibu khawatir</li>
      <li style="margin-bottom: 8px;">Resep di internet ribet, butuh bahan susah dicari</li>
      <li style="margin-bottom: 8px;">Tidak punya waktu untuk meal-prep weekly</li>
    </ul>
  </div>
  <div style="padding: 32px 24px; background: #f8fafc;">
    <h2 style="font-size: 22px; margin: 0 0 16px 0; color: #1e1b4b;">Yang Anda dapat:</h2>
    <ul style="padding-left: 20px; margin: 0;">
      <li style="margin-bottom: 10px;"><strong>25 resep MPASI</strong> dari 6-12 bulan, mudah di-prep</li>
      <li style="margin-bottom: 10px;"><strong>Meal plan 4 minggu</strong> + shopping list</li>
      <li style="margin-bottom: 10px;"><strong>Tips GTM</strong> dari 100+ ibu yang sudah lewat fase ini</li>
      <li style="margin-bottom: 10px;"><strong>Akses grup WA</strong> komunitas ibu MPASI</li>
    </ul>
  </div>
  <div style="padding: 32px 24px; background: white; text-align: center;">
    <h2 style="font-size: 22px; margin: 0 0 12px 0; color: #1e1b4b;">Garansi 7 hari</h2>
    <p style="margin: 0 0 24px 0; color: #475569;">Kalau ebook ini tidak membantu, kembalikan dan dapatkan refund 100%.</p>
    <a href="#beli" style="display: inline-block; background: #6366f1; color: white; padding: 14px 40px; border-radius: 8px; font-weight: 600; text-decoration: none;">Beli Sekarang Rp 49.000</a>
  </div>
</div>`;

function md(content: string): ToolOutput {
  return { type: "markdown", content };
}

function html(content: string, warnings: string[] = []): ToolOutput {
  return { type: "html", content, warnings };
}

function ms(sections: { id: string; label: string; contentType: "markdown" | "html" | "json-table" | "list-card"; content: any }[]): ToolOutput {
  return { type: "multi-section", sections };
}

export const NICHE_SCANNER_SAMPLE = ms([
  {
    id: "overview",
    label: "Ringkasan",
    contentType: "markdown",
    content: `## 5 niche profitable untuk Anda

Berdasarkan skill, hobi, dan target pendapatan Anda, kami merekomendasikan 5 niche berikut yang punya **demand stabil** di pasar Lynk.id Indonesia dengan **kompetisi yang masih bisa di-tackle**.

Pilih 1-2 niche untuk fokus, lalu lanjut ke **Persona Builder** untuk membangun profil audience yang detail.`,
  },
  {
    id: "niches",
    label: "5 Niche Pilihan",
    contentType: "list-card",
    content: [
      {
        rank: 1,
        name: "Resep MPASI Praktis",
        demandScore: 8,
        competitionScore: 5,
        priceRange: "Rp 39k - Rp 149k",
        examples: ["Ebook resep MPASI 6-12 bulan (Rp 49k)", "Course masak MPASI batch (Rp 199k)", "Template meal plan + shopping list (Rp 49k)"],
        audienceFit: "Ibu muda 25-35 tahun di Jabodetabek",
        fitForYou: "Sangat cocok karena Anda punya skill masak + fokus pasar Indonesia.",
      },
      {
        rank: 2,
        name: "Meal Prep Karyawan Kantoran",
        demandScore: 7,
        competitionScore: 4,
        priceRange: "Rp 49k - Rp 199k",
        examples: ["Ebook 30 menu meal-prep (Rp 59k)", "Video class batch cooking (Rp 149k)"],
        audienceFit: "Karyawan kantoran 25-32 di kota besar",
        fitForYou: "Skill masak transferable. Butuh angle 'efficient & healthy'.",
      },
      {
        rank: 3,
        name: "Resep Diet Indonesian",
        demandScore: 9,
        competitionScore: 7,
        priceRange: "Rp 79k - Rp 299k",
        examples: ["Ebook diet rendah karbo (Rp 99k)", "Coaching nutrisi 4 minggu (Rp 499k)"],
        audienceFit: "Wanita 28-40 yang ingin sehat tanpa ribet",
        fitForYou: "Demand tinggi tapi kompetisi juga padat. Butuh diferensiasi kuat.",
      },
      {
        rank: 4,
        name: "Cooking for Beginners",
        demandScore: 6,
        competitionScore: 5,
        priceRange: "Rp 39k - Rp 149k",
        examples: ["Ebook 'Anak Kos Bisa Masak' (Rp 39k)", "Course masak 30 menu starter (Rp 99k)"],
        audienceFit: "Anak kos / first jobber 22-28 tahun",
        fitForYou: "Pasar besar, low-hanging fruit. Cocok sebagai produk entry-level.",
      },
      {
        rank: 5,
        name: "Frozen Food Bisnis",
        demandScore: 7,
        competitionScore: 4,
        priceRange: "Rp 99k - Rp 499k",
        examples: ["Course bisnis frozen food (Rp 299k)", "Toolkit packaging + label (Rp 99k)"],
        audienceFit: "Ibu RT yang ingin tambahan income",
        fitForYou: "Niche bagus untuk produk premium. Butuh skill bisnis selain masak.",
      },
    ],
  },
  {
    id: "next-steps",
    label: "Langkah selanjutnya",
    contentType: "markdown",
    content: `**Rekomendasi:**
1. Pilih niche **#1 (Resep MPASI)** untuk fokus 3 bulan pertama.
2. Buka **Persona Builder** untuk profil audience detail.
3. Lalu **Product Wizard** untuk struktur produk pertama.
4. Saat siap, **LP Builder** untuk landing page Lynk.id.

Estimasi waktu: 2-3 minggu untuk launch produk pertama.`,
  },
]);

export const COMPETITOR_SPY_SAMPLE = ms([
  {
    id: "summary",
    label: "Ringkasan Kompetitor",
    contentType: "markdown",
    content: `## Analisa 5 kompetitor di niche MPASI

Kami identifikasi 5 seller aktif di Lynk.id niche MPASI dengan posisi pasar yang berbeda-beda. Berikut breakdown-nya:`,
  },
  {
    id: "competitors",
    label: "5 Kompetitor",
    contentType: "list-card",
    content: [
      { name: "Bunda MPASI ID", priceRange: "Rp 39k - 99k", strength: "Komunitas WA aktif, content harian", weakness: "Visual LP standar", positioning: "Praktis untuk ibu sibuk" },
      { name: "Healthy Baby Kitchen", priceRange: "Rp 99k - 299k", strength: "Premium positioning, foto produk pro", weakness: "Harga di atas market", positioning: "Premium organic" },
      { name: "Chef Mama", priceRange: "Rp 49k - 149k", strength: "Founder personality kuat di TikTok", weakness: "Struktur funnel kurang rapi", positioning: "Edukasi + relate" },
      { name: "MPASI Pintar", priceRange: "Rp 29k - 79k", strength: "Volume tinggi, harga budget", weakness: "Quality content kurang konsisten", positioning: "Budget-friendly" },
      { name: "Nutrisi Bayi Pro", priceRange: "Rp 199k - 499k", strength: "Kredibilitas (klaim ahli gizi)", weakness: "Visual & UX dated", positioning: "Authority figure" },
    ],
  },
  {
    id: "differentiation",
    label: "Strategi Diferensiasi Anda",
    contentType: "markdown",
    content: `## 3 Sudut diferensiasi yang bisa Anda eksploit

1. **"MPASI batch cooking" angle** — Kompetitor focus per-resep, Anda focus efisiensi (1x masak untuk 7 hari). Demand kuat, supply masih tipis.
2. **Format video pendek + ebook hybrid** — Most kompetitor hanya ebook PDF. Tambahin video tutorial 1-2 menit per resep akan unik.
3. **Komunitas peer-support** — Bunda MPASI ID punya komunitas, tapi belum strong di micro-community per fase (6-8, 9-12, dll). Buat circle khusus per fase usia bayi.

**Action item**: Mulai dari diferensiasi #1 (batch cooking), karena bisa jadi USP yang jelas dan mudah dikomunikasikan.`,
  },
]);

export const TREND_RADAR_SAMPLE = ms([
  {
    id: "trending",
    label: "Trending 30 hari terakhir",
    contentType: "markdown",
    content: `## Top 5 trending topic di niche Anda

1. **"MPASI viral murah"** — TikTok engagement +340% (audience 25-32, ibu muda)
2. **"Quick MPASI 5 menit"** — IG Reels saving rate tinggi
3. **"MPASI gak pakai gula garam"** — Concern kesehatan rising
4. **"Meal prep sekali masak 3 hari"** — Efficiency angle
5. **"Resep MPASI dari WHO recommendation"** — Authority angle`,
  },
  {
    id: "content-ideas",
    label: "10 Ide konten viral-friendly",
    contentType: "list-card",
    content: [
      { idea: "Reels '5 menit MPASI' weekly series", platform: "Instagram", priority: "tinggi" },
      { idea: "Carousel 'Bahan MPASI yang sering disalahpahami'", platform: "Instagram", priority: "sedang" },
      { idea: "TikTok 'POV ibu lagi MPASI hari ke-3 GTM'", platform: "TikTok", priority: "tinggi" },
      { idea: "Caption thread 'Mitos MPASI yang masih banyak dipercaya'", platform: "Twitter", priority: "rendah" },
      { idea: "Video 'Sebelum vs sesudah pakai meal prep'", platform: "TikTok", priority: "tinggi" },
    ],
  },
]);

export const PERSONA_BUILDER_SAMPLE = ms([
  {
    id: "intro",
    label: "Pendahuluan",
    contentType: "markdown",
    content: `## 3 Persona Utama untuk Produk Anda

Berdasarkan niche dan price range, kami profile 3 persona dengan profil & buying behavior berbeda. Pilih primary persona untuk fokus 3 bulan pertama.`,
  },
  {
    id: "personas",
    label: "3 Persona",
    contentType: "list-card",
    content: [
      {
        name: "Bu Sarah (Primary Persona)",
        age: "28-32",
        location: "Jakarta Selatan",
        occupation: "Ibu rumah tangga full-time, mantan karyawan kantor",
        budget: "Rp 50k - 200k untuk informasi parenting",
        painPoints: ["Bayi 8 bulan GTM", "Bingung MPASI", "Capek mikirin menu"],
        objections: ["'Apa benar tidak pakai garam?'", "'Bahannya rumit gak?'"],
        buyingTriggers: ["Testimoni ibu lain yang sudah lewat", "Visual sebelum-sesudah", "Garansi"],
      },
      {
        name: "Bu Rina (Secondary - Working Mom)",
        age: "30-35",
        location: "Jabodetabek, Bandung",
        occupation: "Karyawan kantor dengan ART/nanny",
        budget: "Rp 100k - 500k",
        painPoints: ["Tidak ada waktu masak", "Pengen MPASI sehat tapi praktis", "Mengelola ART"],
        objections: ["'Ibunya yang kerja ngurus apa?'", "'Bisa diintegrasi dengan ART?'"],
        buyingTriggers: ["Time-saving angle", "Bisa diteruskan ke ART/nanny", "Format video pendek"],
      },
      {
        name: "Bu Linda (Tertiary - First-time mom)",
        age: "26-30",
        location: "Kota besar dan kabupaten",
        occupation: "Ibu baru, anak pertama < 1 tahun",
        budget: "Rp 49k - 99k (sensitive)",
        painPoints: ["Anxiety baby food", "Banyak info, bingung mana benar"],
        objections: ["'Worth it gak?'", "'Bukannya ada gratis di internet?'"],
        buyingTriggers: ["Curated info", "Komunitas peer support", "Free preview"],
      },
    ],
  },
  {
    id: "messaging",
    label: "Messaging untuk tiap Persona",
    contentType: "markdown",
    content: `## Messaging guide

**Untuk Bu Sarah**: Highlight peace-of-mind. "Tenang, bayi anda makan bergizi tanpa Anda harus pusing tiap pagi."

**Untuk Bu Rina**: Highlight efficiency. "1x masak weekend, sehat untuk seminggu. Bisa diteruskan ke ART."

**Untuk Bu Linda**: Highlight curation + support. "Semua yang Anda butuh, di-curate dari research, plus akses komunitas ibu lain."`,
  },
]);

export const LEAD_MAGNET_SAMPLE = ms([
  {
    id: "ideas",
    label: "5 Ide Lead Magnet",
    contentType: "list-card",
    content: [
      { name: "Checklist '15 Bahan MPASI Wajib di Dapur'", format: "PDF 2 hal", outcome: "Email list growth" },
      { name: "Mini ebook '7 Resep MPASI Praktis'", format: "PDF 8 hal", outcome: "Lead nurture" },
      { name: "Template 'Meal Plan MPASI 1 Minggu'", format: "PDF/Google Doc", outcome: "High-intent leads" },
      { name: "Video 'MPASI 5 menit untuk pemula'", format: "Video 5 menit", outcome: "Brand awareness" },
      { name: "Quiz 'Apa Style MPASI yang Cocok untuk Bayi Anda?'", format: "Quiz 5 pertanyaan", outcome: "Segment audience" },
    ],
  },
  {
    id: "outline",
    label: "Outline lead magnet teratas",
    contentType: "markdown",
    content: `## Mini ebook "7 Resep MPASI Praktis" — Outline lengkap

**Cover** — Headline + subheadline + benefit
**Halaman 1** — Tentang ibu (founder bio singkat) + apa yang akan Anda dapat
**Halaman 2-7** — 7 resep masing-masing 1 halaman:
  - Foto/illustration produk jadi
  - Bahan (max 5 item)
  - Cara masak (3-5 step)
  - Tips ibu (1 paragraf)
**Halaman 8** — CTA ke produk utama (course/ebook lengkap)`,
  },
  {
    id: "lp-hook",
    label: "Headline & hook untuk LP opt-in",
    contentType: "markdown",
    content: `## Headline opt-in page

**Versi 1**: "Bingung MPASI? Download 7 Resep Gratis ini."
**Versi 2**: "Free: 7 resep MPASI praktis untuk bunda yang sibuk."
**Versi 3**: "Stop bingung. Download 7 resep MPASI sehat sekarang (gratis)."

**Subheadline**: "Cuma butuh 5 menit per resep. Bahan mudah dicari di pasar Indonesia."

**CTA**: "Download Sekarang (Gratis)"`,
  },
]);

export const PRODUCT_WIZARD_SAMPLE = ms([
  { id: "summary", label: "Ringkasan Produk", contentType: "markdown", content: `## Course "MPASI Batch Cooking 4 Minggu"\n\nKursus video 12 modul untuk ibu yang ingin meal-prep MPASI 1x seminggu untuk 7 hari.\n\n**Harga**: Rp 299.000 (lifetime + komunitas)\n**Format**: 12 video (5-10 menit each) + 1 PDF workbook + akses grup WA\n**Target**: Ibu muda 25-35 working mom dengan baby 6-12 bulan\n**Diferensiasi**: Batch-cooking system (semua kompetitor focus per-resep)` },
  { id: "outline", label: "Modul Course", contentType: "list-card", content: [
    { module: 1, title: "Welcome & Mindset Batch Cooking", duration: "8 min" },
    { module: 2, title: "Tools & Bahan Wajib", duration: "10 min" },
    { module: 3, title: "Batch Cooking Day Setup", duration: "12 min" },
    { module: 4, title: "Resep Week 1 (6-8 bulan)", duration: "15 min" },
    { module: 5, title: "Resep Week 2 (8-10 bulan)", duration: "15 min" },
    { module: 6, title: "Resep Week 3 (10-12 bulan)", duration: "15 min" },
    { module: 7, title: "Storage & Hygiene", duration: "8 min" },
    { module: 8, title: "Mengatasi GTM", duration: "10 min" },
    { module: 9, title: "Variasi Texture", duration: "9 min" },
    { module: 10, title: "Travel & On-the-go MPASI", duration: "11 min" },
    { module: 11, title: "Q&A Common Concerns", duration: "12 min" },
    { module: 12, title: "Next Steps & Komunitas", duration: "6 min" },
  ] },
  { id: "pitch", label: "Pitch ringkas (60 detik)", contentType: "markdown", content: `**Hook** (5 detik): "Capek mikirin menu MPASI tiap hari?"\n\n**Problem** (15 detik): "Sebagai ibu working, Anda gak punya waktu untuk masak fresh setiap hari. Tapi gak mau juga kasih frozen food yang katanya bahaya."\n\n**Solution** (20 detik): "Course MPASI Batch Cooking 4 Minggu. Cara masak 1x weekend untuk 7 hari ke depan. Aman, sehat, dan teruji 100+ ibu."\n\n**Proof + CTA** (20 detik): "Dapatkan 12 modul + workbook + akses grup WA. Garansi 14 hari money-back. Klik link di bio."` },
]);

export const COPY_STACK_SAMPLE = ms([
  { id: "headlines", label: "5 Headline", contentType: "markdown", content: `1. **"Stop bingung MPASI. Mulai batch cooking 1x seminggu."**\n2. "MPASI sehat tanpa Anda harus masak setiap pagi."\n3. "12 modul, 1 weekend per minggu — bayi Anda tetap makan bergizi."\n4. "Capek mikirin menu? Pakai sistem batch cooking yang terbukti 100+ ibu."\n5. "Dari masak setiap hari → masak 1x untuk seminggu. Tanpa kompromi gizi."` },
  { id: "hooks", label: "5 Hook IG/TikTok", contentType: "markdown", content: `1. "Saya kasih tau cara saya hemat 10 jam/minggu tanpa sacrifice gizi bayi."\n2. "POV: Anda working mom. Bayi 8 bulan. Gak punya waktu."\n3. "Bunda, kalau Anda masih masak MPASI setiap hari, video ini untuk Anda."\n4. "Teknik batch cooking yang ART saya pun bisa lakuin."\n5. "Tahukah Anda... Anda bisa masak MPASI 7 hari sekaligus dalam 90 menit?"` },
  { id: "bullets", label: "Bullet selling points", contentType: "markdown", content: `- ✅ **12 video step-by-step** — total 2 jam, langsung praktek\n- ✅ **PDF workbook 30 halaman** — recipe cards, shopping list, meal plan\n- ✅ **Akses grup WA komunitas** — tanya jawab dengan founder + ibu lain\n- ✅ **Bonus: 5 resep weekend special** untuk akhir minggu\n- ✅ **Garansi 14 hari** — gak puas? refund 100%` },
  { id: "ctas", label: "10 CTA variations", contentType: "markdown", content: `1. "Mulai Batch Cooking Sekarang"\n2. "Bergabung Sekarang — Rp 299k"\n3. "Saya Mau Akses Course Ini"\n4. "Klaim Akses + Bonus Sekarang"\n5. "Daftar Hari Ini, Bayi Anda Untung"\n6. "Beli Sekarang (Garansi 14 hari)"\n7. "Saya Mau Tahu Caranya"\n8. "Akses Lifetime + Komunitas"\n9. "Yes, Saya Siap Hemat 10 Jam/Minggu"\n10. "Dapatkan Course + 5 Bonus Resep"` },
  { id: "objections", label: "5 Objection handler", contentType: "markdown", content: `**"Mahal banget Rp 299k"**\n→ "Hitung saja: Anda hemat 10 jam/minggu × 4 minggu × 12 bulan = 480 jam/tahun. Worth it untuk peace-of-mind dan waktu Anda."\n\n**"Saya gak punya skill masak"**\n→ "Course ini DESIGN untuk pemula. ART saya pun bisa praktek. Step-by-step video 5-10 menit each."\n\n**"Anak saya GTM, takut percuma"**\n→ "Modul 8 khusus tackle GTM. Plus akses grup WA — ibu-ibu lain dengan situation sama bisa jadi support system."\n\n**"Apa beda dengan ebook gratis di internet?"**\n→ "Internet ngasih resep. Course ini kasih SISTEM batch cooking. Ada beda."\n\n**"Gak yakin worth it"**\n→ "Garansi 14 hari money-back. Coba dulu, kalau gak puas, refund 100%. Risiko 0."` },
]);

export const PRICING_LAB_SAMPLE = ms([
  { id: "rec", label: "Rekomendasi Harga", contentType: "markdown", content: `## Harga rekomendasi: Rp 299.000\n\nBerdasarkan analisa daya beli + kompetitor + value perceived, **Rp 299k** memberikan margin sehat dan masih masuk di range buyer mid-tier.\n\n### Breakdown:\n- **Cost basis** (waktu Anda 40 jam × Rp 75k) = Rp 3.000.000 (one-time)\n- **Break-even**: 10 unit\n- **Target 50 unit/bulan** = Rp 14.950.000 revenue` },
  { id: "strategies", label: "3 Strategi Harga", contentType: "list-card", content: [
    { strategy: "Penetration (Rp 199k)", pro: "Volume tinggi, fast feedback loop", con: "Margin kecil, susah naikkan harga later", recommendation: "Cocok 30 hari pertama untuk validasi market" },
    { strategy: "Optimal (Rp 299k)", pro: "Balance volume + margin, positioning mid-tier", con: "Butuh marketing yang matang", recommendation: "PILIHAN UTAMA — sweet spot" },
    { strategy: "Premium (Rp 499k)", pro: "Margin besar, positioning premium", con: "Volume rendah, butuh authority kuat", recommendation: "Untuk versi 2 dengan added bonus (1-on-1 coaching)" },
  ] },
  { id: "psycho", label: "Psychological Pricing", contentType: "markdown", content: `## Tips psikologi harga\n\n1. **Pakai Rp 299.000 bukan Rp 300.000** — perceived 10% lower\n2. **Tampilkan 'Save Rp 200k'** dari versi all-inclusive (anchor pricing)\n3. **Bundle 'sebelum diskon'** — "Rp 599k → Rp 299k"\n4. **Tambah 'Akses Lifetime'** — increase perceived value tanpa cost\n5. **Tier 3 (decoy)** — Tier basic Rp 199k, optimal Rp 299k, premium Rp 599k → orang akan pilih tengah` },
]);

const GENERIC_TIPS = ms([
  { id: "main", label: "Output Utama", contentType: "markdown", content: `## Output sample untuk tool ini\n\nIni adalah mock output untuk validasi UI. Backend asli akan generate output yang lebih spesifik berdasarkan input Anda.\n\n### Section 1\n\nLorem ipsum dolor sit amet. Konten ini akan di-generate dari AI provider Anda saat backend tersambung.\n\n### Section 2\n\n- Point pertama tentang strategi\n- Point kedua tentang implementasi\n- Point ketiga tentang follow-up\n\n### Action Items\n\n1. Lakukan A dalam 7 hari\n2. Lakukan B dalam 14 hari\n3. Review di hari ke-30` },
]);

export const BUNDLE_ARCHITECT_SAMPLE = ms([
  { id: "tiers", label: "3 Tier Bundle", contentType: "list-card", content: [
    { tier: "Basic", priceIDR: 99000, items: ["Ebook utama", "Bonus checklist"], target: "Buyer pertama / budget" },
    { tier: "Standard", priceIDR: 199000, items: ["Ebook utama", "Checklist", "Video tutorial 30 menit", "Template meal plan"], target: "Sweet spot — mayoritas buyer" },
    { tier: "Premium", priceIDR: 399000, items: ["Semua di Standard", "Akses grup VIP", "1x Q&A live session", "5 bonus resep eksklusif"], target: "Buyer serius / influencer" },
  ] },
  { id: "anchor", label: "Pricing Anchor Strategy", contentType: "markdown", content: `## Susun harga sebagai anchor\n\nPasang 3 tier dengan price gap yang signifikan agar tier Standard menjadi obvious choice (decoy effect).\n\n- Basic Rp 99k → entry, no-brainer untuk skeptis\n- **Standard Rp 199k** → 80% buyer akan pilih ini (target utama)\n- Premium Rp 399k → buat Standard terlihat "value"` },
]);

export const UPSELL_DESIGNER_SAMPLE = ms([
  { id: "flow", label: "Flow Upsell", contentType: "markdown", content: `## Recommended Upsell Flow\n\n**Step 1 — Thank You Page (immediate)**:\n→ Tawarkan add-on Rp 79k (template meal plan + grocery list) dengan headline "Lengkapi paket Anda dalam 1 klik"\n\n**Step 2 — Email +24 jam**:\n→ Tawarkan course companion (Rp 199k → Rp 149k khusus buyer)\n\n**Step 3 — WA day 7**:\n→ Tawarkan akses komunitas premium (Rp 99k/year)` },
  { id: "scripts", label: "Script per step", contentType: "markdown", content: `### Thank You Page Copy\n\n"🎉 Selamat! Pesanan Anda sudah masuk.\n\nSatu hal cepat sebelum Anda buka materinya:\n\nIbu yang beli ebook biasanya juga butuh **template meal plan + grocery list** untuk implement. Biasanya Rp 99k, tapi karena Anda baru saja jadi student kami:\n\n👉 **Tambah dengan Rp 79k saja** (1-time offer, hanya berlaku di halaman ini)\n\n[Tambahkan ke pesanan saya]"\n\n### Email +24h Subject\n\n"{{nama}}, ada satu hal lagi yang ibu lain biasanya minta..."` },
]);

export const TESTIMONIAL_FORMATTER_SAMPLE = ms([
  { id: "card", label: "Format Card (LP)", contentType: "html", content: `<div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 360px;">\n  <p style="margin: 0 0 16px 0; color: #334155; line-height: 1.6; font-style: italic;">"Bener-bener game changer. Dulu masak setiap hari, sekarang weekend doang. Bayi saya juga lebih lahap karena makanan lebih bervariasi."</p>\n  <div style="display: flex; align-items: center; gap: 12px;">\n    <div style="width: 40px; height: 40px; background: #c7d2fe; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #4338ca; font-weight: 600;">SR</div>\n    <div>\n      <div style="font-weight: 600; color: #1e293b;">Bu Sarah</div>\n      <div style="font-size: 13px; color: #64748b;">Jakarta · Ibu Aida (8 bulan)</div>\n    </div>\n  </div>\n</div>` },
  { id: "chat", label: "Format Chat WA", contentType: "html", content: `<div style="max-width: 320px; background: #ECE5DD; padding: 16px; border-radius: 12px;">\n  <div style="background: #DCF8C6; padding: 12px; border-radius: 8px; margin-bottom: 8px;">\n    <p style="margin: 0; color: #303030; font-size: 14px;">Mbak, mau curhat dikit. Course MPASI yg kemarin saya beli LIFE-CHANGING bgt 😭</p>\n    <div style="font-size: 11px; color: #667781; text-align: right; margin-top: 4px;">15:42 ✓✓</div>\n  </div>\n  <div style="background: #DCF8C6; padding: 12px; border-radius: 8px;">\n    <p style="margin: 0; color: #303030; font-size: 14px;">Sekarang weekend masak skali, tinggal panasin selama seminggu. Bener2 kebantu</p>\n    <div style="font-size: 11px; color: #667781; text-align: right; margin-top: 4px;">15:43 ✓✓</div>\n  </div>\n</div>` },
  { id: "social", label: "Social Post", contentType: "markdown", content: `**Caption Instagram-ready:**\n\n📍 Cerita dari Bu Sarah, Jakarta:\n\n"Sebelum course ini, saya stress tiap pagi mikirin menu. Sekarang, weekend masak 1x untuk seminggu. Bayi saya juga jadi lebih lahap. Worth it banget Rp 299k-nya 😭"\n\n— Bu Sarah, Ibu Aida (8 bulan)\n\nMau kasih bayi Anda makan bergizi tanpa stress harian? Link course di bio.\n\n#MPASIPraktis #BatchCooking #IbuMudaIndonesia` },
]);

export const LANDING_PAGE_BUILDER_SAMPLE = html(SAMPLE_LP_HTML, [
  "Style 'background-image' pada <img> dihilangkan (tidak whitelisted)",
  "1 tag <button> diganti <a> agar kompatibel Lynk.id",
]);

export const LP_PROMPT_GENERATOR_SAMPLE = md(`# Prompt LP Premium untuk Course MPASI Batch Cooking

## Context
Saya sedang membangun landing page Lynk.id untuk produk **Course MPASI Batch Cooking 4 Minggu** dengan harga **Rp 299.000**.

## Audience
**Ibu working mom 25-35** di Jabodetabek dengan baby 6-12 bulan. Pain utama: tidak punya waktu masak setiap hari, tapi tidak mau kasih frozen food.

## Output yang dibutuhkan
Generate landing page HTML dengan struktur:

### Section 1: Hero
- Background gradient #6366f1 → #8b5cf6
- Headline (max 8 kata, action-oriented)
- Subheadline (max 20 kata, dengan benefit konkret)
- CTA "Beli Sekarang Rp 299.000"

### Section 2: Pain Point
- "Apakah Anda mengalami ini?"
- 4-5 bullet point pain spesifik working mom

### Section 3: Solution
- Headline transition
- 3 benefit utama dengan icon emoji
- Visual hierarchy yang jelas

### Section 4: What You Get
- 4-6 deliverables dengan checkmark
- Highlight bonus

### Section 5: Testimonial
- 1 quote besar dengan attribution
- 2-3 mini-testimonials grid

### Section 6: Pricing & Guarantee
- Anchor price (was/now)
- Money-back guarantee 14 hari
- Final CTA (urgency)

## Constraints
- HANYA pakai inline-style
- HANYA tag: div, p, span, a, img, h1-h6, ul, ol, li, br, strong, em
- Mobile-first (max-width 600px)
- Tone: santai-jujur, working-mom-relatable
- 100% Bahasa Indonesia

Jalankan prompt ini di **LP Builder** atau provider AI Anda untuk dapat output HTML.`);

export const BLOCK_LIBRARY_SAMPLE = ms([
  { id: "info", label: "Block Library", contentType: "markdown", content: `## 50+ block siap pakai\n\nGunakan tab kategori di samping untuk browse. Setiap block bisa di-customize warna dan teks-nya, lalu copy HTML ke Lynk.id Anda.` },
]);

export const FUNNEL_IN_BOX_SAMPLE = ms([
  { id: "stages", label: "Funnel Stages", contentType: "list-card", content: [
    { stage: "1. Lead Magnet", item: "PDF '7 Resep MPASI Praktis' (free)", channel: "IG bio + LP opt-in" },
    { stage: "2. Email Day 1-3", item: "Welcome sequence 3 email value", channel: "Email" },
    { stage: "3. Pitch Email Day 4", item: "Soft pitch course Rp 299k + bonus", channel: "Email" },
    { stage: "4. Reminder + WA", item: "Last-call WA broadcast", channel: "WhatsApp" },
    { stage: "5. Upsell Post-Buy", item: "Add-on meal plan template Rp 79k", channel: "Thank you page" },
    { stage: "6. Retention", item: "Komunitas grup VIP + monthly Q&A", channel: "Telegram/WA" },
  ] },
  { id: "metrics", label: "Target Metrics", contentType: "markdown", content: `## Target metrics per stage\n\n- Lead magnet conversion: 25-35%\n- Email open rate: 35-45%\n- Pitch email click rate: 8-12%\n- Pitch → buy conversion: 2-4%\n- Upsell take rate: 15-25%\n\n**Estimasi**: 1000 traffic/bulan → 300 leads → 9 buyer (Rp 299k) = Rp 2.7jt revenue` },
]);

export const AI_IMAGE_SAMPLE: ToolOutput = {
  type: "image-grid",
  images: [
    { url: "https://picsum.photos/seed/alextrix1/600/600", alt: "Hero MPASI 1", prompt: "MPASI hero image" },
    { url: "https://picsum.photos/seed/alextrix2/600/600", alt: "Hero MPASI 2", prompt: "MPASI hero image variant" },
    { url: "https://picsum.photos/seed/alextrix3/600/600", alt: "Hero MPASI 3", prompt: "MPASI hero minimalist" },
    { url: "https://picsum.photos/seed/alextrix4/600/600", alt: "Hero MPASI 4", prompt: "MPASI hero cooking" },
  ],
};

export const EMAIL_SEQUENCE_SAMPLE = ms([
  { id: "overview", label: "Sequence Overview", contentType: "markdown", content: `## Welcome Sequence 5 Email\n\nKirim hari 1-7 setelah purchase. Tujuan: onboarding sukses + setup repeat purchase.` },
  { id: "emails", label: "5 Email Lengkap", contentType: "list-card", content: [
    { day: 1, subject: "Selamat datang! Mulai dari sini...", preview: "Plus akses bonus yang banyak ibu lewat", body: "Halo Bunda, terima kasih sudah join. Berikut 3 hal pertama yang harus Anda lakukan..." },
    { day: 2, subject: "Tip #1 yang paling banyak missed", preview: "Hampir semua ibu skip step ini di awal", body: "Hari kedua ya Bunda. Saya mau bahas satu hal yang banyak ibu skip..." },
    { day: 3, subject: "Cerita ibu lain (mungkin relate)", preview: "Bu Linda nyaris quit di hari ke-3", body: "Hari ini saya mau share cerita Bu Linda yang sekarang sudah jadi student inspiratif..." },
    { day: 5, subject: "Cek progress Anda", preview: "Sudah sampai mana? Ada masalah?", body: "Bunda, sudah hari ke-5. Saya mau cek progress Anda. Reply email ini kalau ada masalah..." },
    { day: 7, subject: "Bonus eksklusif untuk Anda", preview: "Hadiah karena Anda sudah commit 1 minggu", body: "Selamat sudah 1 minggu Bunda! Saya kasih bonus eksklusif: 5 resep premium..." },
  ] },
]);

export const WA_BLAST_SAMPLE = ms([
  { id: "main", label: "3 Variasi WhatsApp Broadcast", contentType: "list-card", content: [
    { variant: 1, message: "Halo Bunda 👋\n\nSaya Sarah, founder MPASI Batch Cooking. Saya buka promo akhir bulan: course Rp 299k jadi Rp 199k khusus 24 jam.\n\nKalau Bunda lagi struggle MPASI, ini saatnya. Klik di sini: [link]\n\n— Sarah" },
    { variant: 2, message: "Bunda, mau cerita dikit 🤍\n\nMinggu lalu ada ibu yang DM saya: \"Mbak, saya udah hampir give up MPASI\". 7 hari setelah ikut course, dia bilang anaknya udah lahap lagi.\n\nKalau Bunda lagi di posisi sama, course ini buat Bunda. Promo Rp 199k cuma sampai besok: [link]\n\nDoa baik untuk Bunda." },
    { variant: 3, message: "🚨 24 JAM TERAKHIR\n\nCourse MPASI Batch Cooking promo Rp 199k (regular Rp 299k).\n\n✅ 12 video step-by-step\n✅ Workbook PDF 30 hal\n✅ Akses grup WA selamanya\n\nSlot terbatas. Klik: [link]" },
  ] },
]);

export const LOYALTY_BLUEPRINT_SAMPLE = ms([
  { id: "program", label: "Program Loyalty", contentType: "markdown", content: `## Program: "MPASI Inner Circle"\n\n**Tier 1: Member** (semua buyer otomatis)\n- Akses grup WA komunitas\n- Newsletter monthly\n\n**Tier 2: VIP** (3+ purchase)\n- 15% diskon all products\n- Early access produk baru\n- Q&A live monthly\n\n**Tier 3: Founding Mom** (5+ purchase / refer 3 friends)\n- 25% diskon\n- 1-on-1 consultation 30 menit\n- Featured testimonial spot\n- Affiliate 30% commission` },
  { id: "implementation", label: "Implementation Plan", contentType: "markdown", content: `## 30-day rollout\n\n**Week 1-2**: Setup\n- Buat tier system di spreadsheet\n- Audit existing buyer untuk classify\n- Buat welcome email per tier\n\n**Week 3**: Launch\n- WA broadcast announcement\n- Email seq pengenalan program\n\n**Week 4**: Engage\n- Monthly Q&A pertama\n- Showcase Founding Mom stories` },
]);

export const REENGAGEMENT_SAMPLE = ms([
  { id: "campaign", label: "Win-back Campaign", contentType: "markdown", content: `## "Kami Kangen Anda" Campaign — 5 Touchpoint\n\n### Day 1 — Email\n*"Bu Sarah, kemana saja?"*\nSoft re-engage. Sharing 1 tip baru gratis.\n\n### Day 3 — WA\n*Personal message dari founder*\n"Bu Sarah, saya cek di sistem Anda terakhir aktif 3 bulan lalu. Ada yang bisa saya bantu?"\n\n### Day 7 — Email\n*"Special untuk Anda: 30% off"*\nTawarkan diskon eksklusif untuk produk baru.\n\n### Day 14 — Email Last call\n*"Penawaran terakhir"*\nUrgency final.\n\n### Day 30 — Survey\n*"Apa yang bikin Anda berhenti?"*\nKalaupun gak balik, kita dapet feedback berharga.` },
]);

export const FEEDBACK_COLLECTOR_SAMPLE = ms([
  { id: "template", label: "Survey Template", contentType: "markdown", content: `## Survey Post-Purchase (5 Pertanyaan)\n\n**Pembuka:**\n"Halo Bu {{nama}}, sudah 7 hari sejak Anda join course MPASI Batch Cooking. Boleh saya minta 2 menit Bu untuk feedback singkat? Ada hadiah resep eksklusif untuk yang menjawab 🎁"\n\n1. **Sejauh mana course ini sesuai ekspektasi Anda?** (1-10)\n2. **Bagian mana yang paling helpful?** (textarea)\n3. **Bagian mana yang masih kurang?** (textarea)\n4. **Apakah Anda akan recommend ke teman?** (Ya/Mungkin/Tidak)\n5. **Apa produk lain yang Anda butuhkan dari kami?** (textarea)\n\n**Penutup:**\n"Terima kasih Bunda! Resep eksklusif akan saya kirim begitu form selesai. 🤍"` },
  { id: "channels", label: "Channel Distribution", contentType: "markdown", content: `## Cara distribusi optimal\n\n- **WhatsApp** (response rate: 60-80%): personal touch, reply rate tinggi\n- **Email** (response rate: 15-25%): formal, ada link form\n- **In-product CTA** (untuk yang masih aktif): paling friction-low\n\n**Rekomendasi**: Pakai WA dengan link Tally form. Insentif kecil (resep eksklusif) bikin response rate naik 30-40%.` },
]);

export const PAGE_AUDIT_SAMPLE = ms([
  { id: "score", label: "Skor Audit", contentType: "markdown", content: `## Skor Halaman Anda: **72/100** ⚠️\n\nHalaman Anda sudah punya foundation bagus, tapi ada **5 area utama** yang bisa di-optimize untuk konversi 30-50% lebih tinggi.` },
  { id: "checklist", label: "15 Checklist", contentType: "list-card", content: [
    { item: "Headline jelas dan benefit-driven", status: "✅", note: "Bagus" },
    { item: "Subheadline mendukung headline", status: "✅", note: "OK" },
    { item: "CTA above-the-fold", status: "✅", note: "Visible" },
    { item: "Pain points spesifik audience", status: "⚠️", note: "Kurang spesifik, lebih ke generic" },
    { item: "Social proof ≥ 3 testimonial", status: "❌", note: "Hanya 1 testimonial" },
    { item: "Visual hierarchy konsisten", status: "✅", note: "Baik" },
    { item: "Mobile-friendly (no horizontal scroll)", status: "✅", note: "Tested" },
    { item: "Garansi/refund visible", status: "❌", note: "Tidak ada" },
    { item: "Pricing transparan", status: "✅", note: "Jelas" },
    { item: "FAQ section", status: "❌", note: "Tidak ada" },
    { item: "Multiple CTA (top, mid, bottom)", status: "⚠️", note: "Hanya 2" },
    { item: "Trust badges/credentials", status: "❌", note: "Belum ada" },
    { item: "Urgency element", status: "❌", note: "Bisa ditambah" },
    { item: "Loading speed < 3s", status: "✅", note: "OK" },
    { item: "Tag/keyword di body", status: "⚠️", note: "Repetitive" },
  ] },
  { id: "actions", label: "5 Action Items Prioritas", contentType: "markdown", content: `## Top 5 yang harus diperbaiki dulu\n\n1. **Tambah 2-3 testimonial lagi** (impact: HIGH) — Social proof adalah trigger #1\n2. **Munculkan garansi 14 hari** (impact: HIGH) — Risk reversal kuat\n3. **Tambah FAQ section** (impact: MED) — Tackle common objection\n4. **Buat pain points lebih spesifik** (impact: MED) — Resonance dengan audience\n5. **Tambah trust badges** (impact: MED) — Logo media coverage / count buyer\n\nFix 5 ini → estimasi konversi naik dari 1.5% ke 2.8%.` },
]);

export const AB_TEST_LAB_SAMPLE = ms([
  { id: "variants", label: "5 Variant Headline", contentType: "list-card", content: [
    { variant: "A (Control)", text: "Course MPASI 4 Minggu", angle: "Generic" },
    { variant: "B", text: "Stop Bingung MPASI. Mulai Batch Cooking 1x Seminggu.", angle: "Problem-solution" },
    { variant: "C", text: "Hemat 10 Jam/Minggu Tanpa Sacrifice Gizi Bayi", angle: "Benefit-driven (time)" },
    { variant: "D", text: "Cara 100+ Working Mom Lewatin Fase MPASI", angle: "Social proof + curiosity" },
    { variant: "E", text: "MPASI Sehat Tanpa Anda Harus Masak Setiap Pagi", angle: "Pain reversal" },
  ] },
  { id: "guide", label: "Panduan Testing Manual", contentType: "markdown", content: `## Testing 5 variant — Manual approach\n\n**Setup:**\n- Bikin 5 versi LP duplicate\n- Pasang masing-masing di link berbeda\n- Distribusikan traffic merata via tool seperti Linktree atau bio rotator\n\n**Sample size minimum:** 200 visitor per variant (1000 total)\n\n**Metrik yang di-track:**\n- Click-through rate (visitors → CTA click)\n- Conversion rate (clicks → buy)\n\n**Durasi:** 2 minggu minimum\n\n**Decision rule:** Variant menang jika conversion 25%+ di atas control AND sample size cukup.` },
]);

export const SEO_AEO_SAMPLE = ms([
  { id: "current", label: "Audit SEO Saat Ini", contentType: "markdown", content: `## Score: **65/100**\n\n- Title tag: ⚠️ Terlalu generic ("Course MPASI")\n- Meta description: ❌ Belum ada\n- Keyword density: ✅ OK\n- Internal links: ❌ Tidak ada\n- Image alt: ⚠️ Sebagian kosong` },
  { id: "rec", label: "Rekomendasi Optimasi", contentType: "markdown", content: `## Optimized Title\n\n**Sebelum**: Course MPASI\n**Sesudah**: Course MPASI Batch Cooking 4 Minggu — Hemat Waktu Tanpa Sacrifice Gizi\n\n## Optimized Meta Description\n\n"Course MPASI batch cooking untuk working mom. 12 video + workbook + akses grup WA. Hemat 10 jam/minggu. Garansi 14 hari."\n\n## Keyword Cluster\n\n- Primary: \`MPASI batch cooking\`\n- Secondary: \`MPASI working mom\`, \`MPASI 4 minggu\`, \`course MPASI praktis\`\n- Long-tail: \`cara MPASI hemat waktu\`, \`MPASI sekali masak seminggu\`\n\n## AEO (AI Search) Tips\n\n1. Tambah FAQ section dengan Q&A natural language\n2. Pakai struktur "Apa itu...", "Bagaimana cara..."\n3. Ringkas key info di bullet points (AI prefer extractable content)` },
]);

export const SALES_COCKPIT_SAMPLE = ms([
  { id: "summary", label: "Ringkasan Sales", contentType: "markdown", content: `## Performance 30 Hari Terakhir\n\n- **Total Revenue**: Rp 12.450.000\n- **Total Buyer**: 47 (vs 52 bulan lalu, -10%)\n- **Average Order**: Rp 264k\n- **Top Product**: Course MPASI (62% revenue)\n- **Concern**: Revenue turun karena bulan lalu ada launch event` },
  { id: "actions", label: "5 Action Items Prioritas", contentType: "list-card", content: [
    { priority: 1, action: "Re-launch ebook MPASI dengan promo 30% (Rp 49k → Rp 35k)", expectedImpact: "+15% revenue dalam 7 hari", effort: "1 hari" },
    { priority: 2, action: "Aktifkan win-back campaign untuk 23 buyer pasif", expectedImpact: "5-8 buyer kembali, ~Rp 1.5jt", effort: "2 hari" },
    { priority: 3, action: "Bundle baru: ebook + course Rp 349k", expectedImpact: "AOV naik 30%", effort: "1 hari setup" },
    { priority: 4, action: "Email sequence baru untuk lead 100+", expectedImpact: "+10% conversion lead → buyer", effort: "3 hari writing" },
    { priority: 5, action: "TikTok content 5x/minggu (currently 2x)", expectedImpact: "Traffic +40% dalam 30 hari", effort: "4 hari/minggu" },
  ] },
  { id: "forecast", label: "Forecast Bulan Depan", contentType: "markdown", content: `## Forecast jika eksekusi 5 action items:\n\n- Revenue target: **Rp 18.000.000** (+45%)\n- Buyer target: **65 buyer** (+38%)\n- AOV target: **Rp 280k** (+6%)\n\n**Confidence**: 70% jika eksekusi konsisten 30 hari.` },
]);

export const MARKETING_CALENDAR_SAMPLE: ToolOutput = {
  type: "calendar-events",
  events: [
    { id: "evt-1", date: "2026-05-04", channel: "instagram", contentType: "post", title: "Hari Pendidikan: 5 buku parenting recommended", caption: "Carousel 10 slide", priority: "normal" },
    { id: "evt-2", date: "2026-05-06", channel: "tiktok", contentType: "reel", title: "POV: Working mom batch cooking weekend", priority: "high" },
    { id: "evt-3", date: "2026-05-09", channel: "instagram", contentType: "story", title: "BTS proses bikin course module 6", priority: "normal" },
    { id: "evt-4", date: "2026-05-11", channel: "whatsapp", contentType: "broadcast", title: "Promo 11 hari pertengahan bulan", cta: "Beli course Rp 199k", productLink: "https://lynk.id", priority: "high" },
    { id: "evt-5", date: "2026-05-13", channel: "instagram", contentType: "post", title: "Testimoni Bu Sarah (carousel)", priority: "high" },
    { id: "evt-6", date: "2026-05-15", channel: "tiktok", contentType: "reel", title: "5 menit MPASI #5: Bubur Pisang", priority: "normal" },
    { id: "evt-7", date: "2026-05-17", channel: "email", contentType: "broadcast", title: "Newsletter: Tips meal prep weekend", priority: "normal" },
    { id: "evt-8", date: "2026-05-20", channel: "instagram", contentType: "post", title: "Mitos MPASI yang masih dipercaya", priority: "normal" },
    { id: "evt-9", date: "2026-05-23", channel: "tiktok", contentType: "reel", title: "Behind the scenes course recording", priority: "normal" },
    { id: "evt-10", date: "2026-05-27", channel: "whatsapp", contentType: "broadcast", title: "Last call promo akhir bulan", cta: "Course Rp 199k", priority: "high" },
    { id: "evt-11", date: "2026-05-29", channel: "instagram", contentType: "story", title: "Q&A live with founder", priority: "normal" },
    { id: "evt-12", date: "2026-06-02", channel: "instagram", contentType: "post", title: "New month, new menu plan", priority: "normal" },
  ],
};

export const AFFILIATE_PACK_SAMPLE = ms([
  { id: "intro", label: "Welcome Pack untuk Affiliate", contentType: "markdown", content: `## Selamat datang di Program Affiliate Course MPASI\n\nTerima kasih sudah join program affiliate kami! Pack ini berisi semua yang Anda butuh untuk mulai promosi efektif.\n\n**Komisi Anda**: 25% per sale (Rp 75k per Rp 299k course)\n**Payout**: Akhir bulan, transfer manual\n**Cookie**: Lifetime (selama buyer pakai link Anda)` },
  { id: "assets", label: "5 Asset Promo", contentType: "list-card", content: [
    { asset: "10 caption Instagram (carousel + single)", format: "Doc + image" },
    { asset: "5 script TikTok (15-30 detik)", format: "Doc + video reference" },
    { asset: "3 template story IG", format: "Canva link" },
    { asset: "5 template WA personal", format: "Doc" },
    { asset: "2 banner LP (high-res)", format: "PNG 1200x630" },
  ] },
  { id: "guide", label: "Panduan Promosi", contentType: "markdown", content: `## Best practices untuk affiliate kreator\n\n### Yang BOLEH:\n- Posting di akun pribadi Anda\n- Tag akun official kami untuk repost\n- Pakai hashtag #MPASIBatchCooking\n- Bagikan testimoni Anda jika punya\n\n### Yang TIDAK BOLEH:\n- Pakai bot atau spam group\n- Tawarkan diskon di luar yang resmi\n- Klaim sebagai produk Anda sendiri\n- Pakai paid ads tanpa approval` },
]);

export const WORKFLOW_BUILDER_SAMPLE = ms([
  { id: "weekly", label: "SOP Mingguan", contentType: "markdown", content: `## Weekly Schedule (working solo, 25 jam/minggu)\n\n**Senin (4 jam)**\n- Content batch creation: 5 IG post + 2 TikTok scripts\n- Email newsletter draft\n\n**Selasa (3 jam)**\n- Customer service: reply WA & email\n- Komunitas check-in\n\n**Rabu (4 jam)**\n- New product development / improvement\n- Email sequence A/B test setup\n\n**Kamis (3 jam)**\n- Affiliate management\n- Pengiriman produk fisik (jika ada)\n\n**Jumat (4 jam)**\n- Analytics review\n- Plan minggu depan\n- Course/learning own development\n\n**Sabtu (3 jam)**\n- WA broadcast schedule\n- Live IG / TikTok\n\n**Minggu (rest)**` },
  { id: "checklists", label: "Checklists", contentType: "markdown", content: `## Daily Checklist (15 menit)\n\n☐ Reply DM/WA (max 30 menit)\n☐ Cek email pertanyaan urgent\n☐ Post 1 konten harian (story/feed)\n☐ Update tracker sales\n\n## Weekly Checklist (1 jam every Sunday)\n\n☐ Plan content next week\n☐ Review metrics (sales, traffic, engagement)\n☐ Identify 1 area for improvement\n☐ Send weekly email to list\n\n## Monthly Checklist (3 jam akhir bulan)\n\n☐ Financial review (revenue, expenses, profit)\n☐ Update product/funnel based on feedback\n☐ Plan next month campaign\n☐ Recharge: 1 day off` },
]);

export const AI_COACH_SAMPLE = ms([
  { id: "diagnosis", label: "Diagnosis Bisnis Anda", contentType: "markdown", content: `## Hasil Diagnosis: **"Stuck in Stage 2 — Validasi Audience"**\n\nBerdasarkan jawaban Anda, kondisi bisnis sekarang:\n\n- **Stage**: Sudah jualan 6-12 bulan dengan revenue Rp 2-5jt/bulan\n- **Bottleneck utama**: Audience belum cukup besar untuk convert konsisten\n- **Strength**: Anda punya 1 produk yang sudah validated (ada buyer)\n- **Weakness**: Traffic belum systematic, conversion rate masih rendah\n\n**Diagnosis ringkas**: Anda butuh **doubling traffic source** dan **systematizing follow-up** sebelum scale.` },
  { id: "plan", label: "Action Plan 30 Hari", contentType: "markdown", content: `## 30-Day Action Plan (custom untuk Anda)\n\n### Week 1: Audit & Fix\n- [ ] Audit halaman LP utama (pakai **Page Audit Bot**)\n- [ ] Fix 5 action items prioritas\n- [ ] Setup email opt-in di LP\n\n### Week 2: Content Foundation\n- [ ] Bikin 20 piece content batch (pakai **Copy Stack**)\n- [ ] Schedule posting 5x/minggu di IG + TikTok\n\n### Week 3: Funnel Activation\n- [ ] Setup welcome email sequence (pakai **Email Sequence**)\n- [ ] Aktifkan WA broadcast template (pakai **WA Blast**)\n\n### Week 4: Optimization\n- [ ] A/B test 3 headline variant (pakai **A/B Test Lab**)\n- [ ] Review weekly metrics, tweak yang tidak work` },
  { id: "tools", label: "Tool yang Dibutuhkan", contentType: "list-card", content: [
    { tool: "Page Audit Bot", reason: "Fix LP yang underperform", priority: "Week 1" },
    { tool: "Copy Stack", reason: "Generate 20 piece content batch", priority: "Week 2" },
    { tool: "Email Sequence", reason: "Setup welcome series 5 email", priority: "Week 3" },
    { tool: "WA Blast", reason: "Template broadcast WA mingguan", priority: "Week 3" },
    { tool: "A/B Test Lab", reason: "Test variant headline & CTA", priority: "Week 4" },
  ] },
]);

export const AD_INTELLIGENCE_SAMPLE = ms([
  { id: "score", label: "Score Iklan: 6.5/10", contentType: "markdown", content: `## Hasil Analisa\n\nIklan Anda punya **fundamental yang OK** tapi ada 5 hal yang bisa di-optimize untuk improve CTR & ROAS.` },
  { id: "criteria", label: "15 Kriteria Penilaian", contentType: "list-card", content: [
    { criteria: "Headline benefit-driven", score: "8/10", note: "Bagus, fokus ke 'hemat waktu'" },
    { criteria: "Visual eye-catching", score: "6/10", note: "Foto produk OK, tapi font terlalu kecil di mobile" },
    { criteria: "CTA jelas", score: "9/10", note: "Strong" },
    { criteria: "Audience relevance", score: "7/10", note: "OK, tapi bisa lebih spesifik" },
    { criteria: "Pain point visible", score: "5/10", note: "Pain point implisit, perlu lebih eksplisit" },
    { criteria: "Social proof", score: "3/10", note: "Tidak ada — bisa tambah '100+ ibu sudah'" },
    { criteria: "Urgency element", score: "4/10", note: "Tidak ada — bisa tambah 'promo 24 jam'" },
    { criteria: "Brand consistency", score: "7/10", note: "OK" },
    { criteria: "Color contrast", score: "8/10", note: "Bagus" },
    { criteria: "Format sesuai platform", score: "9/10", note: "Sesuai IG carousel format" },
    { criteria: "Text-to-image ratio", score: "5/10", note: "Text terlalu padat" },
    { criteria: "Trust signals", score: "4/10", note: "Tambah testimoni" },
    { criteria: "Logo/brand visibility", score: "6/10", note: "OK" },
    { criteria: "Mobile-readable", score: "5/10", note: "Font kecil di mobile" },
    { criteria: "Funnel alignment", score: "7/10", note: "OK, link ke LP yang relevan" },
  ] },
  { id: "improvements", label: "5 Saran Perbaikan", contentType: "markdown", content: `1. **Tambah social proof** ("Sudah 100+ ibu") — impact tinggi pada credibility\n2. **Perbesar font headline** — visibility di mobile critical\n3. **Tambah urgency** ("Promo 24 jam") — drive action faster\n4. **Tambah pain point** lebih eksplisit — "Capek mikirin menu MPASI?"\n5. **Reduce text density** — pakai max 6 kata di main visual` },
]);

export const CAMPAIGN_STUDIO_SAMPLE = ms([
  { id: "overview", label: "Campaign Overview", contentType: "markdown", content: `## Campaign: "MPASI Akhir Bulan Promo"\n**Durasi**: 7 hari (Senin - Minggu)\n**Goal**: 30 buyer baru, target revenue Rp 8.97jt\n**Budget**: Organic only\n**Channels**: IG, TikTok, WA, Email` },
  { id: "timeline", label: "Timeline 7 Hari", contentType: "list-card", content: [
    { day: "Senin", activity: "Teaser di IG + TikTok ('something cooking this week')", channel: "IG, TikTok" },
    { day: "Selasa", activity: "Reveal: launch promo + LP go-live", channel: "Email, IG" },
    { day: "Rabu", activity: "Testimoni post + WA broadcast 1", channel: "IG, WA" },
    { day: "Kamis", activity: "Behind-the-scenes course content", channel: "TikTok, Story" },
    { day: "Jumat", activity: "Live IG Q&A 30 menit + replay", channel: "IG Live" },
    { day: "Sabtu", activity: "Last 24h reminder", channel: "WA, Email" },
    { day: "Minggu", activity: "Final 4 hour countdown", channel: "All" },
  ] },
  { id: "scripts", label: "Scripts & Captions", contentType: "markdown", content: `## Caption launch (Selasa)\n\n"🍳 Promo akhir bulan dimulai!\n\nUntuk Bunda yang sudah eyeing course MPASI Batch Cooking, ini saat tepatnya. 7 hari ke depan, course Rp 299k jadi Rp 199k.\n\n12 video step-by-step + workbook + akses grup WA.\n\nKlik link di bio sebelum 31 Mei.\n\n#MPASIBatchCooking #PromoIbu"\n\n## TikTok hook (Selasa)\n\n"Bunda working mom, kalau Anda lagi struggle MPASI 30 hari ke depan, video ini buat Anda."` },
]);

export const ACTION_CENTER_SAMPLE: ToolOutput = {
  type: "json-card",
  data: {
    streak: 7,
    completedToday: 1,
    tasks: [
      { id: "t1", title: "Reply 5 DM tertua di Instagram", category: "communication", priority: "high", estimateMin: 15, completed: true },
      { id: "t2", title: "Posting 1 carousel IG (testimoni Bu Sarah)", category: "content", priority: "high", estimateMin: 30, completed: false },
      { id: "t3", title: "Review analytics 7 hari terakhir + catat 1 insight", category: "analytics", priority: "medium", estimateMin: 20, completed: false },
    ],
    motivationQuote: "Konsistensi 1 task per hari > sprint 10 task seminggu sekali.",
  },
};

export const MOCK_OUTPUTS: Record<string, ToolOutput> = {
  "niche-scanner": NICHE_SCANNER_SAMPLE,
  "competitor-spy": COMPETITOR_SPY_SAMPLE,
  "trend-radar": TREND_RADAR_SAMPLE,
  "persona-builder": PERSONA_BUILDER_SAMPLE,
  "lead-magnet": LEAD_MAGNET_SAMPLE,
  "product-wizard": PRODUCT_WIZARD_SAMPLE,
  "copy-stack": COPY_STACK_SAMPLE,
  "pricing-lab": PRICING_LAB_SAMPLE,
  "bundle-architect": BUNDLE_ARCHITECT_SAMPLE,
  "upsell-designer": UPSELL_DESIGNER_SAMPLE,
  "testimonial-formatter": TESTIMONIAL_FORMATTER_SAMPLE,
  "landing-page-builder": LANDING_PAGE_BUILDER_SAMPLE,
  "lp-prompt-generator": LP_PROMPT_GENERATOR_SAMPLE,
  "block-library": BLOCK_LIBRARY_SAMPLE,
  "funnel-in-a-box": FUNNEL_IN_BOX_SAMPLE,
  "ai-image-generator": AI_IMAGE_SAMPLE,
  "email-sequence": EMAIL_SEQUENCE_SAMPLE,
  "wa-blast": WA_BLAST_SAMPLE,
  "loyalty-blueprint": LOYALTY_BLUEPRINT_SAMPLE,
  reengagement: REENGAGEMENT_SAMPLE,
  "feedback-collector": FEEDBACK_COLLECTOR_SAMPLE,
  "page-audit": PAGE_AUDIT_SAMPLE,
  "ab-test-lab": AB_TEST_LAB_SAMPLE,
  "seo-aeo": SEO_AEO_SAMPLE,
  "sales-cockpit": SALES_COCKPIT_SAMPLE,
  "marketing-calendar": MARKETING_CALENDAR_SAMPLE,
  "affiliate-pack": AFFILIATE_PACK_SAMPLE,
  "workflow-builder": WORKFLOW_BUILDER_SAMPLE,
  "ai-coach": AI_COACH_SAMPLE,
  "ad-intelligence": AD_INTELLIGENCE_SAMPLE,
  "campaign-studio": CAMPAIGN_STUDIO_SAMPLE,
  "action-center": ACTION_CENTER_SAMPLE,
};

export function getMockOutput(toolId: string): ToolOutput {
  return MOCK_OUTPUTS[toolId] ?? GENERIC_TIPS;
}
