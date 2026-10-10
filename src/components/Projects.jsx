import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { 
    ExternalLink, 
    Github, 
    Gem, 
    Building2, 
    CheckCircle2, 
    Calendar, 
    Globe, 
    Sparkles, 
    Layers, 
    ArrowUpRight,
    ArrowRight,
    Maximize2,
    Code2
} from 'lucide-react';

const categories = [
    { id: 'all', label: 'All Projects', count: 5 },
    { id: 'Production', label: 'Production Work', count: 1 },
    { id: 'Interactive', label: 'Interactive Tools', count: 2 },
    { id: 'Web Apps', label: 'Web Applications', count: 2 },
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    // Flagship project (Jawam Infotech)
    const flagshipProject = projects.find((p) => p.id === 1);
    
    // Remaining projects for grid
    const gridProjects = activeFilter === 'all'
        ? projects.filter((p) => p.id !== 1)
        : filteredProjects.filter((p) => p.id !== (activeFilter === 'Production' ? 0 : 1));

    const showFlagship = (activeFilter === 'all' || activeFilter === 'Production') && flagshipProject;

    return (
        <section id="projects" className="relative scroll-mt-[-30px] py-24 sm:py-32">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />
                <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-950/20 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                            <Sparkles size={13} className="text-accent" />
                            <span>Featured Showcase</span>
                        </div>
                        <h2 className="font-display text-4xl font-extrabold tracking-tight text-cream sm:text-5xl lg:text-6xl">
                            Engineered for Impact,
                            <br />
                            <span className="text-gradient">Shipped to Production.</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
                        A curated collection of production client platforms, dynamic CS visualizers, and responsive web applications with real world architecture.
                    </p>
                </div>

                {/* Filter Tabs Navigation */}
                <div className="mb-12 flex flex-wrap items-center gap-2.5 border-b border-white/10 pb-6">
                    {categories.map((cat) => {
                        const isActive = activeFilter === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`relative rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 sm:text-sm ${
                                    isActive
                                        ? 'bg-accent text-ink shadow-glow-sm font-bold'
                                        : 'border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-cream'
                                }`}
                            >
                                <span>{cat.label}</span>
                                <span className={`ml-2 rounded-full px-2 py-0.5 text-[11px] font-mono ${
                                    isActive ? 'bg-ink/20 text-ink' : 'bg-white/10 text-zinc-300'
                                }`}>
                                    {cat.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* FLAGSHIP HERO SPOTLIGHT CARD (Jawam Infotech Official Website) */}
                {showFlagship && (
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-14 overflow-hidden rounded-[32px] border border-accent/35 bg-surface/85 shadow-glow backdrop-blur-xl"
                    >
                        {/* Top Flagship Banner Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-white/10 bg-ink/80 px-4 py-3 sm:px-8 sm:py-3.5">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                    Flagship Production Project
                                </span>
                                {flagshipProject.timeline && (
                                    <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                                        <Calendar size={12} className="text-zinc-500" />
                                        {flagshipProject.timeline}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium text-zinc-300">
                                <Building2 size={12} className="text-accent shrink-0" />
                                <span>{flagshipProject.association}</span>
                            </div>
                        </div>

                        {/* Main Flagship Content Area */}
                        <div className="p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
                            {/* Tier 1: Hero Split (Text & CTAs on Left, Browser Mockup on Right) */}
                            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                                {/* Left Side: Title, Intro & Actions (col-span-7) */}
                                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                                    <div>
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                                            {flagshipProject.role}
                                        </span>
                                        <h3 className="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-cream">
                                            {flagshipProject.title}
                                        </h3>
                                        <p className="mt-1.5 text-xs sm:text-sm font-medium text-zinc-400">
                                            {flagshipProject.subtitle}
                                        </p>
                                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300">
                                            {flagshipProject.description}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                                        {/* Primary Glowing Case Study Button */}
                                        <motion.button
                                            onClick={() => handleOpenModal(flagshipProject)}
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
                                            whileHover={{ scale: 1.04, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group relative order-1 sm:order-3 inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-2 overflow-hidden rounded-full border border-accent/60 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 px-3.5 sm:px-5 py-2.5 text-xs font-bold text-accent shadow-[0_0_20px_rgba(62,224,177,0.35)] backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-accent hover:text-ink hover:shadow-[0_0_30px_rgba(62,224,177,0.6)] cursor-pointer"
                                        >
                                            {/* Animated Shimmer Light Beam */}
                                            <motion.span
                                                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                animate={{ x: ['-100%', '200%'] }}
                                                transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", repeatDelay: 1 }}
                                            />

                                            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                                                {/* Live Radar Beacon Indicator */}
                                                <span className="relative flex h-2 w-2 shrink-0">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent group-hover:bg-ink transition-colors" />
                                                </span>

                                                {/* Twinkling Sparkles Icon */}
                                                <motion.div
                                                    className="hidden min-[400px]:block"
                                                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.25, 1] }}
                                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                                >
                                                    <Sparkles size={13} className="shrink-0 transition-colors group-hover:text-ink" />
                                                </motion.div>

                                                <span className="tracking-wide whitespace-nowrap text-[11px] min-[360px]:text-xs">
                                                    Engineering Case Study
                                                </span>
                                            </div>

                                            {/* Pill Badge & Interactive Arrow */}
                                            <div className="flex items-center gap-1.5 shrink-0">
                                                <span className="hidden min-[380px]:inline-block rounded-full bg-accent/25 px-1.5 py-0.5 text-[9px] font-mono font-bold text-accent transition-colors group-hover:bg-ink/20 group-hover:text-ink">
                                                    RFC Spec
                                                </span>
                                                <ArrowRight size={13} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        </motion.button>

                                        {/* Live Site and Source Code Actions */}
                                        <div className="order-2 sm:order-1 grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex sm:items-center sm:gap-3">
                                            <a
                                                href={flagshipProject.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-3 py-2 sm:px-5 sm:py-2.5 text-xs font-bold text-ink shadow-glow-sm transition hover:bg-white text-center"
                                            >
                                                <span className="truncate">Explore Live</span>
                                                <ArrowUpRight size={14} className="shrink-0" />
                                            </a>
                                            <a
                                                href={flagshipProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-2 sm:px-4 sm:py-2.5 text-xs font-semibold text-cream transition hover:border-accent hover:text-accent text-center"
                                            >
                                                <Github size={14} className="shrink-0" />
                                                <span className="truncate">Source Code</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Realistic Browser Mockup Preview (col-span-5) */}
                                <div className="lg:col-span-5">
                                    <div className="group/frame overflow-hidden rounded-2xl border border-white/15 bg-ink shadow-2xl transition hover:border-accent/40">
                                        {/* Browser Bar */}
                                        <div className="flex items-center justify-between border-b border-white/10 bg-surface/90 px-3 py-1.5 sm:px-3.5 sm:py-2">
                                            <div className="flex items-center gap-1.5">
                                                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-400/80" />
                                                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-amber-400/80" />
                                                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-accent/80" />
                                            </div>
                                            <div className="flex max-w-[130px] min-[360px]:max-w-[180px] sm:max-w-[200px] items-center gap-1.5 truncate rounded-full bg-ink/80 px-2.5 py-0.5 text-[10px] sm:text-[11px] text-zinc-400">
                                                <Globe size={11} className="text-accent shrink-0" />
                                                <span className="truncate">https://jawaminfotech.com</span>
                                            </div>
                                            <span className="text-[9px] font-semibold uppercase tracking-wider text-accent shrink-0">
                                                SSL SECURE
                                            </span>
                                        </div>

                                        {/* Preview Viewport */}
                                        <div className="relative w-full overflow-hidden bg-[#07090e]">
                                            <img
                                                src={flagshipProject.image}
                                                alt={flagshipProject.title}
                                                className="w-full h-auto block object-contain object-top transition duration-700 ease-out group-hover/frame:scale-[1.01]"
                                            />
                                        </div>

                                        {/* Browser Status Footer */}
                                        <div className="flex items-center justify-between border-t border-white/10 bg-surface/90 px-3 py-1.5 text-[10px] sm:text-[11px]">
                                            <div className="flex items-center gap-1.5 truncate">
                                                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                                                <span className="font-semibold text-cream truncate">Live Enterprise</span>
                                            </div>
                                            <span className="font-mono text-[10px] text-accent truncate">
                                                46 Pages • 13 Videos
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tier 2: Unified 4-Column Systems Metrics Banner */}
                            {flagshipProject.metrics && (
                                <div className="grid grid-cols-1 min-[340px]:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
                                    {flagshipProject.metrics.map((m, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded-xl sm:rounded-2xl border border-white/10 bg-ink/50 p-3 sm:p-4 text-center backdrop-blur transition hover:border-accent/30 overflow-hidden"
                                        >
                                            <p className="text-[10px] uppercase tracking-wider text-zinc-400 truncate">
                                                {m.label}
                                            </p>
                                            <p className="mt-1 font-display text-base min-[360px]:text-lg sm:text-2xl font-black text-accent break-words leading-tight">
                                                {m.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Tier 3: Technical Execution Grid (Highlights on Left, Skills on Right) */}
                            <div className="grid gap-6 lg:grid-cols-12 border-t border-white/10 pt-6">
                                {/* Left: Architecture Highlights (col-span-7) */}
                                <div className="lg:col-span-7 space-y-2.5">
                                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                        Key Architecture & Engineering Highlights
                                    </h4>
                                    <div className="space-y-2">
                                        {flagshipProject.highlights.map((h, i) => (
                                            <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                                                <CheckCircle2 size={15} className="mt-0.5 text-accent shrink-0" />
                                                <span className="leading-relaxed">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Technologies & Competencies (col-span-5) */}
                                <div className="lg:col-span-5 space-y-3">
                                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                        Technologies & Competencies
                                    </h4>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-ink/60 px-3 py-1.5 text-xs text-zinc-300">
                                            <Gem size={13} className="text-accent" />
                                            <span>Enterprise Architecture, AI Streaming <span className="font-semibold text-accent">and +4 skills</span></span>
                                        </div>
                                        {flagshipProject.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-zinc-400"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* BENTO GRID FOR REMAINING / FILTERED PROJECTS */}
                {gridProjects.length > 0 ? (
                    <div>
                        {activeFilter === 'all' && (
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="font-display text-xl font-bold tracking-tight text-cream sm:text-2xl">
                                    More Interactive Work & Apps
                                </h3>
                                <span className="text-xs text-zinc-500 font-mono">
                                    Showing {gridProjects.length} Projects
                                </span>
                            </div>
                        )}

                        <div className="grid gap-8 md:grid-cols-2">
                            {gridProjects.map((project, idx) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={idx + (showFlagship ? 1 : 0)}
                                    onOpenModal={handleOpenModal}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    activeFilter !== 'all' && !showFlagship && (
                        <div className="rounded-3xl border border-white/10 bg-surface/40 p-12 text-center">
                            <p className="text-zinc-400">No projects found in this category.</p>
                        </div>
                    )
                )}
            </div>

            {/* Quick View Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default Projects;
