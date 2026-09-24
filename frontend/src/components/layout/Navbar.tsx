"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-black/80 backdrop-blur-md">
      <div className="container-page flex h-[var(--nav-height)] items-center justify-between gap-4">
        <Link
          href="/"
          className="text-mono text-sm font-bold tracking-[0.08em] text-[var(--accent)]"
        >
          {site.brand}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex lg:gap-9"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-mono text-[11px] transition-colors duration-200",
                  active
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                )}
              >
                <span className="text-[var(--accent)]">{item.number}/</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" className="hidden sm:inline-flex">
            BOOK_CALL
          </Button>
          <button
            type="button"
            className="inline-flex rounded-md border border-[var(--border)] px-3 py-2 text-mono text-[10px] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-black md:hidden"
        >
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-mono border-b border-[var(--border)] py-3.5 text-sm text-[var(--muted)]"
              >
                <span className="text-[var(--accent)]">{item.number}/</span>
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit rounded-full bg-[var(--accent)] px-5 py-2.5 text-mono text-[11px] font-semibold text-[var(--accent-foreground)]"
            >
              BOOK_CALL
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
