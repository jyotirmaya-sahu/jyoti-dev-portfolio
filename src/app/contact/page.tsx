import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Mail } from "lucide-react";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Jyotirmaya Sahu | Plinth",
  description: "Email Jyotirmaya directly or book a 30-minute conversation about your website, automation, AI, or technical operations.",
};

const calendlyUrl = "https://calendly.com/jsahu-plinth/30min?month=2026-11";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Contact page navigation">
        <Link className={styles.wordmark} href="/" aria-label="Return to Jyotirmaya Sahu portfolio">JS</Link>
        <Link className={styles.backLink} href="/"><ArrowLeft size={17} aria-hidden="true" /> Back to portfolio</Link>
      </nav>

      <section className={styles.contactHero}>
        <header className={styles.intro}>
          <p>CONTACT ME</p>
          <h1>Let&apos;s talk about the technical side.</h1>
          <span>Choose the option that works best for you.</span>
        </header>

        <div className={styles.contactGrid}>
          <aside className={styles.emailPanel}>
            <div className={styles.emailIcon}><Mail size={25} aria-hidden="true" /></div>
            <span>EMAIL ME DIRECTLY</span>
            <h2>Prefer to write?</h2>
            <p>Share what you are building, what feels stuck, or what you want to automate.</p>
            <a href="mailto:sahu.jyotirmaya26@gmail.com">
              sahu.jyotirmaya26@gmail.com <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <small>Dubai. Working worldwide.</small>
          </aside>

          <section className={styles.calendarPanel} aria-labelledby="calendar-title">
            <header>
              <div><CalendarDays size={22} aria-hidden="true" /><span>30 MINUTES</span></div>
              <h2 id="calendar-title">Book a conversation</h2>
            </header>
            <div className={styles.calendarFrame}>
              <iframe src={calendlyUrl} title="Book a 30-minute call with Jyotirmaya Sahu" loading="eager" />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
