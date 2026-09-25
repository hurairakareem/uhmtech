import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { TechLogo } from "@/components/TechLogo";
import { technologies, technologyCategories } from "@/content/technologies";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Technology Stack & Platforms We Use",
  description:
    "Platforms and engineering tech UHM Tech works with, including Zoho, HubSpot, Salesforce, Odoo, React, Next.js, Node.js, and more.",
  path: "/technologies",
});

export default function TechPage() {
  return (
    <>
      <PageHero
        eyebrow="Tech"
        title="A stack that can grow"
        description="This list is representative, not restrictive. New platforms and languages can be added as content records when the company adopts them."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Tech", href: "/technologies" },
        ]}
      />
      <section className="container-xl space-y-12 py-16">
        {technologyCategories.map((cat) => (
          <div key={cat.id}>
            <h2 className="text-xl font-extrabold">{cat.label}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {technologies
                .filter((t) => t.category === cat.id)
                .map((t) => (
                  <article key={t.slug} className="card flex items-start gap-4 px-7 py-7">
                    <TechLogo slug={t.slug} name={t.name} />
                    <div className="min-w-0">
                      <h3 className="font-bold leading-snug">{t.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{t.summary}</p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </section>
      <CTASection
        title="Need a technology that is not listed?"
        text="Tell us what you already run. We will work with it, integrate it, or recommend a cleaner path."
        primary={{ href: "/contact", label: "Talk to an Expert" }}
      />
    </>
  );
}
