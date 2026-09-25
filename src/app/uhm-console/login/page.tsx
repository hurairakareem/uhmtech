import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/AdminLoginForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <main className="admin-login">
      <div className="admin-login-card">
        <p className="eyebrow">Private access</p>
        <h1>{siteConfig.name} console</h1>
        <p>Authorized staff only. This page is not listed in the public website.</p>
        <AdminLoginForm />
      </div>
    </main>
  );
}
