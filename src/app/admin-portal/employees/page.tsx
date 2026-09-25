import Link from "next/link";
import { listEmployees } from "@/lib/portal-db";
import { requirePortalSession } from "@/lib/portal-session";
import { ADMIN_PORTAL } from "@/lib/portal-auth";

export const dynamic = "force-dynamic";

export default async function EmployeesPage() {
  await requirePortalSession("admin");
  const employees = await listEmployees();

  return (
    <main>
      <div className="admin-panel-head">
        <div>
          <h1 className="admin-title">Employees</h1>
          <p className="admin-lead">{employees.length} records in the UHM Tech directory.</p>
        </div>
        <Link className="btn btn-primary" href={`${ADMIN_PORTAL}/employees/new`}>
          Add employee
        </Link>
      </div>
      <div className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Title</th>
              <th>Status</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <Link href={`${ADMIN_PORTAL}/employees/${employee.id}`}>
                    <b>{employee.name}</b>
                    <span>{employee.email}</span>
                  </Link>
                </td>
                <td>{employee.department}</td>
                <td>{employee.title}</td>
                <td>{employee.status}</td>
                <td>PKR {employee.salary.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
