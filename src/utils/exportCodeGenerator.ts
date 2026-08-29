import {
  DeveloperProfile,
  Project,
  SkillCategory,
  ExperienceItem,
  TechItem,
  PortfolioSettings,
} from '../types';

export function generateDefaultDataTsCode(data: {
  profile: DeveloperProfile;
  projects: Project[];
  techStack: TechItem[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  portfolioSettings: PortfolioSettings;
}): string {
  const { profile, projects, techStack, skillCategories, experience, portfolioSettings } = data;

  return `// ============================================================================
// Developer Portfolio - Static Default Dataset
// Auto-generated from Admin Portal
// ============================================================================
import { DeveloperProfile, Project, SkillCategory, ExperienceItem, TechItem, PortfolioSettings } from '../types';

export const initialProfile: DeveloperProfile = ${JSON.stringify(profile, null, 2)};

export const initialProjects: Project[] = ${JSON.stringify(projects, null, 2)};

export const initialTechStack: TechItem[] = ${JSON.stringify(techStack, null, 2)};

export const initialSkillCategories: SkillCategory[] = ${JSON.stringify(skillCategories, null, 2)};

export const initialExperience: ExperienceItem[] = ${JSON.stringify(experience, null, 2)};

export const initialPortfolioSettings: PortfolioSettings = ${JSON.stringify(portfolioSettings, null, 2)};
`;
}
