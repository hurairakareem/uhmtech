import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: `Terms of use for the ${siteConfig.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms govern use of this website. Project work is covered by a separate statement of work or contract."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Terms & Conditions", href: "/terms" },
        ]}
      />
      <article className="container-xl space-y-6 py-16 text-muted">
        <section>
          <h2 className="text-xl font-extrabold text-ink">Use of the site</h2>
          <p className="mt-3 leading-7">
            You may browse this site for information about {siteConfig.name}. Do not misuse the contact form, attempt to
            disrupt the service, or scrape the site in a way that harms availability.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-ink">No ranking or outcome guarantees</h2>
          <p className="mt-3 leading-7">
            Content on this site describes capabilities and approaches. It does not guarantee search rankings, revenue
            results, or specific performance metrics.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-ink">Intellectual property</h2>
          <p className="mt-3 leading-7">
            The UHM Technologies name, logo, and site design are owned by the company. Do not copy the logo or present
            it as your own.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-ink">Liability</h2>
          <p className="mt-3 leading-7">
            Website content is provided for general information. Engagements begin only when both parties agree in
            writing. This page should be reviewed by counsel before public launch.
          </p>
        </section>
      </article>
    </>
  );
}
