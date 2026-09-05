import { technologies } from "@/content/technologies";

export function LogoCloud() {
  const featured = technologies.filter((t) =>
    ["zoho", "hubspot", "salesforce", "odoo", "react", "nodejs", "nextjs", "python"].includes(t.slug),
  );
  return (
    <section className="logo-marquee border-y border-line bg-paper/70" aria-label="Technology stack">
      <div className="container-xl py-7">
        <div className="flex items-center gap-6 overflow-hidden">
          <p className="hidden shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-accent sm:block">
            Our stack
          </p>
          <div className="logo-marquee-window min-w-0 flex-1 overflow-hidden">
            <div className="logo-track flex w-max items-center gap-3">
              {[...featured, ...featured].map((technology, index) => (
                <span
                  key={`${technology.slug}-${index}`}
                  className="logo-pill shrink-0 border border-line bg-[var(--surface)] px-5 py-3 text-sm font-bold text-ink"
                >
                  {technology.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
