"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Sparkles, Code2 } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background} />

            <div className={styles.content}>
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Terminal size={14} style={{ marginRight: "8px" }} />
                        Senior Software Engineer
                    </motion.div>

                    <h1 className={styles.title}>
                        Jyotirmaya Sahu
                    </h1>

                    <p className={styles.subtitle}>
                        Full-Stack Development, Applied AI Engineering & Scalable Architecture
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>95%</span>
                            <span className={styles.statLabel}>Faster Page Loads</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>5+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>3x</span>
                            <span className={styles.statLabel}>Star Performer</span>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <p className={styles.subtitle}>
                            Check My Skills For
                        </p>
                        <a
                            href="#skills-ai"
                            className={styles.primaryBtn}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.hash = 'skills-ai';
                                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <Sparkles size={18} /> AI
                        </a>
                        <a
                            href="#skills-fullstack"
                            className={styles.secondaryBtn}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.hash = 'skills-fullstack';
                                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <Code2 size={18} /> Full Stack
                        </a>
                    </div>

                </motion.div>

                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.profileGlow} />
                    <div className={styles.profileImage}>
                        <Image
                            src="/profile_pic.jpeg"
                            alt="Jyotirmaya Sahu"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
