"use client";

import { useByokStore } from "@/lib/stores/byok-store";
import dynamic from "next/dynamic";
import Link from "next/link";
import "@/components/web-generator/web-generator.css";

const WebGeneratorApp = dynamic(
  () => import("@/components/web-generator/WebGeneratorApp"),
  { ssr: false }
);

export default function WebGeneratorPage() {
  const { keys, activeProvider } = useByokStore();

  const activeKey = activeProvider ? keys[activeProvider] : null;
  const hasApiKey = activeKey && activeKey.status === "verified";

  if (!hasApiKey) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <div className="max-w-md text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-violet-500 flex items-center justify-center text-white font-bold text-2xl mx-auto">
            A
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Alextrix Pembuat Halaman Web AI
          </h1>
          <p className="text-gray-600">
            Anda memerlukan API key untuk menggunakan fitur ini. Silakan
            tambahkan API key terlebih dahulu di pengaturan BYOK.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/pengaturan/api-key"
              className="inline-flex items-center justify-center px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors font-medium"
            >
              Tambah API Key
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Kembali ke Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Use a placeholder key since this is mock-based; the real key would come from BYOK
  // The 302 backend uses its own API key system, so we pass the provider info
  const apiKeyValue = `byok-${activeProvider}-${activeKey.defaultModel}`;

  return <WebGeneratorApp apiKey={apiKeyValue} />;
}
