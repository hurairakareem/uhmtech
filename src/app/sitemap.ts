import { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { caseStudies } from "@/content/caseStudies";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { publicSiteOrigin } from "@/lib/site-origin";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = publicSiteOrigin();
  const now = new Date();

  const page = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
  ) => ({
    url: path === "/" ? `${origin}/` : `${origin}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  const staticRoutes = [
    page("/", "weekly", 1),
    page("/about", "weekly", 0.8),
    page("/services", "weekly", 0.9),
    page("/solutions", "weekly", 0.8),
    page("/industries", "weekly", 0.8),
    page("/products", "monthly", 0.7),
    page("/case-studies", "monthly", 0.6),
    page("/technologies", "monthly", 0.6),
    page("/blog", "weekly", 0.7),
    page("/contact", "monthly", 0.7),
    page("/privacy", "yearly", 0.3),
    page("/terms", "yearly", 0.3),
    page("/cookies", "yearly", 0.3),
  ];

  const detailRoutes = [
    ...services.map((s) => page(`/services/${s.slug}`, "monthly", 0.8)),
    ...industries.map((i) => page(`/industries/${i.slug}`, "monthly", 0.6)),
    ...products.map((p) => page(`/products/${p.slug}`, "monthly", 0.6)),
    ...caseStudies.map((c) => page(`/case-studies/${c.slug}`, "monthly", 0.5)),
    ...blogPosts.map((b) => page(`/blog/${b.slug}`, "monthly", 0.5)),
  ];

  return [...staticRoutes, ...detailRoutes];
}
