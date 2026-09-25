import Link from "next/link";
import { inquiryKpis, listInquiries } from "@/lib/inquiries";
import { ADMIN_PATH } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const items = await listInquiries();
  const kpis = inquiryKpis(items);
  const recent = items.slice(0, 8);
  const serviceRows = Object.entries(kpis.services).sort((a, b) => b[1] - a[1]);

  return (
    <main>
      <h1 className="admin-title">Overview</h1>
      <p className="admin-lead">Contact-form activity. Customers cannot see this page.</p>
      <section className="admin-kpis">
        <article>
          <p>Total emails</p>
          <strong>{kpis.total}</strong>
        </article>
        <article>
          <p>Unread</p>
          <strong>{kpis.unread}</strong>
        </article>
        <article>
          <p>Last 7 days</p>
          <strong>{kpis.week}</strong>
        </article>
        <article>
          <p>Last 30 days</p>
          <strong>{kpis.month}</strong>
        </article>
        <article>
          <p>Unique senders</p>
          <strong>{kpis.uniqueSenders}</strong>
        </article>
        <article>
          <p>Top service</p>
          <strong>{kpis.topService?.name ?? "—"}</strong>
        </article>
      </section>

      <div className="admin-grid">
        <section className="admin-panel">
          <div className="admin-panel-head">
            <h2>Latest emails</h2>
            <Link href={`${ADMIN_PATH}/inquiries`}>View all</Link>
          </div>
          {recent.length ? (
            <ul className="admin-mail-list">
              {recent.map((item) => (
                <li key={item.id}>
                  <Link href={`${ADMIN_PATH}/inquiries/${item.id}`}>
                    <span>
                      <b>{item.name}</b>
                      <small>{item.email}</small>
                    </span>
                    <em>{item.service}</em>
                    {item.status === "new" ? <i>New</i> : null}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="admin-empty">No inquiries yet. New contact-form messages will appear here.</p>
          )}
        </section>
        <section className="admin-panel">
          <h2>By service</h2>
          {serviceRows.length ? (
            <ul className="admin-service-list">
              {serviceRows.map(([name, count]) => (
                <li key={name}>
                  <span>{name}</span>
                  <b>{count}</b>
                </li>
              ))}
            </ul>
          ) : (
            <p className="admin-empty">Service mix will show after the first inquiry.</p>
          )}
        </section>
      </div>
    </main>
  );
}
