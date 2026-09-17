import { processSteps } from "@/content/company";

export function Process() {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <li key={step.id} className="card px-7 py-7">
          <p className="text-sm font-extrabold text-accent">{step.id}</p>
          <h3 className="mt-3 font-bold">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
