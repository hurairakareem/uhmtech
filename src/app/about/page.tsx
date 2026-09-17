import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { whyChoose } from "@/content/company";
import { createMetadata } from "@/lib/metadata";

function PrincipleIcon({ title }: { title: string }) {
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
    case "Business-first approach":
      return (
        <svg {...commonProps}>
          <path d="M6 18V8.5A1.5 1.5 0 0 1 7.5 7H16.5A1.5 1.5 0 0 1 18 8.5V18" />
          <path d="M9 11.5h6M9 15h6M10 7V5.5h4V7" />
        </svg>
      );
    case "Custom solutions":
      return (
        <svg {...commonProps}>
          <path d="M7 17.5V6.5A1.5 1.5 0 0 1 8.5 5h7A1.5 1.5 0 0 1 17 6.5v11" />
          <path d="M9 9h6M9 12.5h6M9 16h4" />
        </svg>
      );
    case "Scalable architecture":
      return (
        <svg {...commonProps}>
          <path d="M6 18V8.5A1.5 1.5 0 0 1 7.5 7H16.5A1.5 1.5 0 0 1 18 8.5V18" />
          <path d="M9 11.5h6M9 15h6M8 7l2-2m6 2-2-2" />
        </svg>
      );
    case "Automation expertise":
      return (
        <svg {...commonProps}>
          <path d="M6 8.5h12M6 15.5h12" />
          <path d="M8 7v3M16 7v3M8 14v3M16 14v3" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "Multi-platform CRM expertise":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="12" r="2.5" />
          <circle cx="16" cy="8.5" r="2.5" />
          <circle cx="16" cy="15.5" r="2.5" />
          <path d="M10.5 11.2 13.8 9.5M10.8 12.8 13.8 14.6" />
        </svg>
      );
    case "Modern technology":
      return (
        <svg {...commonProps}>
          <path d="M6 15.5 10 9l2.5 3.5L18 6.5" />
          <path d="M18 6.5h-4.5V11" />
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

export const metadata = createMetadata({
  title: "About",
  description:
    "UHM Tech is a technology and digital transformation partner for automation, CRM, software, SaaS, integrations, and customer experience operations.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About UHM Tech"
        title="A technology partner for the whole operating stack"
        description="UHM Tech exists so companies do not have to choose between a CRM agency, a software studio, and a customer operations vendor. We design, build, integrate, and help you run the systems that move the business."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <section className="container-xl grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold">What we believe</h2>
          <p className="mt-4 leading-7 text-muted">
            Tools only create leverage when they match a real process. We start with how work moves today — sales,
            delivery, support, finance — then choose platforms, custom software, or a blend. Zoho, HubSpot, Salesforce,
            and Odoo are options, not an identity.
          </p>
          <p className="mt-4 leading-7 text-muted">
            The same principle applies to products. An MVP should be honest about scope and still leave a path to
            multi-tenant SaaS, APIs, and operational dashboards.
          </p>
        </div>
        <div className="card p-8">
          <h3 className="font-bold">Who we work with</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            <li>Startups that need an MVP, first CRM, and a clean foundation</li>
            <li>SMEs that need automation without enterprise ceremony</li>
            <li>Enterprises that need integrations, permissions, and phased change</li>
            <li>International teams that need clear delivery and documentation</li>
          </ul>
        </div>
      </section>
      <section className="bg-paper py-16">
        <div className="container-xl">
          <h2 className="text-2xl font-extrabold">How we work</h2>
          <div className="mt-8">
            <Process />
          </div>
        </div>
      </section>
      <section className="container-xl py-16">
        <h2 className="text-2xl font-extrabold">Principles we hire and deliver against</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.slice(0, 6).map((item) => (
            <article key={item.title} className="card px-7 py-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper text-accent">
                  <span className="flex h-5 w-5 items-center justify-center">
                    <PrincipleIcon title={item.title} />
                  </span>
                </span>
                <h3 className="font-bold">{item.title}</h3>
              </div>
              <p className="text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection
        title="Talk to our technology experts"
        text="Share a process that is still manual, a product you want to build, or a CRM that is not earning its keep."
        primary={{ href: "/contact", label: "Discuss Your Project" }}
      />
    </>
  );
}
