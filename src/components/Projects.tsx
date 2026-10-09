import React from 'react';
import {
  ArrowRight,
  FolderGit2,
  Eye,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Real-world systems, academic management platforms, and hackathon solutions engineered with clean software architecture.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-sm overflow-hidden transition-all duration-300 glow-card"
            >
              {/* Project Image Preview Banner */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-semibold text-cyan-300">
                    {project.badge || project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action: View Project Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 border border-slate-700 hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-cyan-400 group-hover:text-white" />
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-transform" />
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
