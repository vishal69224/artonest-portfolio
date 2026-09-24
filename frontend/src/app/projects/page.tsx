import type { Metadata } from "next";
import Image from "next/image";
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
      description="Live product work — Seller Hub, Video AI, AI Builder, and 3D Laptop — with demos and GitHub source."
    >
      <Reveal>
        <div className="mb-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-[var(--border)] pb-6 text-mono text-[10px] text-[var(--dim)]">
          <span>
            TOTAL_ENTRIES:{" "}
            <span className="text-[var(--accent)]">
              {String(projects.length).padStart(2, "0")}
            </span>
          </span>
          <span className="hidden h-3 w-px bg-[var(--border-strong)] sm:block" />
          <span>
            STATUS: <span className="text-[var(--foreground)]">ACCEPTING</span>
          </span>
          <span className="hidden h-3 w-px bg-[var(--border-strong)] sm:block" />
          <span>FOCUS: UI / UX / PRODUCT</span>
        </div>
      </Reveal>

      <Stagger className="border-t border-[var(--border)]" delay={0.04}>
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group relative grid gap-6 border-b border-[var(--border)] py-8 transition-[background-color,padding] duration-300 sm:py-10 lg:grid-cols-[3.5rem_minmax(10rem,14rem)_minmax(0,1fr)_auto] lg:items-center lg:gap-8 lg:px-3 lg:hover:bg-white/[0.02]"
            >
              <span
                className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-y-100"
                aria-hidden
              />

              <span className="text-mono text-[11px] text-[var(--dim)] transition-colors group-hover:text-[var(--accent)]">
                {project.number}
              </span>

              <div className="relative aspect-[16/10] w-full max-w-[14rem] overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--surface)]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="224px"
                  className="object-cover opacity-80 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}55, transparent 60%)`,
                  }}
                />
              </div>

              <div className="min-w-0">
                <p className="text-mono mb-2 text-[10px] text-[var(--dim)]">
                  {project.dateLabel}
                </p>
                <p className="text-display text-2xl tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-3xl">
                  {project.title.toUpperCase()}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-mono text-[10px] text-[var(--dim)] transition-colors group-hover:border-[var(--border-strong)] group-hover:text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <span className="text-mono flex items-center gap-2 self-start text-[11px] text-[var(--accent)] lg:self-center">
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  OPEN
                </span>
                <span
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1}>
        <div className="mt-20 border-t border-[var(--border)] pt-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-display text-2xl sm:text-3xl">Stack_Analysis</h2>
            <p className="text-mono text-[10px] text-[var(--dim)]">
              STUDIO_CAPABILITIES
            </p>
          </div>
          <dl className="mt-10 grid gap-0 border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
            {site.stackAnalysis.map((row) => (
              <div
                key={row.label}
                className="border-b border-[var(--border)] px-0 py-5 sm:px-5 sm:odd:border-r lg:[&:nth-child(3n)]:border-r-0 lg:border-r"
              >
                <dt className="text-mono text-[10px] text-[var(--accent)]">
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
