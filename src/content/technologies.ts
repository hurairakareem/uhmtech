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

const aliases: Record<string, string> = {
  zoho: "zoho",
  "zoho crm": "zoho",
  "zoho creator": "zoho",
  "zoho books": "zoho",
  "zoho projects": "zoho",
  "zoho flow": "zoho-flow",
  "zoho analytics": "zoho",
  "zoho campaigns": "zoho",
  "zoho desk": "zoho",
  "zoho sign": "zoho",
  "zoho forms": "zoho",
  "zoho salesiq": "zoho",
  "zoho flow & apis": "zoho-flow",
  hubspot: "hubspot",
  "hubspot crm": "hubspot",
  salesforce: "salesforce",
  odoo: "odoo",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  javascript: "javascript",
  typescript: "typescript",
  "node.js": "nodejs",
  nodejs: "nodejs",
  express: "express",
  python: "python",
  "rest apis": "rest-apis",
  "rest api": "rest-apis",
  apis: "rest-apis",
  sql: "sql",
  mongodb: "mongodb",
  "cloud hosting": "cloud",
  "cloud tech": "cloud",
  cloud: "cloud",
  postgresql: "postgresql",
  redis: "redis",
  webhooks: "webhooks",
  docker: "docker",
  aws: "aws",
  "amazon web services": "aws",
  azure: "azure",
  "microsoft azure": "azure",
  stripe: "stripe",
  twilio: "twilio",
  whatsapp: "whatsapp-api",
  "whatsapp business api": "whatsapp-api",
  "chat or whatsapp integration": "whatsapp-api",
  make: "make",
  "make / similar ipaas": "make",
  n8n: "n8n",
};

export function getTechnology(slug: string) {
  return technologies.find((t) => t.slug === slug);
}

export function resolveTech(label: string) {
  const key = label.trim().toLowerCase();
  const slug = aliases[key] ?? technologies.find((t) => t.name.toLowerCase() === key)?.slug;
  if (!slug) return null;
  const tech = getTechnology(slug);
  return tech ? { slug: tech.slug, name: tech.name, label } : { slug, name: label, label };
}

export const serviceBrandLogo: Record<string, string> = {
  "zoho-crm": "zoho",
  hubspot: "hubspot",
  salesforce: "salesforce",
  odoo: "odoo",
};

export const serviceTechLogos: Record<string, string[]> = {
  "business-automation": ["zoho", "hubspot", "salesforce", "odoo", "n8n"],
  "crm-solutions": ["zoho", "hubspot", "salesforce", "odoo"],
  "software-development": ["react", "nextjs", "nodejs", "typescript", "python"],
  "app-development": ["react", "nextjs", "javascript", "typescript"],
  "apps-customization": ["odoo", "zoho", "salesforce", "hubspot"],
  "saas-development": ["nextjs", "react", "nodejs", "postgresql"],
  "call-center-services": ["twilio", "salesforce", "hubspot"],
  "chat-support": ["whatsapp-api", "hubspot", "zoho"],
  "email-services": ["hubspot", "zoho", "salesforce"],
  "ai-automation": ["python", "n8n"],
  "api-integrations": ["rest-apis", "stripe", "twilio", "webhooks"],
  "management-systems": ["odoo", "postgresql", "react"],
  "zoho-crm": ["zoho"],
  hubspot: ["hubspot"],
  salesforce: ["salesforce"],
  odoo: ["odoo"],
};
