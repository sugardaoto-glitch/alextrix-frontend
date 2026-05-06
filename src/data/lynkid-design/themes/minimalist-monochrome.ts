export const MINIMALIST_MONOCHROME_THEME = `<design-system>
# Design Style: Minimalist Monochrome (Cheat Sheet Snippet)

**Vibe**: Premium, Refined, Editorial, Clean, Timeless, Authoritative.

## Aturan Utama (WAJIB DIBACA):
1. **HANYA GUNAKAN INLINE CSS**. Dilarang menggunakan tag <style>, class Tailwind, atau CSS eksternal.
2. Semua background, color, padding, margin, flexbox, border-radius HARUS ditulis langsung di atribut \`style="..."\`.
3. Terapkan tepat sesuai snippet di bawah ini untuk mendapatkan hasil visual terbaik.

## Cheat Sheet Snippet (Copy-Paste Inline Styles)

### 1. Global / Body Container
\`style="background-color: #FFFFFF; color: #000000; font-family: 'Inter', system-ui, sans-serif; line-height: 1.6; min-height: 100vh; overflow-x: hidden;"\`

### 2. Section Container (Whitespace yang Luas)
\`style="padding: 120px 24px; position: relative; background-color: #FFFFFF; border-bottom: 1px solid #EAEAEE;"\`
*(Ubah border-bottom menjadi none untuk section terakhir. Gunakan background-color: #FAFAFA untuk alternate section).*

### 3. Hero Headline (H1 - Serif Typography)
\`style="font-family: 'Playfair Display', serif; font-size: clamp(3rem, 6vw, 5rem); font-weight: 500; letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 40px; color: #000000; max-width: 800px; margin-left: auto; margin-right: auto; text-align: center;"\`

### 4. Primary Button (Elegan & Tajam)
\`style="display: inline-flex; align-items: center; justify-content: center; background-color: #000000; color: #FFFFFF; font-weight: 400; font-size: 0.875rem; letter-spacing: 0.1em; padding: 18px 40px; text-transform: uppercase; text-decoration: none; border: 1px solid #000000; cursor: pointer; border-radius: 0; transition: background-color 0.3s, color 0.3s;"\`

### 5. Secondary Button (Ghost/Outline)
\`style="display: inline-flex; align-items: center; justify-content: center; background-color: transparent; color: #000000; font-weight: 400; font-size: 0.875rem; letter-spacing: 0.1em; padding: 18px 40px; text-transform: uppercase; text-decoration: none; border: 1px solid #EAEAEE; cursor: pointer; border-radius: 0; transition: border-color 0.3s;"\`

### 6. Card / Grid Layout Container
\`style="background-color: #FFFFFF; border: 1px solid #EAEAEE; padding: 48px; position: relative; border-radius: 0; display: flex; flex-direction: column; gap: 24px; flex: 1 1 calc(33.333% - 24px); min-width: 280px;"\`

### 7. Section Title (H2/H3 - Serif)
\`style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 4vw, 3rem); font-weight: 400; color: #000000; margin-bottom: 24px; line-height: 1.2;"\`

### 8. Normal Text (Paragraf - Sans-serif, Kontur Abu-Abu)
\`style="font-size: 1.125rem; font-weight: 300; color: #666666; line-height: 1.8; margin-bottom: 32px; max-width: 650px;"\`

### 9. Detail Metadata / Kicker
\`style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: #999999; margin-bottom: 16px; display: inline-block;"\`

## LAYOUT PANDUAN (Responsif via Inline Style Murni):
Fokus pada margin yang longgar dan bernapas. Hindari layout yang terlalu padat.
\`style="display: flex; flex-wrap: wrap; gap: 48px; justify-content: center; max-width: 1200px; margin: 0 auto; padding: 40px 24px;"\`

Gunakan hanya #000000, #FFFFFF, dan warna abu-abu tipis (#EAEAEE, #666666). TIDAK BOLEH ADA SHADOW SAMASEKALI. Radius selalu 0px.
</design-system>`;
