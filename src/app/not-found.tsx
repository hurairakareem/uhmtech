import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-xl py-24 text-center">
      <p className="eyebrow justify-center">404</p>
      <h1 className="mt-4 text-4xl font-extrabold">This page is not in the sitemap</h1>
      <p className="mx-auto mt-4 max-w-lg text-muted">
        The link may be outdated. Try the services index or send a note through the contact form.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact
        </Link>
      </div>
    </section>
  );
}
