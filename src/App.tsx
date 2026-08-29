import React, { useState, useEffect } from 'react';
import {
  DeveloperProfile,
  Project,
  SkillCategory,
  ExperienceItem,
  TechItem,
  PortfolioSettings,
} from './types';
import {
  initialProfile,
  initialProjects,
  initialTechStack,
  initialSkillCategories,
  initialExperience,
  initialPortfolioSettings,
} from './data/defaultData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { TechnicalExpertise } from './components/TechnicalExpertise';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { Footer } from './components/Footer';

const STORAGE_PROFILE_KEY = 'portfolio_developer_profile';
const STORAGE_PROJECTS_KEY = 'portfolio_developer_projects';
const STORAGE_TECH_STACK_KEY = 'portfolio_tech_stack';
const STORAGE_SKILLS_KEY = 'portfolio_developer_skills';
const STORAGE_EXPERIENCE_KEY = 'portfolio_developer_experience';
const STORAGE_SETTINGS_KEY = 'portfolio_developer_settings';

export default function App() {
  // Load saved profile
  const [profile, setProfile] = useState<DeveloperProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PROFILE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialProfile;
  });

  // Load saved projects
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PROJECTS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialProjects;
  });

  // Load saved tech stack
  const [techStack, setTechStack] = useState<TechItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_TECH_STACK_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialTechStack;
  });

  // Load saved skill categories
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SKILLS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialSkillCategories;
  });

  // Load saved experience
  const [experience, setExperience] = useState<ExperienceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_EXPERIENCE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialExperience;
  });

  // Load saved portfolio settings
  const [portfolioSettings, setPortfolioSettings] = useState<PortfolioSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SETTINGS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialPortfolioSettings;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  // Secret URL Routing & Keyboard Shortcut Listeners for Admin Access
  useEffect(() => {
    const checkAdminRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      const pathname = window.location.pathname.toLowerCase();

      if (
        hash === '#admin' ||
        hash.startsWith('#admin') ||
        hash.startsWith('#/admin') ||
        search.includes('admin=true') ||
        search.includes('admin') ||
        pathname.endsWith('/admin')
      ) {
        setIsAdminPortalOpen(true);
      }
    };

    // Check on initial load
    checkAdminRoute();

    // Listen for hash & popstate changes
    window.addEventListener('hashchange', checkAdminRoute);
    window.addEventListener('popstate', checkAdminRoute);

    // Global keyboard shortcut: Ctrl + Shift + A (or Cmd + Shift + A)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminPortalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkAdminRoute);
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCloseAdminPortal = () => {
    setIsAdminPortalOpen(false);
    // Clean URL hash if it contains admin without refreshing page
    if (window.location.hash.toLowerCase().includes('admin')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  // Persistence handlers
  const handleSaveProfile = (updated: DeveloperProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_PROFILE_KEY, JSON.stringify(updated));
    } catch {}
  };

  const handleSaveProjects = (updated: Project[]) => {
    setProjects(updated);
    try {
      localStorage.setItem(STORAGE_PROJECTS_KEY, JSON.stringify(updated));
    } catch {}
  };

  const handleSaveTechStack = (updated: TechItem[]) => {
    setTechStack(updated);
    try {
      localStorage.setItem(STORAGE_TECH_STACK_KEY, JSON.stringify(updated));
    } catch {}
  };

  const handleSaveSkillCategories = (updated: SkillCategory[]) => {
    setSkillCategories(updated);
    try {
      localStorage.setItem(STORAGE_SKILLS_KEY, JSON.stringify(updated));
    } catch {}
  };

  const handleSaveExperience = (updated: ExperienceItem[]) => {
    setExperience(updated);
    try {
      localStorage.setItem(STORAGE_EXPERIENCE_KEY, JSON.stringify(updated));
    } catch {}
  };

  const handleSavePortfolioSettings = (updated: PortfolioSettings) => {
    setPortfolioSettings(updated);
    try {
      localStorage.setItem(STORAGE_SETTINGS_KEY, JSON.stringify(updated));
    } catch {}
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-zinc-100 selection:bg-indigo-500/30 selection:text-white flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAdminPortal={() => setIsAdminPortalOpen(true)}
        activeSection={activeSection}
        showTechnicalCompetencies={portfolioSettings.showTechnicalCompetencies}
        showAdminButton={portfolioSettings.showAdminButtonInNav}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero & Profile + Section 2: Technologies Logo Strip */}
        <Hero
          profile={profile}
          techStack={techStack}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section 3: Featured Projects Grid (Clean 4 to 5 projects layout) */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Section 4: Technical Competencies (Conditionally displayed based on Admin Toggle) */}
        {portfolioSettings.showTechnicalCompetencies && (
          <TechnicalExpertise
            categories={skillCategories}
            onSelectSkillFilter={() => {}}
          />
        )}

        {/* Section 6: Work Experience Timeline */}
        {portfolioSettings.showExperience && (
          <ExperienceSection experience={experience} />
        )}

        {/* Contact & Inquiry Section */}
        <ContactSection
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer with subtle Admin Portal access if enabled */}
      <Footer
        profile={profile}
        onOpenAdminPortal={() => setIsAdminPortalOpen(true)}
        showTechnicalCompetencies={portfolioSettings.showTechnicalCompetencies}
        showAdminButton={portfolioSettings.showAdminButtonInNav}
      />

      {/* Project Architecture & GitHub Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Developer Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        projects={projects}
        experience={experience}
        skillCategories={skillCategories}
      />

      {/* Central Admin Portal Modal */}
      <AdminPortalModal
        isOpen={isAdminPortalOpen}
        onClose={handleCloseAdminPortal}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        projects={projects}
        onSaveProjects={handleSaveProjects}
        techStack={techStack}
        onSaveTechStack={handleSaveTechStack}
        skillCategories={skillCategories}
        onSaveSkillCategories={handleSaveSkillCategories}
        experience={experience}
        onSaveExperience={handleSaveExperience}
        portfolioSettings={portfolioSettings}
        onSavePortfolioSettings={handleSavePortfolioSettings}
      />
    </div>
  );
}
