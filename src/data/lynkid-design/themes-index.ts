import { BAUHAUS_THEME } from "./themes/bauhaus";
import { MINIMALIST_MONOCHROME_THEME } from "./themes/minimalist-monochrome";
import { MODERN_DARK_THEME } from "./themes/modern-dark";
import { NEWSPRINT_THEME } from "./themes/newsprint";
import { SAAS_THEME } from "./themes/saas";

export const THEME_PROMPTS: Record<string, string> = {
  "monochrome": MINIMALIST_MONOCHROME_THEME,
  "bauhaus": BAUHAUS_THEME,
  "modern-dark": MODERN_DARK_THEME,
  "newsprint": NEWSPRINT_THEME,
  "saas": SAAS_THEME,
  "terminal": `<design-system>
# Design Style: Terminal Retro (Cheat Sheet Snippet)

**Vibe**: Old School CLI, Hacker, CRT Monitor, Phosphor Green, 80s/90s.

## Aturan Utama (WAJIB DIBACA):
1. **HANYA GUNAKAN INLINE CSS**. Dilarang menggunakan class Tailwind/CSS.
2. Semua style HARUS ditulis di atribut \`style="..."\`.

## Cheat Sheet Snippet (Copy-Paste Inline Styles)

### 1. Global / Body Container
\`style="background-color: #000000; color: #00FF41; font-family: 'Courier New', monospace; line-height: 1.5; min-height: 100vh; overflow-x: hidden; padding: 20px;"\`

### 2. Section / Card Container (Box ASCII/Dashed Border)
\`style="border: 1px dashed #00FF41; padding: 24px; margin-bottom: 24px; position: relative;"\`
*(Terminal tidak pakai card putih, melainkan kotak garis putus-putus neon)*

### 3. Headline (H1 / ASCII Art Style)
\`style="font-size: clamp(2rem, 4vw, 3rem); font-weight: bold; color: #00FF41; text-transform: uppercase; margin-bottom: 32px; text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);"\`

### 4. Primary Button (CLI Command Box)
\`style="display: inline-block; background-color: #00FF41; color: #000000; font-family: 'Courier New', monospace; font-weight: bold; font-size: 1rem; padding: 12px 24px; text-transform: uppercase; text-decoration: none; border: none; cursor: pointer; border-radius: 0;"\`

### 5. Normal Text (CLI Input/Output)
\`style="font-size: 1rem; color: #00FF41; line-height: 1.6; margin-bottom: 16px;"\`

*(Tip: Tambahkan awalan \`>_\` di judul atau paragraf untuk menyerupai command line)*
</design-system>`,
  "cyberpunk": `<design-system>
# Design Style: Cyberpunk (Cheat Sheet Snippet)

**Vibe**: Neon, Glitch, High Contrast, Futuristic, Dystopian.

## Aturan Utama (WAJIB DIBACA):
1. **HANYA GUNAKAN INLINE CSS**. Dilarang menggunakan class Tailwind/CSS.
2. Semua style HARUS ditulis di atribut \`style="..."\`.

## Cheat Sheet Snippet (Copy-Paste Inline Styles)

### 1. Global / Body Container
\`style="background-color: #0D0221; color: #00FFD1; font-family: 'Orbitron', 'Space Grotesk', sans-serif; line-height: 1.6; min-height: 100vh; overflow-x: hidden;"\`

### 2. Header / H1
\`style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 800; text-transform: uppercase; margin-bottom: 32px; color: #FCEE0A; text-shadow: 3px 3px 0 #FF003C, -2px -2px 0 #00FFD1; letter-spacing: 2px;"\`

### 3. Primary Button (Neon Glitch)
\`style="display: inline-block; background-color: #FCEE0A; color: #0D0221; font-weight: 900; font-size: 1.125rem; padding: 16px 36px; text-transform: uppercase; text-decoration: none; border: 2px solid #FF003C; border-radius: 0; box-shadow: 4px 4px 0 #FF003C; cursor: pointer;"\`

### 4. Card Container
\`style="background-color: rgba(13, 2, 33, 0.8); border: 1px solid #00FFD1; padding: 32px; border-left: 4px solid #FF003C; box-shadow: 0 0 15px rgba(0, 255, 209, 0.2); backdrop-filter: blur(4px);"\`

### 5. Normal Text
\`style="font-size: 1.125rem; color: #A6A2C2; line-height: 1.7; font-family: 'Inter', sans-serif;"\`
</design-system>`,
  "web3": `<design-system>
# Design Style: Web3 Gradient (Cheat Sheet Snippet)

**Vibe**: Default Crypto/NFT, Dreamy, Glassmorphism, Floating.

## Aturan Utama (WAJIB DIBACA):
1. **HANYA GUNAKAN INLINE CSS**. Dilarang menggunakan class Tailwind/CSS.

## Cheat Sheet Snippet (Copy-Paste Inline Styles)

### 1. Global / Body Container
\`style="background: linear-gradient(135deg, #130026 0%, #3B006C 50%, #080D2D 100%); color: #FFFFFF; font-family: 'Inter', sans-serif; min-height: 100vh; overflow-x: hidden;"\`

### 2. Background Blob Decoration (Letakkan Absolut di Latar Belakang)
\`style="position: absolute; width: 400px; height: 400px; border-radius: 50%; background: linear-gradient(135deg, #FF007A 0%, #7928CA 100%); filter: blur(100px); top: 10%; right: 10%; opacity: 0.5; z-index: 0; pointer-events: none;"\`

### 3. H1 Headings (Gradient Text)
\`style="font-size: clamp(3rem, 6vw, 5rem); font-weight: 800; background: linear-gradient(to right, #00FFD1, #FF007A); -webkit-background-clip: text; -webkit-text-fill-color: transparent; position: relative; z-index: 1;"\`

### 4. Blur Card (Glassmorphism PENTING)
\`style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 24px; padding: 32px; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 8px 32px rgba(0,0,0,0.3); position: relative; z-index: 1;"\`

### 5. Primary Button (Pill Shape Gradient)
\`style="display: inline-block; background: linear-gradient(to right, #7928CA, #FF007A); color: #FFFFFF; font-weight: 700; padding: 16px 36px; border-radius: 9999px; text-decoration: none; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 0, 122, 0.4);"\`
</design-system>`,
  "neo-brutalism": `<design-system>
# Design Style: Neo-Brutalism (Cheat Sheet Snippet)

**Vibe**: Trendy, Gen-Z, Clashing Colors, Ugly-on-purpose.

## Aturan Utama (WAJIB DIBACA):
1. **HANYA GUNAKAN INLINE CSS**. Dilarang menggunakan class Tailwind/CSS.

## Cheat Sheet Snippet (Copy-Paste Inline Styles)

### 1. Global / Body Container
\`style="background-color: #FFF2E6; color: #111; font-family: 'Public Sans', sans-serif; min-height: 100vh; overflow-x: hidden;"\`
*(Warna latar bisa diganti warna pastel nabrak: pink, mint, atau kuning pucat)*

### 2. H1 Headline
\`style="font-size: clamp(3rem, 6vw, 4.5rem); font-weight: 900; letter-spacing: -0.04em; color: #111; text-transform: uppercase;"\`

### 3. Primary Button (Warna Norak & Hard Shadow Hitam)
\`style="display: inline-block; background-color: #FF5A5F; color: #111; font-weight: bold; border: 3px solid #111; padding: 16px 32px; border-radius: 8px; box-shadow: 6px 6px 0px #111; text-decoration: none; cursor: pointer; font-size: 1.1rem; text-transform: uppercase;"\`
*(Ubah background-color ke warna pastel cerah yang lain seperti lime green atau cyan untuk secondary)*

### 4. Feature Card (Kotak Putih dengan Hard Shadow Hitam)
\`style="background-color: #FFF; border: 3px solid #111; padding: 32px; border-radius: 12px; box-shadow: 6px 6px 0px #111;"\`

### 5. Tags / Badges
\`style="display: inline-block; background-color: #B4F8C8; border: 2px solid #111; padding: 8px 16px; border-radius: 99px; font-weight: bold; font-size: 0.9rem;"\`
</design-system>`,
  "luxury": `<design-system>
# Design Style: Modern Luxury (Cheat Sheet Snippet)

**Vibe**: High-End, Expensive, Fashion, Premium, Warm Gold.

## Aturan Utama (WAJIB DIBACA):
1. **HANYA GUNAKAN INLINE CSS**. Dilarang menggunakan class Tailwind/CSS.

## Cheat Sheet Snippet (Copy-Paste Inline Styles)

### 1. Global / Body Container
\`style="background-color: #0E0F0D; color: #DFD5C5; font-family: 'Cinzel', 'Playfair Display', serif; min-height: 100vh; overflow-x: hidden;"\`
*(Latar belakang hijau hutan sangat gelap, atau full hitam)*

### 2. H1 Headline (Gold Serif)
\`style="font-family: 'Cinzel', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 400; letter-spacing: 0.05em; color: #D4AF37; text-align: center; text-transform: uppercase;"\`

### 3. Card Container (Very subtle borders)
\`style="background-color: rgba(223, 213, 197, 0.03); border: 1px solid rgba(212, 175, 55, 0.2); padding: 48px; text-align: center;"\`

### 4. Primary Button (Gold Outline)
\`style="display: inline-block; background-color: transparent; color: #D4AF37; font-family: 'Inter', sans-serif; font-weight: 300; letter-spacing: 0.2em; padding: 18px 40px; border: 1px solid #D4AF37; cursor: pointer; text-decoration: none; text-transform: uppercase; font-size: 0.85rem;"\`

### 5. Normal Text
\`style="font-family: 'Inter', sans-serif; font-weight: 300; font-size: 1.1rem; line-height: 1.8; color: #A09E96; text-align: center;"\`
</design-system>`,
};
