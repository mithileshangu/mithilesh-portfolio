import React, { useState } from 'react';
import { SkillCategory, Skill } from '../types';
import {
  Code2,
  Server,
  Layout,
  Cloud,
  Database,
  Layers,
} from 'lucide-react';

interface TechnicalExpertiseProps {
  categories: SkillCategory[];
  onSelectSkillFilter: (skillName: string) => void;
  activeSkillFilter?: string | null;
}

export const TechnicalExpertise: React.FC<TechnicalExpertiseProps> = ({
  categories,
  onSelectSkillFilter,
  activeSkillFilter,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(categories[0]?.id || 'languages');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const getLevelBadgeColor = (level: Skill['level']) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Advanced':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'Proficient':
        return 'bg-zinc-800/80 text-zinc-300 border-zinc-700/60';
      default:
        return 'bg-zinc-800/50 text-zinc-400 border-zinc-700/40';
    }
  };

  const activeCategory = categories.find((c) => c.id === activeCategoryId) || categories[0];

  return (
    <section id="expertise" className="py-16 sm:py-20 bg-[#090A0F] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>SKILLS & EXPERTISE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Competencies
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Core stack competencies spanning programming languages, cloud architectures, distributed backend frameworks, and storage systems.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`expertise-tab-${cat.id}`}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex items-center gap-2.5 px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer border ${
                activeCategoryId === cat.id
                  ? 'bg-zinc-100 text-zinc-900 border-zinc-100 shadow-sm font-semibold'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 border-zinc-800/80'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.title}</span>
              <span
                className={`ml-1 px-1.5 py-0.5 text-[10px] rounded-md ${
                  activeCategoryId === cat.id
                    ? 'bg-zinc-900 text-zinc-200'
                    : 'bg-zinc-800 text-zinc-400'
                }`}
              >
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Active Category Overview */}
        {activeCategory && (
          <div className="space-y-6">
            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span>{activeCategory.description}</span>
              <span className="text-zinc-300 font-medium shrink-0">
                {activeCategory.skills.length} skills listed
              </span>
            </div>

            {/* Skills Grid */}
            {activeCategory.skills.length === 0 ? (
              <div className="py-12 text-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/20 space-y-3">
                <p className="text-zinc-400 text-sm">No skills added to this category yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {activeCategory.skills.map((skill) => {
                  const isSelected =
                    activeSkillFilter?.toLowerCase() === skill.name.toLowerCase();

                  return (
                    <div
                      key={skill.name}
                      id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`p-4 rounded-xl bg-zinc-900/50 border transition-all ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-950/20'
                          : 'border-zinc-800/80 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm font-bold text-white">{skill.name}</span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${getLevelBadgeColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {/* Percentage progress bar */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-[11px] text-zinc-400">
                          <span>Proficiency</span>
                          <span className="font-mono text-zinc-300">{skill.percentage}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full transition-all duration-500"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>

                      {skill.description && (
                        <p className="text-xs text-zinc-400 mt-2.5 line-clamp-2">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
