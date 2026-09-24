import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "border border-transparent bg-white !text-[#0a0a0a] shadow-[0_1px_0_rgba(255,255,255,0.4)_inset] hover:bg-[#f4f4f5] hover:!text-[#0a0a0a]",
  ghost:
    "border border-transparent bg-transparent !text-[var(--muted)] hover:!text-[var(--foreground)]",
  outline:
    "border border-white/20 bg-transparent !text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] hover:!text-[var(--accent)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-mono text-[11px] font-semibold transition-[background-color,color,border-color,opacity,box-shadow] duration-200",
    variants[variant],
    className
  );

  if (href) {
    const external = /^https?:\/\//i.test(href);
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
