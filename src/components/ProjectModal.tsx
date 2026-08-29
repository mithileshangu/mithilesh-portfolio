import React, { useState } from 'react';
import { Project } from '../types';
import {
  X,
  ExternalLink,
  Github,
  Cpu,
  BookOpen,
  CheckCircle2,
  Layers,
  Activity,
  Zap,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'stack'>('overview');

  if (!project) return null;

  const { githubAttachment } = project;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-card"
        className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden text-zinc-200"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 bg-zinc-900/95 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                  Featured Case Study
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{project.title}</h2>
            <p className="text-xs sm:text-sm text-zinc-400">{project.tagline}</p>
          </div>

          <button
            id="close-modal-btn"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer shrink-0"
            title="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-5 sm:px-6 border-b border-zinc-800 bg-zinc-950/60 flex items-center gap-2 pt-2">
          <button
            id="tab-overview-btn"
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 py-2.5 px-3.5 text-xs font-medium rounded-t-lg border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-white bg-zinc-900'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Overview & Features</span>
          </button>

          <button
            id="tab-architecture-btn"
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 py-2.5 px-3.5 text-xs font-medium rounded-t-lg border-b-2 transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-indigo-500 text-white bg-zinc-900'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>System Architecture</span>
          </button>

          <button
            id="tab-stack-btn"
            onClick={() => setActiveTab('stack')}
            className={`flex items-center gap-2 py-2.5 px-3.5 text-xs font-medium rounded-t-lg border-b-2 transition-colors cursor-pointer ${
              activeTab === 'stack'
                ? 'border-indigo-500 text-white bg-zinc-900'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Technologies & Stack</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 max-h-[55vh] space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Project Preview Image */}
              {project.imageUrl && (
                <div className="w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 max-h-64 sm:max-h-72">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}

              {/* Problem & Solution */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                  Project Background & Goals
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
                  {project.description}
                </p>
              </div>

              {/* Performance Metrics Strip */}
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                    Engineering Metrics & Telemetry
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 text-center"
                      >
                        <div className="text-lg font-bold text-indigo-400 font-mono">{metric.value}</div>
                        <div className="text-xs text-zinc-400 mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                    Core Engineering Highlights
                  </h4>
                  <div className="space-y-2.5">
                    {project.keyFeatures.map((feat, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/80 flex items-start gap-3 text-xs sm:text-sm text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Architecture Decisions */}
              {project.architectureNotes && project.architectureNotes.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                    Architectural Design Decisions
                  </h4>
                  <div className="space-y-2.5">
                    {project.architectureNotes.map((note, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 flex items-start gap-3 text-xs sm:text-sm text-zinc-300"
                      >
                        <span className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed pt-0.5">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* System Resilience & Standards */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Production Considerations</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>State synchronization & optimistic mutation rollbacks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Strict typed API contracts with runtime validation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Containerized micro-services with health probes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Low-latency cache invalidation strategies</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-xl bg-zinc-950/60 text-zinc-200 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-3">
                <div className="text-xs font-semibold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-indigo-400" />
                  <span>Deployment & Operational Environment</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Engineered with clean dependency separation, automated CI/CD validation, and zero-downtime deployment capabilities. Code is structured for modular testability and clear team collaboration.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Direct Actions */}
        <div className="p-4 sm:p-5 px-6 border-t border-zinc-800 bg-zinc-900 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-zinc-400">
            {project.title} Case Study
          </div>

          <div className="flex items-center gap-2.5">
            {project.demoUrl && (
              <a
                id="modal-live-demo-link"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {githubAttachment.repoUrl && (
              <a
                id="modal-github-repo-link"
                href={githubAttachment.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-medium rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-zinc-400" />
                <span>Source Code</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
