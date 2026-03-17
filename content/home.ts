// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... (other types unchanged) ...

export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// --- RelateIQ Defaults ---
export const defaultHomeContent: HomeContent = {
  // ── Hero ──────────────────────────────
  hero: {
    badgeInner: "New",
    badgeOuter: "RelateIQ CRM is live",
    titleBefore: "Your team's next generation",
    titleHighlight: "CRM",
    titleAfter: "for human-first sales",
    subtitle:
      "RelateIQ unifies your contacts, pipeline, and messaging in a single powerful workspace. Give your team superpowers with search, collaboration, and AI-driven insights.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "See Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "RelateIQ dashboard preview",
  },

  // ── Sponsors ─────────────────────────
  sponsors: {
    heading: "Backed by leading tech",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────
  benefits: {
    eyebrow: "Why RelateIQ",
    heading: "Collaborative CRM for growing teams",
    description:
      "RelateIQ is built for teams who want clarity, speed, and AI-powered tools to close their next deal, without the overhead of legacy CRM bloat.",
    items: [
      {
        icon: "Blocks",
        title: "All-in-one Workspace",
        description: "Centralize contacts, notes, and pipeline in one place with collaborative editing.",
      },
      {
        icon: "LineChart",
        title: "AI-powered Insights",
        description: "Automate follow-ups, surface hot opportunities, and let RelateIQ keep your sales engine running.",
      },
      {
        icon: "Wallet",
        title: "Faster Deals, Less Admin",
        description: "Automate repetitive tasks and focus on what matters: relationships.",
      },
      {
        icon: "Sparkle",
        title: "Effortless Onboarding",
        description: "Intuitive UI and helpful defaults let your team get started in minutes — no training required.",
      },
    ],
  },

  // ── Features ─────────────────────────
  features: {
    eyebrow: "Product Features",
    heading: "Everything your sales team needs",
    subtitle:
      "RelateIQ blends powerful data management, automation, and collaboration so you can close more deals, faster.",
    items: [
      { icon: "TabletSmartphone", title: "Work from Anywhere", description: "Cloud-native and mobile responsive for productivity on the go." },
      { icon: "BadgeCheck", title: "Secure & Private", description: "Your company’s data encrypted and access controlled by role." },
      { icon: "Goal", title: "AI Email Summaries", description: "Automatic meeting/call logs, contact research, and message insights." },
      { icon: "PictureInPicture", title: "Automated Reminders", description: "Never miss a follow-up, with scheduled reminders and deadline nudges." },
      { icon: "MousePointerClick", title: "Data Imports", description: "Easy CSV imports and seamless Google/Microsoft integration (coming soon)." },
      { icon: "Newspaper", title: "Simple Reports", description: "Pipeline, win/loss, and activity reporting with self-serve exports." },
    ],
  },

  // ── Services ─────────────────────────
  services: {
    eyebrow: "RelateIQ Services",
    heading: "A CRM foundation you’ll actually use",
    subtitle:
      "Designed for teams of all sizes, ready to scale as you grow. Move fast now, adapt when you need custom flows.",
    items: [
      { title: "Email & Calendar Sync", description: "One-click Gmail and Outlook integration keeps your pipeline current.", pro: false },
      { title: "Team Collaboration", description: "Assign deals, leave notes, and work together with zero friction.", pro: false },
      { title: "OpenAI Assist", description: "AI-enhanced recommendations, drafts, and insights for all users.", pro: false },
      { title: "Role-based Permissions", description: "Granular controls for admins, managers, and reps.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────
  testimonials: {
    eyebrow: "What our users say",
    heading: "Winning more deals with RelateIQ",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Head of Sales, FinixCore", comment: "RelateIQ replaced our tangled spreadsheet setup and let us close deals without worrying about updates or duplicates.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "RevOps, OrbitDesk", comment: "The automated reminders and AI suggestions keep our team ahead of the follow-up game.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Emma Brooks", role: "Founder, Loopify", comment: "Onboarding took minutes, not days — RelateIQ gave us clarity on our best opportunities instantly.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Daniel Kim", role: "Engineering Manager, PulseOps", comment: "Our data is safe and our reps are happy. Loving the simple UI and fast search.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Sofia Green", role: "Founder, LaunchPad AI", comment: "We moved to RelateIQ and never looked back. The calendar sync and AI summaries are amazing.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the RelateIQ Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product & Engineering"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
      // You can expand with additional mock teammates or leave just the founder for MVP.
    ],
  },

  // ── Pricing ──────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple pricing for real teams",
    subtitle: "Pay only for what you need. No contracts, no setup fees. Start for free, upgrade as you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: false,
        price: 0,
        description: "Best for founders and small teams getting started.",
        buttonText: "Try for free",
        benefits: ["Up to 3 users", "All integrations", "AI recommendations", "Basic reporting", "Email support"],
      },
      {
        title: "Growth",
        popular: true,
        price: 29,
        description: "For growing sales teams that want automation and insights.",
        buttonText: "Start 14-day trial",
        benefits: ["Unlimited users", "AI summaries", "Priority support", "Advanced permissions", "Calendar sync"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 99,
        description: "Custom controls, SSO, and dedicated onboarding.",
        buttonText: "Contact sales",
        benefits: ["SSO/SAML", "Custom integrations", "Onboarding", "Phone & email support", "Account manager"],
      },
    ],
  },

  // ── Contact ──────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Reach the RelateIQ Team",
    description:
      "Ask for a personalized demo, request integrations, or get product support. Delivering sales success is only an email away.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Our HQ", value: "Remote-first • San Francisco, CA" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM PT"] },
    },
    formSubjects: ["Product Demo", "Integration Request", "Support", "AI Features", "Enterprise Plan"],
    formSubmitLabel: "Send inquiry",
  },

  // ── FAQ ──────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Questions? We've got answers.",
    items: [
      { question: "Is RelateIQ really free to start?", answer: "Yes, our starter plan is free with all core features — upgrade only when you need more." },
      { question: "Is my team’s data secure?", answer: "Absolutely. All data is encrypted and only accessible by your team. We never sell or share your data." },
      { question: "Can I use RelateIQ on mobile?", answer: "Yep! It's fully responsive and optimized for any device." },
      { question: "Can we connect Google/Outlook accounts?", answer: "Google/Outlook sync is coming soon. Let us know if this is a must-have for you!" },
      { question: "How do I contact support?", answer: "Email chirag@bidx.ai or use the form above — real humans respond within 24 hours." },
    ],
  },

  // ── Footer ───────────────────────────
  footer: {
    brandName: "RelateIQ",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Github", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya/" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Get Support", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya/" },
        ],
      },
    ],
    copyright: "\u00a9 2026 RelateIQ. All rights reserved.",
    attribution: { label: "Powered by Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────
  navbar: {
    brandName: "RelateIQ",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "RelateIQ preview" },
    features: [
      { title: "AI-powered CRM", description: "AI suggestions, deal forecasting, and zero-manual logging." },
      { title: "Blazing Fast Search", description: "Instant access to contacts, notes, and tasks." },
      { title: "Open, Extensible", description: "APIs and import/export to fit your stack." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "Chirag Dodiya’s GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}