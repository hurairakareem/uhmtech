import { Cta } from "@/components/Cta";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { serviceContactHref, type ServiceItem } from "@/content/services";

export function ServiceProblem({ service }: { service: ServiceItem }) {
  if (!service.problem && !service.solution) return null;
  return (
    <section className="container-xl grid gap-6 py-16 lg:grid-cols-2">
      {service.problem ? (
        <article className="card card-static px-7 py-8">
          <h2 className="text-2xl font-extrabold">The problem</h2>
          <p className="mt-4 leading-7 text-muted">{service.problem}</p>
        </article>
      ) : null}
      {service.solution ? (
        <article className="card card-static px-7 py-8">
          <h2 className="text-2xl font-extrabold">The UHM Tech approach</h2>
          <p className="mt-4 leading-7 text-muted">{service.solution}</p>
        </article>
      ) : null}
    </section>
  );
}

export function ServiceStory({ service }: { service: ServiceItem }) {
  const contactHref = serviceContactHref(service);
  if (!service.workflow?.length && !service.deliverables?.length && !service.engagement?.length && !service.ctaLabel) {
    return null;
  }

  return (
    <>
      {service.workflow?.length ? (
        <section className="bg-paper py-16">
          <div className="container-xl">
            <h2 className="text-2xl font-extrabold">How the work flows</h2>
            <p className="mt-3 max-w-2xl text-muted">A simple view of the path — not a claim that every engagement looks identical.</p>
            <div className="mt-8">
              <WorkflowDiagram steps={service.workflow} />
            </div>
          </div>
        </section>
      ) : null}

      {service.deliverables?.length || service.benefits?.length ? (
        <section className="container-xl grid gap-6 py-16 lg:grid-cols-2">
          {service.deliverables?.length ? (
            <article className="card card-static px-7 py-8">
              <h2 className="text-2xl font-extrabold">Deliverables</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ) : null}
          {service.benefits?.length ? (
            <article className="card card-static px-7 py-8">
              <h2 className="text-2xl font-extrabold">Benefits</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {service.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ) : null}
        </section>
      ) : null}

      {service.engagement?.length ? (
        <section className="bg-paper py-16">
          <div className="container-xl">
            <h2 className="text-2xl font-extrabold">How the engagement works</h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {service.engagement.map((step, index) => (
                <li key={step.title} className="card card-static px-7 py-7">
                  <p className="text-sm font-extrabold text-accent">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {service.ctaLabel ? (
        <section className="container-xl flex flex-wrap items-center justify-between gap-4 py-10">
          <p className="max-w-xl text-muted">If this is the work you need, start with a conversation. We will confirm fit before any review or build begins.</p>
          <div className="flex flex-wrap gap-3">
            <Cta href="/contact?service=Book%20a%20Technology%20Consultation">Book a Technology Consultation</Cta>
            <Cta href={contactHref} variant="secondary">
              {service.ctaLabel}
            </Cta>
          </div>
        </section>
      ) : null}
    </>
  );
}
