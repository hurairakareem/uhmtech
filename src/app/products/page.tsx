import { ProductCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { products } from "@/content/products";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Business Software & Automation Products",
  description:
    "UHM Tech product lines for operations, CRM, support, automation, and AI — structured so new products can be added over time.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Software products and reusable systems"
        description="Each product record can include features, status, and a demo CTA. Current listings are coming-soon placeholders until product packaging is finalized."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
        ]}
      />
      <section className="container-xl grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
      <CTASection
        title="Request a demo"
        text="If you want to see how a product pattern would fit your operation, we will walk through the relevant modules."
        primary={{ href: "/contact", label: "Request a Demo" }}
      />
    </>
  );
}
