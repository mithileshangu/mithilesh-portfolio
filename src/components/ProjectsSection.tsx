import React from 'react';
import { Project } from '../types';
import {
  ExternalLink,
  Github,
  BookOpen,
  Layers,
  Sparkles,
  ArrowUpRight,
  Code2,
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#090A0F] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Curated selection of production-tested web platforms, educational guidance applications, and distributed systems with live repositories and detailed architectural breakdowns.
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="py-16 text-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/20 space-y-3">
            <p className="text-zinc-400 text-sm">No projects to display yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* Top Visual Banner / Image */}
                <div className="relative w-full h-44 bg-zinc-950/80 overflow-hidden border-b border-zinc-800/80">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col justify-between p-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono">
                          {project.category}
                        </span>
                        {project.githubAttachment && (
                          <div className="flex items-center gap-1 text-xs text-zinc-400 bg-zinc-900/80 px-2 py-0.5 rounded-full border border-zinc-800">
                            <span
                              className="w-2 h-2 rounded-full mr-1"
                              style={{
                                backgroundColor:
                                  project.githubAttachment.languageColor || '#38bdf8',
                              }}
                            />
                            <span>{project.githubAttachment.primaryLanguage}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Hover Quick inspect overlay badge */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-zinc-700 text-[11px] text-zinc-200 flex items-center gap-1 shadow-md">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3 text-indigo-400" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="shrink-0 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights / Features preview */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/60">
                      <div className="text-[11px] text-zinc-300/90 truncate flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        <span className="truncate">{project.keyFeatures[0]}</span>
                      </div>
                      {project.keyFeatures[1] && (
                        <div className="text-[11px] text-zinc-400/80 truncate flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                          <span className="truncate">{project.keyFeatures[1]}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-zinc-800/40 text-zinc-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Controls: Inspect Architecture & GitHub link */}
                <div className="px-5 py-3.5 bg-zinc-950/40 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5 text-indigo-400 font-medium group-hover:text-indigo-300">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </div>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.githubAttachment?.repoUrl && (
                      <a
                        href={project.githubAttachment.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors"
                        title="Open Live Preview"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
