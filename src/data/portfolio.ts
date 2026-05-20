export type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  complexity: string;
  architecture: string[];
  screenshots: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const portfolio = {
  seo: {
    title: "Karan Saini | Full Stack Developer",
    description:
      "Full Stack Developer building real-time, AI-powered, production-grade web applications with authentication, payments, APIs, databases, and deployment-ready foundations.",
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
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Proof", href: "#proof" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  personalInfo: {
    name: "Karan Saini",
    initials: "KS",
    role: "Full Stack Developer",
    positioning:
      "Full Stack Developer building real-time, AI-powered, production-grade web applications.",
    headline: "I build full-stack systems that feel like real products.",
    subheadline:
      "From real-time collaboration and payment workflows to AI code review systems, I build apps with clean architecture, scalable APIs, databases, authentication, automation, and deployment-ready foundations.",
    availability: "Available for full-stack roles & freelance builds",
    location: "India",
  },
  socialLinks: {
    email: "karan0saini23@gmail.com",
    github: "https://github.com/karansaini46",
    linkedin: "",
  },
  resumeUrl: "",
  actions: {
    viewProjects: "View Projects",
    github: "GitHub",
    linkedin: "LinkedIn",
    resume: "Resume",
    liveDemo: "Live Demo",
    email: "Email",
    unavailable: "Link unavailable",
    screenshotFallback: "Screenshot coming soon",
    closeLightbox: "Close screenshot preview",
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
  // To add screenshots, drop image files into public/projects/<project-folder>/,
  // then add web paths such as "/projects/d-desk/dashboard.png" below.
  projects: [
    {
      title: "DevMind AI",
      type: "AI Code Review & Documentation Platform",
      description:
        "An AI-powered engineering platform with streaming code reviews, semantic code search, GitHub webhook auto-reviews, LangChain workflows, vector embeddings, background jobs, and GitHub OAuth.",
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
      featured: true,
      complexity: "Flagship System",
      architecture: ["Streaming", "Embeddings", "Queues", "OAuth", "Webhooks"],
      screenshots: ["/projects/devmind-ai/review-report.png"],
    },
    {
      title: "D-Desk",
      type: "Realtime Collaborative Task Manager",
      description:
        "A collaborative Kanban task manager built with realtime board updates, JWT authentication, drag-and-drop workflows, REST APIs, PostgreSQL persistence, and Prisma-backed data modeling.",
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
    },
    {
      title: "InvoiceFlow",
      type: "Freelancer Invoicing Platform",
      description:
        "A freelancer-focused invoicing platform with PDF invoice generation, email delivery, Stripe one-time payments, proposal builder, client management, and revenue dashboard.",
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
    },
  ] satisfies Project[],
  skills: [
    { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
    { title: "Frontend", items: ["React", "Next.js", "TailwindCSS"] },
    { title: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { title: "Databases", items: ["PostgreSQL", "MongoDB", "Supabase", "pgvector"] },
    { title: "AI / Automation", items: ["LangChain", "Model APIs", "Vector Embeddings", "AI Agents"] },
    { title: "Realtime / Queues", items: ["Socket.io", "Redis", "BullMQ"] },
    { title: "DevOps / Tools", items: ["Docker", "GitHub", "Vercel", "Render", "AWS", "Cloudflare", "Postman"] },
    { title: "ORM", items: ["Prisma"] },
  ] satisfies SkillGroup[],
  proofPoints: [
    {
      title: "3 full-stack product builds",
      description:
        "Built project systems that combine frontend flows, backend services, database schemas, and deployable foundations.",
      tags: ["Frontend", "Backend", "Database"],
    },
    {
      title: "Authentication and access flows",
      description:
        "Comfortable designing secure login flows, protected APIs, token handling, and OAuth-backed product experiences.",
      tags: ["JWT", "OAuth", "Protected APIs"],
    },
    {
      title: "Payments, PDFs, and automation",
      description:
        "Built workflows for invoice generation, email delivery, one-time payments, proposals, and operational dashboards.",
      tags: ["Stripe", "PDF", "Email"],
    },
    {
      title: "Realtime and background systems",
      description:
        "Worked with live collaboration, response streaming, Redis-backed queues, background jobs, and async processing.",
      tags: ["Socket.io", "Redis", "BullMQ"],
    },
    {
      title: "AI engineering workflows",
      description:
        "Built review and documentation systems using semantic retrieval, embeddings, streaming responses, and agent workflows.",
      tags: ["LangChain", "pgvector", "Streaming"],
    },
    {
      title: "Product-to-infrastructure range",
      description:
        "Can work across UI, API design, data modeling, deployment workflows, and product-level polish.",
      tags: ["UI", "APIs", "Deployment"],
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
