import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  useEffect(() => {
    // Dynamically inject Behold.so widget script if not already present
    const scriptId = 'behold-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://w.behold.so/widget.js';
      script.type = 'module';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              On The <span className="text-indigo-500">Feed</span>
            </h2>
            <p className="text-lg text-zinc-400">
              Stay updated with recent web development projects, design inspiration, and agency work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="https://instagram.com/saxondevelopment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-indigo-500 text-white rounded-full font-medium transition-all group hover:bg-zinc-900/80 shadow-lg shadow-black/50"
            >
              <Instagram size={20} className="text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>@saxondevelopment</span>
              <ArrowUpRight size={16} className="text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-4 md:p-8 backdrop-blur-sm overflow-hidden"
        >
          {/* Subtle background glow to elevate premium feel */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Behold Widget Container */}
          <div className="relative min-h-[450px] w-full">
            {React.createElement('behold-widget', { 
              'feed-id': 'AXx3Ajn4aTeeP19sCwJY'
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
