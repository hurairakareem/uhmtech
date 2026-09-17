import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";
import type { Industry } from "@/content/industries";
import type { Product } from "@/content/products";
import type { BlogPost } from "@/content/blog";
import { formatDate } from "@/lib/utils";

function ProductIcon({ slug }: { slug: string }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (slug) {
    case "operations-console":
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="16" height="14" rx="2.5" />
          <path d="M8 9.5h8M8 13h5" />
        </svg>
      );
    case "lifecycle-crm-kit":
      return (
        <svg {...commonProps}>
          <path d="M5 18V7.5A1.5 1.5 0 0 1 6.5 6H17.5A1.5 1.5 0 0 1 19 7.5V18" />
          <path d="M8 10h8M8 14h8M10 6l1.2-2h1.6L14 6" />
        </svg>
      );
    case "assist-desk":
      return (
        <svg {...commonProps}>
          <path d="M5 8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5v7A2.5 2.5 0 0 1 16.5 18h-9A2.5 2.5 0 0 1 5 15.5v-7Z" />
          <path d="M8 10h8M8 13.5h5" />
        </svg>
      );
    case "flowline":
      return (
        <svg {...commonProps}>
          <path d="M6 7.5h12M6 16.5h12M7.5 7.5v9M16.5 7.5v9" />
          <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "signal-ai":
      return (
        <svg {...commonProps}>
          <path d="M7 17 12 7l5 10" />
          <path d="M9.5 13.5h5" />
          <path d="M12 4v-1.5M12 20v-1.5" />
        </svg>
      );
    case "portal-hub":
      return (
        <svg {...commonProps}>
          <path d="M5 8.5h14M5 15.5h14M8 5.5v13M16 5.5v13" />
        </svg>
      );
    case "schedule-desk":
      return (
        <svg {...commonProps}>
          <rect x="5" y="6" width="14" height="13" rx="2" />
          <path d="M8 4.5v3M16 4.5v3M5 10h14" />
        </svg>
      );
    case "ledger-link":
      return (
        <svg {...commonProps}>
          <path d="M5 7.5h14M5 12h14M5 16.5h9" />
          <path d="M17 16.5h2" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link href={`/industries/${industry.slug}`} className="card block px-7 py-8 text-ink">
      <h3 className="text-lg font-bold leading-snug">{industry.name}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{industry.summary}</p>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="card group block px-6 py-7 sm:px-7 sm:py-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper text-accent">
          <ProductIcon slug={product.slug} />
        </span>
        <p className="text-xs font-bold uppercase tracking-widest text-accent">{product.category}</p>
      </div>
      <h3 className="text-lg font-bold leading-snug">{product.name}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{product.summary}</p>
      <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs font-bold uppercase tracking-widest text-muted">
        <span>{product.status.replace("-", " ")}</span>
        <span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
      </div>
    </Link>
  );
}

export function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <Link href={`/case-studies/${item.slug}`} className="card work-card block p-6 sm:p-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-accent">{item.industry}</p>
        <h3 className="mt-5 text-2xl font-bold leading-tight">{item.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
      </div>
      <span className="mt-8 inline-flex items-center text-sm font-bold text-accent">Read project profile <span className="ml-2">↗</span></span>
    </Link>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card block overflow-hidden">
      <div className="h-28 bg-[linear-gradient(120deg,#0b1f45,#1a6dff)]" aria-hidden="true" />
      <div className="px-7 py-7">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">{post.category}</p>
        <h3 className="mt-3 text-lg font-bold leading-snug">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{post.description}</p>
        <p className="mt-5 text-xs text-muted">{formatDate(post.publishedAt)}</p>
      </div>
    </Link>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  placeholder,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  placeholder?: boolean;
}) {
  return (
    <figure className="card px-7 py-8">
      <div className="text-accent" aria-label="5 star rating">
        ★★★★★
      </div>
      {placeholder ? (
        <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-muted">Placeholder until approved</p>
      ) : null}
      <blockquote className="mt-3 text-sm leading-6 text-ink/90">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-bold">{name}</span>
        <span className="block text-muted">
          {role}, {company}
        </span>
      </figcaption>
    </figure>
  );
}
