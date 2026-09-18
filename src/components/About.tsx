import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, Users, Lightbulb, TrendingUp, Sparkles, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const nodeFlow = [
    { label: 'LEARN', desc: 'Core Fundamentals', color: 'from-cyan-500 to-sky-500' },
    { label: 'BUILD', desc: 'Practical Projects', color: 'from-sky-500 to-blue-500' },
    { label: 'SOLVE', desc: 'Analytical Approach', color: 'from-blue-500 to-indigo-500' },
    { label: 'COLLABORATE', desc: 'Academic Teamwork', color: 'from-indigo-500 to-violet-500' },
    { label: 'GROW', desc: 'Skills & Knowledge', color: 'from-violet-500 to-cyan-400' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>01 — ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Curious about data. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">
              Passionate about learning.
            </span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 shadow-xl backdrop-blur-sm space-y-6">
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
                {PERSONAL_INFO.aboutBio1}
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {PERSONAL_INFO.aboutBio2}
              </p>

              {/* Institutional Affiliation Badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block">Institution</span>
                  <span className="text-sm font-display font-semibold text-slate-200">{PERSONAL_INFO.college}</span>
                </div>
              </div>
            </div>

            {/* Subtle Abstract Node Flow (LEARN • BUILD • SOLVE • COLLABORATE • GROW) */}
            <div className="p-6 rounded-3xl bg-slate-900/30 border border-slate-800/60">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Growth Trajectory
                </span>
                <span className="text-[11px] font-mono text-cyan-400/90">Abstract Stage Flow</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {nodeFlow.map((node, index) => (
                  <div
                    key={node.label}
                    className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all text-center group"
                  >
                    <div className="w-6 h-6 mx-auto mb-2 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] font-mono text-cyan-400 font-bold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="font-display font-bold text-xs text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {node.label}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                      {node.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Profile Snapshot Card */}
          <div className="lg:col-span-5">
            <div
              id="profile-snapshot-card"
              className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-[#0a0f1d] border border-cyan-500/20 shadow-2xl relative overflow-hidden"
            >
              {/* Corner decorative light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                    Profile Snapshot
                  </span>
                  <h3 className="text-xl font-display font-bold text-white">Heena Sultana</h3>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" title="Active Student" />
              </div>

              {/* Profile Snapshot Attributes */}
              <div className="py-6 space-y-4">
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/60">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center text-cyan-300 flex-shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Academic Identity</span>
                    <span className="text-sm font-display font-semibold text-slate-100">DATA SCIENCE STUDENT</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/60">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-800/30 flex items-center justify-center text-blue-300 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Academic Result</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-mono font-bold text-cyan-300">SGPA 8.76</span>
                      <span className="text-xs text-slate-400">Honors Track</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/60">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/40 border border-indigo-800/30 flex items-center justify-center text-indigo-300 flex-shrink-0">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Academic Engagement</span>
                    <span className="text-sm font-display font-semibold text-slate-100">PROJECT EXPERIENCE</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/60">
                  <div className="w-10 h-10 rounded-xl bg-violet-950/40 border border-violet-800/30 flex items-center justify-center text-violet-300 flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Collaboration Style</span>
                    <span className="text-sm font-display font-semibold text-slate-100">TEAMWORK & COORDINATION</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/60">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-800/30 flex items-center justify-center text-emerald-300 flex-shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">Orientation</span>
                    <span className="text-sm font-display font-semibold text-slate-100">CONTINUOUS LEARNING</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Location: Hyderabad, IN</span>
                <span className="text-cyan-400">Honors Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
