"use client";

import { usePathname } from "next/navigation";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin-portal") || pathname.startsWith("/employee-portal") || pathname.startsWith("/uhm-console")) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="public-page-shell">
        <Navbar overlay />
        <main id="main">{children}</main>
      </div>
      <Footer />
      <Analytics />
    </>
  );
}
