import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/projects';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const items = [
    { icon: FaEnvelope, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: FaPhone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s+/g, '')}` },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'kanishk-bairagi', href: contactInfo.linkedin, external: true },
    { icon: FaGithub, label: 'GitHub', value: 'kanishkbairagi', href: contactInfo.github, external: true },
];

const ContactInfo = () => {
    return (
        <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-28">
            <div className="w-full max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-14 text-center"
                >
                    <p className="section-kicker mb-4">Contact</p>
                    <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
                        Let’s connect.
                    </h1>
                    <p className="mx-auto mt-4 max-w-md text-zinc-500">
                        Direct lines no forms required unless you prefer one.
                    </p>
                </motion.div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, i) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="glass-card group rounded-3xl p-8 text-center transition hover:border-accent/40 hover:shadow-glow"
                        >
                            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-ink">
                                <item.icon size={22} />
                            </div>
                            <h3 className="font-display text-xl font-bold">{item.label}</h3>
                            <p className="mt-2 break-all text-sm text-zinc-400">{item.value}</p>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        to="/message"
                        className="inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold text-ink hover:bg-white"
                    >
                        Or send a message
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
