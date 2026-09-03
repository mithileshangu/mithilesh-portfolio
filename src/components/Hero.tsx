import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  ArrowRight,
  Layers,
  Sparkles,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { DeveloperProfile, TechItem } from '../types';
import { getTechLogoUrl, getTechBrandColor } from '../utils/techLogos';

interface HeroProps {
  profile: DeveloperProfile;
  techStack: TechItem[];
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  techStack,
  onOpenResume,
}) => {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const handleImageError = (techId: string) => {
    setFailedLogos((prev) => ({ ...prev, [techId]: true }));
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-zinc-800/80 bg-[#090A0F]">
      {/* Background subtle radial gradient & ambient grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 ambient-grid-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Main Hero Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-200 font-medium">{profile.availability}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/60 text-xs text-zinc-400">
                <MapPin className="w-3 h-3 text-zinc-500" />
                <span>{profile.location}</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400">{profile.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300">
                {profile.title}
              </p>
              <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="px-5 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 hover:bg-white text-zinc-950 flex items-center gap-2 transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="px-5 py-2.5 rounded-xl text-sm font-medium bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Get in Touch</span>
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-xl text-sm font-medium bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 flex items-center gap-2 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-zinc-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Direct Social Links */}
            <div className="flex items-center gap-4 text-xs text-zinc-400 pt-1">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait Avatar & Modern Preview Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-700/30 via-indigo-500/20 to-zinc-700/30 rounded-3xl blur-md opacity-60" />
              
              <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-800 p-6 space-y-6 shadow-xl backdrop-blur-sm">
                {/* Profile Avatar with status */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={profile.avatarUrl || '/profile_avatar_1787910116265.jpg'}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-zinc-700/80 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-zinc-900" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{profile.name}</h3>
                    <p className="text-xs text-zinc-400">{profile.title}</p>
                    <p className="text-[11px] text-zinc-500 mt-1">{profile.location}</p>
                  </div>
                </div>

                {/* Subtitle statement */}
                <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950/60 p-3.5 rounded-xl border border-zinc-800/80">
                  "{profile.subTitle}"
                </p>

                {/* Micro Metric Counters */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/80">
                    <div className="text-xs text-zinc-500">Projects Built</div>
                    <div className="text-base font-bold text-white flex items-center gap-1 mt-0.5 font-mono">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{profile.stats.totalProjects}+</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/80">
                    <div className="text-xs text-zinc-500">Experience</div>
                    <div className="text-base font-bold text-white flex items-center gap-1 mt-0.5 font-mono">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{profile.yearsOfExperience}+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Tech Stack Logo Cloud Strip */}
        <div id="technologies" className="pt-8 border-t border-zinc-800/80 space-y-4">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="font-medium text-zinc-300 text-xs sm:text-sm">Technologies & Core Tools</span>
            <span className="text-zinc-500 text-[11px]">Languages • Frameworks • Cloud & DevOps</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-7 gap-3">
            {techStack.map((tech) => {
              const isFailed = failedLogos[tech.id];
              const logoUrl = getTechLogoUrl(tech.name, tech.logoUrl);
              const brandColor = getTechBrandColor(tech.name, tech.color);

              return (
                <div
                  key={tech.id}
                  id={`tech-logo-badge-${tech.id}`}
                  className="group flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/90 border border-zinc-800/80 hover:border-zinc-700 transition-all text-center shadow-sm"
                  title={`${tech.name}${tech.category ? ` (${tech.category})` : ''}`}
                >
                  <div className="w-7 h-7 flex items-center justify-center mb-1.5 transition-transform group-hover:scale-110">
                    {!isFailed ? (
                      <img
                        src={logoUrl}
                        alt={tech.name}
                        referrerPolicy="no-referrer"
                        className="w-6 h-6 object-contain filter drop-shadow-sm"
                        onError={() => handleImageError(tech.id)}
                      />
                    ) : (
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ backgroundColor: brandColor }}
                      >
                        {tech.name.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] font-medium text-zinc-300 group-hover:text-white truncate w-full">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
