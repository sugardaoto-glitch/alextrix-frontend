"use client";

import { Stack, STACK_DESCRIPTIONS } from "./stacks";

interface Props {
  stack: Stack | undefined;
  setStack: (config: Stack) => void;
  label?: string;
  shouldDisableUpdates?: boolean;
}

export default function WgOutputSettings({
  stack,
  setStack,
  label = "Hasilkan:",
  shouldDisableUpdates = false,
}: Props) {
  return (
    <div className="flex flex-col md:mt-4 gap-y-2 justify-between text-sm flex-grow">
      <div className="flex items-center">
        <span style={{ width: "130px" }}>{label}</span>
        <select
          value={stack || ""}
          onChange={(e) => setStack(e.target.value as Stack)}
          disabled={shouldDisableUpdates}
          className="flex-1 border border-gray-300 rounded px-2 py-1.5 text-sm"
        >
          {!stack && <option value="">Pilih</option>}
          {Object.values(Stack).map((s) => (
            <option key={s} value={s}>
              {STACK_DESCRIPTIONS[s].components.join(" + ")}
              {STACK_DESCRIPTIONS[s].inBeta ? " (Beta)" : ""}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
