import React from 'react';
import { X, Printer, Mail, Github, MapPin, ExternalLink } from 'lucide-react';
import { DeveloperProfile, Project, ExperienceItem, SkillCategory } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DeveloperProfile;
  projects: Project[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
  experience,
  skillCategories,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="resume-modal-card"
        className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden text-zinc-200"
      >
        {/* Modal Top Actions */}
        <div className="p-4 px-6 border-b border-zinc-800 bg-zinc-900/90 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-indigo-400">
              Resume Preview
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs text-zinc-300 font-medium">{profile.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-medium rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-zinc-950/60 text-zinc-300 space-y-8 print:bg-white print:text-black print:p-0">
          {/* Header */}
          <div className="border-b border-zinc-800/80 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{profile.name}</h1>
            <p className="text-sm font-medium text-indigo-400 mt-1">{profile.title}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mt-3">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                {profile.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {profile.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-zinc-400" />
                github.com/{profile.githubUsername}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Core Technical Expertise */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="font-semibold text-white mb-1.5 text-xs">{cat.title}</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="space-y-2 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-semibold text-white">
                      {exp.role} <span className="text-indigo-400">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs text-zinc-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed flex items-start gap-2">
                        <span className="text-indigo-400 font-bold shrink-0">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
              Key Engineering Projects & Systems
            </h2>
            <div className="space-y-3">
              {projects.slice(0, 3).map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-semibold text-white">{p.title}</h4>
                    <span className="text-xs font-medium text-indigo-400">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-2">{p.description}</p>
                  <div className="text-xs text-zinc-500">
                    Stack: {p.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
              Education
            </h2>
            <div className="text-xs text-zinc-300 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="font-semibold text-white">
                Bachelor of Technology in Computer Science & Engineering
              </div>
              <div className="text-zinc-400 text-xs mt-0.5">Focus on Distributed Systems & Software Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
