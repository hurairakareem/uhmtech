"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { BrandLink } from "@/components/Brand";
import { getNavServiceGroups } from "@/content/services";

const resources = [
  { href: "/case-studies", label: "Case studies" },
  { href: "/blog", label: "Insights" },
  { href: "/technologies", label: "Technology partners" },
];

const companyLinks = [
  { href: "/industries", label: "Industries we serve" },
];

function NavGroup({
  label,
  href,
  links,
  groups,
  onNavigate,
}: {
  label: string;
  href?: string;
  links: { href: string; label: string }[];
  groups?: { title: string; links: { href: string; label: string }[] }[];
  onNavigate?: () => void;
}) {
  const hasGroups = Boolean(groups?.length);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeDropdown = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
    onNavigate?.();
  };

  return (
    <details
      ref={detailsRef}
      className={`nav-group${hasGroups ? " nav-group-services" : ""}`}
      onMouseLeave={(event) => {
        event.currentTarget.open = false;
      }}
    >
      <summary>
        {label}
        <ChevronDown size={14} aria-hidden="true" />
      </summary>
      <div className={`nav-group-menu${hasGroups ? " nav-group-menu-services" : ""}`}>
        {href ? (
          <Link className="nav-group-all" href={href} onClick={closeDropdown}>
            View all {label.toLowerCase()}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        ) : null}
        {groups?.length ? (
          <div className="nav-service-groups">
            {groups.map((group) => (
              <section className="nav-service-group" key={group.title}>
                <h2>{group.title}</h2>
                <div className="nav-service-links">
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} onClick={closeDropdown}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          links.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeDropdown}>
              {link.label}
            </Link>
          ))
        )}
      </div>
    </details>
  );
}

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const serviceGroups = getNavServiceGroups();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMobileMenu = () => setOpen(false);

  return (
    <header className={`site-header${overlay ? " site-header-hero" : ""}`}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="container-xl site-header-inner">
        <BrandLink className="site-header-brand" />

        <nav className="site-nav" aria-label="Primary">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          <Link href="/about" aria-current={pathname.startsWith("/about") ? "page" : undefined}>
            About
          </Link>
          <NavGroup label="Services" href="/services" links={[]} groups={serviceGroups} />
          <Link href="/solutions" aria-current={pathname.startsWith("/solutions") ? "page" : undefined}>
            Solutions
          </Link>
          <Link href="/products" aria-current={pathname.startsWith("/products") ? "page" : undefined}>
            Products
          </Link>
          <NavGroup label="Resources" links={resources} />
          <NavGroup label="Company" links={companyLinks} />
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary header-contact">
            Contact us <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="menu-toggle lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-navigation" className="mobile-menu border-t border-line lg:hidden">
          <nav className="container-xl mobile-nav lg:hidden" aria-label="Mobile">
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={closeMobileMenu}>
              Home
            </Link>
            <Link href="/about" aria-current={pathname.startsWith("/about") ? "page" : undefined} onClick={closeMobileMenu}>
              About
            </Link>
            <NavGroup label="Services" href="/services" links={[]} groups={serviceGroups} onNavigate={closeMobileMenu} />
            <Link href="/solutions" onClick={closeMobileMenu}>Solutions</Link>
            <Link href="/products" onClick={closeMobileMenu}>Products</Link>
            <NavGroup label="Resources" links={resources} onNavigate={closeMobileMenu} />
            <NavGroup label="Company" links={companyLinks} onNavigate={closeMobileMenu} />
            <Link href="/contact" className="btn btn-primary mobile-contact" onClick={closeMobileMenu}>
              Contact us <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
