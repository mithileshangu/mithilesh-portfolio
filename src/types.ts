export interface GitHubAttachment {
  repoName: string;
  repoOwner: string;
  repoUrl: string;
  stars: number;
  forks: number;
  watchers?: number;
  openIssues?: number;
  primaryLanguage: string;
  languageColor?: string;
  defaultBranch?: string;
  lastCommitMessage?: string;
  lastCommitDate?: string;
  cloneUrl?: string;
  license?: string;
  ciStatus?: 'passing' | 'failing' | 'running';
  releaseTag?: string;
  readmeMarkdown?: string;
  fileTree?: {
    path: string;
    type: 'dir' | 'file';
    size?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  featured: boolean;
  technologies: string[];
  imageUrl?: string;
  githubAttachment: GitHubAttachment;
  demoUrl?: string;
  architectureNotes?: string[];
  keyFeatures?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  percentage: number;
  iconName?: string;
  yearsOfExperience: number;
  tags: string[];
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Open Source' | 'Education';
  logoUrl?: string;
  highlights: string[];
  technologies: string[];
  githubOrgUrl?: string;
}

export interface TechItem {
  id: string;
  name: string;
  category?: string;
  color?: string;
  logoUrl?: string;
  icon?: string;
}

export interface PortfolioSettings {
  showTechnicalCompetencies: boolean;
  showExperience: boolean;
  showAdminButtonInNav?: boolean;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  subTitle: string;
  location: string;
  availability: string;
  bio: string;
  yearsOfExperience: number;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  websiteUrl?: string;
  avatarUrl?: string;
  stats: {
    totalProjects: number;
    yearsOfExperience: number;
    technologiesMastered: number;
    productionDeployments: number;
    // Optional compatibility fields
    githubStars?: number;
    pullRequests?: number;
    contributionsThisYear?: number;
  };
}
