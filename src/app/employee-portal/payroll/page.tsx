import { listPayroll } from "@/lib/portal-db";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

export default async function EmployeePayrollPage() {
  const session = await requirePortalSession("employee");
  const rows = await listPayroll(session.employeeId);

  return (
    <main>
      <h1 className="admin-title">My payslips</h1>
      <section className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Basic</th>
              <th>Net</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.month}</td>
                <td>PKR {row.basic.toLocaleString()}</td>
                <td>PKR {row.net.toLocaleString()}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
