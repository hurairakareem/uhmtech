import { MetadataRoute } from "next";
import { publicSiteOrigin } from "@/lib/site-origin";

export default function robots(): MetadataRoute.Robots {
  const origin = publicSiteOrigin();

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
