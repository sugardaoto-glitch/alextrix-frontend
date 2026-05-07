import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alextrix — Dasbor AI Marketing untuk Lynk.id",
    template: "%s · Alextrix",
  },
  description:
    "40+ tool AI marketing yang dirancang khusus untuk seller di Lynk.id. Bahasa Indonesia native. Sekali bayar, akses selamanya.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast: "rounded-lg border border-slate-200 bg-white text-slate-900 shadow-lg",
            },
          }}
        />
      </body>
    </html>
  );
}
