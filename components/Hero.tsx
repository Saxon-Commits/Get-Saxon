import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-zinc-950 text-white overflow-hidden min-h-[90vh] flex items-center">
      
      {/* MATRIX / CODE BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full font-mono text-xs md:text-sm lg:text-base leading-relaxed opacity-40 select-text overflow-hidden pointer-events-auto">
             <div className="absolute inset-0 p-6 md:p-10 whitespace-pre text-zinc-600 selection:bg-indigo-500/30">
            <code>
<span className="text-violet-400">import</span> <span className="text-blue-300">React</span> <span className="text-violet-400">from</span> <span className="text-green-400">'react'</span>;{'\n'}
<span className="text-violet-400">import</span> <span className="text-yellow-200">{`{`}</span> <span className="text-blue-300">Creativity</span><span className="text-zinc-500">,</span> <span className="text-blue-300">Logic</span> <span className="text-yellow-200">{`}`}</span> <span className="text-violet-400">from</span> <span className="text-green-400">'@saxon/brain'</span>;{'\n'}
<span className="text-violet-400">import</span> <span className="text-yellow-200">{`{`}</span> <span className="text-blue-300">Coffee</span> <span className="text-yellow-200">{`}`}</span> <span className="text-violet-400">from</span> <span className="text-green-400">'./necessities'</span>;{'\n'}
{'\n'}
<span className="text-zinc-500 italic">/**</span>{'\n'}
<span className="text-zinc-500 italic"> * @class Saxon</span>{'\n'}
<span className="text-zinc-500 italic"> * @description High-performance developer instance optimized for</span>{'\n'}
<span className="text-zinc-500 italic"> * building scalable, custom digital solutions.</span>{'\n'}
<span className="text-zinc-500 italic"> */</span>{'\n'}
<span className="text-violet-400">export class</span> <span className="text-yellow-200">Saxon</span> <span className="text-violet-400">extends</span> <span className="text-yellow-200">FullStackDev</span> <span className="text-yellow-200">{`{`}</span>{'\n'}
{'\n'}
  <span className="text-violet-400">public readonly</span> <span className="text-blue-300">email</span>: <span className="text-yellow-200">string</span> <span className="text-zinc-500">=</span> <span className="text-green-400">"contact@getsaxon.dev"</span>;{'\n'}
  <span className="text-violet-400">public readonly</span> <span className="text-blue-300">location</span>: <span className="text-yellow-200">string</span> <span className="text-zinc-500">=</span> <span className="text-green-400">"Internet"</span>;{'\n'}
{'\n'}
  <span className="text-violet-400">private</span> <span className="text-blue-300">_stack</span>: <span className="text-yellow-200">string</span><span className="text-yellow-200">[]</span> <span className="text-zinc-500">=</span> <span className="text-yellow-200">[</span>{'\n'}
    <span className="text-green-400">"React"</span><span className="text-zinc-500">,</span> <span className="text-green-400">"TypeScript"</span><span className="text-zinc-500">,</span> <span className="text-green-400">"Tailwind"</span><span className="text-zinc-500">,</span> <span className="text-green-400">"Next.js"</span><span className="text-zinc-500">,</span> <span className="text-green-400">"Node"</span>{'\n'}
  <span className="text-yellow-200">]</span>;{'\n'}
{'\n'}
  <span className="text-violet-400">constructor</span><span className="text-yellow-200">(</span><span className="text-blue-300">config</span>: <span className="text-yellow-200">DevConfig</span><span className="text-yellow-200">)</span> <span className="text-yellow-200">{`{`}</span>{'\n'}
    <span className="text-violet-400">super</span><span className="text-yellow-200">({`{`}</span>{'\n'}
      <span className="text-blue-300">obsession</span>: <span className="text-green-400">"Pixel Perfection"</span><span className="text-zinc-500">,</span>{'\n'}
      <span className="text-blue-300">caffeineLevel</span>: <span className="text-violet-400">Infinity</span><span className="text-zinc-500">,</span>{'\n'}
      <span className="text-blue-300">sleep</span>: <span className="text-violet-400">undefined</span> <span className="text-zinc-500 italic">// Deprecated</span>{'\n'}
    <span className="text-yellow-200">{`}`});</span>{'\n'}
  <span className="text-yellow-200">{`}`}</span>{'\n'}
{'\n'}
  <span className="text-zinc-500 italic">/**</span>{'\n'}
  <span className="text-zinc-500 italic"> * Turns business goals into revenue-generating code.</span>{'\n'}
  <span className="text-zinc-500 italic"> */</span>{'\n'}
  <span className="text-violet-400">public async</span> <span className="text-yellow-200">buildExperience</span><span className="text-yellow-200">(</span><span className="text-blue-300">client</span>: <span className="text-yellow-200">Visionary</span><span className="text-yellow-200">):</span> <span className="text-yellow-200">Promise</span><span className="text-yellow-200">{`<`}</span><span className="text-yellow-200">Success</span><span className="text-yellow-200">{`>`}</span> <span className="text-yellow-200">{`{`}</span>{'\n'}
    <span className="text-violet-400">const</span> <span className="text-blue-300">strategy</span> <span className="text-zinc-500">=</span> <span className="text-violet-400">await</span> <span className="text-blue-300">this</span><span className="text-zinc-500">.</span><span className="text-yellow-200">analyze</span><span className="text-yellow-200">(</span><span className="text-blue-300">client</span><span className="text-zinc-500">.</span><span className="text-blue-300">needs</span><span className="text-yellow-200">);</span>{'\n'}
    <span className="text-violet-400">const</span> <span className="text-blue-300">ui</span> <span className="text-zinc-500">=</span> <span className="text-violet-400">new</span> <span className="text-yellow-200">Interface</span><span className="text-yellow-200">({`{`}</span> <span className="text-blue-300">clean</span>: <span className="text-violet-400">true</span><span className="text-zinc-500">,</span> <span className="text-blue-300">fast</span>: <span className="text-violet-400">true</span> <span className="text-yellow-200">{`}`});</span>{'\n'}
    {'\n'}
    <span className="text-zinc-500 italic">// Secret: Email me "I found the matrix" for 5% off.</span>{'\n'}
    <span className="text-blue-300">this</span><span className="text-zinc-500">.</span><span className="text-yellow-200">injectSoul</span><span className="text-yellow-200">(</span><span className="text-green-400">"🍺"</span><span className="text-yellow-200">);</span>{'\n'}
    {'\n'}
    <span className="text-violet-400">return</span> <span className="text-blue-300">ui</span><span className="text-zinc-500">.</span><span className="text-yellow-200">launch</span><span className="text-yellow-200">();</span>{'\n'}
  <span className="text-yellow-200">{`}`}</span>{'\n'}
  {'\n'}
  <span className="text-zinc-500 italic">/**</span>{'\n'}
  <span className="text-zinc-500 italic"> * Schedule a meeting to discuss project requirements.</span>{'\n'}
  <span className="text-zinc-500 italic"> */</span>{'\n'}
  <span className="text-violet-400">public</span> <span className="text-yellow-200">contact</span><span className="text-yellow-200">():</span> <span className="text-yellow-200">void</span> <span className="text-yellow-200">{`{`}</span>{'\n'}
    <span className="text-blue-300">window</span><span className="text-zinc-500">.</span><span className="text-yellow-200">location</span><span className="text-zinc-500">.</span><span className="text-blue-300">href</span> <span className="text-zinc-500">=</span> <span className="text-green-400">"mailto:contact@getsaxon.dev"</span>;{'\n'}
  <span className="text-yellow-200">{`}`}</span>{'\n'}
<span className="text-yellow-200">{`}`}</span>
            </code>
            </div>
        </div>
        
        {/* Gradient Overlays - significantly reduced opacity so code is visible */}
        {/* Left side (behind text) is dark, fading to transparent on right (showing code) */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/50 to-transparent pointer-events-none"></div>
        
        {/* Vertical fade for top/bottom softness */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50 pointer-events-none"></div>
      </div>

      {/* MAIN CONTENT */}
      {/* pointer-events-none on container to allow clicks to pass through empty areas */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-48 z-10 pointer-events-none">
        {/* Re-enable pointer events for the actual text/buttons */}
        <div className="lg:w-3/4 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-700/50 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Rocket className="w-4 h-4" />
            <span>Freelance Web Developer & Consultant</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            Get Saxon. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-violet-400">
              Websites that build your business.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed drop-shadow-lg">
            I help businesses of all sizes stop losing customers to bad design. I build high-performance, custom websites personally tailored to turn your visitors into revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg shadow-lg shadow-indigo-900/50 transition-all transform hover:scale-105"
            >
              Get Your Free Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 text-base font-medium rounded-full text-zinc-300 hover:bg-zinc-800 hover:text-white md:text-lg transition-colors bg-zinc-950/50 backdrop-blur-sm"
            >
              See What I Do
            </a>
          </div>
          
          <div className="mt-12 border-t border-zinc-800/50 pt-8 flex flex-wrap gap-8 text-sm text-zinc-500 font-medium">
            <span>// Custom Development</span>
            <span>// SEO Optimized</span>
            <span>// Direct Communication</span>
            <span>// No Agencies, Just Me</span>
          </div>
        </div>
      </div>
    </div>
  );
};