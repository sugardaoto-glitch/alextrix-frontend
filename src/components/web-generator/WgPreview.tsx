"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useThrottle } from "./use-throttle";
import { wgCn } from "./wg-utils";
import EditPopup from "./select-and-edit/EditPopup";

interface Props {
  code: string;
  device: "mobile" | "desktop";
  inSelectAndEditMode: boolean;
  generateMode: "prompt" | "image";
  doUpdate: (updateInstruction: string, selectedElement?: HTMLElement) => void;
  setUpdateInstruction: (text: string) => void;
  setInSelectAndEditMode: (flag: boolean) => void;
  generateCodeHandle: (type: "upd" | "create", prompt: string) => void;
}

export default function WgPreview({
  code,
  device,
  doUpdate,
  inSelectAndEditMode,
  setInSelectAndEditMode,
  setUpdateInstruction,
  generateCodeHandle,
  generateMode,
}: Props) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [clickEvent, setClickEvent] = useState<MouseEvent | null>(null);
  const throttledCode = useThrottle(code, 200);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.srcdoc = throttledCode;
      iframe.addEventListener("load", function () {
        iframe.contentWindow?.document.body.addEventListener(
          "click",
          setClickEvent
        );
      });
    }
  }, [throttledCode]);

  return (
    <div
      className={wgCn(
        "absolute top-0 bottom-2 flex flex-col wg-code-css",
        device === "desktop" ? "right-4 left-4" : "left-1/4 right-1/4"
      )}
    >
      <iframe
        id={`preview-${device}`}
        ref={iframeRef}
        title="Pratinjau"
        className={classNames(
          "border-[4px] border-black shadow-lg flex-grow",
          "transform origin-top",
          "w-full"
        )}
      ></iframe>
      <EditPopup
        inSelectAndEditMode={inSelectAndEditMode}
        setUpdateInstruction={setUpdateInstruction}
        event={clickEvent}
        iframeRef={iframeRef}
        doUpdate={doUpdate}
        generateCodeHandle={generateCodeHandle}
        generateMode={generateMode}
        setInSelectAndEditMode={setInSelectAndEditMode}
      />
      <div
        className="wg-d-hidden flex flex-col justify-center items-center"
        style={{
          color: "rgb(102, 102, 102)",
          fontSize: "12px",
          marginBottom: "7.5px",
        }}
      >
        <div>Konten dihasilkan oleh AI, hanya untuk referensi</div>
        <div className="flex justify-center items-center gap-1">
          Diberdayakan oleh{" "}
          <span className="font-semibold text-violet-600">Alextrix</span>
        </div>
      </div>
    </div>
  );
}
