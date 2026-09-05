import { IndustryCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/content/industries";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "UHM Technologies works with healthcare, real estate, ecommerce, financial services, education, retail, manufacturing, logistics, professional services, technology, startups, SMBs, and enterprise teams.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="The same discipline, applied to different operating models"
        description="Industry pages are data-driven. Add another market by extending the industries content file — no layout rewrite required."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
        ]}
      />
      <section className="container-xl grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <IndustryCard key={industry.slug} industry={industry} />
        ))}
      </section>
      <CTASection
        title="Don't see your industry?"
        text="These are examples. If your process is clear, we can still automate, build, and integrate around it."
        primary={{ href: "/contact", label: "Contact Us" }}
      />
    </>
  );
}
