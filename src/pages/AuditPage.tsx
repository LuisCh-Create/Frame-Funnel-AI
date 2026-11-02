import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Film, Target, TrendingUp, Sparkles, AlertTriangle, Clock } from 'lucide-react';

interface AuditPageProps {
  onOpenCalendly: () => void;
}

export const AuditPage: React.FC<AuditPageProps> = ({ onOpenCalendly }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    websiteUrl: '',
    adSpend: '$5,000 – $20,000/mo',
    primaryGoal: 'Creative Fatigue & ROAS Drop',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const auditFeatures = [
    {
      num: '01',
      title: 'Ad Creative Review',
      desc: 'We analyze your 3-second hook rate, thumb-stop ratio, visual fatigue curves, and video storytelling pacing across Meta and Google.',
    },
    {
      num: '02',
      title: 'Funnel & Landing Page Review',
      desc: 'We inspect mobile page load speeds, sensory hierarchy, social proof adjacency, and checkout drop-off friction points.',
    },
    {
      num: '03',
      title: 'Competitor Angle Intelligence',
      desc: 'We map the exact angles, hooks, and offers your competitors are spending five figures a month on right now.',
    },
    {
      num: '04',
      title: 'Conversion Opportunities',
      desc: 'We uncover 3 high-impact fixes you can deploy immediately to lower your Customer Acquisition Cost (CAC) by up to 35%.',
    },
    {
      num: '05',
      title: 'Custom Growth Roadmap',
      desc: 'A prioritized action blueprint covering AI commercial concepts, Advantage+ account structure, and revenue targets.',
    },
  ];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          Complimentary Diagnostic Engine
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-tight">
          Free 20-Minute Creative Performance Audit.
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 mt-4 max-w-xl mx-auto leading-relaxed">
          Stop guessing why your ROAS is plateauing. Let our creative directors and media buyers dissect your live ads, funnels, and competitors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto mb-20">
        {/* Left Column: What the Audit Delivers */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              What Is Included
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              A forensic teardown of your ad engine.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              This is not an automated scanner report or a generic PDF checklist. A senior director spends 45 minutes pre-analyzing your brand, then walks you through every bottleneck live on a 20-minute video call.
            </p>
          </div>

          <div className="space-y-4">
            {auditFeatures.map((feat) => (
              <div
                key={feat.num}
                className="p-5 bg-[#0a0a0f] border border-[#202028] flex items-start gap-4 hover:border-neutral-600 transition-colors"
              >
                <span className="font-mono text-base font-bold text-white shrink-0">
                  {feat.num}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-display font-bold text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Strip */}
          <div className="p-6 bg-[#101018] border border-[#232330] flex items-center gap-4 text-xs text-neutral-300">
            <ShieldCheck className="w-6 h-6 text-white shrink-0" />
            <div>
              <span className="font-semibold text-white block">Zero Pitch Guarantee:</span>
              <span>If we don't deliver at least 3 immediately actionable insights that can improve your revenue, we will send $100 AUD directly to your brand.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Form */}
        <div className="lg:col-span-5 bg-[#0d0d12] border border-[#262632] p-8 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                  Step 1 of 2
                </span>
                <h3 className="text-xl font-display font-bold text-white">
                  Apply For Your Audit
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Limited to 5 brand audits per week to preserve quality.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Campbell"
                  className="w-full bg-[#15151c] border border-[#2c2c38] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-[#15151c] border border-[#2c2c38] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Website / Store URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  placeholder="https://yourbrand.com.au"
                  className="w-full bg-[#15151c] border border-[#2c2c38] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+61 400 000 000"
                  className="w-full bg-[#15151c] border border-[#2c2c38] px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Current Monthly Ad Spend
                </label>
                <select
                  value={formData.adSpend}
                  onChange={(e) => setFormData({ ...formData, adSpend: e.target.value })}
                  className="w-full bg-[#15151c] border border-[#2c2c38] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                >
                  <option value="Under $5,000/mo">Under AUD $5,000/mo</option>
                  <option value="$5,000 – $20,000/mo">AUD $5,000 – $20,000/mo</option>
                  <option value="$20,000 – $60,000/mo">AUD $20,000 – $60,000/mo</option>
                  <option value="$60,000+/mo">AUD $60,000+/mo</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  {isSubmitting ? 'Submitting Details...' : 'Book 20-Minute Audit'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-6">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto text-white">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold text-white">
                  Application Accepted
                </h3>
                <p className="text-xs text-neutral-300">
                  We're preparing the preliminary creative review for <span className="text-white font-medium">{formData.websiteUrl}</span>.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenCalendly}
                  className="w-full py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Select Your Walkthrough Time Slot
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
