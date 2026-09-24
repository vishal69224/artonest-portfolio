import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function HireBand() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="container-page py-16 sm:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
            <h2 className="text-display max-w-3xl text-3xl sm:text-5xl lg:text-6xl">
              Unlimited creativity — one subscription
            </h2>
            <p className="mt-5 max-w-xl text-base text-[var(--muted)]">
              Tell us what you need — UI/UX, a landing page, a SaaS dashboard, or
              a mobile app interface — and we will start shipping designs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">BOOK_CALL</Button>
              <Button href="/about" variant="outline">
                ABOUT_STUDIO
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
