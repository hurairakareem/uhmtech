import { EmployeeForm } from "@/components/EmployeeForm";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

export default async function NewEmployeePage() {
  await requirePortalSession("admin");
  return (
    <main>
      <h1 className="admin-title">Add employee</h1>
      <p className="admin-lead">Saved on the server into the portal database.</p>
      <section className="admin-panel">
        <EmployeeForm />
      </section>
    </main>
  );
}
