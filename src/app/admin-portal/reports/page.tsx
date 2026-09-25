import { checkGoogleMaps } from "@/lib/google";
import { listAttendance, listEmployees, listPayroll, portalStats } from "@/lib/portal-db";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

export default async function ReportsPage() {
  await requirePortalSession("admin");
  const [stats, employees, attendance, payroll] = await Promise.all([
    portalStats(),
    listEmployees(),
    listAttendance(),
    listPayroll(),
  ]);

  const google = await checkGoogleMaps();

  const late = attendance.filter((item) => item.status === "late").length;
  const byDept = employees.reduce<Record<string, number>>((acc, item) => {
    acc[item.department] = (acc[item.department] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <main>
      <h1 className="admin-title">Reports</h1>
      <p className="admin-lead">Headcount, attendance, payroll, and Google API status.</p>
      <section className="admin-kpis">
        <article>
          <p>Headcount</p>
          <strong>{stats.employees}</strong>
        </article>
        <article>
          <p>Late marks</p>
          <strong>{late}</strong>
        </article>
        <article>
          <p>Payroll rows</p>
          <strong>{payroll.length}</strong>
        </article>
      </section>
      <div className="admin-grid">
        <section className="admin-panel">
          <h2>By department</h2>
          <ul className="admin-service-list">
            {Object.entries(byDept).map(([name, count]) => (
              <li key={name}>
                <span>{name}</span>
                <b>{count}</b>
              </li>
            ))}
          </ul>
        </section>
        <section className="admin-panel">
          <h2>Google services</h2>
          <p className="admin-empty">
            {google.configured
              ? `Google Maps responded ${google.googleStatus}. ${google.address ?? ""}`
              : google.message ?? "Add GOOGLE_MAPS_API_KEY in server environment. The key is never sent to the browser."}
          </p>
        </section>
      </div>
    </main>
  );
}
