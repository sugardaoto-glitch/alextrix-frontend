"use client";

import toast, { Toaster } from "react-hot-toast";
import classNames from "classnames";
import { Stack } from "./stacks";
import copy from "copy-to-clipboard";
import html2canvas from "html2canvas";
import WgPreview from "./WgPreview";
import WgSpinner from "./WgSpinner";
import WgCodeTab from "./WgCodeTab";
import { generateCode } from "./generate-code";
import WgCodePreview from "./WgCodePreview";
import WgImageUpload from "./WgImageUpload";
import WgOutputSettings from "./WgOutputSettings";
import WgImportHTMLDialog from "./WgImportHTMLDialog";
import WgHistoryDisplay from "./history/WgHistoryDisplay";
import { WgErrorToast } from "./WgErrorToast";
import { History } from "./history/history-types";
import { extractHistoryTree } from "./history/history-utils";
import { extractCodeBlocksContent, extractHtml, wgCn } from "./wg-utils";
import { usePersistedState } from "./use-persisted-state";
import {
  WgAppState,
  WgCodeGenerationParams,
  WgSettings,
  EditorTheme,
} from "./wg-types";
import { CodeGenerationModel } from "./models";
import { USER_CLOSE_WEB_SOCKET_CODE, API_URL, DEFAULT_MODEL } from "./constants";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaCode,
  FaDesktop,
  FaDownload,
  FaMobile,
  FaUndo,
} from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

interface WebGeneratorAppProps {
  apiKey: string;
}

export default function WebGeneratorApp({ apiKey }: WebGeneratorAppProps) {
  const modelName = DEFAULT_MODEL;

  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState<string>("");
  const [updateInstruction, setUpdateInstruction] = useState("");
  const [generatedCode, setGeneratedCode] = useState<string>("");

  const [inputMode, setInputMode] = useState<"image" | "video">("image");
  const [generateMode, setGenerateMode] = useState<"prompt" | "image">(
    "image"
  );

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [inSelectAndEditMode, setInSelectAndEditMode] = useState(false);
  const [isImportedFromCode, setIsImportedFromCode] = useState<boolean>(false);
  const [isHasSelectAndEditModel, setIsHasSelectAndEditModel] = useState(true);

  const [referenceImages, setReferenceImages] = useState<string[]>([]);
  const [appState, setAppState] = useState<WgAppState>(WgAppState.INITIAL);
  const [executionConsole, setExecutionConsole] = useState<string[]>([]);

  const shareUrl = useMemo(() => name, [name]);

  const [activeTab, setActiveTab] = useState<"desktop" | "mobile" | "code">(
    "desktop"
  );

  const [settings, setSettings] = usePersistedState<WgSettings>(
    {
      openAiApiKey: apiKey,
      openAiBaseURL: null,
      screenshotOneApiKey: null,
      isImageGenerationEnabled: true,
      editorTheme: EditorTheme.COBALT,
      generatedCodeConfig: Stack.HTML_TAILWIND,
      codeGenerationModel: CodeGenerationModel.GPT_4_TURBO_2024_04_09,
      isTermOfServiceAccepted: false,
    },
    "wg-setting"
  );

  const [appHistory, setAppHistory] = useState<History>([]);
  const [currentVersion, setCurrentVersion] = useState<number | null>(null);
  const [shouldIncludeResultImage, setShouldIncludeResultImage] =
    useState<boolean>(false);

  const wsRef = useRef<WebSocket>(null);

  // Sync API key from BYOK store
  useEffect(() => {
    if (apiKey && apiKey !== settings.openAiApiKey) {
      setSettings((prev) => ({ ...prev, openAiApiKey: apiKey }));
    }
  }, [apiKey, settings.openAiApiKey, setSettings]);

  useEffect(() => {
    if (!settings.generatedCodeConfig) {
      setSettings((prev) => ({
        ...prev,
        generatedCodeConfig: Stack.HTML_TAILWIND,
      }));
    }
  }, [settings.generatedCodeConfig, setSettings]);

  const takeScreenshot = async (): Promise<string> => {
    const iframeElement = document.querySelector(
      "#preview-desktop"
    ) as HTMLIFrameElement;
    if (!iframeElement?.contentWindow?.document.body) return "";
    const canvas = await html2canvas(iframeElement.contentWindow.document.body);
    return canvas.toDataURL("image/png");
  };

  const downloadCode = () => {
    const blob = new Blob([generatedCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setIsDisabled(false);
    setAppState(WgAppState.INITIAL);
    setGeneratedCode("");
    setReferenceImages([]);
    setExecutionConsole([]);
    setUpdateInstruction("");
    setIsImportedFromCode(false);
    setAppHistory([]);
    setCurrentVersion(null);
    setShouldIncludeResultImage(false);
    setInSelectAndEditMode(false);
    localStorage.removeItem("history");
    localStorage.removeItem("code");
    localStorage.removeItem("currentVersion");
    localStorage.removeItem("generateMode");
  };

  const regenerate = () => {
    if (currentVersion === null) {
      toast.error("Tidak ada versi yang ditetapkan");
      reset();
      return;
    }
    const previousCommand = appHistory[currentVersion];
    if (previousCommand.type !== "ai_create") {
      toast.error("Hanya dapat meregenerasi versi pertama");
      reset();
      return;
    }
    if (generateMode === "prompt") {
      generateCodeHandle("create", prompt);
    } else {
      doCreate(referenceImages, inputMode);
    }
  };

  const cancelCodeGeneration = () => {
    wsRef.current?.close?.(USER_CLOSE_WEB_SOCKET_CODE);
    cancelCodeGenerationAndReset();
  };

  const previewCode =
    inputMode === "video" && appState === WgAppState.CODING
      ? extractHtml(generatedCode)
      : generatedCode;

  const cancelCodeGenerationAndReset = () => {
    if (currentVersion === null) {
      reset();
    } else {
      setGeneratedCode(appHistory[currentVersion].code);
      setAppState(WgAppState.CODE_READY);
    }
  };

  function doGenerateCode(
    params: WgCodeGenerationParams,
    parentVersion: number | null
  ) {
    setExecutionConsole([]);
    setAppState(WgAppState.CODING);

    const updatedParams = { ...params, ...settings };

    generateCode(
      wsRef,
      updatedParams,
      (token) => setGeneratedCode((prev) => prev + token),
      (code) => {
        setGeneratedCode(code);
        localStorage.setItem("code", code);
        const oldHistory = localStorage.getItem("history");
        if (params.generationType === "create") {
          let data;
          if (!oldHistory) {
            data = [
              {
                type: "ai_create" as const,
                parentIndex: null,
                code,
                inputs: { image_url: referenceImages[0] },
              },
            ];
          } else {
            data = [
              ...JSON.parse(oldHistory),
              {
                type: "ai_create" as const,
                parentIndex: null,
                code,
                inputs: { image_url: referenceImages[0] },
              },
            ];
          }
          setCurrentVersion(0);
          localStorage.setItem("currentVersion", "0");
          setAppHistory(data);
        } else {
          setAppHistory((prev) => {
            if (parentVersion === null) {
              toast.error("Tidak ada versi induk yang ditetapkan");
              reset();
              return prev;
            }

            const newHistory: History = [
              ...prev,
              {
                type: "ai_edit",
                parentIndex: parentVersion,
                code,
                inputs: {
                  prompt: params.history
                    ? params.history[params.history.length - 1]
                    : "",
                },
              },
            ];
            setCurrentVersion(newHistory.length - 1);
            localStorage.setItem(
              "currentVersion",
              (newHistory.length - 1).toString()
            );
            return newHistory;
          });
        }
      },
      (line) => setExecutionConsole((prev) => [...prev, line]),
      () => cancelCodeGenerationAndReset(),
      () => setAppState(WgAppState.CODE_READY),
      (code) => toast.error(<WgErrorToast code={code} />)
    );
  }

  function doCreate(refImages: string[], mode: "image" | "video") {
    reset();
    setReferenceImages(refImages);
    setGenerateMode("image");
    localStorage.setItem("generateMode", "image");
    setInputMode(mode);
    if (refImages.length > 0) {
      doGenerateCode(
        {
          generationType: "create",
          image: refImages[0],
          inputMode: mode,
        },
        currentVersion
      );
    }
  }

  async function doUpdate(
    instruction: string,
    selectedElement?: HTMLElement
  ) {
    if (instruction.trim() === "") {
      toast.error("Silakan berikan instruksi untuk AI memperbarui konten.");
      return;
    }
    if (currentVersion === null) {
      toast.error("Tidak ada versi yang ditetapkan");
      reset();
      return;
    }

    let historyTree;
    try {
      historyTree = extractHistoryTree(appHistory, currentVersion);
    } catch {
      toast.error("Riwayat versi tidak valid");
      reset();
      return;
    }

    let modifiedInstruction = instruction;
    if (selectedElement) {
      modifiedInstruction =
        instruction +
        " referring to this element specifically: " +
        selectedElement.outerHTML;
    }

    const updatedHistory = [...historyTree, modifiedInstruction];

    if (shouldIncludeResultImage) {
      const resultImage = await takeScreenshot();
      doGenerateCode(
        {
          generationType: "update",
          inputMode,
          image: referenceImages[0],
          resultImage,
          history: updatedHistory,
          isImportedFromCode,
        },
        currentVersion
      );
    } else {
      doGenerateCode(
        {
          generationType: "update",
          inputMode,
          image: referenceImages[0],
          history: updatedHistory,
          isImportedFromCode,
        },
        currentVersion
      );
    }

    setGeneratedCode("");
    setUpdateInstruction("");
  }

  function setStack(stack: Stack) {
    setSettings((prev) => ({
      ...prev,
      generatedCodeConfig: stack,
    }));
  }

  function importFromCode(code: string, stack: Stack) {
    reset();
    setIsImportedFromCode(true);
    setIsHasSelectAndEditModel(true);
    setGeneratedCode(code);
    setStack(stack);
    localStorage.setItem("code", code);
    const history = localStorage.getItem("history");
    if (history) {
      setAppHistory([
        ...JSON.parse(history),
        {
          type: "code_create" as const,
          parentIndex: null,
          code,
          inputs: { code },
        },
      ]);
    } else {
      setAppHistory([
        {
          type: "code_create" as const,
          parentIndex: null,
          code,
          inputs: { code },
        },
      ]);
    }
    setCurrentVersion(0);
    localStorage.setItem("currentVersion", "0");
    localStorage.setItem("generateMode", "image");
    setGenerateMode("image");
    setAppState(WgAppState.CODE_READY);
  }

  // Restore state from localStorage
  useEffect(() => {
    const history = localStorage.getItem("history");
    const code = localStorage.getItem("code");
    const version = localStorage.getItem("currentVersion");
    const Mode = localStorage.getItem("generateMode") as
      | "image"
      | "prompt";
    if (history && code && version && Mode) {
      setAppHistory(JSON.parse(history));
      setAppState(WgAppState.CODE_READY);
      setGeneratedCode(code);
      setCurrentVersion(+version);
      setIsImportedFromCode(true);
      setGenerateMode(Mode);
    }
  }, []);

  useEffect(() => {
    const textarea = document.getElementById("autoresizing") as HTMLElement;
    textarea?.addEventListener("input", autoResize, false);
    function autoResize() {
      textarea.style.height = 36 + "px";
      textarea.style.height = textarea?.scrollHeight + "px";
    }
    return () => {
      textarea?.removeEventListener("input", autoResize);
    };
  }, [appState]);

  function handleCode(chunk: string) {
    let answer = "";
    if (!chunk) return answer;
    const chunkList = chunk
      .split("\n")
      .filter((c) => c)
      .map((c) => c.replace("data:", ""));

    chunkList.forEach((c) => {
      if (!c) return;
      try {
        const chunkJSON = JSON.parse(c);
        chunkJSON?.choices.forEach(
          (choice: { delta: { content: string } }) => {
            const content = choice?.delta?.content;
            if (content) {
              answer += content;
              setGeneratedCode(answer);
            }
          }
        );
      } catch {
        // ignore parse errors
      }
    });
    return answer;
  }

  async function generateCodeHandle(
    type: "upd" | "create",
    promptText: string
  ) {
    if (type === "create") reset();
    if (!promptText.trim()) {
      toast.error("Silakan berikan instruksi untuk AI.");
      return;
    }
    setIsDisabled(true);
    setGenerateMode("prompt");
    localStorage.setItem("generateMode", "prompt");
    const query =
      type === "create"
        ? promptText
        : "Given the following HTML:\n\n " +
          generatedCode +
          " \n\n " +
          promptText;
    let stack_type: string[] = settings.generatedCodeConfig.split("_");
    stack_type = stack_type.map(
      (item) => item.charAt(0).toUpperCase() + item.slice(1)
    );

    const body = JSON.stringify({
      api_key: apiKey,
      models_name: modelName || "gpt4o",
      type: stack_type.join(" + "),
      query,
    });

    fetch(`${API_URL}/api/generate_code_with_word`, {
      method: "post",
      body,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((response) => {
        setAppState(WgAppState.CODING);
        if (!(response.ok && response.body)) return;
        const reader = response.body.getReader();
        let chunk = "";
        return reader
          .read()
          .then(function processData({
            done,
            value,
          }: ReadableStreamReadResult<Uint8Array>): Promise<string> | string {
            while (!done && value) {
              chunk += new TextDecoder("utf-8").decode(value);
              if (chunk.indexOf("Error") > -1) {
                if (chunk.indexOf("err_code") === -1) {
                  toast.error("Terjadi kesalahan yang tidak diketahui");
                  return chunk;
                }
                const chunkArr = chunk
                  .replace("Error:", "")
                  .replace("{", "")
                  .replace("}", "")
                  .trimStart()
                  .trimEnd()
                  .split(",");

                for (let index = 0; index < chunkArr.length; index++) {
                  const c = chunkArr[index];
                  if (c.indexOf("err_code") > -1) {
                    const code = +c.split(":")[2];
                    if (code) {
                      toast.error(<WgErrorToast code={code} />);
                      setAppState(WgAppState.INITIAL);
                    } else {
                      toast.error("Terjadi kesalahan yang tidak diketahui");
                      setAppState(WgAppState.INITIAL);
                    }
                    setIsDisabled(false);
                    return chunk;
                  }
                }
                setIsDisabled(false);
                return chunk;
              }
              handleCode(chunk);
              return reader.read().then(processData);
            }
            return chunk;
          });
      })
      .then((chunk) => {
        if (chunk && typeof chunk === "string") {
          const answer = handleCode(chunk);
          return answer;
        }
      })
      .then(async (answer) => {
        if (!answer) return;
        let result = extractCodeBlocksContent(answer)[0];
        result = result ? result : answer;
        let data: History;
        let version = 0;
        if (settings.isImageGenerationEnabled) {
          const res = await fetch(`${API_URL}/api/generate_images`, {
            method: "post",
            body: JSON.stringify({
              api_key: apiKey,
              models_name: modelName || "gpt-4o-mini-2024-07-18",
              query: result,
            }),
            headers: {
              accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
          });
          const json = await res.json();

          if (json.data.error) {
            setIsDisabled(false);
            setAppState(WgAppState.INITIAL);
            toast.error(<WgErrorToast code={json.data.error.err_code} />);
            return;
          }
          result = json.data.content;
        }

        if (type === "create") {
          data = [
            {
              type: "ai_create",
              parentIndex: null,
              code: result,
              inputs: { prompt: promptText },
            },
          ];
          version = 0;
        } else {
          if (currentVersion === null) {
            toast.error("Tidak ada versi induk yang ditetapkan");
            reset();
            return;
          }
          data = [
            ...appHistory,
            {
              type: "ai_edit",
              parentIndex: currentVersion,
              code: result,
              inputs: { prompt: promptText },
            },
          ];
          version = data.length - 1;
        }
        setIsDisabled(false);
        setGeneratedCode(result);
        setAppState(WgAppState.CODE_READY);
        setCurrentVersion(version);
        localStorage.setItem("currentVersion", version.toString());
        localStorage.setItem("code", result);
        setAppHistory(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function upload(code: string) {
    const blob = new Blob([code], { type: "text/html;charset=UTF-8" });
    const formdata = new FormData();
    formdata.append(
      "file",
      blob,
      Math.random().toString(16).slice(1) + ".html"
    );
    return fetch("https://dash-api.302.ai/gpt/api/upload/gpt/image", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data.url) return { url: res.data.url };
        throw Error();
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function shareHandle() {
    if (loading) return;
    setLoading(true);
    upload(generatedCode)
      .then((res) => {
        if (res?.url) {
          setIsOpen(true);
          setName(res.url);
        }
      })
      .finally(() => setLoading(false));
  }

  function onCopyHandle() {
    copy(shareUrl);
    setIsOpen(false);
    toast.success("Berhasil disalin!");
  }

  return (
    <div
      className="min-h-[100vh] flex flex-col"
      style={{ background: "#f6f6f6" }}
    >
      <Toaster position="top-center" />
      <div
        id="main-container"
        className="mt-2 flex-1 w-full mx-auto wg-app-css"
      >
        {/* Sidebar */}
        <div className="lg:inset-y-0 lg:z-40 md:flex lg:w-96 md:flex-col wg-sider-css bg-white border-r border-gray-200 overflow-hidden">
          <div
            id="app-title"
            className="flex justify-center items-center lg:mt-8 lg:mb-0 mb-4 mt-4 gap-2 lg:px-5 px-3"
          >
            <div className="w-10 h-10 rounded-lg bg-violet-500 flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div className="wg-app-title">
              Alextrix Pembuat Halaman Web AI
            </div>
          </div>
          <div className="flex grow flex-col gap-y-2 overflow-y-auto lg:px-5 px-3 wg-sider-css my-4">
            <div className="flex items-center justify-between gap-2">
              <WgOutputSettings
                stack={settings.generatedCodeConfig}
                setStack={(config) => setStack(config)}
                label="Hasilkan:"
                shouldDisableUpdates={
                  appState === WgAppState.CODING ||
                  appState === WgAppState.CODE_READY
                }
              />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center text-sm text-slate-700">
                <span>Hasilkan gambar placeholder</span>
                <span
                  className="cursor-pointer text-gray-400"
                  title="Lebih menyenangkan, tetapi matikan jika ingin hemat biaya"
                >
                  ?
                </span>
                :
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.isImageGenerationEnabled}
                  onChange={() =>
                    setSettings((s) => ({
                      ...s,
                      isImageGenerationEnabled: !s.isImageGenerationEnabled,
                    }))
                  }
                  disabled={
                    appState === WgAppState.CODING ||
                    appState === WgAppState.CODE_READY
                  }
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-500"></div>
              </label>
            </div>

            {(appState === WgAppState.CODING ||
              appState === WgAppState.CODE_READY) && (
              <>
                {appState === WgAppState.CODING && (
                  <div className="flex flex-col">
                    {inputMode === "video" && (
                      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 text-xs mb-4 mt-1">
                        Pembuatan kode dari video mungkin memakan waktu 3-4
                        menit. Kami melakukan beberapa kali proses untuk
                        mendapatkan hasil terbaik. Harap bersabar.
                      </div>
                    )}
                    <div className="flex items-center gap-x-1">
                      <WgSpinner />
                      {executionConsole.slice(-1)[0]}
                    </div>
                    <WgCodePreview code={generatedCode} />
                    <div className="flex w-full">
                      <button
                        onClick={cancelCodeGeneration}
                        className="w-full py-1.5 text-sm bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        Batalkan
                      </button>
                    </div>
                  </div>
                )}

                {appState === WgAppState.CODE_READY && (
                  <div>
                    <div className="flex justify-between items-center gap-x-2">
                      <div className="font-500 text-sm text-slate-700">
                        Sertakan tangkapan layar versi saat ini?
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={shouldIncludeResultImage}
                          onChange={() =>
                            setShouldIncludeResultImage(!shouldIncludeResultImage)
                          }
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-500"></div>
                      </label>
                    </div>
                    <div className="flex mt-2 w-full rounded-md box-border">
                      <textarea
                        id="autoresizing"
                        className="flex-1 shadow-none overflow-hidden h-9 min-h-9 resize-none border border-gray-300 rounded px-2 py-1 text-sm"
                        placeholder="Beritahu AI apa yang harus diubah"
                        onChange={(e) =>
                          setUpdateInstruction(e.target.value)
                        }
                        value={updateInstruction}
                        onKeyDown={(e) => {
                          if (!e.shiftKey && e.key === "Enter") {
                            e.preventDefault();
                            if (generateMode === "prompt") {
                              generateCodeHandle("upd", updateInstruction);
                            } else {
                              doUpdate(updateInstruction);
                            }
                          }
                        }}
                      />
                      <button
                        onClick={() => {
                          if (generateMode === "prompt") {
                            generateCodeHandle("upd", updateInstruction);
                          } else {
                            doUpdate(updateInstruction);
                          }
                        }}
                        className="ml-2 h-9 px-3 bg-violet-500 text-white rounded text-sm hover:bg-violet-600"
                      >
                        Perbarui
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex gap-x-2 mt-2 justify-center">
                  {referenceImages.length > 0 && (
                    <div className="flex flex-col">
                      <div
                        className={classNames({
                          "wg-scanning relative":
                            appState === WgAppState.CODING,
                        })}
                      >
                        {inputMode === "image" && (
                          <img
                            className="w-[340px] border border-gray-200 rounded-md"
                            src={referenceImages[0]}
                            alt="Referensi"
                          />
                        )}
                        {inputMode === "video" && (
                          <video
                            muted
                            autoPlay
                            loop
                            className="w-[340px] border border-gray-200 rounded-md"
                            src={referenceImages[0]}
                          />
                        )}
                      </div>
                      <div className="text-gray-400 uppercase text-sm text-center mt-1">
                        {inputMode === "video"
                          ? "VIDEO ASLI"
                          : "TANGKAPAN LAYAR ASLI"}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            {appHistory.length !== 0 && (
              <WgHistoryDisplay
                regenerate={regenerate}
                history={appHistory}
                currentVersion={currentVersion}
                revertToVersion={(index) => {
                  if (
                    index < 0 ||
                    index >= appHistory.length ||
                    !appHistory[index]
                  )
                    return;
                  setCurrentVersion(index);
                  setGeneratedCode(appHistory[index].code);
                }}
                shouldDisableReverts={appState === WgAppState.CODING}
              />
            )}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex relative flex-col flex-grow items-center bg-white md:rounded-tr-[16px] md:rounded-br-[16px]">
          {appState === WgAppState.INITIAL && (
            <div className="flex flex-col justify-center items-center gap-y-6 flex-grow w-full overflow-auto">
              <div className="flex mt-8 border rounded-lg overflow-hidden w-[60%]">
                <textarea
                  disabled={isDisabled}
                  value={prompt}
                  onKeyDown={(e) => {
                    if (!e.shiftKey && e.key === "Enter") {
                      e.preventDefault();
                      generateCodeHandle("create", prompt);
                    }
                  }}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Deskripsikan halaman yang ingin Anda buat"
                  className="flex-1 h-9 min-h-9 border-none rounded-none resize-none overflow-hidden px-3 py-1.5 text-sm outline-none"
                />
                <button
                  disabled={isDisabled}
                  onClick={() => generateCodeHandle("create", prompt)}
                  className="px-4 py-1.5 bg-violet-500 hover:bg-violet-600 text-white text-sm"
                >
                  Hasilkan
                </button>
              </div>
              {!isDisabled ? (
                <>
                  <span className="text-gray-500">ATAU</span>
                  <WgImageUpload setReferenceImages={doCreate} />
                  <div className="text-center mb-12">
                    <p className="mb-4 text-xs text-gray-500">
                      Sudah punya file HTML?
                    </p>
                    <WgImportHTMLDialog importFromCode={importFromCode} />
                  </div>
                </>
              ) : (
                <div className="text-lg flex h-full items-center">
                  <WgSpinner />
                  <span className="ml-8 text-gray-400">Menghasilkan...</span>
                </div>
              )}
            </div>
          )}

          {(appState === WgAppState.CODING ||
            appState === WgAppState.CODE_READY) && (
            <>
              <div className="w-full flex-grow flex flex-col">
                <div
                  className={wgCn(
                    "lg:flex mt-2 mb-2 lg:mx-4",
                    appState === WgAppState.CODE_READY ? "wg-app-button" : ""
                  )}
                >
                  <div className="flex items-center gap-x-2 w-full mr-2">
                    {appState === WgAppState.CODE_READY && (
                      <>
                        <button
                          onClick={() => {
                            if (
                              confirm(
                                "Operasi ini akan mereset semua data. Apakah Anda ingin melanjutkan?"
                              )
                            ) {
                              reset();
                            }
                          }}
                          className="flex items-center gap-x-2 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
                        >
                          <FaUndo />
                          Reset
                        </button>
                        <button
                          onClick={downloadCode}
                          className="flex items-center gap-x-2 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
                        >
                          <FaDownload />
                          Unduh
                        </button>
                        {isHasSelectAndEditModel && (
                          <button
                            onClick={() =>
                              setInSelectAndEditMode(!inSelectAndEditMode)
                            }
                            className="flex items-center gap-x-2 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
                          >
                            {inSelectAndEditMode
                              ? "Keluar mode pilih"
                              : "Pilih & ubah"}
                          </button>
                        )}
                        <button
                          onClick={shareHandle}
                          className="flex items-center gap-x-2 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100"
                        >
                          {loading ? (
                            <WgSpinner />
                          ) : (
                            <>
                              <IoIosShareAlt className="w-[1.5em] h-[1.5em]" />
                              Bagikan
                            </>
                          )}
                        </button>
                      </>
                    )}
                  </div>
                  <div className="flex items-center md:mt-2 lg:mt-0">
                    <div className="flex border rounded-lg overflow-hidden">
                      <button
                        onClick={() => {
                          setActiveTab("desktop");
                          setIsHasSelectAndEditModel(true);
                          setInSelectAndEditMode(false);
                        }}
                        className={wgCn(
                          "flex items-center gap-x-1 px-3 py-1 text-xs",
                          activeTab === "desktop"
                            ? "bg-violet-100 text-violet-700"
                            : "hover:bg-gray-100"
                        )}
                      >
                        <FaDesktop />
                        Desktop
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab("mobile");
                          setIsHasSelectAndEditModel(true);
                          setInSelectAndEditMode(false);
                        }}
                        className={wgCn(
                          "flex items-center gap-x-1 px-3 py-1 text-xs",
                          activeTab === "mobile"
                            ? "bg-violet-100 text-violet-700"
                            : "hover:bg-gray-100"
                        )}
                      >
                        <FaMobile />
                        Seluler
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab("code");
                          setIsHasSelectAndEditModel(false);
                          setInSelectAndEditMode(false);
                        }}
                        className={wgCn(
                          "flex items-center gap-x-1 px-3 py-1 text-xs",
                          activeTab === "code"
                            ? "bg-violet-100 text-violet-700"
                            : "hover:bg-gray-100"
                        )}
                      >
                        <FaCode />
                        Kode
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-grow relative lg:overflow-auto">
                  {activeTab === "desktop" && (
                    <WgPreview
                      code={previewCode}
                      device="desktop"
                      inSelectAndEditMode={inSelectAndEditMode}
                      generateMode={generateMode}
                      doUpdate={doUpdate}
                      generateCodeHandle={generateCodeHandle}
                      setUpdateInstruction={setUpdateInstruction}
                      setInSelectAndEditMode={setInSelectAndEditMode}
                    />
                  )}
                  {activeTab === "mobile" && (
                    <WgPreview
                      code={previewCode}
                      device="mobile"
                      inSelectAndEditMode={inSelectAndEditMode}
                      generateMode={generateMode}
                      doUpdate={doUpdate}
                      generateCodeHandle={generateCodeHandle}
                      setUpdateInstruction={setUpdateInstruction}
                      setInSelectAndEditMode={setInSelectAndEditMode}
                    />
                  )}
                  {activeTab === "code" && (
                    <WgCodeTab
                      code={previewCode}
                      setCode={setGeneratedCode}
                      settings={settings}
                      setSettings={setSettings}
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
      {/* Footer */}
      <div
        className="flex flex-col items-center wg-m-hidden"
        style={{ color: "rgb(102, 102, 102)", fontSize: "12px" }}
      >
        <div className="flex justify-center items-center gap-1 my-4 mb-2">
          Diberdayakan oleh
          <span className="font-semibold text-violet-600">Alextrix</span>
        </div>
        <div
          className="mb-1"
          style={{ color: "rgb(200, 200, 200)", fontSize: "12px" }}
        >
          Konten dihasilkan oleh AI, hanya untuk referensi
        </div>
      </div>

      {/* Share dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 min-w-[60%] max-w-[90vw]">
            <h2 className="text-lg font-semibold mb-4">Bagikan Halaman</h2>
            <div className="mb-4">
              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                {shareUrl}
              </a>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm"
              >
                Tutup
              </button>
              <button
                onClick={onCopyHandle}
                className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 text-sm"
              >
                Salin
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
