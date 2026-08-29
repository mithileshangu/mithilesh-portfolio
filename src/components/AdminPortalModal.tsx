import React, { useState } from 'react';
import {
  X,
  Lock,
  User,
  FolderGit2,
  Cpu,
  Layers,
  Briefcase,
  BookOpen,
  Plus,
  Trash2,
  Edit2,
  Check,
  ExternalLink,
  Github,
  Image as ImageIcon,
  Sparkles,
  Sliders,
  Download,
  Upload,
  RefreshCw,
  Eye,
  EyeOff,
  ToggleLeft,
  ToggleRight,
  ChevronRight,
  Shield,
  Code,
  Copy,
  FileCode,
  Key,
  Globe,
  HelpCircle,
} from 'lucide-react';
import {
  DeveloperProfile,
  Project,
  TechItem,
  SkillCategory,
  ExperienceItem,
  PortfolioSettings,
} from '../types';
import { getTechLogoUrl, getTechBrandColor, KNOWN_TECH_MAP } from '../utils/techLogos';
import { generateDefaultDataTsCode } from '../utils/exportCodeGenerator';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DeveloperProfile;
  onSaveProfile: (profile: DeveloperProfile) => void;
  projects: Project[];
  onSaveProjects: (projects: Project[]) => void;
  techStack: TechItem[];
  onSaveTechStack: (techStack: TechItem[]) => void;
  skillCategories: SkillCategory[];
  onSaveSkillCategories: (categories: SkillCategory[]) => void;
  experience: ExperienceItem[];
  onSaveExperience: (experience: ExperienceItem[]) => void;
  portfolioSettings: PortfolioSettings;
  onSavePortfolioSettings: (settings: PortfolioSettings) => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  projects,
  onSaveProjects,
  techStack,
  onSaveTechStack,
  skillCategories,
  onSaveSkillCategories,
  experience,
  onSaveExperience,
  portfolioSettings,
  onSavePortfolioSettings,
}) => {
  const [activeTab, setActiveTab] = useState<
    'projects' | 'tech' | 'experience' | 'profile' | 'competencies' | 'hosting' | 'readme'
  >('projects');

  // Code generator and backup states
  const [copiedCode, setCopiedCode] = useState(false);
  const [importStatus, setImportStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Profile Form State
  const [profileForm, setProfileForm] = useState<DeveloperProfile>({ ...profile });
  const [profileSuccessMsg, setProfileSuccessMsg] = useState(false);

  // Tech Stack Form State
  const [newTechName, setNewTechName] = useState('');
  const [newTechCategory, setNewTechCategory] = useState('Language');
  const [newTechCustomLogo, setNewTechCustomLogo] = useState('');
  const [newTechColor, setNewTechColor] = useState('');

  // Experience Form State
  const [editingExpId, setEditingExpId] = useState<string | null>(null);
  const [expRole, setExpRole] = useState('');
  const [expCompany, setExpCompany] = useState('');
  const [expLocation, setExpLocation] = useState('');
  const [expPeriod, setExpPeriod] = useState('');
  const [expType, setExpType] = useState<ExperienceItem['type']>('Full-time');
  const [expHighlights, setExpHighlights] = useState('');
  const [expTech, setExpTech] = useState('');
  const [expLogoUrl, setExpLogoUrl] = useState('');

  // Project Form State
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projTitle, setProjTitle] = useState('');
  const [projTagline, setProjTagline] = useState('');
  const [projCategory, setProjCategory] = useState('Full Stack');
  const [projDescription, setProjDescription] = useState('');
  const [projTech, setProjTech] = useState('');
  const [projImageUrl, setProjImageUrl] = useState('');
  const [projDemoUrl, setProjDemoUrl] = useState('');
  const [projRepoUrl, setProjRepoUrl] = useState('');
  const [projRepoName, setProjRepoName] = useState('');
  const [projRepoOwner, setProjRepoOwner] = useState('');
  const [projFeatured, setProjFeatured] = useState(true);
  const [projFeature1, setProjFeature1] = useState('');
  const [projFeature2, setProjFeature2] = useState('');
  const [githubFetchLoading, setGithubFetchLoading] = useState(false);
  const [githubFetchError, setGithubFetchError] = useState('');

  if (!isOpen) return null;

  // Handlers for Profile
  const handleSaveProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(profileForm);
    setProfileSuccessMsg(true);
    setTimeout(() => setProfileSuccessMsg(false), 2500);
  };

  // Handlers for Technologies
  const handleAddTech = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTechName.trim()) return;

    const newId = `tech-${Date.now()}`;
    const newItem: TechItem = {
      id: newId,
      name: newTechName.trim(),
      category: newTechCategory,
      color: newTechColor.trim() || undefined,
      logoUrl: newTechCustomLogo.trim() || undefined,
    };

    onSaveTechStack([...techStack, newItem]);
    setNewTechName('');
    setNewTechCustomLogo('');
    setNewTechColor('');
  };

  const handleDeleteTech = (id: string) => {
    onSaveTechStack(techStack.filter((t) => t.id !== id));
  };

  // Handlers for Experience
  const handleSaveExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expRole.trim() || !expCompany.trim()) return;

    const highlightsArr = expHighlights
      .split('\n')
      .map((h) => h.trim())
      .filter((h) => h.length > 0);

    const techArr = expTech
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    if (editingExpId) {
      // Edit existing
      const updated = experience.map((item) =>
        item.id === editingExpId
          ? {
              ...item,
              role: expRole.trim(),
              company: expCompany.trim(),
              location: expLocation.trim() || 'Remote',
              period: expPeriod.trim() || 'Present',
              type: expType,
              highlights: highlightsArr.length > 0 ? highlightsArr : ['Contributed to key products'],
              technologies: techArr.length > 0 ? techArr : ['Software Engineering'],
              logoUrl: expLogoUrl.trim() || undefined,
            }
          : item
      );
      onSaveExperience(updated);
      setEditingExpId(null);
    } else {
      // Add new
      const newItem: ExperienceItem = {
        id: `exp-${Date.now()}`,
        role: expRole.trim(),
        company: expCompany.trim(),
        location: expLocation.trim() || 'Remote',
        period: expPeriod.trim() || 'Present',
        type: expType,
        highlights: highlightsArr.length > 0 ? highlightsArr : ['Contributed to key products'],
        technologies: techArr.length > 0 ? techArr : ['Software Engineering'],
        logoUrl: expLogoUrl.trim() || undefined,
      };
      onSaveExperience([...experience, newItem]);
    }

    // Reset form
    setExpRole('');
    setExpCompany('');
    setExpLocation('');
    setExpPeriod('');
    setExpHighlights('');
    setExpTech('');
    setExpLogoUrl('');
  };

  const startEditExperience = (item: ExperienceItem) => {
    setEditingExpId(item.id);
    setExpRole(item.role);
    setExpCompany(item.company);
    setExpLocation(item.location);
    setExpPeriod(item.period);
    setExpType(item.type);
    setExpHighlights(item.highlights.join('\n'));
    setExpTech(item.technologies.join(', '));
    setExpLogoUrl(item.logoUrl || '');
  };

  const handleDeleteExperience = (id: string) => {
    onSaveExperience(experience.filter((item) => item.id !== id));
    if (editingExpId === id) setEditingExpId(null);
  };

  // Handlers for Projects
  const resetProjectForm = () => {
    setEditingProjectId(null);
    setProjTitle('');
    setProjTagline('');
    setProjCategory('Full Stack');
    setProjDescription('');
    setProjTech('');
    setProjImageUrl('');
    setProjDemoUrl('');
    setProjRepoUrl('');
    setProjRepoName('');
    setProjRepoOwner('');
    setProjFeatured(true);
    setProjFeature1('');
    setProjFeature2('');
    setGithubFetchError('');
  };

  const startEditProject = (proj: Project) => {
    setEditingProjectId(proj.id);
    setProjTitle(proj.title);
    setProjTagline(proj.tagline);
    setProjCategory(proj.category);
    setProjDescription(proj.description);
    setProjTech(proj.technologies.join(', '));
    setProjImageUrl(proj.imageUrl || '');
    setProjDemoUrl(proj.demoUrl || '');
    setProjRepoUrl(proj.githubAttachment?.repoUrl || '');
    setProjRepoName(proj.githubAttachment?.repoName || '');
    setProjRepoOwner(proj.githubAttachment?.repoOwner || '');
    setProjFeatured(proj.featured);
    setProjFeature1(proj.keyFeatures?.[0] || '');
    setProjFeature2(proj.keyFeatures?.[1] || '');
  };

  const handleFetchGithubDetails = async () => {
    if (!projRepoUrl.trim()) return;
    setGithubFetchLoading(true);
    setGithubFetchError('');

    try {
      let owner = '';
      let repo = '';
      const cleanUrl = projRepoUrl.trim().replace(/\/$/, '');

      if (cleanUrl.includes('github.com')) {
        const parts = cleanUrl.split('github.com/')[1]?.split('/');
        if (parts && parts.length >= 2) {
          owner = parts[0];
          repo = parts[1];
        }
      } else if (cleanUrl.includes('/')) {
        const parts = cleanUrl.split('/');
        owner = parts[0];
        repo = parts[1];
      }

      if (!owner || !repo) {
        throw new Error('Please enter a valid GitHub URL or owner/repo format (e.g. mithileshangu/EduNavigator)');
      }

      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      if (!res.ok) {
        throw new Error(`Repository not found (${res.status})`);
      }
      const data = await res.json();

      if (!projTitle) setProjTitle(data.name || repo);
      if (!projTagline) setProjTagline(data.description || 'Educational & Software Engineering Platform');
      if (!projDescription) setProjDescription(data.description || '');
      setProjRepoOwner(data.owner?.login || owner);
      setProjRepoName(data.name || repo);
      setProjRepoUrl(data.html_url || `https://github.com/${owner}/${repo}`);
      if (data.language && !projTech.includes(data.language)) {
        setProjTech((prev) => (prev ? `${prev}, ${data.language}` : data.language));
      }
    } catch (err: any) {
      setGithubFetchError(err.message || 'Could not fetch repository info');
    } finally {
      setGithubFetchLoading(false);
    }
  };

  const handleSaveProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projTitle.trim()) return;

    const techArray = projTech
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const featuresArray = [projFeature1.trim(), projFeature2.trim()].filter((f) => f.length > 0);

    const githubAttachment = {
      repoName: projRepoName.trim() || projTitle.trim().toLowerCase().replace(/\s+/g, '-'),
      repoOwner: projRepoOwner.trim() || profile.githubUsername || 'mithileshangu',
      repoUrl:
        projRepoUrl.trim() ||
        `https://github.com/${profile.githubUsername || 'mithileshangu'}/${projTitle.trim().toLowerCase().replace(/\s+/g, '-')}`,
      stars: 1,
      forks: 0,
      primaryLanguage: techArray[0] || 'TypeScript',
      languageColor: getTechBrandColor(techArray[0] || 'TypeScript'),
      defaultBranch: 'main',
      lastCommitDate: 'Recently',
    };

    if (editingProjectId) {
      const updated = projects.map((p) =>
        p.id === editingProjectId
          ? {
              ...p,
              title: projTitle.trim(),
              tagline: projTagline.trim() || 'Software platform',
              category: projCategory,
              description: projDescription.trim() || 'Modern software application',
              technologies: techArray.length > 0 ? techArray : ['TypeScript', 'Full Stack'],
              imageUrl: projImageUrl.trim() || undefined,
              demoUrl: projDemoUrl.trim() || undefined,
              featured: projFeatured,
              keyFeatures: featuresArray.length > 0 ? featuresArray : undefined,
              githubAttachment: {
                ...p.githubAttachment,
                ...githubAttachment,
              },
            }
          : p
      );
      onSaveProjects(updated);
    } else {
      const newProj: Project = {
        id: `proj-${Date.now()}`,
        title: projTitle.trim(),
        tagline: projTagline.trim() || 'Software platform',
        category: projCategory,
        description: projDescription.trim() || 'Modern software application',
        technologies: techArray.length > 0 ? techArray : ['TypeScript', 'Full Stack'],
        imageUrl: projImageUrl.trim() || undefined,
        demoUrl: projDemoUrl.trim() || undefined,
        featured: projFeatured,
        keyFeatures: featuresArray.length > 0 ? featuresArray : undefined,
        githubAttachment,
      };
      onSaveProjects([newProj, ...projects]);
    }

    resetProjectForm();
  };

  const handleDeleteProject = (id: string) => {
    onSaveProjects(projects.filter((p) => p.id !== id));
    if (editingProjectId === id) resetProjectForm();
  };

  // Export JSON backup
  const handleExportBackup = () => {
    const backupData = {
      profile,
      projects,
      techStack,
      skillCategories,
      experience,
      portfolioSettings,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-data-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // 1-Click Copy generated defaultData.ts code
  const handleCopyDefaultDataCode = async () => {
    try {
      const code = generateDefaultDataTsCode({
        profile,
        projects,
        techStack,
        skillCategories,
        experience,
        portfolioSettings,
      });
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch (err) {
      console.error('Failed to copy code', err);
    }
  };

  // 1-Click Download defaultData.ts file directly
  const handleDownloadDefaultDataFile = () => {
    const code = generateDefaultDataTsCode({
      profile,
      projects,
      techStack,
      skillCategories,
      experience,
      portfolioSettings,
    });
    const blob = new Blob([code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'defaultData.ts';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import JSON backup
  const handleImportBackupJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);

        if (parsed.profile) onSaveProfile(parsed.profile);
        if (parsed.projects) onSaveProjects(parsed.projects);
        if (parsed.techStack) onSaveTechStack(parsed.techStack);
        if (parsed.skillCategories) onSaveSkillCategories(parsed.skillCategories);
        if (parsed.experience) onSaveExperience(parsed.experience);
        if (parsed.portfolioSettings) onSavePortfolioSettings(parsed.portfolioSettings);

        setImportStatus({ type: 'success', message: 'Backup successfully restored!' });
        setTimeout(() => setImportStatus(null), 3000);
      } catch (err) {
        setImportStatus({ type: 'error', message: 'Invalid JSON backup file.' });
        setTimeout(() => setImportStatus(null), 4000);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Portfolio Admin Portal
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                  Private Management
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Manage your projects, tech logos, career history, and portfolio visibility.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close admin portal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 px-6 pt-3 pb-2 border-b border-zinc-800/80 bg-zinc-900/40 overflow-x-auto no-scrollbar">
          {[
            { id: 'projects', label: 'Projects', icon: FolderGit2, count: projects.length },
            { id: 'tech', label: 'Tech Stack & Logos', icon: Cpu, count: techStack.length },
            { id: 'experience', label: 'Work Experience', icon: Briefcase, count: experience.length },
            { id: 'profile', label: 'Profile Info', icon: User },
            { id: 'competencies', label: 'Technical Competencies', icon: Layers },
            { id: 'hosting', label: 'Static Hosting & Code Export', icon: Code },
            { id: 'readme', label: 'Architecture & Guide', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {typeof tab.count === 'number' && (
                  <span
                    className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono ${
                      isActive ? 'bg-zinc-300 text-zinc-950' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              {/* Add / Edit Project Form */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>{editingProjectId ? 'Edit Project' : 'Add New Project'}</span>
                  </h4>
                  {editingProjectId && (
                    <button
                      type="button"
                      onClick={resetProjectForm}
                      className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

                {/* Quick GitHub Auto-Fill */}
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-2">
                  <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Quick GitHub Auto-Fetch (e.g. mithileshangu/EduNavigator)</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Paste repo URL or owner/repo..."
                      value={projRepoUrl}
                      onChange={(e) => setProjRepoUrl(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 font-mono"
                    />
                    <button
                      type="button"
                      onClick={handleFetchGithubDetails}
                      disabled={githubFetchLoading || !projRepoUrl.trim()}
                      className="px-3.5 py-2 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 disabled:opacity-50 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                    >
                      {githubFetchLoading ? (
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Download className="w-3.5 h-3.5" />
                      )}
                      <span>Auto-Fill Info</span>
                    </button>
                  </div>
                  {githubFetchError && (
                    <p className="text-[11px] text-red-400">{githubFetchError}</p>
                  )}
                </div>

                <form onSubmit={handleSaveProjectSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Project Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. EduNavigator"
                        value={projTitle}
                        onChange={(e) => setProjTitle(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Category</label>
                      <select
                        value={projCategory}
                        onChange={(e) => setProjCategory(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Full Stack">Full Stack</option>
                        <option value="Backend & Cloud">Backend & Cloud</option>
                        <option value="AI & Data">AI & Data</option>
                        <option value="DevOps & Tools">DevOps & Tools</option>
                        <option value="Open Source">Open Source</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Tagline / Short Subtitle</label>
                      <input
                        type="text"
                        placeholder="e.g. Educational Guidance & Mentorship Platform"
                        value={projTagline}
                        onChange={(e) => setProjTagline(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Full Description</label>
                      <textarea
                        rows={3}
                        placeholder="Explain the problem solved, architecture design, and core user benefits..."
                        value={projDescription}
                        onChange={(e) => setProjDescription(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Technologies (comma separated)</label>
                      <input
                        type="text"
                        placeholder="Python, Flask, JavaScript, HTML5, CSS3, REST API"
                        value={projTech}
                        onChange={(e) => setProjTech(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Live Demo URL (Optional)</label>
                      <input
                        type="url"
                        placeholder="https://..."
                        value={projDemoUrl}
                        onChange={(e) => setProjDemoUrl(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 font-mono"
                      />
                    </div>

                    {/* Thumbnail URL Input */}
                    <div className="sm:col-span-2 space-y-2 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Project Thumbnail / Screenshot Image URL (Optional)</span>
                        </label>
                        {projImageUrl && (
                          <button
                            type="button"
                            onClick={() => setProjImageUrl('')}
                            className="text-[11px] text-zinc-400 hover:text-red-400 transition-colors"
                          >
                            Remove Image
                          </button>
                        )}
                      </div>
                      <input
                        type="url"
                        placeholder="Paste direct image URL (e.g. Imgur, Cloudinary, GitHub raw asset, or screenshot link)"
                        value={projImageUrl}
                        onChange={(e) => setProjImageUrl(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 font-mono"
                      />
                      {projImageUrl && (
                        <div className="mt-2 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 max-h-32 flex items-center justify-center">
                          <img
                            src={projImageUrl}
                            alt="Preview"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover max-h-32"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Key Feature 1 (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Interactive Career Quiz with instant scoring"
                        value={projFeature1}
                        onChange={(e) => setProjFeature1(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Key Feature 2 (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. College Matcher and Mentorship Hub directory"
                        value={projFeature2}
                        onChange={(e) => setProjFeature2(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <label className="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={projFeatured}
                        onChange={(e) => setProjFeatured(e.target.checked)}
                        className="rounded bg-zinc-900 border-zinc-700 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span>Mark as Featured Project</span>
                    </label>

                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{editingProjectId ? 'Update Project' : 'Add Project to Portfolio'}</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Current Projects List */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                  Current Portfolio Projects ({projects.length})
                </h4>

                <div className="space-y-2.5">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-between gap-4 hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {proj.imageUrl ? (
                          <img
                            src={proj.imageUrl}
                            alt={proj.title}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded-lg object-cover border border-zinc-800 shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 font-bold shrink-0 text-sm">
                            {proj.title.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h5 className="text-sm font-bold text-white truncate">{proj.title}</h5>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
                              {proj.category}
                            </span>
                            {proj.featured && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-400 truncate mt-0.5">{proj.tagline}</p>
                          <div className="text-[11px] text-zinc-500 font-mono mt-0.5 truncate">
                            Stack: {proj.technologies.slice(0, 4).join(', ')}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => startEditProject(proj)}
                          className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                          title="Edit Project"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj.id)}
                          className="p-2 rounded-lg bg-zinc-800 hover:bg-red-900/40 text-zinc-400 hover:text-red-400 transition-colors cursor-pointer"
                          title="Delete Project"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TECH STACK & LOGOS */}
          {activeTab === 'tech' && (
            <div className="space-y-8">
              {/* Add New Tech Form */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-indigo-400" />
                  <span>Add Technology or Tool to Section 2</span>
                </h4>
                <p className="text-xs text-zinc-400">
                  Enter any technology (e.g. <em>Flask, Python, React, Docker, Kubernetes, AWS, PostgreSQL, Go, Tailwind CSS</em>). Official SVG logos are automatically loaded with fallback color badges.
                </p>

                <form onSubmit={handleAddTech} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                  <div className="sm:col-span-4 space-y-1">
                    <label className="text-xs font-medium text-zinc-300">Tech Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Flask"
                      value={newTechName}
                      onChange={(e) => setNewTechName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="sm:col-span-3 space-y-1">
                    <label className="text-xs font-medium text-zinc-300">Category</label>
                    <select
                      value={newTechCategory}
                      onChange={(e) => setNewTechCategory(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Language">Language</option>
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Framework">Framework</option>
                      <option value="Database">Database</option>
                      <option value="DevOps">DevOps</option>
                      <option value="Cloud">Cloud</option>
                      <option value="Tool">Tool</option>
                    </select>
                  </div>

                  <div className="sm:col-span-3 space-y-1">
                    <label className="text-xs font-medium text-zinc-300">Custom Logo URL (Optional)</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={newTechCustomLogo}
                      onChange={(e) => setNewTechCustomLogo(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 font-mono"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Tech</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Current Tech Stack Grid */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                    Live Technologies Grid ({techStack.length})
                  </h4>
                  <span className="text-xs text-zinc-500">Rendered in Section 2 on the portfolio</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {techStack.map((tech) => {
                    const logoUrl = getTechLogoUrl(tech.name, tech.logoUrl);
                    const brandColor = getTechBrandColor(tech.name, tech.color);

                    return (
                      <div
                        key={tech.id}
                        className="relative group p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col items-center justify-center text-center space-y-2 hover:border-zinc-700 transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => handleDeleteTech(tech.id)}
                          className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 p-1 rounded bg-zinc-800 hover:bg-red-900/60 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer"
                          title="Remove tech"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>

                        <div className="w-8 h-8 flex items-center justify-center">
                          <img
                            src={logoUrl}
                            alt={tech.name}
                            referrerPolicy="no-referrer"
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white truncate w-full">{tech.name}</div>
                          {tech.category && (
                            <div className="text-[10px] text-zinc-500">{tech.category}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WORK EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {/* Add / Edit Experience Form */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                    <span>{editingExpId ? 'Edit Work Experience' : 'Add Work Experience'}</span>
                  </h4>
                  {editingExpId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingExpId(null);
                        setExpRole('');
                        setExpCompany('');
                        setExpLocation('');
                        setExpPeriod('');
                        setExpHighlights('');
                        setExpTech('');
                        setExpLogoUrl('');
                      }}
                      className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

                <form onSubmit={handleSaveExperience} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Job Title / Role *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Software Development Engineer"
                        value={expRole}
                        onChange={(e) => setExpRole(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tech Innovations Corp"
                        value={expCompany}
                        onChange={(e) => setExpCompany(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Location</label>
                      <input
                        type="text"
                        placeholder="e.g. Bangalore / Remote"
                        value={expLocation}
                        onChange={(e) => setExpLocation(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Period / Dates</label>
                      <input
                        type="text"
                        placeholder="e.g. 2023 - Present"
                        value={expPeriod}
                        onChange={(e) => setExpPeriod(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Employment Type</label>
                      <select
                        value={expType}
                        onChange={(e) => setExpType(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Open Source">Open Source</option>
                        <option value="Education">Education</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Technologies (comma separated)</label>
                      <input
                        type="text"
                        placeholder="Python, React, TypeScript, Docker"
                        value={expTech}
                        onChange={(e) => setExpTech(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 font-mono"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-medium text-zinc-300">
                        Key Achievements & Highlights (1 bullet point per line)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="• Designed scalable web application serving 100k users&#10;• Reduced latency by 35% through query optimization&#10;• Automated testing workflows with CI/CD"
                        value={expHighlights}
                        onChange={(e) => setExpHighlights(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{editingExpId ? 'Save Experience Changes' : 'Add Experience to Portfolio'}</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Current Experience Items List */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                  Career Timeline Items ({experience.length})
                </h4>

                <div className="space-y-3">
                  {experience.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start justify-between gap-4 hover:border-zinc-700 transition-colors"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h5 className="text-sm font-bold text-white">{item.role}</h5>
                          <span className="text-xs font-semibold text-indigo-400">@ {item.company}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                            {item.period}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-500">
                            {item.location}
                          </span>
                        </div>

                        <div className="space-y-1 text-xs text-zinc-300">
                          {item.highlights.map((hl, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <span className="text-indigo-400 mt-0.5">•</span>
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1 pt-1">
                          {item.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-[10px] rounded bg-zinc-800 text-zinc-400 font-mono"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => startEditExperience(item)}
                          className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                          title="Edit experience"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteExperience(item.id)}
                          className="p-2 rounded-lg bg-zinc-800 hover:bg-red-900/40 text-zinc-400 hover:text-red-400 transition-colors cursor-pointer"
                          title="Delete experience"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PROFILE INFO */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <form onSubmit={handleSaveProfileSubmit} className="space-y-5">
                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                  <h4 className="text-sm font-semibold text-white">Personal & Header Information</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Full Name</label>
                      <input
                        type="text"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Professional Title</label>
                      <input
                        type="text"
                        value={profileForm.title}
                        onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Location</label>
                      <input
                        type="text"
                        value={profileForm.location}
                        onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Availability Status</label>
                      <input
                        type="text"
                        value={profileForm.availability}
                        onChange={(e) =>
                          setProfileForm({ ...profileForm, availability: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Subtitle Quote / Mission</label>
                      <input
                        type="text"
                        value={profileForm.subTitle}
                        onChange={(e) => setProfileForm({ ...profileForm, subTitle: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Bio Summary</label>
                      <textarea
                        rows={3}
                        value={profileForm.bio}
                        onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                  <h4 className="text-sm font-semibold text-white">Social & Contact Links</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Email Address</label>
                      <input
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white font-mono focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">GitHub Profile URL</label>
                      <input
                        type="url"
                        value={profileForm.githubUrl}
                        onChange={(e) => setProfileForm({ ...profileForm, githubUrl: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white font-mono focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">GitHub Username</label>
                      <input
                        type="text"
                        value={profileForm.githubUsername}
                        onChange={(e) =>
                          setProfileForm({ ...profileForm, githubUsername: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white font-mono focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">LinkedIn Profile URL</label>
                      <input
                        type="url"
                        value={profileForm.linkedinUrl}
                        onChange={(e) =>
                          setProfileForm({ ...profileForm, linkedinUrl: e.target.value })
                        }
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white font-mono focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Years of Experience</label>
                      <input
                        type="number"
                        value={profileForm.yearsOfExperience}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            yearsOfExperience: parseInt(e.target.value) || 0,
                          })
                        }
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-zinc-300">Total Projects Count</label>
                      <input
                        type="number"
                        value={profileForm.stats.totalProjects}
                        onChange={(e) =>
                          setProfileForm({
                            ...profileForm,
                            stats: {
                              ...profileForm.stats,
                              totalProjects: parseInt(e.target.value) || 0,
                            },
                          })
                        }
                        className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  {profileSuccessMsg ? (
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                      <Check className="w-4 h-4" />
                      Profile details saved successfully!
                    </span>
                  ) : (
                    <span />
                  )}

                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Save Profile Changes</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 5: TECHNICAL COMPETENCIES (With requested Toggle Switch) */}
          {activeTab === 'competencies' && (
            <div className="space-y-6">
              {/* Section Visibility Toggle */}
              <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    <h4 className="text-sm font-bold text-white">
                      Show Technical Competencies Section on Portfolio
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Currently <strong>{portfolioSettings.showTechnicalCompetencies ? 'ENABLED (Visible)' : 'DISABLED (Hidden)'}</strong>. You can toggle this on whenever you want to display the detailed competencies matrix.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onSavePortfolioSettings({
                      ...portfolioSettings,
                      showTechnicalCompetencies: !portfolioSettings.showTechnicalCompetencies,
                    })
                  }
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    portfolioSettings.showTechnicalCompetencies
                      ? 'bg-emerald-500 text-zinc-950 shadow-md'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {portfolioSettings.showTechnicalCompetencies ? (
                    <>
                      <ToggleRight className="w-4 h-4 text-zinc-950" />
                      <span>Section is Visible</span>
                    </>
                  ) : (
                    <>
                      <ToggleLeft className="w-4 h-4 text-zinc-400" />
                      <span>Section is Hidden</span>
                    </>
                  )}
                </button>
              </div>

              {/* Skills Matrix Preview */}
              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                    Saved Competencies Categories ({skillCategories.length})
                  </h4>
                  <span className="text-xs text-zinc-500">
                    {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)} total skills configured
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillCategories.map((cat) => (
                    <div
                      key={cat.id}
                      className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-bold text-white">{cat.title}</h5>
                        <span className="text-[10px] text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
                          {cat.skills.length} skills
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400">{cat.description}</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {cat.skills.map((s) => (
                          <span
                            key={s.name}
                            className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                          >
                            {s.name} ({s.percentage}%)
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: STATIC HOSTING & CODE EXPORT (For invisible admin & static deployment) */}
          {activeTab === 'hosting' && (
            <div className="space-y-6">
              {/* Section 1: Secret Admin Routing & Stealth Mode */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-zinc-900/80 to-zinc-900/40 border border-indigo-500/30 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-indigo-400" />
                      <h4 className="text-sm font-bold text-white">
                        Stealth Admin Access & Secret URL Routing
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400">
                      In production hosting, you don't need a visible Admin button for public visitors or recruiters. You can open this Admin Portal anytime using secret routes or shortcuts.
                    </p>
                  </div>

                  {/* Toggle show/hide button on navbar */}
                  <button
                    type="button"
                    onClick={() =>
                      onSavePortfolioSettings({
                        ...portfolioSettings,
                        showAdminButtonInNav: !portfolioSettings.showAdminButtonInNav,
                      })
                    }
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      portfolioSettings.showAdminButtonInNav
                        ? 'bg-amber-500 text-zinc-950 shadow-md'
                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    {portfolioSettings.showAdminButtonInNav ? (
                      <>
                        <ToggleRight className="w-4 h-4 text-zinc-950" />
                        <span>Visible Button in Navbar: ON</span>
                      </>
                    ) : (
                      <>
                        <ToggleLeft className="w-4 h-4 text-zinc-400" />
                        <span>Visible Button in Navbar: OFF (Stealth)</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 3 Secret Access Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-1.5">
                    <div className="flex items-center gap-2 text-indigo-400">
                      <Globe className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold text-white">1. Secret URL Hash / Path</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">
                      Simply type <code className="text-indigo-300 font-mono bg-zinc-800 px-1 py-0.5 rounded">/#admin</code> or <code className="text-indigo-300 font-mono bg-zinc-800 px-1 py-0.5 rounded">?admin</code> at the end of your hosted website URL.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Code className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold text-white">2. Keyboard Shortcut</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">
                      Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-[10px]">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-[10px]">Shift</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-[10px]">A</kbd> anywhere on the page to open this portal immediately.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-1.5">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <User className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold text-white">3. Secret Avatar Click</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">
                      Triple-click your profile photo or initial in the top navbar to secretly launch the Admin Portal without any visible buttons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: 1-Click Code Generator for Static Hosting */}
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-sm font-bold text-white">
                        1-Click Static Dataset Code Generator (<code className="text-emerald-300 font-mono">defaultData.ts</code>)
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      Whenever you make changes in the Admin Portal, generate the updated TypeScript file and paste it into your local repository to deploy 100% static changes globally.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyDefaultDataCode}
                      className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Code Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy TypeScript Code</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleDownloadDefaultDataFile}
                      className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download defaultData.ts</span>
                    </button>
                  </div>
                </div>

                {/* How to deploy step-by-step */}
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-2 text-xs text-zinc-300">
                  <h5 className="font-bold text-white text-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    How to update your live static portfolio:
                  </h5>
                  <ol className="list-decimal pl-5 space-y-1 text-zinc-400 leading-relaxed font-sans">
                    <li>Customize your profile, projects, and technologies right here in the Admin Portal.</li>
                    <li>Click <strong>"Copy TypeScript Code"</strong> or <strong>"Download defaultData.ts"</strong> above.</li>
                    <li>Replace the contents of <code className="text-zinc-200 font-mono bg-zinc-800 px-1 py-0.5 rounded">src/data/defaultData.ts</code> in your local project.</li>
                    <li>Commit and push to GitHub (<code className="text-zinc-200 font-mono bg-zinc-800 px-1 py-0.5 rounded">git add . && git commit -m "Update portfolio" && git push</code>). Your hosted static site (Vercel, Netlify, GitHub Pages, or Cloudflare) will automatically build and publish with zero backend required!</li>
                  </ol>
                </div>

                {/* Code Preview Preview Box */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Generated Code Preview (<code className="font-mono text-zinc-300">src/data/defaultData.ts</code>)</span>
                    <span>Ready for production build</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#090A0F] border border-zinc-800 text-[11px] font-mono text-zinc-300 max-h-56 overflow-y-auto leading-relaxed select-all">
                    {generateDefaultDataTsCode({
                      profile,
                      projects,
                      techStack,
                      skillCategories,
                      experience,
                      portfolioSettings,
                    })}
                  </pre>
                </div>
              </div>

              {/* Section 3: JSON Backup & State Restore */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                    JSON Backup & Cross-Device State Sync
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Download a raw JSON snapshot of your data or upload a previously saved backup file to restore your portfolio on any machine.
                  </p>
                  {importStatus && (
                    <p
                      className={`text-xs font-medium pt-1 ${
                        importStatus.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {importStatus.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleExportBackup}
                    className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export JSON</span>
                  </button>

                  <label className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Import JSON</span>
                    <input
                      type="file"
                      accept=".json,application/json"
                      onChange={handleImportBackupJson}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: README & LOGIC GUIDE */}
          {activeTab === 'readme' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-5 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                    <span>Portfolio Architecture & Technical README</span>
                  </h4>
                  <button
                    onClick={handleExportBackup}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export Data Backup (JSON)</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-white text-sm">1. Public Portfolio vs Admin Portal Logic</h5>
                    <p className="text-zinc-400 text-xs mt-1">
                      The public view has been stripped of all editing buttons, search bars, complex category tabs, and interactive pipeline clutter. Recruiters and hiring managers see a pure, high-performance static engineering showcase. All modifications are handled privately within this Admin Portal.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-white text-sm">2. Section 2: Technology Logo Resolution Engine</h5>
                    <p className="text-zinc-400 text-xs mt-1">
                      Technologies added in Section 2 use a multi-tiered logo resolver:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-400 text-xs mt-1 font-mono">
                      <li>1. Custom Logo URL: If you provide a direct image/SVG link in admin, it takes highest precedence.</li>
                      <li>2. Devicons CDN: Automatically matches official SVGs for TypeScript, Python, Flask, React, Next.js, Go, Docker, Kubernetes, AWS, PostgreSQL, Redis, etc.</li>
                      <li>3. SimpleIcons CDN: Fallback for hundreds of developer tools.</li>
                      <li>4. Monogram Badge: If an image fails to load, gracefully displays an authentic brand color badge.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-white text-sm">3. Section 3: Curated Featured Projects</h5>
                    <p className="text-zinc-400 text-xs mt-1">
                      Projects are rendered in a focused grid with custom screenshot support. Clicking on any project opens the deep-dive modal featuring problem/solution notes, architecture highlights, and live GitHub repository metrics.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-white text-sm">4. Section 4: Technical Competencies Toggle</h5>
                    <p className="text-zinc-400 text-xs mt-1">
                      Controlled via the toggle switch in the "Technical Competencies" tab. When toggled OFF, it is completely hidden from the public layout.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-white text-sm">5. Data Persistence & Export</h5>
                    <p className="text-zinc-400 text-xs mt-1">
                      All customizations (projects, tech stack, work experience, profile info) automatically persist in browser local storage. You can click <strong>"Export Data Backup (JSON)"</strong> anytime to download your portfolio state as a backup file.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3.5 border-t border-zinc-800 bg-zinc-900/90 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Admin Mode active • Changes auto-sync with portfolio</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold transition-colors cursor-pointer shadow-sm"
          >
            Done & View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
