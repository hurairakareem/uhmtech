import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) return {};
  return createMetadata({
    title: item.title,
    description: item.summary,
    path: `/case-studies/${item.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies" },
    { name: item.title, href: `/case-studies/${item.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero eyebrow={item.industry} title={item.title} description={item.summary} crumbs={crumbs} />
      <article className="container-xl grid gap-8 py-16 lg:grid-cols-3">
        <section className="card p-6 lg:col-span-2">
          <p className="text-sm font-semibold text-muted">{item.clientLabel}</p>
          <h2 className="mt-6 text-xl font-extrabold">Challenge</h2>
          <p className="mt-3 leading-7 text-muted">{item.challenge}</p>
          <h2 className="mt-8 text-xl font-extrabold">Solution</h2>
          <p className="mt-3 leading-7 text-muted">{item.solution}</p>
          <h2 className="mt-8 text-xl font-extrabold">Results</h2>
          <p className="mt-3 leading-7 text-muted">{item.resultsNote}</p>
        </section>
        <aside className="space-y-5">
          <div className="card p-6">
            <h2 className="font-bold">Tech</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {item.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="font-bold">Automation implemented</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {item.automation.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </aside>
      </article>
      <CTASection
        title="Replace this profile with your story"
        text="When you have an approved engagement to publish, this page structure already supports screenshots, metrics, and a testimonial block."
        primary={{ href: "/contact", label: "Start a Project" }}
      />
    </>
  );
}
