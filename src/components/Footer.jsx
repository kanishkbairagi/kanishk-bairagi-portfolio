import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
                <p>© {new Date().getFullYear()} Kanishk Bairagi</p>
                <div className="flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/kanishk-bairagi-bb20a641a/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                        LinkedIn
                    </a>
                    <a href="https://github.com/kanishkbairagi" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                        GitHub
                    </a>
                    <Link to="/contact-info" className="hover:text-accent">
                        Contact
                    </Link>
                    <Link to="/message" className="hover:text-accent">
                        Message
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
