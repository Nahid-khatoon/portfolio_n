import React, { useEffect } from 'react';

import {
  X,
  Award,
  ShieldCheck,
  CheckCircle2,
  Building,
  Sparkles,
} from 'lucide-react';

import type { CertificateItem } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-5 sm:p-7 animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Header */}
        <div className="flex items-center gap-4 mb-6 pr-12">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Award className="w-7 h-7" />
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{certificate.badge}</span>
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              {certificate.title}
            </h3>

            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
              <Building className="w-3 h-3 text-slate-500" />
              <span>{certificate.issuer}</span>
            </p>
          </div>
        </div>

        {/* ACTUAL CERTIFICATE IMAGE */}
        <div className="mb-7 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 p-2">
          <div className="w-full bg-black/30 rounded-xl flex items-center justify-center">
            <img
              src={certificate.image}
              alt={`${certificate.title} - Nahid Khatoon`}
              className="w-full max-h-[65vh] object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6 flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />

          <p className="text-xs sm:text-sm font-semibold text-indigo-200">
            {certificate.highlight}
          </p>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Achievement Summary
          </h4>

          <p className="text-sm text-slate-300 leading-relaxed">
            {certificate.description}
          </p>
        </div>

        {/* Competencies Validated */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Core Competencies Validated
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {certificate.skillsLearned.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />

                <span className="text-xs font-medium text-slate-200">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Validated Academic & Hackathon Record
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};