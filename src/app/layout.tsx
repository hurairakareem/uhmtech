import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { siteConfig } from "@/content/site";
import { publicSiteOrigin } from "@/lib/site-origin";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#082f6b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteOrigin()),
  title: {
    default: "CRM, Automation & Software Development in Lahore, Pakistan",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "UHM Tech helps businesses in Lahore and across Pakistan implement CRM, automate business processes, integrate systems, and build custom software and SaaS products.",
  alternates: { canonical: "/" },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: publicSiteOrigin(),
    siteName: siteConfig.name,
    title: "CRM, Automation & Custom Software | UHM Tech",
    description:
      "Lahore-based technology partner for CRM implementation, business automation, system integration, and custom software.",
    images: [{ url: "/brand/New_logo.png", alt: `${siteConfig.name} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM, Automation & Custom Software | UHM Tech",
    description:
      "Lahore-based technology partner for CRM implementation, business automation, system integration, and custom software.",
    images: ["/brand/New_logo.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/brand/New_logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${plusJakarta.className}`}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
:root{--navy:#082f6b;--navy-2:#0d4f9e;--ink:#102a4a;--accent:#0b63ce;--accent-2:#287fe3;--cyan:#70c7ff;--line:#d5e3f2;--muted:#60758c;--paper:#f4f8fc;--white:#fff}
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0}
body{background:#fff;color:var(--ink);font-family:var(--font-plus-jakarta),ui-sans-serif,system-ui,sans-serif}
a{color:inherit;text-decoration:none}
img{max-width:100%;height:auto}
.skip-link{position:absolute;left:-999px;top:0;z-index:100;padding:.6rem 1rem;background:#fff;font-weight:700}
.skip-link:focus{left:1rem;top:1rem}
.site-header{position:sticky;top:0;z-index:50;border-bottom:1px solid var(--line);background:color-mix(in srgb,var(--white) 94%,transparent)}
.site-header-inner{display:flex;height:4.5rem;align-items:center;justify-content:space-between;gap:1rem}
.brand{display:inline-flex;align-items:center;height:3.75rem;overflow:hidden}
.brand-logo,.site-header .brand img{display:block!important;height:3.75rem!important;width:auto!important;max-width:none!important;max-height:3.75rem!important;object-fit:contain}
.site-nav{display:none;align-items:center;gap:.15rem}
.site-nav a{border-radius:999px;padding:.5rem .75rem;font-size:.875rem;font-weight:600}
.header-actions{display:flex;align-items:center;gap:.5rem}
.header-actions .btn-primary{min-height:2.75rem;padding:.65rem 1rem;white-space:nowrap}
.menu-toggle{display:inline-flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;border:1px solid var(--line);border-radius:.75rem;background:var(--white);color:var(--ink)}
.mobile-nav{display:flex;flex-direction:column;gap:.25rem;border-top:1px solid var(--line);padding:1rem 0;background:var(--white);color:var(--ink)}
@media(min-width:1024px){.site-nav{display:flex}.menu-toggle,.mobile-nav{display:none}}
.container-xl{width:min(1180px,calc(100% - 2rem));margin-inline:auto}
.eyebrow{display:inline-flex;font-size:.75rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--cyan)}
.btn{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;padding:.85rem 1.35rem;font-weight:700;cursor:pointer}
.btn-primary{background:var(--accent);color:#fff}
.btn-secondary{background:#fff;color:var(--ink);border:1px solid var(--line)}
.btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.25)}
.card{display:block;border:1px solid var(--line);border-radius:.75rem;background:var(--white);color:var(--ink)}
.site-footer{background:var(--navy);color:#fff}
.site-footer-grid{display:grid;gap:2.5rem;padding:3.5rem 0}
.hero{position:relative;overflow:hidden;background:var(--paper);color:var(--ink)}
.hero-grid{display:grid;align-items:center;gap:3rem;padding:4rem 0}
.hero h1{font-size:clamp(2rem,5vw,3.6rem);line-height:1.08;margin:1rem 0 0;font-weight:800}
@media(min-width:1024px){.hero-grid{grid-template-columns:1.05fr .95fr;padding:6rem 0}.site-footer-grid{grid-template-columns:1.6fr 1fr 1fr 1fr 1fr}}
            `,
          }}
        />
        <link rel="stylesheet" href="/critical.css" />
      </head>
      <body className={`${plusJakarta.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]),
          }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
