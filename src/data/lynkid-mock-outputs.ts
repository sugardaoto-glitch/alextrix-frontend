import type { ToolOutput } from "@/lib/types/output";

/* ─── helpers (reuse from mock-outputs.ts pattern) ─── */
function md(content: string): ToolOutput {
  return { type: "markdown", content };
}

function ms(
  sections: {
    id: string;
    label: string;
    contentType: "markdown" | "html" | "json-table" | "list-card";
    content: any;
  }[],
): ToolOutput {
  return { type: "multi-section", sections };
}

/* ═══════════════ ACQUIRE ═══════════════ */

export const SIDE_HUSTLER_SAMPLE = ms([
  {
    id: "overview",
    label: "Ringkasan",
    contentType: "markdown",
    content: `## 6 Ide Bisnis Sampingan untuk Niche Anda

Berdasarkan kata kunci yang Anda masukkan, berikut 6 model bisnis digital high-leverage yang bisa dimulai hari ini — tanpa modal besar, tanpa followers ribuan.`,
  },
  {
    id: "ideas",
    label: "6 Ide Cuan",
    contentType: "list-card",
    content: [
      { rank: 1, name: "PDF Framework Pack", demandScore: 9, competitionScore: 4, priceRange: "Rp 47k – Rp 197k", examples: ["Framework akronim 5-step", "Checklist anti-gagal", "Workbook isi-sendiri"], audienceFit: "Pemula yang butuh panduan terstruktur", fitForYou: "Bisa dikerjakan 100% dari HP. Margin 95%+." },
      { rank: 2, name: "Prompt Pack Premium", demandScore: 8, competitionScore: 3, priceRange: "Rp 29k – Rp 99k", examples: ["50 prompt ChatGPT untuk copywriting", "Mega-pack prompt Midjourney niche"], audienceFit: "User AI yang malas bikin prompt sendiri", fitForYou: "Zero design skill needed. Copy-paste production." },
      { rank: 3, name: "Template Canva Niche", demandScore: 8, competitionScore: 5, priceRange: "Rp 39k – Rp 149k", examples: ["30 template carousel IG", "Template story highlight cover"], audienceFit: "Kreator konten & UMKM", fitForYou: "Drag-and-drop, bisa batch-produce." },
      { rank: 4, name: "Mini-Course Video 7 Hari", demandScore: 7, competitionScore: 6, priceRange: "Rp 99k – Rp 499k", examples: ["7-Day email copywriting", "Crash course TikTok Ads"], audienceFit: "Profesional muda yang ingin upskill cepat", fitForYou: "Butuh rekam 7 video 10 menit. High perceived value." },
      { rank: 5, name: "Done-For-You Sistem", demandScore: 7, competitionScore: 4, priceRange: "Rp 197k – Rp 997k", examples: ["Sistem follow-up WA otomatis", "Sistem content calendar 30 hari"], audienceFit: "Pemilik bisnis yang time-poor", fitForYou: "Premium positioning. Leverage effort sekali → jual berkali-kali." },
      { rank: 6, name: "Membership Komunitas", demandScore: 6, competitionScore: 5, priceRange: "Rp 49k – Rp 199k/bulan", examples: ["Grup Telegram premium + weekly tips", "Community + monthly live Q&A"], audienceFit: "Orang yang butuh akuntabilitas + akses", fitForYou: "Recurring revenue. Butuh konsistensi mingguan." },
    ],
  },
]);

export const ICE_COLD_TRAFFIC_SAMPLE = ms([
  {
    id: "overview",
    label: "Ringkasan",
    contentType: "markdown",
    content: `## Ice Cold Traffic System — 12 Node Strategi

12 angle untuk mengubah audience **dingin** (belum pernah dengar Anda) menjadi pembeli pertama. Setiap node punya prompt siap pakai yang sudah disesuaikan dengan produk Anda.`,
  },
  {
    id: "nodes",
    label: "12 Traffic Nodes",
    contentType: "list-card",
    content: [
      { rank: 1, name: "Keyword Research (SEO)", demandScore: 9, competitionScore: 6, priceRange: "Free", examples: ["Riset 20 keyword long-tail profitabel"], audienceFit: "Cold audience via Google", fitForYou: "Foundation untuk organic traffic jangka panjang." },
      { rank: 2, name: "Product Review SEO", demandScore: 8, competitionScore: 5, priceRange: "Free", examples: ["Artikel review + perbandingan produk"], audienceFit: "Buyer-intent searcher", fitForYou: "High conversion dari commercial intent." },
      { rank: 3, name: "Facebook Viral Post", demandScore: 8, competitionScore: 7, priceRange: "Free", examples: ["Story-based post + CTA ke Lynk.id"], audienceFit: "FB group members", fitForYou: "Zero cost, high shareability." },
      { rank: 4, name: "Instagram Hook Reel", demandScore: 9, competitionScore: 8, priceRange: "Free", examples: ["15-detik hook → swipe ke link bio"], audienceFit: "IG scroll audience", fitForYou: "Viral potential jika hook kuat." },
      { rank: 5, name: "LinkedIn Professional", demandScore: 6, competitionScore: 3, priceRange: "Free", examples: ["Thought leadership post + link"], audienceFit: "Profesional & B2B", fitForYou: "Organic reach masih tinggi di LinkedIn." },
      { rank: 6, name: "Short-Form Video Script", demandScore: 9, competitionScore: 7, priceRange: "Free", examples: ["TikTok/Reels 30-detik + hook"], audienceFit: "Gen-Z & millennial", fitForYou: "Highest reach potential 2025." },
      { rank: 7, name: "YouTube Long-Form", demandScore: 7, competitionScore: 5, priceRange: "Free", examples: ["Video 10 menit + description SEO"], audienceFit: "Deep-interest viewer", fitForYou: "Evergreen traffic source." },
      { rank: 8, name: "SEO Blog Post", demandScore: 8, competitionScore: 6, priceRange: "Free", examples: ["Artikel 2000 kata H2-H3 optimized"], audienceFit: "Google searcher", fitForYou: "Compound traffic over time." },
      { rank: 9, name: "Medium Authority Article", demandScore: 6, competitionScore: 4, priceRange: "Free", examples: ["Republish blog ke Medium + backlink"], audienceFit: "Medium reader base", fitForYou: "Built-in audience + domain authority." },
      { rank: 10, name: "Google Search Ad", demandScore: 8, competitionScore: 7, priceRange: "Rp 5k–50k/klik", examples: ["Search ad targeting buyer keyword"], audienceFit: "High-intent buyer", fitForYou: "Fastest cold→buyer, tapi butuh budget." },
      { rank: 11, name: "Social Ad (FB/IG)", demandScore: 9, competitionScore: 8, priceRange: "Rp 3k–30k/klik", examples: ["Interest targeting + retargeting"], audienceFit: "Social scroller", fitForYou: "Scalable tapi butuh creative testing." },
      { rank: 12, name: "Solo Ad Email", demandScore: 5, competitionScore: 4, priceRange: "Rp 500k–2jt/blast", examples: ["Sewa list email orang lain"], audienceFit: "Email subscriber orang lain", fitForYou: "Quick test tapi quality bervariasi." },
    ],
  },
]);

export const MAX_ORGANIC_TRAFFIC_SAMPLE = ms([
  {
    id: "step1",
    label: "Step 1: 20 Keyword Pilihan",
    contentType: "markdown",
    content: `## Keyword Research — 20 Hidden Traffic Vaults

1. "cara memulai side hustle 2025"
2. "ide bisnis digital tanpa modal"
3. "template content calendar gratis"
4. "cara bikin ebook yang laku"
5. "strategi email marketing pemula"
6. "copywriting untuk landing page"
7. "cara jual produk digital di Indonesia"
8. "lead magnet yang efektif"
9. "cara optimasi Lynk.id"
10. "tutorial funnel sederhana"
11. "rekomendasi tool AI gratis untuk UMKM"
12. "cara bikin headline yang viral"
13. "konten TOFU MOFU BOFU contoh"
14. "marketing calendar Indonesia 2026"
15. "tips jualan di Instagram 2025"
16. "cara menulis sales page yang convert"
17. "micro-commitment copywriting"
18. "framework pricing produk digital"
19. "cara bikin PDF yang bisa dijual"
20. "strategi organic traffic tanpa iklan"`,
  },
  {
    id: "step2",
    label: "Step 2: 3 Content Blueprint",
    contentType: "markdown",
    content: `## 3 Content Blueprint untuk Keyword Terpilih

### Blueprint 1: "7 Langkah Bikin Side Hustle Digital Pertama Anda (Tanpa Skill Teknis)"
**H2-H3 Outline:**
- H2: Kenapa 2025 adalah tahun terbaik untuk mulai
- H2: 7 langkah anti-ribet dari nol ke produk pertama
  - H3: Pilih niche berdasar pengalaman, bukan passion
  - H3: Validasi ide dalam 48 jam
  - H3: Buat MVP (Minimum Viable Product) dalam 1 weekend
  - H3: Setup Lynk.id sebagai storefront
  - H3: Traffic gratis: 3 channel yang paling underrated
  - H3: First sale playbook
  - H3: Scale dari 1 juta ke 10 juta/bulan
- H2: Kesalahan fatal yang membunuh 90% side hustler pemula

### Blueprint 2: "Panduan Lengkap Email Marketing untuk Produk Digital Indonesia"
_(outline serupa, 8 H2 sections)_

### Blueprint 3: "Template Content Calendar 30 Hari untuk Seller Lynk.id"
_(outline serupa, fokus pada execution framework)_`,
  },
  {
    id: "step3",
    label: "Step 3: Artikel SEO Full",
    contentType: "markdown",
    content: `## Artikel SEO Full — "7 Langkah Bikin Side Hustle Digital Pertama Anda"

_(Artikel 2000+ kata dengan H2, H3, internal link suggestion, meta description, dan CTA ke Lynk.id.)_

**Meta Title:** 7 Langkah Side Hustle Digital 2025 — Panduan Pemula Tanpa Skill Teknis
**Meta Description:** Mulai bisnis digital pertama Anda hari ini. Panduan 7 langkah praktis dari riset niche sampai first sale — tanpa modal besar, tanpa coding.

---

Tahun 2025 adalah waktu terbaik untuk memulai bisnis sampingan digital...

_(preview — artikel lengkap akan di-generate saat backend AI aktif)_`,
  },
]);

export const ATTENTION_HIJACKER_SAMPLE = ms([
  {
    id: "overview",
    label: "Ringkasan",
    contentType: "markdown",
    content: `## 30 Hook Prompt — 6 Kategori Psychological Trigger

Setiap hook dirancang untuk **menghentikan scrolling** dalam 1.5 detik pertama. Ganti \`[keyword]\` dengan niche Anda, lalu gunakan sebagai opening caption, Reel hook, atau email subject line.`,
  },
  {
    id: "hooks",
    label: "Hook Library",
    contentType: "markdown",
    content: `### 🛑 Berhenti Scrolling (Pattern Interrupt)
1. "STOP. Kalau Anda masih pakai cara ini untuk [keyword], Anda sedang buang waktu."
2. "Ini bukan motivasi. Ini fakta brutal tentang [keyword] yang tidak ada yang mau bilang."
3. "Sebelum Anda scroll lagi — baca ini kalau Anda serius soal [keyword]."
4. "WARNING: Post ini mungkin bikin Anda tidak nyaman. Tapi [keyword] butuh kebenaran ini."
5. "Anda punya 3 detik. Kalau [keyword] penting buat Anda, berhenti di sini."

### 🧠 Otak Gatal (Curiosity Gap)
6. "Ada 1 trik [keyword] yang saya pelajari dari orang yang hasilkan Rp 500jt/bulan..."
7. "97% orang salah soal [keyword]. Sisanya? Mereka tahu rahasia ini."
8. "Saya hampir tidak share ini. Tapi [keyword] terlalu penting untuk disimpan sendiri."
9. "Bukan clickbait: ini benar-benar mengubah cara saya lihat [keyword]."
10. "Kalau Anda tahu apa yang saya tahu tentang [keyword], Anda sudah mulai kemarin."

### 💥 Sentil Ego (Identity Challenge)
11. "Kalau Anda masih bilang 'nanti aja' soal [keyword], Anda bukan target market saya."
12. "Orang biasa scroll past ini. Orang serius soal [keyword]? Mereka baca sampai habis."
13. "Anda boleh tidak setuju dengan saya soal [keyword]. Tapi jangan bilang Anda tidak dikasih tahu."
14. "Ini bukan untuk semua orang. Ini untuk 3% yang benar-benar serius soal [keyword]."
15. "Kalau [keyword] cuma hobi buat Anda, skip. Kalau ini masa depan Anda, lanjut."

### 🎁 Reward Instan (Dopamine Promise)
16. "Copy-paste 1 kalimat ini ke [keyword] Anda dan lihat hasilnya dalam 24 jam."
17. "Framework [keyword] ini bikin saya hemat 10 jam/minggu. Gratis untuk Anda."
18. "Screenshot post ini. Anda akan butuh nanti saat stuck dengan [keyword]."
19. "1 template [keyword] yang menghasilkan Rp 50jt+. Saya kasih gratis di sini."
20. "Buka notes app Anda. Tulis ini. Ini cheat code [keyword] yang Anda cari."

### 🪞 Cermin Akurat (Relatability Hook)
21. "Kalau Anda pernah merasa 'kok orang lain bisa [keyword], saya kok susah?' — ini untuk Anda."
22. "Dulu saya pikir [keyword] butuh talent. Ternyata butuh sistem. Ini sistemnya."
23. "Anda bukan malas soal [keyword]. Anda cuma belum punya framework yang benar."
24. "Merasa overwhelmed dengan [keyword]? Wajar. Ini yang saya lakukan untuk keluar dari situ."
25. "Kalau scrolling Anda malam ini soal [keyword], berarti Anda siap. Baca ini."

### 🚀 Tarikan Depan (Momentum Opener)
26. "Ini bukan teori. Ini playbook [keyword] yang sudah dijalankan 500+ orang."
27. "Dalam 5 menit ke depan, Anda akan punya strategi [keyword] yang lebih jelas dari 95% kompetitor Anda."
28. "Langkah 1 dari 3 untuk menguasai [keyword]. Simpan post ini."
29. "Anda cuma butuh 1 hal untuk mulai menghasilkan dari [keyword]. Ini dia."
30. "Mulai dari sini. Serius. [keyword] tidak perlu serumit yang Anda pikir."`,
  },
]);

export const LYNK_PRODUCT_OPTIMIZER_SAMPLE = md(`## Optimasi Deskripsi Produk — Lynk.id

### 🪝 Hook + Pain Point
> **Capek bikin MPASI setiap pagi tapi takut gizi bayi kurang?**
> Anda bukan sendiri. 8 dari 10 ibu baru di Indonesia mengalami ini.

### 💡 Solusi
Ebook **"Resep MPASI Praktis 6-12 Bulan"** memberikan Anda **25 resep terstruktur** yang:
- ✅ Bahan mudah didapat di pasar/minimarket
- ✅ Prep time < 15 menit
- ✅ Sudah divalidasi ahli gizi anak

### 🎁 Benefit Utama
| Benefit | Detail |
|---------|--------|
| Hemat waktu | Menu 1 minggu tinggal ikuti jadwal |
| Gizi seimbang | Setiap resep sudah dihitung kalori + nutrisi |
| Anti GTM | Teknik penyajian yang bikin baby excited |
| Komunitas | Akses grup WA 500+ ibu MPASI |

### 📦 Isi Produk
1. 📖 Ebook PDF 45 halaman — 25 resep lengkap
2. 📋 Meal plan 4 minggu + shopping list
3. 🎥 3 video tutorial resep favorit
4. 💬 Akses grup WA eksklusif (lifetime)

### 💰 Value Stacking
| Item | Nilai |
|------|-------|
| Ebook 25 resep | Rp 149.000 |
| Meal plan 4 minggu | Rp 79.000 |
| 3 video tutorial | Rp 99.000 |
| Akses komunitas WA | Rp 49.000 |
| **Total Nilai** | **Rp 376.000** |
| **Harga Anda Hari Ini** | **Rp 49.000** ✨ |

### 🔥 CTA
> **Dapatkan sekarang hanya Rp 49.000** — harga naik setelah 100 pembeli pertama.
> [BELI SEKARANG] ← tombol di Lynk.id`);

/* ═══════════════ CONVERT ═══════════════ */

export const BUSINESS_BLUEPRINT_SAMPLE = ms([
  {
    id: "overview",
    label: "Ringkasan Blueprint",
    contentType: "markdown",
    content: `## Master Business Blueprint — 15 Komponen

Dokumen ini adalah **peta pikiran bisnis** Anda yang mencakup seluruh aspek strategi: dari identitas bisnis sampai metrik target. Gunakan sebagai referensi utama sebelum membuat konten, campaign, atau produk baru.`,
  },
  {
    id: "identity",
    label: "1-4: Identitas & Data",
    contentType: "markdown",
    content: `### 1. Informasi Bisnis
- **Nama:** Dapur Mama Ina
- **Kategori:** Kuliner Anak / MPASI
- **Visi:** Menjadi platform edukasi MPASI #1 di Indonesia
- **Misi:** Membantu 100.000 ibu Indonesia memberi nutrisi terbaik untuk anak
- **Lokasi:** Jakarta Selatan

### 2. Data Potensial
- Produk: 3 (Ebook, Course, Membership)
- Varian: 5 (MPASI 6m, 9m, 12m, Snack, Meal Prep)
- Reseller: Belum ada (peluang 2026)

### 3. Data Pelanggan
- Total: 2.500+ pembeli
- Aktif: ~800 di komunitas WA
- Demografi: 85% wanita, 25-35 tahun, Jabodetabek 60%

### 4. Mitra Kunci
- Ahli gizi anak (konsultan konten)
- Influencer parenting micro (1k-10k followers)
- Lynk.id sebagai platform distribusi`,
  },
  {
    id: "usp",
    label: "5-6: USP & Brand Voice",
    contentType: "markdown",
    content: `### 5. USP (Unique Selling Proposition)
> **"25 resep MPASI yang bisa dimasak dalam 15 menit, bahan pasar biasa, sudah validasi ahli gizi — untuk ibu yang sibuk tapi peduli nutrisi."**

Differentiator vs kompetitor:
1. Waktu masak < 15 menit (kompetitor rata-rata 30-45 menit)
2. Bahan semua dari pasar/minimarket lokal (tidak perlu import)
3. Ada meal plan mingguan + shopping list

### 6. Bahasa Produk / Brand Voice
**Persona:** Kakak yang sudah pernah lewati fase MPASI — hangat, supportif, praktis.
**Tone:** Casual tapi terpercaya. Bahasa sehari-hari + data sesekali.
**Contoh kalimat:** "Gak perlu jadi chef, Mama. Yang penting konsisten & bahan fresh."`,
  },
  {
    id: "journey",
    label: "7: Customer Journey 8-Stage",
    contentType: "markdown",
    content: `### 7. Customer Journey — 8 Stage

| Stage | Taktik | Contoh Pesan |
|-------|--------|-------------|
| **Awareness** | Reels IG + TikTok | "3 kesalahan MPASI yang sering ibu lakukan" |
| **Engagement** | Carousel edukatif | "Jadwal MPASI 6 bulan: kapan mulai, berapa kali sehari?" |
| **Subscribe** | Lead magnet PDF | "Download GRATIS: 7 resep MPASI pertama untuk baby Anda" |
| **Convert** | Sales page Lynk.id | "Ebook 25 Resep MPASI — Rp 49.000 (dari Rp 149.000)" |
| **Excite** | Onboarding email | "Selamat! Ini cara paling efektif pakai ebook ini..." |
| **Ascend** | Upsell course | "Upgrade ke Video Course MPASI Lengkap — Rp 199.000" |
| **Advocate** | Referral program | "Share ke 3 teman, dapat resep bonus eksklusif" |
| **Promote** | Affiliate pack | "Jadi reseller ebook MPASI, komisi 30%" |`,
  },
  {
    id: "seo-campaign",
    label: "8-10: SEO, Campaign, Taktik",
    contentType: "markdown",
    content: `### 8. SEO
- **Primary keyword:** resep MPASI 6 bulan
- **Secondary:** menu MPASI mingguan, cara masak MPASI cepat
- **Technical:** Meta title < 60 char, alt text semua gambar, schema Recipe

### 9. Marketing Campaign
- **Tujuan:** 500 penjualan ebook di Q1 2026
- **Content pillar:** Resep cepat, Tips nutrisi, Cerita ibu
- **CTA utama:** "Beli ebook sekarang di Lynk.id"
- **Traffic source:** IG Reels 60%, TikTok 25%, Google 15%

### 10. Taktik (Multi-Channel)
- [x] Social media content (IG + TikTok)
- [x] Email nurturing sequence
- [x] WhatsApp broadcast bulanan
- [ ] Paid ads (budget belum siap)
- [x] SEO blog
- [ ] Webinar / live (Q2 2026)
- [x] Referral program`,
  },
  {
    id: "funnel-objectives",
    label: "11-13: Funnel, SMART, Cross-Channel",
    contentType: "markdown",
    content: `### 11. Content Funnel
| Level | Jenis | Contoh |
|-------|-------|--------|
| TOFU | Edukatif, awareness | Reels "3 bahan MPASI terbaik" |
| MOFU | Problem-solution | Carousel "Jadwal MPASI 6-12 bulan" |
| BOFU | Social proof + CTA | Testimoni + link Lynk.id |
| Lead Magnet | Free PDF | "7 Resep MPASI Pertama" |

### 12. SMART Objectives
- **S:** Jual 500 ebook MPASI
- **M:** Revenue Rp 24.5jt (500 × Rp 49k)
- **A:** Butuh ~5000 visitor Lynk.id (asumsi CR 10%)
- **R:** Sudah punya 800 komunitas aktif
- **T:** Q1 2026 (3 bulan)

### 13. Cross-Channel Selection
Instagram ✅ | TikTok ✅ | WhatsApp ✅ | Email ✅ | YouTube ⏳ | Lynk.id ✅ | Telegram ❌ | Blog ✅ | Podcast ❌ | LinkedIn ❌ | Pinterest ❌ | Twitter/X ❌`,
  },
  {
    id: "ads-metrics",
    label: "14-15: Ads Plan & Metrik",
    contentType: "markdown",
    content: `### 14. Advertising Plan
- **Situasi:** Belum pernah jalankan paid ads. Budget terbatas.
- **Strategi:** Mulai retargeting dulu (audience warm). Budget Rp 500k/bulan.
- **Kreatif:** Reuse Reel terbaik sebagai ad creative.
- **Promosi:** Flash sale bulanan di hari gajian (tanggal 25-28).
- **Evaluasi:** Weekly ROAS check.

### 15. Target Metrik
| Metrik | Target | Benchmark Indo |
|--------|--------|---------------|
| CPC (IG Ads) | < Rp 3.000 | Rp 1.500 – Rp 5.000 |
| CPL (lead magnet) | < Rp 5.000 | Rp 3.000 – Rp 15.000 |
| Conversion Rate | > 10% | 5% – 15% (digital prod) |
| ROAS | > 3x | 2x – 5x |
| Email open rate | > 30% | 20% – 35% |`,
  },
]);

export const BUSINESS_CANVAS_SAMPLE = ms([
  {
    id: "canvas",
    label: "Business Model Canvas",
    contentType: "markdown",
    content: `## Business Model Canvas — Analisis AI

| Blok | Isi |
|------|-----|
| **Customer Segments** | Ibu muda 25-35, karyawan yang ingin side hustle, kreator konten pemula |
| **Value Propositions** | Produk digital siap jual + tools AI untuk bikin lebih cepat |
| **Channels** | Lynk.id (storefront), Instagram, TikTok, WhatsApp, Email |
| **Customer Relationships** | Self-service + komunitas WA + email nurturing |
| **Revenue Streams** | One-time ebook (Rp 49k-199k), Course (Rp 199k-499k), Membership (Rp 49k/bln) |
| **Key Resources** | Content library, tool AI (Alextrix), database email |
| **Key Activities** | Content creation, product development, community management |
| **Key Partners** | Influencer micro, Lynk.id platform, AI providers (BYOK) |
| **Cost Structure** | Domain Rp 150k/thn, Canva Pro Rp 600k/thn, Email tool Rp 0-300k/bln |`,
  },
  {
    id: "analysis",
    label: "Analisis AI",
    contentType: "markdown",
    content: `### 🟢 Unfair Advantage
- Akses langsung ke komunitas 800+ ibu aktif di WA → built-in distribution
- Sudah punya 2.500 pembeli (database untuk upsell & referral)

### 🔴 Blind Spot
- Revenue 100% one-time. Belum ada recurring (membership/subscription).
- Tidak ada paid ads budget → scaling terbatas pada organic.
- Belum ada funnel email otomatis → banyak leads yang hilang.

### 💡 Rekomendasi
1. Luncurkan membership Rp 49k/bulan → target 100 member = Rp 4.9jt recurring/bulan
2. Setup email welcome sequence (3-5 email) → capture leads dari free PDF
3. Mulai retargeting ads dengan budget Rp 500k/bulan ke warm audience`,
  },
]);

export const CUSTOMER_JOURNEY_SAMPLE = ms([
  {
    id: "journey",
    label: "8-Stage Journey",
    contentType: "markdown",
    content: `## Customer Value Journey — 8 Tahap

### Stage 1: AWARENESS 🔔
**Goal:** Orang asing pertama kali tahu Anda ada.
- **Taktik:** IG Reels 15-30 detik + TikTok
- **Konten:** "3 kesalahan MPASI yang 90% ibu lakukan"
- **KPI:** Reach > 10.000/minggu

### Stage 2: ENGAGEMENT 💬
**Goal:** Mereka mulai interact (like, comment, save, share).
- **Taktik:** Carousel edukatif + polling Story
- **Konten:** "Quiz: Apakah menu MPASI Anda sudah seimbang?"
- **KPI:** Engagement rate > 5%

### Stage 3: SUBSCRIBE 📧
**Goal:** Mereka kasih data (email/WA) untuk konten gratis.
- **Taktik:** Lead magnet PDF via Lynk.id
- **Konten:** "Download GRATIS: 7 Resep MPASI Pertama"
- **KPI:** 200+ leads/bulan

### Stage 4: CONVERT 💰
**Goal:** Pembelian pertama.
- **Taktik:** Sales page + urgency + social proof
- **Konten:** "Ebook 25 Resep MPASI — Rp 49.000 (flash sale 3 hari)"
- **KPI:** Conversion rate > 10%

### Stage 5: EXCITE 🎉
**Goal:** Mereka WOW dengan produk dan langsung pakai.
- **Taktik:** Onboarding email + quick win
- **Konten:** "Mulai dari resep #3 — bisa selesai 10 menit!"
- **KPI:** Product usage rate > 60%

### Stage 6: ASCEND ⬆️
**Goal:** Beli produk yang lebih mahal.
- **Taktik:** Upsell email setelah 7 hari
- **Konten:** "Upgrade ke Video Course MPASI — Rp 199.000"
- **KPI:** Upsell rate > 15%

### Stage 7: ADVOCATE 📣
**Goal:** Mereka merekomendasikan ke teman tanpa diminta.
- **Taktik:** Referral program + share incentive
- **Konten:** "Share ke 3 teman ibu, dapat bonus resep eksklusif"
- **KPI:** Referral rate > 20%

### Stage 8: PROMOTE 🏆
**Goal:** Mereka jadi promotor aktif (affiliate/reseller).
- **Taktik:** Affiliate pack + komisi 30%
- **Konten:** "Jadi reseller ebook MPASI — passive income dari share link"
- **KPI:** 10+ affiliate aktif`,
  },
]);

export const VALUE_STACKER_SAMPLE = ms([
  {
    id: "phase1",
    label: "Phase 1: 15 Deliverable Ideas",
    contentType: "markdown",
    content: `## 15 Text-Only Deliverable untuk Niche Anda

| # | Nama | Tipe | Perceived Value |
|---|------|------|-----------------|
| 1 | The Rapid Action Blueprint | Framework 5-Step | Rp 197.000 |
| 2 | 30-Day Execution Calendar | Peta Progres | Rp 97.000 |
| 3 | Anti-Fail Checklist Pack | Checklist 20 item | Rp 47.000 |
| 4 | Objection Killer Script Bank | Swipe File 25 script | Rp 147.000 |
| 5 | The Decision Matrix | Decision Tree | Rp 67.000 |
| 6 | Niche Profit Calculator | Worksheet interaktif | Rp 97.000 |
| 7 | 100 Hook Headlines Vault | Swipe File | Rp 47.000 |
| 8 | The Perfect Offer Formula | Framework akronim | Rp 197.000 |
| 9 | Customer Journey Map Template | Worksheet | Rp 97.000 |
| 10 | Email Sequence Blueprint | Template 7-email | Rp 147.000 |
| 11 | Content Recycling System | Sistem | Rp 197.000 |
| 12 | Price Anchoring Playbook | Framework | Rp 67.000 |
| 13 | Weekly Review Worksheet | Worksheet | Rp 47.000 |
| 14 | Sales Page Wireframe | Template | Rp 97.000 |
| 15 | Launch Day Checklist | Checklist | Rp 47.000 |
| | **Total Perceived Value** | | **Rp 1.586.000** |

*Gunakan ini sebagai bonus stack di sales page Anda untuk meningkatkan perceived value hingga 10x harga jual.*`,
  },
  {
    id: "phase2",
    label: "Phase 2: Expanded Asset (Contoh)",
    contentType: "markdown",
    content: `## Asset Lengkap: "The Rapid Action Blueprint"

### Tentang Framework Ini
R.A.P.I.D. = **R**iset → **A**rsitektur → **P**roduksi → **I**terasi → **D**istribusi

### Section 1: RISET (Hari 1-2)
- Validasi ide dalam 48 jam tanpa bikin produk dulu
- Template survei 5 pertanyaan yang reveal buying intent
- Checklist: 10 sinyal bahwa niche Anda profitable

### Section 2: ARSITEKTUR (Hari 3-4)
- Outline produk digital dalam 1 halaman
- Format pilihan: PDF, mini-course, template pack
- Pricing matrix berdasarkan perceived value

### Section 3: PRODUKSI (Hari 5-7)
- Workflow produksi konten 3-hari
- Tool gratis: Canva, Google Docs, Loom
- Template: cover, layout, dan CTA page

### Section 4: ITERASI (Hari 8-10)
- 5 pertanyaan feedback untuk beta tester
- Rubrik penilaian kualitas produk digital

### Section 5: DISTRIBUSI (Hari 11-14)
- Setup Lynk.id storefront dalam 1 jam
- 3-email launch sequence template
- Social media launch playbook (7 post)

*Total: 9 halaman PDF, siap jual Rp 197.000*`,
  },
]);

export const YES_MACHINE_SAMPLE = ms([
  {
    id: "prompts",
    label: "25 Micro-Commitment Prompts",
    contentType: "markdown",
    content: `## Yes Machine — 5 Kategori × 5 Prompt

### 🪝 HOOK (Berhenti + Perhatikan)
1. "Kalau Anda sudah capek [keyword] tanpa hasil, ada sesuatu yang perlu Anda lihat."
2. "Ini bukan motivasi. Ini sistem [keyword] yang sudah dibuktikan 1000+ orang."
3. "Apakah Anda termasuk 3% yang serius soal [keyword]? Test: baca sampai habis."
4. "STOP scrolling — kalau [keyword] penting untuk penghasilan Anda."
5. "Rahasia [keyword] ini sudah ada di depan mata Anda. Kebanyakan orang scroll melewatinya."

### 🎯 MICRO-COMMITMENT (Anggukan Kecil Bertahap)
6. "Setuju kan, bahwa [keyword] itu bukan soal kerja keras — tapi soal sistem yang benar?"
7. "Pernah merasa 'kok orang lain bisa [keyword], saya kok stuck terus?' ← Normal."
8. "Kalau saya bilang ada cara [keyword] yang cuma butuh 30 menit/hari — Anda mau coba?"
9. "Bayangkan: 90 hari dari sekarang, [keyword] Anda sudah menghasilkan pasif income."
10. "Satu pertanyaan: apa yang berubah kalau [keyword] Anda akhirnya berhasil?"

### ⏰ URGENCY (Sekarang atau Tidak Sama Sekali)
11. "Harga ini hanya berlaku 48 jam. Setelah itu, [keyword] guide ini naik 2x lipat."
12. "Slot terbatas: hanya 50 orang yang dapat akses [keyword] framework ini bulan ini."
13. "Setiap hari Anda tunda [keyword], kompetitor Anda maju 1 langkah."
14. "Flash sale: [keyword] toolkit lengkap — Rp 49.000 (dari Rp 197.000). Hari ini saja."
15. "Anda sudah tahu [keyword] itu penting. Yang kurang bukan informasi — tapi aksi. Mulai sekarang."

### 🏷️ IDENTITY (Anda = Orang Ini)
16. "Ini untuk orang yang serius soal [keyword] — bukan yang cuma window shopping."
17. "Kalau Anda tipe yang action duluan, pikir belakangan — [keyword] ini untuk Anda."
18. "Bukan untuk semua orang. Tapi kalau [keyword] = masa depan karir Anda, lanjut."
19. "Anda bukan pemula di [keyword]. Anda cuma butuh sistem yang lebih sharp."
20. "Join 1.200+ orang yang sudah bilang 'iya' untuk [keyword] dan tidak pernah lihat ke belakang."

### 🔥 CTA (Tindakan Sekarang)
21. "Klik di bawah. Satu klik = satu langkah lebih dekat ke [keyword] yang menghasilkan."
22. "Download sekarang. Gratis. Anda kehilangan lebih banyak dengan TIDAK download."
23. "[keyword] framework ini sudah ada di tangan Anda. Tinggal klik."
24. "Anda punya 2 pilihan: scroll dan lupa, atau klik dan mulai [keyword] hari ini."
25. "Investasi Rp 49.000 hari ini, atau bayar Rp 10 juta di trial-and-error nanti. Pilih."`,
  },
]);

export const EXCLUSION_MACHINE_SAMPLE = ms([
  {
    id: "filters",
    label: "Filter Audiens — 8 Kategori",
    contentType: "markdown",
    content: `## Exclusion Machine — Copy yang Menarik Buyer & Menolak Window Shopper

### 🎭 Identitas & Seleksi
- "Ini BUKAN untuk Anda kalau Anda masih nyari 'cara cepat kaya dari [keyword]'."
- "Kalau [keyword] cuma side project yang Anda kerjain kalau mood — skip ini."

### 🧠 Pola Pikir Lemah
- "Kalau Anda butuh orang lain untuk motivasi Anda soal [keyword] setiap hari — ini bukan tempat Anda."
- "Masih percaya [keyword] bisa berhasil tanpa effort? Maka Anda belum siap."

### ⚡ Aksi vs. Omong Kosong
- "Kalau Anda tipe yang 'nanti aja' setiap kali ada peluang [keyword] — ini bukan untuk Anda."
- "Yang kami cari: orang yang langsung eksekusi setelah baca. Bukan yang screenshot terus lupa."

### 📚 Belajar vs. Eksekusi
- "Stop beli course lagi soal [keyword]. Yang Anda butuh bukan lebih banyak info — tapi AKSI."
- "Ini bukan course. Ini sistem. Kalau Anda cari teori, cari di YouTube. Gratis."

### 🎯 Fokus & Disiplin
- "Kalau Anda ganti strategi [keyword] setiap minggu, jangan beli ini."
- "Dibangun untuk orang yang committed 90 hari. Bukan 90 menit."

### 👑 Otoritas & Integritas
- "Kami tidak janji [keyword] Anda akan menghasilkan Rp 100jt/bulan. Tapi kami janji sistem ini works."
- "Kalau Anda butuh income proof sebelum mulai — Anda belum siap."

### ⏳ Jangka Panjang
- "Ini untuk orang yang bangun [keyword] untuk 5 tahun ke depan. Bukan 5 hari."

### 📊 Metrik & Hasil Nyata
- "Kalau Anda tidak mau track metrics [keyword], Anda tidak serius. Simple."`,
  },
]);

export const OBJECTION_CRUSHER_SAMPLE = ms([
  {
    id: "sections",
    label: "10 Bagian Sales Page",
    contentType: "markdown",
    content: `## Objection Crusher — 10-Section Sales Page Builder

### 🪝 Section 1: Hook / Perhatian
> **"Anda sudah scroll 10 menit dan belum menemukan jawaban soal [keyword]. Berhenti di sini."**
Paragraf pembuka yang langsung menyampaikan janji terbesar. Setiap kata dipilih untuk menahan perhatian 3 detik kritis pertama.

### 🎯 Section 2: Relevansi
"Ini untuk Anda kalau..." — daftar 5 kondisi spesifik yang membuat setiap tipe prospek merasa dipanggil secara personal.

### 🛡️ Section 3: Kepercayaan
Siapa Anda, kenapa Anda qualified. Bukan CV — tapi cerita yang membangun kredibilitas lewat pengalaman nyata.

### 🤨 Section 4: Skeptisisme
Preemptive strike terhadap keraguan: "Saya tahu Anda mungkin berpikir 'ini pasti sama aja'..." — lalu counter dengan mekanik yang berbeda.

### 🧠 Section 5: Kompleksitas
Tunjukkan 3-step sederhana. Prospek harus yakin mereka BISA melakukannya. Diagram atau step-by-step visual.

### 💰 Section 6: Harga
Value stack + anchor. "Total nilai Rp 1.5jt, Anda bayar Rp 49k."

### 🤷 Section 7: Tidak Merasa Butuh
"Kalau selama ini Anda baik-baik saja tanpa [keyword]... berapa lama lagi sebelum Anda sadar sedang kehilangan Rp XX juta/bulan?"

### 😨 Section 8: Ketakutan / Risiko
"Garansi 14 hari. Kalau tidak work, uang kembali 100%. Anda literally tidak kehilangan apa-apa."

### 🔁 Section 9: Penundaan
"Setiap hari Anda tunda, kompetitor Anda sudah action. Anda mau jadi yang mana?"

### ⌛ Section 10: Biaya Tidak Bertindak
"Cost of inaction: 365 hari × hilangnya potensi Rp [X] = Rp [total]. Itu harga 'nanti aja'."`,
  },
]);

export const FAMOUS_COPY_SAMPLE = ms([
  {
    id: "frameworks",
    label: "5 Legendary Frameworks",
    contentType: "markdown",
    content: `## Famous Copy Engine — 5 Framework Copywriting Legendaris

### 📕 1. Breakthrough Advertising — Eugene Schwartz
**5 Level Awareness:** Unaware → Problem-Aware → Solution-Aware → Product-Aware → Most-Aware
_Contoh pembuka:_ "Anda mungkin belum sadar, tapi cara Anda handle [keyword] sedang merugikan Anda setiap hari..."
_Best for:_ Cold audience yang belum tahu produk Anda.

### 📗 2. The Ultimate Sales Letter — Dan Kennedy
**Struktur:** Headline → Problem agitasi → Solusi → Proof → Offer → Urgency → Close
_Contoh headline:_ "BERHENTI Buang Uang untuk [keyword] yang Tidak Bekerja — Inilah yang Benar-Benar Menghasilkan"
_Best for:_ Direct response sales page.

### 📘 3. Cashvertising — Drew Eric Whitman
**8 Primal Desires** yang trigger buying behavior: survival, food/drink, freedom from pain, sexual companionship, comfortable living, superiority, care for loved ones, social approval.
_Best for:_ Emotional hooks dan headline.

### 📙 4. Influence — Dr. Robert Cialdini
**6 Prinsip Persuasi:** Reciprocity, Commitment, Social Proof, Authority, Liking, Scarcity
_Best for:_ Struktur sales page yang memanfaatkan bias kognitif.

### 📓 5. Scientific Advertising — Claude Hopkins
**Prinsip:** Treat advertising as science. Measurable, testable, logical.
_Best for:_ Copy yang data-driven dan anti-hype.`,
  },
]);

export const ZERO_PROOF_SELLING_SAMPLE = ms([
  {
    id: "proofs",
    label: "12 Statement Otoritas",
    contentType: "markdown",
    content: `## Zero Proof Selling — Trust Tanpa Testimoni

### Mode 1: Proof Without Proof
1. "Anda tidak perlu percaya saya. Lihat prosesnya — saya tunjukkan mekaniknya step-by-step."
2. "Saya tidak punya 10.000 murid. Tapi saya punya sistem yang sudah saya gunakan setiap hari selama 2 tahun."
3. "Testimoni bisa di-fake. Yang tidak bisa di-fake: kemampuan saya menjelaskan [keyword] sedetail ini."

### Mode 2: Borrowed Certainty
4. "Anda tahu itu benar karena Anda pernah mengalaminya sendiri: [keyword] tanpa sistem = buang waktu."
5. "Ini bukan trik baru. Ini prinsip yang sama yang dipakai [figure] selama 20 tahun — saya hanya simplifikasi."
6. "Setiap orang yang sukses di [keyword] melakukan ini. Saya cuma mendokumentasikannya."

### Mode 3: Process Credibility
7. "Produk ini bukan saya yang bicara. Ini sistemnya yang bekerja. Anda tinggal ikuti step-nya."
8. "Tidak perlu talent khusus. Cukup ikuti proses yang sudah saya breakdown ke level paling sederhana."
9. "Saya tidak bilang 'percaya saya'. Saya bilang 'coba prosesnya 7 hari, lihat hasilnya sendiri'."

### Mode 4: Problem Fluency
10. "Saya tahu Anda pernah beli 3+ course [keyword] dan masih stuck. Itu bukan salah Anda — tapi salah formatnya."
11. "Masalah Anda bukan kurang informasi. Masalah Anda: tidak ada yang kasih urutan yang benar."
12. "Anda terjebak antara 'terlalu banyak opsi' dan 'tidak tahu harus mulai dari mana'. Saya pernah di situ."`,
  },
]);

export const DIGITAL_ASSET_CREATOR_SAMPLE = ms([
  {
    id: "ideas",
    label: "7 Ide Digital Asset",
    contentType: "list-card",
    content: [
      { rank: 1, name: "The P.R.O.F.I.T. Framework", demandScore: 9, competitionScore: 3, priceRange: "Rp 197k", examples: ["P=Positioning, R=Research, O=Offer, F=Funnel, I=Iterate, T=Track"], audienceFit: "Seller digital pemula", fitForYou: "Acronym-based, instantly memorable." },
      { rank: 2, name: "The Launch Machine System", demandScore: 8, competitionScore: 4, priceRange: "Rp 297k", examples: ["7-step launch sequence dari soft launch ke full scale"], audienceFit: "Creator yang mau launch produk pertama", fitForYou: "Plug-and-play, step by step." },
      { rank: 3, name: "Anti-Gagal Checklist Pack", demandScore: 9, competitionScore: 3, priceRange: "Rp 97k", examples: ["20 item checklist pre-launch, post-launch, dan weekly"], audienceFit: "Detail-oriented seller", fitForYou: "Quick production, high value." },
      { rank: 4, name: "Strategic Clarity Worksheet", demandScore: 7, competitionScore: 4, priceRange: "Rp 67k", examples: ["Fill-in-the-blank worksheet untuk niche validation"], audienceFit: "Solopreneur", fitForYou: "Low effort, panduan thinking tool." },
      { rank: 5, name: "Niche Profit Decision Tree", demandScore: 7, competitionScore: 3, priceRange: "Rp 127k", examples: ["If this → do that flowchart for niche selection"], audienceFit: "Analysis paralysis people", fitForYou: "Visual, unique format." },
      { rank: 6, name: "90-Day Milestone Roadmap", demandScore: 8, competitionScore: 4, priceRange: "Rp 147k", examples: ["Week-by-week milestone dari Rp 0 ke Rp 10jt"], audienceFit: "Goal-oriented starter", fitForYou: "Transforms overwhelm → momentum." },
      { rank: 7, name: "Shortcut Survival Guide", demandScore: 7, competitionScore: 3, priceRange: "Rp 47k", examples: ["15 shortcut yang memadatkan 6 bulan trial-error ke 2 minggu"], audienceFit: "Impatient beginners", fitForYou: "Easy win, impulse-buy price." },
    ],
  },
]);

/* ═══════════════ RETAIN ═══════════════ */

export const INBOX_BOOSTER_SAMPLE = ms([
  {
    id: "modules",
    label: "10 Email Optimization Modules",
    contentType: "markdown",
    content: `## Inbox Booster — 10 Modul Perbaikan Email

### 📩 1. Spam Filter Fixer
Audit email Anda terhadap trigger kata spam: "gratis", "KLIK SEKARANG", ALL CAPS, excessive emoji. Rewrite suggestions yang tetap persuasif tanpa kena filter.

### 📊 2. CTR Booster
Upgrade setiap link/CTA: button text yang spesifik ("Lihat 25 resep →" vs "Klik di sini"), positioning CTA setelah value bukan sebelum.

### 🗣️ 3. Human Voice Optimizer
Rewrite robotic sentences ke conversational tone. "Dear customer" → "Hey Mama" — sesuai brand voice Anda.

### 🛡️ 4. Objection Obliterator
Sisipkan preemptive answers ke keberatan pembaca: "Mungkin Anda pikir 'email lagi?' — tapi ini beda karena..."

### 🔥 5. Desire Dial-Up
Amplify emotional triggers: before/after contrast, future pacing, loss aversion hooks.

### ✅ 6. Inbox Integrity Check
Konsistensi janji subject line vs isi email. Kalau subject bilang "3 tips", isi harus ada 3 tips.

### 💎 7. Clarity & Flow
Hapus filler words, redundansi, dan paragraph bloat. Setiap kalimat harus earn its place.

### 🎭 8. Tone & Audience Alignment
Match email tone ke segmen audience. B2B ≠ B2C ≠ community member.

### ✂️ 9. Length Trimmer
Potong email ke optimal length: sales = 300-500 kata, newsletter = 200-300 kata, nurture = 150-200 kata.

### 🎪 10. Cliffhanger Infuser
Tambahkan open loop di akhir email: "Besok saya akan share satu framework yang mengubah cara saya... [stay tuned]"`,
  },
]);

export const CLICK_CANDY_SAMPLE = ms([
  {
    id: "templates",
    label: "4 Email Templates",
    contentType: "markdown",
    content: `## Click Candy — 4 Email Template (Gaya: Ben Settle)

### 💊 Template 1: Dopamine Stack
**Subject:** Jangan buka email ini kalau Anda belum siap [keyword]
**Preview:** Ada sesuatu yang saya tutup-tutupi selama 6 bulan...

_Body:_ Opening dengan forbidden knowledge angle → micro-story 3 paragraf → pivot ke offer → CTA single link.

_Kenapa ini works:_ Dopamine dari curiosity gap + exclusivity signal.

---

### 🔄 Template 2: Objection Flip
**Subject:** "Terlalu mahal" ← inilah yang sebenarnya Anda bayar
**Preview:** Cost of NOT buying jauh lebih besar...

_Body:_ Acknowledge objection → flip frame ke opportunity cost → math breakdown → CTA.

---

### 👁️ Template 3: Hyper-Skim Node
**Subject:** 3 hal soal [keyword] — baca dalam 47 detik
**Preview:** No fluff. Just 3 bullets.

_Body:_ 3 single-sentence takeaways → "Mau lebih detail? [link]" → Sign off.

_Kenapa works:_ Respect reader's time = trust builder.

---

### 🔮 Template 4: Curiosity Trap
**Subject:** Saya hampir delete email ini sebelum kirim
**Preview:** Tapi [keyword] terlalu penting untuk diam...

_Body:_ Self-doubt opening → vulnerable story → lesson learned → offer sebagai natural conclusion → CTA.`,
  },
]);

export const THE_ONE_SAMPLE = ms([
  {
    id: "funnel",
    label: "4-Step Discovery Funnel",
    contentType: "markdown",
    content: `## The One — Temukan Kombinasi Winning Anda

### Step 1: IDENTITY — 5 Audiens Spesifik
1. Ibu muda 25-30 yang baru punya baby pertama di kota besar
2. Karyawan kantoran 28-35 yang ingin side income dari produk digital
3. Freelancer kreatif yang capek trading time for money
4. Fresh graduate yang tidak mau kerja kantoran 9-5
5. Pemilik UMKM yang mau go digital tapi bingung mulai dari mana

### Step 2: PRESSURE — 5 Pain Point untuk Audiens #1 (Ibu Muda)
1. Overwhelmed bikin menu MPASI setiap hari — takut gizi kurang
2. Info MPASI di internet terlalu banyak & saling kontradiksi
3. Tidak punya waktu lama di dapur karena baby rewel
4. Budget terbatas, tidak bisa beli bahan premium terus-menerus
5. Merasa sendiri — tidak ada support system sesama ibu

### Step 3: VEHICLE — 5 Produk Digital yang Solve Pain #1
1. Ebook "25 Resep MPASI 15 Menit" (Rp 49k)
2. Video Course "Batch Cooking MPASI 1 Minggu" (Rp 199k)
3. Template Meal Plan 30 Hari + Shopping List (Rp 39k)
4. Membership Komunitas WA + Live Mingguan (Rp 49k/bulan)
5. Bundle: Ebook + Template + Komunitas (Rp 99k)

### Step 4: FLOW — Platform Optimal
**Rekomendasi: Instagram → Lynk.id**
- Instagram Reels untuk awareness (reach 10k+/minggu)
- Story carousel untuk engagement (save + share)
- Link bio → Lynk.id storefront untuk conversion
- WhatsApp group untuk retention + community

**Kenapa bukan TikTok?** Audience ibu muda 25-30 lebih aktif di IG. TikTok bisa jadi secondary channel.`,
  },
]);

export const TRUST_BUILDER_SAMPLE = ms([
  {
    id: "frameworks",
    label: "3 Trust Frameworks",
    contentType: "markdown",
    content: `## Trust Builder — 3 Framework Kepercayaan Jangka Panjang

### 🪟 1. Radical Transparency
Akui apa yang produk Anda BUKAN:
> "Ebook ini bukan pengganti konsultasi ahli gizi. Ini panduan praktis dari ibu ke ibu — berdasarkan pengalaman memasak 500+ resep MPASI untuk 2 anak saya sendiri."

> "Saya bukan nutritionist bersertifikat. Tapi resep-resep ini sudah di-review oleh 3 ahli gizi anak."

> "Kalau Anda cari course mahal dengan produksi video studio — ini bukan itu. Ini raw, practical, dan 100% actionable."

### 🪞 2. Mirror Empathy
Cerminkan dialog internal pembeli:
> "Jam 5 pagi. Baby nangis. Anda buka kulkas dan blank — mau masak apa? Google? Kebanyakan resep. WA group? Beda pendapat semua. Anda cuma mau satu jawaban: 'resep ini aman dan selesai 15 menit.' Itu exactly apa yang ebook ini berikan."

### 🔬 3. Specific Proof
Mekanik detail tanpa hype:
> "Setiap resep di-format dengan: (1) bahan + jumlah exact, (2) step-by-step dengan timer, (3) variasi substitusi bahan, (4) info nutrisi per porsi. Tidak ada yang namanya 'secukupnya' atau 'sesuai selera'."`,
  },
]);

export const INSTANT_CREDIBILITY_SAMPLE = ms([
  {
    id: "angles",
    label: "4 Credibility Angle",
    contentType: "markdown",
    content: `## Instant Credibility — Otoritas Tanpa Gelar

### ⚡ Instant Influence Triggers
- **Expert Title Generator:** "MPASI Strategy Consultant" / "Digital Product Architect" / "Content Monetization Advisor" — judul yang membangun otoritas tanpa memerlukan lisensi.
- **Authority Leak:** "5 insight [keyword] yang saya dapat dari private masterminds — tanpa sebut nama."
- **Ghost Cred Drop:** "Dulu saya ghostwrite konten [keyword] untuk akun-akun besar. Ini yang saya pelajari..."

### 🎯 Implied-Expertise & Positioning
- **Obsession Origin:** Cerita bagaimana Anda jadi obsesif terhadap [keyword] — passion > credentials.
- **Trend Analyst:** Analisis tren [keyword] yang menunjukkan Anda hidup di dalam industri.

### 📚 Borrowed Authority
- **Peer Frame:** "Russell Brunson bilang X soal [keyword]. Saya setuju, tapi ada satu hal yang dia miss..."
- **Thought Expander:** "Terinspirasi dari [figure], tapi ini cara saya bawa ke level berikutnya..."

### 🧬 Invented Language
- Buat terminologi unik yang jadi milik Anda: "The Scroll-Stop Method", "The 15-Minute MPASI System", "The Zero-Proof Framework"
- Kalau Anda punya istilah sendiri, Anda terlihat seperti penemu, bukan peniru.`,
  },
]);

/* ═══════════════ OPTIMIZE ═══════════════ */

export const LEGAL_DASHBOARD_SAMPLE = ms([
  {
    id: "policies",
    label: "6 Dokumen Legal",
    contentType: "markdown",
    content: `## Legal Dashboard — 6 Draft Hukum Siap Pakai

### 📋 1. Privacy Policy
**Untuk:** Website & Lynk.id page Anda
> Kami, [Nama Bisnis], menghormati privasi Anda. Kebijakan ini menjelaskan jenis data yang kami kumpulkan (nama, email, riwayat pembelian), bagaimana kami menggunakannya (komunikasi marketing, peningkatan layanan), dan hak Anda (akses, koreksi, penghapusan data).
> Kami tidak menjual data Anda ke pihak ketiga. Data disimpan selama akun Anda aktif.
> Hubungi [email] untuk pertanyaan terkait privasi.

### 📄 2. Terms of Service
**Untuk:** Semua produk digital Anda
> Dengan membeli produk dari [URL], Anda menyetujui ketentuan berikut: (1) Produk digital untuk penggunaan personal, (2) Tidak boleh di-redistribute tanpa izin, (3) Akses diberikan setelah pembayaran terverifikasi...

### ⚠️ 3. Marketing Disclaimer
> Hasil yang ditampilkan bukan jaminan. Setiap individu memiliki kondisi, effort, dan starting point yang berbeda. Konten kami bersifat edukatif, bukan nasihat profesional.

### 💰 4. Earnings Disclaimer
> Angka pendapatan yang disebutkan adalah contoh dari studi kasus tertentu. Kami tidak menjamin hasil serupa. Kesuksesan bergantung pada banyak faktor termasuk usaha, konsistensi, dan kondisi pasar.

### 📥 5. Digital Download Terms
> Produk digital tidak bisa di-refund setelah diunduh kecuali terbukti rusak/tidak sesuai deskripsi.

### 🔄 6. Refund Policy
> Garansi 14 hari dari tanggal pembelian. Syarat: (1) Belum download/akses konten utama, atau (2) Produk terbukti tidak sesuai deskripsi. Hubungi [email] untuk proses refund.

---
⚠️ *Disclaimer: Ini adalah draft template. Konsultasikan dengan konsultan hukum profesional sebelum implementasi resmi.*`,
  },
]);

export const CONTENT_REWRITE_SAMPLE = ms([
  {
    id: "result",
    label: "Hasil Rewrite",
    contentType: "markdown",
    content: `## Content Rewrite — Mode: Ultimate Stealth (Humanisasi)

### Sebelum:
> "Dalam dunia digital marketing yang semakin kompetitif, penting bagi setiap pemasar untuk memahami fundamental strategi konten yang efektif. Dengan pendekatan yang tepat, Anda dapat meningkatkan engagement dan konversi secara signifikan."

### Sesudah:
> "Marketing digital makin ramai — dan kalau cara Anda masih sama dengan 2 tahun lalu, hasilnya pasti mulai turun. Yang berubah bukan algoritma saja; cara orang konsumsi konten sudah beda total. Ini yang perlu Anda sesuaikan."

### Apa yang berubah:
- ❌ Opening generik "dalam dunia..." → ✅ Statement langsung yang relatable
- ❌ Kalimat panjang abstrak → ✅ Kalimat pendek dengan ritme varied
- ❌ Buzz words ("fundamental", "signifikan") → ✅ Bahasa natural
- ❌ Passive voice → ✅ Active, direct address
- ❌ Template cadence → ✅ Human thought flow

*AI Detection Score (estimated): sebelum 95% AI, sesudah < 15% AI*`,
  },
]);

export const PROMPT_CREATOR_PRO_SAMPLE = md(`## Meta-Prompt Hasil Generate

\`\`\`
Bertindaklah sebagai seorang ahli strategi pemasaran konten, spesialis psikologi konsumen, dan arsitek funnel konversi yang bekerja dalam sinergi ketat. Tugas Anda adalah merancang urutan email nurturing 7-hari untuk produk digital di niche [TOPIK/NICHE ANDA] yang mengubah subscriber baru menjadi pembeli pertama. Setiap email harus dibangun berdasarkan prinsip micro-commitment — memulai dari nilai gratis yang membuktikan expertise, lalu secara bertahap membangun trust dan desire sampai email ke-7 berisi penawaran final yang terasa seperti kesimpulan logis bukan hard sell. Hindari template generik, buka setiap email dengan hook yang spesifik dan situasional, gunakan bahasa conversational yang terasa ditulis oleh manusia bukan AI, dan pastikan setiap email memiliki satu CTA yang jelas. Sertakan subject line untuk setiap email yang mengoptimalkan open rate tanpa clickbait. Output harus berupa 7 email lengkap siap kirim, bukan outline atau bullet points.
\`\`\`

### Cara Pakai:
1. Ganti \`[TOPIK/NICHE ANDA]\` dengan niche spesifik Anda
2. Copy-paste ke ChatGPT, Gemini, atau Claude
3. Hasilnya langsung bisa dipakai — tanpa revisi ulang

### Kenapa Prompt Ini Efektif:
- 3 expert role yang sinergi (strategist + psychologist + funnel architect)
- Satu placeholder yang jelas
- Anti-output-generik: constraint "hindari template generik" + "conversational tone"
- Format output yang spesifik: "7 email lengkap siap kirim, bukan outline"`);

export const LP_MASTER_PRO_SAMPLE = md(`# 🎯 Master Prompt Landing Page — LP Master PRO

\`\`\`
SISTEM ENGINE: LynkCraft AI Code Agent (Master Mode)

ROLE
Anda adalah AI Code Agent spesialis Frontend & UI/UX untuk Lynk.id. Output WAJIB
HTML statis single-file dengan **inline CSS only** (tidak boleh class Tailwind,
external CSS, atau <style>/<head>/<body>).

PRODUK
- Nama: Ebook Resep MPASI Praktis 6-12 Bulan
- Deskripsi: 50+ resep MPASI bergizi, panduan textur per usia, meal-prep weekend
- Harga: Rp 99.000
- Target audience: Ibu muda 25-35 tahun di Jabodetabek dengan baby 6-24 bulan,
  sibuk kerja, peduli nutrisi, takut salah masak

PAGE TYPE: Penjualan Produk Digital
Struktur halaman wajib mengikuti template di bawah:
1. HEADER: Logo + headline utama + subheadline + banner/VSL + bullet manfaat +
   penawaran eksklusif + CTA + penegasan
2. PROBLEM: Headline emosional + masalah utama + amplifikasi → transisi positif
3. SOLUTION: Pengantar produk + manfaat utama (ikon + ringkasan) + cara kerja
4. PROOF: Testimoni 3-5 orang + before-after + media logo
5. OFFER: Detail apa yang didapat + bonus + urgensi (timer) + jaminan
6. FAQ: 5-7 keberatan utama dengan jawaban
7. FINAL CTA: Hero text ulang + tombol checkout besar + risk reversal

DESIGN THEME: Luxury / Editorial
- Background: #F9F8F6 (warm alabaster, BUKAN putih murni)
- Foreground: #1A1A1A (rich charcoal, BUKAN hitam murni)
- Muted bg: #EBE5DE (pale taupe)
- Muted fg: #6C6863 (warm grey)
- Accent: #D4AF37 (metallic gold) — pakai sparingly, hanya hover/underline/focus
- Heading font: 'Playfair Display' (high-contrast serif)
- Body font: 'Inter' (humanist sans-serif)
- Spacing: generous (lebih spacious dari biasanya)
- Motion: cinematic 1500-2000ms transitions
- Layered depth: subtle shadows (rgba(0,0,0,0.04) max), inner borders, NO harsh drops

CONSTRAINTS (CRITICAL — JANGAN DILANGGAR)
1. **HANYA inline CSS** dalam atribut style="..." pada setiap elemen
2. **TIDAK BOLEH** ada class Tailwind, external stylesheet, <style>, atau <link>
3. **TIDAK BOLEH** ada <html>, <head>, <body> wrapper (Lynk.id melarang)
4. Single file output, fully self-contained, mobile-first responsive
5. Bahasa Indonesia native (BUKAN translation literal)
6. Setiap CTA ngarah ke {{CHECKOUT_URL}} placeholder
7. Output: HANYA kode HTML diapit \\\`\\\`\\\`html ... \\\`\\\`\\\` (no extra commentary)

OUTPUT
Hasilkan SELURUH HTML landing page lengkap mengikuti struktur "Penjualan Produk
Digital" + design DNA "Luxury" di atas. Wajib mobile-first responsive, accessible,
dan emotional copywriting tone (BUKAN feature-list mode).
\`\`\`

---

## 📌 Cara pakai

1. **Copy seluruh prompt di atas** (yang di dalam \`\`\`...\`\`\`)
2. Paste ke ChatGPT (GPT-4 / GPT-4o), Claude 3.5, atau Gemini 1.5 Pro
3. Tunggu hasil — biasanya 30-60 detik
4. Copy HTML hasilnya, paste ke Lynk.id editor (Embed HTML / Custom HTML block)
5. Replace \`{{CHECKOUT_URL}}\` dengan URL produk Lynk.id Anda

## 🎨 Mengapa kombinasi page-type × design-theme ini powerful?

**Page Type "Penjualan Produk Digital"** sudah teruji untuk produk dengan margin
tinggi (ebook, course, membership) — flow problem→agitate→solve→proof→offer→FAQ
adalah formula klasik yang convert dengan baik.

**Design Theme "Luxury"** memberikan kesan premium — ibu muda 25-35 di Jabodetabek
biasanya value perceived quality, dan tipografi serif + gold accent + warm
alabaster bg signal "ini bukan produk murahan".

## 🔄 Tips iterasi

Setelah generate pertama:
- Kalau ingin geser tone ke lebih playful → coba theme **Bauhaus** atau **Maximalism**
- Kalau target audience tech-savvy → **Modern Dark** atau **Cyberpunk**
- Kalau produk fashion/beauty → **Editorial** atau **Botanical**
- Kalau audience korporat → **Enterprise** atau **Swiss Minimalist**

Untuk revisi spesifik (ganti warna tombol, edit copy hero, tambah testimonial),
gunakan **LP Reviser** mode (separate tool) supaya tidak break struktur global.`);

/* ═══════════════ EXPORT MAP ═══════════════ */

export const LYNKID_MOCK_OUTPUTS: Record<string, ToolOutput> = {
  "side-hustler": SIDE_HUSTLER_SAMPLE,
  "ice-cold-traffic": ICE_COLD_TRAFFIC_SAMPLE,
  "max-organic-traffic": MAX_ORGANIC_TRAFFIC_SAMPLE,
  "attention-hijacker": ATTENTION_HIJACKER_SAMPLE,
  "lynk-product-optimizer": LYNK_PRODUCT_OPTIMIZER_SAMPLE,
  "business-blueprint": BUSINESS_BLUEPRINT_SAMPLE,
  "business-canvas": BUSINESS_CANVAS_SAMPLE,
  "customer-journey": CUSTOMER_JOURNEY_SAMPLE,
  "value-stacker": VALUE_STACKER_SAMPLE,
  "yes-machine": YES_MACHINE_SAMPLE,
  "exclusion-machine": EXCLUSION_MACHINE_SAMPLE,
  "objection-crusher": OBJECTION_CRUSHER_SAMPLE,
  "famous-copy": FAMOUS_COPY_SAMPLE,
  "zero-proof-selling": ZERO_PROOF_SELLING_SAMPLE,
  "digital-asset-creator": DIGITAL_ASSET_CREATOR_SAMPLE,
  "inbox-booster": INBOX_BOOSTER_SAMPLE,
  "click-candy": CLICK_CANDY_SAMPLE,
  "the-one": THE_ONE_SAMPLE,
  "trust-builder": TRUST_BUILDER_SAMPLE,
  "instant-credibility": INSTANT_CREDIBILITY_SAMPLE,
  "legal-dashboard": LEGAL_DASHBOARD_SAMPLE,
  "content-rewrite": CONTENT_REWRITE_SAMPLE,
  "prompt-creator-pro": PROMPT_CREATOR_PRO_SAMPLE,
  "lp-master-pro": LP_MASTER_PRO_SAMPLE,
};
