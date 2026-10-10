import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { publicSiteOrigin } from "@/lib/site-origin";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = publicSiteOrigin();
  const page = (path: string, lastModified?: Date): MetadataRoute.Sitemap[number] => ({
    url: path === "/" ? `${origin}/` : `${origin}${path}`,
    ...(lastModified ? { lastModified } : {}),
  });

  const staticRoutes = [
    page("/"),
    page("/about"),
    page("/services"),
    page("/solutions"),
    page("/industries"),
    page("/technologies"),
    page("/contact"),
    page("/privacy"),
    page("/terms"),
    page("/cookies"),
  ];

  const detailRoutes = [
    ...services.map((s) => page(`/services/${s.slug}`)),
    ...industries.map((i) => page(`/industries/${i.slug}`)),
  ];

  return [...staticRoutes, ...detailRoutes];
}
