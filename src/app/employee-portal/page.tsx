import { getEmployee, listAttendance, listPayroll } from "@/lib/portal-db";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

export default async function EmployeeHomePage() {
  const session = await requirePortalSession("employee");
  const employee = session.employeeId ? await getEmployee(session.employeeId) : null;
  const [attendance, payroll] = await Promise.all([
    listAttendance(session.employeeId),
    listPayroll(session.employeeId),
  ]);

  return (
    <main>
      <h1 className="admin-title">Hello{employee ? `, ${employee.name}` : ""}</h1>
      <p className="admin-lead">Your UHM Tech employee workspace.</p>
      <section className="admin-kpis">
        <article>
          <p>Department</p>
          <strong>{employee?.department ?? "—"}</strong>
        </article>
        <article>
          <p>Attendance rows</p>
          <strong>{attendance.length}</strong>
        </article>
        <article>
          <p>Payslips</p>
          <strong>{payroll.length}</strong>
        </article>
      </section>
    </main>
  );
}
