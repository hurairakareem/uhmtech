import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/uhm-console", "/uhm-console/", "/api/admin"] },
    ],
    sitemap: `${siteConfig.url.replace(/\/$/, "")}/sitemap.xml`,
  };
}
