"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Artonest inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-xl space-y-5">
      <label className="block">
        <span className="text-mono text-[10px] text-[var(--dim)]">NAME</span>
        <input
          required
          name="name"
          className="mt-2 w-full rounded-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)]"
          placeholder="Your name"
        />
      </label>
      <label className="block">
        <span className="text-mono text-[10px] text-[var(--dim)]">EMAIL</span>
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full rounded-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)]"
          placeholder="you@company.com"
        />
      </label>
      <label className="block">
        <span className="text-mono text-[10px] text-[var(--dim)]">MESSAGE</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-y rounded-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--accent)]"
          placeholder="Tell us about your product, brand, or design needs..."
        />
      </label>
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button type="submit">BOOK_CALL</Button>
        {status === "sent" && (
          <p className="text-mono text-[10px] text-[var(--accent)]">
            OPENING_MAIL_CLIENT…
          </p>
        )}
      </div>
    </form>
  );
}
