export const PRICING = {
  promoPriceIDR: parseInt(process.env.NEXT_PUBLIC_PROMO_PRICE_IDR ?? "49000", 10),
  regularPriceIDR: parseInt(process.env.NEXT_PUBLIC_REGULAR_PRICE_IDR ?? "99000", 10),
  promoMaxBuyers: parseInt(process.env.NEXT_PUBLIC_PROMO_MAX_BUYERS ?? "100", 10),
  updateWindowDays: 90,
} as const;

export const LYNK_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_LYNK_CHECKOUT_URL ??
  "https://lynk.id/your-username/alextrix-lifetime";

export const TELEGRAM_GROUP_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_GROUP_URL ?? "https://t.me/+placeholder";
