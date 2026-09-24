import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageShell
      title="BOOK_CALL"
      description="We'd love to hear from you. Tell us about your product, brand, or design needs — our team is ready to chat."
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <dl className="space-y-8">
            <div>
              <dt className="text-mono text-[10px] text-[var(--dim)]">EMAIL</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-mono text-[10px] text-[var(--dim)]">WEBSITE</dt>
              <dd className="mt-2">
                <a
                  href={site.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--muted)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
                >
                  artonest.design
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-mono text-[10px] text-[var(--dim)]">
                LOCATION
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {site.address}
              </dd>
            </div>
            <div>
              <dt className="text-mono text-[10px] text-[var(--dim)]">SOCIAL</dt>
              <dd className="mt-3 flex flex-wrap gap-4 text-mono text-[11px]">
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--accent)]"
                >
                  LINKEDIN
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--accent)]"
                >
                  INSTAGRAM
                </a>
                <a
                  href={site.bookCall}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--accent)]"
                >
                  BOOK_ON_SITE
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </PageShell>
  );
}
