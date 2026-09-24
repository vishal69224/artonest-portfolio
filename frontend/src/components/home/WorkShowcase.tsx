import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function WorkShowcase() {
  return (
    <section id="work" className="border-b border-[var(--border)]">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-display max-w-2xl text-3xl sm:text-5xl">
                Selected design work
              </h2>
              <p className="mt-4 max-w-xl text-base text-[var(--muted)]">
                Live product demos — Seller Hub, Video AI, AI Builder, and 3D
                Laptop — with GitHub source linked on each case.
              </p>
            </div>
            <Button href="/projects" variant="outline">
              VIEW_MORE
            </Button>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3" delay={0.06}>
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)]/40"
              >
                <div
                  className="relative aspect-[16/10] border-b border-[var(--border)]"
                  style={{
                    background: `linear-gradient(145deg, ${project.accent}22, transparent 58%), #0a0a0a`,
                  }}
                >
                  <div className="absolute inset-0 bg-dot-grid opacity-40" />
                  <p className="text-mono absolute left-4 top-4 text-[10px] text-[var(--accent)]">
                    {project.number} / SYSTEM
                  </p>
                  <p className="absolute bottom-4 left-4 right-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                    {project.title}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border)] px-2.5 py-1 text-mono text-[10px] text-[var(--dim)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-mono mt-6 text-[11px] text-[var(--accent)] transition-transform group-hover:translate-x-1">
                    OPEN →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
