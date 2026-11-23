"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { IconType } from "react-icons";
import { SiAnthropic, SiDocker, SiFastapi, SiGooglecloud, SiGooglegemini, SiKubernetes, SiLangchain, SiMlflow, SiN8N, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPytorch, SiQdrant, SiReact, SiSupabase, SiTensorflow, SiTypescript } from "react-icons/si";
import { TbApi, TbBrandAws, TbBrandAzure, TbBrandOpenai, TbBrandTwilio, TbMailAi, TbWebhook } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import styles from "./Portfolio.module.css";

type Project = { title: string; type: string; metric?: string; description: string; details: string[]; image?: string; href?: string; featured?: boolean };
type ClientWork = { client: string; project: string; description: string; details: string[]; partner?: string };
type ToolId = "openai" | "anthropic" | "gemini" | "langchain" | "qdrant" | "highlevel" | "n8n" | "api" | "webhook" | "email" | "twilio" | "react" | "nextjs" | "typescript" | "nodejs" | "fastapi" | "postgresql" | "supabase" | "python" | "pytorch" | "tensorflow" | "aws" | "azure" | "gcp" | "docker" | "kubernetes" | "mlflow";
type Expertise = { title: string; promise: string; description: string; builds: string[]; stack: ToolId[] };
type ToolMeta = { name: string; icon?: IconType; custom?: "highlevel" };

const tools: Record<ToolId, ToolMeta> = {
  openai: { name: "OpenAI", icon: TbBrandOpenai }, anthropic: { name: "Anthropic", icon: SiAnthropic }, gemini: { name: "Google Gemini", icon: SiGooglegemini }, langchain: { name: "LangChain", icon: SiLangchain }, qdrant: { name: "Qdrant", icon: SiQdrant },
  highlevel: { name: "HighLevel", custom: "highlevel" }, n8n: { name: "n8n", icon: SiN8N }, api: { name: "REST APIs", icon: TbApi }, webhook: { name: "Webhooks", icon: TbWebhook }, email: { name: "Email automation", icon: TbMailAi }, twilio: { name: "Twilio", icon: TbBrandTwilio },
  react: { name: "React", icon: SiReact }, nextjs: { name: "Next.js", icon: SiNextdotjs }, typescript: { name: "TypeScript", icon: SiTypescript }, nodejs: { name: "Node.js", icon: SiNodedotjs }, fastapi: { name: "FastAPI", icon: SiFastapi }, postgresql: { name: "PostgreSQL", icon: SiPostgresql }, supabase: { name: "Supabase", icon: SiSupabase },
  python: { name: "Python", icon: FaPython }, pytorch: { name: "PyTorch", icon: SiPytorch }, tensorflow: { name: "TensorFlow", icon: SiTensorflow }, aws: { name: "AWS", icon: TbBrandAws }, azure: { name: "Microsoft Azure", icon: TbBrandAzure }, gcp: { name: "Google Cloud", icon: SiGooglecloud }, docker: { name: "Docker", icon: SiDocker }, kubernetes: { name: "Kubernetes", icon: SiKubernetes }, mlflow: { name: "MLflow", icon: SiMlflow },
};

function ToolLogo({ tool }: { tool: ToolId }) {
  const item = tools[tool];
  const Icon = item.icon;
  return <span className={styles.toolLogo} role="img" aria-label={item.name} data-label={item.name} title={item.name}>
    {Icon ? <Icon aria-hidden="true" /> : <span className={styles.highLevelMark} aria-hidden="true" />}
  </span>;
}

const projects: Project[] = [
  { title: "Treÿsta Lead Flow", type: "Real-time AI agent · Dubai brokerage", metric: "EN · HI · AR · multi-turn", image: "/work/treysta.png", href: "https://treysta-lead-flow.vercel.app/", description: "An AI agent for a Dubai real estate brokerage that qualifies incoming leads through a human, multi-turn conversation in English, Hindi, and Arabic, then writes the qualified, routed lead straight into the CRM. Grounded on the client's live projects so answers stay accurate.", details: ["OpenAI", "Multi-turn agent", "Webhook HMAC", "Idempotent CRM sync", "TypeScript"], featured: true },
  { title: "Plinth", type: "Applied AI platform", metric: "AI strategy to audit, one ecosystem", image: "/work/plinth.jpg", description: "A connected product ecosystem for AI strategy, business operations, voice automation, and audit readiness.", details: ["Product architecture", "AI workflows", "Next.js", "Production systems"], href: "https://plinth.ae" },
  { title: "Plinth Flow", type: "Operations platform", metric: "Leads to collections in one layer", image: "/work/flow.png", description: "A real estate operating layer connecting leads, availability, contracts, inspections, collections, and follow-up.", details: ["React 19", "Prisma", "Supabase", "Workflow design"], href: "https://flow.plinth.ae" },
  { title: "HalaCX", type: "Voice AI system", metric: "Real-time voice · multilingual", image: "/work/halacx.jpg", description: "A multilingual AI call-center platform with real-time voice, tenant-scoped knowledge, and durable post-call processing.", details: ["OpenAI Realtime", "Twilio", "PostgreSQL", "RAG"], href: "https://halacx.plinth.ae" },
  { title: "Mizaan", type: "AI finance workspace", metric: "Multi-entity · GCC compliance", image: "/work/mizaan.png", description: "A GCC-native finance product for multi-entity reporting, regional compliance, and conversational financial intelligence.", details: ["Cloudflare", "Vinext", "Drizzle", "AI copilot"] },
  { title: "UAE Property Manager", type: "Full-stack property operations", metric: "Leasing to finance to maintenance", image: "/work/property.png", description: "A unified workspace spanning leasing, portfolio operations, contracts, finance, maintenance, and reporting.", details: ["React", "Cloudflare", "D1", "Product engineering"] },
];

const clientWork: ClientWork[] = [
  { client: "CourierHQ", project: "Courier operations automation", description: "Connected CRM, sales follow-up, operational workflows, and internal tools to reduce manual work across the customer journey.", details: ["GoHighLevel", "n8n", "Sales automation", "Dashboards"] },
  { client: "Courier Business Academy", project: "Education and sales automation", description: "Built lead-capture, nurturing, onboarding, and learner communication workflows for a courier-business education platform.", details: ["CRM pipelines", "Email workflows", "n8n", "AI-assisted operations"] },
  { client: "Jaylen Feliciano", project: "AI workflows and application development", description: "Developed custom automations, AI-assisted workflows, integrations, and application experiences around real business processes.", details: ["AI agents", "Application development", "APIs", "Integrations"] },
  { client: "Fund2Grow", partner: "with Darius Benders", project: "Growth and funding workflow automation", description: "Streamlined lead intake, CRM follow-up, client onboarding, and AI-assisted back-office workflows with dependable handoffs.", details: ["GoHighLevel", "Lead routing", "n8n", "Workflow automation"] },
];

const expertiseGroups: Expertise[] = [
  { title: "AI products & agents", promise: "Systems that reason, retrieve, speak, and take action.", description: "I turn language models into dependable products with grounded context, controlled tool use, human review, and measurable quality.", builds: ["AI agents and copilots", "RAG and knowledge systems", "Real-time voice AI", "Evaluation and guardrails"], stack: ["openai", "anthropic", "gemini", "langchain", "qdrant"] },
  { title: "Automation & CRM", promise: "Revenue and operations workflows that keep moving without manual follow-up.", description: "I connect the systems a business already uses, remove repetitive work, and design clear exception paths for the moments that still need a person.", builds: ["GoHighLevel CRM systems", "n8n workflow automation", "Lead routing and follow-up", "API and webhook integrations"], stack: ["highlevel", "n8n", "api", "webhook", "email", "twilio"] },
  { title: "Full-stack applications", promise: "Useful software from first interaction to the underlying data model.", description: "I design and ship customer-facing products and internal platforms with accessible interfaces, typed APIs, secure data, and operational clarity.", builds: ["SaaS products and portals", "Operational dashboards", "Internal business tools", "Responsive web applications"], stack: ["react", "nextjs", "typescript", "nodejs", "fastapi", "postgresql", "supabase"] },
  { title: "ML, data & infrastructure", promise: "Production foundations that make intelligent products fast, observable, and scalable.", description: "I build the model and data layer, package it for repeatable deployment, and create the monitoring needed to operate it with confidence.", builds: ["Model training and fine-tuning", "Data and inference pipelines", "Cloud-native deployment", "MLOps and observability"], stack: ["python", "pytorch", "tensorflow", "aws", "azure", "gcp", "docker", "kubernetes", "mlflow"] },
];

export default function Portfolio() {
  const reduce = useReducedMotion();
  const reveal = { initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } };

  return <main className={styles.page}>
    <nav className={styles.nav} aria-label="Primary navigation">
      <a className={styles.wordmark} href="#top">JS</a>
      <div className={styles.navLinks}><a href="#expertise">Expertise</a><a href="#work">Work</a><a href="#clients">Clients</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
      <a className={styles.resumeLink} href="/JyotirmayaSahuResume.pdf" download>Resume <Download size={15} aria-hidden="true" /></a>
    </nav>

    <section id="top" className={styles.hero}>
      <motion.div className={styles.heroCopy} initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
        <p className={styles.eyebrow}>AI Engineer · Dubai, UAE</p>
        <h1>I build systems that think, scale, and ship.</h1>
        <p className={styles.heroText}>Production AI, intelligent automation, and full-stack products—engineered from first interface to resilient infrastructure. Based in Dubai and open to AI Engineer roles and select client work.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="#work">View work <ArrowDown size={17} /></a><a className={styles.textLink} href="mailto:sahu.jyotirmaya26@gmail.com">Email me <ArrowUpRight size={16} /></a></div>
      </motion.div>
      <motion.figure className={styles.portrait} initial={reduce ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }}><Image src="/profile_pic.jpeg" alt="Jyotirmaya Sahu" fill priority sizes="(max-width: 768px) 92vw, 40vw" /></motion.figure>
      <p className={styles.heroNote}>Building reliable AI systems and business automation for growing companies, backed by enterprise engineering experience with BrightEdge since 2020.</p>
    </section>

    <section id="expertise" className={styles.expertise}>
      <motion.div className={styles.expertiseHeader} {...reveal}>
        <div><p className={styles.eyebrow}>What I can build</p><h2>Four disciplines. One complete delivery path.</h2></div>
        <p>From the model and workflow logic to the interface, infrastructure, and production rollout—I build the whole system.</p>
      </motion.div>
      <div className={styles.expertiseList}>{expertiseGroups.map((group, index) => <motion.article key={group.title} className={styles.expertiseItem} {...reveal} transition={{ ...reveal.transition, delay: index * .05 }}>
        <span className={styles.expertiseNumber}>{String(index + 1).padStart(2, "0")}</span>
        <div className={styles.expertiseTitle}><h3>{group.title}</h3><p>{group.promise}</p></div>
        <div className={styles.expertiseDetails}>
          <p>{group.description}</p>
          <div className={styles.buildList}>{group.builds.map(item => <span key={item}>{item}</span>)}</div>
          <div className={styles.expertiseStack} aria-label={`${group.title} tools`}>{group.stack.map(item => <ToolLogo key={item} tool={item} />)}</div>
        </div>
      </motion.article>)}</div>
    </section>

    <section id="work" className={styles.work}>
      <motion.div className={styles.sectionIntro} {...reveal}><h2>Selected systems, built end to end.</h2><p>Recent work across applied AI, voice infrastructure, financial software, and operational platforms.</p></motion.div>
      <div className={styles.projectGrid}>{projects.map((project, index) => {
        const body = <><div className={styles.projectImage}>{project.image ? <Image src={project.image} alt={`${project.title} product interface`} fill sizes={project.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 40vw"} /> : <div className={styles.projectPlaceholder} aria-hidden="true"><span>{project.title}</span></div>}</div><div className={styles.projectBody}><span>{project.type}</span><div className={styles.projectTitle}><h3>{project.title}</h3>{project.href && <ArrowUpRight size={22} />}</div>{project.metric && <p className={styles.metric}>{project.metric}</p>}<p>{project.description}</p><div className={styles.tags}>{project.details.map(item => <small key={item}>{item}</small>)}</div></div></>;
        const className = `${styles.project} ${project.featured ? styles.featured : ""}`;
        return project.href ? <motion.a key={project.title} href={project.href} target="_blank" rel="noreferrer" className={className} {...reveal} transition={{ ...reveal.transition, delay: (index % 2) * .08 }}>{body}</motion.a> : <motion.article key={project.title} className={className} {...reveal} transition={{ ...reveal.transition, delay: (index % 2) * .08 }}>{body}</motion.article>;
      })}</div>
      <motion.div className={styles.earlierWork} {...reveal}>
        <h3>Earlier work</h3>
        <div>
          <span>BrightEdge LLM Content Engine</span>
          <span>AI SEO Copilot</span>
          <span>Daily Pulse Intelligence</span>
          <span>Enterprise Analytics Platform</span>
        </div>
      </motion.div>
    </section>

    <section id="clients" className={styles.clients}>
      <motion.div className={styles.clientsHeader} {...reveal}>
        <div><p className={styles.eyebrow}>Current freelance clients</p><h2>Automation built around the way each business works.</h2></div>
        <p>I partner directly with founders and operating teams to take projects from discovery through implementation, testing, deployment, and iteration.</p>
      </motion.div>
      <div className={styles.clientGrid}>{clientWork.map((work, index) => <motion.article key={work.client} className={styles.clientCard} {...reveal} transition={{ ...reveal.transition, delay: (index % 2) * .08 }}>
        <div className={styles.clientTop}><span className={styles.clientIndex}>{String(index + 1).padStart(2, "0")}</span><span className={styles.clientStatus}>Current</span></div>
        <h3>{work.client}</h3>
        {work.partner && <p className={styles.clientPartner}>{work.partner}</p>}
        <h4>{work.project}</h4>
        <p>{work.description}</p>
        <div className={styles.clientTags}>{work.details.map(item => <span key={item}>{item}</span>)}</div>
      </motion.article>)}</div>
    </section>

    <section id="experience" className={styles.experience}>
      <p className={styles.eyebrow}>Experience</p>
      <motion.div className={styles.experienceHeader} {...reveal}><h2>Enterprise depth. Product breadth.</h2><p>Building production software since 2020, from enterprise AI products to founder-led automation and applications.</p></motion.div>
      <div className={styles.timeline}>
        <motion.article {...reveal}><div><h3>Freelance AI Automation Engineer &amp; Application Developer</h3><p>Independent Consulting</p></div><time>Current</time><ul><li>Delivering AI automation, sales automation, AI agents, integrations, and application development for CourierHQ, Courier Business Academy, Jaylen Feliciano, and Fund2Grow.</li><li>Building GoHighLevel CRM pipelines and n8n workflows spanning lead capture, follow-up, routing, and back-office operations.</li><li>Owning discovery, implementation, testing, deployment, and iteration for client-specific systems.</li></ul></motion.article>
        <motion.article {...reveal}><div><h3>AI Engineer</h3><p>Mindfire Solutions · Client: BrightEdge</p></div><time>Oct 2020 - Present</time><ul><li>Led engineering for BrightEdge&apos;s first production LLM content engine and built an AI copilot over large site crawls.</li><li>Cut perceived generation wait time by 50% with WebSocket token streaming and reduced 100+ chart analytics screens from 2–3 minutes to under 5 seconds.</li><li>Built Daily Pulse and reusable product architecture that reduced defects by 40% and accelerated delivery across teams.</li></ul></motion.article>
      </div>
    </section>

    <section id="contact" className={styles.contact}>
      <div>
        <p>Have an ambitious system to build?</p>
        <h2>Let&apos;s make it real.</h2>
        <div className={styles.contactDetails}>
          <a href="mailto:sahu.jyotirmaya26@gmail.com"><Mail size={16} aria-hidden="true" /> sahu.jyotirmaya26@gmail.com</a>
          <a href="tel:+971502776805"><Phone size={16} aria-hidden="true" /> +971 50 277 6805</a>
          <a href="https://linkedin.com/in/jyotirmaya-sahu" target="_blank" rel="noreferrer"><Linkedin size={16} aria-hidden="true" /> linkedin.com/in/jyotirmaya-sahu</a>
          <span><MapPin size={16} aria-hidden="true" /> Dubai, UAE · UAE residence visa · available on short notice</span>
        </div>
      </div>
      <a className={styles.contactButton} href="mailto:sahu.jyotirmaya26@gmail.com">Start a conversation <ArrowUpRight size={20} /></a>
    </section>
    <footer className={styles.footer}><p>© {new Date().getFullYear()} Jyotirmaya Sahu</p><div><a href="https://github.com/jyotirmaya-sahu" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a><a href="https://linkedin.com/in/jyotirmaya-sahu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a><a href="mailto:sahu.jyotirmaya26@gmail.com" aria-label="Email"><Mail size={19} /></a></div></footer>
  </main>;
}
