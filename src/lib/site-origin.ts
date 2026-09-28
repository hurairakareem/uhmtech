export const PRODUCTION_ORIGIN = "https://uhmtech.com";

export function publicSiteOrigin() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_ORIGIN).trim().replace(/\/$/, "");
  try {
    const url = new URL(raw.includes("://") ? raw : `https://${raw}`);
    if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
      return PRODUCTION_ORIGIN;
    }
    return url.origin;
  } catch {
    return PRODUCTION_ORIGIN;
  }
}
