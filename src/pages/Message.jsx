import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare } from 'lucide-react';
import { contactInfo } from '../data/projects';

const Message = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28">
            <div className="pointer-events-none absolute top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-lg"
            >
                <div className="glass-card rounded-[32px] p-7 md:p-9">
                    <p className="section-kicker mb-3">Inbox</p>
                    <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                        Tell me what you’re building.
                    </h1>
                    <p className="mt-2 mb-8 text-sm text-zinc-500">
                        I’ll reply as soon as I can.
                    </p>

                    <form className="space-y-4" action={`mailto:${contactInfo.email}`} method="post" encType="text/plain">
                        <div className="relative">
                            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-cream placeholder-zinc-600 outline-none transition focus:border-accent/50"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="relative">
                            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-cream placeholder-zinc-600 outline-none transition focus:border-accent/50"
                                placeholder="you@email.com"
                                required
                            />
                        </div>
                        <div className="relative">
                            <MessageSquare size={16} className="absolute left-4 top-5 text-zinc-500" />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-cream placeholder-zinc-600 outline-none transition focus:border-accent/50"
                                placeholder="Project, role, or idea..."
                                required
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            type="submit"
                            className="w-full rounded-2xl bg-accent py-3.5 font-semibold text-ink shadow-glow-sm hover:bg-white"
                        >
                            Send message
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Message;
