import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    ExternalLink, 
    Github, 
    Gem, 
    Building2, 
    GraduationCap, 
    CheckCircle2, 
    Maximize2,
    Calendar,
    Sparkles,
    ArrowRight,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

const ProjectCard = ({ project, index, onOpenModal }) => {
    const [showAllSkills, setShowAllSkills] = useState(false);
    const isJawam = project.associationShort?.includes('Jawam');

    return (
        <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group glass-card flex flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-surface/60 transition-all duration-300 hover:border-accent/40 hover:shadow-glow"
        >
            <div>
                {/* Browser-style Titlebar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-ink/70 px-4 py-2.5 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                            <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                        </div>
                        <span className="rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                            {project.category}
                        </span>
                    </div>

                    {/* Association Badge from LinkedIn */}
                    <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-zinc-300">
                        {isJawam ? (
                            <Building2 size={11} className="text-accent" />
                        ) : (
                            <GraduationCap size={11} className="text-accent" />
                        )}
                        <span className="truncate max-w-[140px]">{project.associationShort || project.association}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                            <span>{project.deployment || 'Live'}</span>
                        </span>
                        <span className="font-mono text-xs font-semibold text-accent/80">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* Preview Image Frame with Quick-Action Hover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Quick View / Case Study Button on Image Hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink/75 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100 rounded-[inherit]">
                        <button
                            onClick={() => onOpenModal(project)}
                            className="flex items-center gap-2 rounded-full border border-white/20 bg-surface/90 px-4 py-2 text-xs font-semibold text-cream shadow-lg backdrop-blur transition hover:border-accent hover:text-accent"
                        >
                            <Maximize2 size={14} />
                            {project.caseStudy ? 'Case Study & Specs' : 'Quick View'}
                        </button>
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold text-ink shadow-lg transition hover:bg-white"
                            >
                                <ExternalLink size={14} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Card Content Area */}
                <div className="p-4 sm:p-6">
                    {/* Timeline and Role */}
                    <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
                        <span className="font-semibold text-accent/90 uppercase tracking-wider text-[11px]">
                            {project.role}
                        </span>
                        {project.timeline && (
                            <span className="flex items-center gap-1 text-zinc-500">
                                <Calendar size={12} />
                                {project.timeline}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-cream sm:text-2xl transition group-hover:text-accent">
                        {project.title}
                    </h3>

                    {/* Description from LinkedIn */}
                    <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                        {project.description}
                    </p>

                    {/* Key Highlights */}
                    {(project.cardHighlights || project.highlights) && (project.cardHighlights || project.highlights).length > 0 && (
                        <div className="mt-4 space-y-1.5 border-t border-white/5 pt-3">
                            {(project.cardHighlights || project.highlights).slice(0, 2).map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                                    <CheckCircle2 size={13} className="mt-0.5 text-accent shrink-0" />
                                    <span className="line-clamp-2 leading-relaxed">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* LinkedIn-style Skills Indicator */}
                    <div className="mt-4 rounded-xl border border-white/5 bg-ink/40 p-2.5 sm:p-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-zinc-300">
                                <Gem size={13} className="text-accent shrink-0" />
                                <span className="font-medium text-zinc-200">
                                    {project.skills.slice(0, 2).join(', ')}
                                </span>
                                <span className="text-accent text-[11px] font-medium">
                                    and +{project.extraSkillsCount || 4} skills
                                </span>
                            </div>
                            <button
                                onClick={() => setShowAllSkills(!showAllSkills)}
                                className="flex items-center gap-0.5 text-[11px] text-zinc-500 hover:text-accent transition"
                                aria-label="Toggle skills"
                            >
                                {showAllSkills ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                        </div>

                        {/* Expandable Skills List */}
                        {showAllSkills && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-2.5 flex flex-wrap gap-1.5 pt-2 border-t border-white/10"
                            >
                                {project.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-white/10 bg-ink/30 px-3.5 py-3 sm:px-6 sm:py-4">
                <motion.button
                    onClick={() => onOpenModal(project)}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.96 }}
                    className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition hover:text-cream cursor-pointer"
                >
                    {project.caseStudy && (
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                        </span>
                    )}
                    <span>{project.caseStudy ? 'Architecture & Specs' : 'View Details'}</span>
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>

                <div className="flex items-center gap-2">
                    {project.github && (
                        <motion.a
                            whileHover={{ scale: 1.15, rotate: -4 }}
                            whileTap={{ scale: 0.92 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-accent hover:text-accent"
                            aria-label={`Source code for ${project.title}`}
                            title="Source Code"
                        >
                            <Github size={15} />
                        </motion.a>
                    )}
                    {project.demo && (
                        <motion.a
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-bold text-ink shadow-glow-sm transition hover:bg-white"
                        >
                            <span>Live Demo</span>
                            <ExternalLink size={13} />
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;
