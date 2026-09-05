import Image from "next/image";
import Link from "next/link";
import { getNavServices } from "@/content/services";
import { industries } from "@/content/industries";
import { siteConfig } from "@/content/site";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/technologies", label: "Technologies" },
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
      <div className="container-xl site-footer-grid py-16 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/brand/uhm-logo.png" alt={siteConfig.name} width={48} height={48} className="h-12 w-12 rounded-lg bg-white object-contain p-1" />
            <span>
              <span className="block font-extrabold">UHM Technologies</span>
              <span className="text-xs uppercase tracking-[0.16em] text-white/60">Digital transformation</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">{siteConfig.tagline}</p>
          <p className="mt-5 text-sm text-white/70">
            <a className="font-semibold text-cyan hover:text-white" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
          {siteConfig.phone ? <p className="text-sm text-white/70">{siteConfig.phone}</p> : null}
        </div>
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
      </div>
      <div className="border-t border-white/10">
        <div className="container-xl flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {legal.map((l) => (
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
