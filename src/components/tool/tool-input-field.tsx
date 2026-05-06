"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatIDR, parseIDR } from "@/lib/utils/format-currency";
import type { ToolInputDef } from "@/lib/types/tool";

interface Props {
  field: ToolInputDef;
  value: any;
  onChange: (v: any) => void;
  error?: string;
}

export function ToolInputField({ field, value, onChange, error }: Props) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={field.id}>
        {field.label}
        {field.required && <span className="ml-1 text-rose-500">*</span>}
      </Label>

      {field.type === "text" && (
        <Input
          id={field.id}
          placeholder={field.placeholder}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          maxLength={field.validation?.maxLength}
          invalid={!!error}
        />
      )}

      {(field.type === "textarea" || field.type === "rich-textarea") && (
        <Textarea
          id={field.id}
          placeholder={field.placeholder}
          rows={field.type === "rich-textarea" ? 6 : 4}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          maxLength={field.validation?.maxLength}
          invalid={!!error}
        />
      )}

      {field.type === "url" && (
        <Input
          id={field.id}
          type="url"
          placeholder={field.placeholder ?? "https://..."}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          invalid={!!error}
        />
      )}

      {field.type === "number" && (
        <Input
          id={field.id}
          type="number"
          placeholder={field.placeholder}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          min={field.validation?.min}
          max={field.validation?.max}
          step={field.step ?? 1}
          invalid={!!error}
        />
      )}

      {field.type === "currency-idr" && (
        <Input
          id={field.id}
          inputMode="numeric"
          placeholder={field.placeholder ?? "Rp 0"}
          value={value ? formatIDR(parseIDR(String(value))) : ""}
          onChange={(e) => onChange(parseIDR(e.target.value))}
          invalid={!!error}
        />
      )}

      {field.type === "select" && (
        <Select value={value ?? ""} onValueChange={onChange}>
          <SelectTrigger id={field.id} className={error ? "border-rose-500" : ""}>
            <SelectValue placeholder={field.placeholder ?? "Pilih..."} />
          </SelectTrigger>
          <SelectContent>
            {field.options?.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {field.type === "radio-group" && (
        <RadioGroup value={value ?? ""} onValueChange={onChange} className="space-y-1">
          {field.options?.map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50"
            >
              <RadioGroupItem value={opt.value} />
              <span className="text-sm">{opt.label}</span>
            </label>
          ))}
        </RadioGroup>
      )}

      {field.type === "checkbox-group" && (
        <div className="space-y-1">
          {field.options?.map((opt) => {
            const arr: string[] = Array.isArray(value) ? value : [];
            const checked = arr.includes(opt.value);
            return (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 hover:bg-slate-50"
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={(c) => {
                    if (c) onChange([...arr, opt.value]);
                    else onChange(arr.filter((v) => v !== opt.value));
                  }}
                />
                <span className="text-sm">{opt.label}</span>
              </label>
            );
          })}
        </div>
      )}

      {field.type === "tag-input" && (
        <div>
          <Input
            id={field.id}
            placeholder={field.placeholder ?? "Tambah tag, pisahkan dengan koma"}
            value={Array.isArray(value) ? value.join(", ") : value ?? ""}
            onChange={(e) =>
              onChange(
                e.target.value
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean),
              )
            }
            invalid={!!error}
          />
        </div>
      )}

      {field.type === "image-upload" && (
        <div className="rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-center text-xs text-slate-500">
          📷 Upload gambar (mock — fitur ini akan aktif setelah backend siap)
        </div>
      )}

      {field.helpText && (
        <p className="text-xs text-slate-500">{field.helpText}</p>
      )}
      {error && <p className="text-xs text-rose-600">{error}</p>}
    </div>
  );
}
