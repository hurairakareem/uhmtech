import type { Metadata } from "next";
import { PortalShell } from "@/components/PortalShell";
import { getPortalSession } from "@/lib/portal-session";

export const metadata: Metadata = {
  title: "Employee portal",
  robots: { index: false, follow: false, nocache: true },
};

export default async function EmployeePortalLayout({ children }: { children: React.ReactNode }) {
  const session = await getPortalSession();
  if (!session) return <>{children}</>;
  return (
    <PortalShell role={session.role} username={session.username}>
      {children}
    </PortalShell>
  );
}
