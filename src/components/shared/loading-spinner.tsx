import { cn } from "@/lib/utils/cn";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClass =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-8 w-8" : "h-6 w-6";
  return (
    <div
      role="status"
      aria-label="Memuat"
      className={cn(
        "animate-spin rounded-full border-2 border-slate-200 border-t-brand-500",
        sizeClass,
        className,
      )}
    />
  );
}
