import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getProduct, products } from "@/content/products";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return createMetadata({
    title: product.name,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: product.name, href: `/products/${product.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero eyebrow={product.category} title={product.name} description={product.description} crumbs={crumbs} />
      <section className="container-xl grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-extrabold">Features</h2>
          <ul className="mt-6 grid gap-4">
            {product.features.map((f) => (
              <li key={f} className="card px-7 py-5 text-sm leading-6">
                {f}
              </li>
            ))}
          </ul>
        </div>
        <aside className="card h-fit px-7 py-8">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{product.status.replace("-", " ")}</p>
          <p className="mt-3 text-sm text-muted">
            Pricing is scoped per deployment. Screenshot galleries can be added here when product visuals are ready.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Cta href="/contact">Request a Demo</Cta>
            <Cta href="/contact" variant="secondary">
              Talk to an Expert
            </Cta>
          </div>
        </aside>
      </section>
      <CTASection
        title="Want this tailored to your team?"
        text="Products can be implemented as packaged systems or used as a starting architecture for a custom build."
        primary={{ href: "/contact", label: "Start a Project" }}
      />
    </>
  );
}
