import { PayrollForm } from "@/components/PayrollForm";
import { employeeName, listEmployees, listPayroll } from "@/lib/portal-db";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

export default async function PayrollPage() {
  await requirePortalSession("admin");
  const [employees, rows] = await Promise.all([listEmployees(), listPayroll()]);

  return (
    <main>
      <h1 className="admin-title">Payroll</h1>
      <p className="admin-lead">Salary runs for UHM Tech staff.</p>
      <section className="admin-panel">
        <PayrollForm employees={employees} />
        <table className="admin-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Employee</th>
              <th>Basic</th>
              <th>Net</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.month}</td>
                <td>{employeeName(employees, row.employeeId)}</td>
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
