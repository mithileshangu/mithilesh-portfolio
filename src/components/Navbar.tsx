import React, { useState, useRef } from 'react';
import {
  Github,
  Linkedin,
  Menu,
  X,
  FileDown,
  Shield,
  Briefcase,
} from 'lucide-react';
import { DeveloperProfile } from '../types';

interface NavbarProps {
  profile: DeveloperProfile;
  onOpenResume: () => void;
  onOpenAdminPortal: () => void;
  activeSection: string;
  showTechnicalCompetencies?: boolean;
  showAdminButton?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenResume,
  onOpenAdminPortal,
  activeSection,
  showTechnicalCompetencies = false,
  showAdminButton = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Secret Triple-Click on Avatar to open Admin Portal (for invisible admin access)
  const handleSecretAvatarClick = (e: React.MouseEvent) => {
    clickCountRef.current += 1;
    if (clickCountRef.current >= 3) {
      e.preventDefault();
      clickCountRef.current = 0;
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
        clickTimerRef.current = null;
      }
      onOpenAdminPortal();
      return;
    }

    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
      clickTimerRef.current = null;
    }, 1000);
  };

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Technologies', href: '#technologies' },
    ...(showTechnicalCompetencies ? [{ label: 'Competencies', href: '#expertise' }] : []),
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090A0F]/85 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a
          id="nav-brand-logo"
          href="#"
          onClick={handleSecretAvatarClick}
          className="flex items-center gap-3 group focus:outline-none select-none"
          title="Mithilesh Angu (Secret: Triple-click avatar to open Admin Portal)"
        >
          {profile.avatarUrl ? (
            <div className="relative">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-full object-cover border border-zinc-700/80 group-hover:border-indigo-400 transition-colors"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#090A0F]" />
            </div>
          ) : (
            <div className="w-9 h-9 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-sm font-semibold text-zinc-100 group-hover:border-indigo-400 transition-colors">
              {profile.name.charAt(0)}
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                {profile.name}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 animate-pulse" />
                Available
              </span>
            </div>
            <p className="text-xs text-zinc-400 hidden sm:block">
              {profile.title}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-zinc-800/60">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                activeSection === link.href.replace('#', '')
                  ? 'text-white bg-zinc-800 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Resume Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-zinc-400" />
            <span>Resume</span>
          </button>

          {/* Optional Admin Portal Trigger (Hidden by default for clean hosting) */}
          {showAdminButton && (
            <button
              id="nav-admin-portal-btn"
              onClick={onOpenAdminPortal}
              title="Open Admin Portal (Secret: or use #admin or Ctrl+Shift+A)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 hover:border-indigo-500/50 transition-all cursor-pointer shadow-sm"
            >
              <Shield className="w-3.5 h-3.5 text-indigo-400" />
              <span>Admin</span>
            </button>
          )}

          {/* Direct GitHub Profile Link */}
          <a
            id="nav-github-link"
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
            title="Visit GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Mobile menu toggle */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-100 md:hidden transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-t border-zinc-800 bg-[#090A0F]/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-1.5"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-xs font-medium rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>
            {showAdminButton && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdminPortal();
                }}
                className="flex-1 py-2 text-xs font-medium rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                <span>Admin Portal</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
