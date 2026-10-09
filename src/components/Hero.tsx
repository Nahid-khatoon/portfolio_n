import React, { useState } from 'react';
import {
  ArrowRight,
  Send,
  Phone,
  Mail,
  Check,
  Copy,
  Download,
  GraduationCap,
  Award,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient gradient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Internships & Software Roles</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-cyan-400 hidden sm:inline font-mono">B.Tech Undergrad</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg sm:text-xl font-semibold text-slate-300 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-indigo-400">B.Tech Student</span>
              <span className="text-slate-600">|</span>
              <span className="text-purple-300">Full Stack Developer</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400">Software Developer</span>
            </p>

            {/* Introduction */}
            <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {PORTFOLIO_DATA.personal.introduction}
            </p>

            {/* Direct Phone Number Pill */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-indigo-500/60 text-slate-200 hover:text-white transition-all text-sm font-medium shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy No.</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyEmail}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons: View My Projects & Contact Me */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-300 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume Preview</span>
              </button>
            </div>

            {/* Social Icons & University Info */}
            <div className="mt-9 pt-7 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 w-full">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Connect:
                </span>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-xs"
                  aria-label="Nahid Khatoon GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-xs"
                  aria-label="Nahid Khatoon LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-xs"
                  aria-label="Email Nahid Khatoon"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-slate-800 hidden sm:block" />

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Maulana Azad National Urdu University (MANUU)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image & Floating Achievement Cards */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              {/* Outer glowing halo ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 opacity-30 blur-2xl animate-pulse-subtle" />

              {/* Decorative Frame */}
              <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-tr from-indigo-500/60 via-purple-500/30 to-cyan-400/60 shadow-2xl overflow-hidden group">
                <div className="w-full h-full bg-slate-950 rounded-[22px] overflow-hidden relative">
                  <img
                    src={PORTFOLIO_DATA.personal.avatar}
                    alt="Nahid Khatoon - B.Tech Student & Full Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Bottom overlay badge inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Nahid Khatoon</p>
                      <p className="text-[11px] text-cyan-400 font-mono">B.Tech CS Undergrad</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-semibold border border-indigo-500/40">
                      Hyderabad, IN
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right - 9.03 CGPA in Diploma */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-slate-900/95 border border-indigo-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 animate-float-slow z-20">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-300">Diploma CGPA</p>
                  <p className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                    9.03 / 10.0
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left - SIH Project Finalist */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-slate-900/95 border border-purple-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-300">Smart India Hackathon</p>
                  <p className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Rural Tech Finalist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Strip under Hero */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.personal.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 backdrop-blur-sm transition-all hover:translate-y-[-2px] text-center"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 font-mono">
                {metric.value}
              </p>
              <p className="text-xs font-semibold text-slate-300 mt-1">{metric.label}</p>
              <p className="text-[11px] text-slate-500">{metric.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
