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
  "app-development": "M8 4h8v16H8V4Zm3 14h2",
  "apps-customization": "M5 8h6v6H5V8Zm9-2 3 3-8 8H6v-3l8-8Z",
  "technology-health-check": "M8 5h8a1 1 0 0 1 1 1v13H7V6a1 1 0 0 1 1-1Zm4 5v6m-3-3h6",
  "business-system-integration": "M6 7h4v4H6V7Zm8 0h4v4h-4V7ZM6 13h4v4H6v-4Zm8 0h4v4h-4v-4ZM10 9h4M8 11v2M16 11v2M10 15h4",
  "custom-internal-tools": "M4 6h7v5H4V6Zm9 0h7v12H13V6ZM4 13h7v5H4v-5Z",
  "business-intelligence-dashboards": "M4 19h16M7 16V10m5 6V6m5 10v-4",
  "managed-technology-support": "M12 4a6 6 0 0 1 6 6v3a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-6 0v-1H8a2 2 0 0 1-2-2v-3a6 6 0 0 1 6-6Z",
  "digital-operations-optimization": "M4 8h11M19 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20 16H9M7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
};

export function ServiceIcon({ slug }: { slug: string }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--accent)_18%,var(--line))] bg-[linear-gradient(180deg,rgba(14,122,108,0.08),rgba(14,122,108,0.03))] text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d={paths[slug] ?? "M5 12h14"} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
