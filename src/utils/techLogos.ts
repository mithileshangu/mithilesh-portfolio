// Utility to provide crisp SVG logos and brand colors for technologies
export interface TechLogoDefinition {
  name: string;
  slug: string;
  color: string;
  category: string;
  icon?: string;
  deviconPath?: string;
}

// Comprehensive database of tech brand colors and official slugs
export const KNOWN_TECH_MAP: Record<string, TechLogoDefinition> = {
  typescript: {
    name: 'TypeScript',
    slug: 'typescript',
    color: '#3178C6',
    category: 'Language',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  javascript: {
    name: 'JavaScript',
    slug: 'javascript',
    color: '#F7DF1E',
    category: 'Language',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  python: {
    name: 'Python',
    slug: 'python',
    color: '#3776AB',
    category: 'Language',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  flask: {
    name: 'Flask',
    slug: 'flask',
    color: '#FFFFFF',
    category: 'Framework',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  },
  django: {
    name: 'Django',
    slug: 'django',
    color: '#092E20',
    category: 'Framework',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  },
  react: {
    name: 'React',
    slug: 'react',
    color: '#61DAFB',
    category: 'Frontend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  'next.js': {
    name: 'Next.js',
    slug: 'nextjs',
    color: '#FFFFFF',
    category: 'Frontend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  nextjs: {
    name: 'Next.js',
    slug: 'nextjs',
    color: '#FFFFFF',
    category: 'Frontend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  'node.js': {
    name: 'Node.js',
    slug: 'nodejs',
    color: '#339933',
    category: 'Backend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  nodejs: {
    name: 'Node.js',
    slug: 'nodejs',
    color: '#339933',
    category: 'Backend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  go: {
    name: 'Go',
    slug: 'go',
    color: '#00ADD8',
    category: 'Language',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  },
  golang: {
    name: 'Go',
    slug: 'go',
    color: '#00ADD8',
    category: 'Language',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  },
  rust: {
    name: 'Rust',
    slug: 'rust',
    color: '#DEA584',
    category: 'Language',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
  },
  docker: {
    name: 'Docker',
    slug: 'docker',
    color: '#2496ED',
    category: 'DevOps',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  kubernetes: {
    name: 'Kubernetes',
    slug: 'kubernetes',
    color: '#326CE5',
    category: 'DevOps',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  },
  postgresql: {
    name: 'PostgreSQL',
    slug: 'postgresql',
    color: '#4169E1',
    category: 'Database',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  postgres: {
    name: 'PostgreSQL',
    slug: 'postgresql',
    color: '#4169E1',
    category: 'Database',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  redis: {
    name: 'Redis',
    slug: 'redis',
    color: '#DC382D',
    category: 'Database',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
  aws: {
    name: 'AWS',
    slug: 'amazonwebservices',
    color: '#FF9900',
    category: 'Cloud',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  'tailwind css': {
    name: 'Tailwind CSS',
    slug: 'tailwindcss',
    color: '#06B6D4',
    category: 'Frontend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    slug: 'tailwindcss',
    color: '#06B6D4',
    category: 'Frontend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  html5: {
    name: 'HTML5',
    slug: 'html5',
    color: '#E34F26',
    category: 'Frontend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  html: {
    name: 'HTML5',
    slug: 'html5',
    color: '#E34F26',
    category: 'Frontend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  css3: {
    name: 'CSS3',
    slug: 'css3',
    color: '#1572B6',
    category: 'Frontend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  css: {
    name: 'CSS3',
    slug: 'css3',
    color: '#1572B6',
    category: 'Frontend',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  mongodb: {
    name: 'MongoDB',
    slug: 'mongodb',
    color: '#47A248',
    category: 'Database',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  graphql: {
    name: 'GraphQL',
    slug: 'graphql',
    color: '#E10098',
    category: 'API',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  kafka: {
    name: 'Apache Kafka',
    slug: 'apachekafka',
    color: '#FFFFFF',
    category: 'Data',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
  },
  'apache kafka': {
    name: 'Apache Kafka',
    slug: 'apachekafka',
    color: '#FFFFFF',
    category: 'Data',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
  },
  git: {
    name: 'Git',
    slug: 'git',
    color: '#F05032',
    category: 'DevOps',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  github: {
    name: 'GitHub',
    slug: 'github',
    color: '#FFFFFF',
    category: 'DevOps',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  linux: {
    name: 'Linux',
    slug: 'linux',
    color: '#FCC624',
    category: 'OS',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  fastapi: {
    name: 'FastAPI',
    slug: 'fastapi',
    color: '#009688',
    category: 'Framework',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  },
  express: {
    name: 'Express',
    slug: 'express',
    color: '#FFFFFF',
    category: 'Framework',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  java: {
    name: 'Java',
    slug: 'java',
    color: '#ED8B00',
    category: 'Language',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  c: {
    name: 'C',
    slug: 'c',
    color: '#A8B9CC',
    category: 'Language',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  'c++': {
    name: 'C++',
    slug: 'cplusplus',
    color: '#00599C',
    category: 'Language',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  gcp: {
    name: 'Google Cloud',
    slug: 'googlecloud',
    color: '#4285F4',
    category: 'Cloud',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  },
  'google cloud': {
    name: 'Google Cloud',
    slug: 'googlecloud',
    color: '#4285F4',
    category: 'Cloud',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  },
  firebase: {
    name: 'Firebase',
    slug: 'firebase',
    color: '#FFCA28',
    category: 'Cloud',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  supabase: {
    name: 'Supabase',
    slug: 'supabase',
    color: '#3ECF8E',
    category: 'Database',
    deviconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  },
};

export function getTechLogoUrl(techName: string, customLogoUrl?: string): string {
  if (customLogoUrl && customLogoUrl.trim()) {
    return customLogoUrl.trim();
  }
  const normalized = techName.toLowerCase().trim().replace(/[\s\-_.]+/g, '');
  const exact = KNOWN_TECH_MAP[techName.toLowerCase().trim()] || KNOWN_TECH_MAP[normalized];
  if (exact?.deviconPath) {
    return exact.deviconPath;
  }
  // Fallback to Simple Icons CDN
  return `https://cdn.simpleicons.org/${encodeURIComponent(normalized)}`;
}

export function getTechBrandColor(techName: string, customColor?: string): string {
  if (customColor && customColor.trim()) {
    return customColor.trim();
  }
  const normalized = techName.toLowerCase().trim().replace(/[\s\-_.]+/g, '');
  const exact = KNOWN_TECH_MAP[techName.toLowerCase().trim()] || KNOWN_TECH_MAP[normalized];
  return exact?.color || '#818cf8';
}
