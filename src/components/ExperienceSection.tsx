import React from 'react';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#090A0F] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Professional background building high-performance architectures, data infrastructure, and developer-facing platforms.
          </p>
        </div>

        {/* Timeline with Company Logos */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-6 space-y-8">
          {experience.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker node */}
              <div className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover:bg-indigo-400 transition-colors ring-4 ring-[#090A0F]" />

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-200 shadow-sm space-y-4">
                {/* Header with Company Logo */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    {item.logoUrl ? (
                      <img
                        src={item.logoUrl}
                        alt={item.company}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-xl object-cover border border-zinc-700/80 shadow-sm shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center text-zinc-300 font-bold shrink-0">
                        <Building2 className="w-6 h-6 text-zinc-400" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-medium text-zinc-300">
                        {item.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {item.location}
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-1">
                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-zinc-300/90 leading-relaxed"
                    >
                      <span className="text-indigo-400 font-bold mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-800/60 text-zinc-400 border border-zinc-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
