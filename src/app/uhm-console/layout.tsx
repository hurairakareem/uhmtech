import type { Metadata } from "next";
import { AdminShell } from "@/components/AdminShell";

export const metadata: Metadata = {
  title: "Console",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
