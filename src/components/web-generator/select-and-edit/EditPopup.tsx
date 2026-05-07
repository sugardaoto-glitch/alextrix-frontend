"use client";

import React, { useEffect, useRef, useState } from "react";
import { addHighlight, getAdjustedCoordinates, removeHighlight } from "./utils";

interface EditPopupProps {
  inSelectAndEditMode: boolean;
  event: MouseEvent | null;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  generateMode: "prompt" | "image";
  doUpdate: (updateInstruction: string, selectedElement?: HTMLElement) => void;
  setUpdateInstruction: (text: string) => void;
  setInSelectAndEditMode: (flag: boolean) => void;
  generateCodeHandle: (type: "upd" | "create", prompt: string) => void;
}

const EditPopup: React.FC<EditPopupProps> = ({
  event,
  iframeRef,
  doUpdate,
  inSelectAndEditMode,
  generateCodeHandle,
  generateMode,
  setInSelectAndEditMode,
}) => {
  const inSelectAndEditModeRef = useRef(inSelectAndEditMode);

  useEffect(() => {
    inSelectAndEditModeRef.current = inSelectAndEditMode;
  }, [inSelectAndEditMode]);

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const [selectedElement, setSelectedElement] = useState<
    HTMLElement | undefined
  >(undefined);
  const [updateText, setUpdateText] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  function onUpdate(text: string) {
    if (generateMode === "image") {
      doUpdate(
        text,
        selectedElement ? removeHighlight(selectedElement) : selectedElement
      );
    } else {
      const prompt =
        text +
        " referring to this element specifically: " +
        selectedElement?.outerHTML;
      generateCodeHandle("upd", prompt);
    }

    setSelectedElement(undefined);
    setPopupVisible(false);
  }

  useEffect(() => {
    if (!inSelectAndEditMode) {
      if (selectedElement) removeHighlight(selectedElement);
      setSelectedElement(undefined);
      setPopupVisible(false);
    }
  }, [inSelectAndEditMode, selectedElement]);

  useEffect(() => {
    if (!inSelectAndEditModeRef.current || !event) return;

    event.preventDefault();
    const targetElement = event.target as HTMLElement;
    if (!targetElement) return;

    setSelectedElement((prev) => {
      if (prev) removeHighlight(prev);
      return addHighlight(targetElement);
    });

    const adjustedCoordinates = getAdjustedCoordinates(
      event.clientX,
      event.clientY
    );

    setPopupVisible(true);
    setPopupPosition({ x: adjustedCoordinates.x, y: adjustedCoordinates.y });
    setUpdateText("");
    textareaRef.current?.focus();
  }, [event, iframeRef]);

  useEffect(() => {
    if (popupVisible) textareaRef.current?.focus();

    const textarea = document.getElementById("editTextarea") as HTMLElement;
    textarea?.addEventListener("input", autoResize, false);
    function autoResize() {
      textarea.style.height = 36 + "px";
      textarea.style.height = textarea?.scrollHeight + "px";
    }
  }, [popupVisible]);

  if (!popupVisible) return null;

  return (
    <div
      className="absolute bg-white p-4 border border-gray-300 rounded shadow-lg w-80"
      style={{ top: popupPosition.y, left: popupPosition.x }}
    >
      <div className="flex w-full box-border">
        <textarea
          id="editTextarea"
          ref={textareaRef}
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
          placeholder="Masukkan instruksi perubahan"
          className="flex-1 shadow-none h-9 min-h-9 resize-none overflow-hidden border border-gray-300 rounded px-2 py-1 text-sm"
          onKeyDown={(e) => {
            if (!e.shiftKey && e.key === "Enter") {
              e.preventDefault();
              setInSelectAndEditMode(false);
              onUpdate(updateText);
            }
          }}
        />
        <button
          className="ml-2 h-9 px-3 bg-violet-500 text-white rounded text-sm hover:bg-violet-600"
          onClick={() => {
            setInSelectAndEditMode(false);
            onUpdate(updateText);
          }}
        >
          Perbarui
        </button>
      </div>
    </div>
  );
};

export default EditPopup;
