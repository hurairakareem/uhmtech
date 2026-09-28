export function WorkflowDiagram({
  title,
  steps,
}: {
  title?: string;
  steps: string[];
}) {
  if (!steps.length) return null;

  return (
    <figure className="workflow-diagram">
      {title ? <figcaption className="workflow-diagram-title">{title}</figcaption> : null}
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span className="workflow-step">
              <small>{String(index + 1).padStart(2, "0")}</small>
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="workflow-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
