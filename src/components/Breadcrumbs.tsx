import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {i === items.length - 1 ? (
              <span className="font-semibold text-ink">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-accent">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
