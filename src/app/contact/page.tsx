import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact UHM Tech to discuss automation, CRM, software, SaaS, integrations, or customer experience operations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to automate, build, or improve"
        description="The form is short on purpose. It is designed for later CRM handoff (Zoho, HubSpot, Salesforce, or a webhook) using server-side configuration."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <section className="container-xl grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card p-7 md:p-9">
          <h2 className="text-xl font-extrabold">Start A Conversation</h2>
          <p className="mt-2 text-sm text-muted">We read every request. Include the systems you already use if you know them.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <aside className="space-y-5">
          <div className="card px-7 py-8">
            <h2 className="font-bold">Direct</h2>
            <p className="mt-3 text-sm">
              Email:{" "}
              <a className="text-accent" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            {siteConfig.phone ? <p className="mt-2 text-sm">Phone: {siteConfig.phone}</p> : <p className="mt-2 text-sm text-muted">Phone number can be added in environment configuration.</p>}
            {siteConfig.address ? <p className="mt-2 text-sm">{siteConfig.address}</p> : <p className="mt-2 text-sm text-muted">Office location can be added when a public address is confirmed.</p>}
            <p className="mt-2 text-sm text-muted">{siteConfig.hours}</p>
          </div>
          <div className="card px-7 py-8">
            <h2 className="font-bold">Social</h2>
            <p className="mt-3 text-sm text-muted">
              LinkedIn, X, and GitHub links are ready in site configuration and appear in the footer when URLs are provided.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
