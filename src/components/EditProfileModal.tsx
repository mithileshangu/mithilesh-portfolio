import React, { useState } from 'react';
import { X, Save, RotateCcw, Sliders } from 'lucide-react';
import { DeveloperProfile } from '../types';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DeveloperProfile;
  onSaveProfile: (updatedProfile: DeveloperProfile) => void;
  onResetDefaults: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetDefaults,
}) => {
  const [formData, setFormData] = useState<DeveloperProfile>({ ...profile });

  if (!isOpen) return null;

  const handleChange = (field: keyof DeveloperProfile, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStatsChange = (statKey: keyof DeveloperProfile['stats'], value: number) => {
    setFormData((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        [statKey]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  return (
    <div
      id="edit-profile-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="edit-profile-modal-card"
        className="relative w-full max-w-2xl bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden text-zinc-200"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-zinc-800 text-indigo-400 border border-zinc-700/60">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">
                Customize Profile
              </h2>
              <p className="text-xs text-zinc-400">
                Update your details, GitHub handle, and headline.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 max-h-[70vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Full Name
              </label>
              <input
                id="edit-profile-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                GitHub Username
              </label>
              <input
                id="edit-profile-github"
                type="text"
                required
                value={formData.githubUsername}
                onChange={(e) => handleChange('githubUsername', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-indigo-400 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Primary Role Title
            </label>
            <input
              id="edit-profile-title"
              type="text"
              required
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-3.5 py-2 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Specialty Subtitle
            </label>
            <input
              id="edit-profile-subtitle"
              type="text"
              value={formData.subTitle}
              onChange={(e) => handleChange('subTitle', e.target.value)}
              className="w-full px-3.5 py-2 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Bio Summary
            </label>
            <textarea
              id="edit-profile-bio"
              rows={3}
              value={formData.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              className="w-full px-3.5 py-2 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Contact Email
              </label>
              <input
                id="edit-profile-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Location
              </label>
              <input
                id="edit-profile-location"
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Availability
              </label>
              <input
                id="edit-profile-availability"
                type="text"
                value={formData.availability}
                onChange={(e) => handleChange('availability', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Years of Experience
              </label>
              <input
                id="edit-profile-years-exp"
                type="number"
                value={formData.yearsOfExperience}
                onChange={(e) => handleChange('yearsOfExperience', parseInt(e.target.value) || 0)}
                className="w-full px-3.5 py-2 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Metrics & Statistics */}
          <div className="pt-3 border-t border-zinc-800">
            <h4 className="text-xs font-semibold text-zinc-300 mb-3">Professional Impact & Metrics</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] text-zinc-400 mb-1">Projects Built</label>
                <input
                  type="number"
                  value={formData.stats.totalProjects}
                  onChange={(e) => handleStatsChange('totalProjects', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] text-zinc-400 mb-1">Years Experience</label>
                <input
                  type="number"
                  value={formData.yearsOfExperience}
                  onChange={(e) => handleChange('yearsOfExperience', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] text-zinc-400 mb-1">Technologies</label>
                <input
                  type="number"
                  value={formData.stats.technologiesMastered || 16}
                  onChange={(e) =>
                    handleStatsChange('technologiesMastered', parseInt(e.target.value) || 0)
                  }
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] text-zinc-400 mb-1">Deployments</label>
                <input
                  type="number"
                  value={formData.stats.productionDeployments || 12}
                  onChange={(e) =>
                    handleStatsChange('productionDeployments', parseInt(e.target.value) || 0)
                  }
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-zinc-950/80 border border-zinc-800 text-white"
                />
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onResetDefaults}
              className="px-3 py-1.5 text-xs font-medium rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-semibold rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
