import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { site } from "@/data/site";

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-[var(--border)]">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <Reveal>
          <h2 className="text-display max-w-2xl text-3xl sm:text-5xl">
            Capabilities we ship for clients
          </h2>
          <p className="mt-4 max-w-xl text-base text-[var(--muted)]">
            Product design, platforms, and build tools — from UI/UX to Framer and
            Webflow.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3" delay={0.08}>
          {site.skillGroups.map((group) => (
            <StaggerItem key={group.title}>
              <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-strong)]">
                <h3 className="text-mono text-[11px] text-[var(--accent)]">
                  {group.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[var(--border)] pb-3 text-sm text-[var(--foreground)] last:border-0 last:pb-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 overflow-hidden border-t border-[var(--border)] pt-8">
          <div className="flex w-max animate-marquee gap-3">
            {[...site.skills, ...site.skills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-mono text-[11px] text-[var(--muted)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
