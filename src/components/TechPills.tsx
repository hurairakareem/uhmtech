import { TechLogo } from "@/components/TechLogo";
import { resolveTech } from "@/content/technologies";

export function TechPills({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => {
        const tech = resolveTech(item);
        return (
          <li
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-semibold text-ink"
          >
            {tech ? <TechLogo slug={tech.slug} name={tech.name} size={18} compact /> : null}
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function TechList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2.5 text-sm text-muted">
      {items.map((item) => {
        const tech = resolveTech(item);
        return (
          <li key={item} className="flex items-center gap-2.5 text-ink">
            {tech ? <TechLogo slug={tech.slug} name={tech.name} size={18} compact /> : null}
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
