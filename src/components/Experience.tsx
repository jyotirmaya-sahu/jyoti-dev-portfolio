"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const experiences = [
    {
        role: "Senior Software Engineer",
        company: "BrightEdge",
        period: "2022 – Present",
        achievements: [
            "Built AI recommendation engine integrating React + backend APIs.",
            "Built complex SEO analytics dashboards with real-time data visualization.",
            "Integrated RxJS for real-time updates and efficient data handling.",
            "Reduced load times by 95% for major clients like Walmart & Adobe.",
            "Built reusable front-end libraries to standardize UI across products.",
            "Mentored junior developers and led Knowledge Transfer (KT) sessions."
        ]
    },
    {
        role: "Software Engineer",
        company: "BrightEdge",
        period: "2020 – 2022",
        achievements: [
            "Built 'Daily Pulse' SEO health tracker used by thousands of users.",
            "Developed interactive dashboards using Highcharts and React.",
            "Created a reusable chart framework to speed up development.",
            "Reduced bugs by 40% and improved developer efficiency by 30%."
        ]
    }
];

export default function Experience() {
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
                        Experience
                    </motion.h2>
                </div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={styles.item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className={styles.dot} />
                            <div className={styles.content}>
                                <div className={styles.roleHeader}>
                                    <div>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <span className={styles.company}>{exp.company}</span>
                                    </div>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>
                                <ul className={styles.description}>
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

