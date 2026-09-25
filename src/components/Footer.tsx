import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { getNavServices } from "@/content/services";
import { industries } from "@/content/industries";
import { siteConfig } from "@/content/site";
import { SocialLinks } from "@/components/SocialLinks";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/technologies", label: "Tech" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container-xl site-footer-grid">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {getNavServices().slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.shortName ?? s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">Solutions</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link href="/solutions" className="hover:text-white">
                All solutions
              </Link>
            </li>
            <li>
              <Link href="/services/saas-development" className="hover:text-white">
                Build your SaaS product
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">Industries</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {industries.slice(0, 6).map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="hover:text-white">
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">Contact Us</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/75">
            <p className="flex items-start gap-2">
              <MapPin size={16} strokeWidth={2} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} strokeWidth={2} className="shrink-0 text-cyan" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} strokeWidth={2} className="shrink-0 text-cyan" aria-hidden="true" />
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </p>
          </address>
          <div className="mt-5">
            <SocialLinks compact />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-xl flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {legal
              .filter((l) => l.href !== "/sitemap.xml")
              .map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
