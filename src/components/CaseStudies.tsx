"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./CaseStudies.module.css";

const caseStudies = [
    {
        title: "E-Commerce Performance Overhaul",
        problem: "Legacy code caused 8s load times and high bounce rates.",
        solution: "Implemented Next.js SSR, image optimization, and code splitting.",
        impact: "95% Faster Load Time",
        gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)"
    },
    {
        title: "AI-Powered SEO Dashboard",
        problem: "Users struggled to interpret complex SEO data.",
        solution: "Built interactive visualizations using D3.js and React.",
        impact: "40% Increase in User Engagement",
        gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)"
    },
    {
        title: "Real-time Collaboration Tool",
        problem: "Data synchronization issues in multi-user sessions.",
        solution: "Integrated WebSockets and CRDTs for conflict-free editing.",
        impact: "Zero Data Conflicts",
        gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)"
    },
    {
        title: "Design System Migration",
        problem: "Inconsistent UI across 5 different products.",
        solution: "Created a unified component library with Storybook.",
        impact: "30% Faster Dev Velocity",
        gradient: "linear-gradient(135deg, #10b981, #06b6d4)"
    }
];

export default function CaseStudies() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Case Studies
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Solving complex problems with elegant technical solutions.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <div
                                className={styles.cardImage}
                                style={{ background: study.gradient, opacity: 0.1 }}
                            >
                                <span>Project Mockup</span>
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>{study.title}</h3>
                                    <ArrowUpRight className={styles.cardArrow} size={24} />
                                </div>

                                <div className={styles.problemSolution}>
                                    <span className={styles.label}>Problem</span>
                                    <p className={styles.text}>{study.problem}</p>

                                    <span className={styles.label}>Solution</span>
                                    <p className={styles.text}>{study.solution}</p>
                                </div>

                                <div className={styles.impact}>
                                    <span className={styles.label}>Impact</span>
                                    <p className={styles.impactValue}>{study.impact}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
