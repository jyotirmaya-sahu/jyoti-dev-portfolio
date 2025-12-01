"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Grid } from "lucide-react";
import styles from "./Achievements.module.css";

const achievements = [
    {
        icon: <Award size={40} />,
        title: "Star Performer Award",
        subtitle: "Awarded 3x for exceptional delivery and leadership"
    },
    {
        icon: <TrendingUp size={40} />,
        title: "95% Performance Boost",
        subtitle: "Optimized load times for major enterprise clients"
    },
    {
        icon: <Grid size={40} />,
        title: "Product Grid Module",
        subtitle: "Built industry’s first Product Grid Reporting module"
    }
];

export default function Achievements() {
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
                        Achievements
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.icon}>{item.icon}</div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardSubtitle}>{item.subtitle}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
