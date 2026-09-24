export const site = {
  name: "Artonest Technosys",
  fullName: "Artonest Design Studio",
  brand: "ARTONEST_",
  title: "Artonest Technosys — UI/UX, Web & Product Design",
  description:
    "Subscription-based design studio for UI/UX, websites, mobile apps, SaaS dashboards, branding, and no-code builds.",
  role: "Design Studio",
  tagline:
    "Your subscription-based design studio — UI/UX, websites, mobile apps, SaaS dashboards, and branding. All you need.",
  location: "Surat, Gujarat, India",
  address:
    "329, Silver Stone Arcade, Causeway Rd, nr. D-Mart, River Park Society, Katargam, Surat, Gujarat 395004",
  timezone: "Asia/Kolkata",
  email: "hello@artonest.design",
  phone: "",
  website: "https://artonest.design/",
  bookCall: "https://artonest.design/contact",
  availability: "Accepting new projects",
  resume: "https://artonest.design/portfolio",
  about: {
    summary: [
      "Artonest is a subscription-based design studio focused on UI/UX, websites, mobile apps, SaaS dashboards, branding, and no-code development.",
      "We help startups and growing teams ship polished product experiences with fixed monthly pricing, unlimited requests (one at a time), and revisions until you are happy.",
      "From first draft in about 48 hours to Framer, Webflow, and full design systems — we stay with you until the work feels right.",
    ],
  },
  education: {
    school: "Artonest Design Studio",
    degree: "10+ years of industry design experience across the team",
    place: "Surat · Remote-friendly",
    period: "Ongoing",
  },
  experience: [
    {
      role: "Subscribe",
      company: "Getting started",
      duration: "24 hrs",
      path: "~/ARTONEST/SUBSCRIBE",
      body: "Select a plan that fits your needs, get access to a Trello board within 24 hours, and start listing your requests.",
      stack: ["PLAN", "TRELLO", "BRIEF"],
    },
    {
      role: "Receive",
      company: "Delivery",
      duration: "2–3 days",
      path: "~/ARTONEST/RECEIVE",
      body: "Start receiving designs within 2–3 business days — often sooner for smaller tasks.",
      stack: ["UI/UX", "WEB", "MOBILE"],
    },
    {
      role: "Continue",
      company: "Revisions",
      duration: "Until done",
      path: "~/ARTONEST/CONTINUE",
      body: "Approve designs or request revisions. We are not done until you are thrilled — your satisfaction is our commitment.",
      stack: ["REVISE", "APPROVE", "SHIP"],
    },
  ],
  skills: [
    "UI/UX",
    "WEB DESIGN",
    "MOBILE APPS",
    "SAAS",
    "FRAMER",
    "WEBFLOW",
    "BRANDING",
    "NO-CODE",
  ],
  skillGroups: [
    {
      title: "Product Design",
      items: ["UI/UX Design", "SaaS Dashboards", "Web Applications", "Landing Pages"],
    },
    {
      title: "Platforms",
      items: ["Website Design", "Mobile App Design", "E-commerce", "Enterprise Software UI"],
    },
    {
      title: "Build & Brand",
      items: ["Framer", "Webflow", "Branding", "Graphic Design"],
    },
  ],
  process: [
    {
      number: "01",
      title: "Subscribe",
      body: "Pick a plan, get board access within 24 hours, and start listing design requests.",
    },
    {
      number: "02",
      title: "Receive",
      body: "Get first drafts in about 48 hours — faster for smaller tasks.",
    },
    {
      number: "03",
      title: "Continue",
      body: "Approve or revise until the work matches your goal. Pause or cancel anytime.",
    },
  ],
  services: [
    {
      code: "0041",
      title: "UI_UX_DESIGN",
      body: "Intuitive, engaging user experiences across websites, apps, and digital products.",
      status: "ACTIVE",
      tenure: "HIRING",
      codeSample: `// Research → Wireframe → UI
flow.userJourney()
  .wireframes()
  .highFidelity()`,
    },
    {
      code: "0042",
      title: "WEB_MOBILE",
      body: "Modern responsive websites and sleek iOS/Android interfaces aligned to your brand.",
      status: "ACTIVE",
      tenure: "HIRING",
      codeSample: `// Responsive + mobile-first
layout.desktop()
layout.tablet()
layout.mobile()`,
    },
    {
      code: "0043",
      title: "SAAS_NOCODE",
      body: "Clean SaaS dashboards plus Framer and Webflow builds for speed and collaboration.",
      status: "ACTIVE",
      tenure: "HIRING",
      codeSample: `// Dashboard + no-code
saas.metrics()
framer.publish()
webflow.ship()`,
    },
  ],
  stackAnalysis: [
    { label: "DESIGN", value: "UI / UX" },
    { label: "WEB", value: "Sites & apps" },
    { label: "MOBILE", value: "iOS / Android" },
    { label: "SAAS", value: "Dashboards" },
    { label: "NO-CODE", value: "Framer / Webflow" },
    { label: "BRAND", value: "Identity" },
  ],
  social: {
    website: "https://artonest.design/",
    linkedin: "https://www.linkedin.com/company/artonest",
    dribbble: "https://dribbble.com/",
    behance: "https://www.behance.net/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const navItems = [
  { number: "01", label: "HOME", href: "/" },
  { number: "02", label: "WORK", href: "/projects" },
  { number: "03", label: "ABOUT", href: "/about" },
  { number: "04", label: "CONTACT", href: "/contact" },
] as const;
