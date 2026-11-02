import React, { useState } from 'react';
import { TrendingUp, AlertTriangle, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

interface RoasCalculatorProps {
  onOpenAudit: () => void;
}

export const RoasCalculator: React.FC<RoasCalculatorProps> = ({ onOpenAudit }) => {
  const [spend, setSpend] = useState<number>(25000);
  const [currentRoas, setCurrentRoas] = useState<number>(2.4);
  const [refreshFrequency, setRefreshFrequency] = useState<'slow' | 'medium' | 'fast'>('slow');

  // Calculations
  const currentRevenue = spend * currentRoas;

  // Fatigue penalty based on refresh cadence
  // slow (monthly/quarterly): loses ~25-30% of potential scale to ad fatigue
  // medium (bi-weekly): loses ~12%
  // fast (Frame & Funnel 72h sprints): optimal performance
  const fatigueMultiplier = refreshFrequency === 'slow' ? 0.28 : refreshFrequency === 'medium' ? 0.14 : 0.04;
  const lostRevenue = currentRevenue * fatigueMultiplier;

  // Projected ROAS improvement with cinema quality + AI iteration
  const projectedRoasUplift = refreshFrequency === 'slow' ? 1.6 : refreshFrequency === 'medium' ? 1.35 : 1.2;
  const projectedRoas = Math.round((currentRoas * projectedRoasUplift) * 10) / 10;
  const projectedRevenue = spend * projectedRoas;
  const netMonthlyGain = projectedRevenue - currentRevenue;

  return (
    <div className="bg-[#0c0c11] border border-[#22222a] p-6 sm:p-10 my-12">
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Interactive Model</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
          Creative Fatigue &amp; Revenue Calculator
        </h3>
        <p className="text-sm text-neutral-400 mt-2">
          Calculate the hidden revenue you are losing to creative burnout, and see how cinema-grade AI ads compound your bottom line.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Monthly Spend Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold uppercase tracking-wider text-neutral-300">
                Monthly Paid Ad Spend
              </span>
              <span className="font-mono text-base font-bold text-white tabular-nums">
                ${spend.toLocaleString()} AUD
              </span>
            </div>
            <input
              type="range"
              min={5000}
              max={150000}
              step={5000}
              value={spend}
              onChange={(e) => setSpend(Number(e.target.value))}
              className="w-full accent-white bg-neutral-800 h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
              <span>$5,000</span>
              <span>$75,000</span>
              <span>$150,000+</span>
            </div>
          </div>

          {/* Current ROAS Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold uppercase tracking-wider text-neutral-300">
                Current Blended ROAS
              </span>
              <span className="font-mono text-base font-bold text-white tabular-nums">
                {currentRoas.toFixed(1)}x
              </span>
            </div>
            <input
              type="range"
              min={1.2}
              max={4.8}
              step={0.1}
              value={currentRoas}
              onChange={(e) => setCurrentRoas(Number(e.target.value))}
              className="w-full accent-white bg-neutral-800 h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
              <span>1.2x (Breakeven)</span>
              <span>2.5x (Average)</span>
              <span>4.8x (Elite)</span>
            </div>
          </div>

          {/* Refresh Frequency Selector */}
          <div className="space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
              How often do you launch brand new video ad concepts?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRefreshFrequency('slow')}
                className={`p-3 text-left border transition-colors cursor-pointer text-xs ${
                  refreshFrequency === 'slow'
                    ? 'border-white bg-white/10 text-white'
                    : 'border-[#22222a] bg-[#14141a] text-neutral-400 hover:border-neutral-600'
                }`}
              >
                <span className="font-semibold block text-white">Monthly / Rare</span>
                <span className="text-[11px] text-neutral-400 mt-0.5 block">Heavy fatigue cycles</span>
              </button>
              <button
                type="button"
                onClick={() => setRefreshFrequency('medium')}
                className={`p-3 text-left border transition-colors cursor-pointer text-xs ${
                  refreshFrequency === 'medium'
                    ? 'border-white bg-white/10 text-white'
                    : 'border-[#22222a] bg-[#14141a] text-neutral-400 hover:border-neutral-600'
                }`}
              >
                <span className="font-semibold block text-white">Every 2–3 Weeks</span>
                <span className="text-[11px] text-neutral-400 mt-0.5 block">Moderate decay</span>
              </button>
              <button
                type="button"
                onClick={() => setRefreshFrequency('fast')}
                className={`p-3 text-left border transition-colors cursor-pointer text-xs ${
                  refreshFrequency === 'fast'
                    ? 'border-white bg-white/10 text-white'
                    : 'border-[#22222a] bg-[#14141a] text-neutral-400 hover:border-neutral-600'
                }`}
              >
                <span className="font-semibold block text-white">Every 72 Hours</span>
                <span className="text-[11px] text-neutral-400 mt-0.5 block">Frame &amp; Funnel speed</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-[#14141c] border border-[#2b2b36] p-6 space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
              Current Revenue Run-Rate
            </span>
            <div className="text-2xl font-mono font-bold text-neutral-300 tabular-nums">
              ${Math.round(currentRevenue).toLocaleString()} AUD / mo
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 space-y-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-neutral-400 block">Est. Revenue Lost to Ad Fatigue</span>
                <span className="text-base font-mono font-bold text-amber-300 tabular-nums">
                  -${Math.round(lostRevenue).toLocaleString()} AUD / mo
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-neutral-400 block">Projected Monthly Revenue with Frame &amp; Funnel</span>
                <span className="text-xl font-mono font-bold text-white tabular-nums">
                  ${Math.round(projectedRevenue).toLocaleString()} AUD / mo
                </span>
                <span className="text-[11px] text-emerald-400 font-mono block mt-0.5">
                  +{Math.round(netMonthlyGain).toLocaleString()} AUD net growth ({projectedRoas.toFixed(1)}x ROAS)
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenAudit}
              className="w-full py-3 bg-white hover:bg-neutral-200 text-black font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Unlock This Scale in 20 Mins</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] text-center text-neutral-500 mt-2">
              Based on historical benchmark data from 45+ Australian brand scaling sprints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
