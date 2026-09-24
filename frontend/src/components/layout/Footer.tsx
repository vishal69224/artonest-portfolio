import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-black">
      <div className="container-page py-16 sm:py-20">
        <Reveal>
          <h2 className="text-display mt-0 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            See if Artonest is perfect for your needs
          </h2>
          <p className="mt-5 max-w-xl text-base text-[var(--muted)]">
            UI/UX, websites, mobile apps, SaaS dashboards, branding, Framer and
            Webflow — one subscription, endless design possibilities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">BOOK_CALL</Button>
            <Button href={site.website} variant="outline">
              VISIT_SITE
            </Button>
          </div>
          <p className="text-mono mt-10 text-[12px] text-[var(--dim)]">
            artonest@studio:~${" "}
            <span className="cursor-blink text-[var(--accent)]">_</span>
          </p>
        </Reveal>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container-page grid gap-10 py-12 sm:grid-cols-[1fr_auto_auto] sm:items-start">
          <div>
            <p className="text-display text-4xl text-[var(--accent)] sm:text-5xl">
              ARTONEST
              <span className="cursor-blink">_</span>
            </p>
            <p className="text-mono mt-4 max-w-sm text-[10px] leading-relaxed text-[var(--dim)]">
              © 2026 {site.name} {"//"} {site.fullName}
            </p>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-[var(--muted)]">
              {site.address}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-mono text-[11px] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                {item.number}/{item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-mono text-[11px] text-[var(--muted)]">
            <a
              href={site.website}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)]"
            >
              WEBSITE
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)]"
            >
              LINKEDIN
            </a>
            <a
              href={site.bookCall}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)]"
            >
              BOOK_CALL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
