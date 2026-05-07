"use client";

import { useCallback } from "react";
import WgCodeMirrorEditor from "./WgCodeMirrorEditor";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { EditorTheme, WgSettings } from "./wg-types";
import { FaCopy } from "react-icons/fa";

interface Props {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  settings: WgSettings;
  setSettings: React.Dispatch<React.SetStateAction<WgSettings>>;
}

export default function WgCodeTab({
  code,
  setCode,
  settings,
  setSettings,
}: Props) {
  const copyCode = useCallback(() => {
    copy(code);
    toast.success("Berhasil disalin ke clipboard");
  }, [code]);

  const doOpenInCodepenio = useCallback(async () => {
    const data = {
      html: code,
      editors: "100",
      layout: "left",
      css_external:
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" +
        (code.includes("<ion-")
          ? ",https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"
          : ""),
      js_external:
        "https://cdn.tailwindcss.com " +
        (code.includes("<ion-")
          ? ",https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js,https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"
          : ""),
    };

    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "data");
    input.setAttribute("value", JSON.stringify(data));

    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "https://codepen.io/pen/define");
    form.setAttribute("target", "_blank");
    form.appendChild(input);

    document.body.appendChild(form);
    form.submit();
  }, [code]);

  const handleThemeChange = (theme: EditorTheme) => {
    setSettings((s) => ({ ...s, editorTheme: theme }));
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col">
      <div className="flex justify-between items-center py-1 mb-2 lg:mx-4">
        <div className="flex">
          <span
            title="Salin kode"
            className="bg-black text-white text-nowrap flex items-center justify-center hover:text-black hover:bg-gray-100 cursor-pointer rounded-lg text-sm p-2.5 py-1.5"
            onClick={copyCode}
            style={{ fontSize: "12px" }}
          >
            Salin kode <FaCopy className="ml-2" />
          </span>
          <button
            onClick={doOpenInCodepenio}
            className="bg-gray-100 text-black ml-2 mr-2 py-2 px-4 border border-black rounded-md hover:bg-gray-400 focus:outline-none text-sm"
          >
            Buka{" "}
            <img
              src="https://assets.codepen.io/t-1/codepen-logo.svg"
              alt="codepen.io"
              className="h-4 ml-1 inline"
            />
          </button>
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-2">
            Tema warna kode, perlu refresh agar berubah
          </span>
          <select
            value={settings.editorTheme}
            onChange={(e) => handleThemeChange(e.target.value as EditorTheme)}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            {Object.values(EditorTheme).map((theme) => (
              <option key={theme} value={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <WgCodeMirrorEditor
        code={code}
        editorTheme={settings.editorTheme}
        onCodeChange={setCode}
      />
    </div>
  );
}
