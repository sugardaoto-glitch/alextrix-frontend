export interface DesignDNA {
  id: number;
  slug: string;
  name: string;
  mode: "light" | "dark";
  type: "serif" | "sans" | "mono";
  color: string;
  palette: string[];
  fonts: string[];
  tags: string[];
  desc: string;
  prompt: string;
}

export interface PageStructure {
  id: string;
  name: string;
  description: string;
  prompt: string;
}

export interface MasterPromptInput {
  productName: string;
  productDesc: string;
  price: string;
  targetAudience: string;
  pageType: string;
  designDNA: DesignDNA;
}
