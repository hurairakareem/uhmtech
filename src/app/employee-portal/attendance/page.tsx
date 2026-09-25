import { listAttendance } from "@/lib/portal-db";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

export default async function EmployeeAttendancePage() {
  const session = await requirePortalSession("employee");
  const rows = await listAttendance(session.employeeId);

  return (
    <main>
      <h1 className="admin-title">My attendance</h1>
      <section className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>In</th>
              <th>Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.date}</td>
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
