import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { getPrimaryServices, services } from "@/content/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore UHM Technologies services: business automation, CRM, software and SaaS development, AI, call center, chat, email, APIs, and management systems.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything required to automate, build, integrate, and serve"
        description="Each service is a structured record — so new offerings can be added later without redesigning the site. Start with the core list, or go deeper into a specific platform."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <section className="container-xl py-16">
        <ServiceGrid services={getPrimaryServices()} />
        <h2 className="mt-16 text-2xl font-extrabold">Platform landing pages</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Dedicated SEO pages for Zoho, HubSpot, Salesforce, and Odoo sit alongside the main services. More platform
          pages can be added the same way.
        </p>
        <div className="mt-8">
          <ServiceGrid
            services={services.filter((s) => ["zoho-crm", "hubspot", "salesforce", "odoo"].includes(s.slug))}
          />
        </div>
      </section>
      <CTASection
        title="Start your digital transformation"
        text="If you are not sure which service fits, tell us the outcome you need. We will map it to automation, software, or customer operations."
        primary={{ href: "/contact", label: "Request a Quote" }}
      />
    </>
  );
}
