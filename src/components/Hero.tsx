import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FolderGit2, Send, Sparkles, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DataVisualizer } from './DataVisualizer';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Information */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-sm"
              id="hero-eyebrow"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>HELLO, I'M</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              <span className="text-slate-400 font-sans tracking-normal">Hyderabad, India</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1
                id="hero-name"
                className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white"
              >
                HEENA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">SULTANA</span>
              </h1>
              <p
                id="hero-subheadline"
                className="text-xl sm:text-2xl font-display font-semibold text-cyan-400/90 tracking-tight"
              >
                {PERSONAL_INFO.academicIdentity}
              </p>
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              id="hero-intro-text"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.heroIntro}
            </motion.p>

            {/* Information Line Pill */}
            <motion.div
              id="hero-info-line"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 inline-flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 shadow-inner"
            >
              <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                B.Sc. Data Science (Honors)
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-cyan-300 font-mono font-semibold bg-cyan-950/40 px-2.5 py-0.5 rounded-md border border-cyan-800/40">
                <Award className="w-3.5 h-3.5" />
                SGPA 8.76
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-400">Hyderabad</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              id="hero-cta-group"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                id="hero-view-project-btn"
                onClick={() => scrollTo('project')}
                className="px-6 py-3.5 rounded-xl font-display font-semibold text-sm tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FolderGit2 className="w-4 h-4 text-slate-950 transition-transform group-hover:scale-110" />
                <span>VIEW MY PROJECT</span>
              </button>

              <button
                id="hero-connect-btn"
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 rounded-xl font-display font-semibold text-sm tracking-wide text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white transition-all flex items-center gap-2 group cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Send className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>LET'S CONNECT</span>
              </button>
            </motion.div>

            {/* Core Stage Concept */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 flex items-center gap-3 text-xs tracking-widest font-mono text-slate-400"
            >
              <span className="w-8 h-[1px] bg-slate-800" />
              <span>{PERSONAL_INFO.concept}</span>
            </motion.div>
          </div>

          {/* Right Column: Abstract Data Science Visualization */}
          <motion.div
            id="hero-visual-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="w-full max-w-lg lg:max-w-none">
              <DataVisualizer />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center"
        >
          <button
            id="scroll-explore-indicator"
            onClick={() => scrollTo('about')}
            className="group inline-flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer focus:outline-none"
            aria-label="Scroll to explore about section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">SCROLL TO EXPLORE</span>
            <div className="w-8 h-8 rounded-full border border-slate-800 group-hover:border-cyan-500/50 flex items-center justify-center transition-colors">
              <ArrowDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-cyan-400" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
