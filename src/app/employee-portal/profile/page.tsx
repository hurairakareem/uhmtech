import { getEmployee } from "@/lib/portal-db";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

export default async function EmployeeProfilePage() {
  const session = await requirePortalSession("employee");
  const employee = session.employeeId ? await getEmployee(session.employeeId) : null;
  if (!employee) {
    return (
      <main>
        <h1 className="admin-title">Profile</h1>
        <p className="admin-empty">No employee record is linked to this login.</p>
      </main>
    );
  }

  return (
    <main>
      <h1 className="admin-title">{employee.name}</h1>
      <section className="admin-panel admin-detail">
        <dl>
          <div>
            <dt>Email</dt>
            <dd>{employee.email}</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>{employee.phone}</dd>
          </div>
          <div>
            <dt>Department</dt>
            <dd>{employee.department}</dd>
          </div>
          <div>
            <dt>Title</dt>
            <dd>{employee.title}</dd>
          </div>
          <div>
            <dt>Join date</dt>
            <dd>{employee.joinDate}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
