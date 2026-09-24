import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { site } from "@/data/site";

export function ExecHistory() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <Reveal>
          <h2 className="text-display max-w-2xl text-3xl sm:text-5xl">
            How it works
          </h2>
          <p className="mt-4 max-w-xl text-base text-[var(--muted)]">
            Subscribe, receive designs fast, and revise until you are thrilled —
            the Artonest delivery loop.
          </p>
        </Reveal>

        <Stagger className="mt-10 border-t border-[var(--border)]">
          {site.experience.map((job) => (
            <StaggerItem key={job.role}>
              <article className="grid gap-4 border-b border-[var(--border)] py-9 sm:grid-cols-[11rem_1fr] sm:gap-12">
                <p className="text-mono text-[11px] text-[var(--dim)]">
                  {job.duration}
                </p>
                <div>
                  <h3 className="text-xl text-[var(--foreground)]">
                    {job.role}
                  </h3>
                  <p className="text-mono mt-2 text-[11px] text-[var(--accent)]">
                    {job.path}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
                    {job.body}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border)] px-2.5 py-1 text-mono text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <Link
            href="/about"
            className="mt-8 inline-flex text-mono text-[11px] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            FULL_ABOUT →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
