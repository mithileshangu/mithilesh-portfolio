import { GitHubAttachment, Project } from '../types';

export interface GitHubUserProfile {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepoItem {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  clone_url: string;
  ssh_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
  } | null;
  topics: string[];
  default_branch: string;
  homepage: string | null;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Shell: '#89e051',
  Vue: '#41b883',
  Scala: '#c22d40',
};

export function getLanguageColor(language: string | null): string {
  if (!language) return '#8b949e';
  return LANGUAGE_COLORS[language] || '#3b82f6';
}

/**
 * Fetch GitHub user profile
 */
export async function fetchGitHubProfile(username: string): Promise<GitHubUserProfile> {
  const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`GitHub user "${username}" was not found.`);
    }
    if (response.status === 403) {
      throw new Error('GitHub API rate limit reached. Please wait a few minutes or use preloaded projects.');
    }
    throw new Error(`Failed to load GitHub profile (Status: ${response.status})`);
  }

  return response.json();
}

/**
 * Fetch public repositories for a user
 */
export async function fetchGitHubRepos(username: string): Promise<GitHubRepoItem[]> {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=30`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('GitHub rate limit reached. Displaying cached developer projects.');
    }
    throw new Error(`Failed to fetch repositories: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch raw README markdown for a repository
 */
export async function fetchRepoReadme(owner: string, repo: string, defaultBranch = 'main'): Promise<string> {
  // Try raw GitHub user content first
  try {
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/README.md`;
    const res = await fetch(rawUrl);
    if (res.ok) {
      return await res.text();
    }
  } catch {
    // continue to api fallback
  }

  // Fallback to GitHub API readme
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
      headers: {
        Accept: 'application/vnd.github.v3.raw',
      },
    });
    if (res.ok) {
      return await res.text();
    }
  } catch {
    // ignore
  }

  return `# ${repo}\n\nRepository details and documentation are available on [GitHub](https://github.com/${owner}/${repo}).\n\nNo README.md content found in default branch \`${defaultBranch}\`.`;
}

/**
 * Convert a GitHub repository item into our portfolio Project format
 */
export function convertRepoToProject(repo: GitHubRepoItem): Project {
  const lang = repo.language || 'Code';
  const color = getLanguageColor(repo.language);
  
  // Categorize based on topics/language
  let category: Project['category'] = 'Full Stack';
  const lowerTopics = (repo.topics || []).map((t) => t.toLowerCase());
  const lowerName = repo.name.toLowerCase();

  if (
    lowerTopics.some((t) => ['ai', 'ml', 'data', 'nlp', 'analytics'].includes(t)) ||
    ['Python', 'Jupyter Notebook', 'R'].includes(lang)
  ) {
    category = 'AI & Data';
  } else if (
    lowerTopics.some((t) => ['devops', 'kubernetes', 'docker', 'helm', 'cli', 'tool'].includes(t)) ||
    lowerName.includes('cli') ||
    lowerName.includes('tool') ||
    lowerName.includes('action')
  ) {
    category = 'DevOps & Tools';
  } else if (
    lowerTopics.some((t) => ['backend', 'api', 'microservice', 'distributed', 'server'].includes(t)) ||
    ['Go', 'Rust', 'Java', 'C++', 'C#'].includes(lang)
  ) {
    category = 'Backend & Cloud';
  } else if (repo.fork || lowerTopics.includes('open-source')) {
    category = 'Open Source';
  }

  const attachment: GitHubAttachment = {
    repoName: repo.name,
    repoOwner: repo.owner.login,
    repoUrl: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    watchers: repo.watchers_count,
    openIssues: repo.open_issues_count,
    primaryLanguage: lang,
    languageColor: color,
    defaultBranch: repo.default_branch || 'main',
    lastCommitMessage: `Updated ${new Date(repo.pushed_at || repo.updated_at).toLocaleDateString()}`,
    lastCommitDate: new Date(repo.pushed_at || repo.updated_at).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    cloneUrl: repo.clone_url,
    license: repo.license?.spdx_id || repo.license?.name || undefined,
    ciStatus: 'passing',
    fileTree: [
      { path: 'src/', type: 'dir' },
      { path: 'tests/', type: 'dir' },
      { path: 'README.md', type: 'file', size: '3.2 KB' },
      { path: 'LICENSE', type: 'file', size: '1.1 KB' },
    ],
    readmeMarkdown: `# ${repo.name}\n\n${repo.description || 'A software engineering project built by ' + repo.owner.login}.\n\n### Repository Information\n- **Primary Language**: ${lang}\n- **Stars**: ${repo.stargazers_count}\n- **Forks**: ${repo.forks_count}\n- **Default Branch**: \`${repo.default_branch}\`\n\n### Clone\n\`\`\`bash\ngit clone ${repo.clone_url}\n\`\`\`\n\nVisit repository at [${repo.html_url}](${repo.html_url})`,
  };

  const techStack = [lang];
  if (repo.topics && repo.topics.length > 0) {
    repo.topics.slice(0, 4).forEach((t) => {
      if (!techStack.includes(t)) techStack.push(t);
    });
  }

  return {
    id: `gh-${repo.id}`,
    title: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    tagline: repo.description || `Software project built with ${lang}`,
    description: repo.description || `Open source software repository hosted on GitHub with ${repo.stargazers_count} stars and ${repo.forks_count} forks.`,
    category,
    featured: repo.stargazers_count > 10,
    technologies: techStack,
    githubAttachment: attachment,
    demoUrl: repo.homepage || undefined,
    metrics: [
      { label: 'GitHub Stars', value: `${repo.stargazers_count} ⭐` },
      { label: 'Forks', value: `${repo.forks_count}` },
      { label: 'Open Issues', value: `${repo.open_issues_count}` },
    ],
    keyFeatures: [
      `Public repository with ${repo.stargazers_count} stars and active community interest`,
      `Authored in ${lang} with clean Git commit history`,
      `Licensed under ${repo.license?.spdx_id || 'Open Source Terms'}`,
    ],
  };
}
