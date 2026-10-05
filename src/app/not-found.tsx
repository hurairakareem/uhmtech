import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page is not in the sitemap"
        description="The link may be outdated. Try the services index or send a note through the contact form."
        crumbs={[{ name: "Home", href: "/" }, { name: "Page not found", href: "/" }]}
      />
      <section className="container-xl py-16 text-center">
        <div className="flex justify-center gap-3">
          <Link href="/services" className="btn btn-primary">
            Explore services
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
