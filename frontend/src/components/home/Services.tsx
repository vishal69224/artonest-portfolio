import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { site } from "@/data/site";

export function Services() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <Reveal>
          <h2 className="text-display max-w-2xl text-3xl sm:text-5xl">
            Creative services with smooth delivery
          </h2>
          <p className="mt-4 max-w-xl text-base text-[var(--muted)]">
            UI/UX, web and mobile product design, SaaS dashboards, and no-code
            builds — accepting new projects.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3" delay={0.08}>
          {site.services.map((service) => (
            <StaggerItem key={service.title}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-strong)]">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-mono text-[10px] text-[var(--dim)]">
                    {service.code}
                  </p>
                  <span className="text-mono text-[10px] text-[var(--accent)]">
                    {service.status}
                  </span>
                </div>
                <h3 className="mt-5 text-xl text-[var(--foreground)]">
                  {service.title.replaceAll("_", " ")}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {service.body}
                </p>
                <pre className="mt-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-black p-4 text-[11px] leading-relaxed text-[var(--muted)]">
                  <code>{service.codeSample}</code>
                </pre>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
