import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Building2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const academicPillars = [
    {
      title: 'Data Science Core',
      desc: 'Exploring core data science concepts, data understanding, and analytical methods.',
    },
    {
      title: 'Database Management',
      desc: 'Developing foundational knowledge of DBMS architectures, schema structures, and data handling.',
    },
    {
      title: 'Python Programming',
      desc: 'Building foundational scripting and algorithmic problem-solving capabilities.',
    },
    {
      title: 'Academic Projects & Activities',
      desc: 'Active participation in exhibitions, collaborative assignments, and technical challenges.',
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>02 — EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Academic foundation
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Honors degree track focused on data science, databases, and computational fundamentals.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0a0f1d] to-slate-950 border border-slate-800/80 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Degree & College Details */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 text-xs font-mono">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>UNDERGRADUATE DEGREE</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  B.Sc. Data Science — Honors
                </h3>
                <div className="flex items-center gap-2 text-base sm:text-lg text-slate-300 mt-2 font-medium">
                  <Building2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{PERSONAL_INFO.college}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Currently pursuing a B.Sc. in Data Science (Honors), developing foundational knowledge and practical experience through academic projects, assignments, and technology-focused activities.
              </p>

              {/* Core Learning Focus Area Pills */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {academicPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="font-display font-semibold text-sm text-slate-200">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-6">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visually Prominent SGPA Display */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-xs p-8 rounded-3xl bg-slate-950/80 border border-cyan-500/30 text-center shadow-[0_0_30px_rgba(6,182,212,0.15)] relative group">
                <div className="inline-flex p-3 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 mb-4">
                  <Award className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
                    Cumulative Result
                  </span>
                  <div className="text-5xl sm:text-6xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 tracking-tight">
                    8.76
                  </div>
                  <span className="text-sm font-mono uppercase font-bold text-cyan-400 tracking-wider block">
                    SGPA
                  </span>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed font-sans">
                  Honors Program Academic Standing • Demonstrating consistent academic focus and analytical rigor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
