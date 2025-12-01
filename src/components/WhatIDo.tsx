"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, Layers } from "lucide-react";
import styles from "./WhatIDo.module.css";

const services = [
    {
        icon: <Code2 size={24} />,
        title: "Frontend Performance",
        description: "Reduced page load from 2 minutes to 5 seconds (95% improvement) for enterprise clients.",
        tags: ["React", "TypeScript", "Microfrontends", "RxJS"]
    },
    {
        icon: <BarChart3 size={24} />,
        title: "AI + SEO Analytics",
        description: "Building AI-powered recommendation engines and real-time crawl data visualization dashboards.",
        tags: ["AI Integration", "Data Viz", "SEO", "Analytics"]
    },
    {
        icon: <Layers size={24} />,
        title: "Enterprise Architecture",
        description: "Designing scalable, maintainable architectures and reusable component libraries for large teams.",
        tags: ["Scalability", "Architecture", "Mentorship", "Design Systems"]
    }
];

export default function WhatIDo() {
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
                        What I Do
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Delivering high-performance solutions for enterprise-scale problems.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                            <div className={styles.tags}>
                                {service.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
