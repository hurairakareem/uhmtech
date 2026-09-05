"use client";

import { useState } from "react";
import { budgetOptions, serviceInterestOptions, type ContactPayload } from "@/lib/contact";

const initial: ContactPayload = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "To be discussed",
  details: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok?: boolean; errors?: Record<string, string>; message?: string };
      if (!res.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        setMessage(data.message ?? "Please check the form and try again.");
        return;
      }
      setStatus("success");
      setMessage("Thank you. We received your request and will respond shortly.");
      setForm(initial);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email us directly.");
    }
  }

  const field = "mt-1 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input className={field} name="name" autoComplete="name" required value={form.name} onChange={(e) => update("name", e.target.value)} />
        </Field>
        <Field label="Company" error={errors.company}>
          <input className={field} name="company" autoComplete="organization" value={form.company} onChange={(e) => update("company", e.target.value)} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" error={errors.email}>
          <input className={field} type="email" name="email" autoComplete="email" required value={form.email} onChange={(e) => update("email", e.target.value)} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input className={field} type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Service interested in" error={errors.service}>
          <select className={field} name="service" required value={form.service} onChange={(e) => update("service", e.target.value)}>
            <option value="">Select a service</option>
            {serviceInterestOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget" error={errors.budget}>
          <select className={field} name="budget" value={form.budget} onChange={(e) => update("budget", e.target.value)}>
            {budgetOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Project details" error={errors.details}>
        <textarea
          className={`${field} min-h-32`}
          name="details"
          required
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
        />
      </Field>
      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Talk to an Expert"}
      </button>
      {message ? (
        <p className={`text-sm ${status === "success" ? "text-green-700" : "text-red-700"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      {children}
      {error ? (
        <span className="mt-1 block text-xs font-medium text-red-600" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
