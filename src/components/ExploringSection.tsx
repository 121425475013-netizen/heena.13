import React from 'react';
import { LineChart, Cpu, Database, TrendingUp, Sparkles } from 'lucide-react';
import { EXPLORING_TOPICS } from '../data/portfolioData';

export const ExploringSection: React.FC = () => {
  const getExploringIcon = (id: string) => {
    switch (id) {
      case 'data-science':
        return <LineChart className="w-6 h-6 text-cyan-400" />;
      case 'technology':
        return <Cpu className="w-6 h-6 text-sky-400" />;
      case 'databases':
        return <Database className="w-6 h-6 text-indigo-400" />;
      case 'continuous-learning':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="exploring" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>06 — EXPLORING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Currently curious about...
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Core areas of technological curiosity and academic drive shaping Heena's growth.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {EXPLORING_TOPICS.map((item, index) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                    {getExploringIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-[11px] font-mono text-cyan-400/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Active Curiosity</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
