import React, { useState } from 'react';
import { ArrowRight, Quote, TrendingUp, Sparkles, Filter } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/siteData.ts';
import { images } from '../assets/images/index.ts';

interface CaseStudiesPageProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenCalendly: () => void;
  onOpenAudit: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onSelectCaseStudy,
  onOpenCalendly,
  onOpenAudit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'E-Commerce', 'Coaches & Experts', 'Adelaide SME'];

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => s.category === selectedCategory);

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          Verified Performance Records
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Where Cinema Craft Meets Eight-Figure Revenue.
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed">
          Inspect how our hybrid model of AI commercial production, Meta ads management, and CRO dismantled creative fatigue and scaled profitable growth.
        </p>
      </div>

      {/* Filter Tabs complying with frontend-design skill (§1.A functional buttons) */}
      <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-2 border-b border-[#1c1c24]">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-white text-black font-bold'
                  : 'bg-[#121218] text-neutral-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Case Studies */}
      <div className="space-y-16">
        {filteredStudies.map((study, idx) => {
          const currentImg = images[study.imageKey];
          return (
            <div
              key={study.id}
              className="bg-[#0b0b10] border border-[#22222a] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch hover:border-neutral-500 transition-colors"
            >
              {/* Media Still */}
              <div
                className="lg:col-span-5 relative bg-black aspect-video lg:aspect-auto cursor-pointer group"
                onClick={() => onSelectCaseStudy(study)}
              >
                <img
                  src={currentImg}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-white">
                  {study.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-sm p-3 text-xs text-white flex items-center justify-between">
                  <span className="font-mono text-[11px]">Click to inspect full case study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text & Metrics Column */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <span>{study.client}</span>
                    <span>&middot;</span>
                    <span className="text-white font-medium">{study.revenueImpact}</span>
                  </div>

                  <h2
                    className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight cursor-pointer hover:text-neutral-200 transition-colors"
                    onClick={() => onSelectCaseStudy(study)}
                  >
                    {study.title}
                  </h2>

                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    {study.tagline}
                  </p>

                  {/* 4-Metric Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#1a1a24]">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                          {m.label}
                        </span>
                        <span className="text-lg font-mono font-bold text-white tabular-nums">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-neutral-400 block">{m.sublabel}</span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial preview */}
                  <div className="p-4 bg-[#121218] border-l-0 border border-[#202028] text-xs text-neutral-300 italic">
                    "{study.testimonial.quote}"
                    <span className="block mt-1 font-semibold text-neutral-200 not-italic">
                      — {study.testimonial.author}, {study.testimonial.role}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1a1a24] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectCaseStudy(study)}
                    className="px-5 py-2.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>View Full Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenCalendly}
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Replicate For Your Brand</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 p-8 sm:p-12 bg-white text-black flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold">
            Next Milestone
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-black">
            Want your brand featured as our next case study?
          </h3>
          <p className="text-sm text-neutral-800">
            Let's build a dedicated AI commercial and paid media sprint for your business.
          </p>
        </div>
        <button
          onClick={onOpenCalendly}
          className="px-6 py-3.5 bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
        >
          Book Discovery Call
        </button>
      </div>
    </div>
  );
};
