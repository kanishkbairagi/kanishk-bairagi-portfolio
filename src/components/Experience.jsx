import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: '2026',
        company: 'Jawam Infotech',
        role: 'Frontend Developer',
        period: 'Sep 2026 — Present · Full-time',
        location: 'Indore, MP · On-site',
        description:
            'Promoted to full time Frontend Developer. Building high performance, production web applications, architecting responsive layouts, and developing polished user experiences with modern animations and reusable components.',
        focusAreas: ['Tailwind CSS', 'JavaScript', 'React.js', 'Framer Motion', 'Product UX'],
    },
    {
        year: '2026',
        company: 'Jawam Infotech',
        role: 'Frontend Intern',
        period: 'Jun 2026 — Sep 2026 · 4 mos',
        location: 'Indore, MP · On-site',
        description:
            'Architected and delivered the enterprise 46-route React SPA with modular component hierarchy and route-level code splitting (React.lazy / Suspense, <140KB initial bundle). Engineered an asynchronous AI chat support interface with streaming response parsing, client-side session context caching, and rate limiting. Built a media transcoding pipeline achieving ~72% asset payload reduction and 96+ Core Web Vitals score across production routes.',
        focusAreas: ['React.js Architecture', 'Asynchronous AI Streaming', 'Route Code Splitting', 'Core Web Vitals (96+)', 'Session State Management', 'XSS Sanitization', 'Tailwind CSS', 'REST APIs'],
    },
    {
        year: '2025',
        company: 'Techstuff Pvt Ltd.',
        role: 'Frontend Trainee',
        period: 'Dec 2025 — Mar 2026 · 4 mos',
        location: 'Indore, MP · Remote · Internship',
        description:
            'Completed 3 months of frontend development training, gaining hands on experience with HTML, CSS, JavaScript, React.js, Tailwind CSS, responsive design, Git, and API integration.',
        focusAreas: ['HTML & CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Git & APIs'],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="relative scroll-mt-[-23px] py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 max-w-2xl">
                    <p className="section-kicker mb-3">Career</p>
                    <h2 className="font-display text-4xl font-extrabold tracking-tight text-cream md:text-5xl">
                        Experience that
                        <span className="text-accent"> compounds.</span>
                    </h2>
                </div>

                <div className="relative mx-auto max-w-5xl">
                    {/* Center line (left edge on mobile) */}
                    <div className="absolute bottom-4 left-[11px] top-4 w-px bg-gradient-to-b from-accent via-white/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => {
                            const cardOnLeft = index % 2 === 0;

                            return (
                                <div
                                    key={`${exp.company}-${exp.role}`}
                                    className="relative grid grid-cols-1 items-center md:grid-cols-2"
                                >
                                    {/* Dot on the line with animated radar ping */}
                                    <div className="absolute left-0 top-7 z-10 flex items-center justify-center md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                                        <span className="absolute h-8 w-8 rounded-full bg-accent/25 animate-ping opacity-75" />
                                        <span className="relative h-6 w-6 rounded-full border-2 border-ink bg-accent shadow-glow-sm" />
                                    </div>

                                    {/* Card */}
                                    <motion.article
                                        initial={{ opacity: 0, x: cardOnLeft ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.25 }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                        className={`pl-10 md:row-start-1 md:pl-0 ${
                                            cardOnLeft
                                                ? 'md:col-start-1 md:pr-14'
                                                : 'md:col-start-2 md:pl-14'
                                        }`}
                                    >
                                        <div className="glass-card rounded-3xl p-6 transition duration-300 hover:border-accent/45 hover:shadow-glow sm:p-8">
                                            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                                                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                                                    {exp.period}
                                                </span>
                                                <span className="text-xs text-zinc-500">{exp.location}</span>
                                            </div>
                                            <h3 className="font-display text-2xl font-bold text-cream">{exp.role}</h3>
                                            <p className="mt-1 text-sm font-medium tracking-wide text-zinc-400">{exp.company}</p>
                                            <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">{exp.description}</p>
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {exp.focusAreas.map((area) => (
                                                    <span
                                                        key={area}
                                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                                                    >
                                                        {area}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.article>

                                    {/* Big year on the opposite side (desktop only) */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, amount: 0.25 }}
                                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                                        className={`hidden items-center justify-center md:row-start-1 md:flex ${
                                            cardOnLeft ? 'md:col-start-2' : 'md:col-start-1'
                                        }`}
                                    >
                                        <span className="font-display text-7xl font-extrabold leading-none tracking-tight text-accent lg:text-8xl">
                                            {exp.year}
                                        </span>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
