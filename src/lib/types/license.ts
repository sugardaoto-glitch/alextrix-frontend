export interface License {
  code: string;
  status: "active" | "inactive" | "expired";
  activatedAt: string;
  updateWindowExpiresAt: string;
  purchasePriceIDR: number;
}
