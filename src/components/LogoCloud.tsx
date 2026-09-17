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

function TechIcon({ slug }: { slug: string }) {
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
    case "odoo":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M12 3.4c-3.7 0-6.6 2.9-6.6 6.6 0 3.7 2.9 6.6 6.6 6.6 3.7 0 6.6-2.9 6.6-6.6 0-3.7-2.9-6.6-6.6-6.6Zm0 3.2c1.9 0 3.4 1.5 3.4 3.4S13.9 13.4 12 13.4 8.6 11.9 8.6 10 10.1 6.6 12 6.6Z" />
        </svg>
      );
    case "react":
      return (
        <svg {...commonProps} className="tech-svg">
          <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
          <path d="M12 2.5v4.4M12 17.1v4.4M4.2 7l3.1 1.8M16.7 15.2l3.1 1.8M4.2 17l3.1-1.8M16.7 8.8l3.1-1.8M7.1 5.8c1.6-1 3.2-1.5 4.9-1.5s3.3.5 4.9 1.5M7.1 18.2c1.6 1 3.2 1.5 4.9 1.5s3.3-.5 4.9-1.5" />
        </svg>
      );
    case "nextjs":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M5 18V6l9 12V6" />
          <path d="M19 6v12" />
        </svg>
      );
    case "javascript":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M7 5.5h10v13H7z" />
          <path d="M10 9.2h4v1.6h-2.1v3.2H10Z" />
        </svg>
      );
    case "typescript":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M7 5.5h10v13H7z" />
          <path d="M10 9.2h4M10 12h4M10 14.8h2.8" />
        </svg>
      );
    case "nodejs":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M12 3.5 5 7.2v9.6l7 3.7 7-3.7V7.2l-7-3.7Z" />
          <path d="M12 8v8M8.5 10.5l7 3M15.5 10.5l-7 3" />
        </svg>
      );
    case "express":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M5 6.5h14M5 17.5h10M7.5 6.5v11M16.5 6.5v11" />
          <path d="M9.5 10.5h5v3h-5z" />
        </svg>
      );
    case "python":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M8 4.5h6.8c1.5 0 2.7 1.2 2.7 2.7v4.3c0 1.5-1.2 2.7-2.7 2.7H13v2.8H9.7v-2.8H8c-1.5 0-2.7-1.2-2.7-2.7V7.2c0-1.5 1.2-2.7 2.7-2.7Z" />
          <path d="M9 9.5h6M9 14.5h6" />
        </svg>
      );
    case "postgresql":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M8.5 4.6h6.8a3.2 3.2 0 0 1 3.2 3.2v6.4a3.2 3.2 0 0 1-3.2 3.2H8.5A3.2 3.2 0 0 1 5.3 14.2V7.8a3.2 3.2 0 0 1 3.2-3.2Z" />
          <path d="M9 8.2h5.5M9 12h5.5M10.8 6v12" />
        </svg>
      );
    case "redis":
      return (
        <svg {...commonProps} className="tech-svg">
          <circle cx="12" cy="12" r="7" />
          <path d="M12 5v14M5 12h14" />
          <path d="M8 8.5c1.2 1 2 2.2 2 3.5s-.8 2.5-2 3.5M16 8.5c-1.2 1-2 2.2-2 3.5s.8 2.5 2 3.5" />
        </svg>
      );
    case "docker":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M5 15.5h14M7.8 9.5h2.7V7h2.7v2.5h2.7V12H7.8zM7 15.5h10" />
        </svg>
      );
    case "aws":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M7 10.5h10M7 13.5h10M10 7l-3 10M14 7l3 10" />
        </svg>
      );
    case "zoho":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M6 12h12M12 6v12" />
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
    case "hubspot":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M8 16.5c0-2.2 1.8-4 4-4s4 1.8 4 4" />
          <path d="M8 8.8a2.8 2.8 0 1 1 5.6 0v1.4H8z" />
        </svg>
      );
    case "salesforce":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M8.2 15.5c-.9-1.1-1.2-2.4-1.1-3.7.2-2.1 1.9-3.8 4.1-4.3 1.4-.3 2.8.1 3.9.8 1-1.5 2.8-2.4 4.8-2.2 2.1.2 3.6 1.9 3.6 4 0 1.7-1 3.2-2.5 3.8C17.4 14.9 14.8 16 12 16c-1.6 0-3.2-.4-4.6-1.3Z" />
        </svg>
      );
    case "mongodb":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M12 3.5c2.5 0 4.5 2.1 4.5 4.7v8.5c0 2.4-2 4.3-4.5 4.3s-4.5-1.9-4.5-4.3V8.2c0-2.6 2-4.7 4.5-4.7Z" />
          <path d="M12 8v8M9 10.5h6" />
        </svg>
      );
    case "stripe":
      return (
        <svg {...commonProps} className="tech-svg">
          <path d="M6 14.5c0-1.5 1.2-2.8 2.8-2.8h6.4c1.6 0 2.8-1.2 2.8-2.9 0-1.8-1.5-3.3-3.3-3.3H9.4C7.4 5.5 6 7 6 9c0 2 1.8 3.3 4 3.3h4.3" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps} className="tech-svg">
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
}

export function LogoCloud() {
  const featured = technologies.filter((t) => techList.includes(t.slug));
  const repeated = [...featured, ...featured];

  return (
    <section className="logo-marquee border-y border-line bg-paper/70" aria-label="Technology stack">
      <div className="container-xl py-7">
        <div className="flex items-center gap-6 overflow-hidden">
          <p className="hidden shrink-0 text-sm font-extrabold uppercase tracking-[0.18em] text-[#0e7a6c] sm:block">
            Our stack
          </p>
          <div className="logo-marquee-window min-w-0 flex-1 overflow-hidden">
            <div className="logo-track flex w-max items-center gap-3">
              {repeated.map((technology, index) => (
                <span
                  key={`${technology.slug}-${index}`}
                  className="logo-pill shrink-0 border border-line bg-[var(--surface)] px-4 py-2.5 text-sm font-bold leading-none text-ink"
                >
                  <span className="tech-icon">
                    <TechIcon slug={technology.slug} />
                  </span>
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
