"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                {/* <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Interested in working together? Let's connect.
                    </motion.p>
                </div>

                <motion.form
                    className={styles.form}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Name</label>
                        <input type="text" className={styles.input} placeholder="Your name" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email</label>
                        <input type="email" className={styles.input} placeholder="your@email.com" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Message</label>
                        <textarea className={styles.textarea} placeholder="Tell me about your project..." />
                    </div>

                    <button type="submit" className={styles.submitBtn}>Send Message</button>
                </motion.form> */}

                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Jyotirmaya Sahu. All rights reserved.</p>
                    <div className={styles.socials}>
                        <a href="mailto:sahu.jyotirmaya26@gmail.com" className={styles.socialLink}>
                            <Mail size={20} />
                        </a>
                        <a href="https://linkedin.com/in/jyotirmaya-sahu" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/jyotirmaya-sahu" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <Github size={20} />
                        </a>
                    </div>
                </footer>
            </div>
        </section>
    );
}

