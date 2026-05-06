export function formatIDR(amount: number, options: { withSymbol?: boolean } = {}): string {
  const { withSymbol = true } = options;
  const formatted = new Intl.NumberFormat("id-ID").format(amount);
  return withSymbol ? `Rp ${formatted}` : formatted;
}

export function parseIDR(value: string): number {
  const cleaned = value.replace(/[^\d]/g, "");
  return cleaned ? parseInt(cleaned, 10) : 0;
}
