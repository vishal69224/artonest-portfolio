import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function PageShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <main className="bg-dot-grid min-h-[70vh]">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <Reveal>
          <h1 className="text-display text-4xl text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </main>
  );
}
