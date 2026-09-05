import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getIndustry, industries } from "@/content/industries";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return createMetadata({
    title: `${industry.name} technology solutions`,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: industry.name, href: `/industries/${industry.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero eyebrow="Industry" title={industry.name} description={industry.description} crumbs={crumbs} />
      <section className="container-xl py-16">
        <h2 className="text-2xl font-extrabold">Typical needs</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {industry.needs.map((need) => (
            <li key={need} className="card px-7 py-7 text-sm leading-7">
              {need}
            </li>
          ))}
        </ul>
      </section>
      <CTASection
        title="Start with the process, not the label"
        text={`If you operate in ${industry.name.toLowerCase()}, we can map automation, software, and customer channels to the work you already do.`}
        primary={{ href: "/contact", label: "Book a Consultation" }}
      />
    </>
  );
}
