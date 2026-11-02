import React from 'react';
import { X, CheckCircle2, TrendingUp, ArrowRight, Quote } from 'lucide-react';
import { CaseStudy } from '../data/siteData.ts';
import { images } from '../assets/images/index.ts';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenCalendly: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenCalendly,
}) => {
  if (!caseStudy) return null;

  const currentImage = images[caseStudy.imageKey];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0c0c11] border border-[#24242d] text-white shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span>{caseStudy.category}</span>
            <span>&middot;</span>
            <span>{caseStudy.client}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {caseStudy.title}
          </h2>
          <p className="text-base text-neutral-300">{caseStudy.tagline}</p>
        </div>

        {/* Hero Visual */}
        <div className="relative w-full aspect-[2.39/1] sm:aspect-video mb-8 overflow-hidden bg-black border border-[#22222a]">
          <img
            src={currentImage}
            alt={caseStudy.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 bg-black/70 px-2.5 py-1">
              Production Master Still
            </span>
          </div>
        </div>

        {/* Verified Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-[#14141c] border border-[#23232c] mb-8">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="space-y-0.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                {m.label}
              </span>
              <div className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                {m.value}
              </div>
              <span className="text-[11px] text-neutral-500 block">{m.sublabel}</span>
            </div>
          ))}
        </div>

        {/* Narrative Deep Dive */}
        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed border-t border-[#1c1c24] pt-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-2">
              01. The Challenge
            </h4>
            <p className="text-neutral-300">{caseStudy.challenge}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-2">
              02. Growth Strategy &amp; Funnel Architecture
            </h4>
            <p className="text-neutral-300">{caseStudy.strategy}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-2">
              03. Creative Execution &amp; AI Neural Pipeline
            </h4>
            <p className="text-neutral-300">{caseStudy.creativeExecution}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-2">
              04. Revenue Impact &amp; Scale
            </h4>
            <p className="text-neutral-300">{caseStudy.results}</p>
            <div className="mt-3 p-3 bg-white/5 border border-white/10 font-mono text-xs text-emerald-300">
              Verified Revenue Impact: {caseStudy.revenueImpact}
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="p-5 bg-[#121218] border border-[#22222a] relative">
            <Quote className="w-6 h-6 text-neutral-600 mb-2 opacity-50" />
            <blockquote className="text-sm italic text-neutral-200">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="mt-3 text-xs">
              <span className="font-semibold text-white block">{caseStudy.testimonial.author}</span>
              <span className="text-neutral-400">{caseStudy.testimonial.role}</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 pt-6 border-t border-[#1c1c24] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-400">
            Want to see how this strategy applies to your store or practice?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenCalendly();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book A Strategy Call For Your Brand</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
