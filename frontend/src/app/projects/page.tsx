import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <PageShell
      title="PORTFOLIO"
      description="Innovative and creative solutions from Artonest — SaaS, fintech, logistics, healthcare, and product design."
    >
      <Reveal>
        <div className="mb-10 flex flex-wrap gap-6 text-mono text-[10px] text-[var(--dim)]">
          <span>TOTAL_ENTRIES: {String(projects.length).padStart(2, "0")}</span>
          <span>STATUS: ACCEPTING</span>
          <span>FOCUS: UI / UX / PRODUCT</span>
        </div>
      </Reveal>

      <Stagger className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group grid gap-4 py-8 lg:grid-cols-[9rem_minmax(0,1fr)_auto] lg:items-start lg:gap-10"
            >
              <span className="text-mono text-[11px] text-[var(--dim)]">
                {project.dateLabel}
              </span>
              <div>
                <p className="text-2xl tracking-tight transition-colors group-hover:text-[var(--accent)] sm:text-3xl">
                  {project.title.toUpperCase()}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-[var(--border)] px-2.5 py-1 text-mono text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-mono text-[11px] text-[var(--accent)]">
                OPEN →
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1}>
        <div className="mt-16">
          <h2 className="text-display text-2xl sm:text-3xl">Stack_Analysis</h2>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.stackAnalysis.map((row) => (
              <div
                key={row.label}
                className="rounded-sm border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <dt className="text-mono text-[10px] text-[var(--dim)]">
                  {row.label}
                </dt>
                <dd className="mt-2 text-sm text-[var(--foreground)]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </PageShell>
  );
}
