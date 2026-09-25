"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Employee } from "@/lib/portal-db";

export function PayrollForm({ employees }: { employees: Employee[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    await fetch("/api/portal/payroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form.entries())),
    });
    e.currentTarget.reset();
    setLoading(false);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="portal-inline-form">
      <select name="employeeId" required>
        <option value="">Employee</option>
        {employees.map((employee) => (
          <option key={employee.id} value={employee.id}>
            {employee.name}
          </option>
        ))}
      </select>
      <input name="month" type="month" required />
      <input name="basic" type="number" min="0" placeholder="Basic" required />
      <input name="allowances" type="number" min="0" placeholder="Allowances" />
      <input name="deductions" type="number" min="0" placeholder="Deductions" />
      <select name="status" defaultValue="draft">
        <option value="draft">Draft</option>
        <option value="paid">Paid</option>
      </select>
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Saving…" : "Add"}
      </button>
    </form>
  );
}
