import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGrid } from "@/components/ServiceCard";
import { CaseStudyCard, ProductCard } from "@/components/Cards";
import { caseStudies } from "@/content/caseStudies";
import { whyChoose } from "@/content/company";
import { faqs } from "@/content/faqs";
import { products } from "@/content/products";
import { getPrimaryServices } from "@/content/services";
import { faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Hero />
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
          title="A clear route from friction to forward motion"
          description="We bring strategy, systems, and engineering into one accountable engagement, so the technology supports the way your team actually works."
        />
        <div className="mt-12">
          <ServiceGrid services={getPrimaryServices()} />
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-xl">
          <SectionHeader
            light
            eyebrow="Selected work"
            title="Projects shaped around the real operating problem"
            description="A few examples of the systems, products, and workflows we help teams bring into focus."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((item) => (
              <CaseStudyCard key={item.slug} item={item} />
            ))}
          </div>
          <div className="mt-8 text-center"><a href="/case-studies" className="text-sm font-bold text-cyan hover:text-white">View all project profiles <span className="ml-1">↗</span></a></div>
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
        <div className="mt-8 text-center"><a href="/products" className="text-sm font-bold text-accent hover:text-ink">Explore the product catalog <span className="ml-1">↗</span></a></div>
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
        secondary={{ href: "/about", label: "Meet UHM Technologies" }}
      />
    </>
  );
}
