import { PageHero } from "@/components/PageHero";

export default function Loading() {
  return (
    <>
      <PageHero
        eyebrow="Please wait"
        title="Loading this page"
        description="We are getting the information ready for you."
        crumbs={[{ name: "Home", href: "/" }, { name: "Loading", href: "/" }]}
      />
      <div className="container-xl min-h-40 py-12" role="status" aria-live="polite">
        <p className="text-sm font-semibold text-muted">Loading…</p>
      </div>
    </>
  );
}
