export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category:
    | "Business Automation"
    | "CRM"
    | "Zoho"
    | "HubSpot"
    | "Salesforce"
    | "Odoo"
    | "SaaS"
    | "Software Development"
    | "AI"
    | "Business Technology"
    | "Digital Transformation"
    | "Customer Experience";
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  featured: boolean;
  content: { heading?: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-automate-first",
    title: "What to automate first when your team is still growing",
    description:
      "A practical way to choose the first business processes to automate without creating fragile workflows.",
    category: "Business Automation",
    tags: ["automation", "operations", "crm"],
    author: "UHM Tech",
    publishedAt: "2026-08-12",
    featured: true,
    content: [
      {
        paragraphs: [
          "Automation creates value when it removes repeated work that already has a clear rule. It creates noise when it encodes a process nobody agrees on yet.",
          "Start by listing the handoffs that fail most often: a lead that sits unassigned, an invoice that waits on a status update, a support reply that depends on someone remembering to check an inbox.",
        ],
      },
      {
        heading: "Choose a process with a visible owner",
        paragraphs: [
          "The first workflow should have one owner, a measurable delay, and a small number of systems. A lead assignment rule inside CRM is usually a better first project than a company-wide ERP redesign.",
          "Document the exception path. If every deal is a special case, automation will fight the team. Capture the 80% path, then add exceptions as named branches.",
        ],
      },
      {
        heading: "Connect before you replace",
        paragraphs: [
          "Many teams assume they must change platforms before they can automate. Often the first gain comes from connecting the tools already in use and removing duplicate entry.",
          "UHM Tech typically maps the process, implements the first workflow, then expands. New services and systems can be added later without redesigning the whole operating model.",
        ],
      },
    ],
  },
  {
    slug: "lead-qualification-without-noise",
    title: "Lead qualification without filling the CRM with noise",
    description:
      "How to score and route inquiries so sales sees intent — not every website visit dressed up as a deal.",
    category: "Business Automation",
    tags: ["automation", "sales", "crm", "qualification"],
    author: "UHM Tech",
    publishedAt: "2026-08-28",
    featured: true,
    content: [
      {
        paragraphs: [
          "Qualification fails in two directions. Either everything becomes a deal, and the pipeline is fiction, or nothing is captured, and marketing cannot see what happened after the form.",
          "A usable model has a small number of required fields, a clear owner, and an explicit “not ready” state that is still a record — not a deleted row.",
        ],
      },
      {
        heading: "Separate capture from commitment",
        paragraphs: [
          "An inquiry can live as a lead or ticket until someone confirms fit. Automation should assign, remind, and log activity. It should not invent a close date.",
          "Chat, phone, and email should write into the same qualification fields so a conversation on one channel is not lost on another.",
        ],
      },
      {
        heading: "Keep the score explainable",
        paragraphs: [
          "If nobody can say why a lead is “hot,” the score will be ignored. Start with a handful of signals: budget conversation, timeline, product fit, and response quality.",
          "UHM Tech designs qualification as a workflow you can train — not as a hidden formula.",
        ],
      },
    ],
  },
  {
    slug: "crm-is-not-a-spreadsheet",
    title: "A CRM is not a prettier spreadsheet",
    description:
      "Why CRM implementations stall when the data model is copied from columns instead of from the customer journey.",
    category: "CRM",
    tags: ["crm", "implementation", "data-model"],
    author: "UHM Tech",
    publishedAt: "2026-07-21",
    featured: true,
    content: [
      {
        paragraphs: [
          "Teams often migrate spreadsheet columns into CRM fields and then wonder why nobody uses the system. A CRM has to represent stages, ownership, and relationships — not only attributes.",
        ],
      },
      {
        heading: "Design the journey, then the fields",
        paragraphs: [
          "Start with how a customer moves from inquiry to delivery to support. Then decide which objects you need: companies, contacts, deals, tickets, subscriptions, or projects.",
          "Platforms such as Zoho, HubSpot, Salesforce, and Odoo can all support this if the model is intentional. The platform is the last decision, not the first.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-a-crm-platform",
    title: "How to choose between Zoho, HubSpot, Salesforce, Odoo, or custom CRM",
    description:
      "A decision frame based on process complexity, team size, and integration needs — not brand preference.",
    category: "CRM",
    tags: ["crm", "zoho", "hubspot", "salesforce", "odoo"],
    author: "UHM Tech",
    publishedAt: "2026-08-04",
    featured: true,
    content: [
      {
        paragraphs: [
          "CRM selection arguments often start with features. Durable choices start with the operating model: who owns the customer record, which objects you need, and which systems must stay in the loop.",
        ],
      },
      {
        heading: "Ask what must be true in 18 months",
        paragraphs: [
          "If you will still have a small sales team and a simple pipeline, a heavyweight platform can be overhead. If you already have regional teams, custom products, and finance integrations, a lightweight CRM will be stretched.",
          "Custom CRM is a valid path when the commercial object model does not fit any suite. It is a poor path when the real problem is adoption, not objects.",
        ],
      },
      {
        heading: "Integration load is a first-class requirement",
        paragraphs: [
          "List the systems that already hold truth: billing, inventory, support, website, telephony. The CRM that cannot connect those systems cleanly will become another silo.",
          "UHM Tech helps teams choose by fit and then implement without locking the company to a single-vendor story.",
        ],
      },
    ],
  },
  {
    slug: "zoho-crm-blueprints-that-teams-use",
    title: "Zoho CRM blueprints that teams actually follow",
    description:
      "How to design Zoho blueprints, layouts, and assignment so the process is visible without becoming a maze.",
    category: "Zoho",
    tags: ["zoho", "crm", "automation"],
    author: "UHM Tech",
    publishedAt: "2026-07-02",
    featured: false,
    content: [
      {
        paragraphs: [
          "Zoho blueprints are useful when they encode a few mandatory gates. They become unused when every exception is a hidden transition and the layout shows fifty fields on day one.",
        ],
      },
      {
        heading: "Start with one commercial motion",
        paragraphs: [
          "Implement the primary pipeline first. Add a second blueprint only when the first has a stable owner and reporting.",
          "Pair blueprints with assignment rules and a small set of required fields. Use Zoho Creator when the work is an application, not a CRM record.",
        ],
      },
      {
        heading: "Connect the rest of Zoho with intent",
        paragraphs: [
          "Desk, Books, Campaigns, and Analytics earn their place when they share identifiers with CRM. Connecting everything on week one usually creates duplicate records.",
          "UHM Tech typically sequences Zoho modules the same way we sequence any platform: process first, then the next app.",
        ],
      },
    ],
  },
  {
    slug: "hubspot-lifecycle-stages-that-match-the-team",
    title: "HubSpot lifecycle stages that match how your team really sells",
    description:
      "Lifecycle and deal stages fail when marketing, sales, and service use different definitions of “customer.”",
    category: "HubSpot",
    tags: ["hubspot", "crm", "revenue-operations"],
    author: "UHM Tech",
    publishedAt: "2026-06-25",
    featured: false,
    content: [
      {
        paragraphs: [
          "HubSpot is strongest when lifecycle stages are a shared language. It is weakest when marketing marks everyone as a customer and sales keeps a private spreadsheet of “real” deals.",
        ],
      },
      {
        heading: "Write the definitions in operations language",
        paragraphs: [
          "Subscriber, lead, MQL, SQL, opportunity, and customer should map to actions a person can audit. If a stage cannot be explained in one sentence, it will not be maintained.",
          "Workflows should move records because an event happened — form, meeting, closed ticket — not because a property was edited by accident.",
        ],
      },
      {
        heading: "Do not turn every hub on at once",
        paragraphs: [
          "Sales Hub without a clean CRM foundation creates sequences on messy data. Service Hub without shared contacts creates a second customer database.",
          "UHM Tech implements HubSpot in layers: properties and pipelines, then workflows, then the hubs that those workflows need.",
        ],
      },
    ],
  },
  {
    slug: "salesforce-automation-you-can-maintain",
    title: "Salesforce automation you can still maintain next year",
    description:
      "Flow, objects, and dashboards stay useful when they are documented and scoped — not when every request becomes another automation.",
    category: "Salesforce",
    tags: ["salesforce", "automation", "crm"],
    author: "UHM Tech",
    publishedAt: "2026-06-11",
    featured: false,
    content: [
      {
        paragraphs: [
          "Salesforce can represent almost any process. That is the risk. Unowned flows, overlapping validation, and page layouts for every request make the org slower than the spreadsheet it replaced.",
        ],
      },
      {
        heading: "Name the object model out loud",
        paragraphs: [
          "If two teams cannot agree whether a “project” is an Opportunity, a custom object, or a Case, no amount of Flow will help. Draw the objects and relationships before automating.",
          "Keep entry criteria visible. A flow that “sometimes runs” is a support ticket waiting to happen.",
        ],
      },
      {
        heading: "Report from the same definitions",
        paragraphs: [
          "Dashboards should answer operating questions: what is waiting, who owns it, and what is blocked. Vanity reports that nobody can reconcile to the records will be ignored.",
          "UHM Tech treats Salesforce customization as product work: versioned, documented, and tested against real user paths.",
        ],
      },
    ],
  },
  {
    slug: "odoo-customize-or-configure",
    title: "Odoo: when to configure, when to build a module",
    description:
      "Odoo’s strength is a connected suite. Custom modules should extend that suite, not fight the standard flows.",
    category: "Odoo",
    tags: ["odoo", "erp", "customization"],
    author: "UHM Tech",
    publishedAt: "2026-05-28",
    featured: false,
    content: [
      {
        paragraphs: [
          "Odoo can cover CRM, sales, inventory, accounting, HR, and projects. Teams get into trouble when they customize the first screen they dislike instead of learning which app already holds the process.",
        ],
      },
      {
        heading: "Roll out apps in the order of cash flow",
        paragraphs: [
          "A typical sequence is CRM and sales, then delivery or inventory, then accounting connections. Turning on every app on day one overwhelms the team and multiplies configuration errors.",
          "Studio and small automations are enough for many gaps. A custom module is justified when the business object truly does not exist.",
        ],
      },
      {
        heading: "Keep upgrades in mind",
        paragraphs: [
          "Heavy core overrides make version upgrades expensive. Isolate custom logic, name it, and test the standard flow still works.",
          "UHM Tech implements Odoo as an operations platform with a bias toward configuration first and modules when they create durable value.",
        ],
      },
    ],
  },
  {
    slug: "building-saas-without-painting-into-a-corner",
    title: "Building a SaaS MVP without painting yourself into a corner",
    description:
      "Architecture choices that keep an MVP honest while leaving room for multi-tenant growth.",
    category: "SaaS",
    tags: ["saas", "mvp", "architecture"],
    author: "UHM Tech",
    publishedAt: "2026-06-18",
    featured: true,
    content: [
      {
        paragraphs: [
          "An MVP should prove a workflow customers will pay for. It should not pretend to be a finished platform. The useful middle ground is a small product with a tenant-aware data model and clear module boundaries.",
        ],
      },
      {
        heading: "What to include in the first release",
        paragraphs: [
          "Authentication, roles, the core workflow, an admin view, and an audit trail of important actions. Billing can be manual at first if the entitlement model is already designed.",
          "UHM Tech helps product teams make those tradeoffs explicit so the second release is an extension, not a rewrite.",
        ],
      },
    ],
  },
  {
    slug: "multi-tenant-saas-checklist",
    title: "A practical checklist before you call a product multi-tenant",
    description:
      "Tenant isolation, roles, configuration, and data paths that need to exist before you sell the second customer.",
    category: "SaaS",
    tags: ["saas", "architecture", "security"],
    author: "UHM Tech",
    publishedAt: "2026-07-30",
    featured: false,
    content: [
      {
        paragraphs: [
          "“Multi-tenant” is not a hosting adjective. It is a set of guarantees: one customer cannot see another’s data, configuration can differ, and operations can act with a clear audit trail.",
        ],
      },
      {
        heading: "Isolation has to be in the data path",
        paragraphs: [
          "Every query, file, webhook, and export needs a tenant boundary. UI hiding is not isolation.",
          "Decide what is shared platform configuration versus tenant settings. Mixing them leads to one-off patches for each customer.",
        ],
      },
      {
        heading: "Admin and customer surfaces are different products",
        paragraphs: [
          "Internal operators need impersonation controls, logs, and support tools. Customers need a portal that only shows their world. Building both as one screen usually fails both audiences.",
          "UHM Tech designs these surfaces together so the MVP can add tenants without a second architecture project.",
        ],
      },
    ],
  },
  {
    slug: "internal-tools-vs-buying-software",
    title: "When to build an internal tool instead of buying another SaaS",
    description:
      "A calm way to decide between a custom internal system and another subscription that the team will not fully use.",
    category: "Software Development",
    tags: ["software", "internal-tools", "architecture"],
    author: "UHM Tech",
    publishedAt: "2026-05-14",
    featured: false,
    content: [
      {
        paragraphs: [
          "Buying software is often faster. Building is justified when the process is the product of the company, the vendor cannot represent the object model, or the team is already paying for three tools that do 40% of the job each.",
        ],
      },
      {
        heading: "Look at the spreadsheet that will not die",
        paragraphs: [
          "If a weekly operations spreadsheet has columns no vendor screen can hold, that is a signal. If the spreadsheet is just a poorly used CRM, implementation is cheaper than a custom app.",
          "Internal tools should have roles, an API, and an owner. A weekend script with no handover is not a system.",
        ],
      },
      {
        heading: "Plan the integration either way",
        paragraphs: [
          "A purchased suite still needs APIs, identity, and reporting. A custom tool still needs to talk to finance and support. The integration work does not disappear when you pick a side.",
          "UHM Tech helps you choose, then implements the thinner path — custom, platform, or a mix.",
        ],
      },
    ],
  },
  {
    slug: "legacy-systems-without-a-big-bang",
    title: "Modernize a legacy system without a big-bang rewrite",
    description:
      "Wrap, replace, and migrate in slices so operations keep running while the architecture improves.",
    category: "Software Development",
    tags: ["software", "legacy", "apis"],
    author: "UHM Tech",
    publishedAt: "2026-04-22",
    featured: false,
    content: [
      {
        paragraphs: [
          "Full rewrites fail when the old system still holds the only accurate history. A safer pattern is to put a stable API in front of what exists, then replace modules behind that API.",
        ],
      },
      {
        heading: "Find the seams",
        paragraphs: [
          "Identify bounded workflows: quoting, fulfillment, billing, reporting. Replace one seam at a time and keep dual-running only as long as you can reconcile.",
          "Users need a better daily path, not a new database they must update twice.",
        ],
      },
      {
        heading: "Do not freeze the business",
        paragraphs: [
          "Modernization programs stall when every change waits for the perfect target architecture. Ship the next module with tests and a rollback.",
          "UHM Tech treats legacy work as product delivery with an explicit strangler path.",
        ],
      },
    ],
  },
  {
    slug: "ai-in-customer-support",
    title: "Where AI helps customer support — and where it should wait",
    description:
      "A grounded view of chatbots, summarization, and routing in support operations.",
    category: "AI",
    tags: ["ai", "support", "chat"],
    author: "UHM Tech",
    publishedAt: "2026-05-09",
    featured: true,
    content: [
      {
        paragraphs: [
          "AI is useful in support when the knowledge is approved and the escalation path is obvious. It is harmful when it invents answers or hides the customer from a person who could resolve the issue.",
        ],
      },
      {
        heading: "Start with classification and summaries",
        paragraphs: [
          "Routing and conversation summaries often create value before a fully automated chatbot. Agents get context; customers still get a human when the case is unclear.",
          "This is how UHM Tech typically introduces AI into chat, email, and ticket workflows — as an expandable layer, not a replacement for service design.",
        ],
      },
    ],
  },
  {
    slug: "ai-document-processing-in-operations",
    title: "Using AI for documents without losing the audit trail",
    description:
      "Extraction and classification can speed operations if a person still owns exceptions and the source file stays attached.",
    category: "AI",
    tags: ["ai", "documents", "automation"],
    author: "UHM Tech",
    publishedAt: "2026-08-19",
    featured: false,
    content: [
      {
        paragraphs: [
          "Invoices, applications, IDs, and contracts create slow queues. AI can extract fields and suggest a type. It should not be the only copy of the truth.",
        ],
      },
      {
        heading: "Keep the file, the extract, and the decision",
        paragraphs: [
          "Store the original document, the extracted payload, and who approved the exception. That triad is what finance and operations can defend later.",
          "Start with one document type that already has a template. Unstructured piles are a later problem.",
        ],
      },
      {
        heading: "Connect to the system of record",
        paragraphs: [
          "Extracted data only helps if it lands in CRM, ERP, or the case file with validation. A clever parser that dumps into email is another inbox.",
          "UHM Tech designs document AI as a workflow step with retries, confidence thresholds, and human review.",
        ],
      },
    ],
  },
  {
    slug: "integrations-that-do-not-rot",
    title: "API integrations that do not rot after the project team leaves",
    description:
      "Logging, retries, ownership, and contracts — the unglamorous work that keeps CRM, payments, and operations in sync.",
    category: "Business Technology",
    tags: ["apis", "integrations", "webhooks"],
    author: "UHM Tech",
    publishedAt: "2026-07-09",
    featured: false,
    content: [
      {
        paragraphs: [
          "Most integration failures are not missing endpoints. They are silent mismatches: a field renamed, a webhook that retried into duplicates, or a mapping only one contractor understood.",
        ],
      },
      {
        heading: "Treat the integration as a product",
        paragraphs: [
          "Name it, log deliveries, alert on failure, and document the canonical system for each field. If two systems can both edit the same customer email, you will spend months reconciling.",
          "Idempotency and retries belong in the first version, not the incident review.",
        ],
      },
      {
        heading: "Prefer events over nightly spreadsheets",
        paragraphs: [
          "Webhooks and APIs should move the events the business already understands: order created, ticket closed, payment failed. Batch files are a fallback, not an architecture.",
          "UHM Tech builds integration layers that operations can observe — so the next change is a controlled edit, not archaeology.",
        ],
      },
    ],
  },
  {
    slug: "reporting-leadership-can-trust",
    title: "Reporting leadership can trust starts in the data model",
    description:
      "Dashboards do not fix inconsistent ownership, duplicate customers, or stages that mean different things to each team.",
    category: "Business Technology",
    tags: ["analytics", "crm", "operations"],
    author: "UHM Tech",
    publishedAt: "2026-04-08",
    featured: false,
    content: [
      {
        paragraphs: [
          "When a dashboard and a team lead disagree, the team lead usually has the better story. The dashboard was built on fields nobody maintains.",
        ],
      },
      {
        heading: "Define the question before the chart",
        paragraphs: [
          "“How many open qualified opportunities older than 14 days, by owner?” is a question. “A growth dashboard” is not. Questions force you to name objects and time windows.",
          "If the CRM cannot answer it, fix capture. Do not add another BI layer on top of missing data.",
        ],
      },
      {
        heading: "Fewer metrics, clearer owners",
        paragraphs: [
          "A small set of operating metrics with named owners beats a gallery of charts. UHM Tech designs reporting as part of CRM and operations work, not as a separate decoration.",
        ],
      },
    ],
  },
  {
    slug: "digital-transformation-in-phases",
    title: "Digital transformation that can be briefed in phases",
    description:
      "How to sequence CRM, automation, software, and customer channels so the company is not asked to change everything at once.",
    category: "Digital Transformation",
    tags: ["digital-transformation", "strategy", "operations"],
    author: "UHM Tech",
    publishedAt: "2026-03-26",
    featured: true,
    content: [
      {
        paragraphs: [
          "“Digital transformation” fails as a slogan because it hides the sequence. A usable program is a stack of bounded changes: one customer record, then one automated handoff, then one channel with quality, then the custom software the platforms cannot hold.",
        ],
      },
      {
        heading: "Phase 0 is a map, not a purchase",
        paragraphs: [
          "Write down systems, owners, and the path of a real customer. You will find duplicate entry and meetings that exist only to re-key data.",
          "That map decides whether you implement CRM, integrate, or build.",
        ],
      },
      {
        heading: "Each phase should leave a working company",
        paragraphs: [
          "If a phase only works when the next phase lands, you have designed a cliff. Ship something staff can run on Monday.",
          "UHM Tech uses this sequencing for startups, SMEs, and larger teams so transformation is a portfolio of deliveries, not a single cutover weekend.",
        ],
      },
    ],
  },
  {
    slug: "shared-inbox-is-not-a-helpdesk",
    title: "A shared inbox is not a helpdesk",
    description:
      "Why email, chat, and phone need ownership, SLAs, and CRM context before you add another channel.",
    category: "Customer Experience",
    tags: ["email", "support", "customer-experience"],
    author: "UHM Tech",
    publishedAt: "2026-03-12",
    featured: false,
    content: [
      {
        paragraphs: [
          "A shared mailbox solves visibility. It does not solve collision, SLA, knowledge, or history. Two people can still reply, and neither reply lands on the customer record.",
        ],
      },
      {
        heading: "Give every conversation an owner and a clock",
        paragraphs: [
          "Whether the channel is email, chat, or voice, someone must own the thread and a timer must exist for first response and resolution. Without that, volume hides delays.",
          "Canned replies need governance or they drift into outdated promises.",
        ],
      },
      {
        heading: "The channel is not the system of record",
        paragraphs: [
          "CRM or a ticketing layer should hold the customer. Channels should attach. UHM Tech designs blended support — call, chat, email — around that rule.",
        ],
      },
    ],
  },
  {
    slug: "email-automation-that-stays-human",
    title: "Email automation that still sounds like your company",
    description:
      "Transactional mail, follow-ups, and campaigns work when they are triggered by real events and easy to stop.",
    category: "Customer Experience",
    tags: ["email", "automation", "crm"],
    author: "UHM Tech",
    publishedAt: "2026-02-18",
    featured: false,
    content: [
      {
        paragraphs: [
          "Bad email automation is a sequence that cannot see the last conversation. Good automation is a message that fires because a stage changed, a ticket closed, or a payment failed — and it stays silent if a person already wrote.",
        ],
      },
      {
        heading: "Separate operational mail from campaigns",
        paragraphs: [
          "Password resets and order updates are not marketing. Mixing them in one tool without categories creates compliance and trust problems.",
          "Suppression and CRM activity should pause a nurture when a deal is in negotiation or a complaint is open.",
        ],
      },
      {
        heading: "Write for the next operator",
        paragraphs: [
          "Templates need owners, version notes, and a place in the journey map. UHM Tech connects email to CRM so follow-up is a process, not a personal habit.",
        ],
      },
    ],
  },
  {
    slug: "whatsapp-sms-and-crm",
    title: "WhatsApp, SMS, and CRM: keep messaging on the customer record",
    description:
      "Messaging channels convert when they are routed, logged, and optional — not when they become a second unofficial CRM in someone’s phone.",
    category: "Customer Experience",
    tags: ["whatsapp", "sms", "crm", "integrations"],
    author: "UHM Tech",
    publishedAt: "2026-01-29",
    featured: false,
    content: [
      {
        paragraphs: [
          "Customers will message wherever they already are. The operational risk is a sales or support conversation that never leaves a personal device.",
        ],
      },
      {
        heading: "Put identity and consent first",
        paragraphs: [
          "Know who the number belongs to and whether they asked to be contacted on that channel. Templates and opt-out are part of the design, not a later policy document.",
          "Route inbound messages into the same queues as chat and email so coverage is a team problem, not a hero problem.",
        ],
      },
      {
        heading: "Log the thread where the rest of the work lives",
        paragraphs: [
          "If the CRM cannot show that a WhatsApp conversation happened, the next agent will ask the customer to repeat themselves.",
          "UHM Tech treats messaging as another CX channel with CRM integration, not as a side app.",
        ],
      },
    ],
  },
];

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(limit = 3) {
  return [...blogPosts]
    .filter((p) => p.featured)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPost(slug);
  if (!current) return blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
  const scored = blogPosts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score:
        (p.category === current.category ? 2 : 0) + p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || b.post.publishedAt.localeCompare(a.post.publishedAt));
  return scored.filter((s) => s.score > 0).slice(0, limit).map((s) => s.post);
}
