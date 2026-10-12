import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight, Github, Mail, Linkedin } from 'lucide-react';
import hero from '../assets/hero.jpg';

const cyclingTitles = ['Frontend Developer', 'MERN Stack Developer', 'Python Developer'];

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [typedTitle, setTypedTitle] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = cyclingTitles[titleIndex];
        const delay = isDeleting ? 55 : typedTitle === currentTitle ? 1800 : 78;
        const timeout = setTimeout(() => {
            if (isDeleting) {
                const nextTitle = typedTitle.slice(0, -1);
                setTypedTitle(nextTitle);
                if (!nextTitle) {
                    setIsDeleting(false);
                    setTitleIndex((index) => (index + 1) % cyclingTitles.length);
                }
            } else {
                const nextTitle = currentTitle.slice(0, typedTitle.length + 1);
                setTypedTitle(nextTitle);
                if (nextTitle === currentTitle) setIsDeleting(true);
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [isDeleting, titleIndex, typedTitle]);

    return (
        <section id="hero" className="relative min-h-screen scroll-mt-24 overflow-hidden pt-28 pb-16 lg:pt-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-900/30 blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
            </div>

            <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-accent"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        Available for work
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="mb-3 text-sm uppercase tracking-[0.28em] text-zinc-500"
                    >
                        Hello, I’m
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl"
                    >
                        Kanishk
                        <br />
                        <span className="text-gradient">Bairagi</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.22 }}
                        className="mt-6 min-h-[2rem] text-lg font-medium text-zinc-300 sm:text-xl"
                    >
                        {typedTitle}
                        <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-[2px] bg-accent align-middle" />
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
                    >
                        I can engineer, deploy, secure and improve a complete software system and integrate AI when it provides real value.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.38 }}
                        className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-3"
                    >
                        {/* Primary CTAs */}
                        <div className="flex items-center gap-3">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-glow-sm transition hover:bg-white"
                            >
                                View work
                                <ArrowDownRight size={16} />
                            </motion.a>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact-info"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-cream transition hover:border-accent/50 hover:text-accent"
                                >
                                    Contact
                                    <ArrowUpRight size={16} />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Social Icons: together at bottom on mobile, inline on desktop */}
                        <div className="flex items-center gap-3">
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: -3 }}
                                whileTap={{ scale: 0.92 }}
                                href="https://github.com/kanishkbairagi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-accent hover:text-accent"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: 3 }}
                                whileTap={{ scale: 0.92 }}
                                href="https://www.linkedin.com/in/kanishk-bairagi-bb20a641a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-accent hover:text-accent"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: -3 }}
                                whileTap={{ scale: 0.92 }}
                                href="mailto:kanishk.bairagi00@gmail.com"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-accent hover:text-accent"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8"
                    >
                        {[
                            { n: '05', l: 'Shipped projects' },
                            { n: '02', l: 'Product teams' },
                            { n: 'MERN', l: 'Core stack' },
                        ].map((stat) => (
                            <div key={stat.l}>
                                <p className="font-display text-2xl font-bold text-cream">{stat.n}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">{stat.l}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, duration: 0.8 }}
                    className="relative hidden lg:block"
                >
                    <div className="absolute -inset-6 rounded-[40px] bg-accent/20 blur-3xl animate-pulse-glow" />
                    <div className="animate-float relative overflow-hidden rounded-[28px] border border-white/10 bg-surface shadow-glow transition duration-500 hover:border-accent/40">
                        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                            <span className="ml-3 text-xs text-zinc-500">Web • APIs • MERN-Stack</span>
                        </div>
                        <img
                            src={hero}
                            alt="Featured project preview"
                            className="h-[340px] w-full object-cover object-top transition duration-700 hover:scale-105"
                        />
                    </div>

                    <div className="absolute -left-10 bottom-14 rounded-2xl border border-white/10 bg-ink/85 px-4 py-3 backdrop-blur-xl shadow-lg transition duration-300 hover:scale-105 hover:border-accent/30">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Currently</p>
                        <p className="mt-1 text-sm font-semibold text-cream">Frontend Developer</p>
                    </div>
                    <div className="absolute -right-4 top-16 rounded-2xl border border-accent/40 bg-accent px-4 py-3 text-ink shadow-glow transition duration-300 hover:scale-105">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">Focus</p>
                        <p className="mt-1 text-sm font-bold">Building Modern Web Apps</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
