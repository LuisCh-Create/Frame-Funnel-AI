import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowUpRight, AlertCircle, Sparkles, Building2, ShoppingBag, Award } from 'lucide-react';
import { AUDIENCE_PROFILES, AudienceProfile } from '../data/siteData.ts';

interface WhoWeHelpPageProps {
  onOpenAudit: () => void;
  onOpenCalendly: () => void;
}

export const WhoWeHelpPage: React.FC<WhoWeHelpPageProps> = ({ onOpenAudit, onOpenCalendly }) => {
  // Interactive 60-second diagnostic state
  const [selectedProfile, setSelectedProfile] = useState<string>('ecommerce');
  const [quizSpend, setQuizSpend] = useState<string>('$10k-$30k');
  const [quizBottleneck, setQuizBottleneck] = useState<string>('Creative Fatigue');
  const [diagnosticResult, setDiagnosticResult] = useState<string | null>(null);

  const activeProfile = AUDIENCE_PROFILES.find((p) => p.id === selectedProfile) || AUDIENCE_PROFILES[0];

  const handleRunDiagnostic = () => {
    let diagnosis = '';
    if (quizBottleneck === 'Creative Fatigue') {
      diagnosis = 'Your primary bottleneck is Creative Velocity. At your spend level, your audience saturates ad angles in 12–14 days. You need an automated AI commercial pipeline delivering 6+ new hooks per week to drop CAC by 30-40%.';
    } else if (quizBottleneck === 'Low Conversion Rate') {
      diagnosis = 'Your primary bottleneck is Trust & Sensory Framing. Cold traffic lands on a generic page with no cinematic sensory hook. Re-architecting your hero section with high-contrast AI video assets typically lifts conversion rates by 45%.';
    } else {
      diagnosis = 'Your primary bottleneck is Authority Positioning. Prospects view your offer as a commodity. Deploying a 3-minute cinematic Founder Film pre-frames your prestige and eliminates fee pushback.';
    }
    setDiagnosticResult(diagnosis);
  };

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          Specialized Categories
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Engineered for Three Types of Ambitious Leaders.
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed">
          We do not try to serve everyone. We build custom commercial and growth engines specifically for E-Commerce founders, high-ticket consultants, and market-leading Adelaide SMEs.
        </p>
      </div>

      {/* Profile Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {AUDIENCE_PROFILES.map((prof) => {
          const isSelected = prof.id === selectedProfile;
          return (
            <button
              key={prof.id}
              onClick={() => {
                setSelectedProfile(prof.id);
                setDiagnosticResult(null);
              }}
              className={`p-6 text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'border-white bg-[#14141c] text-white shadow-lg'
                  : 'border-[#22222a] bg-[#0c0c10] text-neutral-400 hover:border-neutral-600 hover:text-white'
              }`}
            >
              <span className="text-[11px] font-mono uppercase tracking-wider block text-neutral-400 mb-1">
                {prof.revenueTarget}
              </span>
              <h3 className="text-xl font-display font-bold text-white mb-1">
                {prof.title}
              </h3>
              <p className="text-xs text-neutral-400">{prof.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Selected Audience Profile Deep Dive */}
      <div className="bg-[#0b0b10] border border-[#22222a] p-8 sm:p-12 mb-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#1e1e28]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Audience Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mt-1">
              {activeProfile.title}
            </h2>
            <p className="text-sm text-neutral-400 mt-1">{activeProfile.subtitle}</p>
          </div>
          <div className="bg-[#15151c] border border-[#252530] px-4 py-2.5 text-xs font-mono">
            <span className="text-neutral-400 block text-[10px] uppercase">Benchmark Target</span>
            <span className="text-base font-bold text-white tabular-nums">{activeProfile.benchmarkRoas}</span>
          </div>
        </div>

        {/* 2-Column: Pain Points vs Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-[#1e1e28]">
          {/* Pain Points */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Current Obstacles &amp; Growth Caps</span>
            </div>
            <div className="space-y-3">
              {activeProfile.painPoints.map((point, idx) => (
                <div key={idx} className="p-3.5 bg-[#121218] border border-[#202028] text-xs text-neutral-300 flex items-start gap-3">
                  <span className="font-mono text-neutral-500">0{idx + 1}.</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Solutions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <Sparkles className="w-4 h-4 text-white" />
              <span>How Frame &amp; Funnel Solves It</span>
            </div>
            <div className="space-y-3">
              {activeProfile.ourSolutions.map((sol, idx) => (
                <div key={idx} className="p-3.5 bg-[#121218] border border-white/20 text-xs text-white flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
              Expected Client Outcomes:
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-200">
              {activeProfile.expectedOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-white font-bold">&check;</span>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onOpenCalendly}
            className="px-6 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Book Growth Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive 60-Second Bottleneck Self-Diagnosis */}
      <div className="p-8 sm:p-12 bg-[#0d0d12] border border-[#23232c] my-16">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
            Interactive Diagnostic
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Diagnose Your Growth Bottleneck in 60 Seconds
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            Answer two quick questions to see where your advertising system is losing margin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Monthly Ad Budget
            </label>
            <select
              value={quizSpend}
              onChange={(e) => {
                setQuizSpend(e.target.value);
                setDiagnosticResult(null);
              }}
              className="w-full bg-[#15151c] border border-[#2b2b36] p-3 text-sm text-white focus:outline-none focus:border-white"
            >
              <option value="Under $10k">Under AUD $10k/mo</option>
              <option value="$10k-$30k">AUD $10k – $30k/mo</option>
              <option value="$30k-$80k">AUD $30k – $80k/mo</option>
              <option value="$80k+">AUD $80k+/mo</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Biggest Problem Right Now
            </label>
            <select
              value={quizBottleneck}
              onChange={(e) => {
                setQuizBottleneck(e.target.value);
                setDiagnosticResult(null);
              }}
              className="w-full bg-[#15151c] border border-[#2b2b36] p-3 text-sm text-white focus:outline-none focus:border-white"
            >
              <option value="Creative Fatigue">Creative Fatigue (Ads burn out after 2 weeks)</option>
              <option value="Low Conversion Rate">Low Conversion Rate (Clicks don't buy)</option>
              <option value="Weak Authority">Weak Authority (Hard to command premium pricing)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleRunDiagnostic}
            className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Generate Diagnostic Recommendation
          </button>
          <span className="text-xs text-neutral-500">Calculated instantly from our live agency database.</span>
        </div>

        {diagnosticResult && (
          <div className="mt-6 p-6 bg-[#161620] border border-white/20 animate-in fade-in duration-200 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 block font-semibold">
              Diagnostic Analysis Complete
            </span>
            <p className="text-sm text-neutral-200 leading-relaxed font-sans font-medium">
              {diagnosticResult}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="px-5 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Claim Free 20-Min Audit To Solve This
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
