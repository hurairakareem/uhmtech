import { AttendanceForm } from "@/components/AttendanceForm";
import { employeeName, listAttendance, listEmployees } from "@/lib/portal-db";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

export default async function AttendancePage() {
  await requirePortalSession("admin");
  const [employees, rows] = await Promise.all([listEmployees(), listAttendance()]);

  return (
    <main>
      <h1 className="admin-title">Attendance</h1>
      <p className="admin-lead">Mark daily attendance. Stored on the server.</p>
      <section className="admin-panel">
        <AttendanceForm employees={employees} />
        <table className="admin-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Employee</th>
              <th>In</th>
              <th>Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.date}</td>
                <td>{employeeName(employees, row.employeeId)}</td>
                <td>{row.checkIn || "—"}</td>
                <td>{row.checkOut || "—"}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
