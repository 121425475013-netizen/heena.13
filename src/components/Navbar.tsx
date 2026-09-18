import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070a12]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            id="brand-link"
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-slate-800 to-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-display font-bold text-cyan-300 text-lg group-hover:border-cyan-400/60 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              H
            </div>
            <div>
              <span className="font-display font-bold tracking-tight text-slate-100 text-base sm:text-lg block group-hover:text-cyan-300 transition-colors">
                HEENA SULTANA
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-400 block -mt-0.5">
                B.Sc. Data Science (Honors)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-connect-btn"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase text-slate-200 bg-slate-900/90 hover:bg-cyan-950/50 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-slate-800/80 px-5 pt-3 pb-6 space-y-2 shadow-2xl transition-all"
        >
          <div className="pb-2 mb-2 border-b border-slate-800/60 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Navigation
            </span>
            <span className="text-[11px] text-cyan-400/80 bg-cyan-950/50 px-2.5 py-0.5 rounded-full border border-cyan-800/40 font-mono">
              SGPA 8.76
            </span>
          </div>

          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-link-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-800/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />}
              </button>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-800/60">
            <button
              id="mobile-contact-cta"
              onClick={() => scrollToSection('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold tracking-wide text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <span>Contact Heena Sultana</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2 font-mono">
              {PERSONAL_INFO.email}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
