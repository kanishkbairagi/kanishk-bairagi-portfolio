import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LeetCodeCard from './LeetCodeCard';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const techStacks = {
  frontend: [
    { name: 'HTML5', src: `${CDN}/html5/html5-original.svg` },
    { name: 'CSS3', src: `${CDN}/css3/css3-original.svg` },
    { name: 'JavaScript', src: `${CDN}/javascript/javascript-original.svg` },
    { name: 'React', src: `${CDN}/react/react-original.svg` },
    { name: 'Tailwind CSS', src: `${CDN}/tailwindcss/tailwindcss-original.svg` },
  ],
  backend: [
    { name: 'Node.js', src: `${CDN}/nodejs/nodejs-original.svg` },
    { name: 'Express.js', src: `${CDN}/express/express-original.svg`, invert: true },
    { name: 'Python', src: `${CDN}/python/python-original.svg` },
    { name: 'MongoDB', src: `${CDN}/mongodb/mongodb-original.svg` },
  ],
  database: [
    { name: 'MongoDB', src: `${CDN}/mongodb/mongodb-original.svg` },
    { name: 'MySQL', src: `${CDN}/mysql/mysql-original.svg` },
  ],
  devops: [
    { name: 'Git', src: `${CDN}/git/git-original.svg` },
    { name: 'GitHub', src: `${CDN}/github/github-original.svg`, invert: true },
    { name: 'Docker', src: `${CDN}/docker/docker-original.svg` },
    { name: 'Vercel', src: `${CDN}/vercel/vercel-original.svg`, invert: true },
  ],
};

const filterTabs = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Databases' },
  { id: 'devops', label: 'Tools' },
];

// Set this to true whenever you are ready to display your LeetCode section (e.g. in 3-4 months)
const SHOW_LEETCODE = false;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const icons = techStacks[activeCategory] || [];

  return (
    <section id="skills" className="relative scroll-mt-10 overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker mb-3">Tech stack</p>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-cream md:text-5xl">
              Tools I actually
              <br />
              ship with.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
            Technologies and frameworks I use to build full-stack systems, optimize web performance, and implement algorithmic models.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-accent text-ink shadow-glow-sm font-semibold'
                    : 'border border-white/10 bg-white/5 text-zinc-400 hover:text-cream'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {icons.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.04 }}
                className="group glass-card flex flex-col items-center gap-3 rounded-2xl px-4 py-6 transition hover:border-accent/40 hover:shadow-glow"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className={`h-12 w-12 object-contain opacity-90 transition group-hover:scale-110 ${
                    tech.invert ? 'brightness-0 invert' : ''
                  }`}
                  loading="lazy"
                />
                <span className="text-sm font-medium text-zinc-300">{tech.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LeetCode Problem Solving Showcase (Set SHOW_LEETCODE = true to show) */}
        {SHOW_LEETCODE && <LeetCodeCard />}
      </div>
    </section>
  );
}
