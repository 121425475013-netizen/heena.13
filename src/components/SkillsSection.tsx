import React from 'react';
import {
  Code,
  Database,
  Table,
  Presentation,
  FileText,
  Users,
  MessageSquare,
  Lightbulb,
  Clock,
  Zap,
  ShieldCheck,
  Smile,
  Compass,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import { TECHNICAL_SKILLS, STRENGTHS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getTechIcon = (name: string) => {
    switch (name) {
      case 'Python':
        return <Code className="w-6 h-6 text-cyan-400" />;
      case 'DBMS':
        return <Database className="w-6 h-6 text-indigo-400" />;
      case 'Microsoft Excel':
        return <Table className="w-6 h-6 text-emerald-400" />;
      case 'Microsoft PowerPoint':
        return <Presentation className="w-6 h-6 text-amber-400" />;
      case 'Microsoft Word':
        return <FileText className="w-6 h-6 text-sky-400" />;
      default:
        return <Code className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getStrengthIcon = (name: string) => {
    switch (name) {
      case 'Teamwork & Collaboration':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'Communication Skills':
        return <MessageSquare className="w-5 h-5 text-sky-400" />;
      case 'Problem Solving':
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'Time Management':
        return <Clock className="w-5 h-5 text-violet-400" />;
      case 'Quick Learner':
        return <Zap className="w-5 h-5 text-emerald-400" />;
      case 'Responsible & Dedicated':
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'Positive Attitude':
        return <Smile className="w-5 h-5 text-pink-400" />;
      case 'Willingness to Learn':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case 'Good Team Player':
        return <HeartHandshake className="w-5 h-5 text-cyan-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const categories = [
    {
      title: 'PROGRAMMING',
      badge: 'Coding Core',
      skills: TECHNICAL_SKILLS.filter((s) => s.category === 'Programming'),
    },
    {
      title: 'DATABASE',
      badge: 'Data Layer',
      skills: TECHNICAL_SKILLS.filter((s) => s.category === 'Database'),
    },
    {
      title: 'PRODUCTIVITY TOOLS',
      badge: 'Documentation & Workflow',
      skills: TECHNICAL_SKILLS.filter((s) => s.category === 'Productivity Tools'),
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>04 — SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Tools I'm learning and using
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Accurate representation of technical foundations and daily academic productivity tools.
          </p>
        </div>

        {/* Technical Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-24">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-xl backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-slate-300 font-bold">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/50 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                    {cat.badge}
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                            {getTechIcon(skill.name)}
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                          {skill.level === 'Basic' ? 'Foundational' : 'Working'}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed pl-13">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Honors Curriculum</span>
                <span className="text-cyan-400">Practiced In Coursework</span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Subsection: Strengths */}
        <div id="strengths" className="text-left pt-6">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/40 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STRENGTHS & INTERPERSONAL QUALITIES</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Strengths
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Interpersonal and professional strengths cultivated through group projects, academic events, and collaborative coursework.
            </p>
          </div>

          {/* Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STRENGTHS.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-transform">
                    {getStrengthIcon(item.name)}
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-13.5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
