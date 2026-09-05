import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { getService, services } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name, href: `/services/${service.slug}` },
  ];

  const related = service.related.map((s) => getService(s)).filter(Boolean);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.description,
          url: absoluteUrl(`/services/${service.slug}`),
        })}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <PageHero
        eyebrow="Service"
        title={service.heroHeadline}
        description={service.heroSupport}
        crumbs={crumbs}
      />
      <section className="container-xl grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <div>
          <h2 className="text-2xl font-extrabold">{service.name}</h2>
          <p className="mt-4 leading-7 text-muted">{service.description}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {service.offerings.map((item) => (
              <article key={item.title} className="card px-7 py-7 sm:px-8 sm:py-8">
                <h3 className="text-base font-bold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="card h-fit px-7 py-8 sm:p-8">
          <h2 className="font-bold">Outcomes we design for</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            {service.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <div className="mt-6">
            <Cta href="/contact">Book a Consultation</Cta>
          </div>
        </aside>
      </section>
      {service.platforms?.length ? (
        <section className="bg-paper py-16">
          <div className="container-xl">
            <h2 className="text-2xl font-extrabold">Platforms and modules</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {service.platforms.map((p) => (
                <article key={p.name} className="card px-7 py-8">
                  <h3 className="font-bold">{p.name}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.items.map((item) => (
                      <li key={item} className="rounded-full bg-paper px-3 py-1 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <section className="container-xl py-16">
        <h2 className="text-2xl font-extrabold">Questions</h2>
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQ items={service.faqs} />
        </div>
        {related.length ? (
          <>
            <h2 className="mt-16 text-2xl font-extrabold">Related services</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((s) => (s ? <ServiceCard key={s.slug} service={s} /> : null))}
            </div>
          </>
        ) : null}
      </section>
      <CTASection
        title={slug === "saas-development" ? "Build your SaaS product" : "Get a custom solution"}
        text="Describe the process, product, or channel you want to improve. We will respond with a scoped conversation."
        primary={{ href: "/contact", label: "Start a Project" }}
        secondary={{ href: "/contact", label: "Request a Quote" }}
      />
    </>
  );
}
