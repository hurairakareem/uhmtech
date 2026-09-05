import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { whyChoose } from "@/content/company";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "UHM Technologies is a technology and digital transformation partner for automation, CRM, software, SaaS, integrations, and customer experience operations.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About UHM Technologies"
        title="A technology partner for the whole operating stack"
        description="UHM Technologies exists so companies do not have to choose between a CRM agency, a software studio, and a customer operations vendor. We design, build, integrate, and help you run the systems that move the business."
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
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
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
