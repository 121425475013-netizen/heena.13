import React, { useState } from 'react';
import { Award, Trophy, Users, CheckCircle2, Sparkles, MessageCircle, ArrowRight, Shield, HeartPulse, HelpCircle } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';

export const ProjectSection: React.FC = () => {
  // Interactive state for the conceptual project visualization mockup
  const [activeStep, setActiveStep] = useState(1);
  const [selectedResponse, setSelectedResponse] = useState<number | null>(2);

  const sampleQuestions = [
    {
      q: 'How would you rate your typical sleep quality and restfulness over the past week?',
      options: ['Restful & Consistent', 'Mild Intermittent Sleep', 'Frequent Disturbance', 'Severe Insomnia'],
    },
    {
      q: 'How frequently do you feel overwhelmed by academic tasks or daily deadlines?',
      options: ['Rarely or Never', 'Occasionally during exams', 'Often through the week', 'Constantly overwhelmed'],
    },
    {
      q: 'Do you feel comfortable communicating stress or seeking support from peers?',
      options: ['Very comfortable', 'Somewhat comfortable', 'Hesitant to share', 'Prefer to keep to myself'],
    },
  ];

  return (
    <section id="project" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>03 — FEATURED PROJECT</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {FEATURED_PROJECT.name}
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <span className="px-3 py-1 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold flex items-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
              <Trophy className="w-3.5 h-3.5 text-cyan-400" />
              TOP 10 ENTRY
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-950/70 text-indigo-300 border border-indigo-500/40 text-xs font-mono font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              ROUND 2
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono">
              EVENT: {FEATURED_PROJECT.event}
            </span>
          </div>
        </div>

        {/* Case Study Container */}
        <div className="space-y-12">
          {/* Main Case Study Overview Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-2xl backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Project Context & Contribution */}
              <div className="lg:col-span-6 space-y-6 text-left">
                {/* Meta Grid */}
                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-800/80">
                  <div>
                    <span className="text-[11px] uppercase font-mono tracking-widest text-slate-400 block mb-1">
                      Project
                    </span>
                    <span className="font-display font-bold text-base text-white">
                      Mental Health Detection
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-mono tracking-widest text-slate-400 block mb-1">
                      Event
                    </span>
                    <span className="font-display font-semibold text-base text-cyan-300">
                      Informative Exhibit
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-mono tracking-widest text-slate-400 block mb-1">
                      Achievement
                    </span>
                    <span className="font-display font-semibold text-base text-emerald-300 flex items-center gap-1">
                      <Award className="w-4 h-4" /> Top 10 Entry
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-mono tracking-widest text-slate-400 block mb-1">
                      Progress
                    </span>
                    <span className="font-display font-semibold text-base text-indigo-300">
                      Advanced to Round 2
                    </span>
                  </div>
                </div>

                {/* Project Narrative */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-cyan-400">
                    Project Description
                  </h4>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                    {FEATURED_PROJECT.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-cyan-400">
                    Contribution & Learnings
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal bg-slate-950/60 p-4 rounded-2xl border border-slate-800/70">
                    {FEATURED_PROJECT.contribution}
                  </p>
                </div>

                {/* Project Tags (Strictly limited to prompt specifications) */}
                <div className="pt-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-slate-400 block mb-3">
                    Project Competencies Developed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {FEATURED_PROJECT.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-cyan-200 text-xs font-medium tracking-wide shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Achievement Highlight Card */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 border border-cyan-500/40 shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-cyan-400" />
                      Academic Milestone
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full">
                      Informative Exhibit
                    </span>
                  </div>

                  <div className="space-y-3 my-4 text-left">
                    <div className="text-6xl sm:text-7xl font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-200">
                      TOP 10
                    </div>
                    <p className="text-lg font-display font-semibold text-slate-100">
                      Selected among the Top 10 entries
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-600/40 text-cyan-300 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Advanced to Round 2</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mt-6 pt-4 border-t border-slate-800/80">
                    Recognized during the competitive Informative Exhibit for collaborative execution, application utility, and problem approach.
                  </p>
                </div>

                {/* Process / Development Flow */}
                <div className="p-6 rounded-3xl bg-slate-950/60 border border-slate-800/80 text-left">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4">
                    Milestone Progression Flow
                  </span>

                  <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center">
                    {FEATURED_PROJECT.timeline.map((item, index) => (
                      <div key={item.step} className="space-y-2">
                        <div
                          className={`w-8 h-8 mx-auto rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all ${
                            index >= 3
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                              : 'bg-slate-900 text-slate-300 border border-slate-800'
                          }`}
                        >
                          {item.step}
                        </div>
                        <div className="text-[11px] font-display font-bold text-slate-200 tracking-tight truncate">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-4 pt-3 border-t border-slate-800/60">
                    <span>Initial Concept</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-cyan-400 font-semibold">Round 2 Advancement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conceptual Project Visualization Mockup */}
          <div className="rounded-3xl border border-slate-800/90 bg-slate-950/70 p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left">
            {/* Disclaimer Label mandated by user instructions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/50 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    Application Interaction Prototype
                  </h4>
                  <span className="text-xs text-slate-400 block">
                    Response Assessment Architecture
                  </span>
                </div>
              </div>

              {/* Exact labeling required */}
              <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Conceptual project visualization</span>
              </div>
            </div>

            {/* Interactive Mock Interface Body */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Interactive assessment flow mockup */}
              <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-slate-800/90 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      Assessment Item 0{activeStep} of 03
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((step) => (
                      <button
                        key={step}
                        onClick={() => {
                          setActiveStep(step);
                          setSelectedResponse(null);
                        }}
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-medium transition-colors ${
                          activeStep === step
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        {step}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-base sm:text-lg font-display font-medium text-slate-100">
                  "{sampleQuestions[activeStep - 1].q}"
                </p>

                {/* Option buttons */}
                <div className="space-y-2.5">
                  {sampleQuestions[activeStep - 1].options.map((opt, idx) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedResponse(idx)}
                      className={`w-full text-left p-3.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                        selectedResponse === idx
                          ? 'bg-cyan-950/60 border border-cyan-500/60 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                          : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <span>{opt}</span>
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                          selectedResponse === idx
                            ? 'border-cyan-400 bg-cyan-400 text-black'
                            : 'border-slate-700'
                        }`}
                      >
                        {selectedResponse === idx && '✓'}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    Responses evaluated locally to assess user wellness state
                  </span>
                  <button
                    onClick={() => {
                      if (activeStep < 3) {
                        setActiveStep(activeStep + 1);
                        setSelectedResponse(null);
                      } else {
                        setActiveStep(1);
                        setSelectedResponse(2);
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono font-semibold text-slate-200 transition-colors flex items-center gap-1.5"
                  >
                    <span>{activeStep === 3 ? 'Reset Simulation' : 'Next Step'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right: Abstract Wellness Status Panel */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#090e1a] border border-slate-800/90 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
                    System Architecture
                  </span>
                  <h5 className="font-display font-semibold text-sm text-slate-200">
                    Response Feedback Logic
                  </h5>
                </div>

                {/* State Indicator */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Response Analysis</span>
                    <span className="text-emerald-400 font-mono font-semibold">Operational</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400 w-3/4 rounded-full" />
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
                    <span className="font-mono text-cyan-400 font-semibold block mb-0.5">Assessment Layer</span>
                    Structured questionnaire gathering self-reported behavioral indicators.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
                    <span className="font-mono text-indigo-400 font-semibold block mb-0.5">Synthesis Logic</span>
                    Evaluates patterns across responses to highlight potential stress trends.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
                    <span className="font-mono text-emerald-400 font-semibold block mb-0.5">Supportive Feedback</span>
                    Provides constructive wellness resources and supportive reminders.
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400 text-center pt-2">
                  Informative Exhibit Demonstration Model
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
