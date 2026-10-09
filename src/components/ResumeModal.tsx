import React, { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-6 sm:p-10 animate-in zoom-in-95 duration-200 text-left print:bg-white print:text-black print:border-none print:shadow-none print:p-4 print:max-h-none print:overflow-visible"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Controls (Hidden on Print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs sm:text-sm font-semibold text-slate-300">
              Nahid Khatoon • Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md cursor-pointer transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="space-y-6">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <h2 className="text-3xl font-extrabold text-white print:text-black">
              {PORTFOLIO_DATA.personal.name}
            </h2>
            <p className="text-sm font-bold text-indigo-400 print:text-indigo-700 mt-1">
              {PORTFOLIO_DATA.personal.subtitle}
            </p>

            {/* Contact details row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300 print:text-slate-700 mt-3">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-black" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400 print:text-black" />
                <span>Hyderabad, Telangana / Darbhanga, Bihar</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {PORTFOLIO_DATA.personal.introduction} Currently pursuing B.Tech in Computer Science & Engineering at MANUU Hyderabad with strong foundations in Data Structures, Object-Oriented Programming, and Web Development. Achieved 9.03 CGPA in Diploma and recognized as a Smart India Hackathon finalist.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 mb-3">
              Education
            </h3>
            <div className="space-y-3">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex items-baseline justify-between font-bold text-white print:text-black">
                    <span>{edu.degree}</span>
                    <span className="text-xs font-mono text-indigo-300 print:text-indigo-800">{edu.scoreValue}</span>
                  </div>
                  <div className="text-xs text-slate-400 print:text-slate-600 flex justify-between">
                    <span>{edu.institution}, {edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 mb-2">
              Technical Skills
            </h3>
            <div className="text-xs sm:text-sm text-slate-300 print:text-slate-800 space-y-1.5">
              <p>
                <strong className="text-white print:text-black">Programming Languages:</strong> C++, Python, JavaScript (ES6+), PHP
              </p>
              <p>
                <strong className="text-white print:text-black">Web Frontend:</strong> HTML5, CSS3, Tailwind CSS, Responsive Design
              </p>
              <p>
                <strong className="text-white print:text-black">Backend & Database:</strong> SQL, MySQL, PHP Server Scripting, REST APIs
              </p>
              <p>
                <strong className="text-white print:text-black">Developer Tools:</strong> Git, GitHub, VS Code, Linux basics
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 mb-3">
              Key Projects
            </h3>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex items-baseline justify-between font-bold text-white print:text-black">
                    <span>{proj.title}</span>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                      {proj.technologies.slice(0, 3).join(', ')}
                    </span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 text-xs mt-1 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Hackathons */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 mb-2">
              Certifications & Recognitions
            </h3>
            <ul className="text-xs sm:text-sm text-slate-300 print:text-slate-800 list-disc list-inside space-y-1">
              <li>Smart India Hackathon (SIH) – National Innovation Initiative Finalist</li>
              <li>Techathon Developer & Hackathon Prototype Showcase</li>
              <li>Academic Merit & Top Achiever Distinction (9.03 CGPA in Diploma)</li>
            </ul>
          </div>
        </div>

        {/* Modal Bottom Footer (Hidden on Print) */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 cursor-pointer"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
