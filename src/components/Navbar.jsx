import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Work', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/contact-info' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const location = useLocation();

    // Scroll background blur detection
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dynamic active link detection on scroll & route change
    useEffect(() => {
        if (location.pathname === '/contact-info') {
            setActiveSection('Contact');
            return;
        }

        if (location.pathname !== '/') {
            setActiveSection('');
            return;
        }

        // Section tracking on the home page
        const handleScrollSpy = () => {
            const sections = [
                { id: 'skills', name: 'Skills' },
                { id: 'projects', name: 'Work' },
                { id: 'experience', name: 'Experience' },
                { id: 'hero', name: 'Home' },
            ];

            const scrollY = window.scrollY + 220;

            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el && el.offsetTop <= scrollY) {
                    setActiveSection(section.name);
                    return;
                }
            }
            setActiveSection('Home');
        };

        handleScrollSpy();
        window.addEventListener('scroll', handleScrollSpy, { passive: true });
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, [location.pathname]);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled || isOpen
                    ? 'bg-ink/85 backdrop-blur-xl border-b border-white/10 py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link 
                        to="/" 
                        onClick={() => {
                            setActiveSection('Home');
                            if (location.pathname === '/') {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="font-display text-xl font-extrabold tracking-tight text-cream"
                    >
                        KB<span className="text-accent">.</span>
                    </Link>

                    {/* Desktop Navigation Links with Sliding Active Pill */}
                    <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-md">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.name;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        if ((link.href === '/' || link.href === '/#hero') && location.pathname === '/') {
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }
                                    }}
                                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                                        isActive
                                            ? 'text-ink font-semibold'
                                            : 'text-zinc-400 hover:text-cream'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="absolute inset-0 rounded-full bg-accent shadow-glow-sm"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <Link
                        to="/message"
                        className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink shadow-glow-sm hover:bg-white transition-colors"
                    >
                        Let’s talk
                    </Link>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-cream"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden border-t border-white/10 bg-ink/95"
                    >
                        <div className="flex flex-col items-start gap-2.5 px-6 py-6">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.name;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => {
                                            setActiveSection(link.name);
                                            setIsOpen(false);
                                            if ((link.href === '/' || link.href === '/#hero') && location.pathname === '/') {
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }
                                        }}
                                        className={`inline-flex items-center px-5 py-2.5 rounded-full text-base font-medium transition-all ${
                                            isActive
                                                ? 'bg-accent text-ink font-bold shadow-glow-sm'
                                                : 'text-zinc-300 hover:text-accent hover:bg-white/5'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <Link
                                to="/message"
                                onClick={() => setIsOpen(false)}
                                className="mt-3 inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-ink shadow-glow-sm transition hover:bg-white"
                            >
                                Let’s talk
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
