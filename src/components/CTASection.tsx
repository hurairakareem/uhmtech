import { Cta } from "@/components/Cta";

export function CTASection({
  title,
  text,
  primary = { href: "/contact", label: "Book a Consultation" },
  secondary,
  dark = true,
}: {
  title: string;
  text: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  dark?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-navy text-white" : "bg-paper"}`}>
      {dark ? <div className="circuit pointer-events-none absolute inset-0 opacity-60" /> : null}
      <div className="container-xl relative py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-3xl font-extrabold tracking-tight md:text-4xl ${dark ? "" : "text-ink"}`}>
            {title}
          </h2>
          <p className={`mt-4 text-base md:text-lg ${dark ? "text-white/75" : "text-muted"}`}>{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta href={primary.href} variant={dark ? "primary" : "primary"}>
              {primary.label}
            </Cta>
            {secondary ? (
              <Cta href={secondary.href} variant={dark ? "ghost" : "secondary"}>
                {secondary.label}
              </Cta>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
