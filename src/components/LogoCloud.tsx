import { technologies } from "@/content/technologies";

export function LogoCloud() {
  const featured = technologies.filter((t) =>
    ["zoho", "hubspot", "salesforce", "odoo", "react", "nodejs", "nextjs", "python"].includes(t.slug),
  );
  return (
    <section className="border-y border-line bg-paper/70">
      <div className="container-xl py-12">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-muted">
          Technology that powers modern businesses
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted">
          Platforms and engineering tools we commonly work with. Listed as capabilities — not as official partnerships
          unless separately confirmed.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {featured.map((t) => (
            <li key={t.slug} className="rounded-2xl border border-line bg-white px-5 py-5 text-center text-sm font-bold">
              {t.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
