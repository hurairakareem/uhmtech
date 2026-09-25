import { TechLogo } from "@/components/TechLogo";
import { technologies } from "@/content/technologies";

const techList = [
  "odoo",
  "react",
  "nextjs",
  "javascript",
  "typescript",
  "nodejs",
  "express",
  "python",
  "postgresql",
  "redis",
  "docker",
  "aws",
  "zoho",
  "hubspot",
  "salesforce",
  "mongodb",
  "stripe",
];

export function LogoCloud() {
  const featured = technologies.filter((t) => techList.includes(t.slug));
  const repeated = [...featured, ...featured];

  return (
    <section className="logo-marquee border-y border-line bg-paper/70" aria-label="Technology stack">
      <div className="container-xl py-7">
        <div className="flex items-center gap-6 overflow-hidden">
          <p className="hidden shrink-0 text-sm font-extrabold uppercase tracking-[0.18em] text-accent sm:block">
            Our stack
          </p>
          <div className="logo-marquee-window min-w-0 flex-1 overflow-hidden">
            <div className="logo-track flex w-max items-center gap-3">
              {repeated.map((technology, index) => (
                <span
                  key={`${technology.slug}-${index}`}
                  className="logo-pill shrink-0 border border-line bg-[var(--surface)] px-3 py-2 text-sm font-bold leading-none text-ink"
                >
                  <TechLogo slug={technology.slug} name={technology.name} size={22} compact />
                  <span>{technology.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
