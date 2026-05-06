"use client";

import { create } from "zustand";
import type { Tool } from "@/lib/types/tool";
import type { ToolOutput } from "@/lib/types/output";

interface ToolRunnerState {
  currentTool: Tool | null;
  currentInputs: Record<string, any>;
  currentOutput: ToolOutput | null;
  partialText: string;
  isStreaming: boolean;
  streamProgress: { chunkCount: number; charCount: number };
  wizardStep: number;
  durationMs: number;
  tokensInput: number;
  tokensOutput: number;
  loadTool: (tool: Tool, initialInputs?: Record<string, any>) => void;
  setInputs: (inputs: Record<string, any>) => void;
  setInput: (field: string, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  setOutput: (output: ToolOutput) => void;
  setPartialText: (text: string) => void;
  appendPartialText: (chunk: string) => void;
  setStreaming: (s: boolean) => void;
  setProgress: (p: { chunkCount: number; charCount: number }) => void;
  setMetrics: (m: { durationMs: number; tokensInput: number; tokensOutput: number }) => void;
  reset: () => void;
}

const DEFAULT_STATE = {
  currentTool: null as Tool | null,
  currentInputs: {} as Record<string, any>,
  currentOutput: null as ToolOutput | null,
  partialText: "",
  isStreaming: false,
  streamProgress: { chunkCount: 0, charCount: 0 },
  wizardStep: 1,
  durationMs: 0,
  tokensInput: 0,
  tokensOutput: 0,
};

export const useToolRunnerStore = create<ToolRunnerState>()((set, get) => ({
  ...DEFAULT_STATE,

  loadTool: (tool, initialInputs) => {
    const inputs: Record<string, any> = { ...(initialInputs ?? {}) };
    for (const input of tool.inputs) {
      if (inputs[input.id] !== undefined) continue;
      if (input.defaultValue !== undefined) {
        inputs[input.id] = input.defaultValue;
      } else if (input.type === "checkbox-group" || input.type === "multi-select" || input.type === "tag-input") {
        inputs[input.id] = [];
      } else if (input.type === "number" || input.type === "currency-idr") {
        inputs[input.id] = "";
      } else {
        inputs[input.id] = "";
      }
    }
    set({
      ...DEFAULT_STATE,
      currentTool: tool,
      currentInputs: inputs,
      wizardStep: 1,
    });
  },

  setInputs: (inputs) => set({ currentInputs: inputs }),
  setInput: (field, value) =>
    set((s) => ({ currentInputs: { ...s.currentInputs, [field]: value } })),

  nextStep: () => {
    const tool = get().currentTool;
    if (!tool || !tool.wizardSteps) return;
    const next = Math.min(get().wizardStep + 1, tool.wizardSteps.length);
    set({ wizardStep: next });
  },

  prevStep: () => {
    set({ wizardStep: Math.max(1, get().wizardStep - 1) });
  },

  setStep: (step) => set({ wizardStep: step }),
  setOutput: (output) => set({ currentOutput: output }),
  setPartialText: (text) => set({ partialText: text }),
  appendPartialText: (chunk) =>
    set((s) => ({
      partialText: s.partialText + chunk,
      streamProgress: {
        chunkCount: s.streamProgress.chunkCount + 1,
        charCount: s.streamProgress.charCount + chunk.length,
      },
    })),
  setStreaming: (s) => set({ isStreaming: s }),
  setProgress: (p) => set({ streamProgress: p }),
  setMetrics: (m) => set(m),

  reset: () => set({ ...DEFAULT_STATE }),
}));
