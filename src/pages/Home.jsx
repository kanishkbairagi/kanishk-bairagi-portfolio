import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [hash]);

    return (
        <div>
            <Hero />
            <Experience />
            <Projects />
            <Skills />

            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[90px]" />
                <div className="relative mx-auto max-w-3xl px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="section-kicker mb-4">Next</p>
                        <h2 className="font-display text-4xl font-extrabold tracking-tight text-cream md:text-6xl">
                            Let’s make something
                            <span className="text-accent"> people remember.</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-md text-zinc-500">
                            Open to internships, full-time frontend roles, and interesting product work.
                        </p>
                        <Link
                            to="/message"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink shadow-glow-sm transition hover:bg-white"
                        >
                            Message me
                            <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
