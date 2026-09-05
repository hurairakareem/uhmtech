import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { technologies, technologyCategories } from "@/content/technologies";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Technologies",
  description:
    "Platforms and engineering technologies UHM Technologies works with, including Zoho, HubSpot, Salesforce, Odoo, React, Next.js, Node.js, and more.",
  path: "/technologies",
});

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="A stack that can grow"
        description="This list is representative, not restrictive. New platforms and languages can be added as content records when the company adopts them."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Technologies", href: "/technologies" },
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
                  <article key={t.slug} className="card px-7 py-7">
                    <h3 className="font-bold">{t.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{t.summary}</p>
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
