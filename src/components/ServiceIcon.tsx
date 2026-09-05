const paths: Record<string, string> = {
  "business-automation": "M4 12h4l2-6 4 12 2-6h4",
  "crm-solutions": "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0",
  "software-development": "M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12",
  "saas-development": "M4 16a8 8 0 1 1 8 4H6a2 2 0 0 1-2-2Z",
  "call-center-services": "M6 8a6 6 0 0 1 12 0v3a2 2 0 0 1-2 2h-1v2a4 4 0 0 1-8 0",
  "chat-support": "M5 6h14v9H8l-3 3V6Z",
  "email-services": "M4 7h16v10H4V7Zm0 0 8 6 8-6",
  "ai-automation": "M12 3v3M12 18v3M3 12h3M18 12h3M7 7l2 2M15 15l2 2M17 7l-2 2M9 15l-2 2M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
  "api-integrations": "M8 12h8M7 8H5a3 3 0 0 0 0 8h2M17 8h2a3 3 0 0 1 0 8h-2",
  "management-systems": "M4 6h16v4H4V6Zm0 8h7v4H4v-4Zm9 0h7v4h-7v-4Z",
};

export function ServiceIcon({ slug }: { slug: string }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#eaf2ff,#d7e8ff)] text-accent">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d={paths[slug] ?? "M5 12h14"} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
