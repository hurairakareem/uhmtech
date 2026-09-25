"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminLogoutButton } from "@/components/AdminLogoutButton";
import { ADMIN_PATH } from "@/lib/admin-auth";
import { siteConfig } from "@/content/site";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === `${ADMIN_PATH}/login`) {
    return <>{children}</>;
  }

  return (
    <div className="admin-app">
      <header className="admin-topbar">
        <Link href={ADMIN_PATH} className="admin-brand">
          <Image src="/brand/New_logo.png" alt="" width={36} height={36} />
          <span>
            <strong>{siteConfig.name}</strong>
            <small>Private console</small>
          </span>
        </Link>
        <nav className="admin-nav">
          <Link href={ADMIN_PATH}>Overview</Link>
          <Link href={`${ADMIN_PATH}/inquiries`}>Emails</Link>
          <AdminLogoutButton />
        </nav>
      </header>
      <div className="admin-body">{children}</div>
    </div>
  );
}
