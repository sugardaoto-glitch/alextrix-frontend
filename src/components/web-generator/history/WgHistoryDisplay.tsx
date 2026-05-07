"use client";

import { History } from "./history-types";
import { renderHistory } from "./history-utils";
import toast from "react-hot-toast";
import classNames from "classnames";

interface Props {
  history: History;
  currentVersion: number | null;
  revertToVersion: (version: number) => void;
  shouldDisableReverts: boolean;
  regenerate: () => void;
}

export default function WgHistoryDisplay({
  history,
  currentVersion,
  revertToVersion,
  shouldDisableReverts,
  regenerate,
}: Props) {
  localStorage.setItem("history", JSON.stringify(history));
  const renderedHistory = renderHistory(history, currentVersion);

  return renderedHistory.length === 0 ? null : (
    <div className="flex flex-col mb-3">
      <div className="flex justify-between items-center mb-2">
        <h1 className="font-bold">Versi</h1>
        <button
          onClick={regenerate}
          className="px-3 py-1 bg-violet-500 text-white rounded text-sm hover:bg-violet-600"
        >
          Regenerasi
        </button>
      </div>
      <ul className="space-y-0 flex flex-col-reverse">
        {renderedHistory.map((item, index) => (
          <li key={index}>
            <div
              className={classNames(
                "flex items-center justify-between space-x-2 w-full pr-2 border",
                "border-b cursor-pointer rounded-md",
                {
                  " hover:bg-gray-100": !item.isActive,
                  "bg-gray-300 text-violet-500": item.isActive,
                }
              )}
              onClick={() =>
                shouldDisableReverts
                  ? toast.error(
                      "Harap tunggu pembuatan kode selesai sebelum melihat versi lama"
                    )
                  : revertToVersion(index)
              }
            >
              <div className="flex justify-between truncate flex-1 p-2">
                <div className="flex gap-x-1 truncate">
                  <h2 className="text-sm truncate">{item.summary}</h2>
                  {item.parentVersion !== null && (
                    <h2 className="text-sm">
                      (Versi induk: {item.parentVersion})
                    </h2>
                  )}
                </div>
                <h2 className="text-sm">v{index + 1}</h2>
              </div>
              <span className="text-xs bg-gray-200 px-1 rounded">
                {item.type}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
