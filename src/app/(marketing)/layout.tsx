import type { ReactNode } from "react";

/**
 * Layout for public-facing marketing pages.
 * Header and Footer will be added here once built.
 */
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* TODO: <SiteHeader /> */}
      <main className="flex-1">{children}</main>
      {/* TODO: <SiteFooter /> */}
    </>
  );
}
