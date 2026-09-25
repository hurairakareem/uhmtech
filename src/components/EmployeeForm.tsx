"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Employee } from "@/lib/portal-db";
import { ADMIN_PORTAL } from "@/lib/portal-auth";

export function EmployeeForm({ employee }: { employee?: Employee }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const editing = Boolean(employee);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch(editing ? `/api/portal/employees/${employee?.id}` : "/api/portal/employees", {
        method: editing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok) {
        setError(data.message ?? "Could not save employee.");
        return;
      }
      router.push(`${ADMIN_PORTAL}/employees`);
      router.refresh();
    } catch {
      setError("Could not save employee.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="portal-form">
      <label>
        Full name
        <input name="name" required defaultValue={employee?.name} />
      </label>
      <label>
        Email
        <input name="email" type="email" required defaultValue={employee?.email} />
      </label>
      <label>
        Phone
        <input name="phone" defaultValue={employee?.phone} />
      </label>
      <label>
        Department
        <input name="department" required defaultValue={employee?.department} />
      </label>
      <label>
        Title
        <input name="title" defaultValue={employee?.title} />
      </label>
      <label>
        Join date
        <input name="joinDate" type="date" defaultValue={employee?.joinDate} />
      </label>
      <label>
        Monthly salary (PKR)
        <input name="salary" type="number" min="0" defaultValue={employee?.salary} />
      </label>
      <label>
        Status
        <select name="status" defaultValue={employee?.status ?? "active"}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
      {error ? <p className="admin-error">{error}</p> : null}
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Saving…" : editing ? "Save changes" : "Add employee"}
      </button>
    </form>
  );
}
