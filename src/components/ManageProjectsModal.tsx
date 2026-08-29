import React, { useState, useEffect } from 'react';
import { Project, GitHubAttachment } from '../types';
import {
  X,
  Plus,
  Github,
  Trash2,
  Edit3,
  Check,
  AlertCircle,
  RefreshCw,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Image as ImageIcon,
} from 'lucide-react';

interface ManageProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onAddProject: (project: Project) => void;
  onUpdateProject: (project: Project) => void;
  onDeleteProject: (projectId: string) => void;
  onClearSampleProjects: () => void;
  onResetDefaultProjects: () => void;
  initialEditingProject?: Project | null;
}

export const ManageProjectsModal: React.FC<ManageProjectsModalProps> = ({
  isOpen,
  onClose,
  projects,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  onClearSampleProjects,
  onResetDefaultProjects,
  initialEditingProject,
}) => {
  const [activeTab, setActiveTab] = useState<'add' | 'list'>('add');
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  // Form State
  const [githubUrlInput, setGithubUrlInput] = useState('');
  const [isFetchingGithub, setIsFetchingGithub] = useState(false);
  const [githubFetchError, setGithubFetchError] = useState<string | null>(null);
  const [githubFetchSuccess, setGithubFetchSuccess] = useState(false);

  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [category, setCategory] = useState('Full Stack');
  const [description, setDescription] = useState('');
  const [techInput, setTechInput] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [featured, setFeatured] = useState(true);
  const [highlight1, setHighlight1] = useState('');
  const [highlight2, setHighlight2] = useState('');
  const [highlight3, setHighlight3] = useState('');
  const [metricLabel, setMetricLabel] = useState('');
  const [metricValue, setMetricValue] = useState('');

  // When initialEditingProject changes or user selects edit
  useEffect(() => {
    if (initialEditingProject) {
      loadProjectIntoForm(initialEditingProject);
      setActiveTab('add');
    }
  }, [initialEditingProject]);

  if (!isOpen) return null;

  const resetForm = () => {
    setEditingProjectId(null);
    setGithubUrlInput('');
    setIsFetchingGithub(false);
    setGithubFetchError(null);
    setGithubFetchSuccess(false);
    setTitle('');
    setTagline('');
    setCategory('Full Stack');
    setDescription('');
    setTechInput('');
    setDemoUrl('');
    setRepoUrl('');
    setImageUrl('');
    setFeatured(true);
    setHighlight1('');
    setHighlight2('');
    setHighlight3('');
    setMetricLabel('');
    setMetricValue('');
  };

  const loadProjectIntoForm = (p: Project) => {
    setEditingProjectId(p.id);
    setTitle(p.title);
    setTagline(p.tagline || '');
    setCategory(p.category || 'Full Stack');
    setDescription(p.description || '');
    setTechInput(p.technologies?.join(', ') || '');
    setDemoUrl(p.demoUrl || '');
    setRepoUrl(p.githubAttachment?.repoUrl || '');
    setImageUrl(p.imageUrl || '');
    setGithubUrlInput(p.githubAttachment?.repoUrl || '');
    setFeatured(!!p.featured);
    setHighlight1(p.keyFeatures?.[0] || '');
    setHighlight2(p.keyFeatures?.[1] || '');
    setHighlight3(p.keyFeatures?.[2] || '');
    setMetricLabel(p.metrics?.[0]?.label || '');
    setMetricValue(p.metrics?.[0]?.value || '');
    setActiveTab('add');
  };

  // Helper to parse GitHub owner & repo
  const parseGitHubInput = (input: string) => {
    const clean = input.trim().replace(/^https?:\/\/github\.com\//i, '').replace(/\/$/, '');
    const parts = clean.split('/');
    if (parts.length >= 2) {
      return { owner: parts[0], repo: parts[1].replace(/\.git$/i, '') };
    }
    return null;
  };

  // Fetch repository data from GitHub public REST API
  const handleFetchFromGithub = async () => {
    setGithubFetchError(null);
    setGithubFetchSuccess(false);
    const parsed = parseGitHubInput(githubUrlInput);

    if (!parsed) {
      setGithubFetchError('Please enter a valid GitHub repository URL (e.g. github.com/owner/repo or owner/repo)');
      return;
    }

    setIsFetchingGithub(true);
    try {
      const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`);
      if (!res.ok) {
        throw new Error(`Repository not found or private (HTTP ${res.status})`);
      }
      const data = await res.json();

      // Format formatted title: capitalize kebab-case or snake_case
      const formattedTitle = data.name
        ? data.name
            .split(/[-_]/)
            .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ')
        : parsed.repo;

      setTitle(formattedTitle);
      setDescription(data.description || '');
      setTagline(data.description ? data.description.slice(0, 100) : `${formattedTitle} software project`);
      setRepoUrl(data.html_url || `https://github.com/${parsed.owner}/${parsed.repo}`);
      if (data.homepage && data.homepage.startsWith('http')) {
        setDemoUrl(data.homepage);
      }

      // Gather technologies from language and topics
      const techList: string[] = [];
      if (data.language) techList.push(data.language);
      if (Array.isArray(data.topics)) {
        data.topics.slice(0, 5).forEach((t: string) => {
          const cap = t.charAt(0).toUpperCase() + t.slice(1);
          if (!techList.includes(cap)) techList.push(cap);
        });
      }
      if (techList.length > 0) {
        setTechInput(techList.join(', '));
      }

      // Set category suggestion
      if (techList.some((t) => ['React', 'Vue', 'Next.js', 'Frontend'].includes(t))) {
        setCategory('Full Stack');
      } else if (techList.some((t) => ['Docker', 'Kubernetes', 'DevOps', 'CI/CD'].includes(t))) {
        setCategory('DevOps & Tools');
      } else if (techList.some((t) => ['Python', 'AI', 'Machine Learning', 'Data'].includes(t))) {
        setCategory('AI & Data');
      }

      setGithubFetchSuccess(true);
    } catch (err: any) {
      setGithubFetchError(
        err.message || 'Could not fetch repository automatically. You can still enter the details manually below.'
      );
    } finally {
      setIsFetchingGithub(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please provide a project title');
      return;
    }

    // Parse technologies
    const technologies = techInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    // Key features
    const keyFeatures = [highlight1.trim(), highlight2.trim(), highlight3.trim()].filter(Boolean);

    // Metrics
    const metrics =
      metricLabel.trim() && metricValue.trim()
        ? [{ label: metricLabel.trim(), value: metricValue.trim() }]
        : undefined;

    // GitHub attachment
    const parsed = parseGitHubInput(repoUrl || githubUrlInput || '');
    const cleanRepoName = parsed ? parsed.repo : title.toLowerCase().replace(/\s+/g, '-');
    const cleanOwner = parsed ? parsed.owner : 'user';

    const githubAttachment: GitHubAttachment = {
      repoName: cleanRepoName,
      repoOwner: cleanOwner,
      repoUrl: repoUrl.trim() || (parsed ? `https://github.com/${parsed.owner}/${parsed.repo}` : ''),
      stars: 0,
      forks: 0,
      primaryLanguage: technologies[0] || 'TypeScript',
      defaultBranch: 'main',
      cloneUrl: repoUrl.trim() ? `${repoUrl.trim().replace(/\/$/, '')}.git` : '',
    };

    const projectData: Project = {
      id: editingProjectId || `project-${Date.now()}`,
      title: title.trim(),
      tagline: tagline.trim() || `${title.trim()} architecture & implementation`,
      description: description.trim() || `${title.trim()} developed with modern software engineering practices.`,
      category: category.trim() || 'Full Stack',
      featured,
      technologies: technologies.length > 0 ? technologies : ['TypeScript', 'Software Engineering'],
      demoUrl: demoUrl.trim() || undefined,
      imageUrl: imageUrl.trim() || undefined,
      githubAttachment,
      keyFeatures: keyFeatures.length > 0 ? keyFeatures : undefined,
      metrics,
    };

    if (editingProjectId) {
      onUpdateProject(projectData);
    } else {
      onAddProject(projectData);
    }

    resetForm();
    onClose();
  };

  return (
    <div
      id="manage-projects-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="manage-projects-card"
        className="relative w-full max-w-3xl max-h-[92vh] bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden text-zinc-200"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 bg-zinc-900/95 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {editingProjectId ? 'Edit Project' : 'Manage & Add Projects'}
              </h2>
              <p className="text-xs text-zinc-400">
                Add your personal GitHub repositories or custom engineering projects
              </p>
            </div>
          </div>

          <button
            id="close-manage-projects-btn"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="px-5 sm:px-6 border-b border-zinc-800 bg-zinc-950/60 flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <button
              id="tab-add-project-btn"
              onClick={() => setActiveTab('add')}
              className={`flex items-center gap-2 py-2.5 px-4 text-xs font-medium rounded-t-lg border-b-2 transition-colors cursor-pointer ${
                activeTab === 'add'
                  ? 'border-indigo-500 text-white bg-zinc-900'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{editingProjectId ? 'Edit Project Form' : 'Add New Project'}</span>
            </button>

            <button
              id="tab-list-projects-btn"
              onClick={() => setActiveTab('list')}
              className={`flex items-center gap-2 py-2.5 px-4 text-xs font-medium rounded-t-lg border-b-2 transition-colors cursor-pointer ${
                activeTab === 'list'
                  ? 'border-indigo-500 text-white bg-zinc-900'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Projects ({projects.length})</span>
            </button>
          </div>

          {editingProjectId && (
            <button
              onClick={resetForm}
              className="text-[11px] text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer"
            >
              + Switch to New Project
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 max-h-[65vh] space-y-6">
          {activeTab === 'add' ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* GitHub Autofill Quick Action Box */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Github className="w-4 h-4 text-indigo-400" />
                    <span>Quick Import from GitHub (Optional)</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">Public Repositories</span>
                </div>
                <div className="flex gap-2">
                  <input
                    id="github-import-input"
                    type="text"
                    placeholder="https://github.com/username/project or username/project"
                    value={githubUrlInput}
                    onChange={(e) => setGithubUrlInput(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                  <button
                    type="button"
                    id="fetch-github-btn"
                    onClick={handleFetchFromGithub}
                    disabled={isFetchingGithub || !githubUrlInput.trim()}
                    className="px-3.5 py-2 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white border border-zinc-700 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    {isFetchingGithub ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-400" />
                        <span>Fetching...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Autofill</span>
                      </>
                    )}
                  </button>
                </div>

                {githubFetchSuccess && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>Fetched repo details! You can review and adjust any field below.</span>
                  </div>
                )}

                {githubFetchError && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{githubFetchError}</span>
                  </div>
                )}
              </div>

              {/* Core Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Project Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="project-title-input"
                    type="text"
                    required
                    placeholder="e.g. Distributed Task Orchestrator, E-Commerce Platform"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Tagline / One-Line Summary
                  </label>
                  <input
                    id="project-tagline-input"
                    type="text"
                    placeholder="e.g. High-throughput job scheduling engine with Raft consensus"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">Category</label>
                  <select
                    id="project-category-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Full Stack">Full Stack</option>
                    <option value="Backend & Cloud">Backend & Cloud</option>
                    <option value="AI & Data">AI & Data</option>
                    <option value="DevOps & Tools">DevOps & Tools</option>
                    <option value="Open Source">Open Source</option>
                    <option value="Mobile & Web">Mobile & Web</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Technologies / Stack (Comma separated)
                  </label>
                  <input
                    id="project-tech-input"
                    type="text"
                    placeholder="e.g. React, TypeScript, Node.js, PostgreSQL, Docker, Redis"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Project Overview / Description
                  </label>
                  <textarea
                    id="project-desc-input"
                    rows={3}
                    placeholder="Describe what the system does, architectural challenges solved, and operational impact..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    GitHub Repository Link
                  </label>
                  <input
                    id="project-repo-url-input"
                    type="url"
                    placeholder="https://github.com/your-username/your-repo"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Live Demo / Production URL (Optional)
                  </label>
                  <input
                    id="project-demo-url-input"
                    type="url"
                    placeholder="https://my-app.vercel.app or live service URL"
                    value={demoUrl}
                    onChange={(e) => setDemoUrl(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                {/* Direct Thumbnail / Social Card Image URL */}
                <div className="sm:col-span-2 space-y-2 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-zinc-200 flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Project Thumbnail / Social Preview Image URL (Optional)</span>
                    </label>
                    {imageUrl && (
                      <button
                        type="button"
                        onClick={() => setImageUrl('')}
                        className="text-[11px] text-zinc-400 hover:text-red-400 transition-colors"
                      >
                        Remove Image
                      </button>
                    )}
                  </div>
                  <input
                    id="project-image-url-input"
                    type="url"
                    placeholder="Paste image URL (e.g. https://your-domain.com/screenshot.png, Imgur, Cloudinary, or GitHub raw asset)"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                  {imageUrl ? (
                    <div className="mt-2 relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/90 max-h-40 flex items-center justify-center">
                      <img
                        src={imageUrl}
                        alt="Thumbnail preview"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover max-h-40"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <p className="text-[11px] text-zinc-500">
                      Leave empty if you don't have an image yet. You can paste any direct image link or GitHub raw preview whenever you want.
                    </p>
                  )}
                </div>

                {/* Key Features */}
                <div className="sm:col-span-2 space-y-2 pt-2 border-t border-zinc-800/80">
                  <label className="block text-xs font-medium text-zinc-300">
                    Key Highlights / Engineering Features (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Highlight 1: e.g. Reduced query times by 45% using Redis caching"
                    value={highlight1}
                    onChange={(e) => setHighlight1(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600"
                  />
                  <input
                    type="text"
                    placeholder="Highlight 2: e.g. Zero-downtime rolling deployments on Kubernetes"
                    value={highlight2}
                    onChange={(e) => setHighlight2(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600"
                  />
                </div>

                {/* Optional Metric */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Metric Label (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Throughput or Latency"
                    value={metricLabel}
                    onChange={(e) => setMetricLabel(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Metric Value (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 25k req/s or < 8ms P99"
                    value={metricValue}
                    onChange={(e) => setMetricValue(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-zinc-300">
                    <input
                      type="checkbox"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      className="rounded bg-zinc-800 border-zinc-700 text-indigo-500 focus:ring-indigo-500"
                    />
                    <span>Mark as Featured Project</span>
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 cursor-pointer"
                >
                  Cancel
                </button>

                <div className="flex items-center gap-2">
                  {editingProjectId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-3 py-2 text-xs font-medium rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white cursor-pointer"
                    >
                      Cancel Edit
                    </button>
                  )}
                  <button
                    type="submit"
                    id="save-project-btn"
                    className="px-5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>{editingProjectId ? 'Save Changes' : 'Add Project to Portfolio'}</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Manage Existing Projects List */
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs text-zinc-400">
                <span>{projects.length} Projects in Portfolio</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClearSampleProjects}
                    className="text-xs text-red-400 hover:text-red-300 cursor-pointer font-medium"
                  >
                    Clear Sample Projects
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={onResetDefaultProjects}
                    className="text-xs text-zinc-400 hover:text-white cursor-pointer"
                  >
                    Restore Samples
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1 max-w-lg">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-zinc-800 text-zinc-300">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            Featured
                          </span>
                        )}
                        <h4 className="text-sm font-semibold text-white">{project.title}</h4>
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-1">{project.tagline}</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-[10px] text-zinc-500 font-mono">
                            #{tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => loadProjectIntoForm(project)}
                        className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete project "${project.title}"?`)) {
                            onDeleteProject(project.id);
                          }
                        }}
                        className="p-1.5 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-red-950 text-zinc-400 hover:text-red-400 transition-colors cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
