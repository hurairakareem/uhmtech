import Link from "next/link";
import { notFound } from "next/navigation";
import { getInquiry, markInquiryRead } from "@/lib/inquiries";
import { ADMIN_PORTAL } from "@/lib/portal-auth";
import { requirePortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

function formatWhen(iso: string) {
  return new Date(iso).toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" });
}

export default async function AdminInquiryPage({ params }: { params: Promise<{ id: string }> }) {
  await requirePortalSession("admin");
  const { id } = await params;
  const item = await getInquiry(id);
  if (!item) notFound();
  if (item.status === "new") {
    await markInquiryRead(id);
  }

  return (
    <main>
      <p className="admin-back">
        <Link href={`${ADMIN_PORTAL}/inquiries`}>← All emails</Link>
      </p>
      <h1 className="admin-title">{item.name}</h1>
      <p className="admin-lead">{formatWhen(item.createdAt)}</p>
      <section className="admin-panel admin-detail">
        <dl>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${item.email}`}>{item.email}</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${item.phone}`}>{item.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Company</dt>
            <dd>{item.company || "—"}</dd>
          </div>
          <div>
            <dt>Service</dt>
            <dd>{item.service}</dd>
          </div>
          <div>
            <dt>Budget</dt>
            <dd>{item.budget || "—"}</dd>
          </div>
        </dl>
        <h2>Message</h2>
        <p className="admin-message">{item.details}</p>
        <a className="btn btn-primary" href={`mailto:${item.email}?subject=${encodeURIComponent(`Re: ${item.service} inquiry`)}`}>
          Reply by email
        </a>
      </section>
    </main>
  );
}
