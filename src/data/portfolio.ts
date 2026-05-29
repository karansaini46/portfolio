export type Project = {
  slug: string;
  title: string;
  type: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  targetUsers: string[];
  features: string[];
  stack: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  complexity: string;
  architecture: string[];
  screenshots: string[];
  description: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const portfolio = {
  seo: {
    title: "Karan Saini | Full Stack Developer",
    description:
      "Full Stack Developer building full-stack systems across AI products, realtime collaboration, payment workflows, developer tools, and founder-focused technical platforms.",
    keywords: [
      "Karan Saini",
      "Full Stack Developer",
      "Next.js Developer",
      "React Developer",
      "Node.js Developer",
      "TypeScript Developer",
      "PostgreSQL",
      "Realtime Applications",
      "AI Developer Tools",
    ],
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Stack", href: "/#stack" },
    { label: "Contact", href: "#contact" },
  ],
  personalInfo: {
    name: "Karan Saini",
    initials: "KS",
    role: "Full Stack Developer",
    positioning:
      "Full Stack Developer building full-stack systems across AI products, realtime collaboration, payment workflows, developer tools, and founder-focused technical platforms.",
    headline: "I build full-stack systems that feel like real products.",
    subheadline:
      "AI products, realtime collaboration, payment workflows, developer tools, and founder-focused technical platforms.",
    availability: "Available for full-stack roles & freelance builds",
    location: "India",
  },
  socialLinks: {
    email: "karan0saini23@gmail.com",
    github: "https://github.com/karansaini46",
    linkedin: "",
    resume: "/Resume.pdf",
  },
  actions: {
    viewProjects: "View Work",
    github: "GitHub",
    linkedin: "LinkedIn",
    liveDemo: "Live Demo",
    email: "Email",
    unavailable: "Link unavailable",
    screenshotFallback: "Screenshot coming soon",
    closeLightbox: "Close screenshot preview",
    viewCaseStudy: "View Case Study",
    viewDetails: "View Details",
  },
  heroModules: [
    { label: "Auth", detail: "JWT / OAuth" },
    { label: "API", detail: "REST services" },
    { label: "Database", detail: "PostgreSQL" },
    { label: "Realtime", detail: "Socket streams" },
    { label: "AI", detail: "Agent workflows" },
    { label: "Queue", detail: "Background jobs" },
    { label: "Deploy", detail: "Cloud rollout" },
  ],
  projects: [
    {
      slug: "ghostcto",
      title: "GhostCTO",
      type: "AI Technical Co-Founder Platform",
      badge: "Main Showcase",
      shortDescription:
        "An AI technical co-founder platform helping non-technical founders turn vague ideas into structured roadmaps, developer-ready specs, and validated developer quotes before spending money.",
      fullDescription:
        "GhostCTO is an AI-powered technical co-founder platform built for non-technical founders. It helps turn startup ideas into structured technical roadmaps, developer-ready specs, stack decisions, quote validation, MVP scopes, hiring plans, and CTO-style guidance before founders spend money on development.",
      problem:
        "Most non-technical founders do not know what tech stack to choose, what features are realistic, how much development should cost, or whether a developer or agency quote is fair. GhostCTO gives them technical clarity before they waste money.",
      targetUsers: [
        "Non-technical founders",
        "Solo founders",
        "Startup founders",
        "Creators",
        "Small business owners",
        "Early-stage startup teams",
        "People planning to hire developers or agencies",
      ],
      features: [
        "Technical Roadmap Generator",
        "Developer Quote / Rate Validator",
        "Tech Stack Advisor",
        "Developer-ready PRD / Spec Generator",
        "MVP Scope Planner",
        "Hiring / Job Description Generator",
        "Developer and agency vetting assistant",
        "Code Audit Explanation in Plain English",
        "Ongoing CTO-style AI Chat",
        "Build Cost and Timeline Estimator",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "LangChain",
        "Gemini AI",
        "pgvector",
        "Redis",
        "BullMQ",
        "Docker",
        "Vercel",
        "Render",
      ],
      highlights: [
        "Technical roadmap generation for startup ideas",
        "Developer quote and rate validation",
        "Tech stack recommendations explained in plain English",
        "Developer-ready PRD and spec generation",
        "MVP scope planning for non-technical founders",
        "Hiring and job description generation",
        "Developer and agency vetting assistance",
        "CTO-style AI chat for ongoing technical clarity",
      ],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      complexity: "Main Showcase",
      architecture: ["AI Roadmaps", "Quote Audits", "CTO Chat", "Specs Gen", "Vetting"],
      screenshots: [
        "/projects/ghostcto/dashboard.png",
        "/projects/ghostcto/roadmap.png",
        "/projects/ghostcto/quote-validator.png",
        "/projects/ghostcto/spec-generator.png",
      ],
      description:
        "GhostCTO is an AI-powered technical co-founder platform built for non-technical founders. It helps turn startup ideas into structured technical roadmaps, developer-ready specs, stack decisions, quote validation, MVP scopes, hiring plans, and CTO-style guidance before founders spend money on development.",
    },
    {
      slug: "devmind-ai",
      title: "DevMind AI",
      type: "AI Code Review & Documentation Platform",
      badge: "Flagship System",
      shortDescription:
        "An AI engineering platform featuring streaming code reviews, semantic code search, GitHub webhook auto-reviews, and background queue processors.",
      fullDescription:
        "An AI-powered engineering platform with streaming code reviews, semantic code search, GitHub webhook auto-reviews, LangChain workflows, vector embeddings, background jobs, and GitHub OAuth.",
      problem:
        "Developers often spend too much time reviewing code manually, translating complex logic to documentation, and missing hidden performance or security issues in pull requests. DevMind AI automates these processes, bringing AI assistance directly to the Git workflow.",
      targetUsers: [
        "Software engineers",
        "Engineering managers",
        "Open-source maintainers",
        "DevOps engineers",
        "Development teams seeking auto-reviews",
      ],
      features: [
        "Streaming Code Reviews",
        "Semantic Code Search",
        "GitHub Webhook Auto-Reviews",
        "LangChain Workflow Orchestrator",
        "pgvector-based Code Embeddings",
        "Background Processing Queue",
      ],
      stack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "LangChain",
        "Model APIs",
        "pgvector",
        "BullMQ",
        "Redis",
        "GitHub OAuth",
      ],
      highlights: [
        "Realtime AI response streaming",
        "Semantic code search",
        "GitHub webhook auto-reviews",
        "LangChain agent workflows",
        "Vector embeddings with pgvector",
        "BullMQ + Redis background processing",
        "GitHub OAuth integration",
      ],
      liveUrl: "https://dev-mind-ai-client.vercel.app/",
      githubUrl: "https://github.com/karansaini46/DevMind-AI-",
      featured: false,
      complexity: "Flagship System",
      architecture: ["Streaming", "Embeddings", "Queues", "OAuth", "Webhooks"],
      screenshots: ["/projects/devmind-ai/review-report.png"],
      description:
        "An AI-powered engineering platform with streaming code reviews, semantic code search, GitHub webhook auto-reviews, LangChain workflows, vector embeddings, background jobs, and GitHub OAuth.",
    },
    {
      slug: "d-desk",
      title: "D-Desk",
      type: "Realtime Collaborative Task Manager",
      badge: "Realtime Product Build",
      shortDescription:
        "A collaborative Kanban task manager built with WebSocket sync, drag-and-drop workflows, and relational data persistence.",
      fullDescription:
        "A collaborative Kanban task manager built with realtime board updates, JWT authentication, drag-and-drop workflows, REST APIs, PostgreSQL persistence, and Prisma-backed data modeling.",
      problem:
        "Team project boards are often slow to sync, leading to double-handling or missed task updates. D-Desk provides instant board synchronization so team members can work concurrently without friction.",
      targetUsers: [
        "Project managers",
        "Remote startup teams",
        "Freelancers",
        "Agile product teams",
      ],
      features: [
        "Instant WebSocket Synchronization",
        "Drag-and-Drop Task Transitions",
        "Secure JWT Authentication",
        "RESTful API Design",
        "Relational Data Persistence",
      ],
      stack: ["React", "Node.js", "PostgreSQL", "Socket.io", "Prisma", "JWT", "REST API"],
      highlights: [
        "Realtime Kanban board updates",
        "JWT authentication flow",
        "Drag-and-drop task management",
        "REST API architecture",
        "PostgreSQL + Prisma data layer",
      ],
      liveUrl: "https://karansaini46-d-desk.vercel.app/",
      githubUrl: "https://github.com/karansaini46/d-desk",
      featured: false,
      complexity: "Realtime Product Build",
      architecture: ["Sockets", "Kanban", "Auth", "REST", "Persistence"],
      screenshots: ["/projects/d-desk/dashboard.png"],
      description:
        "A collaborative Kanban task manager built with realtime board updates, JWT authentication, drag-and-drop workflows, REST APIs, PostgreSQL persistence, and Prisma-backed data modeling.",
    },
    {
      slug: "invoiceflow",
      title: "InvoiceFlow",
      type: "Freelancer Invoicing Platform",
      badge: "Workflow Platform",
      shortDescription:
        "A freelancer invoicing platform with proposal building, automatic PDF generation, and Stripe checkout payments.",
      fullDescription:
        "A freelancer-focused invoicing platform with PDF invoice generation, email delivery, Stripe one-time payments, proposal builder, client management, and revenue dashboard.",
      problem:
        "Freelancers lose time manually creating invoices, sending payment reminders, and tracking income across multiple clients. InvoiceFlow automates invoice generation and client payments in one place.",
      targetUsers: [
        "Freelance developers",
        "Contractors",
        "Consultants",
        "Small business owners",
      ],
      features: [
        "Automated PDF Invoicing",
        "Nodemailer Transactional Emails",
        "Stripe One-Time Payments",
        "Proposal and Quote Builder",
        "Earnings Analytics Dashboard",
      ],
      stack: ["React", "Node.js", "PostgreSQL", "Prisma", "Puppeteer", "Stripe", "Nodemailer"],
      highlights: [
        "PDF invoice generation",
        "Email delivery workflow",
        "Stripe one-time payments",
        "Proposal builder",
        "Revenue dashboard",
        "Client and invoice management",
      ],
      liveUrl: "https://invoice-flow-client.vercel.app",
      githubUrl: "https://github.com/karansaini46/InvoiceFlow",
      featured: false,
      complexity: "Workflow Platform",
      architecture: ["Payments", "PDFs", "Email", "Dashboard", "Data model"],
      screenshots: ["/projects/invoiceflow/dashboard.png"],
      description:
        "A freelancer-focused invoicing platform with PDF invoice generation, email delivery, Stripe one-time payments, proposal builder, client management, and revenue dashboard.",
    },
  ] satisfies Project[],
  skills: [
    { title: "Frontend", items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"] },
    { title: "Backend", items: ["Node.js", "Express", "REST APIs", "Prisma", "PostgreSQL"] },
    { title: "AI / Data", items: ["LangChain", "Gemini AI", "pgvector", "Vector Embeddings", "Semantic Search"] },
    { title: "Realtime / Queues", items: ["Socket.io", "Redis", "BullMQ", "Background Jobs"] },
    { title: "DevOps", items: ["Docker", "GitHub", "Vercel", "Render", "AWS", "Cloudflare"] },
  ] satisfies SkillGroup[],
  proofPoints: [
    {
      title: "AI Product Systems",
      description:
        "Built engineering systems combining vector search, response streaming, LLM orchestrations, and background queue processors.",
      tags: ["LangChain", "pgvector", "Queues"],
    },
    {
      title: "Realtime Collaboration",
      description:
        "Designed collaborative Kanban boards and interactive UIs powered by WebSocket streams for instantaneous synchronization.",
      tags: ["Socket.io", "React", "Sockets"],
    },
    {
      title: "Payment Workflows",
      description:
        "Handled Stripe integration, automated billing, PDF invoice generation, and revenue dashboard data models.",
      tags: ["Stripe", "Puppeteer", "Nodemailer"],
    },
    {
      title: "Backend/API Architecture",
      description:
        "Structured clean, scalable Node.js/Express APIs, secure JWT/OAuth access layers, and robust schema migrations.",
      tags: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    },
  ],
  about: {
    title: "About",
    eyebrow: "Product-minded engineering",
    paragraphs: [
      "I’m a full-stack developer focused on building real products, not tutorial clones. My work covers collaborative apps, payment workflows, PDF generation, AI-powered code review systems, authentication, database design, background jobs, and deployment-ready architecture.",
      "I care about clean code, product thinking, performance, and building systems that feel usable in the real world.",
    ],
  },
  contact: {
    title: "Let’s build something serious.",
    subtext: "Open to full-stack roles, freelance product builds, and technical collaborations.",
  },
};

export const flagshipProject = portfolio.projects.find((project) => project.featured) ?? portfolio.projects[0];
export const supportingProjects = portfolio.projects.filter((project) => !project.featured);
