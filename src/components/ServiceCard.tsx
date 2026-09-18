import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { ServiceItem } from "@/content/services";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Link href={`/services/${service.slug}`} className="service-card card group block h-full px-6 py-6 sm:p-7">
      <div className="flex items-center gap-4">
        <ServiceIcon slug={service.slug} />
        <h3 className="text-lg font-bold leading-snug">{service.shortName ?? service.name}</h3>
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">{service.summary}</p>
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
      {services.map((service, index) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
