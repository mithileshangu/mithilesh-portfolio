import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Shield } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface FooterProps {
  profile: DeveloperProfile;
  onOpenAdminPortal?: () => void;
  showTechnicalCompetencies?: boolean;
  showAdminButton?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onOpenAdminPortal,
  showTechnicalCompetencies = false,
  showAdminButton = false,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080C] border-t border-zinc-800/80 text-zinc-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-white">
                {profile.name.charAt(0)}
              </div>
              <span className="font-semibold text-white text-sm">
                {profile.name}
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm text-xs leading-relaxed">
              Software developer specializing in scalable distributed architectures, clean APIs, and modern web applications.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#technologies" className="hover:text-white transition-colors">
              Technologies
            </a>
            {showTechnicalCompetencies && (
              <a href="#expertise" className="hover:text-white transition-colors">
                Competencies
              </a>
            )}
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            {showAdminButton && onOpenAdminPortal && (
              <button
                onClick={onOpenAdminPortal}
                className="hover:text-indigo-400 text-zinc-500 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Shield className="w-3 h-3" />
                <span>Admin Portal</span>
              </button>
            )}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 text-zinc-400 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 text-zinc-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 hover:text-white border border-zinc-800 text-zinc-400 transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Open for new engineering opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
