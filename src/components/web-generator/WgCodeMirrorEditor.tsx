"use client";

import { useRef, useEffect, useMemo } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers, ViewUpdate } from "@codemirror/view";
import { espresso, cobalt } from "thememirror";
import {
  defaultKeymap,
  history,
  indentWithTab,
  redo,
  undo,
} from "@codemirror/commands";
import { bracketMatching } from "@codemirror/language";
import { html } from "@codemirror/lang-html";
import { EditorTheme } from "./wg-types";
import { wgCn } from "./wg-utils";

interface Props {
  code: string;
  editorTheme: EditorTheme;
  onCodeChange: (code: string) => void;
  mHidden?: boolean;
}

export default function WgCodeMirrorEditor({
  code,
  editorTheme,
  onCodeChange,
  mHidden,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const view = useRef<EditorView | null>(null);
  const editorState = useMemo(
    () =>
      EditorState.create({
        extensions: [
          history(),
          keymap.of([
            ...defaultKeymap,
            indentWithTab,
            { key: "Mod-z", run: undo, preventDefault: true },
            { key: "Mod-Shift-z", run: redo, preventDefault: true },
          ]),
          lineNumbers(),
          bracketMatching(),
          html(),
          editorTheme === EditorTheme.ESPRESSO ? espresso : cobalt,
          EditorView.lineWrapping,
          EditorView.updateListener.of((update: ViewUpdate) => {
            if (update.docChanged) {
              const updatedCode = update.state.doc.toString();
              onCodeChange(updatedCode);
            }
          }),
        ],
      }),
    [editorTheme, onCodeChange]
  );

  useEffect(() => {
    view.current = new EditorView({
      state: editorState,
      parent: ref.current as Element,
    });

    return () => {
      if (view.current) {
        view.current.destroy();
        view.current = null;
      }
    };
  }, [editorState]);

  useEffect(() => {
    if (view.current && view.current.state.doc.toString() !== code) {
      view.current.dispatch({
        changes: {
          from: 0,
          to: view.current.state.doc.length,
          insert: code,
        },
      });
    }
  }, [code]);

  return (
    <div
      className={wgCn(
        "overflow-x-scroll overflow-y-scroll lg:mx-4 border-[4px] border-black wg-app-code-css",
        mHidden ? "wg-m-hidden" : ""
      )}
      ref={ref}
    />
  );
}
