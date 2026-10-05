import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/Cta";
import { HeroServiceVisual } from "@/components/HeroServiceVisual";

const serviceShortcuts = [
  { href: "/services/business-automation", label: "Automate operations" },
  { href: "/services/crm-solutions", label: "Connect your CRM" },
  { href: "/services/software-development", label: "Build custom software" },
];

export function Hero() {
  return (
    <section className="hero home-hero relative overflow-hidden">
      <HeroServiceVisual />
      <div className="container-xl home-hero-content relative">
        <div className="home-hero-copy">
          <p className="home-hero-eyebrow">UHM Tech <span>·</span> Systems that work together</p>
          <h1>CRM, Automation And Software For The Way You Work.</h1>
          <p className="home-hero-description">
            Based in Lahore, Pakistan, UHM Tech connects business systems, automates manual processes, and builds custom software around the way your team works.
          </p>
          <div className="home-hero-actions">
            <Cta href="/contact" className="home-hero-primary">
              Start A Project <ArrowUpRight size={17} aria-hidden="true" />
            </Cta>
            <Link href="/services" className="home-hero-secondary">
              Explore services <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <nav className="home-hero-shortcuts" aria-label="Popular services">
            {serviceShortcuts.map((service) => (
              <Link key={service.href} href={service.href}>
                {service.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="home-hero-bottom" aria-hidden="true">
        <span>CRM & business automation</span>
        <span>Custom software & SaaS</span>
        <span>AI & system integrations</span>
        <span>Customer operations</span>
      </div>
    </section>
  );
}
