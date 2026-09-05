import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";
import type { Industry } from "@/content/industries";
import type { Product } from "@/content/products";
import type { BlogPost } from "@/content/blog";
import { formatDate } from "@/lib/utils";

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
      <p className="text-xs font-bold uppercase tracking-widest text-accent">{product.category}</p>
      <h3 className="mt-3 text-lg font-bold leading-snug">{product.name}</h3>
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
