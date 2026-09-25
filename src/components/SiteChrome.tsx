"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ADMIN_PATH } from "@/lib/admin-auth";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith(ADMIN_PATH)) {
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
