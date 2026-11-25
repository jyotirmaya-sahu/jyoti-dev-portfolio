"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Bot, CalendarCheck2, Download, FileCheck2,
  Globe2, Linkedin, Mail, MessageCircleMore, MessageSquareText, Network,
  RefreshCw, Route, UserPlus, UserRoundCheck, Workflow,
} from "lucide-react";
import { CgTwilio } from "react-icons/cg";
import { FaSalesforce } from "react-icons/fa6";
import {
  SiCalendly, SiHubspot, SiMake, SiN8N, SiStripe, SiWhatsapp, SiZapier,
} from "react-icons/si";
import styles from "./Portfolio.module.css";

const systems = [
  {
    icon: Route,
    title: "Websites that drive business",
    result: "Your website sells, captures, and starts the workflow.",
    tags: ["Websites", "Landing pages", "Forms", "CRM connection"],
  },
  {
    icon: Workflow,
    title: "Business on automation",
    result: "Leads, follow-up, and operations run in the background.",
    tags: ["CRM", "Onboarding", "Documents", "Reporting"],
  },
  {
    icon: MessageSquareText,
    title: "AI-enabled operations",
    result: "Practical AI helps the team handle more work.",
    tags: ["Lead agents", "Voice", "Knowledge", "Documents"],
  },
  {
    icon: Network,
    title: "Backend and technical ownership",
    result: "The systems stay connected, supported, and improving.",
    tags: ["Backend", "APIs", "Integrations", "Support"],
  },
];

const fundingFlow = [
  { icon: MessageSquareText, title: "Respond", text: "Reply while intent is high", status: "Instant" },
  { icon: Bot, title: "Understand", text: "Capture the complete situation", status: "AI assisted" },
  { icon: Route, title: "Route", text: "Move the right case forward", status: "Automatic" },
  { icon: FileCheck2, title: "Collect", text: "Track every required document", status: "Connected" },
  { icon: RefreshCw, title: "Update", text: "Keep every person informed", status: "Always on" },
];

const tools = [
  { name: "GoHighLevel", mark: "HL" },
  { name: "Close", mark: "C" },
  { name: "HubSpot", icon: SiHubspot },
  { name: "Salesforce", icon: FaSalesforce },
  { name: "Zapier", icon: SiZapier },
  { name: "Make", icon: SiMake },
  { name: "n8n", icon: SiN8N },
  { name: "Twilio", icon: CgTwilio },
  { name: "WhatsApp", icon: SiWhatsapp },
  { name: "Stripe", icon: SiStripe },
  { name: "Calendly", icon: SiCalendly },
];

const clients = [
  { name: "Scale Your Backend", type: "AI consulting & implementation", href: "https://www.scaleyourbackend.com/", logo: "/clients/scaleyourbackend-header.jpg" },
  { name: "WorldXpat", type: "Community & booking platform", href: "https://worldxpat.com/", logo: "/clients/worldxpat.png" },
  { name: "APG Accounting & Bookkeeping", type: "Accounting services", href: "https://apga.ae/", logo: "/clients/apg.png" },
  { name: "Exido", type: "Digital & martech agency", href: "https://exidodigital.com/", logo: "/clients/exido.png" },
];

const work = [
  {
    client: "CourierHQ", label: "Courier business platform",
    headline: "Contracts, pricing, applications, and operations in one workspace.",
    href: "https://www.courierhq.io/", image: "/work/courierhq-live.jpg", tone: "courier", tags: ["SaaS", "AI", "Operations"],
  },
  {
    client: "TEAMIS", label: "AI lead qualifier",
    headline: "A premium text-and-voice discovery experience for a global creative agency.",
    href: "https://teamisagency.com/", image: "/work/teamis-live.jpg", tone: "teamis", tags: ["Voice AI", "Discovery", "Bilingual"],
  },
  {
    client: "Scale Your Backend", label: "AI consulting platform",
    headline: "A business-first home for custom AI, automation, and implementation services.",
    href: "https://www.scaleyourbackend.com/", image: "/work/scaleyourbackend-live.jpg", tone: "backend", tags: ["Website", "Positioning", "Lead flow"],
  },
  {
    client: "PLINTH", label: "Fractional AI solutions partner",
    headline: "The positioning and digital foundation for a worldwide AI delivery partner.",
    href: "https://plinth.ae/", image: "/work/plinth-live.jpg", tone: "plinth", tags: ["Brand", "Website", "AI services"],
  },
  {
    client: "halaCX", label: "AI voice platform",
    headline: "Multilingual agents, live calls, transcripts, and outcomes in one system.",
    href: "https://halacx.plinth.ae/", image: "/work/halacx.jpg", tone: "halacx", tags: ["Voice AI", "SaaS", "Dashboard"],
  },
  {
    client: "Treysta", label: "Property lead qualification",
    headline: "Property enquiries captured, understood, and routed as qualified conversations.",
    href: "https://treysta-lead-flow.vercel.app/", image: "/work/treysta.png", tone: "treysta", tags: ["Real estate", "AI", "Lead flow"],
  },
  {
    client: "WorldXpat", label: "Community experience",
    headline: "A warm, conversion-focused digital home for real-world connection in Dubai.",
    href: "https://worldxpat.com/", image: "/work/wxp-live.jpg", tone: "wxp", tags: ["Website", "Community", "Booking flow"],
  },
  {
    client: "Exido", label: "Digital & martech agency",
    headline: "A bold agency presence that turns services and work into a clear conversion path.",
    href: "https://exidodigital.com/", image: "/work/exido-live.jpg", tone: "exido", tags: ["Website", "Agency", "Martech"],
  },
];

export default function Portfolio() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    initial: reduceMotion ? false : { y: 22 },
    whileInView: { y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.wordmark} href="#top" aria-label="Jyotirmaya Sahu, home">JS</a>
        <div className={styles.navLinks}>
          <a href="#partnership">How it works</a><a href="#systems">What I handle</a><a href="#funding">Funding teams</a><a href="#work">Work</a>
        </div>
        <a className={styles.navCta} href="/contact">Discuss your business</a>
      </nav>

      <div id="main-content">
        <section id="top" className={styles.hero}>
          <motion.div className={styles.heroCopy} initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}>
            <p className={styles.eyebrow}>Your website, automation, and AI partner</p>
            <h1>Focus on the business. I&apos;ll handle the technology.</h1>
            <p className={styles.heroText}>I build your website, automate the business, and add practical AI so you can serve more customers and scale faster without managing a technical team.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="/contact">Hand over the technical side <ArrowRight size={18} aria-hidden="true" /></a>
              <a className={styles.secondaryLink} href="#work">See the work</a>
            </div>
          </motion.div>
          <motion.figure className={styles.heroPortrait} initial={false} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
            <Image src="/profile_pic_night.jpeg" alt="Jyotirmaya Sahu by the Dubai waterfront" fill priority sizes="(max-width: 767px) 92vw, 42vw" />
            <figcaption><span>Jyotirmaya Sahu</span><small>Founder of Plinth</small></figcaption>
          </motion.figure>
          <motion.aside className={styles.heroProof} {...reveal}>
            <p>Done for you or done with you, from the first decision through build, integration, and ongoing support.</p>
            <div><span>Website</span><span>Automation</span><span>AI enablement</span><span>Ongoing support</span></div>
          </motion.aside>
        </section>

        <section className={styles.clientsSection} aria-labelledby="clients-title">
          <motion.header className={styles.clientsHeader} {...reveal}>
            <p>CLIENTS I&apos;VE WORKED WITH</p>
            <h2 id="clients-title">Trusted with the technical side.</h2>
          </motion.header>
          <div className={styles.clientIndex}>
            {clients.map((client, index) => (
              <motion.a key={client.name} href={client.href} target="_blank" rel="noreferrer" {...reveal} transition={{ ...reveal.transition, delay: index * 0.04 }}>
                <span className={styles.clientNumber}>0{index + 1}</span>
                <div className={styles.clientLogo}>
                  <Image src={client.logo} alt={`${client.name} logo`} width={240} height={96} sizes="(max-width: 767px) 180px, 220px" />
                </div>
                <div className={styles.clientMeta}><strong>{client.name}</strong><small>{client.type}</small></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </section>

        <section id="partnership" className={styles.problemSection}>
          <motion.header className={styles.problemHeader} {...reveal}>
            <p>A CLEAR DIVISION</p>
            <h2>Stay focused on the business.</h2>
          </motion.header>
          <div className={styles.ownershipMap}>
            <motion.article className={styles.ownerLane} {...reveal}>
              <span>YOUR FOCUS</span>
              <h3>Grow the business</h3>
              <div><p>Clients</p><p>Sales</p><p>Relationships</p><p>Strategy</p></div>
            </motion.article>
            <div className={styles.handoff} aria-hidden="true"><ArrowRight /><span>PLINTH</span><ArrowRight /></div>
            <motion.article className={styles.techLane} {...reveal}>
              <span>MY RESPONSIBILITY</span>
              <h3>Run the technology</h3>
              <div><p>Website</p><p>CRM</p><p>Automation</p><p>AI</p><p>Backend</p><p>Support</p></div>
            </motion.article>
          </div>
          <motion.div className={styles.problemClose} {...reveal}>
            <div><UserRoundCheck size={22} aria-hidden="true" /><p>No technical hiring. No vendor juggling. No translating between disconnected teams.</p></div>
            <a className={styles.sectionCta} href="/contact">Get this handled <ArrowRight size={17} aria-hidden="true" /></a>
          </motion.div>
        </section>

        <section id="systems" className={styles.systemsSection}>
          <motion.header className={styles.systemsHeader} {...reveal}>
            <div><p>FROM WEBSITE TO BACKEND</p><h2>Build it. Automate it. AI-enable it.</h2></div>
            <p>One partner to create the digital foundation and keep improving it as you scale.</p>
          </motion.header>
          <div className={styles.stackLayout}>
            <motion.aside className={styles.stackOwner} {...reveal}>
              <span>PLINTH OWNS THE FULL STACK</span>
              <div className={styles.stackBracket} aria-hidden="true"><i /><i /><i /><i /></div>
              <h3>One technical partner from the first click to the backend.</h3>
              <a href="/contact">Talk through my setup <ArrowRight size={17} aria-hidden="true" /></a>
            </motion.aside>
            <div className={styles.stackDiagram}>
              {systems.map((system, index) => {
                const Icon = system.icon;
                return (
                  <motion.article key={system.title} className={styles.stackLayer} {...reveal} transition={{ ...reveal.transition, delay: index * 0.05 }}>
                    <span className={styles.layerIndex}>0{index + 1}</span>
                    <div className={styles.layerIcon}><Icon size={22} aria-hidden="true" /></div>
                    <div className={styles.layerCopy}><h3>{system.title}</h3><p>{system.result}</p></div>
                    <div className={styles.layerTags}>{system.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </motion.article>
                );
              })}
              <div className={styles.stackBase}><span>YOUR DIGITAL FOUNDATION</span><strong>Built to scale with the business</strong></div>
            </div>
          </div>
        </section>

        <section className={styles.automationSection} aria-label="Automated client journey">
          <motion.header className={styles.automationHeader} {...reveal}>
            <div><span>AFTER THE CLICK</span><h2>One enquiry. A complete journey.</h2></div>
            <p>Your website starts a connected flow that captures, qualifies, follows up, and books the next step.</p>
          </motion.header>
          <motion.div className={styles.journeyCanvas} {...reveal}>
            <div className={styles.journeySignal} aria-hidden="true" />
            <article className={styles.journeyStep}>
              <div className={styles.journeyIcon}><Globe2 size={25} /></div>
              <span>WEBSITE</span><h3>Enquiry captured</h3><p>Form, chat, or campaign</p>
            </article>
            <article className={styles.journeyStep}>
              <div className={styles.journeyIcon}><UserPlus size={25} /></div>
              <span>CRM</span><h3>Lead created</h3><p>Owner and pipeline assigned</p>
            </article>
            <article className={styles.journeyStep}>
              <div className={styles.journeyIcon}><Bot size={25} /></div>
              <span>AI</span><h3>Need understood</h3><p>Qualified and summarized</p>
            </article>
            <article className={styles.journeyStep}>
              <div className={styles.journeyIcon}><MessageCircleMore size={25} /></div>
              <span>AUTOMATION</span><h3>Follow-up sent</h3><p>Email, SMS, or WhatsApp</p>
            </article>
            <article className={styles.journeyStep}>
              <div className={styles.journeyIcon}><CalendarCheck2 size={25} /></div>
              <span>NEXT STEP</span><h3>Call booked</h3><p>Your team steps in ready</p>
            </article>
          </motion.div>
          <motion.div className={styles.journeyOutcome} {...reveal}>
            <strong>While you focus on the conversation</strong>
            <div><span>No copy-paste</span><span>No manual routing</span><span>No missed follow-up</span></div>
            <a className={styles.sectionCta} href="/contact">Map my lead flow <ArrowRight size={17} aria-hidden="true" /></a>
          </motion.div>
        </section>

        <section id="funding" className={styles.fundingSection}>
          <motion.div className={styles.fundingIntro} {...reveal}>
            <p>FOR FUNDING BUSINESSES</p>
            <h2>Every client case moves forward.</h2>
            <p className={styles.fundingLead}>From the first message to the last document, the technical engine keeps the client and your team in sync.</p>
            <a href="/contact">Hand over the technical side <ArrowUpRight size={18} aria-hidden="true" /></a>
            <div className={styles.fundingPromise}>
              <span>ONE CONNECTED RECORD</span>
              <strong>No chasing. No copy-paste. No lost context.</strong>
            </div>
          </motion.div>
          <motion.div className={styles.fundingConsole} {...reveal}>
            <div className={styles.fundingConsoleTop}>
              <div><i /><span>CLIENT CASE / 028</span></div><span>LIVE</span>
            </div>
            <div className={styles.fundingCase}>
              <div className={styles.fundingAvatar}>AM</div>
              <div><span>NEW ENQUIRY</span><strong>Working capital request</strong><small>Website · 2 minutes ago</small></div>
              <span className={styles.fundingCaseStatus}>IN PROGRESS</span>
            </div>
            <div className={styles.fundingFlow}>
              {fundingFlow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className={styles.fundingStep}>
                    <div className={styles.fundingStepIcon}><Icon size={18} aria-hidden="true" /></div>
                    <span className={styles.fundingStepIndex}>0{index + 1}</span>
                    <div><h3>{step.title}</h3><p>{step.text}</p></div>
                    <span className={styles.fundingStepStatus}>{step.status}</span>
                  </article>
                );
              })}
            </div>
            <div className={styles.fundingResult}>
              <FileCheck2 size={19} aria-hidden="true" />
              <div><span>READY FOR YOUR TEAM</span><strong>Complete case brief, documents, and next action</strong></div>
              <ArrowRight size={19} aria-hidden="true" />
            </div>
          </motion.div>
        </section>

        <section className={styles.toolsSection} aria-labelledby="tools-title">
          <motion.div className={styles.toolsIntro} {...reveal}><p id="tools-title">Already using these?</p><p>I connect and manage them for you.</p></motion.div>
          <div className={styles.toolMarquee}>
            <div className={styles.toolTrack}>
              {[0, 1].map((group) => (
                <div className={styles.toolGroup} key={group} aria-hidden={group === 1}>
                  {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <div className={styles.toolItem} key={tool.name}>
                        <span className={styles.toolLogo}>{Icon ? <Icon aria-hidden="true" /> : tool.mark}</span>
                        <strong>{tool.name}</strong>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className={styles.workSection}>
          <motion.header className={styles.workHeader} {...reveal}>
            <div><p>SELECTED PROJECTS</p><h2>Different businesses.<br />The right system for each.</h2></div>
            <p>Platforms, websites, AI agents, and operating systems built around how each business actually works.</p>
          </motion.header>
          <div className={styles.workGrid}>
            {work.map((study, index) => (
              <motion.a key={study.client} className={`${styles.projectCard} ${styles[study.tone]}`} href={study.href} target="_blank" rel="noreferrer" {...reveal}>
                <div className={`${styles.projectVisual} ${study.image ? styles.projectVisualImage : ""}`}>
                  {study.image ? <Image src={study.image} alt={`${study.client} project screen`} fill sizes="(max-width: 820px) 100vw, 58vw" /> : null}
                  <div className={styles.projectChrome}><span>0{index + 1}</span><span>{study.label}</span><ArrowUpRight size={16} aria-hidden="true" /></div>
                  {!study.image ? <><strong className={styles.projectWordmark}>{study.client}</strong><div className={`${styles.projectMotif} ${styles[`motif${study.tone}`]}`} aria-hidden="true"><i /><i /><i /><i /><i /></div></> : null}
                </div>
                <div className={styles.projectCopy}>
                  <h3>{study.headline}</h3>
                  <div>{study.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.div className={styles.workCta} {...reveal}>
            <div><strong>Need a system built around your business?</strong><span>Start with the outcome. I will work backwards into the right technology.</span></div>
            <a href="/contact">Talk through the project <ArrowRight size={18} aria-hidden="true" /></a>
          </motion.div>
        </section>

        <section className={styles.partnerSection}>
          <motion.div className={styles.partnerCopy} {...reveal}><p>THE PARTNERSHIP</p><h2>Hand me the technical side.</h2><a className={styles.sectionCta} href="/contact">Choose how we work <ArrowRight size={17} aria-hidden="true" /></a></motion.div>
          <motion.div className={styles.partnerDiagram} {...reveal}>
            <div><span>UNDERSTAND</span><h3>Your business</h3><p>Goals, workflow, tools</p></div><ArrowRight />
            <div><span>BUILD</span><h3>The system</h3><p>Automation, AI, backend</p></div><ArrowRight />
            <div><span>OWN</span><h3>The technical side</h3><p>Support and improvement</p></div>
          </motion.div>
          <motion.div className={styles.engagementModes} {...reveal}>
            <article>
              <span>DONE FOR YOU</span>
              <h3>I own the technical work.</h3>
              <p>You stay focused on the business while I plan, build, connect, and maintain the systems.</p>
            </article>
            <article>
              <span>DONE WITH YOU</span>
              <h3>I work alongside your team.</h3>
              <p>We make the decisions together, build the right capability, and improve what you already have.</p>
            </article>
          </motion.div>
        </section>

        <section className={styles.aboutStrip}>
          <motion.div className={styles.aboutPortrait} {...reveal}><Image src="/profile_pic_night.jpeg" alt="Jyotirmaya Sahu, founder of Plinth" fill sizes="(max-width: 767px) 100vw, 32vw" /></motion.div>
          <motion.div className={styles.aboutText} {...reveal}>
            <span>FOUNDER OF PLINTH</span><h2>Your technical expert, without building a technical team.</h2>
            <p>I understand the business, make the technical decisions, and stay accountable for the outcome.</p>
            <div><a href="https://www.linkedin.com/in/jyotirmaya-sahu/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href="/JyotirmayaSahuResume.pdf" download><Download size={17} /> Background</a></div>
          </motion.div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <motion.div {...reveal}><p>Keep your focus on the business.</p><h2>I&apos;ll handle the technology.</h2><a className={styles.contactButton} href="/contact">Choose how to contact me <ArrowUpRight size={20} /></a></motion.div>
          <div className={styles.contactDetails}><UserRoundCheck size={28} /><a href="mailto:sahu.jyotirmaya26@gmail.com"><Mail size={17} /> sahu.jyotirmaya26@gmail.com</a><p>Dubai. Working worldwide.</p></div>
        </section>
      </div>

      <footer className={styles.footer}><p>© {new Date().getFullYear()} Jyotirmaya Sahu</p><p>Founder of Plinth</p><div><a href="https://plinth.ae" target="_blank" rel="noreferrer">Plinth <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/jyotirmaya-sahu/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div></footer>
    </main>
  );
}
