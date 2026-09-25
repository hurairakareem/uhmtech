import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import { TechLogo } from "@/components/TechLogo";
import { getTechnology, serviceBrandLogo, serviceTechLogos } from "@/content/technologies";
import type { ServiceItem } from "@/content/services";

export function ServiceMark({ slug }: { slug: string; name?: string }) {
  const brandSlug = serviceBrandLogo[slug];
  const brand = brandSlug ? getTechnology(brandSlug) : undefined;
  if (brand) return <TechLogo slug={brand.slug} name={brand.name} />;
  return <ServiceIcon slug={slug} />;
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  const logos = serviceTechLogos[service.slug] ?? [];

  return (
    <Link href={`/services/${service.slug}`} className="service-card card group block h-full px-6 py-6 sm:p-7">
      <div className="flex items-center gap-4">
        <ServiceMark slug={service.slug} name={service.shortName ?? service.name} />
        <h3 className="text-lg font-bold leading-snug">{service.shortName ?? service.name}</h3>
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">{service.summary}</p>
      {logos.length ? (
        <div className="mt-5 flex flex-wrap items-center gap-2" aria-label="Related technologies">
          {logos.map((logoSlug) => {
            const tech = getTechnology(logoSlug);
            return <TechLogo key={logoSlug} slug={logoSlug} name={tech?.name ?? logoSlug} size={20} compact />;
          })}
        </div>
      ) : null}
      <span className="mt-6 inline-flex items-center text-sm font-bold text-accent">
        Learn more
        <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </Link>
  );
}

export function ServiceGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
