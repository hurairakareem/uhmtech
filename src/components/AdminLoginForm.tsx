"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_PATH } from "@/lib/admin-auth";

export function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok) {
        setError(data.message ?? "Could not sign in.");
        return;
      }
      router.push(ADMIN_PATH);
      router.refresh();
    } catch {
      setError("Could not sign in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="admin-login-form">
      <label>
        Username
        <input autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>
      <label>
        Password
        <input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      {error ? (
        <p className="admin-error" role="alert">
          {error}
        </p>
      ) : null}
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
