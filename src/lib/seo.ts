import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";
import { publicSiteOrigin } from "@/lib/site-origin";

type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  const addressParts = siteConfig.address.split(",").map((part) => part.trim()).filter(Boolean);
  const country = addressParts.at(-1)?.toLowerCase() === "pakistan" ? addressParts.pop() : undefined;
  const locality = addressParts.length > 1 ? addressParts.pop() : addressParts[0] || "Lahore";
  const streetAddress = addressParts.length > 0 ? addressParts.join(", ") : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    url: publicSiteOrigin(),
    logo: absoluteUrl("/brand/New_logo.png"),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      ...(streetAddress ? { streetAddress } : {}),
      addressLocality: locality,
      ...(country ? { addressCountry: "PK" } : {}),
    },
    telephone: siteConfig.phone || undefined,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}
export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: publicSiteOrigin(),
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  url: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${input.url}#service`,
    name: input.name,
    serviceType: input.name,
    description: input.description,
    provider: { "@id": absoluteUrl("/#organization") },
    url: input.url,
    areaServed: [
      { "@type": "City", name: "Lahore" },
      { "@type": "Country", name: "Pakistan" },
    ],
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: input.url,
  };
}
