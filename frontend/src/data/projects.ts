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
};

/** Featured work inspired by Artonest Design Studio portfolio. */
export const projects: Project[] = [
  {
    slug: "solarex",
    number: "01",
    title: "Solarex",
    shortName: "solarex",
    dateLabel: "SaaS · Energy · Dashboard",
    summary:
      "Smart solar energy dashboard UI/UX — clear metrics, monitoring flows, and a product-ready interface.",
    overview:
      "A SaaS dashboard experience for solar energy monitoring, designed to keep complex energy data readable and actionable.",
    challenge:
      "Turning dense energy and device data into a calm, scannable dashboard for operators and customers.",
    highlights: [
      "Energy dashboard information architecture",
      "Clear KPI and monitoring layouts",
      "SaaS-ready UI system",
      "Mobile-aware responsive structure",
    ],
    stack: ["UI/UX", "SaaS", "Dashboard"],
    accent: "#a78bfa",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "fintech-unicron",
    number: "02",
    title: "Fintech Unicron",
    shortName: "fintech-unicron",
    dateLabel: "Fintech · Crypto · Product",
    summary:
      "Digital finance and crypto product UI — modern trading and money flows with a clean visual system.",
    overview:
      "A fintech product direction focused on trust, clarity, and fast decision-making across finance and crypto surfaces.",
    challenge:
      "Balancing dense financial data with a premium, approachable interface.",
    highlights: [
      "Finance and crypto UI patterns",
      "Trust-focused visual hierarchy",
      "Trading and account flows",
      "Consistent product design language",
    ],
    stack: ["UI/UX", "Fintech", "Web App"],
    accent: "#38bdf8",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "quickship",
    number: "03",
    title: "Quickship",
    shortName: "quickship",
    dateLabel: "Logistics · Tracking · App",
    summary:
      "Shipping and cargo tracking interface that simplifies logistics for users and operators.",
    overview:
      "A logistics product UI designed around tracking clarity, status updates, and smooth shipping workflows.",
    challenge:
      "Making multi-step shipping and tracking feel simple without hiding important status detail.",
    highlights: [
      "Shipment status storytelling",
      "Tracking map and list patterns",
      "Operator-friendly dashboards",
      "Mobile-first delivery UX",
    ],
    stack: ["UI/UX", "Logistics", "Mobile"],
    accent: "#f472b6",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "blissful",
    number: "04",
    title: "BlissFul",
    shortName: "blissful",
    dateLabel: "Healthcare · Mental Health",
    summary:
      "Mental health app UX/UI case study — calm interfaces for support, habits, and daily check-ins.",
    overview:
      "A wellness product experience designed for clarity, emotional safety, and approachable daily use.",
    challenge:
      "Designing a sensitive healthcare product that feels supportive, not clinical or overwhelming.",
    highlights: [
      "Calm visual system",
      "Habit and check-in flows",
      "Accessible interaction design",
      "Mobile-first wellness UX",
    ],
    stack: ["UI/UX", "Healthcare", "Mobile"],
    accent: "#fb7185",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "finewise",
    number: "05",
    title: "Finewise",
    shortName: "finewise",
    dateLabel: "AI · Finance · Copilot",
    summary:
      "AI-powered financial copilot interface — insights and money decisions in a clear product shell.",
    overview:
      "A finance + AI product UI that keeps recommendations understandable while supporting confident decisions.",
    challenge:
      "Presenting AI-assisted finance insights without making the experience feel opaque or risky.",
    highlights: [
      "AI insight presentation patterns",
      "Finance dashboard UI",
      "Trust and clarity in recommendations",
      "Responsive product layout",
    ],
    stack: ["UI/UX", "AI", "Fintech"],
    accent: "#fbbf24",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "feedloop",
    number: "06",
    title: "FeedLoop",
    shortName: "feedloop",
    dateLabel: "Reviews · Trust · SaaS",
    summary:
      "Authentic review and trust-building product UI for feedback loops that feel real and usable.",
    overview:
      "A SaaS-oriented review experience designed to help teams collect, present, and act on authentic feedback.",
    challenge:
      "Making review systems feel trustworthy and useful for both customers and product teams.",
    highlights: [
      "Review collection flows",
      "Trust-building UI patterns",
      "SaaS dashboard modules",
      "Clear content hierarchy",
    ],
    stack: ["UI/UX", "SaaS", "Web"],
    accent: "#818cf8",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
