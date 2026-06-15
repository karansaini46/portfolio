export type ProjectNode = {
  id: string;
  label: string;
  type: "client" | "server" | "database" | "queue" | "ai" | "storage" | "integration" | "external";
  description: string;
};

export type ProjectEdge = {
  from: string;
  to: string;
  label?: string;
};

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
  status: "active" | "stable" | "experimental" | "in-development" | "Completed";
  category: string;
  featuredOrder?: number;
  archNodes?: ProjectNode[];
  archEdges?: ProjectEdge[];
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
    headline: "I build systems, not just screens.",
    subheadline:
      "Full-stack products across AI workflows, realtime collaboration, developer tools, payments, and technical platforms for founders.",
    availability: "Available for full-stack roles & freelance builds",
    location: "India",
  },
  socialLinks: {
    email: "karan0saini23@gmail.com",
    github: "https://github.com/karansaini46",
    linkedin: "https://www.linkedin.com/in/karansaini-dev/",
    resume: "/Resume.pdf",
    x: "https://x.com/KaranSaini46",
  },
  actions: {
    viewProjects: "View selected work",
    github: "GitHub",
    linkedin: "LinkedIn",
    liveDemo: "Live Demo",
    email: "Email",
    unavailable: "Link unavailable",
    screenshotFallback: "Preview data loading",
    closeLightbox: "Close screenshot preview",
    viewCaseStudy: "Read case study",
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
      badge: "Featured System",
      shortDescription:
        "An AI technical co-founder platform helping non-technical founders turn vague ideas into structured roadmaps, developer-ready specs, and validated developer quotes.",
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
      liveUrl: "https://ghost-cto-web.vercel.app",
      githubUrl: "https://github.com/karansaini46/GhostCTO",
      featured: true,
      complexity: "Main Showcase",
      architecture: ["AI Roadmaps", "Quote Audits", "CTO Chat", "Specs Gen", "Vetting"],
      screenshots: [
        "/projects/ghostcto/dashboard.png",
      ],
      description:
        "GhostCTO is an AI-powered technical co-founder platform built for non-technical founders. It helps turn startup ideas into structured technical roadmaps, developer-ready specs, stack decisions, quote validation, MVP scopes, hiring plans, and CTO-style guidance before founders spend money on development.",
      status: "stable",
      category: "ai",
      featuredOrder: 1,
      archNodes: [
        { id: "client", label: "Next.js WebApp", type: "client", description: "Modern web dashboard for founder navigation" },
        { id: "api", label: "LangChain Engine", type: "ai", description: "AI service orchestrating roadmaps and specs" },
        { id: "db", label: "PostgreSQL & Prisma", type: "database", description: "Relational storage for client records and specs" },
        { id: "redis", label: "Redis & BullMQ", type: "queue", description: "Background workers managing doc generators" },
        { id: "vector", label: "pgvector VectorDB", type: "database", description: "Semantic indexing of spec libraries" }
      ],
      archEdges: [
        { from: "client", to: "api" },
        { from: "api", to: "db" },
        { from: "api", to: "redis" },
        { from: "api", to: "vector" }
      ]
    },
    {
      slug: "ether",
      title: "ETHER",
      type: "Your Codebase as a 3D Universe",
      badge: "Featured System",
      shortDescription:
        "An interactive codebase visualizer that transforms GitHub repositories into explorable 3D universes. Files become stars, folders form constellations, dependencies become spatial connections, and users can navigate and inspect the architecture visually.",
      fullDescription:
        "ETHER converts repository structure and dependency data into a spatial 3D environment. It gives developers a visual way to explore files, inspect modules, trace relationships, and understand architecture without navigating the codebase only as a flat directory tree. It features an interactive WebGL universe, camera flight navigation, shared selection states, and an AI spatial navigator helper.",
      problem:
        "Large repositories are difficult to understand through folders and source files alone. Developers often need significant time to identify important modules, trace dependencies, and understand how different parts of a system are connected.",
      targetUsers: [
        "Software engineers",
        "Technical architects",
        "Open-source maintainers",
        "Onboarding developers",
        "Engineering managers",
      ],
      features: [
        "GitHub repository analysis",
        "Interactive 3D codebase galaxy",
        "Files represented as selectable stars or nodes",
        "Folders represented as constellations",
        "Dependency connections between files",
        "Click-and-drag galaxy navigation",
        "Scroll-wheel and pinch zoom",
        "Exact file-node selection",
        "File information inspector",
        "Searchable repository files",
        "Dependency-path visualization",
        "Rendering-quality controls",
        "AI spatial navigator",
        "Responsive explorer interface",
        "Demo universe",
        "Mobile and desktop interaction support",
      ],
      stack: [
        "React",
        "TypeScript",
        "Three.js",
        "React Three Fiber",
        "WebGL",
        "Node.js",
        "Express",
        "GitHub API",
        "LangChain",
        "Zustand",
        "Tailwind CSS",
      ],
      highlights: [
        "Data-driven transformation of repository files into a spatial graph",
        "Interactive Three.js/WebGL node rendering",
        "Camera-based galaxy navigation",
        "Shared selection state between sidebar, search, inspector, and 3D nodes",
        "Dependency highlighting and module isolation",
        "Distance-aware node and label rendering",
        "Responsive HUD behavior",
        "GitHub API integration",
        "AI commands grounded in repository structure",
        "Performance controls for larger graphs",
      ],
      liveUrl: "https://ether-sandy.vercel.app/",
      githubUrl: "https://github.com/karansaini46/ETHER",
      featured: true,
      complexity: "Flagship System",
      architecture: [
        "Repository URL",
        "GitHub API",
        "Repository Analyzer",
        "File and Folder Parser",
        "Dependency Graph",
        "Graph Layout Engine",
        "3D Renderer",
        "File Inspector",
        "Search",
        "AI Navigator",
        "Explorer State",
      ],
      screenshots: [
        "/projects/ether/ether-landing.png",
        "/projects/ether/ether-galaxy.png",
        "/projects/ether/ether-file-inspector.png",
        "/projects/ether/ether-ai-navigator.png",
      ],
      description:
        "Explore an entire GitHub codebase as a living 3D universe of files, systems, and dependencies.",
      status: "Completed",
      category: "Developer Tool · 3D Visualization · Code Intelligence",
      featuredOrder: 2,
      archNodes: [
        { id: "url", label: "Repository URL", type: "integration", description: "Starting point: public or private GitHub repository URL" },
        { id: "github", label: "GitHub API", type: "external", description: "Fetches directories, files, contents, and metadata" },
        { id: "analyzer", label: "Repository Analyzer", type: "server", description: "Initiates system scanning and parsing streams" },
        { id: "parser", label: "File and Folder Parser", type: "server", description: "Builds absolute file paths and isolates modules" },
        { id: "dep_graph", label: "Dependency Graph", type: "database", description: "AST parse nodes mapping import structures" },
        { id: "layout", label: "Graph Layout Engine", type: "server", description: "Solves 3D force-directed node coordinates" },
        { id: "state", label: "Explorer State", type: "client", description: "Zustand store tracking selected files, search, and UI presets" },
        { id: "renderer", label: "3D Renderer (Three.js)", type: "client", description: "Canvas displaying stars, lines, bloom, and flight camera" },
        { id: "inspector", label: "File Inspector", type: "client", description: "Side panel displaying size, complexity, and imports" },
        { id: "search", label: "Fuzzy Search", type: "client", description: "Quick search interface to focus specific paths" },
        { id: "ai", label: "AI Navigator (Gemini)", type: "ai", description: "LangChain agent resolving natural language spatial queries" }
      ],
      archEdges: [
        { from: "url", to: "github" },
        { from: "github", to: "analyzer" },
        { from: "analyzer", to: "parser" },
        { from: "parser", to: "dep_graph" },
        { from: "dep_graph", to: "layout" },
        { from: "layout", to: "renderer" },
        { from: "state", to: "inspector" },
        { from: "state", to: "search" },
        { from: "state", to: "renderer" },
        { from: "dep_graph", to: "ai" },
        { from: "ai", to: "renderer" }
      ]
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
      status: "stable",
      category: "ai",
      archNodes: [
        { id: "webhook", label: "GitHub Webhook", type: "integration", description: "Receives pull request events" },
        { id: "api", label: "Express App API", type: "server", description: "Endpoints handling OAuth and repo requests" },
        { id: "jobs", label: "BullMQ Processors", type: "queue", description: "Queue running background file reviews" },
        { id: "gemini", label: "Gemini AI Workspace", type: "ai", description: "LLM streaming review comments" },
        { id: "vector", label: "pgvector Index", type: "database", description: "Semantic search across codebase files" }
      ],
      archEdges: [
        { from: "webhook", to: "api" },
        { from: "api", to: "jobs" },
        { from: "jobs", to: "gemini" },
        { from: "api", to: "vector" }
      ]
    },
    {
      slug: "d-desk",
      title: "D-Desk",
      type: "Realtime Collaborative Task Manager",
      badge: "Realtime System",
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
      status: "stable",
      category: "realtime",
      archNodes: [
        { id: "client", label: "React Client", type: "client", description: "Interactive boards with drag & drop" },
        { id: "gateway", label: "Socket.io Gateway", type: "server", description: "Websocket server broadcasting updates" },
        { id: "api", label: "REST Server API", type: "server", description: "Traditional board and task endpoints" },
        { id: "db", label: "PostgreSQL", type: "database", description: "Persistent storage for boards, columns, and tickets" }
      ],
      archEdges: [
        { from: "client", to: "gateway" },
        { from: "client", to: "api" },
        { from: "gateway", to: "db" },
        { from: "api", to: "db" }
      ]
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
      status: "stable",
      category: "payment",
      archNodes: [
        { id: "client", label: "React Interface", type: "client", description: "Proposal builder and invoice analytics" },
        { id: "api", label: "Express Server", type: "server", description: "API handling document data and analytics" },
        { id: "stripe", label: "Stripe Checkout", type: "external", description: "Secures one-time card checkout payments" },
        { id: "puppeteer", label: "Puppeteer PDF", type: "server", description: "Compiles styled HTML template to PDF" },
        { id: "mail", label: "Nodemailer Client", type: "integration", description: "Transmits PDF invoices via SMTP" }
      ],
      archEdges: [
        { from: "client", to: "api" },
        { from: "api", to: "stripe" },
        { from: "api", to: "puppeteer" },
        { from: "api", to: "mail" }
      ]
    },
    {
      slug: "renderpilot",
      title: "RenderPilot",
      type: "AI Render Automation Platform",
      badge: "In Development",
      shortDescription:
        "An automation platform for heavy media files, background render tasks, S3 object storage, and production-ready pipelines.",
      fullDescription:
        "RenderPilot is an in-development render automation platform designed to handle large creative files, render jobs, storage workflows, and production-ready output pipelines. It focuses on simplifying how users upload assets, manage render tasks, track processing status, store outputs, and organize generated files.",
      problem:
        "Creative and AI-render workflows often become messy when large files, job queues, storage configuration, and generated outputs are handled manually. RenderPilot is being built to manage that workflow from one dashboard.",
      targetUsers: [
        "3D Artists & Creators",
        "VFX Studios",
        "Creative Teams",
        "AI Rendering Developers",
        "Production Engineers",
      ],
      features: [
        "Large file upload workflow",
        "Render job queue management",
        "Object storage integration",
        "Render status tracking",
        "Output file management",
        "Asset preview system",
        "Storage provider configuration"
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
        "Redis",
        "BullMQ",
        "Object Storage",
        "Docker",
      ],
      highlights: [
        "Large file upload and storage workflow",
        "Queue-based render job processing",
        "Render status tracking and task management",
        "Object storage integration for generated outputs",
        "Dashboard-first interface for render tasks",
        "Scalable backend and storage architecture"
      ],
      liveUrl: "",
      githubUrl: "",
      featured: false,
      complexity: "In Development",
      architecture: [
        "Queues",
        "Object Storage",
        "File Uploads",
        "Background Jobs",
        "Docker"
      ],
      screenshots: [],
      description:
        "RenderPilot is an in-development render automation platform designed to handle large creative files, render jobs, storage workflows, and production-ready output pipelines.",
      status: "in-development",
      category: "infrastructure",
      archNodes: [
        { id: "client", label: "Next.js Console", type: "client", description: "Creative pipeline uploads dashboard" },
        { id: "queue", label: "BullMQ Jobs", type: "queue", description: "Distributes file rendering tasks to workers" },
        { id: "s3", label: "S3 Object Store", type: "storage", description: "Houses large assets and output renderings" },
        { id: "workers", label: "Docker Workers", type: "server", description: "Schedules containerized background jobs" }
      ],
      archEdges: [
        { from: "client", to: "queue" },
        { from: "queue", to: "workers" },
        { from: "workers", to: "s3" }
      ]
    }
  ] as Project[],
  skills: [
    { title: "Interface", items: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"] },
    { title: "Application", items: ["Node.js", "Express", "REST APIs", "Prisma", "JWT"] },
    { title: "Data", items: ["PostgreSQL", "pgvector", "Redis", "BullMQ"] },
    { title: "Realtime", items: ["Socket.io"] },
    { title: "AI systems", items: ["LangChain", "Gemini AI", "Vector Embeddings", "Semantic Search"] },
    { title: "Infrastructure", items: ["Docker", "GitHub Workflows", "Vercel", "Render", "S3 Storage"] },
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
    title: "Have a system worth building?",
    subtext: "I’m open to full-stack roles, product engineering work, and focused freelance builds.",
  },
};

export const flagshipProject = portfolio.projects.find((project) => project.featured) ?? portfolio.projects[0];
export const supportingProjects = portfolio.projects.filter((project) => !project.featured);
export const experimentalProjects = portfolio.projects.filter((project) => project.status === "experimental" || project.status === "in-development");
export const selectedProjects = portfolio.projects.filter((project) => project.status !== "experimental" && project.status !== "in-development");
