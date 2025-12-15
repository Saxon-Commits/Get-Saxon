import React, { useState } from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { SecretTerminal } from './SecretTerminal';

// Define the code content once to ensure exact duplication for seamless scrolling
const CodeBlock = () => (
  <div className="p-6 md:p-10 whitespace-pre text-zinc-600">
    <code>
      <span className="text-violet-500">import</span> <span className="text-blue-400">React</span> <span className="text-violet-500">from</span> <span className="text-green-400">'react'</span>;{'\n'}
      <span className="text-violet-500">import</span> <span className="text-yellow-200">{`{`}</span> <span className="text-blue-400">Creativity</span><span className="text-zinc-500">,</span> <span className="text-blue-400">Logic</span> <span className="text-yellow-200">{`}`}</span> <span className="text-violet-500">from</span> <span className="text-green-400">'@saxon/brain'</span>;{'\n'}
      <span className="text-violet-500">import</span> <span className="text-yellow-200">{`{`}</span> <span className="text-blue-400">Coffee</span> <span className="text-yellow-200">{`}`}</span> <span className="text-violet-500">from</span> <span className="text-green-400">'./necessities'</span>;{'\n'}
      {'\n'}
      <span className="text-zinc-500 italic">/**</span>{'\n'}
      <span className="text-zinc-500 italic"> * @class Saxon</span>{'\n'}
      <span className="text-zinc-500 italic"> * @description High-performance developer instance optimized for</span>{'\n'}
      <span className="text-zinc-500 italic"> * building scalable, custom digital solutions.</span>{'\n'}
      <span className="text-zinc-500 italic"> */</span>{'\n'}
      <span className="text-violet-500">export class</span> <span className="text-yellow-200">Saxon</span> <span className="text-violet-500">extends</span> <span className="text-yellow-200">FullStackDev</span> <span className="text-yellow-200">{`{`}</span>{'\n'}
      {'\n'}
      <span className="text-violet-500">public readonly</span> <span className="text-blue-400">email</span>: <span className="text-yellow-200">string</span> <span className="text-zinc-500">=</span> <span className="text-green-400">"contact@getsaxon.dev"</span>;{'\n'}
      <span className="text-violet-500">public readonly</span> <span className="text-blue-400">location</span>: <span className="text-yellow-200">string</span> <span className="text-zinc-500">=</span> <span className="text-green-400">"Internet"</span>;{'\n'}
      {'\n'}
      <span className="text-violet-500">private</span> <span className="text-blue-400">_stack</span>: <span className="text-yellow-200">string</span><span className="text-yellow-200">[]</span> <span className="text-zinc-500">=</span> <span className="text-yellow-200">[</span>{'\n'}
      <span className="text-green-400">"React"</span><span className="text-zinc-500">,</span> <span className="text-green-400">"TypeScript"</span><span className="text-zinc-500">,</span> <span className="text-green-400">"Tailwind"</span><span className="text-zinc-500">,</span> <span className="text-green-400">"Next.js"</span><span className="text-zinc-500">,</span> <span className="text-green-400">"Node"</span>{'\n'}
      <span className="text-yellow-200">]</span>;{'\n'}
      {'\n'}
      <span className="text-violet-500">constructor</span><span className="text-yellow-200">(</span><span className="text-blue-400">config</span>: <span className="text-yellow-200">DevConfig</span><span className="text-yellow-200">)</span> <span className="text-yellow-200">{`{`}</span>{'\n'}
      <span className="text-violet-500">super</span><span className="text-yellow-200">({`{`}</span>{'\n'}
      <span className="text-blue-400">obsession</span>: <span className="text-green-400">"Pixel Perfection"</span><span className="text-zinc-500">,</span>{'\n'}
      <span className="text-blue-400">caffeineLevel</span>: <span className="text-violet-500">Infinity</span><span className="text-zinc-500">,</span>{'\n'}
      <span className="text-blue-400">sleep</span>: <span className="text-violet-500">undefined</span> <span className="text-zinc-500 italic">// Deprecated</span>{'\n'}
      <span className="text-yellow-200">{`}`});</span>{'\n'}
      <span className="text-yellow-200">{`}`}</span>{'\n'}
      {'\n'}
      <span className="text-zinc-500 italic">/**</span>{'\n'}
      <span className="text-zinc-500 italic"> * Turns business goals into revenue-generating code.</span>{'\n'}
      <span className="text-zinc-500 italic"> */</span>{'\n'}
      <span className="text-violet-500">public async</span> <span className="text-yellow-200">buildExperience</span><span className="text-yellow-200">(</span><span className="text-blue-400">client</span>: <span className="text-yellow-200">Visionary</span><span className="text-yellow-200">):</span> <span className="text-yellow-200">Promise</span><span className="text-yellow-200">{`<`}</span><span className="text-yellow-200">Success</span><span className="text-yellow-200">{`>`}</span> <span className="text-yellow-200">{`{`}</span>{'\n'}
      <span className="text-violet-500">const</span> <span className="text-blue-400">strategy</span> <span className="text-zinc-500">=</span> <span className="text-violet-500">await</span> <span className="text-blue-400">this</span><span className="text-zinc-500">.</span><span className="text-yellow-200">analyze</span><span className="text-yellow-200">(</span><span className="text-blue-400">client</span><span className="text-zinc-500">.</span><span className="text-blue-400">needs</span><span className="text-yellow-200">);</span>{'\n'}
      <span className="text-violet-500">const</span> <span className="text-blue-400">ui</span> <span className="text-zinc-500">=</span> <span className="text-violet-500">new</span> <span className="text-yellow-200">Interface</span><span className="text-yellow-200">({`{`}</span> <span className="text-blue-400">clean</span>: <span className="text-violet-500">true</span><span className="text-zinc-500">,</span> <span className="text-blue-400">fast</span>: <span className="text-violet-500">true</span> <span className="text-yellow-200">{`}`});</span>{'\n'}
      {'\n'}
      <span className="text-blue-400">this</span><span className="text-zinc-500">.</span><span className="text-yellow-200">injectSoul</span><span className="text-yellow-200">(</span><span className="text-green-400">"🍺"</span><span className="text-yellow-200">);</span>{'\n'}
      {'\n'}
      <span className="text-violet-500">return</span> <span className="text-blue-400">ui</span><span className="text-zinc-500">.</span><span className="text-yellow-200">launch</span><span className="text-yellow-200">();</span>{'\n'}
      <span className="text-yellow-200">{`}`}</span>{'\n'}
      <span className="text-zinc-500 italic">/**</span>{'\n'}
      <span className="text-zinc-500 italic"> * Schedule a meeting to discuss project requirements.</span>{'\n'}
      <span className="text-zinc-500 italic"> */</span>{'\n'}
      <span className="text-violet-500">public</span> <span className="text-yellow-200">contact</span><span className="text-yellow-200">():</span> <span className="text-yellow-200">void</span> <span className="text-yellow-200">{`{`}</span>{'\n'}
      <span className="text-blue-400">window</span><span className="text-zinc-500">.</span><span className="text-yellow-200">location</span><span className="text-zinc-500">.</span><span className="text-blue-400">href</span> <span className="text-zinc-500">=</span> <span className="text-green-400">"mailto:contact@getsaxon.dev"</span>;{'\n'}
      <span className="text-yellow-200">{`}`}</span>{'\n'}
      {'\n'}{'\n'}{'\n'}
    </code>
  </div>
);

export const Hero: React.FC = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHoveringNode, setIsHoveringNode] = useState(false);

  const triggerBreach = () => {
    if (showTerminal || isGlitching) return;

    setIsGlitching(true);

    // Glitch for 1 second, then open terminal
    setTimeout(() => {
      setIsGlitching(false);
      setShowTerminal(true);
    }, 1000);
  };

  return (
    <div className="relative bg-zinc-950 text-white overflow-hidden min-h-[90vh] flex items-center selection:bg-indigo-500/30 selection:text-indigo-200">

      {/* THE SECRET TERMINAL MODAL */}
      <SecretTerminal isOpen={showTerminal} onClose={() => setShowTerminal(false)} />

      {/* --- GLITCH ARTIFACTS OVERLAY (Only visible during glitch) --- */}
      {isGlitching && (
        <div className="absolute inset-0 z-[100] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-red-500/20 mix-blend-screen animate-pulse translate-x-1"></div>
          <div className="absolute inset-0 bg-blue-500/20 mix-blend-screen animate-pulse -translate-x-1"></div>
          <div className="absolute top-1/4 left-10 w-32 h-2 bg-white/80 mix-blend-overlay animate-ping"></div>
          <div className="absolute bottom-1/3 right-20 w-64 h-1 bg-green-500/50 mix-blend-overlay animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-full h-1 bg-white/30 -translate-x-1/2 rotate-12 mix-blend-overlay"></div>
        </div>
      )}

      {/* BACKGROUND CODE LAYER */}
      <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-auto select-text flex justify-center transition-opacity duration-100 ${isGlitching ? 'opacity-100' : ''}`}>
        <style>
          {`
            /* SEAMLESS SCROLL ANIMATION */
            @keyframes code-scroll {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
            .animate-code-scroll {
              animation: code-scroll 40s linear infinite;
            }

            /* HYPER FAST GLITCH ANIMATION */
            @keyframes glitch-slice {
              0% { clip-path: inset(50% 0 30% 0); transform: translate(-5px, 0); }
              10% { clip-path: inset(10% 0 60% 0); transform: translate(5px, 5px); }
              20% { clip-path: inset(80% 0 5% 0); transform: translate(-5px, -5px); }
              30% { clip-path: inset(20% 0 50% 0); transform: translate(5px, 0); }
              40% { clip-path: inset(60% 0 10% 0); transform: translate(-5px, 5px); }
              50% { clip-path: inset(40% 0 30% 0); transform: translate(5px, -5px); }
              60% { clip-path: inset(80% 0 5% 0); transform: translate(-5px, 0); }
              70% { clip-path: inset(10% 0 60% 0); transform: translate(5px, 5px); }
              80% { clip-path: inset(50% 0 30% 0); transform: translate(-5px, -5px); }
              90% { clip-path: inset(20% 0 50% 0); transform: translate(5px, 0); }
              100% { clip-path: inset(40% 0 30% 0); transform: translate(5px, 5px); }
            }

            .glitch-hard {
              /* FAST: 0.15s duration for twitchy effect */
              animation: glitch-slice 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both;
              color: white;
              position: relative;
            }
            .glitch-hard::before, .glitch-hard::after {
              content: attr(data-text);
              position: absolute;
              top: 0; left: 0; width: 100%; height: 100%; opacity: 1;
            }
            /* Larger translate values for more visible RGB splitting */
            .glitch-hard::before { color: #0ff; transform: translate(-4px, 0); clip-path: inset(0 0 0 0); }
            .glitch-hard::after { color: #f0f; transform: translate(4px, 0); clip-path: inset(0 0 0 0); }

            /* STATIC TRIGGER - PURPLE GRADIENT HOVER */
            .secret-trigger { 
              cursor: pointer; 
              transition: all 0.2s;
              display: inline-block;
              padding: 4px 8px;
              border-radius: 4px;
            }
            .secret-trigger:hover { 
              background-image: linear-gradient(to right, #818cf8, #a78bfa, #c084fc);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
              opacity: 1 !important;
            }
          `}
        </style>

        {/* STATIC TRIGGER */}
        <div className="absolute top-1/2 right-[10%] md:right-[15%] lg:right-[20%] z-20 pointer-events-auto transform -translate-y-1/2">
          <div
            className={`font-mono text-xs md:text-sm text-zinc-500/50 secret-trigger backdrop-blur-md border border-transparent hover:border-indigo-500/30 ${isGlitching ? 'opacity-0' : 'opacity-100'}`}
            onClick={triggerBreach}
            onMouseEnter={() => setIsHoveringNode(true)}
            onMouseLeave={() => setIsHoveringNode(false)}
          >
            {'// SECRET_TERMINAL: CLICK_TO_OPEN()'}
          </div>
        </div>

        {/* Seamless Scrolling Background */}
        <div
          className={`w-full flex flex-col items-center font-mono text-xs md:text-sm lg:text-base leading-relaxed opacity-25 transition-opacity duration-100 animate-code-scroll ${isGlitching ? 'invert opacity-80 duration-75' : 'hover:opacity-60 duration-500'}`}
          style={{ animationPlayState: isHoveringNode ? 'paused' : 'running' }}
        >
          <CodeBlock />
          <CodeBlock />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent pointer-events-none"></div>
        {/* NOISE OVERLAY: Fixes banding/dithering on dark gradients */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-48 z-10 pointer-events-none">
        <div className="lg:w-3/4 pointer-events-auto">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-700/50 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm transition-all duration-100 ${isGlitching ? 'opacity-80 translate-x-1' : ''}`}>
            <Rocket className="w-4 h-4" />
            <span>Freelance Web Developer & Consultant</span>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8 ${isGlitching ? 'glitch-hard' : ''}`}
            data-text="Get Saxon."
          >
            Get Saxon. <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-violet-400 ${isGlitching ? 'opacity-80' : ''}`}>
              Websites that build your business.
            </span>
          </h1>

          <p
            className={`text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed drop-shadow-lg ${isGlitching ? 'glitch-hard' : ''}`}
            data-text="I help businesses of all sizes stop losing customers to bad design. I build high-performance, custom websites personally tailored to turn your visitors into revenue."
            style={{ animationDelay: '0.1s' }}
          >
            I help businesses of all sizes stop losing customers to bad design. I build high-performance, custom websites personally tailored to turn your visitors into revenue.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-300 ${isGlitching ? 'opacity-20 blur-sm' : ''}`}>
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