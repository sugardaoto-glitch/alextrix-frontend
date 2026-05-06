export type Pillar = "acquire" | "convert" | "retain" | "optimize" | "ecommerce";

export type UiVariant =
  | "simple"
  | "wizard"
  | "workspace"
  | "image"
  | "calendar"
  | "dashboard";

export type OutputType =
  | "markdown"
  | "html"
  | "multi-section"
  | "image-grid"
  | "json-card"
  | "calendar-events";

export type InputType =
  | "text"
  | "textarea"
  | "select"
  | "multi-select"
  | "number"
  | "url"
  | "image-upload"
  | "tag-input"
  | "rich-textarea"
  | "checkbox-group"
  | "radio-group"
  | "currency-idr";

export interface ToolInputDef {
  id: string;
  label: string;
  type: InputType;
  placeholder?: string;
  helpText?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  defaultValue?: any;
  validation?: {
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
  };
  conditionalShow?: {
    field: string;
    operator: "equals" | "not-equals" | "in";
    value: string | string[];
  };
  step?: number;
}

export interface WizardStep {
  id: number;
  title: string;
  description?: string;
}

export interface Tool {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  pillar: Pillar;
  isActive: boolean;
  uiVariant: UiVariant;
  outputType: OutputType;
  inputs: ToolInputDef[];
  wizardSteps?: WizardStep[];
  estimatedTokens?: { input: number; output: number };
  estimatedDurationSeconds?: number;
  requiresVisionProvider?: boolean;
  requiresImageProvider?: boolean;
  flagshipTier?: boolean;
  description?: string;
}

export type PustakaItemType =
  | "prompt"
  | "page-html"
  | "block"
  | "caption"
  | "persona"
  | "campaign"
  | "funnel"
  | "email-sequence";

export interface PustakaItem {
  id: string;
  type: PustakaItemType;
  title: string;
  content: any;
  tags: string[];
  createdAt: string;
}

export interface ToolRun {
  id: string;
  toolId: string;
  toolName: string;
  pillar: Pillar;
  inputs: Record<string, any>;
  output: import("./output").ToolOutput | null;
  status: "completed" | "failed" | "cancelled";
  tokensInput: number;
  tokensOutput: number;
  durationMs: number;
  starred: boolean;
  createdAt: string;
}

export type ProviderId =
  | "nvidia-nim"
  | "openrouter"
  | "gemini"
  | "openai"
  | "openai-compatible";

export interface ByokEntry {
  provider: ProviderId;
  keyMasked: string;
  status: "unverified" | "verified" | "invalid";
  defaultModel: string;
  endpointUrl?: string;
  lastVerifiedAt: string | null;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface BlockTemplate {
  id: string;
  category: string;
  name: string;
  description: string;
  html: string;
  variables: BlockVariable[];
  colorSlots: BlockColorSlot[];
  previewImage?: string;
}

export interface BlockVariable {
  id: string;
  label: string;
  type: "text" | "url" | "textarea" | "number";
  default: string;
}

export interface BlockColorSlot {
  id: string;
  label: string;
  default: string;
}
