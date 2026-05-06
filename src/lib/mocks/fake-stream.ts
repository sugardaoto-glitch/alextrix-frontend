import type { ToolOutput } from "@/lib/types/output";

export type StreamChunk =
  | { type: "text"; data: string }
  | { type: "done"; output: ToolOutput }
  | { type: "error"; data: string };

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }
    const timeout = setTimeout(resolve, ms);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timeout);
        reject(new DOMException("Aborted", "AbortError"));
      },
      { once: true },
    );
  });
}

export async function* fakeStream(
  output: ToolOutput,
  signal?: AbortSignal,
): AsyncGenerator<StreamChunk> {
  // Simulate 5% random failure
  if (Math.random() < 0.05) {
    yield {
      type: "error",
      data: "Provider error: rate limit. Coba lagi 30 detik.",
    };
    return;
  }

  if (output.type === "markdown" || output.type === "html") {
    const content = output.content;
    const chunkSize = 25;
    let cursor = 0;

    while (cursor < content.length) {
      const next = Math.min(cursor + chunkSize, content.length);
      const chunk = content.slice(cursor, next);
      cursor = next;
      const delayMs = 30 + Math.floor(Math.random() * 50);
      await sleep(delayMs, signal);
      yield { type: "text", data: chunk };
    }

    await sleep(100, signal);
    yield { type: "done", output };
    return;
  }

  // Other output types: simulate processing delay then emit done
  await sleep(2000 + Math.random() * 1500, signal);
  yield { type: "done", output };
}

export function estimateTokens(text: string): number {
  // Rough estimate: ~4 chars per token
  return Math.ceil(text.length / 4);
}
