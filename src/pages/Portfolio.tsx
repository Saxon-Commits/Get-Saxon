import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: "InvoicyCRM",
        category: "SaaS Application",
        description: "A comprehensive business management tool featuring invoicing, quoting, expense tracking, and CRM capabilities. Built to streamline business operations.",
        image: "/projects/invoicy-crm.png",
        tags: ["React", "Dashboard", "Finance", "CRM"],
        link: "https://invoicy-crm.vercel.app/#/dashboard"
    },
    {
        title: "Wilson's Seafoods",
        category: "E-Commerce & Admin",
        description: "A bespoke landing page with a custom admin panel for managing products, page content, and business details. Tailored for a local seafood business.",
        image: "/projects/wilsons-seafood.png",
        tags: ["Web App", "Admin Panel", "CMS", "Bespoke"],
        link: "https://wilsons-seafoods.vercel.app/"
    }
];

export const Portfolio: React.FC = () => {
    return (
        <div className="bg-zinc-950 min-h-screen pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Selected <span className="text-indigo-500">Works</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        A showcase of technical excellence and creative problem solving.
                        Each project represents a unique challenge and a tailored solution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-indigo-500/50 transition-colors duration-300"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full text-zinc-900 hover:bg-indigo-500 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-indigo-400 text-sm font-medium px-3 py-1 rounded-full bg-indigo-500/10">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs text-zinc-500 font-mono bg-zinc-800/50 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-zinc-400 mb-6">Interested in seeing more?</p>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-full font-medium transition-colors"
                    >
                        <Github size={20} />
                        View GitHub Profile
                        <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};
