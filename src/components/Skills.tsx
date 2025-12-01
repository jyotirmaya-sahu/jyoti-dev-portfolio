"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const aiSkillCategories = [
    {
        title: "LLM Frameworks & APIs",
        skills: [
            { name: "LangChain", desc: "Agent Orchestration" },
            { name: "LlamaIndex", desc: "Data Framework" },
            { name: "OpenAI API", desc: "GPT-4, Assistants API" },
            { name: "Anthropic Claude", desc: "Claude API" },
            { name: "Google Gemini", desc: "Gemini API" },
            { name: "Hugging Face", desc: "Transformers & Models" }
        ]
    },
    {
        title: "Agent Development",
        skills: [
            { name: "AutoGPT", desc: "Autonomous Agents" },
            { name: "LangGraph", desc: "Agent Workflows" },
            { name: "CrewAI", desc: "Multi-Agent Systems" },
            { name: "Agent Protocol", desc: "Standardization" },
            { name: "ReAct Pattern", desc: "Reasoning & Acting" },
            { name: "Tool Calling", desc: "Function Integration" }
        ]
    },
    {
        title: "RAG & Knowledge",
        skills: [
            { name: "Vector Databases", desc: "Pinecone, Weaviate" },
            { name: "Embeddings", desc: "OpenAI, Cohere" },
            { name: "Semantic Search", desc: "FAISS, ChromaDB" },
            { name: "Document Loaders", desc: "PDF, Web, APIs" },
            { name: "Chunking Strategies", desc: "Text Splitting" },
            { name: "Retrieval", desc: "Context Enhancement" }
        ]
    },
    {
        title: "Prompt Engineering",
        skills: [
            { name: "Chain-of-Thought", desc: "Reasoning Prompts" },
            { name: "Few-Shot Learning", desc: "Example-Based" },
            { name: "Prompt Templates", desc: "Structured Prompts" },
            { name: "System Messages", desc: "Behavior Control" },
            { name: "Output Parsing", desc: "Structured Responses" }
        ]
    },
    {
        title: "Agent Tools & Integration",
        skills: [
            { name: "Python", desc: "Primary Language" },
            { name: "FastAPI", desc: "Agent APIs" },
            { name: "Pydantic", desc: "Data Validation" },
            { name: "Async/Await", desc: "Concurrent Execution" },
            { name: "WebSockets", desc: "Real-time Streaming" },
            { name: "Docker", desc: "Agent Deployment" }
        ]
    }
];

const fullStackSkillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React.js", desc: "Component Architecture" },
            { name: "Next.js", desc: "App Router, SSR" },
            { name: "TypeScript", desc: "Type Safety" },
            { name: "RxJS", desc: "Reactive Programming" },
            { name: "MUI", desc: "Material Design" },
            { name: "SASS", desc: "Advanced Styling" },
            { name: "Storybook", desc: "Component Documentation" },
            { name: "Jest", desc: "Unit Testing" }
        ]
    },
    {
        title: "State Management",
        skills: [
            { name: "React Query", desc: "Server State" },
            { name: "Zustand", desc: "Minimalist State" },
            { name: "Jotai", desc: "Atomic State" },
            { name: "XState", desc: "State Machines" }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", desc: "Runtime" },
            { name: "Express.js", desc: "API Framework" },
            { name: "Python (Flask)", desc: "Microservices" },
            { name: "MySQL", desc: "Relational DB" },
            { name: "PostgreSQL", desc: "Advanced SQL" }
        ]
    },
    {
        title: "DevOps & Tools",
        skills: [
            { name: "Docker", desc: "Containerization" },
            { name: "CI/CD", desc: "Automation" },
            { name: "Webpack", desc: "Bundling" },
            { name: "Vite", desc: "Fast Build" },
            { name: "LogRocket", desc: "Session Replay" },
            { name: "Sentry", desc: "Error Tracking" },
            { name: "Grafana", desc: "Monitoring" }
        ]
    }
];

type TabType = 'ai' | 'fullstack';

export default function Skills() {
    const [activeTab, setActiveTab] = useState<TabType>('ai');

    useEffect(() => {
        // Check URL hash on mount and hash changes
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#skills-ai') {
                setActiveTab('ai');
            } else if (hash === '#skills-fullstack') {
                setActiveTab('fullstack');
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const skillCategories = activeTab === 'ai' ? aiSkillCategories : fullStackSkillCategories;

    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Technical Skills
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A comprehensive toolkit for building scalable applications.
                    </motion.p>
                </div>

                {/* Tab Navigation */}
                <div className={styles.tabNav}>
                    <button
                        className={`${styles.tab} ${activeTab === 'ai' ? styles.tabActive : ''}`}
                        onClick={() => {
                            setActiveTab('ai');
                            window.location.hash = 'skills-ai';
                        }}
                    >
                        AI Engineering
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'fullstack' ? styles.tabActive : ''}`}
                        onClick={() => {
                            setActiveTab('fullstack');
                            window.location.hash = 'skills-fullstack';
                        }}
                    >
                        Full Stack Development
                    </button>
                </div>

                {/* Skills Content */}
                <div className={styles.content}>
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={`${activeTab}-${catIndex}`}
                            className={styles.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.tags}>
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className={styles.tag}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {skill.name}
                                        <div className={styles.tagDescription}>{skill.desc}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
