import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { site } from "@/data/site";

export function ProcessSection() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <Reveal>
          <h2 className="text-display max-w-2xl text-3xl sm:text-5xl">
            How it works
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3" delay={0.08}>
          {site.process.map((step) => (
            <StaggerItem key={step.number}>
              <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
                <p className="text-display text-5xl text-[var(--accent)]">
                  {step.number}
                </p>
                <h3 className="mt-6 text-xl text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {step.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
