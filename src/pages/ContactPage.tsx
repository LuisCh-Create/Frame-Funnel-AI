import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, ShieldCheck, Clock, Calendar } from 'lucide-react';
import { SITE_COPY } from '../data/siteData.ts';

interface ContactPageProps {
  onOpenCalendly: () => void;
  onOpenAudit: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenCalendly, onOpenAudit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    websiteUrl: '',
    monthlyAdSpend: 'AUD $10k – $30k/mo',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          Direct Studio Access
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Let's Talk Revenue &amp; Commercials.
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed font-sans">
          You don't talk to junior account coordinators or pushy sales reps. You speak directly with our senior creative and growth directors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Options & Studio Details */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Schedule Feature Box */}
          <div className="p-8 bg-[#101017] border border-white/20 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <Calendar className="w-4 h-4 text-white" />
              <span>Direct Strategy Booking</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
              Prefer to book a 30-min call right now?
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Lock in a time slot directly on our studio calendar to review your creative and paid media.
            </p>
            <button
              onClick={onOpenCalendly}
              className="w-full py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Launch Live Booking Calendar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Adelaide Studio Details */}
          <div className="p-6 bg-[#0c0c11] border border-[#202028] space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              Studio Headquarters
            </span>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Adelaide Office</span>
                  <span>{SITE_COPY.location.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Phone</span>
                  <span>{SITE_COPY.location.phone}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Direct Email</span>
                  <span>{SITE_COPY.location.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-[#0a0a0f] border border-[#1e1e26] text-xs text-neutral-400 space-y-2">
            <span className="font-mono text-white uppercase tracking-wider block text-[11px]">
              Fast Response Protocol:
            </span>
            <p>
              All direct inquiries are answered within 4 business hours. If you are an Adelaide business, we welcome face-to-face meetings at our North Terrace studio.
            </p>
          </div>
        </div>

        {/* Right: Message & Qualification Form */}
        <div className="lg:col-span-7 bg-[#0d0d12] border border-[#262632] p-8 sm:p-10 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                  Send A Message
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  Tell Us About Your Brand
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Liam Foster"
                    className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="liam@brand.com"
                    className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Company / Store Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apex Living"
                    className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://apexliving.com.au"
                    className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Monthly Paid Advertising Spend
                </label>
                <select
                  value={formData.monthlyAdSpend}
                  onChange={(e) => setFormData({ ...formData, monthlyAdSpend: e.target.value })}
                  className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                >
                  <option value="Under AUD $5,000/mo">Under AUD $5,000/mo</option>
                  <option value="AUD $5,000 – $20,000/mo">AUD $5,000 – $20,000/mo</option>
                  <option value="AUD $20,000 – $60,000/mo">AUD $20,000 – $60,000/mo</option>
                  <option value="AUD $60,000+/mo">AUD $60,000+/mo (Scaling)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  What is your primary commercial or growth goal?
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you are currently selling, your main customer acquisition bottleneck, and what you want to achieve over the next 90 days..."
                  className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>Strict NDA and data protection.</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Direct Message'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-white">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-white">
                  Message Received
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you, {formData.name}. Our Growth Director will review your brand details and reply to <span className="text-white font-medium">{formData.email}</span> within 4 hours.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenCalendly}
                  className="px-6 py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Or Pick A Live Call Slot Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
