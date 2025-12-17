import React from 'react';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 font-extrabold text-xl text-white mb-6 hover:text-indigo-400 transition-colors">
              <Code2 className="w-6 h-6 text-indigo-500" />
              <span>SAXON</span>
            </a>
            <p className="text-sm leading-relaxed mb-6 text-zinc-500">
              I help forward-thinking businesses build their digital presence through custom web development and strategic SEO.
            </p>
            <div className="flex space-x-5">
              <a href="https://github.com/Saxon-Commits" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-indigo-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-indigo-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-indigo-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Custom Web Design</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Web Application Dev</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">SEO Strategy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">CRM Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Me</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Saxon. All rights reserved.</p>
          <div className="flex flex-col items-center md:items-end gap-1 mt-4 md:mt-0">
            <p>Design & Code by Saxon.</p>
            <p className="text-xs text-zinc-700">
              Built with React, Tailwind, Framer Motion, Resend & Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};