import { notFound } from "next/navigation";
import { TOOLS, getTool } from "@/data/tools";
import { ToolRunnerShell } from "@/components/tool/tool-runner-shell";
import { BlockLibraryShell } from "@/components/tool/block-library-shell";

interface PageProps {
  params: Promise<{ toolId: string }>;
}

export function generateStaticParams() {
  return TOOLS.map((t) => ({ toolId: t.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { toolId } = await params;
  const tool = getTool(toolId);
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.tagline,
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { toolId } = await params;
  const tool = getTool(toolId);
  if (!tool) notFound();

  if (tool.id === "block-library") {
    return <BlockLibraryShell />;
  }

  return <ToolRunnerShell tool={tool} />;
}
