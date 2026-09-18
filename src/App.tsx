import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { ProjectSection } from './components/ProjectSection';
import { SkillsSection } from './components/SkillsSection';
import { HighlightsSection } from './components/HighlightsSection';
import { ExploringSection } from './components/ExploringSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Check initial path or hash to scroll to requested section if opened directly
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    const hash = window.location.hash.replace(/^#/, '').toLowerCase();
    const targetId = hash || path;

    if (targetId) {
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 150);
    }
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'project', 'skills', 'achievements', 'exploring', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Subtle Global Grid */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <Navbar activeSection={activeSection} />

      <main id="main-content" className="flex-grow relative z-10">
        <Hero />
        <About />
        <Education />
        <ProjectSection />
        <SkillsSection />
        <HighlightsSection />
        <ExploringSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
