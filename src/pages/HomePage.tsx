import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Play, CheckCircle2, ChevronRight, Sparkles, Film, BarChart3, ShieldCheck } from 'lucide-react';
import { SITE_COPY, COMPARISON_DATA, SERVICE_PILLARS, CASE_STUDIES, FAQ_LIST, CaseStudy } from '../data/siteData.ts';
import { images } from '../assets/images/index.ts';
import { VideoShowreelPlayer } from '../components/VideoShowreelPlayer.tsx';
import { RoasCalculator } from '../components/RoasCalculator.tsx';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenAudit: () => void;
  onOpenCalendly: () => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAudit,
  onOpenCalendly,
  onSelectCaseStudy,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* =========================================================
          HERO SECTION: Cinematic, High-Contrast, Apple x A24 Aesthetic
         ========================================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-[#1c1c24]">
        {/* Background Subtle Ambient Lighting & Film Stage Graphic */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img
            src={images.heroCinematic}
            alt="Cinematic production studio background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/90 via-[#070707]/95 to-[#070707]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Category / Position Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
            <span>FRAME &amp; FUNNEL</span>
            <span aria-hidden="true">&middot;</span>
            <span className="text-white font-medium">AI COMMERCIALS &amp; GROWTH STUDIO</span>
            <span aria-hidden="true">&middot;</span>
            <span>ADELAIDE &amp; GLOBAL</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] max-w-5xl mb-6 text-wrap-balance">
            Commercials That Look Like Films.
            <br />
            <span className="text-neutral-400 font-normal">Marketing That Performs Like Sales.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed mb-10">
            {SITE_COPY.heroSubheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              onClick={onOpenCalendly}
              className="px-8 py-4 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAudit}
              className="px-8 py-4 border border-neutral-700 hover:border-white text-white font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer bg-black/40 backdrop-blur-sm"
            >
              <span>Get a Creative Performance Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Cinema Showreel Reel */}
          <VideoShowreelPlayer
            onOpenAudit={onOpenAudit}
            onOpenCalendly={onOpenCalendly}
          />

          {/* Full-width 4-Column Proof & KPI Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-[#1c1c24]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                Tracked Revenue Generated
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1 tabular-nums">
                $18.4M+
              </div>
              <span className="text-xs text-neutral-500 mt-0.5 block">Across E-Com &amp; B2B</span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                Average Blended ROAS
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1 tabular-nums">
                4.18x
              </div>
              <span className="text-xs text-neutral-500 mt-0.5 block">Meta &amp; Google Ads</span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                AI Commercial Turnaround
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1 tabular-nums">
                72 Hours
              </div>
              <span className="text-xs text-neutral-500 mt-0.5 block">From Brief to 4K Cut</span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                Production Cost Reduction
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1 tabular-nums">
                -78%
              </div>
              <span className="text-xs text-neutral-500 mt-0.5 block">Zero Crew &amp; Studio Bloat</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: THE PROBLEM (The False Agency Trade-Off)
         ========================================================= */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 border-b border-[#1c1c24]">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            01. The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Most businesses are forced to choose between two broken models.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Trade-off 1 */}
          <div className="p-8 bg-[#0c0c11] border border-[#202028] relative group hover:border-neutral-600 transition-colors">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Trade-Off Option A
            </span>
            <h3 className="text-xl font-display font-bold text-neutral-300 mb-3">
              Beautiful creative that doesn't sell.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Traditional production companies quote $50,000 to $80,000 for a single shoot day. The video looks gorgeous on an award show screen, but has zero 3-second hook structure, zero angle testing, and zero understanding of paid algorithmic attribution. You spend five figures and make zero sales.
            </p>
          </div>

          {/* Trade-off 2 */}
          <div className="p-8 bg-[#0c0c11] border border-[#202028] relative group hover:border-neutral-600 transition-colors">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Trade-Off Option B
            </span>
            <h3 className="text-xl font-display font-bold text-neutral-300 mb-3">
              Marketing that sells but looks like everyone else's.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Performance marketing agencies run blurry iPhone UGC clips and Canva templates. They might get initial cheap clicks, but your ad creative burns out within 14 days, your customer acquisition cost skyrockets, and your brand equity gets permanently degraded.
            </p>
          </div>
        </div>

        {/* Elimination Banner */}
        <div className="p-8 sm:p-12 bg-white text-black flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest font-bold text-neutral-600">
              The Frame &amp; Funnel Solution
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-black">
              We eliminate that trade-off forever.
            </h3>
            <p className="text-sm text-neutral-800 leading-relaxed">
              Every frame serves a purpose. Every funnel drives results. Hollywood storytelling paired with direct-response architecture.
            </p>
          </div>
          <button
            onClick={onOpenCalendly}
            className="px-6 py-3.5 bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors inline-flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>See How We Do It</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: WHAT WE DO (3 Pillars: FRAME, FUNNEL, FRAME+FUNNEL)
         ========================================================= */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 border-b border-[#1c1c24]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              02. What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Three Pillars of Measurable Scale.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View All Detailed Deliverables</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICE_PILLARS.map((pillar, idx) => {
            const isFeatured = pillar.name === 'FRAME + FUNNEL';
            return (
              <div
                key={pillar.name}
                className={`p-8 flex flex-col justify-between border transition-all ${
                  isFeatured
                    ? 'bg-[#101016] border-white/60 shadow-xl relative'
                    : 'bg-[#0a0a0e] border-[#22222a] hover:border-neutral-500'
                }`}
              >
                <div>
                  {isFeatured && (
                    <span className="inline-block px-2.5 py-0.5 mb-4 text-[11px] font-mono uppercase tracking-wider bg-white text-black font-semibold">
                      Full Growth Engine
                    </span>
                  )}
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {pillar.trademark}
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mb-4">{pillar.tagline}</p>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                      Core Capabilities:
                    </span>
                    {pillar.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1e1e26] space-y-4">
                  <div className="text-[11px] text-neutral-400">
                    <span className="text-neutral-500 block">Typical Impact:</span>
                    <span className="text-neutral-200 font-medium">{pillar.outcomes[0]}</span>
                  </div>
                  <button
                    onClick={onOpenCalendly}
                    className={`w-full py-3 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'border border-neutral-700 text-white hover:border-white'
                    }`}
                  >
                    <span>Inquire About {pillar.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          SECTION 4: WHY WE'RE DIFFERENT (Comparison Matrix)
         ========================================================= */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 border-b border-[#1c1c24]">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            03. The Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Why Frame &amp; Funnel is in a category of one.
          </h2>
          <p className="text-base text-neutral-400 mt-4">
            We are not a digital agency. We are not a video production house. We built a studio where cinema aesthetics and mathematical ad buying exist in the exact same feedback loop.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto border border-[#22222a] bg-[#09090d]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1f1f28] bg-[#121218]">
                <th className="p-4 sm:p-5 font-mono uppercase tracking-wider text-neutral-400 font-semibold w-1/4">
                  Comparison Vector
                </th>
                <th className="p-4 sm:p-5 font-mono uppercase tracking-wider text-neutral-400 font-semibold w-1/4">
                  Traditional Agency
                </th>
                <th className="p-4 sm:p-5 font-mono uppercase tracking-wider text-neutral-400 font-semibold w-1/4">
                  Production Company
                </th>
                <th className="p-4 sm:p-5 font-mono uppercase tracking-wider text-white bg-white/10 font-bold w-1/4">
                  Frame &amp; Funnel Studio
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#181820]">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-white">
                    {row.criterion}
                  </td>
                  <td className="p-4 sm:p-5 text-neutral-400">
                    {row.traditionalAgency}
                  </td>
                  <td className="p-4 sm:p-5 text-neutral-400">
                    {row.productionCompany}
                  </td>
                  <td className="p-4 sm:p-5 text-white font-medium bg-white/[0.03]">
                    {row.frameAndFunnel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE CALCULATOR: Creative Fatigue & Upside
         ========================================================= */}
      <section className="max-w-7xl mx-auto px-6">
        <RoasCalculator onOpenAudit={onOpenAudit} />
      </section>

      {/* =========================================================
          SECTION 5: FEATURED RESULTS & CASE STUDIES
         ========================================================= */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 border-b border-[#1c1c24]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              04. Proof of Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Commercials that generated eight figures.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('case-studies')}
            className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Explore All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => {
            const currentImg = images[study.imageKey];
            return (
              <div
                key={study.id}
                className="bg-[#0b0b0f] border border-[#202028] overflow-hidden group flex flex-col justify-between hover:border-neutral-500 transition-colors cursor-pointer"
                onClick={() => onSelectCaseStudy(study)}
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={currentImg}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-[11px] font-mono text-white">
                      {study.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs font-mono text-neutral-400">
                      {study.client}
                    </div>
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-neutral-200 transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#1c1c24] mt-4 flex items-center justify-between">
                  <div className="text-xs font-mono">
                    <span className="text-neutral-500 block text-[10px] uppercase">Key Metric</span>
                    <span className="text-base font-bold text-white tabular-nums">
                      {study.metrics[0].value}
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          SECTION 6: FOUNDER STORY
         ========================================================= */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 border-b border-[#1c1c24]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden bg-black border border-[#24242e] shadow-2xl">
              <img
                src={images.founderPortrait}
                alt="Founder of Frame & Funnel"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-110 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                  Studio Founder
                </span>
                <span className="text-xl font-display font-bold text-white">
                  Filmmaker turned Growth Strategist
                </span>
                <span className="text-xs text-neutral-400 block mt-1">
                  Adelaide, South Australia
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              05. Founder Origin
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              {SITE_COPY.founderHeadline}
            </h2>

            <div className="space-y-4 text-base text-neutral-300 leading-relaxed font-sans">
              <p>{SITE_COPY.founderStoryP1}</p>
              <p>{SITE_COPY.founderStoryP2}</p>
              <p className="text-white font-medium">{SITE_COPY.founderStoryP3}</p>
            </div>

            <div className="p-6 bg-[#101015] border border-[#202028] space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                The Studio Standard:
              </div>
              <p className="text-sm text-neutral-200 italic">
                "We don't make videos to win trophies. We make commercials to scale customer lifetime value, drive discovery calls, and build enduring brands that dominate their category."
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Founder Manifesto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ ACCORDION SECTION
         ========================================================= */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 border-b border-[#1c1c24]">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
            06. Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Clear Answers for Ambitious Founders.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="border border-[#202028] bg-[#0c0c10] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none"
                >
                  <span className="text-base font-display font-bold text-white">
                    {faq.question}
                  </span>
                  <span className="font-mono text-sm text-neutral-400 shrink-0">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-neutral-300 leading-relaxed border-t border-[#1a1a22] pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          SECTION 7: FINAL CTA (Let's Turn Attention Into Revenue)
         ========================================================= */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
            Ready To Scale?
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight">
            Let's Turn Attention Into Revenue.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Stop burning budget on generic ads that degrade your brand. Partner with an AI commercials and growth studio built for measurable outcomes.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenCalendly}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 border border-neutral-700 text-white font-semibold text-xs uppercase tracking-wider hover:border-white transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Free 20-Min Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-neutral-400" />
              <span>Zero Long-Term Lock-Ins</span>
            </div>
            <span aria-hidden="true">&middot;</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-neutral-400" />
              <span>Hollywood Storytelling, Adelaide Pricing</span>
            </div>
            <span aria-hidden="true">&middot;</span>
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-neutral-400" />
              <span>Transparent Attribution</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
