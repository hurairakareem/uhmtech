import { BlogCard } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { blogCategories, blogPosts } from "@/content/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Technology, Automation & CRM Insights",
  description:
    "Insights from UHM Tech on business automation, CRM, SaaS, AI, software development, and digital transformation.",
  path: "/blog",
});

export default function BlogPage() {
  const postsByDate = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Notes on systems that companies actually run"
        description="Articles are content records with SEO titles, categories, tags, and related posts. Add a new file entry to publish."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <section className="container-xl py-16">
        <p className="text-sm text-muted">
          {postsByDate.length} articles · Categories: {blogCategories.join(" · ")}
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {postsByDate.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
