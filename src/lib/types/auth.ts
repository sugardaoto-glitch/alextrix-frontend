export interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  createdAt: string;
  emailConfirmedAt?: string;
}

export interface OnboardingData {
  sellerType: "pemula" | "experienced";
  lynkUsername?: string;
  niche: string;
  targetAudience: string;
  goal30Days: "find_niche" | "build_first_product" | "increase_conversion" | "retain_buyers" | "optimize";
  notes?: string;
}
