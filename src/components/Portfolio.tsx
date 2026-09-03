"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import styles from "./Portfolio.module.css";

const projects = [
  { title: "Plinth", type: "Applied AI platform", image: "/work/plinth.jpg", description: "A connected product ecosystem for AI strategy, business operations, voice automation, and audit readiness.", details: ["Product architecture", "AI workflows", "Next.js", "Production systems"], href: "https://plinth.ae", featured: true },
  { title: "Plinth Flow", type: "Operations platform", image: "/work/flow.png", description: "A real estate operating layer connecting leads, availability, contracts, inspections, collections, and follow-up.", details: ["React 19", "Prisma", "Supabase", "Workflow design"], href: "https://flow.plinth.ae" },
  { title: "HalaCX", type: "Voice AI system", image: "/work/halacx.jpg", description: "A multilingual AI call-center platform with real-time voice, tenant-scoped knowledge, and durable post-call processing.", details: ["OpenAI Realtime", "Twilio", "PostgreSQL", "RAG"], href: "https://halacx.plinth.ae" },
  { title: "Mizaan", type: "AI finance workspace", image: "/work/mizaan.png", description: "A GCC-native finance product for multi-entity reporting, regional compliance, and conversational financial intelligence.", details: ["Cloudflare", "Vinext", "Drizzle", "AI copilot"] },
  { title: "UAE Property Manager", type: "Full-stack property operations", image: "/work/property.png", description: "A unified workspace spanning leasing, portfolio operations, contracts, finance, maintenance, and reporting.", details: ["React", "Cloudflare", "D1", "Product engineering"] },
];

const stack = ["TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "OpenAI", "RAG", "AI agents", "Twilio", "Supabase", "Cloudflare", "Prisma", "Drizzle", "Docker", "CI/CD"];

export default function Portfolio() {
  const reduce = useReducedMotion();
  const reveal = { initial: reduce ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } };

  return <main className={styles.page}>
    <nav className={styles.nav} aria-label="Primary navigation">
      <a className={styles.wordmark} href="#top">JS</a>
      <div className={styles.navLinks}><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
      <a className={styles.resumeLink} href="/JyotirmayaSahuResume.pdf" download>Résumé <Download size={15} aria-hidden="true" /></a>
    </nav>

    <section id="top" className={styles.hero}>
      <motion.div className={styles.heroCopy} initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
        <p className={styles.eyebrow}>AI &amp; Full-Stack Engineer</p>
        <h1>I build systems that think, scale, and ship.</h1>
        <p className={styles.heroText}>Production AI and full-stack products, engineered from first interface to resilient infrastructure.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="#work">View work <ArrowDown size={17} /></a><a className={styles.textLink} href="mailto:sahu.jyotirmaya26@gmail.com">Email me <ArrowUpRight size={16} /></a></div>
      </motion.div>
      <motion.figure className={styles.portrait} initial={reduce ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }}><Image src="/profile_pic.jpeg" alt="Jyotirmaya Sahu" fill priority sizes="(max-width: 768px) 92vw, 40vw" /></motion.figure>
      <p className={styles.heroNote}>Building reliable AI systems and thoughtful full-stack products, backed by enterprise engineering experience at BrightEdge.</p>
    </section>

    <section id="work" className={styles.work}>
      <motion.div className={styles.sectionIntro} {...reveal}><h2>Selected systems, built end to end.</h2><p>Recent work across applied AI, voice infrastructure, financial software, and operational platforms.</p></motion.div>
      <div className={styles.projectGrid}>{projects.map((project, index) => {
        const body = <><div className={styles.projectImage}><Image src={project.image} alt={`${project.title} product interface`} fill sizes={project.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 40vw"} /></div><div className={styles.projectBody}><span>{project.type}</span><div className={styles.projectTitle}><h3>{project.title}</h3>{project.href && <ArrowUpRight size={22} />}</div><p>{project.description}</p><div className={styles.tags}>{project.details.map(item => <small key={item}>{item}</small>)}</div></div></>;
        const className = `${styles.project} ${project.featured ? styles.featured : ""}`;
        return project.href ? <motion.a key={project.title} href={project.href} target="_blank" rel="noreferrer" className={className} {...reveal} transition={{ ...reveal.transition, delay: (index % 2) * .08 }}>{body}</motion.a> : <motion.article key={project.title} className={className} {...reveal} transition={{ ...reveal.transition, delay: (index % 2) * .08 }}>{body}</motion.article>;
      })}</div>
      <motion.div className={styles.earlierWork} {...reveal}>
        <h3>Earlier work</h3>
        <div>
          <span>E-Commerce Performance Overhaul</span>
          <span>AI-Powered SEO Dashboard</span>
          <span>Real-time Collaboration Tool</span>
          <span>Design System Migration</span>
        </div>
      </motion.div>
    </section>

    <section className={styles.capabilities}>
      <motion.div className={styles.capabilityLead} {...reveal}><h2>AI grounded in software engineering.</h2><p>I design the product, build the system, connect the model, and make the whole thing dependable in production.</p></motion.div>
      <motion.div className={styles.capabilityList} {...reveal}>
        <article><strong>Applied AI</strong><p>Agent workflows, retrieval systems, real-time voice, tool use, evaluation, and safety boundaries.</p></article>
        <article><strong>Full-stack products</strong><p>Accessible React interfaces, typed APIs, data models, authentication, billing, and operational workflows.</p></article>
        <article><strong>Production architecture</strong><p>Tenant isolation, queues, idempotency, observability, resilient integrations, testing, and deployment.</p></article>
      </motion.div>
    </section>

    <section className={styles.stack}><h2>Working stack</h2><div className={styles.stackGrid}>{stack.map(item => <span key={item}>{item}</span>)}</div></section>

    <section id="experience" className={styles.experience}>
      <p className={styles.eyebrow}>Experience</p>
      <motion.div className={styles.experienceHeader} {...reveal}><h2>Enterprise depth. Product breadth.</h2><p>More than five years building high-performance software and growing into applied AI engineering.</p></motion.div>
      <div className={styles.timeline}>
        <motion.article {...reveal}><div><h3>Senior Software Engineer</h3><p>BrightEdge</p></div><time>2022 - May 2026</time><ul><li>Built AI recommendation experiences and complex SEO analytics products.</li><li>Reduced critical enterprise page-load times by 95%.</li><li>Created reusable frontend architecture used across product teams.</li><li>Mentored engineers and led technical knowledge transfer.</li></ul></motion.article>
        <motion.article {...reveal}><div><h3>Software Engineer</h3><p>BrightEdge</p></div><time>2020 - 2022</time><ul><li>Built Daily Pulse, an SEO health tracker used by enterprise customers.</li><li>Developed data-rich dashboards and a reusable chart framework.</li><li>Improved engineering efficiency while reducing product defects.</li></ul></motion.article>
      </div>
    </section>

    <section id="contact" className={styles.contact}><div><p>Have an ambitious system to build?</p><h2>Let&apos;s make it real.</h2></div><a className={styles.contactButton} href="mailto:sahu.jyotirmaya26@gmail.com">Start a conversation <ArrowUpRight size={20} /></a></section>
    <footer className={styles.footer}><p>© {new Date().getFullYear()} Jyotirmaya Sahu</p><div><a href="https://github.com/jyotirmaya-sahu" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a><a href="https://linkedin.com/in/jyotirmaya-sahu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a><a href="mailto:sahu.jyotirmaya26@gmail.com" aria-label="Email"><Mail size={19} /></a></div></footer>
  </main>;
}
