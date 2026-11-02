import React from 'react';
import { ArrowRight, ArrowUpRight, Camera, Film, TrendingUp, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { SITE_COPY } from '../data/siteData.ts';
import { images } from '../assets/images/index.ts';

interface AboutPageProps {
  onOpenAudit: () => void;
  onOpenCalendly: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenAudit, onOpenCalendly }) => {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          Our Origin &amp; Philosophy
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          From Filmmaker to Growth Strategist.
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 mt-4 leading-relaxed font-sans">
          Frame &amp; Funnel was born out of frustration with two broken industries: production companies that ignore revenue, and marketing agencies that create ugly creative.
        </p>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        {/* Founder Portrait & Studio Credentials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative aspect-[3/4] bg-black border border-[#242430] overflow-hidden shadow-2xl">
            <img
              src={images.founderPortrait}
              alt="Studio Founder"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-110 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                Creative Director &amp; Growth Partner
              </span>
              <span className="text-xl font-display font-bold text-white block mt-0.5">
                Frame &amp; Funnel Studio
              </span>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>North Terrace, Adelaide, South Australia</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#0c0c11] border border-[#202028] space-y-3 text-xs text-neutral-400 font-mono">
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span>Background</span>
              <span className="text-white">Commercial Cinema &amp; Direct Response</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800 py-2">
              <span>Experience</span>
              <span className="text-white">10+ Years Directing &amp; Scaling Spend</span>
            </div>
            <div className="flex justify-between pt-2">
              <span>Studio Base</span>
              <span className="text-white">Adelaide, SA &middot; Global Reach</span>
            </div>
          </div>
        </div>

        {/* Narrative Essay */}
        <div className="lg:col-span-7 space-y-8 text-base text-neutral-300 leading-relaxed font-sans">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              The Day I Walked Away From Traditional Commercial Production
            </h2>
            <p>
              For over a decade, I operated on commercial film sets. 35mm Arri cameras, 10-ton lighting trucks, twenty-person crews, craft service trailers, and six-figure production budgets for a single 30-second television spot.
            </p>
            <p>
              The frames looked like museum pieces. The client would shake hands at the wrap party, post the video on LinkedIn, and wait for sales to surge.
            </p>
            <p className="text-white font-medium">
              And almost every single time, nothing happened.
            </p>
            <p>
              Why? Because production companies know how to craft beautiful lighting, but they understand zero about consumer psychology, scroll-stopping hook velocity, hold rates, Meta algorithms, or checkout friction. When clients asked why the ad wasn't making sales, the production company would blame the media agency.
            </p>
          </div>

          <div className="space-y-4 border-t border-[#1c1c24] pt-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              The Agency Counter-Disaster
            </h2>
            <p>
              So I crossed over to performance marketing agencies. There, I discovered the opposite horror: media buyers spending $50,000 a week on Meta using pixelated Canva graphics and amateur smartphone selfies that destroyed the brand's luxury positioning.
            </p>
            <p>
              The ads fatigued in 10 days. Acquisition costs rose week after week. The agencies were trapped in a death spiral of running discount codes and low-grade creative because they had no ability to produce high-end video.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/20 text-white space-y-2">
            <h3 className="text-lg font-display font-bold">The Frame &amp; Funnel Thesis:</h3>
            <p className="text-sm text-neutral-200">
              "Every frame serves a purpose. Every funnel drives results. Hollywood storytelling paired with direct-response architecture."
            </p>
          </div>

          <div className="space-y-4 border-t border-[#1c1c24] pt-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Hollywood Storytelling. Adelaide Pricing. Measurable Growth.
            </h2>
            <p>
              By fusing senior cinema directing discipline with state-of-the-art AI neural pipelines, we generate Hollywood-caliber commercial sets, macro product lighting, and cinematic visuals in 72 hours—at a fraction of traditional production costs.
            </p>
            <p>
              Being headquartered on North Terrace in Adelaide gives us an unfair advantage: we avoid the inflated skyscraper overheads of Sydney and Melbourne, passing that capital efficiency directly to our clients in high-performance ad media.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={onOpenCalendly}
              className="px-6 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Work Directly With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenAudit}
              className="px-6 py-3.5 border border-neutral-700 text-neutral-300 hover:text-white hover:border-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Get Free 20-Min Audit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Core Studio Principles */}
      <div className="border-t border-[#1c1c24] pt-16">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
            Our Standards
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            The Rules We Refuse to Break
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0a0a0f] border border-[#202028] space-y-3">
            <span className="font-mono text-xs text-neutral-400">Rule 01</span>
            <h4 className="text-lg font-display font-bold text-white">Zero Vanity Awards</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              We never pitch work for advertising award ceremonies. The only metric that matters is whether your customer acquisition cost dropped and your net revenue grew.
            </p>
          </div>

          <div className="p-6 bg-[#0a0a0f] border border-[#202028] space-y-3">
            <span className="font-mono text-xs text-neutral-400">Rule 02</span>
            <h4 className="text-lg font-display font-bold text-white">Radical Transparency</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              No hidden markups, no locked ad accounts, and no mysterious agency retainers. You own 100% of your ad accounts, creative masters, and attribution data.
            </p>
          </div>

          <div className="p-6 bg-[#0a0a0f] border border-[#202028] space-y-3">
            <span className="font-mono text-xs text-neutral-400">Rule 03</span>
            <h4 className="text-lg font-display font-bold text-white">Continuous Creative Iteration</h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              A winning ad is just the beginning. We continuously slice, re-hook, and neural-iterate every top performer to keep ad fatigue at bay permanently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
