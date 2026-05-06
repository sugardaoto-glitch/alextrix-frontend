"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  BookOpen,
  History,
  Sparkles,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const ITEMS = [
  { href: "/dashboard", label: "Tool", icon: LayoutGrid },
  { href: "/agen-ai", label: "Agen AI", icon: Sparkles },
  { href: "/riwayat", label: "Riwayat", icon: History },
  { href: "/panduan", label: "Panduan", icon: BookOpen },
  { href: "/pengaturan", label: "Akun", icon: Settings },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white pb-safe lg:hidden"
    >
      <div className="flex items-center justify-around">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 px-2 py-3 text-xs",
                active ? "text-brand-600" : "text-slate-500",
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
