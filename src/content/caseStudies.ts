export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  clientLabel: string;
  challenge: string;
  solution: string;
  technologies: string[];
  automation: string[];
  resultsNote: string;
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "crm-operations-alignment",
    title: "Aligning sales and delivery in one CRM process",
    industry: "Professional Services",
    summary:
      "An illustrative engagement profile for firms that need a shared customer record from inquiry through delivery.",
    clientLabel: "Confidential — professional services firm",
    challenge:
      "Inquiries, proposals, and project kickoff lived in separate tools. Handoffs were delayed, and leadership could not see a reliable pipeline.",
    solution:
      "We would typically map the commercial process, implement a CRM data model, automate assignment and kickoff tasks, and connect email so conversations sit on the customer record.",
    technologies: ["CRM platform", "Email integration", "Dashboards"],
    automation: ["Lead assignment", "Proposal follow-up reminders", "Kickoff task creation"],
    resultsNote:
      "Measured results are published only with client permission. Typical goals for this engagement type include faster handoff and fewer missed follow-ups.",
  },
  {
    slug: "support-channel-unification",
    title: "Unifying phone, chat, and email support",
    industry: "E-commerce",
    summary:
      "An illustrative profile for brands that need one customer history across support channels.",
    clientLabel: "Confidential — commerce operations team",
    challenge:
      "Agents answered the same customer in different channels without shared context. Reporting could not show true response performance.",
    solution:
      "A typical program connects telephony, chat, and shared email to CRM or a support workspace, with routing rules, quality monitoring, and reporting.",
    technologies: ["CRM", "Telephony", "Live chat", "Shared inbox"],
    automation: ["Ticket routing", "SLA timers", "Customer notification templates"],
    resultsNote:
      "We do not publish invented response-time or CSAT figures. Real metrics are added here when a client agrees to share them.",
  },
  {
    slug: "saas-mvp-foundation",
    title: "Foundational architecture for a SaaS MVP",
    industry: "Technology",
    summary:
      "An illustrative product engagement for teams that need a first release that can become multi-tenant later.",
    clientLabel: "Confidential — product team",
    challenge:
      "The idea was clear, but the first build risked hard-coding a single-tenant prototype that would be expensive to evolve.",
    solution:
      "We typically design tenant-aware architecture, an admin panel, a customer portal, and APIs, then ship an MVP scoped to the first paying workflow.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Cloud hosting"],
    automation: ["Onboarding emails", "Role provisioning", "Usage event logging"],
    resultsNote:
      "Product outcomes such as time-to-first-demo are documented per project. Placeholder metrics are not shown as if they were real.",
  },
  {
    slug: "manufacturing-quote-to-fulfillment",
    title: "Connecting quotes, inventory, and fulfillment",
    industry: "Manufacturing",
    summary:
      "An illustrative profile for manufacturers that still move orders through email and spreadsheets between sales and the floor.",
    clientLabel: "Confidential — manufacturing operations",
    challenge:
      "Sales quoted in one tool, production tracked in another, and customers asked for status that nobody could see without a meeting.",
    solution:
      "A typical program maps quote-to-order, implements CRM or ERP objects for the commercial record, and adds status updates plus a simple customer or dealer portal.",
    technologies: ["CRM or ERP", "Inventory records", "Customer portal", "APIs"],
    automation: ["Quote approved to job created", "Low-stock alerts", "Status email or portal updates"],
    resultsNote:
      "Goals for this engagement type usually include fewer status meetings and a single order record. Specific percentages are added only from a real, approved project.",
  },
  {
    slug: "real-estate-inquiry-to-appointment",
    title: "From listing inquiry to a booked appointment",
    industry: "Real Estate",
    summary:
      "An illustrative profile for property teams that lose inquiries between web forms, WhatsApp, and agent phones.",
    clientLabel: "Confidential — real estate operations",
    challenge:
      "Leads arrived on several channels. Follow-up depended on who saw the message first. There was no shared qualification.",
    solution:
      "Typical work centralizes capture into CRM, adds assignment and reminder automation, and connects chat or calling so the appointment is a recorded next step.",
    technologies: ["CRM", "Website forms", "Chat or WhatsApp integration", "Calendars"],
    automation: ["Lead capture", "Owner assignment", "Appointment reminders"],
    resultsNote:
      "Speed-to-lead improvements are measured per client. This page does not invent conversion lifts.",
  },
  {
    slug: "healthcare-coordination-without-clinical-overreach",
    title: "Administrative coordination for a healthcare operator",
    industry: "Healthcare",
    summary:
      "An illustrative profile for inquiry, scheduling, and patient communication workflows — not a clinical records product claim.",
    clientLabel: "Confidential — healthcare administration",
    challenge:
      "Front-office teams juggled phone, email, and calendars. Staff lacked a shared view of which inquiries were open.",
    solution:
      "A typical engagement implements a request queue, appointment workflow, and multi-channel communication with access controls appropriate to operational data.",
    technologies: ["Request or CRM system", "Scheduling", "Email and phone logging"],
    automation: ["Inquiry routing", "Appointment reminders", "Follow-up tasks"],
    resultsNote:
      "Healthcare outcomes are published only with permission and never as invented clinical results.",
  },
  {
    slug: "odoo-sales-to-accounting-handoff",
    title: "Sales-to-accounting handoff on Odoo",
    industry: "Wholesale / distribution",
    summary:
      "An illustrative Odoo program for teams that need quotations, delivery, and invoicing to share one operational spine.",
    clientLabel: "Confidential — distribution company",
    challenge:
      "Quotes closed in CRM-like tools while invoices were re-keyed. Inventory and accounting disagreed about what had shipped.",
    solution:
      "Typical Odoo work configures CRM/Sales, inventory, and accounting apps, limits custom modules to true gaps, and trains the handoff so invoices are born from confirmed orders.",
    technologies: ["Odoo", "Accounting integration", "Inventory"],
    automation: ["Confirmed order to delivery", "Delivery to invoice draft", "Exception notifications"],
    resultsNote:
      "Finance impact is client-specific. Placeholder savings figures are not shown.",
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
