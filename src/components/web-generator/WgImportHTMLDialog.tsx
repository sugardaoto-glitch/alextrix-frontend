"use client";

import { useCallback, useState } from "react";
import { Stack, STACK_DESCRIPTIONS } from "./stacks";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

interface Props {
  importFromCode: (code: string, stack: Stack) => void;
}

export default function WgImportHTMLDialog({ importFromCode }: Props) {
  const [open, setOpen] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string | undefined>();
  const [stack, setStack] = useState<Stack | undefined>(undefined);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const reader = new FileReader();
    reader.readAsText(acceptedFiles[0]);
    reader.onload = function (e) {
      const result = (e.target as FileReader).result as string;
      setHtmlContent(result);
    };
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "text/html": [".html", ".htm"] },
    maxFiles: 1,
    multiple: false,
    onDrop,
  });

  const onImportCode = () => {
    if (!htmlContent) {
      toast.error("Silakan masukkan kode!");
      return;
    }
    if (!stack) {
      toast.error("Silakan pilih tech stack untuk file ini!");
      return;
    }
    importFromCode(htmlContent, stack);
    setOpen(false);
    setHtmlContent(undefined);
    setStack(undefined);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 text-sm"
      >
        Impor Kode HTML
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-[650px] max-w-[90vw] max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Impor Kode Anda</h2>
          <button
            onClick={() => {
              setOpen(false);
              setHtmlContent(undefined);
              setStack(undefined);
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Pastikan kode yang Anda impor adalah HTML yang valid.
        </p>
        <textarea
          className="w-full h-[300px] border border-gray-300 rounded p-2 text-sm font-mono"
          value={htmlContent || ""}
          onChange={(e) => setHtmlContent(e.target.value)}
          placeholder="Tempel kode HTML Anda di sini..."
        />
        <div
          {...getRootProps()}
          className="mt-2 p-3 border-2 border-dashed border-gray-300 rounded text-center text-sm text-gray-500 cursor-pointer hover:border-violet-400"
        >
          <input {...getInputProps()} />
          Atau klik untuk mengunggah file HTML
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Tech Stack:</span>
            <select
              value={stack || ""}
              onChange={(e) => setStack(e.target.value as Stack)}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="">Pilih</option>
              {Object.values(Stack).map((s) => (
                <option key={s} value={s}>
                  {STACK_DESCRIPTIONS[s].components.join(" + ")}
                  {STACK_DESCRIPTIONS[s].inBeta ? " (Beta)" : ""}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={onImportCode}
            className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 text-sm"
          >
            Impor
          </button>
        </div>
      </div>
    </div>
  );
}
