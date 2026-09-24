import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageShell
      title="STUDIO"
      description="Artonest Technosys is a subscription-based design studio for UI/UX, web, mobile, SaaS, and branding."
    >
      <div className="max-w-3xl">
        <Stagger>
          {site.about.summary.map((para) => (
            <StaggerItem key={para.slice(0, 28)}>
              <p className="mt-0 mb-5 text-base leading-relaxed text-[var(--muted)]">
                {para}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <h2 className="text-mono mt-10 text-[11px] text-[var(--accent)]">
            STUDIO
          </h2>
          <p className="mt-3 text-[var(--foreground)]">{site.education.degree}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {site.education.school} · {site.education.place}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            {site.address}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="text-mono mt-10 text-[11px] text-[var(--accent)]">
            HOW_IT_WORKS
          </h2>
          <div className="mt-4 space-y-6">
            {site.experience.map((job) => (
              <div key={job.role}>
                <p className="text-[var(--foreground)]">
                  {job.role} · {job.company}
                </p>
                <p className="text-mono mt-1 text-[10px] text-[var(--dim)]">
                  Timeline: {job.duration}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{job.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={site.website}>VISIT_ARTONEST</Button>
            <Button href="/contact" variant="outline">
              BOOK_CALL
            </Button>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
