import { Cta } from "@/components/Cta";

export function Hero() {
  return (
    <section className="hero relative overflow-hidden">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-xl hero-grid relative items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="rise">
          <div className="hero-rule" aria-hidden="true" />
          <p className="eyebrow mt-6">UHM Technologies</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight md:text-5xl lg:text-6xl">
            Digital systems that make ambitious businesses easier to run.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg">
            We design the automation, software, CRM, and customer operations behind modern companies. Practical strategy, careful engineering, and systems built to keep moving.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href="/contact">Start a Project</Cta>
            <Cta href="/case-studies" variant="secondary">
              View Selected Work
            </Cta>
          </div>
          <p className="mt-8 text-sm font-semibold text-ink/60">
            Automation <span className="mx-2 text-accent">/</span> CRM <span className="mx-2 text-accent">/</span> Product engineering <span className="mx-2 text-accent">/</span> AI
          </p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

const capabilities = [
  { label: "Automation", detail: "Workflows & handoffs" },
  { label: "CRM", detail: "Zoho · HubSpot · Salesforce" },
  { label: "Software", detail: "Web, mobile & SaaS" },
  { label: "Support", detail: "Call, chat & email" },
];

const flow = [
  "A customer inquiry arrives from the website, phone, or chat.",
  "It is captured in CRM and assigned to the right owner.",
  "Automation updates the record, notifies the team, and starts the next step.",
];

function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="border border-ink/10 bg-white p-3 shadow-xl sm:p-4">
        <div className="bg-navy p-5 text-white sm:p-7">
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">UHM / Operating view</p>
            <span className="h-2 w-2 rounded-full bg-cyan" />
          </div>
          <p className="mt-6 text-2xl font-extrabold tracking-tight">One connected picture of the work.</p>
          <p className="mt-3 text-sm leading-6 text-white/65">The right systems remove friction between people, process, and the customer.</p>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
            {capabilities.map((item) => (
              <div key={item.label} className="border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-sm font-bold">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-white/55">{item.detail}</p>
              </div>
            ))}
          </div>
          <ol className="mt-5 space-y-2">
            {flow.map((row, i) => (
              <li key={row} className="flex gap-3 border-b border-white/10 px-1 py-2.5 last:border-0">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/25 text-[11px] font-bold text-cyan">
                  {i + 1}
                </span>
                <span className="text-sm leading-5 text-white/85">{row}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
