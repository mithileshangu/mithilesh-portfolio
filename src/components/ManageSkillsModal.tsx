import React, { useState } from 'react';
import { SkillCategory, Skill } from '../types';
import {
  X,
  Plus,
  Trash2,
  Check,
  Code2,
  FolderPlus,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ManageSkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: SkillCategory[];
  onAddSkill: (categoryId: string, skill: Skill) => void;
  onDeleteSkill: (categoryId: string, skillName: string) => void;
  onAddCategory: (newCategory: SkillCategory) => void;
  onDeleteCategory: (categoryId: string) => void;
  onClearSampleSkills: () => void;
  onResetDefaultSkills: () => void;
}

export const ManageSkillsModal: React.FC<ManageSkillsModalProps> = ({
  isOpen,
  onClose,
  categories,
  onAddSkill,
  onDeleteSkill,
  onAddCategory,
  onDeleteCategory,
  onClearSampleSkills,
  onResetDefaultSkills,
}) => {
  const [activeTab, setActiveTab] = useState<'add' | 'categories' | 'manage'>('add');

  // Add Skill Form State
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(categories[0]?.id || 'languages');
  const [skillName, setSkillName] = useState('');
  const [level, setLevel] = useState<'Expert' | 'Advanced' | 'Proficient'>('Advanced');
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(3);
  const [percentage, setPercentage] = useState<number>(85);
  const [tagsInput, setTagsInput] = useState('');

  // Add New Category Form State
  const [newCatTitle, setNewCatTitle] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');
  const [newCatIcon, setNewCatIcon] = useState('Layers');

  if (!isOpen) return null;

  const handleLevelChange = (newLevel: 'Expert' | 'Advanced' | 'Proficient') => {
    setLevel(newLevel);
    if (newLevel === 'Expert') setPercentage(95);
    else if (newLevel === 'Advanced') setPercentage(85);
    else setPercentage(75);
  };

  const handleAddSkillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skillName.trim()) {
      alert('Please enter a skill name');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const newSkill: Skill = {
      name: skillName.trim(),
      level,
      percentage: Number(percentage) || 85,
      yearsOfExperience: Number(yearsOfExperience) || 1,
      tags: tags.length > 0 ? tags : [skillName.trim()],
    };

    onAddSkill(selectedCategoryId, newSkill);

    // Reset skill fields
    setSkillName('');
    setTagsInput('');
  };

  const handleAddCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatTitle.trim()) {
      alert('Please provide a category title');
      return;
    }

    const id = newCatTitle.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const newCategory: SkillCategory = {
      id,
      title: newCatTitle.trim(),
      description: newCatDesc.trim() || `${newCatTitle.trim()} technical competencies and tools`,
      icon: newCatIcon,
      skills: [],
    };

    onAddCategory(newCategory);
    setSelectedCategoryId(id);
    setNewCatTitle('');
    setNewCatDesc('');
    setActiveTab('add');
  };

  const totalSkillsCount = categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <div
      id="manage-skills-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="manage-skills-card"
        className="relative w-full max-w-3xl max-h-[92vh] bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden text-zinc-200"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 bg-zinc-900/95 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Manage & Add Technical Skills
              </h2>
              <p className="text-xs text-zinc-400">
                Customize your competencies matrix, categories, and experience levels
              </p>
            </div>
          </div>

          <button
            id="close-manage-skills-btn"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-5 sm:px-6 border-b border-zinc-800 bg-zinc-950/60 flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <button
              id="tab-add-skill-btn"
              onClick={() => setActiveTab('add')}
              className={`flex items-center gap-2 py-2.5 px-4 text-xs font-medium rounded-t-lg border-b-2 transition-colors cursor-pointer ${
                activeTab === 'add'
                  ? 'border-indigo-500 text-white bg-zinc-900'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Skill</span>
            </button>

            <button
              id="tab-manage-skills-btn"
              onClick={() => setActiveTab('manage')}
              className={`flex items-center gap-2 py-2.5 px-4 text-xs font-medium rounded-t-lg border-b-2 transition-colors cursor-pointer ${
                activeTab === 'manage'
                  ? 'border-indigo-500 text-white bg-zinc-900'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>View & Manage All ({totalSkillsCount})</span>
            </button>

            <button
              id="tab-add-cat-btn"
              onClick={() => setActiveTab('categories')}
              className={`flex items-center gap-2 py-2.5 px-4 text-xs font-medium rounded-t-lg border-b-2 transition-colors cursor-pointer ${
                activeTab === 'categories'
                  ? 'border-indigo-500 text-white bg-zinc-900'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <FolderPlus className="w-3.5 h-3.5" />
              <span>Add Category</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 max-h-[65vh] space-y-6">
          {activeTab === 'add' && (
            <form onSubmit={handleAddSkillSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category Selection */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Target Skill Category <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="skill-category-select"
                    value={selectedCategoryId}
                    onChange={(e) => setSelectedCategoryId(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.title} ({cat.skills.length} skills)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Skill Name */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Skill / Technology Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="skill-name-input"
                    type="text"
                    required
                    placeholder="e.g. Python, Docker, Go, React 19, AWS"
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 font-medium"
                  />
                </div>

                {/* Proficiency Level */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Proficiency Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Expert', 'Advanced', 'Proficient'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => handleLevelChange(lvl)}
                        className={`py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          level === lvl
                            ? 'bg-indigo-600 text-white border-indigo-500 font-semibold'
                            : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-white'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Years of Experience */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Years of Practical Experience
                  </label>
                  <input
                    id="skill-exp-input"
                    type="number"
                    min="1"
                    max="25"
                    value={yearsOfExperience}
                    onChange={(e) => setYearsOfExperience(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                {/* Estimated Mastery % */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Mastery Score: <span className="text-indigo-400 font-mono">{percentage}%</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={percentage}
                    onChange={(e) => setPercentage(parseInt(e.target.value) || 80)}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>

                {/* Tags / Sub-competencies */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Key Libraries, Frameworks or Concepts (Comma separated)
                  </label>
                  <input
                    id="skill-tags-input"
                    type="text"
                    placeholder="e.g. AsyncIO, FastAPI, Django, Data Pipelines"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  id="add-skill-submit-btn"
                  className="px-5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Skill to Matrix</span>
                </button>
              </div>
            </form>
          )}

          {activeTab === 'manage' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs text-zinc-400">
                <span>{totalSkillsCount} Total Skills Across {categories.length} Categories</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClearSampleSkills}
                    className="text-xs text-red-400 hover:text-red-300 cursor-pointer font-medium"
                  >
                    Clear Sample Skills
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={onResetDefaultSkills}
                    className="text-xs text-zinc-400 hover:text-white cursor-pointer"
                  >
                    Restore Samples
                  </button>
                </div>
              </div>

              {/* Grouped Skills by Category */}
              <div className="space-y-6">
                {categories.map((cat) => (
                  <div key={cat.id} className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white">{cat.title}</span>
                        <span className="px-1.5 py-0.5 text-[10px] rounded bg-zinc-800 text-zinc-400">
                          {cat.skills.length}
                        </span>
                      </div>

                      {categories.length > 1 && (
                        <button
                          onClick={() => {
                            if (confirm(`Remove category "${cat.title}" and its skills?`)) {
                              onDeleteCategory(cat.id);
                            }
                          }}
                          className="text-[11px] text-zinc-500 hover:text-red-400 transition-colors"
                          title="Delete Category"
                        >
                          Remove Category
                        </button>
                      )}
                    </div>

                    {cat.skills.length === 0 ? (
                      <div className="text-xs text-zinc-500 italic py-2">No skills in this category yet.</div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-between gap-2"
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-medium text-white">{skill.name}</span>
                                <span className="text-[10px] text-indigo-400 font-mono">
                                  ({skill.yearsOfExperience}y)
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {skill.tags.slice(0, 2).map((t) => (
                                  <span key={t} className="text-[9px] text-zinc-500">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <button
                              onClick={() => onDeleteSkill(cat.id, skill.name)}
                              className="p-1.5 text-zinc-500 hover:text-red-400 rounded hover:bg-zinc-800 transition-colors cursor-pointer"
                              title={`Delete ${skill.name}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <form onSubmit={handleAddCategorySubmit} className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Category Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI & Machine Learning, Mobile Development, Security"
                    value={newCatTitle}
                    onChange={(e) => setNewCatTitle(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Brief Description
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Deep learning models, LLM orchestration, and vector indexing"
                    value={newCatDesc}
                    onChange={(e) => setNewCatDesc(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Icon Theme
                  </label>
                  <select
                    value={newCatIcon}
                    onChange={(e) => setNewCatIcon(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none"
                  >
                    <option value="Layers">Layers (General)</option>
                    <option value="Code2">Code (Languages & Logic)</option>
                    <option value="Server">Server (Backend)</option>
                    <option value="Layout">Layout (Frontend)</option>
                    <option value="Cloud">Cloud (DevOps)</option>
                    <option value="Database">Database (Data & Storage)</option>
                  </select>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Category</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
