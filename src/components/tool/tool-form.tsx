"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ToolInputField } from "@/components/tool/tool-input-field";
import type { Tool, ToolInputDef } from "@/lib/types/tool";

interface ToolFormProps {
  tool: Tool;
  values: Record<string, any>;
  onChange: (field: string, value: any) => void;
  onSubmit: () => void;
  onCancel?: () => void;
  isStreaming?: boolean;
  visibleFields?: ToolInputDef[];
  submitLabel?: string;
}

function isVisible(
  field: ToolInputDef,
  values: Record<string, any>,
): boolean {
  if (!field.conditionalShow) return true;
  const target = values[field.conditionalShow.field];
  const op = field.conditionalShow.operator;
  const v = field.conditionalShow.value;
  if (op === "equals") return target === v;
  if (op === "not-equals") return target !== v;
  if (op === "in" && Array.isArray(v)) return v.includes(target);
  return true;
}

export function ToolForm({
  tool,
  values,
  onChange,
  onSubmit,
  onCancel,
  isStreaming = false,
  visibleFields,
  submitLabel = "Hasilkan",
}: ToolFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const fields = useMemo(
    () =>
      (visibleFields ?? tool.inputs).filter((f) => isVisible(f, values)),
    [visibleFields, tool.inputs, values],
  );

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    for (const f of fields) {
      if (!f.required) continue;
      const v = values[f.id];
      const empty =
        v === undefined ||
        v === null ||
        v === "" ||
        (Array.isArray(v) && v.length === 0);
      if (empty) errs[f.id] = "Wajib diisi";
      else if (typeof v === "string" && f.validation?.minLength && v.length < f.validation.minLength) {
        errs[f.id] = `Minimal ${f.validation.minLength} karakter`;
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStreaming && !validate()) return;
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((f) => (
        <ToolInputField
          key={f.id}
          field={f}
          value={values[f.id]}
          onChange={(v) => onChange(f.id, v)}
          error={errors[f.id]}
        />
      ))}

      <div className="flex flex-wrap gap-2 pt-2">
        <Button type="submit" loading={isStreaming} fullWidth>
          {isStreaming ? "Memproses..." : submitLabel}
        </Button>
        {isStreaming && onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} fullWidth>
            Batalkan
          </Button>
        )}
      </div>
    </form>
  );
}
