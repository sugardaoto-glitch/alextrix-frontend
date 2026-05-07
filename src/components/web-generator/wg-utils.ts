import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function wgCn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function extractCodeBlocksContent(markdown: string) {
  const codeBlocksRegex =
    /(?:```([a-zA-Z0-9]+)?\s*([\s\S]*?)\s*```|```([a-zA-Z0-9]+)?\s*([\s\S]+?)\s*```)(?![^`]*```)|```([a-zA-Z0-9]+)?\s*([\s\S]+)/gm;
  let match;
  const codeBlocksContent: string[] = [];
  while ((match = codeBlocksRegex.exec(markdown))) {
    const codeBlockContent =
      match[6] || match[5] || match[4] || match[3] || match[2] || match[1];
    if (codeBlockContent) {
      codeBlocksContent.push(codeBlockContent);
    }
  }
  return codeBlocksContent;
}

export function extractHtml(code: string): string {
  const lastHtmlStartIndex = code.lastIndexOf("<html>");
  let htmlEndIndex = code.indexOf("</html>", lastHtmlStartIndex);

  if (lastHtmlStartIndex !== -1) {
    if (htmlEndIndex !== -1) {
      htmlEndIndex += "</html>".length;
      return code.slice(lastHtmlStartIndex, htmlEndIndex);
    }
    return code.slice(lastHtmlStartIndex);
  }
  return "";
}
