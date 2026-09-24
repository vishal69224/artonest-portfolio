export type Project = {
  slug: string;
  number: string;
  title: string;
  shortName: string;
  dateLabel: string;
  summary: string;
  overview: string;
  challenge: string;
  highlights: string[];
  stack: string[];
  accent: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

/** Featured product work — live demos linked from GitHub + Vercel. */
export const projects: Project[] = [
  {
    slug: "seller-ai",
    number: "01",
    title: "Seller Hub",
    shortName: "seller-ai",
    dateLabel: "SaaS · Commerce · AI",
    summary:
      "AI-ready seller dashboard — products, orders, analytics, and video tools in one commerce hub.",
    overview:
      "Seller Hub is a portfolio demo dashboard for marketplace sellers: catalog, orders, marketplace views, and an AI video generator path wired for public hosting.",
    challenge:
      "Shipping a credible seller ops UI that works as a public demo without exposing auth friction or private seller data.",
    highlights: [
      "Products, orders, and analytics surfaces",
      "Demo-friendly auth and sample data",
      "AI video generator module",
      "Vite frontend + FastAPI backend monorepo",
    ],
    stack: ["React", "Vite", "TypeScript", "FastAPI"],
    accent: "#38bdf8",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://seller-ai.vercel.app",
    githubUrl: "https://github.com/vishal69224/seller-ai",
  },
  {
    slug: "video-ai",
    number: "02",
    title: "Video AI",
    shortName: "video-ai",
    dateLabel: "AI · Video · Product",
    summary:
      "AI video generation product UI — model selection, uploads, and generation flows with a polished frontend.",
    overview:
      "Video AI is a React frontend for prompting models, managing uploads, and tracking generation status against a Python API.",
    challenge:
      "Making complex model pricing and generation settings feel clear while keeping the UI production-ready for demos.",
    highlights: [
      "Model picker with pricing context",
      "Upload and generation UX",
      "Motion-led product polish",
      "Vite + FastAPI architecture",
    ],
    stack: ["React", "Vite", "Framer Motion", "Python"],
    accent: "#a78bfa",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://video-ai-ten-kohl.vercel.app",
    githubUrl: "https://github.com/vishal69224/video-ai",
  },
  {
    slug: "ai-builder",
    number: "03",
    title: "AI Builder",
    shortName: "ai-builder",
    dateLabel: "AI · No-code · Web",
    summary:
      "AI website builder — edit, preview, and ship product surfaces with an OpenRouter-ready studio UI.",
    overview:
      "AI Builder is a monorepo website builder with a Vite studio frontend and FastAPI backend for generating and refining web projects.",
    challenge:
      "Keeping AI-assisted edits controllable and demoworthy while spanning web UI, API, and ML tooling in one repo.",
    highlights: [
      "Monaco-powered editing experience",
      "Web + API monorepo",
      "Portfolio demo polish and smarter edits",
      "OpenRouter-ready generation path",
    ],
    stack: ["React", "Vite", "FastAPI", "AI"],
    accent: "#f472b6",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://ai-builder-web-wheat.vercel.app",
    githubUrl: "https://github.com/vishal69224/ai-builder",
  },
  {
    slug: "3d-laptop",
    number: "04",
    title: "3D Laptop",
    shortName: "3d-laptop",
    dateLabel: "3D · Portfolio · Desktop",
    summary:
      "Interactive 3D macOS-style laptop portfolio simulator built with Panda3D — desktop experience, not a web deploy.",
    overview:
      "A desktop 3D portfolio builder that boots into a simulated laptop UI with dock, windows, lighting, and portfolio surfaces for demos and showcases.",
    challenge:
      "Building a convincing interactive 3D desktop metaphor with stable rendering, UI chrome, and portfolio content windows.",
    highlights: [
      "Panda3D interactive laptop scene",
      "Boot screen, dock, and window manager",
      "Portfolio windows and desktop widgets",
      "Open-source on GitHub (desktop runtime)",
    ],
    stack: ["Python", "Panda3D", "3D", "Desktop"],
    accent: "#fbbf24",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    githubUrl: "https://github.com/vishal69224/3d-laptop",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
