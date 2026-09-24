import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { getProjectBySlug, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project?.title ?? "Project",
    description: project?.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <PageShell
      title={project.title.toUpperCase().replaceAll(" ", "_")}
      description={project.summary}
    >
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-[var(--border)] px-3 py-1.5 text-mono text-[10px] text-[var(--accent)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <h2 className="text-mono text-[11px] text-[var(--accent)]">OVERVIEW</h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            {project.overview}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-mono text-[11px] text-[var(--accent)]">
            CHALLENGE
          </h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            {project.challenge}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <h2 className="text-mono mt-14 text-[11px] text-[var(--accent)]">
          HIGHLIGHTS
        </h2>
        <ul className="mt-4 max-w-2xl space-y-0">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="border-b border-[var(--border)] py-4 text-[var(--muted)]"
            >
              <span className="mr-3 text-[var(--accent)]">→</span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-14 flex flex-wrap gap-3">
          <Button href="/contact">BOOK_CALL</Button>
          <Button href="/projects" variant="outline">
            ALL_PROJECTS
          </Button>
        </div>
      </Reveal>

      {next && (
        <Reveal delay={0.18}>
          <div className="mt-16 border-t border-[var(--border)] pt-10">
            <p className="text-mono text-[10px] text-[var(--dim)]">
              NEXT_SYSTEM
            </p>
            <Link
              href={`/projects/${next.slug}`}
              className="mt-3 inline-flex text-2xl transition-colors hover:text-[var(--accent)]"
            >
              {next.title.toUpperCase()} →
            </Link>
          </div>
        </Reveal>
      )}
    </PageShell>
  );
}
