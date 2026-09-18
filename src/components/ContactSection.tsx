import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a brief message.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormSubmitted(true);
    }
  };

  const openPrefilledEmail = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Heena,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>07 — CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Let's connect.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            I'm always open to learning, collaborating, participating in new opportunities, and connecting with people who share an interest in technology and data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Direct Contact Info & Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-xl space-y-6">
              <h3 className="font-display font-bold text-xl text-white">
                Contact Information
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    Email
                  </span>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1 p-1 rounded transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-display font-semibold text-sm sm:text-base text-cyan-300 hover:text-cyan-200 transition-colors block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    Phone
                  </span>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1 p-1 rounded transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-mono font-semibold text-sm sm:text-base text-slate-100 hover:text-cyan-300 transition-colors block"
                >
                  {PERSONAL_INFO.formattedPhone}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Location
                </span>
                <span className="font-display font-semibold text-sm sm:text-base text-slate-200 block">
                  {PERSONAL_INFO.location}
                </span>
              </div>

              {/* Primary Direct Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="direct-email-btn"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full py-3.5 px-4 rounded-xl font-display font-semibold text-sm tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-slate-950" />
                  <span>EMAIL ME</span>
                </a>

                <a
                  id="direct-call-btn"
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="w-full py-3.5 px-4 rounded-xl font-display font-semibold text-sm tracking-wide text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>CALL ME</span>
                </a>
              </div>
            </div>

            {/* Academic Commitment Note */}
            <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 text-xs text-slate-400 leading-relaxed">
              <span className="font-display font-semibold text-slate-300 block mb-1">
                Student Communication Notice:
              </span>
              Academic discussions, project collaborations, and technology dialogues are warmly welcome. Direct inquiries will be answered promptly via email or phone.
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form to prepare a direct inquiry.
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-cyan-400" />
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-slate-950/80 border border-cyan-500/40 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Message Prepared
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Since this website runs purely on the client side without an external mail server, you can launch your email client with your message pre-filled with one click:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={openPrefilledEmail}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-display font-semibold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    >
                      <span>Open in Email App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl font-mono text-xs text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500/60 focus:border-red-400'
                          : 'border-slate-800 focus:border-cyan-500/60'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-400'
                          : 'border-slate-800 focus:border-cyan-500/60'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Write your note or project inquiry..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500/60 focus:border-red-400'
                          : 'border-slate-800 focus:border-cyan-500/60'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-display font-semibold text-sm tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>SEND MESSAGE</span>
                    </button>
                    <p className="text-[11px] font-mono text-slate-500 text-center mt-2.5">
                      Client-validated form with instant email draft option.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
