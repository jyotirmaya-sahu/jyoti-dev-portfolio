"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download, PhoneCallIcon } from "lucide-react";
import Tooltip from "./Tooltip";
import styles from "./StickyActions.module.css";

export default function StickyActions() {
    const [isSticky, setIsSticky] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1026);
        };

        const handleScroll = () => {
            // Only apply sticky behavior on large screens
            if (window.innerWidth < 1026) {
                setIsSticky(false);
                return;
            }

            // Get the Hero section height to determine when to transition
            const heroSection = document.querySelector('section');
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                const scrollPosition = window.scrollY + window.innerHeight;

                // Transition when we've scrolled past the hero section
                setIsSticky(scrollPosition < heroBottom + 200);
            }
        };

        // Check screen size on mount
        handleResize();
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePhoneClick = () => {
        const phoneNumber = "+1234567890"; // Replace with your actual phone number
        navigator.clipboard.writeText(phoneNumber);
        alert(`Phone number copied: ${phoneNumber}`);
    };

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleResumeClick = () => {
        // Download resume from public folder
        const link = document.createElement('a');
        link.href = '/JyotirmayaSahuResume.pdf';
        link.download = 'Jyotirmaya_Sahu_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Prevent hydration mismatch by not rendering until mounted
    if (!isMounted) {
        return null;
    }

    return (
        <AnimatePresence>
            <motion.div
                className={`${styles.container} ${isLargeScreen && isSticky ? styles.sticky : styles.static}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={`${styles.actions} ${styles.split}`}>
                    <Tooltip content="Copy Phone Number">
                        <motion.a
                            className={`${styles.button} ${styles.secondary}`}
                            // onClick={handlePhoneClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+917682867189"
                        >
                            <PhoneCallIcon size={18} />
                        </motion.a>
                    </Tooltip>

                    <Tooltip content="Contact Me">
                        <motion.a
                            className={`${styles.button} ${styles.secondary}`}
                            // onClick={handleContactClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:sahu.jyotirmaya26@gmail.com"
                        >
                            <Mail size={18} />
                        </motion.a>
                    </Tooltip>

                    <Tooltip content="Download Resume">
                        <motion.button
                            className={`${styles.button} ${styles.secondary}`}
                            onClick={handleResumeClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={18} />
                        </motion.button>
                    </Tooltip>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
