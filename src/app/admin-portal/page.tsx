import Link from "next/link";
import { inquiryKpis, listInquiries } from "@/lib/inquiries";
import { portalStats } from "@/lib/portal-db";
import { requirePortalSession } from "@/lib/portal-session";
import { ADMIN_PORTAL } from "@/lib/portal-auth";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  await requirePortalSession("admin");
  const [stats, items] = await Promise.all([portalStats(), listInquiries()]);
  const mail = inquiryKpis(items);

  return (
    <main>
      <h1 className="admin-title">Dashboard</h1>
      <p className="admin-lead">UHM Tech internal operations. Customers cannot see this portal.</p>
      <section className="admin-kpis">
        <article>
          <p>Employees</p>
          <strong>{stats.employees}</strong>
        </article>
        <article>
          <p>Active</p>
          <strong>{stats.active}</strong>
        </article>
        <article>
          <p>Present today</p>
          <strong>{stats.presentToday}</strong>
        </article>
        <article>
          <p>Payroll this month</p>
          <strong>PKR {stats.payrollThisMonth.toLocaleString()}</strong>
        </article>
        <article>
          <p>Unread emails</p>
          <strong>{mail.unread}</strong>
        </article>
        <article>
          <p>Website inquiries</p>
          <strong>{mail.total}</strong>
        </article>
      </section>
      <div className="admin-grid">
        <section className="admin-panel">
          <h2>Quick links</h2>
          <ul className="admin-service-list">
            <li>
              <Link href={`${ADMIN_PORTAL}/employees`}>Employee directory</Link>
              <b>HR</b>
            </li>
            <li>
              <Link href={`${ADMIN_PORTAL}/attendance`}>Attendance table</Link>
              <b>Ops</b>
            </li>
            <li>
              <Link href={`${ADMIN_PORTAL}/payroll`}>Payroll runs</Link>
              <b>Finance</b>
            </li>
            <li>
              <Link href={`${ADMIN_PORTAL}/reports`}>Reports & Google API</Link>
              <b>Insights</b>
            </li>
          </ul>
        </section>
        <section className="admin-panel">
          <div className="admin-panel-head">
            <h2>Latest website emails</h2>
            <Link href={`${ADMIN_PORTAL}/inquiries`}>View all</Link>
          </div>
          {items.slice(0, 5).length ? (
            <ul className="admin-mail-list">
              {items.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link href={`${ADMIN_PORTAL}/inquiries/${item.id}`}>
                    <span>
                      <b>{item.name}</b>
                      <small>{item.email}</small>
                    </span>
                    <em>{item.service}</em>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="admin-empty">No contact-form emails yet.</p>
          )}
        </section>
      </div>
    </main>
  );
}
