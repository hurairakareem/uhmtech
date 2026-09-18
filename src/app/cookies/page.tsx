import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: `How ${siteConfig.name} uses cookies and similar tech.`,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="This site uses essential cookies required to operate the website. Analytics cookies are used only if you configure a measurement ID."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Cookie Policy", href: "/cookies" },
        ]}
      />
      <article className="container-xl space-y-6 py-16 text-muted">
        <section>
          <h2 className="text-xl font-extrabold text-ink">Essential cookies</h2>
          <p className="mt-3 leading-7">
            The application may set cookies required for security, load balancing, or session continuity. These are not
            used for advertising.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-ink">Analytics</h2>
          <p className="mt-3 leading-7">
            If Google Analytics is enabled through environment configuration, that service may set its own cookies.
            Disable it by leaving the measurement ID empty.
          </p>
        </section>
      </article>
    </>
  );
}
