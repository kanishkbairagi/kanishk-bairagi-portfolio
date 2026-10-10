import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorSpotlight = () => {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    // Smooth spring physics for fluid cursor lag
    const springX = useSpring(mouseX, { damping: 28, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 28, stiffness: 200 });

    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) {
            setIsTouchDevice(true);
            return;
        }

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    if (isTouchDevice) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
            {/* Ambient Radial Spotlight */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                className="absolute h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(62,224,177,0.085)_0%,rgba(62,224,177,0.02)_40%,transparent_70%)] blur-[40px]"
            />
        </div>
    );
};

export default CursorSpotlight;
