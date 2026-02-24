"use client";

import { useState } from "react";

const projectTypes = ["Custom Home", "Remodel", "Addition", "Available Home", "Homesite Inquiry", "Other"];
const budgetRanges = ["Under $300k", "$300k - $500k", "$500k - $750k", "$750k - $1M", "$1M+"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: projectTypes[0],
  budget: budgetRanges[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "There was a problem submitting your request.");
      }

      setStatus("success");
      setMessage("Thanks! We received your request and will follow up soon.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="card-soft !p-4 sm:!p-6 grid gap-4 text-center sm:text-left" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))}
            className="rounded-xl border border-black/10 px-4 py-3 outline-none ring-brand transition focus:ring-2"
            type="text"
            name="name"
            autoComplete="name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Email
          <input
            required
            value={form.email}
            onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
            className="rounded-xl border border-black/10 px-4 py-3 outline-none ring-brand transition focus:ring-2"
            type="email"
            name="email"
            autoComplete="email"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Phone
          <input
            required
            value={form.phone}
            onChange={(event) => setForm((previous) => ({ ...previous, phone: event.target.value }))}
            className="rounded-xl border border-black/10 px-4 py-3 outline-none ring-brand transition focus:ring-2"
            type="tel"
            name="phone"
            autoComplete="tel"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Project Type
          <select
            value={form.projectType}
            onChange={(event) => setForm((previous) => ({ ...previous, projectType: event.target.value }))}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-brand transition focus:ring-2"
            name="projectType"
          >
            {projectTypes.map((projectType) => (
              <option key={projectType} value={projectType}>
                {projectType}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium">
        Budget
        <select
          value={form.budget}
          onChange={(event) => setForm((previous) => ({ ...previous, budget: event.target.value }))}
          className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-brand transition focus:ring-2"
          name="budget"
        >
          {budgetRanges.map((budgetRange) => (
            <option key={budgetRange} value={budgetRange}>
              {budgetRange}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea
          required
          value={form.message}
          onChange={(event) => setForm((previous) => ({ ...previous, message: event.target.value }))}
          className="min-h-32 rounded-xl border border-black/10 px-4 py-3 outline-none ring-brand transition focus:ring-2"
          name="message"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-brand mx-auto disabled:cursor-not-allowed disabled:opacity-70 sm:mx-0" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Get a Free Quote"}
        </button>
        <p className={`text-sm ${status === "error" ? "text-red-600" : "text-foreground/70"}`}>{message}</p>
      </div>
    </form>
  );
}
