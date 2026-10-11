import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, 
    ExternalLink, 
    Github, 
    Gem, 
    Building2, 
    GraduationCap, 
    CheckCircle2, 
    Calendar, 
    Globe, 
    Sparkles,
    Cpu,
    Zap,
    ShieldCheck,
    Layers,
    BarChart3,
    ArrowRight,
    Activity,
    FileText,
    Check,
    Maximize2
} from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const isJawam = project?.associationShort?.includes('Jawam');
    const hasCaseStudy = Boolean(project?.caseStudy);
    const [activeTab, setActiveTab] = useState(hasCaseStudy ? 'casestudy' : 'overview');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (project?.caseStudy) {
            setActiveTab('casestudy');
        } else {
            setActiveTab('overview');
        }
        setSelectedImage(null);
    }, [project]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (selectedImage) {
                    setSelectedImage(null);
                } else {
                    onClose();
                }
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose, selectedImage]);

    if (!project) return null;

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[150] overflow-y-auto">
                    {/* Backdrop - dims entire screen including navbar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-ink/90 backdrop-blur-md"
                    />

                    {/* Safe Centering & Scroll Container (never cuts off top on short viewports) */}
                    <div className="relative flex min-h-full items-center justify-center p-2 sm:p-6 lg:p-8 py-5 sm:py-14">
                        {/* Modal Content Dialog */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 16 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative my-auto max-h-[90vh] sm:max-h-[85vh] w-full max-w-4xl overflow-y-auto overflow-x-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0e121a]/98 p-3.5 sm:p-8 pt-7 sm:pt-9 shadow-[0_25px_80px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute right-3 top-3 sm:right-6 sm:top-6 z-20 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-400 backdrop-blur transition hover:border-accent hover:text-accent hover:bg-white/10"
                                aria-label="Close dialog"
                            >
                                <X size={16} className="sm:hidden" />
                                <X size={18} className="hidden sm:block" />
                            </button>

                        {/* Top Metadata */}
                        <div className="mb-3.5 sm:mb-4 flex flex-wrap items-center gap-1.5 sm:gap-2.5 pr-10 sm:pr-14 text-[11px] sm:text-xs">
                            <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 sm:px-3 sm:py-1 font-semibold uppercase tracking-wider text-accent">
                                <Sparkles size={11} className="shrink-0" />
                                {project.category}
                            </span>
                            {project.timeline && (
                                <span className="inline-flex items-center gap-1 text-zinc-400">
                                    <Calendar size={12} className="text-zinc-500 shrink-0" />
                                    {project.timeline}
                                </span>
                            )}
                            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 sm:px-3 sm:py-1 text-zinc-300">
                                {isJawam ? (
                                    <Building2 size={12} className="text-accent shrink-0" />
                                ) : (
                                    <GraduationCap size={12} className="text-accent shrink-0" />
                                )}
                                <span className="truncate max-w-[150px] sm:max-w-none">{project.association}</span>
                            </div>
                            {project.metaBadges?.map((badge, idx) => (
                                <span
                                    key={idx}
                                    className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 sm:px-3 sm:py-1 font-semibold text-accent"
                                >
                                    <ShieldCheck size={11} className="shrink-0" />
                                    <span>{badge}</span>
                                </span>
                            ))}
                        </div>

                        {/* Title & Subtitle */}
                        <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-cream pr-8 sm:pr-12 leading-snug">
                            {project.title}
                        </h2>
                        {project.subtitle && (
                            <p className="mt-1 text-xs sm:text-sm font-medium text-accent leading-normal">
                                {project.subtitle}
                            </p>
                        )}

                        {/* Tabs Navigation (for projects with caseStudy) */}
                        {hasCaseStudy && (
                            <div className="mt-5 sm:mt-6 flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center gap-2 border-b border-white/10 pb-3.5 sm:pb-4">
                                <button
                                    onClick={() => setActiveTab('casestudy')}
                                    className={`inline-flex items-center justify-between min-[420px]:justify-start gap-2 rounded-xl sm:rounded-full px-3 py-2 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold transition-all ${
                                        activeTab === 'casestudy'
                                            ? 'bg-accent text-ink shadow-glow-sm'
                                            : 'border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-cream'
                                    }`}
                                >
                                    <div className="flex items-center gap-1.5">
                                        <Cpu size={13} className="shrink-0" />
                                        <span className="hidden sm:inline">Technical Design Document & Architecture Spec</span>
                                        <span className="sm:hidden">Technical Design (RFC)</span>
                                    </div>
                                    <span className="rounded-full bg-ink/20 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono shrink-0">RFC Spec</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`inline-flex items-center justify-center min-[420px]:justify-start gap-1.5 rounded-xl sm:rounded-full px-3 py-2 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold transition-all ${
                                        activeTab === 'overview'
                                            ? 'bg-accent text-ink shadow-glow-sm'
                                            : 'border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-cream'
                                    }`}
                                >
                                    <Layers size={13} className="shrink-0" />
                                    <span className="hidden sm:inline">UI Mockup & Production Overview</span>
                                    <span className="sm:hidden">UI & Production Overview</span>
                                </button>
                            </div>
                        )}

                        {/* CASE STUDY VIEW */}
                        {hasCaseStudy && activeTab === 'casestudy' ? (
                            <div className="space-y-5 sm:space-y-6">
                                {/* Technical Design Document Highlight Banner */}
                                <div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl border border-accent/30 bg-accent/10 p-3.5 sm:p-5">
                                    <div className="flex items-start gap-2.5 sm:gap-3">
                                        <Sparkles size={16} className="mt-0.5 shrink-0 text-accent" />
                                        <div>
                                            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent">
                                                {project.caseStudy?.bannerTitle || "Technical Design Document (RFC) & Architecture Spec"}
                                            </p>
                                            <p className="mt-1 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                                                {project.caseStudy?.bannerDescription || "Production engineering specification detailing invariant maintenance, state machine transitions, and computational complexity bounds."}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* System & Data Flow Architecture */}
                                <div className="mt-6">
                                    <div className="flex flex-wrap items-center justify-between gap-1">
                                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                            {project.caseStudy.architectureTitle}
                                        </h3>
                                        <span className="text-[10px] sm:text-[11px] font-mono text-accent">End-to-End Pipeline</span>
                                    </div>
                                    <div className="mt-3 grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                                        {project.caseStudy.architectureNodes.map((node, i) => (
                                            <div key={i} className="relative rounded-xl sm:rounded-2xl border border-white/10 bg-ink/70 p-3 sm:p-4">
                                                <div className="flex items-center justify-between text-xs text-accent font-mono mb-1.5 sm:mb-2">
                                                    <span>0{i + 1}</span>
                                                    <Activity size={13} className="text-accent/70" />
                                                </div>
                                                <h4 className="text-xs sm:text-sm font-bold text-cream leading-snug">{node.title}</h4>
                                                <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-zinc-400">{node.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Core Web Vitals & Quantified Performance Benchmarks */}
                                <div className="mt-6">
                                    <div className="flex flex-wrap items-center justify-between gap-1">
                                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                            {project.caseStudy.benchmarksTitle || "Quantified Systems & Performance Benchmarks"}
                                        </h3>
                                        <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400">
                                            {project.caseStudy.benchmarksSub || "Empirical Metrics & Complexity Bounds"}
                                        </span>
                                    </div>
                                    <div className="mt-3 grid grid-cols-1 min-[340px]:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                                        {project.caseStudy.benchmarks.map((b, i) => (
                                            <div key={i} className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 text-center flex flex-col justify-between overflow-hidden min-w-0">
                                                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 font-medium break-words leading-tight">{b.metric}</p>
                                                <p className="mt-1 font-display text-sm min-[360px]:text-base sm:text-lg md:text-xl font-bold text-accent break-words leading-tight">{b.value}</p>
                                                <div className="mt-2 flex items-center justify-center gap-1.5 flex-wrap">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                                                    <span className="text-[9px] sm:text-[10px] text-zinc-400 font-mono break-words leading-tight text-center">{b.benchmark}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Architectural Deep Dives: Problem vs Solution */}
                                <div className="mt-6 space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                        Architectural Deep Dives & Engineering Decisions
                                    </h3>
                                    <div className="grid gap-3 sm:gap-3.5 grid-cols-1 sm:grid-cols-2">
                                        {project.caseStudy.deepDives.map((dive, i) => (
                                            <div key={i} className="rounded-xl sm:rounded-2xl border border-white/10 bg-surface/60 p-3.5 sm:p-5">
                                                <div className="flex items-center gap-2 text-accent">
                                                    <Cpu size={14} className="shrink-0" />
                                                    <h4 className="text-xs sm:text-sm font-bold text-cream leading-snug">{dive.title}</h4>
                                                </div>
                                                <div className="mt-3 space-y-2 text-xs">
                                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-2.5 sm:p-3 text-zinc-300">
                                                        <span className="font-semibold text-red-400 block mb-1 text-[11px] sm:text-xs">Engineering Bottleneck:</span>
                                                        <p className="text-[11px] sm:text-xs leading-relaxed">{dive.problem}</p>
                                                    </div>
                                                    <div className="rounded-xl border border-accent/20 bg-accent/5 p-2.5 sm:p-3 text-zinc-300">
                                                        <span className="font-semibold text-accent block mb-1 text-[11px] sm:text-xs">Architectural Solution:</span>
                                                        <p className="text-[11px] sm:text-xs leading-relaxed">{dive.solution}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Competencies */}
                                <div className="mt-6">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                                        Core Computer Science Competencies Demonstrated
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {project.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-accent"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* GENERAL OVERVIEW & MOCKUP VIEW */
                            <div>
                                {/* Browser Window Mockup */}
                                <div className="mt-5 sm:mt-6 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-ink/60 shadow-2xl">
                                    <div className="flex items-center justify-between border-b border-white/10 bg-surface/80 px-3 py-2 sm:px-4 sm:py-2.5">
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-2 w-2 rounded-full bg-red-400/80" />
                                            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                                            <span className="h-2 w-2 rounded-full bg-accent/80" />
                                        </div>
                                        <div className="flex max-w-[170px] min-[360px]:max-w-[240px] sm:max-w-md items-center gap-1.5 truncate rounded-md bg-ink/70 px-2.5 py-1 text-[10px] sm:text-[11px] text-zinc-400">
                                            <Globe size={11} className="text-accent shrink-0" />
                                            <span className="truncate">{project.demo}</span>
                                        </div>
                                        <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-accent shrink-0">
                                            {project.deployment || 'LIVE'}
                                        </span>
                                    </div>
                                    <div className="relative min-h-[160px] max-h-[500px] w-full overflow-hidden bg-[#07090e] p-2 sm:p-3 flex items-center justify-center">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-auto max-h-[480px] object-contain object-center rounded-lg"
                                        />
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mt-5 sm:mt-6">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                        Project Overview & Architecture
                                    </h3>
                                    <p className="mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-zinc-300">
                                        {project.overviewDescription || project.description}
                                    </p>
                                </div>

                                {/* Metrics Grid */}
                                {project.metrics && project.metrics.length > 0 && (
                                    <div className={`mt-5 sm:mt-6 grid grid-cols-1 min-[340px]:grid-cols-2 gap-2 sm:gap-3 ${project.metrics.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-4'}`}>
                                        {project.metrics.map((m, idx) => (
                                            <div
                                                key={idx}
                                                className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] p-2.5 sm:p-3 text-center flex flex-col justify-center min-w-0 overflow-hidden"
                                            >
                                                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 font-medium break-words leading-tight">{m.label}</p>
                                                <p className="mt-1 font-display text-xs min-[360px]:text-sm sm:text-base font-bold text-accent leading-tight break-words">
                                                    {m.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Key Highlights */}
                                {project.highlights && project.highlights.length > 0 && (
                                    <div className="mt-5 sm:mt-6">
                                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                            Key Implementation Highlights
                                        </h3>
                                        <div className="mt-3 grid gap-2 sm:gap-2.5 grid-cols-1 sm:grid-cols-2">
                                            {project.highlights.map((highlight, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-2 sm:gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 sm:p-3"
                                                >
                                                    <CheckCircle2 size={15} className="mt-0.5 text-accent shrink-0" />
                                                    <span className="text-[11px] sm:text-xs leading-relaxed text-zinc-300">
                                                        {highlight}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Production Telemetry & Real-World Adoption (Telemetry Screenshots) */}
                                {project.telemetry && (
                                    <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl border border-accent/25 bg-gradient-to-b from-accent/[0.07] via-white/[0.02] to-transparent p-3.5 sm:p-6 overflow-hidden">
                                        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-white/10 pb-3 sm:pb-4">
                                            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                                                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-accent shadow-glow-sm shrink-0">
                                                    <BarChart3 size={16} className="sm:w-[18px] sm:h-[18px]" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="text-xs sm:text-base font-bold uppercase tracking-wider text-cream truncate">
                                                        {project.telemetry.title || "Production Telemetry & Real-World Adoption"}
                                                    </h3>
                                                    <p className="text-[10px] sm:text-xs text-zinc-400 line-clamp-1">
                                                        {project.telemetry.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 shrink-0">
                                                <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold text-accent">
                                                    <Activity size={11} className="animate-pulse" />
                                                    135+ Users Across 8 Countries
                                                </span>
                                            </div>
                                        </div>

                                        {/* Telemetry Quick Stats - Fully responsive down to 320px */}
                                        {project.telemetry.stats && (
                                            <div className="mt-3.5 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-2.5 sm:grid-cols-4">
                                                {project.telemetry.stats.map((stat, idx) => {
                                                    const parts = stat.value.trim().split(' ');
                                                    const hasPrefix = parts.length > 1 && /^(\d|\+)/.test(parts[0]);
                                                    const numPart = hasPrefix ? parts[0] : null;
                                                    const unitPart = hasPrefix ? parts.slice(1).join(' ') : stat.value;

                                                    return (
                                                        <div key={idx} className="rounded-xl border border-white/10 bg-ink/80 p-2 sm:p-3 text-center flex flex-col justify-between overflow-hidden min-w-0">
                                                            <p className="text-[9px] min-[360px]:text-[10px] uppercase tracking-wider text-zinc-400 font-mono leading-tight truncate">
                                                                {stat.label}
                                                            </p>
                                                            <div className="my-1 sm:my-1.5 flex flex-col items-center justify-center min-w-0">
                                                                {numPart ? (
                                                                    <>
                                                                        <span className="font-display text-sm min-[360px]:text-base sm:text-lg font-black text-accent leading-none">
                                                                            {numPart}
                                                                        </span>
                                                                        <span className="mt-0.5 text-[10px] min-[360px]:text-[11px] sm:text-xs font-semibold text-zinc-200 leading-tight truncate max-w-full">
                                                                            {unitPart}
                                                                        </span>
                                                                    </>
                                                                ) : (
                                                                    <span className="font-display text-xs min-[360px]:text-sm sm:text-base font-bold text-accent leading-tight break-words max-w-full">
                                                                        {stat.value}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {stat.sub && (
                                                                <p className="text-[9px] min-[360px]:text-[10px] text-zinc-500 truncate leading-tight">{stat.sub}</p>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        {/* Telemetry Screenshots Grid */}
                                        <div className="mt-4 sm:mt-5 grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
                                            {project.telemetry.screenshots.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="group flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-white/15 bg-ink/80 transition-all hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                                                >
                                                    <div className="flex items-center justify-between border-b border-white/10 bg-surface/80 px-3 py-2 sm:px-4 sm:py-2.5">
                                                        <div className="flex items-center gap-1.5 min-w-0 pr-2">
                                                            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent animate-pulse shrink-0" />
                                                            <span className="text-[11px] sm:text-xs font-semibold text-cream truncate">{item.title}</span>
                                                        </div>
                                                        <span className="rounded-md border border-accent/30 bg-accent/10 px-1.5 py-0.5 sm:px-2 text-[9px] sm:text-[10px] font-mono font-medium text-accent shrink-0">
                                                            {item.metricBadge}
                                                        </span>
                                                    </div>

                                                    <div
                                                        onClick={() => setSelectedImage(item)}
                                                        className="relative aspect-[16/9] w-full cursor-zoom-in overflow-hidden bg-black/60"
                                                    >
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                                                        />
                                                        <div className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-surface/90 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-cream shadow-xl">
                                                                <Maximize2 size={12} className="text-accent" />
                                                                Enlarge Telemetry
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-2 border-t border-white/10 bg-white/[0.02] p-2.5 sm:p-4">
                                                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent" />
                                                        <p className="text-[11px] sm:text-xs leading-relaxed text-zinc-300">
                                                            {item.caption}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Skills & Technologies */}
                                <div className="mt-5 sm:mt-6">
                                    <div className="mb-2 flex items-center gap-2">
                                        <Gem size={14} className="text-accent" />
                                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                            Technologies & Skills
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {project.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-white/10 bg-surface px-2.5 py-1 text-[11px] sm:text-xs font-medium text-zinc-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Footer Action Bar */}
                        <div className="mt-6 sm:mt-8 flex flex-col min-[480px]:flex-row items-stretch min-[480px]:items-center justify-between gap-3 sm:gap-4 border-t border-white/10 pt-4 sm:pt-6">
                            <div className="flex items-center justify-center min-[480px]:justify-start gap-2 text-[11px] sm:text-xs text-zinc-400">
                                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent animate-pulse shrink-0" />
                                <span>Verified Production Deployment</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 justify-center min-[480px]:justify-end">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-[480px]:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-cream transition hover:border-accent hover:text-accent"
                                    >
                                        <Github size={14} />
                                        <span>Source Code</span>
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-[480px]:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-accent px-4 py-2 sm:px-6 sm:py-2.5 text-[11px] sm:text-xs font-bold text-ink shadow-glow-sm transition hover:bg-white"
                                    >
                                        <ExternalLink size={14} />
                                        <span>Launch Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Fullscreen Telemetry Lightbox Viewer */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[250] flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md"
                        >
                            <motion.div
                                initial={{ scale: 0.94, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.94, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-h-[92vh] max-w-5xl w-full flex flex-col rounded-3xl border border-white/20 bg-[#0c1017] p-4 sm:p-5 shadow-2xl overflow-hidden"
                            >
                                <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                                    <div className="flex items-center gap-2.5">
                                        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                                        <div>
                                            <h4 className="text-sm font-bold text-cream sm:text-base">{selectedImage.title}</h4>
                                            <p className="text-xs font-mono text-accent">{selectedImage.metricBadge}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-400 hover:border-accent hover:text-accent hover:bg-white/10 transition"
                                        aria-label="Close image viewer"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                <div className="overflow-auto rounded-xl max-h-[68vh] flex items-center justify-center bg-black/80 p-2">
                                    <img
                                        src={selectedImage.image}
                                        alt={selectedImage.title}
                                        className="max-h-[66vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
                                    />
                                </div>

                                <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-accent/20 bg-accent/5 p-3 text-xs leading-relaxed text-zinc-300">
                                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                                    <span>{selectedImage.caption}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )}
    </AnimatePresence>
    );

    if (typeof document === 'undefined') return null;

    return createPortal(modalContent, document.body);
};

export default ProjectModal;
