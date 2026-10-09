import React, { useState } from 'react';
import {
  FileCode,
  Palette,
  Terminal,
  Code2,
  Binary,
  Database,
  Server,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Skill } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'languages' | 'web' | 'database'>('all');

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'HTML':
        return <FileCode className="w-6 h-6 text-orange-400" />;
      case 'CSS':
        return <Palette className="w-6 h-6 text-sky-400" />;
      case 'JavaScript':
        return <Terminal className="w-6 h-6 text-amber-400" />;
      case 'Python':
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'C++':
        return <Binary className="w-6 h-6 text-blue-400" />;
      case 'SQL':
        return <Database className="w-6 h-6 text-purple-400" />;
      case 'PHP':
        return <Server className="w-6 h-6 text-violet-400" />;
      default:
        return <Code2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  const filteredSkills = PORTFOLIO_DATA.skills.filter((skill) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'languages') return ['Python', 'C++', 'JavaScript', 'PHP'].includes(skill.name);
    if (activeFilter === 'web') return ['HTML', 'CSS', 'JavaScript', 'PHP'].includes(skill.name);
    if (activeFilter === 'database') return ['SQL', 'Python', 'PHP'].includes(skill.name);
    return true;
  });

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Core programming languages, web technologies, and database proficiencies applied across projects and academics.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Core Skills' },
              { id: 'languages', label: 'Languages (C++, Python, JS, PHP)' },
              { id: 'web', label: 'Web Tech (HTML, CSS, JS, PHP)' },
              { id: 'database', label: 'Data & Backend (SQL, PHP)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill: Skill) => (
            <div
              key={skill.name}
              className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-sm transition-all duration-300 glow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Bottom tag & indicator */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Category
                </span>
                <span className="text-xs font-semibold text-slate-300 capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Complementary Tools & Concepts Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Familiar Tools, Frameworks & Concepts</h4>
                <p className="text-xs text-slate-400">Developer toolchains utilized across coursework and projects</p>
              </div>
            </div>
            <span className="text-xs text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Modern Workflow Ready
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {PORTFOLIO_DATA.additionalTools.map((tool, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>{tool.name}</span>
                <span className="text-[10px] text-slate-500 font-mono">({tool.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
