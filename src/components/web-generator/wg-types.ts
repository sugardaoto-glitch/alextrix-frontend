import { Stack } from "./stacks";
import { CodeGenerationModel } from "./models";

export enum EditorTheme {
  ESPRESSO = "espresso",
  COBALT = "cobalt",
}

export interface WgSettings {
  openAiApiKey: string | null;
  openAiBaseURL: string | null;
  screenshotOneApiKey: string | null;
  isImageGenerationEnabled: boolean;
  editorTheme: EditorTheme;
  generatedCodeConfig: Stack;
  codeGenerationModel: CodeGenerationModel;
  isTermOfServiceAccepted: boolean;
}

export enum WgAppState {
  INITIAL = "INITIAL",
  CODING = "CODING",
  CODE_READY = "CODE_READY",
}

export interface WgCodeGenerationParams {
  generationType: "create" | "update";
  inputMode: "image" | "video";
  image: string;
  resultImage?: string;
  history?: string[];
  isImportedFromCode?: boolean;
}

export type WgFullGenerationSettings = WgCodeGenerationParams & WgSettings;
