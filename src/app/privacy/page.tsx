import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles personal information submitted through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy describes the information we collect through the website and how we use it. Replace contact and processing details when legal counsel reviews the final version."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />
      <article className="container-xl prose-legal space-y-6 py-16 text-muted">
        <section>
          <h2 className="text-xl font-extrabold text-ink">Who we are</h2>
          <p className="mt-3 leading-7">
            {siteConfig.name} operates this website. For privacy questions, email{" "}
            <a className="text-accent" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-ink">Information we collect</h2>
          <p className="mt-3 leading-7">
            If you submit the contact form, we collect the name, company, email, phone, service interest, budget range,
            and project details you provide. Server logs may include technical data such as IP address, browser type,
            and referring URL.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-ink">How we use information</h2>
          <p className="mt-3 leading-7">
            We use inquiries to respond to your request, assess fit, and — if you ask us to — prepare a proposal. If a
            CRM webhook is configured, the same fields may be sent to a business system such as Zoho CRM, HubSpot, or
            Salesforce.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-ink">Analytics</h2>
          <p className="mt-3 leading-7">
            If a Google Analytics measurement ID is configured in the environment, usage analytics may run. No
            measurement ID is hardcoded in the application.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold text-ink">Retention and rights</h2>
          <p className="mt-3 leading-7">
            Inquiry records are kept only as long as needed to handle the conversation and any resulting engagement,
            unless a longer period is required by law. You may ask for access, correction, or deletion of personal data
            we hold by emailing us.
          </p>
        </section>
      </article>
    </>
  );
}
