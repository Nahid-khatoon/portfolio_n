import React from 'react';
import {
  GraduationCap,
  Award,
  MapPin,
  CheckCircle,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Academic milestones highlighting consistent performance, technical discipline, and foundation in computer engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500/30" />

          <div className="space-y-10">
            {PORTFOLIO_DATA.education.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start gap-6 group">
                {/* Timeline Icon Node */}
                <div className="hidden md:flex relative z-10 w-16 h-16 rounded-2xl bg-slate-900 border-2 border-indigo-500/60 items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-lg shadow-indigo-950/50 shrink-0">
                  {index === 0 ? (
                    <GraduationCap className="w-7 h-7 text-indigo-400" />
                  ) : index === 1 ? (
                    <Award className="w-7 h-7 text-emerald-400" />
                  ) : (
                    <BookOpen className="w-7 h-7 text-cyan-400" />
                  )}
                </div>

                {/* Education Card */}
                <div className="flex-1 w-full p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 backdrop-blur-sm transition-all duration-300 glow-card">
                  {/* Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                          {item.period}
                        </span>
                        <span className="text-slate-600">•</span>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin className="w-3 h-3 text-rose-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-slate-300 mt-1">
                        {item.institution}
                      </p>
                    </div>

                    {/* Prominent Score Badge */}
                    <div className="self-start sm:self-auto">
                      <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{item.scoreValue}</span>
                      </span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="mt-5 pt-4 border-t border-slate-800/70">
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                      Key Highlights & Coursework
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
