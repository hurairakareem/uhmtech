export type ServiceItem = {
  slug: string;
  name: string;
  shortName?: string;
  navGroup: "core" | "experience" | "build";
  summary: string;
  description: string;
  heroHeadline: string;
  heroSupport: string;
  outcomes: string[];
  offerings: { title: string; description: string }[];
  platforms?: { name: string; items: string[] }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "business-automation",
    name: "Business Automation",
    navGroup: "core",
    summary:
      "Automate repetitive processes and connect your business systems to improve efficiency and growth.",
    description:
      "We design and implement automation that follows how your business actually works — from lead capture and approvals to operations, reporting, and customer lifecycle workflows.",
    heroHeadline: "Automate operations without losing control of the process.",
    heroSupport:
      "UHM Tech maps your workflows, then builds reliable automation across CRM, operations, finance, and support systems — including custom logic where platforms fall short.",
    outcomes: [
      "Fewer manual handoffs between teams",
      "Faster cycle times for sales, support, and operations",
      "Consistent data across connected systems",
      "Clear reporting on work that used to live in spreadsheets",
    ],
    offerings: [
      { title: "Workflow automation", description: "Approvals, routing, task creation, and status updates triggered by real business events." },
      { title: "CRM automation", description: "Lead scoring, assignment, follow-ups, and deal-stage automation aligned to your sales process." },
      { title: "Sales automation", description: "Pipeline hygiene, quote-to-close sequences, and activity reminders that keep deals moving." },
      { title: "Marketing automation", description: "Nurture sequences, campaign tracking, and lead handoff between marketing and sales." },
      { title: "Customer support automation", description: "Ticket routing, SLA timers, knowledge triggers, and customer updates." },
      { title: "Business process automation", description: "Cross-department processes such as onboarding, fulfillment, billing, and renewals." },
      { title: "API & third-party integrations", description: "Connect platforms, databases, and internal tools so work happens once." },
      { title: "Custom dashboards", description: "Operational views for leadership, teams, and clients — not generic platform reports." },
      { title: "Reporting & analytics", description: "Reliable metrics from clean data, not disconnected exports." },
      { title: "Lead & deal management", description: "Structured capture, qualification, and progression through your commercial process." },
      { title: "Customer lifecycle automation", description: "From first inquiry to onboarding, retention, and expansion." },
      { title: "Custom automation solutions", description: "When off-the-shelf workflows are not enough, we build the missing layer." },
    ],
    platforms: [
      { name: "Platforms we commonly automate", items: ["Zoho", "HubSpot", "Salesforce", "Odoo", "Custom systems"] },
    ],
    faqs: [
      { q: "Do we need to replace our current systems first?", a: "Not always. Many programs start by connecting and automating what you already use, then replacing only the tools that create friction." },
      { q: "Can automation be rolled out in phases?", a: "Yes. We typically start with one high-impact process, prove the workflow, then expand." },
    ],
    related: ["crm-solutions", "api-integrations", "ai-automation"],
  },
  {
    slug: "crm-solutions",
    name: "CRM Solutions",
    navGroup: "core",
    summary:
      "Design, customize, integrate, and automate CRM platforms around your business processes.",
    description:
      "We implement CRM as an operating system for customer work — sales, marketing, service, and operations — across Zoho, HubSpot, Salesforce, Odoo, and custom CRM builds.",
    heroHeadline: "A CRM that matches your process, not a generic pipeline.",
    heroSupport:
      "From discovery and data model design to customization, integration, training, and automation, we help teams actually use the CRM they invest in.",
    outcomes: [
      "A CRM model that reflects real products, teams, and customer journeys",
      "Cleaner handoffs between sales, delivery, and support",
      "Automation that reduces admin instead of adding it",
      "Room to add new platforms or modules later",
    ],
    offerings: [
      { title: "CRM strategy & architecture", description: "Process mapping, data model, permissions, and rollout plan." },
      { title: "Implementation & customization", description: "Modules, fields, layouts, automations, and user experience tailored to each team." },
      { title: "Migration", description: "Structured movement of accounts, contacts, deals, tickets, and history." },
      { title: "Integrations", description: "Email, telephony, accounting, websites, payment, and internal systems." },
      { title: "Training & adoption", description: "Role-based training so the CRM becomes daily workflow, not extra data entry." },
    ],
    platforms: [
      {
        name: "Zoho",
        items: [
          "Zoho CRM",
          "Zoho Creator",
          "Zoho Books",
          "Zoho Projects",
          "Zoho Flow",
          "Zoho Analytics",
          "Zoho Campaigns",
          "Zoho Desk",
          "Zoho Sign",
          "Zoho Forms",
          "Zoho SalesIQ",
          "Other Zoho ecosystem solutions",
        ],
      },
      {
        name: "HubSpot",
        items: ["HubSpot CRM", "Sales Hub", "Marketing Hub", "Service Hub", "Automation", "Workflows", "Integrations", "Custom solutions"],
      },
      {
        name: "Salesforce",
        items: ["Salesforce CRM", "Automation", "Customization", "Integrations", "Reports & dashboards", "Business process automation"],
      },
      {
        name: "Odoo",
        items: ["CRM", "Sales", "Accounting", "Inventory", "HR", "Projects", "Automation", "Custom modules", "Integrations"],
      },
    ],
    faqs: [
      { q: "Which CRM should we choose?", a: "It depends on process complexity, team size, existing tools, and how much customization you need. We help you choose based on fit, not a single-platform bias." },
      { q: "Can you work with a CRM we already use?", a: "Yes. We regularly improve, clean up, and automate existing Zoho, HubSpot, Salesforce, and Odoo environments." },
    ],
    related: ["business-automation", "software-development", "email-services"],
  },
  {
    slug: "zoho-crm",
    name: "Zoho CRM & Zoho Ecosystem",
    shortName: "Zoho",
    navGroup: "core",
    summary: "Implement, customize, and automate Zoho CRM and the wider Zoho suite around your operations.",
    description:
      "Zoho can cover CRM, finance, projects, support, analytics, and custom apps. We help you use the right mix — and connect it to everything else.",
    heroHeadline: "Make Zoho work as one connected business system.",
    heroSupport:
      "We implement Zoho CRM and related Zoho products with clean data models, automations, and integrations that teams can actually run day to day.",
    outcomes: [
      "Zoho configured around your sales and service process",
      "Connected Books, Desk, Campaigns, and custom Creator apps where needed",
      "Less duplicate data entry across Zoho modules",
    ],
    offerings: [
      { title: "Zoho CRM", description: "Pipelines, layouts, blueprints, assignment rules, and custom modules." },
      { title: "Zoho Creator", description: "Custom applications for processes Zoho CRM should not be forced to hold." },
      { title: "Zoho Books", description: "Invoicing and finance workflows connected to commercial records." },
      { title: "Zoho Projects", description: "Delivery tracking linked to deals and customers." },
      { title: "Zoho Flow & APIs", description: "Cross-app automation inside and outside Zoho." },
      { title: "Zoho Analytics", description: "Reporting models that leadership can trust." },
      { title: "Zoho Campaigns", description: "Campaign operations connected to CRM records." },
      { title: "Zoho Desk", description: "Support operations with SLA, routing, and CRM context." },
      { title: "Zoho Sign, Forms & SalesIQ", description: "Signature, capture, and website engagement connected to CRM." },
    ],
    faqs: [
      { q: "Do we need the full Zoho suite?", a: "No. We recommend the modules that match your process and leave room to add more later." },
    ],
    related: ["crm-solutions", "business-automation", "hubspot"],
  },
  {
    slug: "hubspot",
    name: "HubSpot Implementation",
    shortName: "HubSpot",
    navGroup: "core",
    summary: "HubSpot CRM, Sales Hub, Marketing Hub, and Service Hub implementation with practical automation.",
    description:
      "We set up HubSpot so marketing, sales, and service share one customer record — with workflows that reduce manual follow-up.",
    heroHeadline: "HubSpot configured for how your revenue team actually works.",
    heroSupport:
      "From CRM foundations to hubs, workflows, and integrations, we focus on adoption and clean data, not unused features.",
    outcomes: [
      "Shared lifecycle stages across marketing, sales, and service",
      "Workflows that match real handoff rules",
      "Integrations that keep HubSpot from becoming a silo",
    ],
    offerings: [
      { title: "HubSpot CRM", description: "Properties, pipelines, permissions, and reporting foundations." },
      { title: "Sales Hub", description: "Sequences, deal process, quoting support, and activity tracking." },
      { title: "Marketing Hub", description: "Forms, landing operations, nurture, and attribution-ready tracking." },
      { title: "Service Hub", description: "Tickets, SLAs, knowledge workflows, and customer context." },
      { title: "Automation & custom solutions", description: "Workflows, custom coded actions where appropriate, and integrations." },
    ],
    faqs: [
      { q: "Can HubSpot connect to our existing tools?", a: "Yes. We commonly connect websites, email, telephony, billing, and internal systems." },
    ],
    related: ["crm-solutions", "email-services", "chat-support"],
  },
  {
    slug: "salesforce",
    name: "Salesforce Solutions",
    shortName: "Salesforce",
    navGroup: "core",
    summary: "Salesforce CRM customization, automation, reporting, and integrations for growing operations.",
    description:
      "Salesforce is powerful when the data model, automation, and user experience are designed with intent. We help teams get there without unnecessary complexity.",
    heroHeadline: "Salesforce that supports the business process — not the other way around.",
    heroSupport:
      "We customize Salesforce around your objects, automations, dashboards, and connected systems, with a clear path for future change.",
    outcomes: [
      "Object model aligned to products and customer journeys",
      "Automation that is documented and maintainable",
      "Dashboards that answer operational questions",
    ],
    offerings: [
      { title: "Salesforce CRM", description: "Core sales and service configuration." },
      { title: "Automation", description: "Flows and process automation designed for scale." },
      { title: "Customization", description: "Fields, page layouts, Lightning experience, and custom logic." },
      { title: "Integrations", description: "APIs and middleware to finance, support, and product systems." },
      { title: "Reports & dashboards", description: "Leadership and team reporting from trusted records." },
    ],
    faqs: [
      { q: "Is Salesforce only for large enterprises?", a: "No. It can fit mid-market teams when scoped correctly. We help you avoid over-building." },
    ],
    related: ["crm-solutions", "api-integrations", "software-development"],
  },
  {
    slug: "odoo",
    name: "Odoo Implementation",
    shortName: "Odoo",
    navGroup: "core",
    summary: "Odoo CRM, sales, accounting, inventory, HR, projects, and custom modules — implemented as one system.",
    description:
      "Odoo can unify commercial and operational work. We implement the apps you need and extend them with custom modules when standard flows are not enough.",
    heroHeadline: "Odoo as a connected operations platform.",
    heroSupport:
      "We implement Odoo around sales, delivery, inventory, accounting, and people processes — with automation and integrations that keep data consistent.",
    outcomes: [
      "Fewer disconnected tools between sales and operations",
      "Custom modules only where they create real value",
      "A foundation that can grow into broader ERP use",
    ],
    offerings: [
      { title: "CRM & Sales", description: "Leads, opportunities, quotations, and customer records." },
      { title: "Accounting", description: "Invoicing and financial workflows connected to operations." },
      { title: "Inventory", description: "Stock, fulfillment, and warehouse-related processes." },
      { title: "HR & Projects", description: "People and delivery tracking in the same environment." },
      { title: "Automation & custom modules", description: "Server actions, automated flows, and tailored apps." },
    ],
    faqs: [
      { q: "Can Odoo replace several tools at once?", a: "Sometimes. We recommend a staged rollout so teams are not asked to change everything on day one." },
    ],
    related: ["crm-solutions", "management-systems", "business-automation"],
  },
  {
    slug: "software-development",
    name: "Software Development",
    navGroup: "build",
    summary:
      "Build scalable web applications, mobile apps, SaaS products, and enterprise systems.",
    description:
      "We design and develop custom software when platforms are not enough — from internal tools and portals to full products and modernizations of legacy systems.",
    heroHeadline: "Software built around your business, not a forced template.",
    heroSupport:
      "UHM Tech delivers web, mobile, cloud, and API-driven systems with architecture that can grow — including MVPs, enterprise applications, and product development.",
    outcomes: [
      "Applications that match operational reality",
      "APIs and data models that other systems can use",
      "A path from MVP to production without a rewrite",
    ],
    offerings: [
      { title: "Custom software development", description: "Purpose-built systems for processes that off-the-shelf tools cannot cover well." },
      { title: "Web application development", description: "Secure, responsive applications for customers, partners, and internal teams." },
      { title: "Mobile application development", description: "Mobile experiences connected to your backend and operations." },
      { title: "Enterprise applications", description: "Role-based systems with auditability, permissions, and integrations." },
      { title: "Business management systems", description: "CRM, ERP, HR, inventory, project, and workflow systems — custom or extended." },
      { title: "Customer portals & admin dashboards", description: "Self-service and operations views with clear permissions." },
      { title: "Internal business tools", description: "Replace spreadsheet-heavy work with maintainable applications." },
      { title: "API & database development", description: "REST APIs, data models, and reliable persistence." },
      { title: "Cloud applications", description: "Hosted systems designed for availability and growth." },
      { title: "MVP & product development", description: "Focused first releases with a roadmap for the next stages." },
      { title: "Legacy system modernization", description: "Replace or wrap aging systems without freezing the business." },
    ],
    faqs: [
      { q: "Do you only work with a fixed technology list?", a: "No. We commonly use React, Next.js, Node.js, TypeScript, Python, SQL, MongoDB, and cloud services — and we add tech when the product requires it." },
    ],
    related: ["saas-development", "management-systems", "api-integrations"],
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    navGroup: "build",
    summary: "Design, build, and scale multi-tenant SaaS products, portals, and subscription platforms.",
    description:
      "We help founders and companies turn an operating idea into a product: architecture, UX, multi-tenant design, billing-ready foundations, and ongoing product development.",
    heroHeadline: "Build a SaaS product that can grow with your customers.",
    heroSupport:
      "From MVP to multi-tenant platforms, we design product architecture, admin panels, customer portals, APIs, and the operational layer around the software.",
    outcomes: [
      "A product foundation that can add tenants and features",
      "Admin and customer experiences that support real operations",
      "Clear technical path for billing, roles, and scaling",
    ],
    offerings: [
      { title: "SaaS product development", description: "End-to-end product engineering with maintainable architecture." },
      { title: "SaaS MVP development", description: "A focused first version that can be demonstrated, sold, and extended." },
      { title: "Multi-tenant SaaS", description: "Tenant isolation, roles, and configuration designed from the start." },
      { title: "Subscription platforms", description: "Plans, entitlements, and customer lifecycle inside the product." },
      { title: "Customer portals & admin panels", description: "The surfaces operators and customers use every day." },
      { title: "SaaS dashboards", description: "Product analytics and operational views." },
      { title: "API-based products", description: "Platforms that other systems can integrate with." },
      { title: "Product UI/UX & architecture", description: "Interface and technical design as one product decision." },
      { title: "Product maintenance & scaling", description: "Ongoing development after launch." },
    ],
    faqs: [
      { q: "Can you take over an existing SaaS codebase?", a: "Yes. We can assess architecture, stabilize delivery, and continue product development." },
    ],
    related: ["software-development", "ai-automation", "api-integrations"],
  },
  {
    slug: "ai-automation",
    name: "AI & Intelligent Automation",
    navGroup: "build",
    summary: "Practical AI for support, qualification, documents, workflows, and product features.",
    description:
      "We apply AI where it improves a real process — chat, classification, document handling, assistants, and workflow decisions — with human oversight where it matters.",
    heroHeadline: "Intelligent automation that is useful, governed, and expandable.",
    heroSupport:
      "UHM Tech designs AI into support, sales, operations, and products — from chatbots and assistants to document processing and workflow intelligence.",
    outcomes: [
      "Faster handling of repetitive customer and internal requests",
      "AI features connected to CRM and operational systems",
      "A structure that can add new AI use cases later",
    ],
    offerings: [
      { title: "AI automation", description: "Decision and routing support inside existing workflows." },
      { title: "AI chatbots & customer support", description: "Assisted conversations with escalation to people." },
      { title: "AI lead qualification", description: "Structured intake and scoring support for sales teams." },
      { title: "AI-powered workflows", description: "Summaries, classification, and next-best-action inside processes." },
      { title: "AI integrations", description: "Connect models and tools to CRM, tickets, and products." },
      { title: "AI business assistants", description: "Internal assistants grounded in approved knowledge and data." },
      { title: "AI document & data processing", description: "Extract, classify, and route information from files and messages." },
      { title: "AI-powered SaaS products", description: "Product features that use AI as part of the customer value." },
    ],
    faqs: [
      { q: "Will AI replace our support team?", a: "That is not the default goal. Most programs use AI to handle repetitive work and give people better context." },
    ],
    related: ["chat-support", "business-automation", "saas-development"],
  },
  {
    slug: "call-center-services",
    name: "Call Center Services",
    navGroup: "experience",
    summary:
      "Deliver reliable customer support and sales operations through professional call center solutions.",
    description:
      "We help companies run inbound and outbound calling with process, quality, and reporting — connected to CRM so conversations become usable business records.",
    heroHeadline: "Customer conversations that are structured, measurable, and connected.",
    heroSupport:
      "From inbound support to outbound qualification and appointment setting, we design call operations with monitoring, analytics, and CRM integration.",
    outcomes: [
      "Clear handling of inbound and outbound call types",
      "Quality monitoring and call analytics",
      "CRM records that reflect what happened on the call",
    ],
    offerings: [
      { title: "Inbound & outbound calls", description: "Support, sales, and operational calling with defined scripts and outcomes." },
      { title: "Customer & technical support", description: "Issue handling with escalation paths and knowledge support." },
      { title: "Lead qualification & appointment setting", description: "Structured conversations that feed sales calendars and pipelines." },
      { title: "Telemarketing & sales support", description: "Outbound programs with compliance-aware process design." },
      { title: "Call management", description: "Routing, queues, and operating procedures." },
      { title: "Recording, monitoring & analytics", description: "Quality review and performance visibility." },
    ],
    faqs: [
      { q: "Can calling be combined with chat and email?", a: "Yes. Many clients run a blended customer experience with shared CRM context." },
    ],
    related: ["chat-support", "email-services", "crm-solutions"],
  },
  {
    slug: "chat-support",
    name: "Chat & Live Support",
    navGroup: "experience",
    summary: "Live chat, website chat, sales chat, and AI-assisted conversations for customer engagement.",
    description:
      "We implement chat as a channel with routing, quality, and CRM connection — including live agents, chatbots, and hybrid models.",
    heroHeadline: "Chat that qualifies, supports, and hands off cleanly.",
    heroSupport:
      "Website chat, technical chat, sales chat, and 24/7 coverage models — with optional AI and full CRM visibility.",
    outcomes: [
      "Faster first response on high-intent website visits",
      "Qualified conversations passed to the right team",
      "Chat history available in CRM and support systems",
    ],
    offerings: [
      { title: "Live & website chat support", description: "On-site conversations with routing and business hours rules." },
      { title: "Customer & technical chat", description: "Support conversations with escalation and knowledge." },
      { title: "Sales chat & lead qualification", description: "Capture intent and book next steps." },
      { title: "24/7 chat support models", description: "Coverage design based on volume and language needs." },
      { title: "Chatbot & AI chat solutions", description: "Assisted automation with human takeover." },
      { title: "Customer engagement", description: "Proactive chat based on page, campaign, or customer stage." },
    ],
    faqs: [
      { q: "Do we need a chatbot on day one?", a: "Not necessarily. Many teams start with live chat and add AI once the conversation patterns are clear." },
    ],
    related: ["ai-automation", "call-center-services", "crm-solutions"],
  },
  {
    slug: "email-services",
    name: "Email Services",
    navGroup: "experience",
    summary: "Support inboxes, email automation, campaigns, and CRM-connected customer communication.",
    description:
      "Email remains a core business channel. We help you run support mailboxes, lifecycle messaging, and campaign operations with automation and clean CRM records.",
    heroHeadline: "Email operations that stay organized, timely, and connected to CRM.",
    heroSupport:
      "From customer support inboxes to transactional mail, campaigns, and automated follow-up, we design email as part of the customer system — not a separate pile of messages.",
    outcomes: [
      "Shared inboxes with ownership and SLAs",
      "Automated follow-up that still feels relevant",
      "Campaign and transactional email connected to customer records",
    ],
    offerings: [
      { title: "Customer support email", description: "Shared mailbox operations, routing, and response standards." },
      { title: "Email management", description: "Queues, tags, and handover between teams." },
      { title: "Email automation", description: "Triggers for onboarding, reminders, and lifecycle events." },
      { title: "Transactional emails", description: "Operational messages from products and systems." },
      { title: "Marketing emails & campaigns", description: "Campaign operations with list hygiene and CRM sync." },
      { title: "Lead follow-up emails", description: "Sequences aligned to qualification stages." },
      { title: "CRM email automation", description: "Messages driven by pipeline, tickets, and customer data." },
      { title: "Email integration", description: "Connect inboxes, ESP tools, and CRM platforms." },
    ],
    faqs: [
      { q: "Can you connect email to Zoho, HubSpot, or Salesforce?", a: "Yes. Email-CRM connection is a standard part of our customer operations work." },
    ],
    related: ["crm-solutions", "business-automation", "chat-support"],
  },
  {
    slug: "api-integrations",
    name: "API & Integrations",
    navGroup: "build",
    summary: "Connect CRM, payments, messaging, telephony, commerce, and internal systems through APIs and webhooks.",
    description:
      "Integrations fail when they are treated as one-off scripts. We design synchronization, error handling, and ownership so data stays trustworthy.",
    heroHeadline: "Systems that share data without manual re-entry.",
    heroSupport:
      "REST APIs, webhooks, custom APIs, and third-party connections — including CRM, payments, email, SMS, WhatsApp, telephony, accounting, and ecommerce.",
    outcomes: [
      "A single source of truth for key customer and order data",
      "Event-driven updates instead of delayed exports",
      "Documented integrations that can be maintained",
    ],
    offerings: [
      { title: "REST API integration", description: "Secure connections between platforms and internal services." },
      { title: "CRM integrations", description: "Keep customer records aligned across tools." },
      { title: "Payment gateway integration", description: "Checkout and billing events into operations and CRM." },
      { title: "Email, SMS & WhatsApp", description: "Messaging channels connected to customer context." },
      { title: "Telephony integration", description: "Call events and recordings linked to records." },
      { title: "Accounting & ecommerce integrations", description: "Orders, invoices, and inventory moving together." },
      { title: "Webhooks & data synchronization", description: "Near real-time updates with retry and logging." },
      { title: "Custom API development", description: "APIs for products, partners, and internal systems." },
    ],
    faqs: [
      { q: "What if a vendor has no public API?", a: "We look at official connectors, export/import, middleware, or a custom service layer depending on stability and risk." },
    ],
    related: ["business-automation", "software-development", "crm-solutions"],
  },
  {
    slug: "management-systems",
    name: "Business Management Systems",
    navGroup: "build",
    summary: "CRM, ERP, HR, inventory, ticketing, booking, and workflow systems — custom or platform-based.",
    description:
      "We build and implement management systems as examples of what operations need, not as a fixed catalog. If your process is not listed, we can still design it.",
    heroHeadline: "Management systems that follow your operating model.",
    heroSupport:
      "From CRM and ERP to industry-specific systems, we design the modules, roles, workflows, and reporting your teams need — then keep the architecture open for the next process.",
    outcomes: [
      "One operational system instead of disconnected files",
      "Role-based access and audit-friendly records",
      "Room to add modules as the business grows",
    ],
    offerings: [
      { title: "CRM & customer management", description: "Accounts, interactions, and commercial process." },
      { title: "ERP & financial management", description: "Operational and financial workflows in one design." },
      { title: "HR management systems", description: "People processes, records, and approvals." },
      { title: "School & hospital management examples", description: "Industry-specific records, scheduling, and compliance-aware workflows." },
      { title: "Inventory & project management", description: "Stock, delivery, and work tracking." },
      { title: "Complaint, ticketing & booking systems", description: "Request handling with SLAs and calendars." },
      { title: "Document & workflow management", description: "Approvals, versions, and process visibility." },
    ],
    faqs: [
      { q: "Is this a product you sell off the shelf?", a: "These are capabilities and example system types. We implement or build what your operation requires." },
    ],
    related: ["software-development", "odoo", "saas-development"],
  },
];

export const primaryServiceSlugs = [
  "business-automation",
  "crm-solutions",
  "software-development",
  "saas-development",
  "call-center-services",
  "chat-support",
  "email-services",
  "ai-automation",
  "api-integrations",
  "management-systems",
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getPrimaryServices() {
  return primaryServiceSlugs
    .map((slug) => getService(slug))
    .filter((s): s is ServiceItem => Boolean(s));
}

export function getNavServices() {
  return getPrimaryServices();
}
