import React from 'react';
import { Award, Trophy, Sparkles, Languages, Check } from 'lucide-react';
import { MILESTONES, LANGUAGES } from '../data/portfolioData';

export const HighlightsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>05 — HIGHLIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Milestones so far
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Factual academic and project highlights from Heena's degree journey.
          </p>
        </div>

        {/* 4 Stat Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-20">
          {MILESTONES.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl group relative overflow-hidden"
            >
              {/* Subtle top indicator accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  {item.label}
                </span>
                {item.id === 'sgpa' && <Award className="w-4 h-4 text-cyan-400" />}
                {item.id === 'top10' && <Trophy className="w-4 h-4 text-cyan-400" />}
                {item.id === 'round2' && <Sparkles className="w-4 h-4 text-indigo-400" />}
                {item.id === 'languages' && <Languages className="w-4 h-4 text-emerald-400" />}
              </div>

              <div className="text-4xl sm:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 tracking-tight my-2">
                {item.value}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mt-3">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div id="languages" className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-slate-800/80 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest mb-1">
                <Languages className="w-3.5 h-3.5" />
                <span>MULTILINGUAL COMMUNICATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Languages
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 self-start sm:self-auto">
              4 Languages Spoken & Understood
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 text-xs font-mono">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm font-sans text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {lang.nativeScript}
                  </span>
                </div>
                <div className="font-display font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {lang.name}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  Language Medium
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
