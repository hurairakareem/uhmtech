import { CaseStudyCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { caseStudies } from "@/content/caseStudies";
import { createMetadata } from "@/lib/metadata";

export const metadata = {
  ...createMetadata({
    title: "Digital Transformation Case Studies",
    description:
      "Illustrative engagement profiles from UHM Tech. Real client names, metrics, and screenshots are published only with permission.",
    path: "/case-studies",
  }),
  robots: { index: false, follow: true },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Illustrative project profiles"
        description="These examples explain our delivery approach. They are not published client case studies; verified client stories and measured results will be added only with permission."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
        ]}
      />
      <section className="container-xl grid gap-5 py-16 md:grid-cols-3">
        {caseStudies.map((item) => (
          <CaseStudyCard key={item.slug} item={item} />
        ))}
      </section>
      <CTASection
        title="Have a similar challenge?"
        text="Describe the process. We will tell you whether automation, software, or customer operations is the right first move."
        primary={{ href: "/contact", label: "Discuss Your Project" }}
      />
    </>
  );
}
