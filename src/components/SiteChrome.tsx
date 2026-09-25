"use client";

import Link from "next/link";
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
      <Navbar />
      <Link href="/contact" className="btn btn-primary sticky-project-button">
        Start a Project
      </Link>
      <main id="main">{children}</main>
      <Footer />
      <Analytics />
    </>
  );
}
