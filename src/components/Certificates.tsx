import React from 'react';

import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Trophy,
} from 'lucide-react';

import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { CertificateItem } from '../data/portfolioData';

interface CertificatesProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

export const Certificates: React.FC<CertificatesProps> = ({
  onSelectCertificate,
}) => {
  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Certificates & Achievements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certificates &{' '}
            <span className="text-gradient">Recognitions</span>
          </h2>

          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            A collection of my training certificates, hackathon participation,
            appreciation and recognized achievements.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {PORTFOLIO_DATA.certificates.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-sm transition-all duration-300 glow-card"
            >

              <div>

                {/* Actual Certificate Image */}
                <div className="relative w-full h-52 sm:h-56 bg-slate-950/80 border-b border-slate-800 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-3 group-hover:scale-[1.02] transition-transform duration-300"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">

                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs font-semibold text-cyan-400 mb-2">
                    {cert.issuer}
                  </p>

                  {/* Date */}
                  <p className="text-xs text-slate-500 mb-3">
                    {cert.year}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills Learned */}
                  <div className="space-y-1.5 mb-6">
                    <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Skills / Recognition
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-800/70 border border-slate-700/60 text-[11px] text-slate-300"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <div className="pt-4 border-t border-slate-800/80">

                  <button
                    onClick={() => onSelectCertificate(cert)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/60 hover:bg-indigo-600 hover:text-white border border-slate-700/60 hover:border-indigo-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>View Certificate</span>
                  </button>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};