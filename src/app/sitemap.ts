import { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { caseStudies } from "@/content/caseStudies";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/industries",
    "/products",
    "/case-studies",
    "/technologies",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const extra = [
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...products.map((p) => `/products/${p.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ...blogPosts.map((b) => `/blog/${b.slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...extra];
}
