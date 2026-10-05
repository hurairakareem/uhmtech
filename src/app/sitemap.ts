import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { publicSiteOrigin } from "@/lib/site-origin";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = publicSiteOrigin();
  const page = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
    lastModified?: Date,
  ) => ({
    url: path === "/" ? `${origin}/` : `${origin}${path}`,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency,
    priority,
  });

  const staticRoutes = [
    page("/", "weekly", 1),
    page("/about", "weekly", 0.8),
    page("/services", "weekly", 0.9),
    page("/solutions", "weekly", 0.8),
    page("/industries", "weekly", 0.8),
    page("/blog", "weekly", 0.7),
    page("/technologies", "monthly", 0.6),
    page("/contact", "monthly", 0.7),
    page("/privacy", "yearly", 0.3),
    page("/terms", "yearly", 0.3),
    page("/cookies", "yearly", 0.3),
  ];

  const detailRoutes = [
    ...services.map((s) => page(`/services/${s.slug}`, "monthly", 0.8)),
    ...industries.map((i) => page(`/industries/${i.slug}`, "monthly", 0.6)),
    ...blogPosts.map((p) =>
      page(`/blog/${p.slug}`, "monthly", 0.6, new Date(`${p.updatedAt ?? p.publishedAt}T00:00:00.000Z`)),
    ),
  ];

  return [...staticRoutes, ...detailRoutes];
}
