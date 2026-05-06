"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  BookmarkCheck,
  History,
  Users,
  Settings,
  Sparkles,
  LogOut,
} from "lucide-react";
import { APP_NAV_ITEMS, ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { useAuthStore } from "@/lib/stores/auth-store";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid,
  BookmarkCheck,
  History,
  Users,
  Settings,
};

export function AppSidebar() {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <aside className="hidden h-screen w-60 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white">
          <Sparkles className="h-4 w-4" />
        </div>
        <span className="text-base font-bold tracking-tight text-slate-900">
          Alextrix
        </span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {APP_NAV_ITEMS.map((item) => {
          const Icon = ICONS[item.icon] ?? LayoutGrid;
          const active =
            pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-700 hover:bg-slate-50",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-3">
        <Link
          href={ROUTES.pengaturan}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            pathname?.startsWith("/pengaturan")
              ? "bg-brand-50 text-brand-700"
              : "text-slate-700 hover:bg-slate-50",
          )}
        >
          <Settings className="h-4 w-4" />
          Pengaturan
        </Link>
      </div>

      {user && (
        <div className="border-t border-slate-200 p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
              {user.fullName?.[0]?.toUpperCase() ?? "A"}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-slate-900">
                {user.fullName}
              </div>
              <div className="truncate text-xs text-slate-500">{user.email}</div>
            </div>
          </div>
          <button
            onClick={() => logout()}
            className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700"
          >
            <LogOut className="h-3.5 w-3.5" />
            Keluar
          </button>
        </div>
      )}
    </aside>
  );
}
