import { CTASection } from "@/components/CTASection";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LogoCloud } from "@/components/LogoCloud";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGrid } from "@/components/ServiceCard";
import { CaseStudyCard, ProductCard } from "@/components/Cards";
import { caseStudies } from "@/content/caseStudies";
import { whyChoose } from "@/content/company";
import { products } from "@/content/products";
import { getPartnerServices, getPrimaryServices } from "@/content/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <section className="border-b border-line bg-white">
        <div className="container-xl grid gap-6 py-8 text-sm font-semibold text-muted md:grid-cols-[1fr_auto] md:items-center">
          <p>Technology partner for teams building what comes next.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em] text-ink/55">
            <span>Strategy</span><span>Systems</span><span>Software</span><span>Scale</span>
          </div>
        </div>
      </section>

      <section className="container-xl py-20 md:py-28">
        <SectionHeader
          eyebrow="What we do"
          title="CRM, automation and software that fit your business"
          description="From CRM implementation and business process automation to custom software and system integration, we connect the tools and workflows your team relies on."
        />
        <div className="mt-12">
          <ServiceGrid services={getPrimaryServices()} />
        </div>
        <div className="mt-20">
          <SectionHeader
            eyebrow="Technology partnership"
            title="Improve the systems you already run"
            description="Review your current technology, integrate disconnected business systems, build internal tools and dashboards, and support your team after launch."
          />
          <div className="mt-12">
            <ServiceGrid services={getPartnerServices()} />
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-xl">
          <SectionHeader
            light
            eyebrow="Illustrative project profiles"
            title="Solutions shaped around real operating problems"
            description="These profiles illustrate how we approach common delivery challenges. They are examples, not claims about named client projects or measured results."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((item) => (
              <CaseStudyCard key={item.slug} item={item} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Cta href="/case-studies">View all project profiles <span aria-hidden="true">↗</span></Cta>
          </div>
        </div>
      </section>

      <section className="container-xl py-20 md:py-28">
        <SectionHeader
          eyebrow="Products"
          title="Reusable foundations for the next stage of growth"
          description="Productized systems that give teams a stronger starting point, with room for the details of their business."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Cta href="/products">Explore the product catalog <span aria-hidden="true">↗</span></Cta>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-xl">
          <SectionHeader
            eyebrow="How we work"
            title="Senior thinking, practical delivery"
            description="Every engagement starts with the process and ends with a system your team can understand, use, and extend."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whyChoose.slice(0, 3).map((item, index) => (
              <article key={item.title} className="border-t-2 border-accent pt-5">
                <p className="text-sm font-bold text-accent">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-bold leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a complex process worth improving?"
        text="Bring us the messy version. We will help you find the clearest next step, whether that is automation, a product, or a better connected system."
        primary={{ href: "/contact", label: "Start a Conversation" }}
        secondary={{ href: "/about", label: "Meet UHM Tech" }}
      />
    </>
  );
}
