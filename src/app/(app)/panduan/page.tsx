"use client";

import { useState } from "react";
import {
  BookOpen,
  Key,
  Wand2,
  MessageSquare,
  ExternalLink,
  Compass,
  Zap,
  Info,
  ClipboardCheck,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

type TabId = "roadmap" | "setup" | "page-crafter" | "content" | "lynk";

const TABS: { id: TabId; label: string; icon: typeof Compass }[] = [
  { id: "roadmap", label: "Roadmap Pemula", icon: Compass },
  { id: "setup", label: "Setup API Key", icon: Key },
  { id: "page-crafter", label: "Pakai Page Crafter", icon: Wand2 },
  { id: "content", label: "Pakai AI Content", icon: MessageSquare },
  { id: "lynk", label: "Paste ke Lynk.id", icon: ExternalLink },
];

const ROADMAP_STEPS = [
  {
    n: 1,
    color: "border-amber-400 text-amber-600 bg-amber-50",
    badge: "text-amber-700",
    title: "Niche Scanner / Side Hustler",
    phase: "Fase Ideasi & Temukan Market",
    why: "Jangan asal jualan. Gunakan tool ini pertama kali untuk menemukan ide produk digital apa yang paling cocok berdasarkan minat dan keahlian Anda, serta memastikan ide tersebut berpotensi laku di pasaran.",
  },
  {
    n: 2,
    color: "border-blue-400 text-blue-600 bg-blue-50",
    badge: "text-blue-700",
    title: "Lead Magnet Generator",
    phase: "Fase Membangun Kolam Audience",
    why: "Sebelum menjual produk berbayar, Anda butuh calon pembeli. Buat produk gratisan (e-book mini, checklist, atau template) menggunakan tool ini lalu tukar dengan kontak email atau WhatsApp target market.",
  },
  {
    n: 3,
    color: "border-purple-400 text-purple-600 bg-purple-50",
    badge: "text-purple-700",
    title: "Lynk.id Product Optimizer",
    phase: "Fase Blueprint Produk Berbayar",
    why: "Sekarang Anda memiliki daftar kontak audience. Gunakan tool ini untuk merancang kerangka produk digital berbayar Anda (E-course, Webinar, atau E-book Premium) yang terstruktur rapi dan siap dijual.",
  },
  {
    n: 4,
    color: "border-emerald-400 text-emerald-600 bg-emerald-50",
    badge: "text-emerald-700",
    title: "Landing Page Builder / LP Master PRO",
    phase: "Fase Persuasi & Halaman Penjualan",
    why: "Produk yang bagus butuh penawaran yang bagus pula. Tool ini merangkai kerangka tulisan penawaran (Copywriting Landing Page) agar setiap orang yang membaca halaman Anda merasa yakin dan ingin membeli.",
  },
  {
    n: 5,
    color: "border-rose-400 text-rose-600 bg-rose-50",
    badge: "text-rose-700",
    title: "Content Engine / Attention Hijacker",
    phase: "Fase Traffic & Pemasaran Harian",
    why: "Halaman jualan Anda sudah jadi dan aktif. Saatnya promosi! Tool ini otomatis memproduksi puluhan ide dan naskah konten media sosial (TikTok, Instagram Reels) dari produk digital Anda untuk menarik traffic pembeli aktif.",
  },
];

export default function PanduanPage() {
  const [activeTab, setActiveTab] = useState<TabId>("roadmap");

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900">
            <BookOpen className="h-6 w-6 text-brand-500" /> Knowledge Base
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Pelajari cara memaksimalkan Alextrix untuk bisnis digital Anda.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="scrollbar-none flex overflow-x-auto border-b border-slate-200">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap border-b-2 px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all",
                active
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-700",
              )}
            >
              <Icon className="h-3.5 w-3.5" /> {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
        {activeTab === "roadmap" && (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Roadmap & Urutan Penggunaan Tools
                </h2>
                <p className="text-sm italic text-slate-500">
                  Ikuti urutan ini untuk membangun produk digital Anda dari nol
                  hingga menghasilkan.
                </p>
              </div>
            </div>

            <div className="relative ml-3 space-y-10 border-l border-slate-200 pl-8 pt-2">
              {ROADMAP_STEPS.map((step) => (
                <div key={step.n} className="relative">
                  <div
                    className={cn(
                      "absolute -left-[2.4rem] top-1 flex h-7 w-7 items-center justify-center rounded-full border bg-white text-xs font-bold",
                      step.color,
                    )}
                  >
                    {step.n}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mb-2 text-xs font-bold uppercase tracking-wider",
                      step.badge,
                    )}
                  >
                    {step.phase}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    <strong>Alasan:</strong> {step.why}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "setup" && (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-600">
                <Key className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Setup Google Gemini API Key (Gratis)
                </h2>
                <p className="text-sm italic text-slate-500">
                  Kunci utama untuk menjalankan AI Alextrix tanpa biaya.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                {[
                  {
                    n: 1,
                    text: (
                      <>
                        Buka{" "}
                        <a
                          href="https://aistudio.google.com/app/apikey"
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand-600 hover:underline"
                        >
                          Google AI Studio
                        </a>{" "}
                        (Gratis).
                      </>
                    ),
                  },
                  {
                    n: 2,
                    text: (
                      <>
                        Klik tombol <strong>&quot;Create API key&quot;</strong>.
                      </>
                    ),
                  },
                  {
                    n: 3,
                    text: (
                      <>
                        Copy API Key, masuk ke{" "}
                        <a
                          href="/pengaturan/api-key"
                          className="text-brand-600 hover:underline"
                        >
                          Pengaturan → API Key
                        </a>{" "}
                        di Alextrix, paste ke field Gemini.
                      </>
                    ),
                  },
                  {
                    n: 4,
                    text: (
                      <>Setelah disimpan, semua tool AI Alextrix langsung bisa
                      dipakai dengan kuota Gemini gratis Anda.</>
                    ),
                  },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-xs font-bold text-amber-700">
                      {s.n}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 rounded-xl border border-amber-200 bg-amber-50/50 p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <Zap className="h-3.5 w-3.5" /> Quick Tip
                </div>
                <p className="text-xs leading-relaxed text-slate-700">
                  Google Gemini menawarkan limit gratis yang sangat besar (15
                  RPM, 1M token/hari Gemini Flash) yang lebih dari cukup untuk
                  penggunaan harian. Kalau error muncul, biasanya karena API
                  Key belum diatur di Pengaturan → API Key.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "page-crafter" && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-600">
                <Wand2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Cara Pakai Landing Page Builder
                </h2>
                <p className="text-sm italic text-slate-500">
                  Generate landing page Lynk.id-compatible HTML siap paste.
                </p>
              </div>
            </div>
            <ol className="space-y-3 text-sm text-slate-700">
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>1. Pilih tool yang sesuai:</strong> gunakan{" "}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
                  Landing Page Builder
                </code>{" "}
                untuk hasil cepat dengan satu klik. Untuk hasil lebih premium
                (8 page-type × 31 design theme), gunakan{" "}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
                  LP Master PRO
                </code>
                .
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>2. Isi form:</strong> nama produk, deskripsi, harga,
                target audience, pain points utama, fitur produk, tone, URL
                CTA, dan branding warna.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>3. Klik Generate:</strong> AI akan merangkai HTML
                landing page lengkap dengan inline CSS only (kompatibel dengan
                Lynk.id Custom HTML).
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>4. Preview & revisi:</strong> Anda bisa minta revisi
                spesifik (ganti warna tombol, edit copy hero, tambah
                testimonial) di tab AI Agent.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>5. Copy HTML:</strong> klik tombol Salin dan paste ke
                Lynk.id editor.
              </li>
            </ol>
          </div>
        )}

        {activeTab === "content" && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-200 bg-rose-50 text-rose-600">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Cara Pakai AI Content Tools
                </h2>
                <p className="text-sm italic text-slate-500">
                  55 tool AI siap pakai — fokus pada copywriting, hooks, email,
                  dan strategi.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Cari berdasarkan goal",
                  desc: "Filter pillar Acquire/Convert/Retain/Optimize sesuai fase bisnis Anda.",
                },
                {
                  icon: Info,
                  title: "Setiap tool = 1 fokus tugas",
                  desc: "Output 100% Bahasa Indonesia, mengikuti tone yang Anda set.",
                },
                {
                  icon: Zap,
                  title: "Output di-stream langsung",
                  desc: "Anda bisa baca sambil AI mengetik. Bisa di-Salin atau Simpan ke Pustaka.",
                },
                {
                  icon: ExternalLink,
                  title: "Pustaka & Riwayat",
                  desc: "Semua hasil tersimpan otomatis. Lihat di /pustaka untuk yang Anda Save, /riwayat untuk semua run.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "lynk" && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-200 bg-purple-50 text-purple-600">
                <ExternalLink className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Cara Paste HTML ke Lynk.id
                </h2>
                <p className="text-sm italic text-slate-500">
                  Lynk.id mendukung Custom HTML block dengan inline CSS only.
                </p>
              </div>
            </div>
            <ol className="space-y-3 text-sm text-slate-700">
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>1. Login ke</strong>{" "}
                <a
                  href="https://lynk.id"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  Lynk.id Dashboard
                </a>{" "}
                Anda.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>2. Buat Page baru</strong> atau edit page existing.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>3. Tambah Custom HTML block</strong> dari menu blocks.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>4. Paste HTML</strong> hasil generate dari Alextrix.
                Pastikan tidak ada tag{" "}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
                  &lt;html&gt;
                </code>
                ,{" "}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
                  &lt;head&gt;
                </code>
                , atau{" "}
                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">
                  &lt;body&gt;
                </code>{" "}
                — Lynk.id melarang.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>5. Replace placeholder URL CTA</strong> dengan link
                checkout produk Lynk.id Anda.
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong>6. Save & Publish.</strong> Halaman langsung live di
                URL lynk.id Anda.
              </li>
            </ol>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Info className="h-3.5 w-3.5" /> Catatan Penting
              </div>
              <p className="text-xs leading-relaxed text-slate-700">
                Lynk.id hanya mengizinkan inline CSS. Semua HTML hasil generate
                dari Alextrix sudah inline-CSS-only by default — Anda tidak
                perlu khawatir.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
