"use client";

import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { APP_NAV_ITEMS, ROUTES } from "@/lib/constants/routes";
import { useAuthStore } from "@/lib/stores/auth-store";

export function AppHeader() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur lg:hidden">
      <Link href={ROUTES.dashboard} className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white">
          <Sparkles className="h-3.5 w-3.5" />
        </div>
        <span className="text-base font-bold tracking-tight">Alextrix</span>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Buka menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-72">
          <div className="mt-6 flex flex-col gap-1">
            {APP_NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ROUTES.pengaturan}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Pengaturan
            </Link>
          </div>
          {user && (
            <div className="mt-6 border-t border-slate-200 pt-4">
              <div className="mb-3 px-3">
                <div className="text-sm font-medium text-slate-900">
                  {user.fullName}
                </div>
                <div className="text-xs text-slate-500">{user.email}</div>
              </div>
              <button
                onClick={() => logout()}
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50"
              >
                Keluar
              </button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </header>
  );
}
