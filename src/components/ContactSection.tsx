import React, { useState } from 'react';
import {
  Mail,
  Send,
  Github,
  MapPin,
  Clock,
  Check,
  Copy,
  MessageSquare,
  FileDown,
} from 'lucide-react';
import { DeveloperProfile } from '../types';

interface ContactSectionProps {
  profile: DeveloperProfile;
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  profile,
  onOpenResume,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-time Engineering Role',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Full-time Engineering Role',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#090A0F] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-2">
                <Mail className="w-3.5 h-3.5" />
                <span>CONTACT & CONNECT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Let's Build Together
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
                I'm open to discussing full-time software engineering roles, open-source projects, or consulting on technical architectures.
              </p>
            </div>

            {/* Email Card with Copy button */}
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3 truncate">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 shrink-0">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] text-zinc-500 font-medium">Direct Email</div>
                  <div className="text-sm font-medium text-white truncate">
                    {profile.email}
                  </div>
                </div>
              </div>

              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 text-xs font-medium rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700/60 flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Details List */}
            <div className="space-y-2.5 text-sm">
              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-center gap-3 text-zinc-300">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-center gap-3 text-zinc-300">
                <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>UTC+5:30 (Available for remote overlap worldwide)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-center gap-3 text-zinc-300">
                <Github className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>github.com/{profile.githubUsername}</span>
              </div>
            </div>

            {/* Resume button */}
            <div>
              <button
                id="contact-view-resume-btn"
                onClick={onOpenResume}
                className="w-full py-3 px-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 text-sm font-medium flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-sm">
              <h3 className="text-base font-semibold text-white mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out the form below and I will respond to your inquiry within 24 hours.
              </p>

              {status === 'success' ? (
                <div className="py-10 text-center space-y-3 rounded-xl bg-zinc-950/60 border border-zinc-800 p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
                    Thank you for reaching out! Your message was sent to {profile.email}.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-3 px-4 py-2 text-xs font-medium rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Subject
                    </label>
                    <select
                      id="contact-subject-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-indigo-500 cursor-pointer transition-colors"
                    >
                      <option value="Full-time Engineering Role" className="bg-zinc-900">Full-time Engineering Role</option>
                      <option value="Architecture Consulting" className="bg-zinc-900">Systems Architecture Consulting</option>
                      <option value="Open Source Collaboration" className="bg-zinc-900">Open Source Collaboration</option>
                      <option value="General Technical Inquiry" className="bg-zinc-900">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message-textarea"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of your team, role, or project..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 resize-none transition-colors"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3 px-4 rounded-xl bg-zinc-100 hover:bg-white disabled:opacity-50 text-zinc-900 font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4 text-zinc-900" />
                    <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
