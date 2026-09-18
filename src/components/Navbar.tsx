"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLink } from "@/components/Brand";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getNavServices } from "@/content/services";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", mega: true },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/technologies", label: "Tech" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const services = getNavServices();

  useEffect(() => {
    setOpen(false);
    setMega(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);


  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="container-xl site-header-inner">
        <BrandLink className="mr-8" />

        <nav className="site-nav" aria-label="Primary">
          {links.map((link) =>
            link.mega ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-2 text-sm font-semibold ${
                    pathname.startsWith("/services") ? "text-accent" : "text-ink/80 hover:text-accent"
                  }`}
                  aria-expanded={mega}
                  aria-haspopup="true"
                >
                  Services
                </Link>
                {mega ? (
                  <div className="absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/3 pt-3">
                    <div className="mega-panel grid grid-cols-2 gap-2 rounded-2xl border border-line p-4 shadow-2xl">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 rounded-xl p-3 hover:bg-paper"
                        >
                          <ServiceIcon slug={s.slug} />
                          <span className="text-sm font-bold">{s.shortName ?? s.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold ${
                  pathname === link.href ? "text-accent" : "text-ink/80 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="menu-toggle lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-menu border-t border-line lg:hidden">
          <nav className="container-xl mobile-nav lg:hidden" aria-label="Mobile">
            {links.map((link) =>
              link.mega ? (
                <div key={link.href} className="rounded-xl">
                  <Link
                    href={link.href}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left font-semibold text-ink"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services-menu"
                    onClick={(event) => {
                      if (window.innerWidth < 1024) {
                        event.preventDefault();
                        setMobileServicesOpen((value) => !value);
                      }
                    }}
                  >
                    <span>{link.label}</span>
                  </Link>

                  {mobileServicesOpen ? (
                    <div id="mobile-services-menu" className="mt-1 space-y-1 pl-3">
                      {services.map((s) => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="block rounded-xl px-3 py-2 text-sm">
                          {s.shortName ?? s.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="rounded-xl px-3 py-2 font-semibold">
                  {link.label}
                </Link>
              ),
            )}

          </nav>
        </div>
      ) : null}
    </header>
  );
}
