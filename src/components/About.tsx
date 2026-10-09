import React from 'react';
import {
  Code,
  Layers,
  Cpu,
  Users,
  MapPin,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Terminal,
  ArrowUpRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlightIcons = [Code, Layers, Cpu, Users];

  const quickFacts = [
    { label: 'Current Degree', value: 'B.Tech in Computer Science & Engineering' },
    { label: 'University', value: 'Maulana Azad National Urdu University (MANUU)' },
    { label: 'Diploma Honor', value: 'CGPA 9.03 (MANUU Darbhanga)' },
    { label: 'High School', value: '88.4% Distinction (10th Standard)' },
    { label: 'Core Focus', value: 'Full Stack Web & Software Engineering' },
    { label: 'Campus Location', value: 'Hyderabad, Telangana, India' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Nahid Khatoon</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            B.Tech student & aspiring software developer passionate about building reliable, clean, and scalable web solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Bio & Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-indigo-400" />
                <span>Aspiring Software & Full Stack Developer</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{PORTFOLIO_DATA.about.bioParagraph1}</p>
                <p>{PORTFOLIO_DATA.about.bioParagraph2}</p>
              </div>

              {/* What I Bring to the Table */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Core Development Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Semantic & accessible HTML/CSS structuring',
                    'Object-oriented and algorithmic rigor (C++, Python)',
                    'Relational database design & optimized SQL queries',
                    'Hackathon-tested rapid prototyping & collaboration',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Competencies Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.about.keyHighlights.map((highlight, idx) => {
                const IconComponent = highlightIcons[idx] || Code;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/70 hover:border-indigo-500/40 transition-all glow-card"
                  >
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{highlight.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Quick Facts & Academic Summary */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Profile Overview Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center justify-between mb-4">
                <span>Profile Snapshot</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </h3>

              <div className="divide-y divide-slate-800/70">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="py-3 flex flex-col gap-0.5">
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                      {fact.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Based in Hyderabad / Bihar</span>
                </div>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Academic Standout Callout Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-purple-950/30 to-slate-900/60 border border-indigo-500/30 backdrop-blur-sm relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    High Academic Honors
                  </span>
                  <h4 className="text-base font-bold text-white mt-1.5">
                    9.03 CGPA in Diploma & 88.4% in 10th
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Consistent top academic track record demonstrating dedication, strong technical logic, and continuous commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
