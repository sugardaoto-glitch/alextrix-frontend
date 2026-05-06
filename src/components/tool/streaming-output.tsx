"use client";

import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

interface StreamingOutputProps {
  text: string;
  isStreaming: boolean;
}

export function StreamingOutput({ text, isStreaming }: StreamingOutputProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && isStreaming) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [text, isStreaming]);

  return (
    <div className="rounded-lg border border-brand-200 bg-gradient-to-br from-brand-50/50 to-white">
      <div className="flex items-center gap-2 border-b border-brand-100 px-4 py-2 text-xs font-medium text-brand-700">
        <Sparkles className="h-3.5 w-3.5 animate-pulse" />
        Sedang menghasilkan output...
      </div>
      <div
        ref={ref}
        className="max-h-96 overflow-y-auto whitespace-pre-wrap px-4 py-3 font-mono text-xs text-slate-700"
      >
        {text}
        {isStreaming && (
          <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-brand-500" />
        )}
      </div>
    </div>
  );
}
