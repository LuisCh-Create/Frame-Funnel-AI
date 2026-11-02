import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Film, Target, TrendingUp, Sparkles } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalendly: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose, onOpenCalendly }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    websiteUrl: '',
    monthlyAdSpend: '$5,000 – $20,000/mo',
    primaryGoal: 'Scale ROAS & Stop Creative Fatigue',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const deliverables = [
    { title: 'Ad Creative Review', desc: 'Forensic inspection of your 3-second hook rates, visual fatigue patterns, and video narrative arc.' },
    { title: 'Funnel & CRO Review', desc: 'Landing page drop-off analysis, checkout friction points, and average order value (AOV) levers.' },
    { title: 'Competitor Angle Audit', desc: 'Revealing the exact ads and offers your competitors are scaling right now on Meta & Google.' },
    { title: 'Conversion Opportunities', desc: 'Pinpointing 3 high-impact fixes you can deploy immediately to decrease Customer Acquisition Cost.' },
    { title: 'Custom Growth Roadmap', desc: 'A step-by-step recommendation on AI commercial deployment and performance media structure.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0c0c10] border border-[#26262e] text-white shadow-2xl p-6 sm:p-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                Complimentary 20-Minute Deep Dive
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white">
                Get Your Creative Performance Audit
              </h2>
              <p className="text-sm text-neutral-400 mt-2 max-w-xl">
                We dissect your current video ads, Meta/Google ad account structure, and landing pages to identify where you are leaking revenue.
              </p>
            </div>

            {/* 5 Deliverables overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 bg-[#121218] p-4 border border-[#1e1e26]">
              {deliverables.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-200 block">{item.title}</span>
                    <span className="text-neutral-400 leading-snug">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jordan Hayes"
                    className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jordan@yourbrand.com.au"
                    className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                    Website or Store URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://yourbrand.com.au"
                    className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                    Phone Number (for SMS confirmation)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+61 400 123 456"
                    className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                    Monthly Paid Ad Spend
                  </label>
                  <select
                    value={formData.monthlyAdSpend}
                    onChange={(e) => setFormData({ ...formData, monthlyAdSpend: e.target.value })}
                    className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Under $5,000/mo">Under $5,000/mo (Early stage)</option>
                    <option value="$5,000 – $20,000/mo">$5,000 – $20,000/mo</option>
                    <option value="$20,000 – $50,000/mo">$20,000 – $50,000/mo</option>
                    <option value="$50,000 – $150,000+/mo">$50,000 – $150,000+/mo (Scaling)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-1.5">
                    Primary Bottleneck
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full bg-[#15151c] border border-[#2b2b36] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Scale ROAS & Stop Creative Fatigue">Scale ROAS &amp; Stop Creative Fatigue</option>
                    <option value="Need Cinematic Video Ads That Convert">Need Cinematic Video Ads That Convert</option>
                    <option value="High CAC & Falling Margins">High CAC &amp; Falling Margins</option>
                    <option value="Need Authority Positioning & High-Ticket Leads">Need Authority Positioning &amp; Leads</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>100% confidential. No spam, ever.</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-neutral-200 text-black font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Request Free Audit'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-white">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Audit Requested Successfully
              </span>
              <h3 className="text-2xl font-display font-bold text-white">
                We're Reviewing Your Brand
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Thank you, {formData.name}. Our creative and media directors have received your details for <span className="text-white font-medium">{formData.websiteUrl || 'your website'}</span>.
              </p>
            </div>

            <div className="bg-[#15151c] p-6 max-w-md mx-auto text-left border border-[#2b2b36] space-y-3 text-xs text-neutral-300">
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Next Steps:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="font-mono text-white">01.</span>
                  <span>We perform an initial scan of your public ad library and site speed within 4 hours.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono text-white">02.</span>
                  <span>To claim your priority 20-minute video walkthrough slot immediately, lock in a time on our live calendar below.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenCalendly();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Schedule Video Walkthrough Now
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 border border-neutral-700 text-neutral-300 hover:text-white hover:border-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
