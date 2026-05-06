"use client";

import { useEffect, useRef, useState } from "react";
import {
  Send,
  Sparkles,
  Bot,
  Wand2,
  PenLine,
  Trash2,
  Copy,
  Check,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { fakeStream } from "@/lib/mocks/fake-stream";
import { toast } from "sonner";

type EngineId = "otonom" | "promptoptima" | "copywriter";

interface Engine {
  id: EngineId;
  name: string;
  tagline: string;
  icon: typeof Bot;
  systemPrompt: string;
  exampleQuestion: string;
  color: string;
  bg: string;
}

const ENGINES: Engine[] = [
  {
    id: "otonom",
    name: "Otonom",
    tagline: "Eksekutif AI yang menjalankan task end-to-end",
    icon: Bot,
    systemPrompt:
      "Saya AI Otonom Alextrix. Beri saya goal bisnis Anda — saya akan break-down jadi sub-tasks (riset niche → buat copy → susun email sequence → siapkan caption sosmed) dan eksekusi semuanya berurutan.",
    exampleQuestion: "Bantu saya launch ebook MPASI untuk ibu muda Jabodetabek",
    color: "text-purple-700",
    bg: "border-purple-200 bg-purple-50",
  },
  {
    id: "promptoptima",
    name: "Promptoptima",
    tagline: "Optimizer prompt — ubah prompt biasa jadi prompt master",
    icon: Wand2,
    systemPrompt:
      "Saya Promptoptima. Kirim prompt mentah Anda — saya akan analisa kelemahannya, suggest perbaikan (role + context + format + constraints), dan kirim balik versi master prompt yang lebih powerful.",
    exampleQuestion: "Tulis caption Instagram untuk ebook saya",
    color: "text-blue-700",
    bg: "border-blue-200 bg-blue-50",
  },
  {
    id: "copywriter",
    name: "Copywriter",
    tagline: "Spesialis copywriting Bahasa Indonesia berbasis emotional triggers",
    icon: PenLine,
    systemPrompt:
      "Saya copywriter senior dengan 10 tahun pengalaman di pasar Indonesia. Spesialisasi: hook headline, pain-point storytelling, urgency, social proof, dan CTA. Tanya saya tentang copy untuk produk digital, ads, email, atau sosmed.",
    exampleQuestion: "Tulis 5 headline untuk landing page ebook resep MPASI",
    color: "text-rose-700",
    bg: "border-rose-200 bg-rose-50",
  },
];

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const MOCK_RESPONSES: Record<EngineId, string[]> = {
  otonom: [
    `## 🎯 Action Plan dari Otonom

Saya akan break-down task Anda jadi 4 fase eksekusi:

### Fase 1 — Riset & Validasi (15 menit)
- Bedah 3 kompetitor MPASI di Lynk.id (Tokopedia, Shopee, marketplace lokal)
- Identifikasi 5 pain points utama ibu muda Jabodetabek
- Validasi harga sweet spot: Rp 49-99K untuk ebook segment

### Fase 2 — Asset Foundation (30 menit)
- **Niche Scanner**: konfirmasi positioning ebook
- **Persona Builder**: bangun ICP "Ibu Bekerja, Anak 6-24 bulan"
- **Lead Magnet**: ebook mini "7 Resep MPASI Anti-GTM" (gratis untuk capture leads)

### Fase 3 — Sales Funnel (45 menit)
- **LP Master PRO**: landing page premium (theme: Luxury / Botanical)
- **Email Sequence**: 7-hari nurture sequence dari opt-in → conversion
- **Click Candy**: CTA copy + button microcopy A/B variants

### Fase 4 — Distribution Pack (60 menit)
- 30 caption Instagram (carousel + reels hook)
- 10 hook TikTok 60-detik
- 5 broadcast WhatsApp (warm + cold)
- 1 video script intro untuk reels viral

**Total estimasi**: 2.5 jam end-to-end. Mau saya mulai dari Fase 1?`,
    `## 📊 Status Eksekusi: Fase 1 Complete

Hasil riset 3 kompetitor MPASI Lynk.id:

**Kompetitor A** — Ebook "Resep MPASI Sehat" (Rp 79K)
- Strength: 100+ resep, ada video demo
- Weakness: tidak ada meal-prep guide, design jadul

**Kompetitor B** — Course "MPASI Anti-Pusing" (Rp 199K)
- Strength: live Q&A weekly, komunitas private
- Weakness: terlalu mahal untuk ibu first-baby, course panjang banget

**Kompetitor C** — Bundle "MPASI + Stunting Prevention" (Rp 149K)
- Strength: ada pediatrician endorsement
- Weakness: copywriting boring, no emotional hook

### 🎯 Rekomendasi Positioning untuk Anda
Sweet spot: **Rp 99K** dengan angle "Praktis untuk Ibu Bekerja"
- USP: meal-prep weekend (1 jam masak = stok 5 hari)
- Bonus: meal calendar PDF + grocery list weekly
- Risk reversal: 14-hari money-back guarantee

Lanjut ke Fase 2 (build assets)?`,
  ],
  promptoptima: [
    `## ⚡ Analisa Prompt Anda

**Prompt mentah:**
> Tulis caption Instagram untuk ebook saya

### Kelemahan yang saya identifikasi:
1. ❌ **Tidak ada role definition** — AI tidak tahu personality apa yang harus diadopsi
2. ❌ **Tidak ada context** — produk apa? audience siapa? tone bagaimana?
3. ❌ **Tidak ada format spec** — caption bisa 3 baris atau 30 baris, AI akan tebak-tebakan
4. ❌ **Tidak ada constraint** — tidak ada batasan karakter, tidak ada CTA spec
5. ❌ **Tidak ada example** — AI tidak punya referensi tone yang Anda inginkan

---

## 🎯 Master Prompt Hasil Optimasi

\`\`\`
ROLE
Anda adalah copywriter senior 10 tahun pengalaman di pasar Indonesia, spesialis
Instagram caption untuk produk digital ibu muda. Tone: relatable, hangat, no-corp-speak.

CONTEXT
- Produk: Ebook "Resep MPASI Praktis 6-12 Bulan" (Rp 99K)
- Audience: Ibu bekerja 25-35 tahun di Jabodetabek dengan baby 6-24 bulan
- Pain points: takut salah masak MPASI, tidak punya banyak waktu, GTM (gerakan tutup mulut)
- Goal: drive klik ke link bio (lynk.id/dapurmamaina/ebook-mpasi)

TASK
Tulis 5 caption Instagram berbeda untuk reels/feed yang viral di niche parenting Indonesia.
Setiap caption harus punya:
- Hook 1 baris pertama yang stop scroll (emotional, BUKAN feature)
- Body 3-5 baris pakai pain-point storytelling
- Bullet 3 manfaat ebook (use ✨ atau ✅)
- CTA jelas: "Klik link di bio untuk dapatkan ebook lengkap"
- 8-12 hashtag relevan (mix high + low volume)

FORMAT
- Total caption: 800-1200 karakter (sweet spot algoritma IG 2026)
- Pakai line break per kalimat untuk readability mobile
- Gunakan emoji moderate (3-5 per caption, BUKAN spam)

CONSTRAINTS
- Bahasa Indonesia native, BUKAN translation literal
- HINDARI kata "diskon", "promo", "murah" (akan di-throttle algoritma)
- Wajib include 1 social proof (e.g. "Sudah 500+ ibu pakai panduan ini")
- 1 caption HARUS punya hook controversial (BUKAN clickbait)

OUTPUT
5 caption lengkap berlabel CAPTION 1, CAPTION 2, dll.
Masing-masing siap copy-paste, no placeholder, no [insert here].
\`\`\`

### 📈 Improvements
- **Specificity**: dari 1 kalimat → prompt struktural 35 baris
- **Constraints**: tambah 4 hardlimit untuk anti-output-generik
- **Output spec**: dari "caption" → "5 caption 800-1200 char dengan struktur 5-bagian"

Mau saya generate caption hasilnya juga, atau Anda mau paste prompt ini ke ChatGPT/Gemini sendiri?`,
    `## 🎨 Tip Pro: Pattern "Master Prompt 5C"

Setiap prompt powerful punya 5 element ini:

**1. Context** (siapa, untuk apa)
Beri AI semua background yang dia butuh untuk decision-making yang baik.

**2. Constraint** (batasan)
Apa yang HARUS dan TIDAK BOLEH. Constraint mencegah hallucination + output generik.

**3. Customer** (target audience)
Specifik demografi + psikografi. Bukan "ibu muda" tapi "ibu bekerja 28-32 tahun di Jakarta dengan baby 8-14 bulan, household income Rp 15-25 juta, peduli organic food".

**4. Container** (format)
Output format yang tegas: panjang, struktur, format file. AI tidak akan tebak.

**5. CTA** (apa yang Anda mau dia lakukan)
Akhir prompt selalu spec dengan jelas: "OUTPUT: 5 caption lengkap, masing-masing diapit ---"

Pakai pattern ini untuk semua prompt selanjutnya.`,
  ],
  copywriter: [
    `## 🎯 5 Headline untuk Ebook Resep MPASI

Saya tulis 5 dengan angle berbeda — pilih yang paling cocok dengan persona audience Anda:

### 1. Pain-First (paling sering convert)
**"Anak Anda Tutup Mulut? Ini 50+ Resep MPASI yang Bikin Anak Buka Mulut Tanpa Drama"**

### 2. Before/After
**"Dari 30 Menit Drama MPASI Tiap Pagi, Sekarang 10 Menit dan Anak Habiskan Semua"**

### 3. Counter-Intuitive Hook
**"Lupakan 'Variasi Setiap Hari'. Inilah Cara Ibu Bekerja Stok MPASI 5 Hari dalam 1 Jam Weekend"**

### 4. Social Proof First
**"500+ Ibu Bekerja di Jabodetabek Sudah Pakai Panduan Ini — Anak Mereka Habis Porsi Sekali Suap"**

### 5. Problem-Agitation-Solution
**"Capek Masak MPASI Beda Tiap Hari & Anak Tetap Tutup Mulut? Anda Bukan Ibu Buruk — Anda Cuma Belum Punya Sistem yang Tepat"**

---

## 💡 Tips Pemilihan
- **Cold traffic (paid ads)**: pakai #1 atau #5 (problem-first)
- **Warm traffic (followers, email list)**: pakai #2 atau #4 (proof + outcome)
- **Influencer endorsement**: pakai #3 (counter-intuitive bikin buzz)

Mau saya tulis full landing page copy dari salah satu headline ini?`,
    `## 🔥 Lanjutan: Subheadline + Bullets

Pakai headline #1: **"Anak Anda Tutup Mulut?"**

### Subheadline (4 baris max):
> Karena masalahnya bukan anak Anda — masalahnya cara Anda nyajiin MPASI.
> 50+ resep di sini sudah teruji ke 500+ baby Jabodetabek dengan tingkat "porsi habis" 87%.
> Plus meal-prep weekend (1 jam = stok 5 hari) dan grocery list otomatis.
> Cocok untuk ibu bekerja yang **mau anak makan kenyang tapi nggak mau drama setiap pagi**.

### Bullet Manfaat (5 utama):
✅ **50+ resep MPASI 6-24 bulan** — sudah dievaluasi ahli gizi anak
✅ **Meal-prep weekend** — masak 1 jam di Sabtu, stok 5 hari kerja
✅ **Grocery list otomatis** — tinggal print, langsung belanja
✅ **Texture guide per usia** — anti-tersedak, anti-GTM
✅ **Bonus: 30 ide snack sehat** + meal calendar PDF download

Lanjut bagian **Garansi + CTA**?`,
  ],
};

function generateMockReply(engineId: EngineId, history: ChatMessage[]): string {
  const responses = MOCK_RESPONSES[engineId];
  const userMsgCount = history.filter((m) => m.role === "user").length;
  return responses[(userMsgCount - 1) % responses.length];
}

export default function AgenAiPage() {
  const [activeEngine, setActiveEngine] = useState<EngineId>("otonom");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const engine = ENGINES.find((e) => e.id === activeEngine)!;

  useEffect(() => {
    setMessages([]);
    setStreamingContent("");
  }, [activeEngine]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, streamingContent]);

  async function handleSend() {
    if (!input.trim() || isStreaming) return;

    const userMsg: ChatMessage = {
      id: `${Date.now()}-u`,
      role: "user",
      content: input.trim(),
      timestamp: Date.now(),
    };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput("");
    setIsStreaming(true);
    setStreamingContent("");

    const reply = generateMockReply(activeEngine, newHistory);
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      let acc = "";
      for await (const chunk of fakeStream(
        { type: "markdown", content: reply },
        ctrl.signal,
      )) {
        if (chunk.type === "text") {
          acc += chunk.data;
          setStreamingContent(acc);
        } else if (chunk.type === "error") {
          toast.error(chunk.data);
          setIsStreaming(false);
          setStreamingContent("");
          return;
        } else if (chunk.type === "done") {
          setMessages((prev) => [
            ...prev,
            {
              id: `${Date.now()}-a`,
              role: "assistant",
              content: acc,
              timestamp: Date.now(),
            },
          ]);
          setStreamingContent("");
          setIsStreaming(false);
          return;
        }
      }
    } catch (err) {
      if ((err as DOMException).name !== "AbortError") {
        toast.error("Gagal generate. Coba lagi.");
      }
      setIsStreaming(false);
      setStreamingContent("");
    }
  }

  function handleStop() {
    abortRef.current?.abort();
  }

  function handleClear() {
    if (isStreaming) handleStop();
    setMessages([]);
    setStreamingContent("");
  }

  async function handleCopy(id: string, content: string) {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(id);
      toast.success("Tersalin");
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      toast.error("Gagal menyalin");
    }
  }

  return (
    <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-6xl flex-col px-4 py-6 lg:px-8">
      <div className="mb-6">
        <h1 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900">
          <Sparkles className="h-6 w-6 text-brand-500" /> Agen AI
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          3 engine spesialis: pilih sesuai kebutuhan dan mulai chat.
        </p>
      </div>

      {/* Engine selector */}
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {ENGINES.map((eng) => {
          const Icon = eng.icon;
          const active = eng.id === activeEngine;
          return (
            <button
              key={eng.id}
              onClick={() => setActiveEngine(eng.id)}
              className={cn(
                "flex flex-col items-start gap-2 rounded-xl border p-4 text-left transition-all",
                active
                  ? eng.bg + " ring-2 ring-offset-2 ring-brand-500"
                  : "border-slate-200 bg-white hover:border-slate-300",
              )}
            >
              <div className="flex w-full items-center gap-3">
                <div
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg",
                    active ? "bg-white" : "bg-slate-50",
                    eng.color,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-bold text-slate-900">
                  {eng.name}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600">
                {eng.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Chat container */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6">
          {messages.length === 0 && !streamingContent && (
            <div className="mx-auto flex max-w-md flex-col items-center justify-center py-12 text-center">
              <div
                className={cn(
                  "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border",
                  engine.bg,
                  engine.color,
                )}
              >
                <engine.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {engine.name}
              </h3>
              <p className="mb-6 text-sm text-slate-600">
                {engine.systemPrompt}
              </p>
              <button
                onClick={() => setInput(engine.exampleQuestion)}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-700 hover:bg-slate-100"
              >
                💬 Coba: &quot;{engine.exampleQuestion}&quot;
              </button>
            </div>
          )}

          <div className="space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-3",
                  msg.role === "user" ? "flex-row-reverse" : "flex-row",
                )}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    msg.role === "user"
                      ? "bg-brand-100 text-brand-700"
                      : "bg-slate-100 text-slate-700",
                  )}
                >
                  {msg.role === "user" ? "U" : "AI"}
                </div>
                <div
                  className={cn(
                    "group max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-brand-500 text-white"
                      : "border border-slate-200 bg-slate-50 text-slate-800",
                  )}
                >
                  <pre className="whitespace-pre-wrap font-sans">
                    {msg.content}
                  </pre>
                  {msg.role === "assistant" && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.content)}
                      className="mt-2 flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] text-slate-500 hover:bg-slate-200"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="h-3 w-3" /> Tersalin
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" /> Salin
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {streamingContent && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                  AI
                </div>
                <div className="max-w-[80%] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-800">
                  <pre className="whitespace-pre-wrap font-sans">
                    {streamingContent}
                  </pre>
                  <div className="mt-2 inline-flex h-2 w-2 animate-pulse rounded-full bg-brand-500" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input bar */}
        <div className="border-t border-slate-200 bg-white p-4">
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey && !isStreaming) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder={`Kirim pesan ke ${engine.name}... (Enter untuk kirim, Shift+Enter newline)`}
              disabled={isStreaming}
              className="min-h-[44px] flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-brand-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-300 disabled:opacity-50"
              rows={1}
            />
            {isStreaming ? (
              <button
                onClick={handleStop}
                className="flex h-11 items-center gap-1.5 rounded-xl bg-red-500 px-4 text-sm font-semibold text-white hover:bg-red-600"
              >
                <Loader2 className="h-4 w-4 animate-spin" /> Stop
              </button>
            ) : (
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="flex h-11 items-center gap-1.5 rounded-xl bg-brand-500 px-4 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-40"
              >
                <Send className="h-4 w-4" /> Kirim
              </button>
            )}
            {messages.length > 0 && (
              <button
                onClick={handleClear}
                title="Hapus chat"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </div>
          <p className="mt-2 text-[11px] text-slate-400">
            Mock mode — output kontekstual dari template demo. Atur API key di
            Pengaturan → API Key untuk respon LLM real.
          </p>
        </div>
      </div>
    </div>
  );
}
