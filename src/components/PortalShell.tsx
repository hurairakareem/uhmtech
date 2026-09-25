"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_PORTAL, EMPLOYEE_PORTAL } from "@/lib/portal-auth";

const adminLinks = [
  { href: ADMIN_PORTAL, label: "Dashboard" },
  { href: `${ADMIN_PORTAL}/employees`, label: "Employees" },
  { href: `${ADMIN_PORTAL}/attendance`, label: "Attendance" },
  { href: `${ADMIN_PORTAL}/payroll`, label: "Payroll" },
  { href: `${ADMIN_PORTAL}/reports`, label: "Reports" },
  { href: `${ADMIN_PORTAL}/inquiries`, label: "Emails" },
];

const employeeLinks = [
  { href: EMPLOYEE_PORTAL, label: "Dashboard" },
  { href: `${EMPLOYEE_PORTAL}/profile`, label: "Profile" },
  { href: `${EMPLOYEE_PORTAL}/attendance`, label: "Attendance" },
  { href: `${EMPLOYEE_PORTAL}/payroll`, label: "Payslips" },
];

export function PortalShell({
  children,
  role,
  username,
}: {
  children: React.ReactNode;
  role: "admin" | "employee";
  username: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const login = pathname.endsWith("/login");
  if (login) return <>{children}</>;

  const links = role === "admin" ? adminLinks : employeeLinks;
  const home = role === "admin" ? ADMIN_PORTAL : EMPLOYEE_PORTAL;

  async function logout() {
    await fetch("/api/portal/logout", { method: "POST" });
    router.push(`${ADMIN_PORTAL}/login`);
    router.refresh();
  }

  return (
    <div className="admin-app">
      <header className="admin-topbar">
        <Link href={home} className="admin-brand">
          <Image src="/brand/New_logo.png" alt="UHM Tech" width={82} height={124} className="h-11 w-auto object-contain" />
          <span>
            <small>{role === "admin" ? "Admin portal" : "Employee portal"}</small>
          </span>
        </Link>
        <nav className="admin-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? "is-active" : ""}>
              {link.label}
            </Link>
          ))}
          <span className="admin-user">{username}</span>
          <button className="admin-logout" type="button" onClick={logout}>
            Sign out
          </button>
        </nav>
      </header>
      <div className="admin-body">{children}</div>
    </div>
  );
}
