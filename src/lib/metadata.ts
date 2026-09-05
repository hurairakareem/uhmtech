import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

export function createMetadata({
  title,
  description,
  path = "/",
  ogType = "website",
}: {
  title: string;
  description: string;
  path?: string;
  ogType?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: ogType,
      images: [{ url: absoluteUrl("/brand/uhm-logo.png"), alt: `${siteConfig.name} logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/brand/uhm-logo.png")],
    },
  };
}
