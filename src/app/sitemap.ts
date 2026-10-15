import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { caseStudies } from "@/content/caseStudies";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
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
    page("/blog"),
    page("/case-studies"),
    page("/services"),
    page("/products"),
    page("/solutions"),
    page("/industries"),
    page("/technologies"),
    page("/contact"),
    page("/privacy"),
    page("/terms"),
    page("/cookies"),
  ];

  const detailRoutes = [
    ...blogPosts.map((post) => page(`/blog/${post.slug}`, new Date(post.updatedAt ?? post.publishedAt))),
    ...caseStudies.map((study) => page(`/case-studies/${study.slug}`)),
    ...services.map((s) => page(`/services/${s.slug}`)),
    ...industries.map((i) => page(`/industries/${i.slug}`)),
    ...products.map((product) => page(`/products/${product.slug}`)),
  ];

  return [...staticRoutes, ...detailRoutes];
}
