import type { Metadata } from "next";
import { PortalLoginForm } from "@/components/PortalLoginForm";

export const metadata: Metadata = {
  title: "Portal sign in",
  robots: { index: false, follow: false },
};

export default function PortalLoginPage() {
  return (
    <main className="admin-login">
      <div className="admin-login-card">
        <p className="eyebrow">UHM Tech</p>
        <h1>Staff portal</h1>
        <p>Admins and employees sign in here. This page is not listed on the public website.</p>
        <PortalLoginForm />
      </div>
    </main>
  );
}
