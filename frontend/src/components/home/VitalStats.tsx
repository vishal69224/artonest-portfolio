import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const stats = [
  {
    value: "48H",
    label: "First draft target",
    detail: "Fast turnaround on design requests",
  },
  {
    value: "10+",
    label: "Years experience",
    detail: "Pro designers across product & brand",
  },
  {
    value: "∞",
    label: "Requests & revisions",
    detail: "One at a time · until you are happy",
  },
];

export function VitalStats() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="container-page py-14 sm:py-16">
        <Stagger className="grid gap-4 sm:grid-cols-3" delay={0.05}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-7">
                <p className="text-display text-4xl text-[var(--accent)] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{stat.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <p className="text-mono mt-6 text-[10px] text-[var(--dim)]">
            Fixed monthly pricing · Pause or cancel anytime · Surat, India
          </p>
        </Reveal>
      </div>
    </section>
  );
}
