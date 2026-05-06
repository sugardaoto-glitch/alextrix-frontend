"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DOMPurify from "isomorphic-dompurify";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import type { ToolOutput } from "@/lib/types/output";

interface OutputRendererProps {
  output: ToolOutput;
}

export function OutputRenderer({ output }: OutputRendererProps) {
  if (output.type === "markdown") {
    return (
      <div className="prose prose-slate prose-sm max-w-none sm:prose-base">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {output.content}
        </ReactMarkdown>
      </div>
    );
  }

  if (output.type === "html") {
    const safe = DOMPurify.sanitize(output.content, {
      ADD_TAGS: ["style"],
      ADD_ATTR: ["target", "rel"],
    });
    return (
      <div>
        {output.warnings.length > 0 && (
          <div className="mb-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
            <strong>⚠️ Peringatan:</strong>
            <ul className="ml-4 mt-1 list-disc">
              {output.warnings.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        )}
        <div
          className="overflow-hidden rounded-lg border border-slate-200 bg-white"
          dangerouslySetInnerHTML={{ __html: safe }}
        />
      </div>
    );
  }

  if (output.type === "multi-section") {
    return (
      <div className="space-y-6">
        {output.sections.map((s) => (
          <section key={s.id}>
            <h3 className="mb-2 text-base font-semibold text-slate-900">
              {s.label}
            </h3>
            {s.contentType === "markdown" && (
              <div className="prose prose-slate prose-sm max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {s.content}
                </ReactMarkdown>
              </div>
            )}
            {s.contentType === "list-card" && Array.isArray(s.content) && (
              <div className="grid gap-3 sm:grid-cols-2">
                {s.content.map((card: any, i: number) => (
                  <div
                    key={i}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    {Object.entries(card).map(([k, v]) => (
                      <div key={k} className="mb-2 last:mb-0">
                        <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                          {k.replace(/_/g, " ")}
                        </div>
                        <div className="text-sm text-slate-900">
                          {typeof v === "string" ? v : JSON.stringify(v)}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {s.contentType === "json-table" && typeof s.content === "object" && (
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(s.content).map(([k, v]) => (
                      <tr key={k} className="border-b border-slate-100 last:border-0">
                        <td className="bg-slate-50 px-3 py-2 font-medium text-slate-700">
                          {k}
                        </td>
                        <td className="px-3 py-2 text-slate-900">
                          {typeof v === "string" ? v : JSON.stringify(v)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {s.contentType === "html" && (
              <div
                className="overflow-hidden rounded-lg border border-slate-200 bg-white"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(s.content) }}
              />
            )}
          </section>
        ))}
      </div>
    );
  }

  if (output.type === "image-grid") {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {output.images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="aspect-square bg-slate-100" />
            <div className="p-3">
              <div className="text-xs font-medium text-slate-900">{img.alt}</div>
              <div className="mt-1 line-clamp-2 text-xs text-slate-500">
                {img.prompt}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (output.type === "json-card") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {Object.entries(output.data).map(([k, v]) => (
          <div key={k} className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500">
              {k.replace(/_/g, " ")}
            </div>
            <div className="text-sm text-slate-900">
              {typeof v === "string" || typeof v === "number"
                ? String(v)
                : JSON.stringify(v, null, 2)}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (output.type === "calendar-events") {
    return (
      <div className="space-y-2">
        {output.events.map((ev) => (
          <div
            key={ev.id}
            className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3"
          >
            <div className="flex w-16 flex-shrink-0 flex-col items-center rounded-md bg-brand-50 py-1.5 text-center">
              <div className="text-xs font-medium text-brand-700">
                {format(new Date(ev.date), "MMM", { locale: idLocale })}
              </div>
              <div className="text-lg font-bold text-brand-900">
                {format(new Date(ev.date), "d")}
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-sm font-semibold text-slate-900">
                  {ev.title}
                </h4>
                <Badge variant="outline" className="text-[10px]">
                  {ev.channel}
                </Badge>
                <Badge variant="outline" className="text-[10px]">
                  {ev.contentType}
                </Badge>
                {ev.priority === "high" && (
                  <Badge className="bg-amber-100 text-[10px] text-amber-800">
                    🔥 Priority
                  </Badge>
                )}
              </div>
              {ev.caption && (
                <p className="mt-1 text-xs text-slate-600">{ev.caption}</p>
              )}
              {ev.cta && (
                <p className="mt-1 text-xs font-medium text-brand-700">
                  CTA: {ev.cta}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
