import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 380) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        const updateProgress = () => {
            const progress = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            setScrollPercentage(progress);
        };

        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('scroll', updateProgress);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-3.5 right-3.5 z-40 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-accent/40 bg-surface/90 text-accent shadow-glow backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-ink sm:bottom-8 sm:right-8"
                    aria-label="Scroll to top of page"
                    title={`Back to top (${scrollPercentage}%)`}
                >
                    <ArrowUp size={15} className="sm:hidden" strokeWidth={2.5} />
                    <ArrowUp size={18} className="hidden sm:block" strokeWidth={2.5} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
