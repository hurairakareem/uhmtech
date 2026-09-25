"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Employee } from "@/lib/portal-db";

export function AttendanceForm({ employees }: { employees: Employee[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    await fetch("/api/portal/attendance", {
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
      <input name="date" type="date" required />
      <input name="checkIn" placeholder="09:00" />
      <input name="checkOut" placeholder="18:00" />
      <select name="status" defaultValue="present">
        <option value="present">Present</option>
        <option value="late">Late</option>
        <option value="leave">Leave</option>
        <option value="absent">Absent</option>
      </select>
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Saving…" : "Add"}
      </button>
    </form>
  );
}
