import Link from "next/link";
import { listInquiries } from "@/lib/inquiries";
import { ADMIN_PATH } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

function formatWhen(iso: string) {
  return new Date(iso).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

export default async function AdminInquiriesPage() {
  const items = await listInquiries();

  return (
    <main>
      <h1 className="admin-title">Emails</h1>
      <p className="admin-lead">{items.length} contact-form {items.length === 1 ? "message" : "messages"}.</p>
      {items.length ? (
        <div className="admin-panel">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Received</th>
                <th>From</th>
                <th>Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{formatWhen(item.createdAt)}</td>
                  <td>
                    <Link href={`${ADMIN_PATH}/inquiries/${item.id}`}>
                      <b>{item.name}</b>
                      <span>{item.email}</span>
                    </Link>
                  </td>
                  <td>{item.service}</td>
                  <td>{item.status === "new" ? "Unread" : "Read"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="admin-empty">No emails stored yet.</p>
      )}
    </main>
  );
}
