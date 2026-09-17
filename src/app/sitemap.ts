import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { caseStudies } from "@/content/caseStudies";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticPages: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/solutions", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { path: "/products", priority: 0.8, changeFrequency: "weekly" },
    { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
    { path: "/technologies", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...productRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ];
}
