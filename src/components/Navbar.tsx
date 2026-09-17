"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getNavServices } from "@/content/services";
import { siteConfig } from "@/content/site";

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
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const services = getNavServices();

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("uhm-theme") as "light" | "dark" | null;
    const preferredTheme = savedTheme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("uhm-theme", theme);
  }, [theme]);

  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="container-xl site-header-inner">
        <Link href="/" className="brand mr-8" aria-label={`${siteConfig.name} home`}>
          <Image src="/brand/uhm-logo-transparent.png" alt="" width={44} height={44} className="brand-logo h-10 w-10 object-contain" priority />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-tight text-ink">UHM</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Tech</span>
          </span>
        </Link>

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
          <div className="theme-switcher hidden sm:inline-flex" role="tablist" aria-label="Color theme">
            <button type="button" role="tab" aria-selected={theme === "light"} onClick={() => setTheme("light")}>
              Light
            </button>
            <button type="button" role="tab" aria-selected={theme === "dark"} onClick={() => setTheme("dark")}>
              Dark
            </button>
          </div>
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
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl px-3 py-2 font-semibold">
                {link.label}
              </Link>
            ))}
            <p className="mt-3 px-3 text-xs font-bold uppercase tracking-widest text-muted">Services</p>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-xl px-3 py-2 text-sm">
                {s.shortName ?? s.name}
              </Link>
            ))}
            <div className="theme-switcher mt-3 self-start" role="tablist" aria-label="Color theme">
              <button type="button" role="tab" aria-selected={theme === "light"} onClick={() => setTheme("light")}>
                Light
              </button>
              <button type="button" role="tab" aria-selected={theme === "dark"} onClick={() => setTheme("dark")}>
                Dark
              </button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
