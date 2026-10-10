import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/projects';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900   text-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl filter opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl filter opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <div className="p-4 bg-blue-500/20 text-blue-400 rounded-full">
                                    <FaEnvelope size={24} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-bold mb-1">Email</h4>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-slate-400 hover:text-white focus:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-1 break-all"
                                        aria-label={`Send email to ${contactInfo.email}`}
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <div className="p-4 bg-green-500/20 text-green-400 rounded-full">
                                    <FaPhone size={24} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-bold mb-1">Phone</h4>
                                    <a
                                        href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                                        className="text-slate-400 hover:text-white focus:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-1"
                                        aria-label={`Call ${contactInfo.phone}`}
                                    >
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-violet-500/50 transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <div className="p-4 bg-violet-500/20 text-violet-400 rounded-full">
                                    <FaGithub size={24} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-bold mb-1">GitHub</h4>
                                    <a
                                        href={contactInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white focus:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-1 break-all"
                                        aria-label="Visit my GitHub profile (opens in new tab)"
                                    >
                                        github.com/kanishkbairagi
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                            <div className="flex items-center space-x-4">
                                <div className="p-4 bg-blue-500/20 text-blue-400 rounded-full">
                                    <FaLinkedin size={24} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg font-bold mb-1">LinkedIn</h4>
                                    <a
                                        href={contactInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white focus:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-1 break-all"
                                        aria-label="Visit my LinkedIn profile (opens in new tab)"
                                    >
                                        linkedin.com/in/kanishk-bairagi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-700"
                    >
                        <form className="space-y-6" action={`mailto:${contactInfo.email}`} method="post" encType="text/plain">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                                <input type="text" className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                                <input type="email" className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all" placeholder="john@example.com" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all" placeholder="Hello..." required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold py-4 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                                <span>Send Message</span>
                                <FaPaperPlane />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
