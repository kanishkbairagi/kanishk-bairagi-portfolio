import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-accent via-emerald-300 to-accent shadow-[0_0_14px_rgba(62,224,177,0.7)]"
        />
    );
};

export default ScrollProgress;
