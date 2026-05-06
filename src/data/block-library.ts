import type { BlockTemplate } from "@/lib/types/tool";

const COLOR_BG = { id: "bg", label: "Background", default: "#6366f1" };
const COLOR_TEXT = { id: "text", label: "Text", default: "#ffffff" };
const COLOR_ACCENT = { id: "accent", label: "Accent", default: "#8b5cf6" };
const COLOR_BG_LIGHT = { id: "bg", label: "Background", default: "#f8fafc" };
const COLOR_TEXT_DARK = { id: "text", label: "Text", default: "#1e1b4b" };

export const BLOCKS: BlockTemplate[] = [
  // ========== HERO (8) ==========
  {
    id: "hero-gradient-1",
    name: "Hero Gradient Center",
    category: "hero",
    description: "Hero gradient ungu dengan headline center",
    previewImage: "https://picsum.photos/seed/hero1/600/300",
    colorSlots: [COLOR_BG, COLOR_TEXT, COLOR_ACCENT],
    variables: [
      { id: "headline", label: "Headline", type: "text", default: "Course MPASI Batch Cooking" },
      { id: "subheadline", label: "Subheadline", type: "text", default: "Hemat 10 jam/minggu tanpa sacrifice gizi bayi." },
      { id: "ctaText", label: "CTA Text", type: "text", default: "Beli Sekarang Rp 299.000" },
      { id: "ctaLink", label: "CTA Link", type: "text", default: "#beli" },
    ],
    html: `<div style="background: linear-gradient(135deg, {{bg}}, {{accent}}); padding: 56px 24px; text-align: center; border-radius: 16px;"><h1 style="color: {{text}}; font-size: 32px; margin: 0 0 12px 0; font-weight: 700;">{{headline}}</h1><p style="color: rgba(255,255,255,0.92); font-size: 16px; margin: 0 0 24px 0;">{{subheadline}}</p><a href="{{ctaLink}}" style="display: inline-block; background: white; color: {{bg}}; padding: 14px 32px; border-radius: 8px; font-weight: 600; text-decoration: none;">{{ctaText}}</a></div>`,
  },
  {
    id: "hero-image-left",
    name: "Hero Image-Left",
    category: "hero",
    description: "Hero dengan gambar kiri, teks kanan",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "imageUrl", label: "Image URL", type: "text", default: "https://picsum.photos/seed/hero/400/400" },
      { id: "headline", label: "Headline", type: "text", default: "Solusi MPASI yang Anda Cari" },
      { id: "subheadline", label: "Subheadline", type: "text", default: "Untuk working mom yang tidak punya waktu masak setiap hari." },
      { id: "ctaText", label: "CTA Text", type: "text", default: "Mulai Sekarang" },
      { id: "ctaLink", label: "CTA Link", type: "text", default: "#beli" },
    ],
    html: `<div style="background: {{bg}}; padding: 32px 24px; border-radius: 16px;"><div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center;"><img src="{{imageUrl}}" alt="" style="width: 200px; height: 200px; border-radius: 12px; object-fit: cover; flex-shrink: 0;" /><div style="flex: 1; min-width: 200px;"><h2 style="color: {{text}}; font-size: 24px; margin: 0 0 8px 0; font-weight: 700;">{{headline}}</h2><p style="color: #475569; font-size: 15px; margin: 0 0 16px 0;">{{subheadline}}</p><a href="{{ctaLink}}" style="display: inline-block; background: #6366f1; color: white; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none;">{{ctaText}}</a></div></div></div>`,
  },
  {
    id: "hero-minimal",
    name: "Hero Minimal",
    category: "hero",
    description: "Hero minimalis tanpa background warna",
    colorSlots: [COLOR_TEXT_DARK],
    variables: [
      { id: "headline", label: "Headline", type: "text", default: "Capek MPASI Setiap Hari?" },
      { id: "subheadline", label: "Subheadline", type: "text", default: "Mulai batch cooking 1x seminggu." },
      { id: "ctaText", label: "CTA Text", type: "text", default: "Saya Mau Tahu" },
    ],
    html: `<div style="padding: 64px 24px; text-align: center; background: white;"><h1 style="color: {{text}}; font-size: 36px; margin: 0 0 16px 0; font-weight: 800; line-height: 1.2;">{{headline}}</h1><p style="color: #475569; font-size: 18px; margin: 0 0 32px 0;">{{subheadline}}</p><a href="#" style="display: inline-block; background: #1e1b4b; color: white; padding: 14px 32px; border-radius: 8px; font-weight: 600; text-decoration: none;">{{ctaText}}</a></div>`,
  },
  {
    id: "hero-banner-discount",
    name: "Hero Banner Diskon",
    category: "hero",
    description: "Banner diskon dengan urgency",
    colorSlots: [{ id: "bg", label: "Background", default: "#fef2f2" }, { id: "accent", label: "Accent", default: "#dc2626" }],
    variables: [
      { id: "discountText", label: "Diskon Text", type: "text", default: "PROMO 50% AKHIR BULAN" },
      { id: "headline", label: "Headline", type: "text", default: "Course MPASI Rp 299k → Rp 149k" },
      { id: "deadline", label: "Deadline Text", type: "text", default: "Berakhir 31 Mei 2026" },
    ],
    html: `<div style="background: {{bg}}; border: 2px dashed {{accent}}; padding: 32px 24px; text-align: center; border-radius: 12px;"><span style="display: inline-block; background: {{accent}}; color: white; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; margin-bottom: 12px;">{{discountText}}</span><h2 style="color: #1e1b4b; font-size: 26px; margin: 0 0 8px 0; font-weight: 700;">{{headline}}</h2><p style="color: {{accent}}; font-size: 14px; margin: 0; font-weight: 600;">⏰ {{deadline}}</p></div>`,
  },

  // ========== PROBLEM (4) ==========
  {
    id: "problem-bullets",
    name: "Problem Bullet List",
    category: "problem",
    description: "List masalah audience dengan emoji",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "headline", label: "Headline", type: "text", default: "Apakah Anda mengalami ini?" },
      { id: "p1", label: "Pain 1", type: "text", default: "Bingung mau masak apa untuk si kecil setiap pagi" },
      { id: "p2", label: "Pain 2", type: "text", default: "Bayi GTM, makan dikit-dikit, ibu khawatir" },
      { id: "p3", label: "Pain 3", type: "text", default: "Resep di internet ribet, butuh bahan susah dicari" },
      { id: "p4", label: "Pain 4", type: "text", default: "Tidak punya waktu untuk meal-prep weekly" },
    ],
    html: `<div style="background: {{bg}}; padding: 32px 24px; border-radius: 12px;"><h2 style="color: {{text}}; font-size: 22px; margin: 0 0 20px 0; font-weight: 700;">{{headline}}</h2><ul style="padding: 0; margin: 0; list-style: none;"><li style="padding: 8px 0 8px 24px; position: relative; color: #334155;"><span style="position: absolute; left: 0;">😩</span>{{p1}}</li><li style="padding: 8px 0 8px 24px; position: relative; color: #334155;"><span style="position: absolute; left: 0;">😓</span>{{p2}}</li><li style="padding: 8px 0 8px 24px; position: relative; color: #334155;"><span style="position: absolute; left: 0;">😤</span>{{p3}}</li><li style="padding: 8px 0 8px 24px; position: relative; color: #334155;"><span style="position: absolute; left: 0;">😔</span>{{p4}}</li></ul></div>`,
  },
  {
    id: "problem-question",
    name: "Problem Question",
    category: "problem",
    description: "Pertanyaan retoris ke audience",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "q1", label: "Q1", type: "text", default: "Sudah berapa lama Anda struggle dengan MPASI?" },
      { id: "q2", label: "Q2", type: "text", default: "Berapa kali per minggu Anda capek mikirin menu?" },
      { id: "q3", label: "Q3", type: "text", default: "Pernah mikirin pengen pakai sistem yang lebih efisien?" },
    ],
    html: `<div style="background: {{bg}}; padding: 32px 24px; border-radius: 12px; text-align: center;"><p style="color: {{text}}; font-size: 18px; margin: 0 0 12px 0; font-weight: 600;">{{q1}}</p><p style="color: {{text}}; font-size: 18px; margin: 0 0 12px 0; font-weight: 600;">{{q2}}</p><p style="color: {{text}}; font-size: 18px; margin: 0 0 0 0; font-weight: 600;">{{q3}}</p></div>`,
  },

  // ========== BENEFITS (6) ==========
  {
    id: "benefits-3col",
    name: "Benefits 3 Kolom",
    category: "benefits",
    description: "3 benefit utama dengan icon",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "headline", label: "Headline", type: "text", default: "Kenapa Anda butuh ini?" },
      { id: "icon1", label: "Icon 1", type: "text", default: "⏰" },
      { id: "title1", label: "Title 1", type: "text", default: "Hemat Waktu" },
      { id: "desc1", label: "Description 1", type: "text", default: "10 jam/minggu lebih untuk hal lain." },
      { id: "icon2", label: "Icon 2", type: "text", default: "🥗" },
      { id: "title2", label: "Title 2", type: "text", default: "Nutrisi Lengkap" },
      { id: "desc2", label: "Description 2", type: "text", default: "Setiap resep balanced & teruji." },
      { id: "icon3", label: "Icon 3", type: "text", default: "💝" },
      { id: "title3", label: "Title 3", type: "text", default: "Komunitas" },
      { id: "desc3", label: "Description 3", type: "text", default: "Akses grup WA peer support." },
    ],
    html: `<div style="background: {{bg}}; padding: 32px 24px; border-radius: 12px;"><h2 style="color: {{text}}; font-size: 22px; margin: 0 0 24px 0; font-weight: 700; text-align: center;">{{headline}}</h2><div style="display: flex; flex-wrap: wrap; gap: 16px;"><div style="flex: 1; min-width: 160px; background: white; padding: 20px; border-radius: 8px; text-align: center;"><div style="font-size: 36px; margin-bottom: 8px;">{{icon1}}</div><h3 style="color: {{text}}; font-size: 16px; margin: 0 0 8px 0; font-weight: 700;">{{title1}}</h3><p style="color: #64748b; font-size: 14px; margin: 0;">{{desc1}}</p></div><div style="flex: 1; min-width: 160px; background: white; padding: 20px; border-radius: 8px; text-align: center;"><div style="font-size: 36px; margin-bottom: 8px;">{{icon2}}</div><h3 style="color: {{text}}; font-size: 16px; margin: 0 0 8px 0; font-weight: 700;">{{title2}}</h3><p style="color: #64748b; font-size: 14px; margin: 0;">{{desc2}}</p></div><div style="flex: 1; min-width: 160px; background: white; padding: 20px; border-radius: 8px; text-align: center;"><div style="font-size: 36px; margin-bottom: 8px;">{{icon3}}</div><h3 style="color: {{text}}; font-size: 16px; margin: 0 0 8px 0; font-weight: 700;">{{title3}}</h3><p style="color: #64748b; font-size: 14px; margin: 0;">{{desc3}}</p></div></div></div>`,
  },
  {
    id: "benefits-checklist",
    name: "Benefits Checklist",
    category: "benefits",
    description: "Checklist value yang Anda dapat",
    colorSlots: [COLOR_TEXT_DARK],
    variables: [
      { id: "headline", label: "Headline", type: "text", default: "Yang Anda dapat:" },
      { id: "b1", label: "Benefit 1", type: "text", default: "12 video step-by-step (total 2 jam)" },
      { id: "b2", label: "Benefit 2", type: "text", default: "PDF workbook 30 halaman" },
      { id: "b3", label: "Benefit 3", type: "text", default: "Akses grup WA seumur hidup" },
      { id: "b4", label: "Benefit 4", type: "text", default: "5 bonus resep weekend special" },
      { id: "b5", label: "Benefit 5", type: "text", default: "Garansi 14 hari money-back" },
    ],
    html: `<div style="padding: 32px 24px; background: white;"><h2 style="color: {{text}}; font-size: 22px; margin: 0 0 16px 0; font-weight: 700;">{{headline}}</h2><ul style="padding: 0; margin: 0; list-style: none;"><li style="padding: 10px 0 10px 32px; position: relative; color: #334155;"><span style="position: absolute; left: 0; color: #16a34a; font-weight: 700;">✓</span>{{b1}}</li><li style="padding: 10px 0 10px 32px; position: relative; color: #334155;"><span style="position: absolute; left: 0; color: #16a34a; font-weight: 700;">✓</span>{{b2}}</li><li style="padding: 10px 0 10px 32px; position: relative; color: #334155;"><span style="position: absolute; left: 0; color: #16a34a; font-weight: 700;">✓</span>{{b3}}</li><li style="padding: 10px 0 10px 32px; position: relative; color: #334155;"><span style="position: absolute; left: 0; color: #16a34a; font-weight: 700;">✓</span>{{b4}}</li><li style="padding: 10px 0 10px 32px; position: relative; color: #334155;"><span style="position: absolute; left: 0; color: #16a34a; font-weight: 700;">✓</span>{{b5}}</li></ul></div>`,
  },

  // ========== TESTIMONIAL (4) ==========
  {
    id: "testimonial-card-single",
    name: "Testimoni Card Single",
    category: "testimonial",
    description: "1 testimoni card dengan foto",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "quote", label: "Quote", type: "text", default: "Bener-bener game changer. Sekarang weekend masak doang. Bayi saya juga lebih lahap." },
      { id: "name", label: "Nama", type: "text", default: "Bu Sarah" },
      { id: "info", label: "Info", type: "text", default: "Jakarta · Ibu Aida (8 bulan)" },
      { id: "initials", label: "Initials", type: "text", default: "SR" },
    ],
    html: `<div style="background: {{bg}}; padding: 24px; border-radius: 12px; max-width: 420px; margin: 0 auto;"><p style="color: {{text}}; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0; font-style: italic;">"{{quote}}"</p><div style="display: flex; align-items: center; gap: 12px;"><div style="width: 40px; height: 40px; background: #c7d2fe; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #4338ca; font-weight: 600;">{{initials}}</div><div><div style="font-weight: 600; color: {{text}};">{{name}}</div><div style="font-size: 13px; color: #64748b;">{{info}}</div></div></div></div>`,
  },
  {
    id: "testimonial-quote-large",
    name: "Quote Besar",
    category: "testimonial",
    description: "Quote highlight 1 testimoni",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "quote", label: "Quote", type: "text", default: "Course terbaik yang pernah saya ikuti. Dari masak setiap hari ke 1x per minggu. Game changer total!" },
      { id: "name", label: "Nama", type: "text", default: "— Bu Linda, Bandung" },
    ],
    html: `<div style="background: {{bg}}; padding: 48px 32px; text-align: center; border-radius: 12px;"><div style="font-size: 64px; color: #6366f1; line-height: 1; margin-bottom: 16px;">"</div><p style="color: {{text}}; font-size: 22px; line-height: 1.5; margin: 0 0 24px 0; font-weight: 500; font-style: italic;">{{quote}}</p><p style="color: #475569; font-size: 14px; margin: 0;">{{name}}</p></div>`,
  },
  {
    id: "testimonial-grid-3",
    name: "Testimoni Grid 3",
    category: "testimonial",
    description: "3 testimoni mini dalam grid",
    colorSlots: [COLOR_BG_LIGHT],
    variables: [
      { id: "q1", label: "Quote 1", type: "text", default: "Worth every rupiah!" },
      { id: "n1", label: "Name 1", type: "text", default: "Bu Sarah" },
      { id: "q2", label: "Quote 2", type: "text", default: "Sistem batch cooking-nya genius." },
      { id: "n2", label: "Name 2", type: "text", default: "Bu Linda" },
      { id: "q3", label: "Quote 3", type: "text", default: "Komunitas WA-nya supportive banget." },
      { id: "n3", label: "Name 3", type: "text", default: "Bu Rina" },
    ],
    html: `<div style="background: {{bg}}; padding: 32px 24px; border-radius: 12px;"><div style="display: flex; flex-wrap: wrap; gap: 12px;"><div style="flex: 1; min-width: 140px; background: white; padding: 16px; border-radius: 8px;"><p style="color: #334155; font-size: 14px; margin: 0 0 8px 0; font-style: italic;">"{{q1}}"</p><p style="color: #6366f1; font-size: 12px; margin: 0; font-weight: 600;">{{n1}}</p></div><div style="flex: 1; min-width: 140px; background: white; padding: 16px; border-radius: 8px;"><p style="color: #334155; font-size: 14px; margin: 0 0 8px 0; font-style: italic;">"{{q2}}"</p><p style="color: #6366f1; font-size: 12px; margin: 0; font-weight: 600;">{{n2}}</p></div><div style="flex: 1; min-width: 140px; background: white; padding: 16px; border-radius: 8px;"><p style="color: #334155; font-size: 14px; margin: 0 0 8px 0; font-style: italic;">"{{q3}}"</p><p style="color: #6366f1; font-size: 12px; margin: 0; font-weight: 600;">{{n3}}</p></div></div></div>`,
  },

  // ========== CTA (5) ==========
  {
    id: "cta-button-large",
    name: "CTA Button Large",
    category: "cta",
    description: "Tombol CTA besar dengan gradient",
    colorSlots: [{ id: "bg", label: "Button BG", default: "#6366f1" }],
    variables: [
      { id: "ctaText", label: "CTA Text", type: "text", default: "Beli Sekarang Rp 299.000" },
      { id: "ctaLink", label: "CTA Link", type: "text", default: "#beli" },
      { id: "subtext", label: "Subtext", type: "text", default: "Garansi 14 hari money-back" },
    ],
    html: `<div style="text-align: center; padding: 24px 0;"><a href="{{ctaLink}}" style="display: inline-block; background: {{bg}}; color: white; padding: 16px 40px; border-radius: 8px; font-weight: 700; font-size: 18px; text-decoration: none; box-shadow: 0 4px 12px rgba(99,102,241,0.3);">{{ctaText}}</a><p style="color: #64748b; font-size: 13px; margin: 12px 0 0 0;">{{subtext}}</p></div>`,
  },
  {
    id: "cta-with-guarantee",
    name: "CTA dengan Garansi",
    category: "cta",
    description: "CTA dengan trust badge garansi",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "headline", label: "Headline", type: "text", default: "Mulai Hari Ini" },
      { id: "ctaText", label: "CTA Text", type: "text", default: "Beli Sekarang Rp 299k" },
      { id: "guaranteeText", label: "Garansi", type: "text", default: "14 hari money-back guarantee" },
    ],
    html: `<div style="background: {{bg}}; padding: 40px 24px; text-align: center; border-radius: 12px;"><h2 style="color: {{text}}; font-size: 24px; margin: 0 0 16px 0; font-weight: 700;">{{headline}}</h2><a href="#" style="display: inline-block; background: #6366f1; color: white; padding: 14px 32px; border-radius: 8px; font-weight: 600; text-decoration: none; margin-bottom: 16px;">{{ctaText}}</a><p style="color: #16a34a; font-size: 14px; margin: 0; font-weight: 600;">🛡️ {{guaranteeText}}</p></div>`,
  },
  {
    id: "cta-urgency",
    name: "CTA Urgency",
    category: "cta",
    description: "CTA dengan countdown urgency",
    colorSlots: [{ id: "bg", label: "BG", default: "#fef2f2" }, { id: "accent", label: "Accent", default: "#dc2626" }],
    variables: [
      { id: "urgencyText", label: "Urgency Text", type: "text", default: "⏰ Promo berakhir 24 jam lagi" },
      { id: "ctaText", label: "CTA Text", type: "text", default: "Klaim Sekarang" },
    ],
    html: `<div style="background: {{bg}}; padding: 24px; border-radius: 12px; text-align: center; border: 1px solid {{accent}};"><p style="color: {{accent}}; font-size: 14px; margin: 0 0 12px 0; font-weight: 700;">{{urgencyText}}</p><a href="#" style="display: inline-block; background: {{accent}}; color: white; padding: 12px 32px; border-radius: 8px; font-weight: 700; text-decoration: none;">{{ctaText}}</a></div>`,
  },

  // ========== PRICING (4) ==========
  {
    id: "pricing-single",
    name: "Pricing Single Card",
    category: "pricing",
    description: "Card harga single product",
    colorSlots: [{ id: "bg", label: "BG", default: "#ffffff" }, { id: "border", label: "Border", default: "#6366f1" }],
    variables: [
      { id: "productName", label: "Product Name", type: "text", default: "Course MPASI Lengkap" },
      { id: "wasPrice", label: "Was Price", type: "text", default: "Rp 599.000" },
      { id: "nowPrice", label: "Now Price", type: "text", default: "Rp 299.000" },
      { id: "savings", label: "Savings", type: "text", default: "Hemat Rp 300.000" },
      { id: "ctaText", label: "CTA", type: "text", default: "Beli Sekarang" },
    ],
    html: `<div style="background: {{bg}}; border: 2px solid {{border}}; padding: 32px; border-radius: 12px; text-align: center; max-width: 360px; margin: 0 auto;"><h3 style="color: #1e1b4b; font-size: 20px; margin: 0 0 16px 0; font-weight: 700;">{{productName}}</h3><p style="color: #94a3b8; text-decoration: line-through; margin: 0 0 4px 0; font-size: 16px;">{{wasPrice}}</p><p style="color: #1e1b4b; font-size: 36px; margin: 0 0 4px 0; font-weight: 800;">{{nowPrice}}</p><p style="color: #16a34a; font-size: 14px; margin: 0 0 24px 0; font-weight: 600;">{{savings}}</p><a href="#" style="display: inline-block; background: #6366f1; color: white; padding: 12px 32px; border-radius: 8px; font-weight: 600; text-decoration: none; width: 100%; box-sizing: border-box;">{{ctaText}}</a></div>`,
  },
  {
    id: "pricing-3tier",
    name: "Pricing 3 Tier",
    category: "pricing",
    description: "Basic / Standard / Premium",
    colorSlots: [],
    variables: [
      { id: "tier1Name", label: "Tier 1", type: "text", default: "Basic" },
      { id: "tier1Price", label: "Tier 1 Price", type: "text", default: "Rp 99k" },
      { id: "tier2Name", label: "Tier 2", type: "text", default: "Standard" },
      { id: "tier2Price", label: "Tier 2 Price", type: "text", default: "Rp 199k" },
      { id: "tier3Name", label: "Tier 3", type: "text", default: "Premium" },
      { id: "tier3Price", label: "Tier 3 Price", type: "text", default: "Rp 399k" },
    ],
    html: `<div style="display: flex; flex-wrap: wrap; gap: 12px; padding: 24px;"><div style="flex: 1; min-width: 140px; background: white; border: 1px solid #e2e8f0; padding: 24px; border-radius: 12px; text-align: center;"><h4 style="color: #64748b; font-size: 14px; margin: 0 0 8px 0; font-weight: 600;">{{tier1Name}}</h4><p style="color: #1e1b4b; font-size: 24px; margin: 0 0 16px 0; font-weight: 800;">{{tier1Price}}</p><a href="#" style="display: block; background: #f1f5f9; color: #1e1b4b; padding: 10px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 14px;">Pilih</a></div><div style="flex: 1; min-width: 140px; background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px; border-radius: 12px; text-align: center; transform: scale(1.02);"><div style="background: white; color: #6366f1; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 700; display: inline-block; margin-bottom: 8px;">POPULAR</div><h4 style="color: rgba(255,255,255,0.9); font-size: 14px; margin: 0 0 8px 0; font-weight: 600;">{{tier2Name}}</h4><p style="color: white; font-size: 24px; margin: 0 0 16px 0; font-weight: 800;">{{tier2Price}}</p><a href="#" style="display: block; background: white; color: #6366f1; padding: 10px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 14px;">Pilih</a></div><div style="flex: 1; min-width: 140px; background: white; border: 1px solid #e2e8f0; padding: 24px; border-radius: 12px; text-align: center;"><h4 style="color: #64748b; font-size: 14px; margin: 0 0 8px 0; font-weight: 600;">{{tier3Name}}</h4><p style="color: #1e1b4b; font-size: 24px; margin: 0 0 16px 0; font-weight: 800;">{{tier3Price}}</p><a href="#" style="display: block; background: #f1f5f9; color: #1e1b4b; padding: 10px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 14px;">Pilih</a></div></div>`,
  },

  // ========== FAQ (3) ==========
  {
    id: "faq-accordion-style",
    name: "FAQ Section",
    category: "faq",
    description: "Section FAQ Q&A",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "headline", label: "Headline", type: "text", default: "FAQ" },
      { id: "q1", label: "Q1", type: "text", default: "Apakah ini benar lifetime?" },
      { id: "a1", label: "A1", type: "text", default: "Ya, sekali bayar akses selamanya. Tidak ada biaya bulanan." },
      { id: "q2", label: "Q2", type: "text", default: "Bisa refund?" },
      { id: "a2", label: "A2", type: "text", default: "Ya, garansi 14 hari money-back tanpa tanya alasan." },
      { id: "q3", label: "Q3", type: "text", default: "Apakah cocok untuk pemula?" },
      { id: "a3", label: "A3", type: "text", default: "Sangat cocok. Course step-by-step dengan video pendek." },
    ],
    html: `<div style="background: {{bg}}; padding: 32px 24px; border-radius: 12px;"><h2 style="color: {{text}}; font-size: 24px; margin: 0 0 24px 0; font-weight: 700; text-align: center;">{{headline}}</h2><div style="background: white; padding: 16px 20px; border-radius: 8px; margin-bottom: 12px;"><h4 style="color: {{text}}; font-size: 16px; margin: 0 0 8px 0; font-weight: 600;">❓ {{q1}}</h4><p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">{{a1}}</p></div><div style="background: white; padding: 16px 20px; border-radius: 8px; margin-bottom: 12px;"><h4 style="color: {{text}}; font-size: 16px; margin: 0 0 8px 0; font-weight: 600;">❓ {{q2}}</h4><p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">{{a2}}</p></div><div style="background: white; padding: 16px 20px; border-radius: 8px;"><h4 style="color: {{text}}; font-size: 16px; margin: 0 0 8px 0; font-weight: 600;">❓ {{q3}}</h4><p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">{{a3}}</p></div></div>`,
  },

  // ========== STATS (3) ==========
  {
    id: "stats-3-numbers",
    name: "Stats 3 Numbers",
    category: "stats",
    description: "3 angka penting / metrics",
    colorSlots: [{ id: "bg", label: "BG", default: "#1e1b4b" }, { id: "accent", label: "Accent", default: "#a78bfa" }],
    variables: [
      { id: "n1", label: "Number 1", type: "text", default: "100+" },
      { id: "l1", label: "Label 1", type: "text", default: "Ibu sudah lewat course" },
      { id: "n2", label: "Number 2", type: "text", default: "12 video" },
      { id: "l2", label: "Label 2", type: "text", default: "Step-by-step" },
      { id: "n3", label: "Number 3", type: "text", default: "30 hal" },
      { id: "l3", label: "Label 3", type: "text", default: "Workbook PDF" },
    ],
    html: `<div style="background: {{bg}}; padding: 40px 24px; border-radius: 12px;"><div style="display: flex; flex-wrap: wrap; gap: 16px; text-align: center;"><div style="flex: 1; min-width: 100px;"><p style="color: {{accent}}; font-size: 36px; margin: 0 0 4px 0; font-weight: 800;">{{n1}}</p><p style="color: rgba(255,255,255,0.8); font-size: 13px; margin: 0;">{{l1}}</p></div><div style="flex: 1; min-width: 100px;"><p style="color: {{accent}}; font-size: 36px; margin: 0 0 4px 0; font-weight: 800;">{{n2}}</p><p style="color: rgba(255,255,255,0.8); font-size: 13px; margin: 0;">{{l2}}</p></div><div style="flex: 1; min-width: 100px;"><p style="color: {{accent}}; font-size: 36px; margin: 0 0 4px 0; font-weight: 800;">{{n3}}</p><p style="color: rgba(255,255,255,0.8); font-size: 13px; margin: 0;">{{l3}}</p></div></div></div>`,
  },

  // ========== HEADER/FOOTER (4) ==========
  {
    id: "header-simple-logo",
    name: "Header Simple",
    category: "header",
    description: "Header dengan logo + tagline",
    colorSlots: [],
    variables: [
      { id: "brand", label: "Brand Name", type: "text", default: "MPASI Batch Cooking" },
      { id: "tagline", label: "Tagline", type: "text", default: "Untuk working mom Indonesia" },
    ],
    html: `<div style="padding: 24px; text-align: center; background: white; border-bottom: 1px solid #e2e8f0;"><h1 style="color: #1e1b4b; font-size: 24px; margin: 0 0 4px 0; font-weight: 800;">{{brand}}</h1><p style="color: #64748b; font-size: 13px; margin: 0;">{{tagline}}</p></div>`,
  },
  {
    id: "footer-contact",
    name: "Footer Contact",
    category: "footer",
    description: "Footer dengan info kontak",
    colorSlots: [{ id: "bg", label: "BG", default: "#1e1b4b" }],
    variables: [
      { id: "brandName", label: "Brand", type: "text", default: "MPASI Batch Cooking" },
      { id: "contact", label: "Contact", type: "text", default: "wa.me/628123456789" },
      { id: "year", label: "Year", type: "text", default: "© 2026" },
    ],
    html: `<div style="background: {{bg}}; padding: 32px 24px; text-align: center;"><h3 style="color: white; font-size: 18px; margin: 0 0 8px 0; font-weight: 700;">{{brandName}}</h3><p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 0 0 16px 0;">📱 {{contact}}</p><p style="color: rgba(255,255,255,0.5); font-size: 12px; margin: 0;">{{year}}</p></div>`,
  },

  // ========== ABOUT/PROFILE (3) ==========
  {
    id: "about-founder",
    name: "About Founder",
    category: "about",
    description: "Section tentang founder/seller",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "founderName", label: "Founder Name", type: "text", default: "Sarah Ahmad" },
      { id: "founderTitle", label: "Title", type: "text", default: "Mom of 2 · Founder MPASI Batch Cooking" },
      { id: "founderBio", label: "Bio", type: "text", default: "Ibu dari Aida (3 thn) & Ahmad (1 thn). Dulu nightmare MPASI, sekarang sistem batch cooking yang teruji 100+ ibu. Saya buat course ini karena saya tau perasaannya." },
      { id: "imageUrl", label: "Image URL", type: "text", default: "https://picsum.photos/seed/founder/200/200" },
    ],
    html: `<div style="background: {{bg}}; padding: 32px 24px; border-radius: 12px;"><div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center;"><img src="{{imageUrl}}" alt="" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" /><div style="flex: 1; min-width: 200px;"><h3 style="color: {{text}}; font-size: 22px; margin: 0 0 4px 0; font-weight: 700;">{{founderName}}</h3><p style="color: #6366f1; font-size: 14px; margin: 0 0 12px 0; font-weight: 600;">{{founderTitle}}</p><p style="color: #475569; font-size: 14px; margin: 0; line-height: 1.6;">{{founderBio}}</p></div></div></div>`,
  },

  // ========== GUARANTEE (2) ==========
  {
    id: "guarantee-badge",
    name: "Garansi Badge",
    category: "guarantee",
    description: "Badge garansi money-back",
    colorSlots: [{ id: "bg", label: "BG", default: "#f0fdf4" }, { id: "accent", label: "Accent", default: "#16a34a" }],
    variables: [
      { id: "headline", label: "Headline", type: "text", default: "Garansi 14 Hari Money-Back" },
      { id: "description", label: "Description", type: "text", default: "Kalau course ini tidak membantu Anda, kembalikan dan dapatkan refund 100%. Tanpa pertanyaan." },
    ],
    html: `<div style="background: {{bg}}; border: 2px solid {{accent}}; padding: 32px 24px; border-radius: 12px; text-align: center;"><div style="font-size: 48px; margin-bottom: 12px;">🛡️</div><h3 style="color: {{accent}}; font-size: 20px; margin: 0 0 8px 0; font-weight: 700;">{{headline}}</h3><p style="color: #475569; font-size: 14px; margin: 0; max-width: 400px; margin-left: auto; margin-right: auto; line-height: 1.6;">{{description}}</p></div>`,
  },

  // ========== BONUS/INCENTIVE (3) ==========
  {
    id: "bonus-card",
    name: "Bonus Card",
    category: "bonus",
    description: "Highlight bonus eksklusif",
    colorSlots: [{ id: "bg", label: "BG", default: "#fef3c7" }, { id: "accent", label: "Accent", default: "#d97706" }],
    variables: [
      { id: "bonusTitle", label: "Bonus Title", type: "text", default: "BONUS: 5 Resep Weekend Special" },
      { id: "bonusValue", label: "Value", type: "text", default: "Senilai Rp 99.000" },
      { id: "bonusDesc", label: "Description", type: "text", default: "Eksklusif untuk buyer course. 5 resep premium yang biasanya dijual terpisah, gratis hanya bulan ini." },
    ],
    html: `<div style="background: {{bg}}; padding: 24px; border-radius: 12px; border: 2px dashed {{accent}};"><div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;"><span style="background: {{accent}}; color: white; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 700;">BONUS</span><span style="color: {{accent}}; font-size: 13px; font-weight: 600;">{{bonusValue}}</span></div><h3 style="color: #78350f; font-size: 18px; margin: 0 0 8px 0; font-weight: 700;">{{bonusTitle}}</h3><p style="color: #92400e; font-size: 14px; margin: 0; line-height: 1.5;">{{bonusDesc}}</p></div>`,
  },

  // ========== SOCIAL/CONTACT (3) ==========
  {
    id: "social-icons",
    name: "Social Icons",
    category: "social",
    description: "Row social media links",
    colorSlots: [],
    variables: [
      { id: "ig", label: "Instagram", type: "text", default: "https://instagram.com/yourname" },
      { id: "tiktok", label: "TikTok", type: "text", default: "https://tiktok.com/@yourname" },
      { id: "wa", label: "WhatsApp", type: "text", default: "https://wa.me/628123456789" },
    ],
    html: `<div style="text-align: center; padding: 24px;"><a href="{{ig}}" style="display: inline-block; margin: 0 8px; color: #6366f1; text-decoration: none; font-size: 14px; font-weight: 600;">📷 Instagram</a><a href="{{tiktok}}" style="display: inline-block; margin: 0 8px; color: #6366f1; text-decoration: none; font-size: 14px; font-weight: 600;">🎵 TikTok</a><a href="{{wa}}" style="display: inline-block; margin: 0 8px; color: #6366f1; text-decoration: none; font-size: 14px; font-weight: 600;">💬 WhatsApp</a></div>`,
  },
  {
    id: "wa-cta-button",
    name: "WA Direct Button",
    category: "cta",
    description: "Button langsung ke WhatsApp",
    colorSlots: [],
    variables: [
      { id: "waLink", label: "WA Link", type: "text", default: "https://wa.me/628123456789" },
      { id: "ctaText", label: "Text", type: "text", default: "Tanya via WhatsApp" },
    ],
    html: `<div style="text-align: center; padding: 16px;"><a href="{{waLink}}" style="display: inline-block; background: #25D366; color: white; padding: 12px 28px; border-radius: 999px; font-weight: 600; text-decoration: none;">💬 {{ctaText}}</a></div>`,
  },

  // ========== TIMELINE/PROCESS (2) ==========
  {
    id: "process-3-steps",
    name: "Process 3 Steps",
    category: "process",
    description: "3 langkah proses",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "headline", label: "Headline", type: "text", default: "Cara Kerjanya" },
      { id: "s1", label: "Step 1", type: "text", default: "Daftar & dapat akses lifetime" },
      { id: "s2", label: "Step 2", type: "text", default: "Tonton 12 video step-by-step" },
      { id: "s3", label: "Step 3", type: "text", default: "Praktek + tanya di grup WA" },
    ],
    html: `<div style="background: {{bg}}; padding: 32px 24px; border-radius: 12px;"><h2 style="color: {{text}}; font-size: 22px; margin: 0 0 24px 0; font-weight: 700; text-align: center;">{{headline}}</h2><div style="display: flex; flex-direction: column; gap: 16px;"><div style="display: flex; gap: 16px; align-items: center;"><div style="background: #6366f1; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">1</div><p style="color: {{text}}; margin: 0; font-size: 15px;">{{s1}}</p></div><div style="display: flex; gap: 16px; align-items: center;"><div style="background: #6366f1; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">2</div><p style="color: {{text}}; margin: 0; font-size: 15px;">{{s2}}</p></div><div style="display: flex; gap: 16px; align-items: center;"><div style="background: #6366f1; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">3</div><p style="color: {{text}}; margin: 0; font-size: 15px;">{{s3}}</p></div></div></div>`,
  },

  // ========== GENERAL/UTILITY (4) ==========
  {
    id: "divider-text",
    name: "Divider with Text",
    category: "utility",
    description: "Pemisah dengan teks tengah",
    colorSlots: [],
    variables: [
      { id: "text", label: "Text", type: "text", default: "ATAU" },
    ],
    html: `<div style="display: flex; align-items: center; padding: 16px; gap: 12px;"><div style="flex: 1; height: 1px; background: #e2e8f0;"></div><span style="color: #64748b; font-size: 13px; font-weight: 600;">{{text}}</span><div style="flex: 1; height: 1px; background: #e2e8f0;"></div></div>`,
  },
  {
    id: "card-image-text",
    name: "Card Image + Text",
    category: "utility",
    description: "Card umum: gambar atas, teks bawah",
    colorSlots: [],
    variables: [
      { id: "imageUrl", label: "Image", type: "text", default: "https://picsum.photos/seed/card/400/200" },
      { id: "title", label: "Title", type: "text", default: "Section Title" },
      { id: "description", label: "Desc", type: "text", default: "Description goes here, satu paragraf cukup." },
    ],
    html: `<div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"><img src="{{imageUrl}}" alt="" style="width: 100%; height: 180px; object-fit: cover;" /><div style="padding: 16px;"><h3 style="color: #1e1b4b; font-size: 16px; margin: 0 0 8px 0; font-weight: 700;">{{title}}</h3><p style="color: #64748b; font-size: 14px; margin: 0; line-height: 1.5;">{{description}}</p></div></div>`,
  },
  {
    id: "alert-info",
    name: "Alert / Info Box",
    category: "utility",
    description: "Box informasi/alert",
    colorSlots: [{ id: "bg", label: "BG", default: "#eff6ff" }, { id: "accent", label: "Accent", default: "#2563eb" }],
    variables: [
      { id: "icon", label: "Icon", type: "text", default: "ℹ️" },
      { id: "text", label: "Text", type: "text", default: "Info penting: pesanan akan diproses dalam 5 menit setelah pembayaran." },
    ],
    html: `<div style="background: {{bg}}; padding: 16px 20px; border-radius: 8px; border-left: 4px solid {{accent}};"><p style="color: #1e1b4b; font-size: 14px; margin: 0; line-height: 1.5;">{{icon}} {{text}}</p></div>`,
  },
  {
    id: "spacer-medium",
    name: "Spacer 32px",
    category: "utility",
    description: "Vertical spacer untuk pemisah",
    colorSlots: [],
    variables: [],
    html: `<div style="height: 32px;"></div>`,
  },

  // ========== CHECKLIST/LIST (3) ==========
  {
    id: "list-numbered",
    name: "Numbered List",
    category: "list",
    description: "List bernomor 1-2-3",
    colorSlots: [COLOR_BG_LIGHT, COLOR_TEXT_DARK],
    variables: [
      { id: "headline", label: "Headline", type: "text", default: "5 Langkah Memulai" },
      { id: "i1", label: "Item 1", type: "text", default: "Daftar di Lynk.id" },
      { id: "i2", label: "Item 2", type: "text", default: "Setup profil & link bio" },
      { id: "i3", label: "Item 3", type: "text", default: "Upload produk pertama" },
      { id: "i4", label: "Item 4", type: "text", default: "Bagikan ke audience" },
      { id: "i5", label: "Item 5", type: "text", default: "Optimalkan dengan analytics" },
    ],
    html: `<div style="background: {{bg}}; padding: 32px 24px; border-radius: 12px;"><h2 style="color: {{text}}; font-size: 22px; margin: 0 0 20px 0; font-weight: 700;">{{headline}}</h2><ol style="padding-left: 20px; margin: 0; color: #334155; line-height: 1.8;"><li>{{i1}}</li><li>{{i2}}</li><li>{{i3}}</li><li>{{i4}}</li><li>{{i5}}</li></ol></div>`,
  },
];

export const BLOCK_CATEGORIES = [
  { id: "hero", label: "Hero", count: BLOCKS.filter((b) => b.category === "hero").length },
  { id: "problem", label: "Problem", count: BLOCKS.filter((b) => b.category === "problem").length },
  { id: "benefits", label: "Benefits", count: BLOCKS.filter((b) => b.category === "benefits").length },
  { id: "testimonial", label: "Testimonial", count: BLOCKS.filter((b) => b.category === "testimonial").length },
  { id: "cta", label: "CTA", count: BLOCKS.filter((b) => b.category === "cta").length },
  { id: "pricing", label: "Pricing", count: BLOCKS.filter((b) => b.category === "pricing").length },
  { id: "faq", label: "FAQ", count: BLOCKS.filter((b) => b.category === "faq").length },
  { id: "stats", label: "Stats", count: BLOCKS.filter((b) => b.category === "stats").length },
  { id: "header", label: "Header", count: BLOCKS.filter((b) => b.category === "header").length },
  { id: "footer", label: "Footer", count: BLOCKS.filter((b) => b.category === "footer").length },
  { id: "about", label: "About", count: BLOCKS.filter((b) => b.category === "about").length },
  { id: "guarantee", label: "Garansi", count: BLOCKS.filter((b) => b.category === "guarantee").length },
  { id: "bonus", label: "Bonus", count: BLOCKS.filter((b) => b.category === "bonus").length },
  { id: "social", label: "Social", count: BLOCKS.filter((b) => b.category === "social").length },
  { id: "process", label: "Process", count: BLOCKS.filter((b) => b.category === "process").length },
  { id: "list", label: "List", count: BLOCKS.filter((b) => b.category === "list").length },
  { id: "utility", label: "Utility", count: BLOCKS.filter((b) => b.category === "utility").length },
];

export function renderBlock(block: BlockTemplate, vars: Record<string, string>): string {
  let html = block.html;
  for (const variable of block.variables) {
    const value = vars[variable.id] ?? variable.default;
    html = html.replaceAll(`{{${variable.id}}}`, value);
  }
  for (const slot of block.colorSlots ?? []) {
    const value = vars[slot.id] ?? slot.default;
    html = html.replaceAll(`{{${slot.id}}}`, value);
  }
  return html;
}
