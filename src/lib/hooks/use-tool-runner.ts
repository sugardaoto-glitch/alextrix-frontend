"use client";

import { useCallback, useRef } from "react";
import { useToolRunnerStore } from "@/lib/stores/tool-runner-store";
import { useRiwayatStore } from "@/lib/stores/riwayat-store";
import { fakeStream } from "@/lib/mocks/fake-stream";
import { getMockOutput } from "@/data/mock-outputs";
import type { Tool } from "@/lib/types/tool";
import type { ToolOutput } from "@/lib/types/output";

export interface UseToolRunnerResult {
  run: (tool: Tool, inputs: Record<string, any>) => Promise<ToolOutput | null>;
  cancel: () => void;
}

export function useToolRunner(): UseToolRunnerResult {
  const abortRef = useRef<AbortController | null>(null);
  const startRef = useRef<number>(0);
  const runner = useToolRunnerStore();
  const addRun = useRiwayatStore((s) => s.addRun);

  const run = useCallback(
    async (tool: Tool, inputs: Record<string, any>): Promise<ToolOutput | null> => {
      const ac = new AbortController();
      abortRef.current = ac;
      startRef.current = Date.now();

      runner.setStreaming(true);
      runner.setPartialText("");
      runner.setOutput(null as any);
      runner.setProgress({ chunkCount: 0, charCount: 0 });

      const finalOutput = getMockOutput(tool.id);
      let success = false;

      try {
        for await (const chunk of fakeStream(finalOutput, ac.signal)) {
          if (chunk.type === "text") {
            runner.appendPartialText(chunk.data);
          } else if (chunk.type === "error") {
            throw new Error(chunk.data);
          } else if (chunk.type === "done") {
            runner.setOutput(chunk.output);
            success = true;
          }
        }

        const durationMs = Date.now() - startRef.current;
        const tokensIn = tool.estimatedTokens?.input ?? 500;
        const tokensOut = tool.estimatedTokens?.output ?? 1500;
        runner.setMetrics({ durationMs, tokensInput: tokensIn, tokensOutput: tokensOut });

        addRun({
          toolId: tool.id,
          toolName: tool.name,
          pillar: tool.pillar,
          inputs,
          output: finalOutput,
          status: "completed",
          tokensInput: tokensIn,
          tokensOutput: tokensOut,
          durationMs,
          starred: false,
        });

        return finalOutput;
      } catch (err) {
        if (ac.signal.aborted) {
          addRun({
            toolId: tool.id,
            toolName: tool.name,
            pillar: tool.pillar,
            inputs,
            output: null,
            status: "cancelled",
            tokensInput: 0,
            tokensOutput: 0,
            durationMs: Date.now() - startRef.current,
            starred: false,
          });
          return null;
        }
        addRun({
          toolId: tool.id,
          toolName: tool.name,
          pillar: tool.pillar,
          inputs,
          output: null,
          status: "failed",
          tokensInput: 0,
          tokensOutput: 0,
          durationMs: Date.now() - startRef.current,
          starred: false,
        });
        throw err;
      } finally {
        runner.setStreaming(false);
        if (!success) runner.setPartialText("");
        abortRef.current = null;
      }
    },
    [runner, addRun],
  );

  const cancel = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  return { run, cancel };
}
