/**
 * Template prompt untuk tool e-commerce copywriting Alextrix.
 * Semua output dalam Bahasa Indonesia.
 */

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export type PromptBuilder = (params: Record<string, string>) => ChatMessage[];

export const ECOMMERCE_PROMPTS: Record<string, PromptBuilder> = {
  "ecom-keyword-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah membuat kata kunci berdasarkan informasi produk yang saya berikan.
Hasilkan 10 kata kunci, satu per baris dalam format plain text, tanpa penjelasan tambahan.
Semua hasil WAJIB dalam Bahasa Indonesia.

Informasi produk:
${params.commodityInformation}`,
    },
  ],

  "ecom-listing-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan listing produk berkualitas tinggi berdasarkan informasi berikut.
Listing harus mencakup judul, deskripsi, dan fitur utama.
Fitur utama harus berisi 10 item dalam bullet list.
Semua hasil WAJIB dalam Bahasa Indonesia, format plain text, tanpa penjelasan tambahan.

Kata kunci: ${params.goodsKeywords}
Nama produk: ${params.productName}
Kategori: ${params.category}
Keunggulan: ${params.sellingPoints}`,
    },
  ],

  "ecom-search-term-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah membuat search terms backend berdasarkan informasi produk yang saya berikan.
Buat search terms yang TIDAK disebutkan di teks asli tapi tetap relevan dengan produk, sehingga pembeli bisa menemukan produk ini.

Informasi produk:
${params.commodityInformation}

Lakukan langkah berikut dalam Bahasa Indonesia:
1. Kumpulkan informasi tentang jenis, fungsi, dan gaya produk
2. Buat variasi kata yang belum disebutkan di teks asli
3. Hasilkan 10 search terms, satu per baris`,
    },
  ],

  "ecom-product-description-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah membuat 5 deskripsi produk untuk platform ${params.platform} berdasarkan informasi yang saya berikan.
Pastikan hasilnya berkualitas tinggi dan profesional.
Semua hasil WAJIB dalam Bahasa Indonesia, plain text, satu per baris. Tanpa penjelasan tambahan.

Judul produk:
${params.productTitle}

Kata kunci:
${params.goodsKeywords}`,
    },
  ],

  "ecom-title-optimization": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah membuat 5 judul produk yang teroptimasi untuk platform ${params.platform}.
Pastikan hasilnya berkualitas tinggi, SEO-friendly, dan profesional.
Semua hasil WAJIB dalam Bahasa Indonesia, plain text, satu per baris. Tanpa penjelasan tambahan.

Informasi produk:
${params.goodsKeywords}`,
    },
  ],

  "ecom-product-description-optimization": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah mengoptimasi deskripsi produk untuk platform ${params.platform}.
Pastikan hasilnya berkualitas tinggi dan profesional.
Semua hasil WAJIB dalam Bahasa Indonesia, format plain text.

Judul produk:
${params.productTitle}

Kata kunci:
${params.goodsKeywords}

Deskripsi saat ini:
${params.productDescription}`,
    },
  ],

  "ecom-listing-comparison": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Bandingkan kedua listing produk berikut, lalu tulis laporan ringkas dan profesional untuk tim marketing. Sertakan kelebihan dan kekurangan masing-masing.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa penjelasan tambahan.

Produk A:
Judul: ${params.productTitleA}
Deskripsi: ${params.productDescriptionA}
Fitur utama:
${params.mainFeaturesA}

Produk B:
Judul: ${params.productTitleB}
Deskripsi: ${params.productDescriptionB}
Fitur utama:
${params.mainFeaturesB}`,
    },
  ],

  "ecom-listing-optimization": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Baca listing produk berikut, lalu buatkan versi yang sudah teroptimasi.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa penjelasan tambahan.

Judul: ${params.productTitle}
Deskripsi: ${params.productDescription}
Fitur utama:
${params.mainFeatures}`,
    },
  ],

  "ecom-keyword-expansion": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah membuat 10 variasi kata kunci yang terkait dengan kata kunci asli yang saya berikan.
Pastikan hasilnya berkualitas dan relevan.
Semua hasil WAJIB dalam Bahasa Indonesia, plain text, satu per baris. Tanpa catatan tambahan.

Kata kunci asli:
${params.goodsKeywords}`,
    },
  ],

  "ecom-title-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah membuat 10 judul produk untuk platform ${params.platform} berdasarkan informasi berikut.
Pastikan hasilnya berkualitas tinggi dan profesional.
Semua hasil WAJIB dalam Bahasa Indonesia, plain text, satu per baris. Tanpa penjelasan tambahan.

Nama produk: ${params.productName}
Brand: ${params.brand}
Keunggulan: ${params.coreSellingPoints}
Kata kunci: ${params.goodsKeywords}`,
    },
  ],

  "ecom-tag-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah membuat 10 hashtag yang relevan berdasarkan informasi produk yang saya berikan.
Semua hasil WAJIB dalam Bahasa Indonesia, plain text, satu per baris. Tanpa penjelasan tambahan.

Informasi produk:
${params.commodityInformation}`,
    },
  ],

  "ecom-tag-extraction": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah mengekstrak hashtag yang relevan dari informasi produk berikut.
Semua hasil WAJIB dalam Bahasa Indonesia, plain text, satu per baris. Tanpa penjelasan tambahan.

Judul: ${params.productTitle}
Deskripsi: ${params.productDescription}`,
    },
  ],

  "ecom-keyword-extraction": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah mengekstrak kata kunci dari listing produk berikut.
Hasilkan daftar kata kunci dalam Bahasa Indonesia, satu per baris. Tanpa konten lain.

Listing produk:
${params.productListing}`,
    },
  ],

  "ecom-model-analysis-suggestions": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Baca informasi produk berikut, lalu tulis laporan saran modifikasi untuk meningkatkan daya saing di pasar.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa penjelasan tambahan.

Judul: ${params.productTitle}
Deskripsi: ${params.productDescription}
Fitur utama:
${params.mainFeatures}`,
    },
  ],

  "ecom-keyword-recommendations": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Rekomendasikan kata kunci untuk produk saya berdasarkan informasi berikut.
Hasilkan 20 rekomendasi kata kunci dalam Bahasa Indonesia, satu per baris, format plain text. Tanpa penjelasan tambahan.

Nama produk: ${params.productName}
Jenis kata kunci: ${params.goodsKeywords}`,
    },
  ],

  "ecom-listing-analysis": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Baca listing produk berikut, lalu tulis laporan analisis yang ringkas dan profesional.
Sertakan saran perbaikan untuk listing ini.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa penjelasan tambahan.

Judul: ${params.productTitle}
Deskripsi: ${params.productDescription}
Fitur utama:
${params.mainFeatures}`,
    },
  ],

  "ecom-user-profile-analysis": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tulis laporan analisis profil pengguna target berdasarkan input berikut.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa penjelasan tambahan.

Target pengguna: ${params.targetUser}`,
    },
  ],

  "ecom-customer-review-analysis": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Tugasmu adalah menganalisis komentar pelanggan dan membuat laporan ringkas.
Semua hasil WAJIB dalam Bahasa Indonesia, plain text. Tanpa penjelasan tambahan.

Komentar pelanggan:
${params.comment}`,
    },
  ],

  "ecom-email-reply-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan balasan email untuk pelanggan saya berdasarkan informasi berikut.
Ikuti topik yang saya tentukan. Email harus profesional, ramah, ringkas, dan berkualitas.
Semua hasil WAJIB dalam Bahasa Indonesia, format plain text. Tanpa penjelasan tambahan.

Isi email pelanggan:
${params.customerEmailContent}

Topik balasan: ${params.responseTopic}
Nama pelanggan: ${params.customerName}
Nama CS: ${params.customerServiceName}`,
    },
  ],

  "ecom-aftersales-email-reply": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan balasan email after-sales untuk pelanggan saya berdasarkan informasi berikut.
Email harus profesional, ramah, ringkas, dan berkualitas.
Semua hasil WAJIB dalam Bahasa Indonesia, format plain text. Tanpa penjelasan tambahan.

Isi email pelanggan:
${params.customerEmailContent}`,
    },
  ],

  "ecom-review-reply-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan balasan untuk review pelanggan berikut.
Balasan harus profesional, ramah, ringkas, dan berkualitas.
Semua hasil WAJIB dalam Bahasa Indonesia, format plain text. Tanpa penjelasan tambahan.

Review pelanggan:
${params.comment}`,
    },
  ],

  "ecom-negative-review-reply": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan balasan untuk review negatif pelanggan berikut.
Balasan harus profesional, ramah, solutif, dan berkualitas.
Semua hasil WAJIB dalam Bahasa Indonesia, format plain text. Tanpa penjelasan tambahan.

Review negatif:
${params.comment}

Arah respons yang diinginkan: ${params.expectedResponse}`,
    },
  ],

  "ecom-buyer-message-reply": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan balasan untuk pesan pembeli berikut.
Balasan harus profesional, ramah, informatif, dan berkualitas.
Semua hasil WAJIB dalam Bahasa Indonesia, format plain text. Tanpa penjelasan tambahan.

Pesan pembeli:
${params.comment}

Arah respons yang diinginkan: ${params.expectedResponse}`,
    },
  ],

  "ecom-ad-title-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan 10 judul iklan berdasarkan informasi berikut. Judul harus kreatif, menarik perhatian, dan mendorong pembelian.
Semua hasil WAJIB dalam Bahasa Indonesia, plain text, satu per baris. Tanpa penjelasan tambahan.

Nama produk: ${params.productName}
Target audience: ${params.targetUser}`,
    },
  ],

  "ecom-review-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan 10 contoh review pelanggan untuk produk saya. Review harus realistis, objektif, dan terpercaya.
Semua hasil WAJIB dalam Bahasa Indonesia, plain text, satu per baris. Tanpa penjelasan tambahan.

Nama produk: ${params.productName}
Brand: ${params.brand}`,
    },
  ],

  "ecom-post-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan konten post media sosial berdasarkan judul dan deskripsi berikut.
Post harus profesional, mudah dipahami, menarik, dan kreatif.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa konten lain.

Judul: ${params.title}
Deskripsi: ${params.description}`,
    },
  ],

  "ecom-popular-term-recommendations": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Berdasarkan deskripsi produk berikut, rekomendasikan 10 kata kunci baru yang populer dan relevan. Kata kunci baru boleh tidak disebutkan di teks asli.
Semua hasil WAJIB dalam Bahasa Indonesia, plain text, satu per baris. Tanpa penjelasan tambahan.

Deskripsi produk: ${params.description}`,
    },
  ],

  "ecom-promotion-suggestions": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan saran promosi yang detail untuk produk saya.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa penjelasan tambahan.

Produk: ${params.productName}`,
    },
  ],

  "ecom-inquiry-email-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan email inquiry berdasarkan informasi berikut.
Email harus berkualitas tinggi dan ramah.
Semua hasil WAJIB dalam Bahasa Indonesia, format plain text. Tanpa penjelasan tambahan.

Nama produk: ${params.productName}
Jumlah pesanan: ${params.orderQuantity}
Nama pengirim / perusahaan: ${params.yourNameCompanyName}`,
    },
  ],

  "ecom-influencer-invitation-letter": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan surat undangan kolaborasi untuk KOL/influencer berdasarkan informasi berikut.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa penjelasan tambahan.

Nama toko: ${params.storeName}
Produk: ${params.products}`,
    },
  ],

  "ecom-marketing-email-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan email marketing berdasarkan informasi berikut.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa penjelasan tambahan.

Nama produk: ${params.productName}
Fitur utama:
${params.keyFeatures}`,
    },
  ],

  "ecom-case-study-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan case study berdasarkan informasi berikut.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa penjelasan tambahan.

Nama pelanggan: ${params.customerName}
Nama produk / brand: ${params.productNameOrBrand}`,
    },
  ],

  "ecom-trade-development-letter": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan surat pengembangan bisnis / kerjasama berdasarkan informasi berikut.
Ikuti tujuan yang saya tentukan. Surat harus profesional, ramah, dan berkualitas.
Semua hasil WAJIB dalam Bahasa Indonesia, format markdown. Tanpa penjelasan tambahan.

Penerima: ${params.receiver}
Tujuan: ${params.goal}
Informasi produk & perusahaan:
${params.productAndCompanyInformation}`,
    },
  ],

  "ecom-product-introduction-generation": (params) => [
    {
      role: "user",
      content: `Kamu adalah asisten ahli di bidang E-Commerce Indonesia.
Buatkan pengenalan produk yang berkualitas tinggi berdasarkan kata kunci berikut.
Hasil harus profesional, menarik, dan kreatif.
Semua hasil WAJIB dalam Bahasa Indonesia, format plain text. Tanpa penjelasan tambahan.

Kata kunci:
${params.keywords}`,
    },
  ],
};
