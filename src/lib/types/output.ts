export interface OutputSection {
  id: string;
  label: string;
  contentType: "markdown" | "html" | "json-table" | "list-card";
  content: any;
}

export interface CalendarEvent {
  id: string;
  date: string; // YYYY-MM-DD
  channel: "instagram" | "tiktok" | "whatsapp" | "email" | "telegram" | "lynk";
  contentType: "post" | "story" | "reel" | "email" | "broadcast" | "page-update";
  title: string;
  caption?: string;
  cta?: string;
  productLink?: string;
  relatedEvent?: string;
  priority?: "high" | "normal";
}

export interface ImageOutput {
  url: string;
  alt: string;
  prompt: string;
}

export type ToolOutput =
  | { type: "markdown"; content: string }
  | { type: "html"; content: string; warnings: string[] }
  | { type: "multi-section"; sections: OutputSection[] }
  | { type: "image-grid"; images: ImageOutput[] }
  | { type: "json-card"; data: Record<string, any> }
  | { type: "calendar-events"; events: CalendarEvent[] };
