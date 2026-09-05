import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { ServiceItem } from "@/content/services";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Link href={`/services/${service.slug}`} className="card group block px-7 py-8 sm:p-8">
      <ServiceIcon slug={service.slug} />
      <h3 className="mt-5 text-lg font-bold leading-snug">{service.shortName ?? service.name}</h3>
      <span className="mt-5 inline-flex items-center text-sm font-bold text-accent">
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
