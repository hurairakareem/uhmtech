import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/Cards";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { blogPosts, getPost, getRelatedPosts } from "@/content/blog";
import { createMetadata } from "@/lib/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl, formatDate } from "@/lib/utils";
import { siteConfig } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.slug);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];
  const share = encodeURIComponent(absoluteUrl(`/blog/${post.slug}`));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          url: absoluteUrl(`/blog/${post.slug}`),
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
        })}
      />
      <PageHero eyebrow={post.category} title={post.title} description={post.description} crumbs={crumbs} />
      <article className="container-xl grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div>
          <p className="text-sm text-muted">
            {post.author} · {formatDate(post.publishedAt)}
          </p>
          <nav aria-label="Table of contents" className="mt-6 rounded-2xl border border-line bg-paper p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-muted">On this page</p>
            <ol className="mt-3 space-y-2 text-sm">
              {post.content
                .filter((b) => b.heading)
                .map((b) => (
                  <li key={b.heading}>
                    <a className="text-accent" href={`#${slugify(b.heading!)}`}>
                      {b.heading}
                    </a>
                  </li>
                ))}
            </ol>
          </nav>
          <div className="mt-10 space-y-8">
            {post.content.map((block, i) => (
              <section key={block.heading ?? i} id={block.heading ? slugify(block.heading) : undefined}>
                {block.heading ? <h2 className="text-2xl font-extrabold">{block.heading}</h2> : null}
                {block.paragraphs.map((p) => (
                  <p key={p} className="mt-4 leading-7 text-muted">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
        <aside className="h-fit card p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-muted">Share</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${share}`} rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`https://twitter.com/intent/tweet?url=${share}&text=${encodeURIComponent(post.title)}`} rel="noreferrer" target="_blank">
                X / Twitter
              </a>
            </li>
            <li>
              <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${share}`}>Email</a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-muted">Tags: {post.tags.join(", ")}</p>
          <p className="mt-4 text-xs text-muted">{siteConfig.name}</p>
        </aside>
      </article>
      {related.length ? (
        <section className="bg-paper py-16">
          <div className="container-xl">
            <h2 className="text-2xl font-extrabold">Related articles</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
            <p className="mt-8">
              <Link href="/blog" className="font-bold text-accent">
                All articles
              </Link>
            </p>
          </div>
        </section>
      ) : null}
    </>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
