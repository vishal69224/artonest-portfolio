"use client";

import { useSyncExternalStore } from "react";
import { FadeIn } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

function formatTime() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: site.timezone,
  }).format(new Date());
}

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 30_000);
  return () => window.clearInterval(id);
}

export function Hero() {
  const time = useSyncExternalStore(subscribe, formatTime, () => "--:--");

  return (
    <section className="relative min-h-[92svh] overflow-hidden border-b border-[var(--border)]">
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute left-[55%] top-[18%] h-[60%] w-[55%] -translate-x-1/2 rounded-full opacity-70"
      />

      <p
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-display text-[clamp(4rem,16vw,12rem)] tracking-tight text-white/[0.035] select-none md:block"
      >
        ARTONEST
      </p>

      <div className="container-page relative flex min-h-[92svh] flex-col justify-center pb-16 pt-12 md:pb-20 md:pt-16 lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <FadeIn delay={0.05}>
            <p className="text-mono text-[11px] text-[var(--muted)]">
              {site.fullName} · {site.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <h1 className="text-display mt-4 text-[clamp(3rem,11vw,6.5rem)] leading-[0.86] text-[var(--accent)]">
              ARTONEST
              <span className="cursor-blink text-[var(--accent)]">_</span>
              <span className="mt-1 block text-[clamp(1.8rem,5vw,3.2rem)] text-[var(--foreground)]">
                TECHNOSYS
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.22}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Based in{" "}
              <span className="text-[var(--accent)]">{site.location}</span>.{" "}
              {site.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact">BOOK_CALL</Button>
              <Button href="/projects" variant="outline">
                VIEW_WORK
              </Button>
              <Button href={site.website} variant="ghost">
                ARTONEST.DESIGN
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.38}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-mono text-[11px] text-[var(--dim)]">
              <span className="text-[var(--accent)]">
                {site.availability.toUpperCase()}
              </span>
              <span>
                {time} {site.timezone.replace("_", "/")}
              </span>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-[var(--accent)]"
              >
                E {site.email}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-[var(--border)] bg-black/80 backdrop-blur-sm">
        <div className="container-page flex items-center justify-between gap-4 overflow-x-auto py-2.5">
          <div className="flex items-center gap-4 text-mono text-[10px] text-[var(--dim)]">
            <span>Problems</span>
            <span>Output</span>
            <span>Debug Console</span>
            <span className="border-b border-[var(--accent)] pb-0.5 text-[var(--foreground)]">
              Terminal
            </span>
            <span>Ports</span>
          </div>
          <a
            href="#scroll-work"
            className="text-mono shrink-0 text-[10px] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            SCROLL ↓
          </a>
        </div>
      </div>
    </section>
  );
}
