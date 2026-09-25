import { notFound } from "next/navigation";
import { EmployeeForm } from "@/components/EmployeeForm";
import { getEmployee } from "@/lib/portal-db";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

export default async function EditEmployeePage({ params }: { params: Promise<{ id: string }> }) {
  await requirePortalSession("admin");
  const { id } = await params;
  const employee = await getEmployee(id);
  if (!employee) notFound();
  return (
    <main>
      <h1 className="admin-title">{employee.name}</h1>
      <p className="admin-lead">Update this record. Changes are stored server-side.</p>
      <section className="admin-panel">
        <EmployeeForm employee={employee} />
      </section>
    </main>
  );
}
