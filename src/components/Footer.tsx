import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="main-footer" className="bg-[#05070d] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="text-left space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
              <h4 className="font-display font-bold text-xl text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h4>
            </div>
            <p className="text-sm font-medium text-cyan-400/90 font-display">
              {PERSONAL_INFO.academicIdentity}
            </p>
            <p className="text-xs text-slate-400 font-sans">
              {PERSONAL_INFO.college} • Hyderabad, India
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-slate-400 hover:text-cyan-300 transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Bar with closing phrase & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 text-cyan-400/90">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-widest uppercase font-semibold">
              {PERSONAL_INFO.concept}
            </span>
          </div>
          <div>
            © 2026 Heena Sultana. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
