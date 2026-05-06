"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_NAV_SETTINGS } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { PageHeader } from "@/components/shared/page-header";

export default function PengaturanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <PageHeader title="Pengaturan" description="Atur akun, API key, dan tagihan." />

      <div className="border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
        <nav className="-mb-px flex flex-wrap gap-1 overflow-x-auto" aria-label="Tabs">
          {APP_NAV_SETTINGS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/pengaturan" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "border-b-2 px-3 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "border-brand-500 text-brand-700"
                    : "border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}
