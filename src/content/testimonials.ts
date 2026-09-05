export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: 5;
  placeholder: true;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "We needed a partner who could look at the whole operation — CRM, automation, and customer communication — not only a single tool. This space is reserved for a verified client quote.",
    name: "Name",
    role: "Operations Director",
    company: "Confidential client",
    rating: 5,
    placeholder: true,
  },
  {
    id: "t2",
    quote:
      "The engagement we want to highlight here is a product build with a clear architecture and a practical first release. A real testimonial will replace this placeholder.",
    name: "Name",
    role: "Product Owner",
    company: "Confidential client",
    rating: 5,
    placeholder: true,
  },
  {
    id: "t3",
    quote:
      "Support, email, and calling should feel like one customer conversation. This placeholder will be replaced when a client approves public feedback.",
    name: "Name",
    role: "Customer Experience Lead",
    company: "Confidential client",
    rating: 5,
    placeholder: true,
  },
  {
    id: "t4",
    quote:
      "We want to describe a CRM rollout that sales actually used after training — including Zoho, HubSpot, or Salesforce as applicable. Placeholder until the client signs off.",
    name: "Name",
    role: "Head of Sales",
    company: "Confidential client",
    rating: 5,
    placeholder: true,
  },
  {
    id: "t5",
    quote:
      "Reserved for a founder describing an MVP that could add tenants later. No invented product metrics will be published here.",
    name: "Name",
    role: "Founder",
    company: "Confidential client",
    rating: 5,
    placeholder: true,
  },
  {
    id: "t6",
    quote:
      "Reserved for an operations lead describing integrations between CRM, billing, and support. Replace with an approved quote.",
    name: "Name",
    role: "IT / Systems Lead",
    company: "Confidential client",
    rating: 5,
    placeholder: true,
  },
];
