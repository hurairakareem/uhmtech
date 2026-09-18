export type Technology = {
  slug: string;
  name: string;
  category: "platforms" | "frontend" | "backend" | "data" | "cloud" | "automation";
  summary: string;
};

export const technologies: Technology[] = [
  { slug: "zoho", name: "Zoho", category: "platforms", summary: "CRM and business applications across the Zoho ecosystem." },
  { slug: "hubspot", name: "HubSpot", category: "platforms", summary: "CRM, marketing, sales, and service hubs." },
  { slug: "salesforce", name: "Salesforce", category: "platforms", summary: "Enterprise CRM customization, automation, and reporting." },
  { slug: "odoo", name: "Odoo", category: "platforms", summary: "Modular ERP, CRM, and operations applications." },
  { slug: "react", name: "React", category: "frontend", summary: "Component-driven user interfaces for web products." },
  { slug: "nextjs", name: "Next.js", category: "frontend", summary: "Production web applications with strong SEO and performance characteristics." },
  { slug: "javascript", name: "JavaScript", category: "frontend", summary: "Application logic across the web stack." },
  { slug: "typescript", name: "TypeScript", category: "frontend", summary: "Typed application development for maintainable products." },
  { slug: "nodejs", name: "Node.js", category: "backend", summary: "API and service development for web and SaaS systems." },
  { slug: "express", name: "Express", category: "backend", summary: "HTTP APIs and service layers." },
  { slug: "python", name: "Python", category: "backend", summary: "Automation, data processing, and backend services." },
  { slug: "rest-apis", name: "REST APIs", category: "backend", summary: "Integration contracts between products and platforms." },
  { slug: "sql", name: "SQL", category: "data", summary: "Relational data modeling and reporting." },
  { slug: "mongodb", name: "MongoDB", category: "data", summary: "Document storage for product and operational data." },
  { slug: "cloud", name: "Cloud tech", category: "cloud", summary: "Hosted applications, environments, and scaling patterns." },
  { slug: "postgresql", name: "PostgreSQL", category: "data", summary: "Relational databases for products and operational systems." },
  { slug: "redis", name: "Redis", category: "data", summary: "Caching and short-lived operational data where it fits the architecture." },
  { slug: "webhooks", name: "Webhooks", category: "backend", summary: "Event delivery between platforms with retry and logging discipline." },
  { slug: "docker", name: "Docker", category: "cloud", summary: "Consistent environments for application delivery." },
  { slug: "aws", name: "Amazon Web Services", category: "cloud", summary: "Cloud hosting and managed services when the product requires them." },
  { slug: "azure", name: "Microsoft Azure", category: "cloud", summary: "Cloud environments for teams already standardized on Azure." },
  { slug: "stripe", name: "Stripe", category: "platforms", summary: "Payment events integrated into operations and CRM — as a capability, not a claimed partnership." },
  { slug: "twilio", name: "Twilio", category: "platforms", summary: "Telephony and messaging APIs connected to customer records." },
  { slug: "whatsapp-api", name: "WhatsApp Business API", category: "platforms", summary: "Messaging channels logged and routed with CRM context." },
  { slug: "zoho-flow", name: "Zoho Flow", category: "automation", summary: "Zoho-centric automation connected to the wider ecosystem." },
  { slug: "make", name: "Make / similar iPaaS", category: "automation", summary: "Integration platforms used when they are the right operational layer." },
  { slug: "n8n", name: "n8n", category: "automation", summary: "Self-hosted or managed workflow automation for internal systems." },
];

export const technologyCategories: { id: Technology["category"]; label: string }[] = [
  { id: "platforms", label: "Business platforms" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & APIs" },
  { id: "data", label: "Data" },
  { id: "cloud", label: "Cloud" },
  { id: "automation", label: "Automation & iPaaS" },
];
