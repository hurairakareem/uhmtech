import Link from "next/link";
import { listInquiryMailbox } from "@/lib/inquiries";
import { ADMIN_PORTAL } from "@/lib/portal-auth";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

function formatWhen(iso: string) {
  return new Date(iso).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

export default async function AdminInquiriesPage() {
  await requirePortalSession("admin");
  const { items, mailbox, error } = await listInquiryMailbox();

  return (
    <main>
      <h1 className="admin-title">Emails</h1>
      <p className="admin-lead">
        Inbox for {mailbox}. {items.length} {items.length === 1 ? "message" : "messages"} shown.
      </p>
      {error ? <p className="admin-empty">Could not load Gmail: {error}</p> : null}
      {items.length ? (
        <div className="admin-panel">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Received</th>
                <th>From</th>
                <th>Subject</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{formatWhen(item.createdAt)}</td>
                  <td>
                    <Link href={`${ADMIN_PORTAL}/inquiries/${item.id}`}>
                      <b>{item.name}</b>
                      <span>{item.email}</span>
                    </Link>
                  </td>
                  <td>{item.subject || item.service || "—"}</td>
                  <td>{item.status === "new" ? "Unread" : "Read"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : !error ? (
        <p className="admin-empty">No emails in this inbox yet.</p>
      ) : null}
    </main>
  );
}
