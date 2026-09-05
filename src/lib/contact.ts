export const serviceInterestOptions = [
  "Business Automation",
  "CRM Solutions",
  "Software Development",
  "SaaS Development",
  "AI & Automation",
  "Call Center Services",
  "Chat Support",
  "Email Services",
  "API & Integrations",
  "Management Systems",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "To be discussed",
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000+",
] as const;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  details: string;
  website?: string;
};

export function validateContact(input: ContactPayload) {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!input.name.trim() || input.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!emailRe.test(input.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (input.phone && input.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a valid phone number or leave it blank.";
  }
  if (!input.service) {
    errors.service = "Please select a service.";
  }
  if (!input.details.trim() || input.details.trim().length < 20) {
    errors.details = "Please share a little more about the project (at least 20 characters).";
  }
  if (input.details.length > 5000) {
    errors.details = "Please keep project details under 5,000 characters.";
  }

  return errors;
}

export function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}
