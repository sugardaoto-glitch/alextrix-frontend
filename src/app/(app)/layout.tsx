import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LicenseBanner } from "@/components/layout/license-banner";
import { SeedRunner } from "@/components/shared/seed-runner";
import { AppGuard } from "@/components/shared/app-guard";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppGuard>
      <div className="flex min-h-screen bg-slate-50">
        <SeedRunner />
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <AppHeader />
          <LicenseBanner />
          <main className="flex-1 pb-20 lg:pb-0">{children}</main>
          <MobileNav />
        </div>
      </div>
    </AppGuard>
  );
}
