"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { projects } from "@/data/projects";

type GalleryCard = {
  id: string;
  number: string;
  title: string;
  label: string;
  summary: string;
  accent: string;
  href: string;
  image: string;
};

const TECH_MARQUEE = [
  "UI/UX",
  "WEB DESIGN",
  "MOBILE APPS",
  "SAAS",
  "FRAMER",
  "WEBFLOW",
  "BRANDING",
  "DASHBOARD",
  "LANDING PAGE",
  "NO-CODE",
  "GRAPHIC DESIGN",
  "PRODUCT DESIGN",
];

const galleryCards: GalleryCard[] = projects.map((project) => ({
  id: project.slug,
  number: project.number,
  title: project.title,
  label: project.dateLabel,
  summary: project.summary,
  accent: project.accent,
  href: `/projects/${project.slug}`,
  image: project.image,
}));

function CardFace({ card }: { card: GalleryCard }) {
  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-sm border border-white/12 bg-[#0a0a0a] shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 78vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 40%, #0a0a0a 100%), linear-gradient(135deg, ${card.accent}33, transparent 55%)`,
          }}
        />
        <p className="text-mono absolute left-4 top-4 text-[10px] text-[var(--accent)]">
          {card.number} / SYSTEM
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-[1.65rem]">
            {card.title}
          </p>
          <p className="text-mono mt-3 text-[10px] uppercase tracking-wide text-white/45">
            {card.label}
          </p>
        </div>
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/70">
          {card.summary}
        </p>
      </div>
    </div>
  );
}

function InfiniteTechMarquee() {
  const segment = TECH_MARQUEE.join("   ·   ");

  return (
    <div
      aria-hidden
      className="relative mt-8 w-full overflow-hidden sm:mt-10"
    >
      <div className="animate-marquee-slow flex w-max">
        <p className="pr-20 text-display text-[clamp(1.4rem,4vw,2.75rem)] leading-none tracking-[0.06em] text-white/[0.14]">
          {segment}
          <span className="mx-6">·</span>
        </p>
        <p className="pr-20 text-display text-[clamp(1.4rem,4vw,2.75rem)] leading-none tracking-[0.06em] text-white/[0.14]">
          {segment}
          <span className="mx-6">·</span>
        </p>
      </div>
    </div>
  );
}

export function ScrollWorkGallery() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 32,
    mass: 0.4,
    restDelta: 0.0005,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function measure() {
      if (!trackRef.current) return;
      const endPad = Math.min(window.innerWidth * 0.1, 96);
      const distance = trackRef.current.scrollWidth - window.innerWidth + endPad;
      setTravel(Math.max(distance, 0));
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const trackX = useTransform(progress, [0, 1], [48, -travel]);
  const hintOpacity = useTransform(progress, [0, 0.04, 0.1], [1, 1, 0]);

  if (reduce) {
    return (
      <section id="scroll-work" className="border-b border-[var(--border)] bg-black">
        <div className="overflow-hidden py-16">
          <div className="container-page overflow-x-auto">
            <div className="flex w-max gap-5 px-1">
              {galleryCards.map((card) => (
                <Link
                  key={card.id}
                  href={card.href}
                  className="h-[420px] w-[300px] shrink-0 sm:h-[460px] sm:w-[340px]"
                >
                  <CardFace card={card} />
                </Link>
              ))}
            </div>
          </div>
          <InfiniteTechMarquee />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="scroll-work"
      className="relative h-[260vh] border-b border-[var(--border)] bg-black"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <motion.div
          ref={trackRef}
          className="relative z-10 flex w-max items-stretch gap-5 px-6 sm:gap-6 sm:px-10 lg:gap-7"
          style={{ x: trackX }}
        >
          {galleryCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="h-[min(480px,62svh)] w-[min(340px,78vw)] shrink-0 outline-none transition-transform duration-300 hover:-translate-y-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] sm:w-[360px]"
            >
              <CardFace card={card} />
            </Link>
          ))}
        </motion.div>

        <InfiniteTechMarquee />

        <motion.p
          className="text-mono absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-[11px] text-[var(--dim)]"
          style={{ opacity: hintOpacity }}
        >
          SCROLL — BROWSE CARDS ↓
        </motion.p>
      </div>
    </section>
  );
}
