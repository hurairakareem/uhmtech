import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { solutions } from "@/content/company";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Digital transformation, revenue operations, customer operations, and product engineering solutions from UHM Technologies.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Outcomes, not a pile of disconnected tools"
        description="Solutions group our services around the result you want. Each path can combine CRM, automation, software, and customer experience work."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
        ]}
      />
      <section className="container-xl grid gap-5 py-16 md:grid-cols-2">
        {solutions.map((s) => (
          <article key={s.slug} className="card p-8">
            <h2 className="text-xl font-extrabold">{s.name}</h2>
            <p className="mt-3 leading-7 text-muted">{s.summary}</p>
            <Link href="/contact" className="mt-5 inline-flex font-bold text-accent">
              Discuss this path →
            </Link>
          </article>
        ))}
      </section>
      <CTASection
        title="Let's build your next digital product"
        text="If your solution is a product rather than an internal process, start with SaaS and software development — then layer CRM and support as you grow."
        primary={{ href: "/services/saas-development", label: "Build Your SaaS Product" }}
        secondary={{ href: "/contact", label: "Talk to an Expert" }}
      />
    </>
  );
}
