import { MetadataRoute } from "next";
import { publicSiteOrigin } from "@/lib/site-origin";

export default function robots(): MetadataRoute.Robots {
  const origin = publicSiteOrigin();
  const privatePaths = ["/uhm-console", "/admin-portal", "/employee-portal", "/api/admin", "/api/portal"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: privatePaths,
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
