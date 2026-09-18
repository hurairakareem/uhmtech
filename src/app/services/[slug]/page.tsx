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

function OfferingIcon({ title }: { title: string }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (title) {
    case "Workflow automation":
      return (
        <svg {...commonProps}>
          <path d="M6 8h12M6 16h12M8 6v4M16 14v4M9 8.5l2.5 2.5 3-4" />
        </svg>
      );
    case "CRM automation":
      return (
        <svg {...commonProps}>
          <path d="M5 17V9.5A1.5 1.5 0 0 1 6.5 8H17.5A1.5 1.5 0 0 1 19 9.5V17" />
          <path d="M8 11h8M8 14h5" />
        </svg>
      );
    case "Sales automation":
      return (
        <svg {...commonProps}>
          <path d="M5 17.5h14M7 15V9.5M12 15V7M17 15v-5" />
        </svg>
      );
    case "Marketing automation":
      return (
        <svg {...commonProps}>
          <path d="M6 15.5V8.5A1.5 1.5 0 0 1 7.5 7h9A1.5 1.5 0 0 1 18 8.5v7A1.5 1.5 0 0 1 16.5 17h-9A1.5 1.5 0 0 1 6 15.5Z" />
          <path d="M9 10.5h6M9 13.5h4" />
        </svg>
      );
    case "Customer support automation":
      return (
        <svg {...commonProps}>
          <path d="M6 12a6 6 0 0 1 12 0v3.5A2.5 2.5 0 0 1 15.5 18H8.5A2.5 2.5 0 0 1 6 15.5V12Z" />
          <path d="M9 12h6M10.5 9.5h3" />
        </svg>
      );
    case "Business process automation":
      return (
        <svg {...commonProps}>
          <path d="M6 9.5h12M6 14.5h12M9 6.5v11M15 6.5v11" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
}

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
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper text-accent">
                    <span className="flex h-5 w-5 items-center justify-center">
                      <OfferingIcon title={item.title} />
                    </span>
                  </span>
                  <h3 className="text-base font-bold leading-snug">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-muted">{item.description}</p>
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
