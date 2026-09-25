"use client";

import { useRouter } from "next/navigation";

export function AdminLogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/uhm-console/login");
    router.refresh();
  }

  return (
    <button className="admin-logout" type="button" onClick={logout}>
      Sign out
    </button>
  );
}
