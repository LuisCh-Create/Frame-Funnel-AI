import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Film, Target, TrendingUp, Sparkles, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { DETAILED_SERVICES } from '../data/siteData.ts';

interface ServicesPageProps {
  onOpenAudit: () => void;
  onOpenCalendly: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenAudit, onOpenCalendly }) => {
  const [activeTab, setActiveTab] = useState<string>('ai-commercials');

  const activeService = DETAILED_SERVICES.find((s) => s.id === activeTab) || DETAILED_SERVICES[0];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          Our Capabilities
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Systems Engineered for Velocity and Revenue.
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed">
          We dismantled the slow, expensive legacy agency model. Explore our five specialized services designed to give your brand unfair creative and algorithmic dominance.
        </p>
      </div>

      {/* Interactive Service Tab Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-[#1f1f28]">
        {DETAILED_SERVICES.map((service) => {
          const isSelected = service.id === activeTab;
          return (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-white text-black font-bold'
                  : 'bg-[#101016] text-neutral-400 hover:text-white hover:bg-[#181822]'
              }`}
            >
              {service.title}
            </button>
          );
        })}
      </div>

      {/* Active Service Showcase Card */}
      <div className="bg-[#0b0b10] border border-[#22222a] p-8 sm:p-12 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Service Spotlight
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              {activeService.title}
            </h2>
            <p className="text-base text-neutral-300 font-medium">{activeService.tagline}</p>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed font-sans">
            {activeService.overview}
          </p>

          <div className="space-y-3 pt-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
              Key Deliverables:
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {activeService.deliverables.map((d, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#12121a] border border-[#23232e] p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
              Business Outcome
            </span>
            <p className="text-sm font-semibold text-white leading-snug">
              {activeService.businessImpact}
            </p>
          </div>

          <div className="space-y-1 border-t border-[#1e1e28] pt-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
              Delivery Timeframe
            </span>
            <p className="text-sm font-mono text-neutral-200 font-medium">
              {activeService.timeframe}
            </p>
          </div>

          <div className="space-y-2 border-t border-[#1e1e28] pt-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
              Tech &amp; Production Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeService.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-mono bg-black/60 text-neutral-300 border border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={onOpenCalendly}
              className="w-full py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discuss {activeService.title}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenAudit}
              className="w-full py-3 border border-neutral-700 text-neutral-300 hover:text-white hover:border-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Free 20-Min Audit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comprehensive 5 Service Cards Grid */}
      <div className="space-y-12">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
            The Full Suite
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Detailed Service Breakdown
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DETAILED_SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="p-6 bg-[#0a0a0f] border border-[#202028] flex flex-col justify-between hover:border-neutral-500 transition-colors"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-neutral-400">0{idx + 1}.</span>
                <h4 className="text-xl font-display font-bold text-white">
                  {srv.title}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  {srv.overview}
                </p>
                <div className="space-y-2 pt-2 border-t border-[#1a1a22]">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                    Core Deliverables:
                  </span>
                  {srv.deliverables.slice(0, 3).map((d, dIdx) => (
                    <div key={dIdx} className="text-xs text-neutral-300 flex items-start gap-2">
                      <span className="text-neutral-500">&middot;</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#1a1a22] mt-6 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400">{srv.timeframe}</span>
                <button
                  onClick={onOpenCalendly}
                  className="text-xs font-semibold uppercase tracking-wider text-white hover:text-neutral-300 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
