import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sliders, Film, Sparkles } from 'lucide-react';
import { images } from '../assets/images/index.ts';

interface VideoShowreelPlayerProps {
  onOpenAudit: () => void;
  onOpenCalendly: () => void;
}

export const VideoShowreelPlayer: React.FC<VideoShowreelPlayerProps> = ({
  onOpenAudit,
  onOpenCalendly,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isCinemaScope, setIsCinemaScope] = useState(true);
  const [activeCutIndex, setActiveCutIndex] = useState(0);
  const [progress, setProgress] = useState(25);
  const [showDirectorBeats, setShowDirectorBeats] = useState(true);

  const cuts = [
    {
      id: 'fragrance',
      title: 'Obsidian Noir — Luxury Fragrance AI Commercial',
      category: 'E-Commerce DTC',
      client: 'Obsidian & Silk',
      result: '4.4x ROAS on $145k/mo spend',
      image: images.showcaseEcommerce,
      beats: [
        { time: '00:01', label: 'Hook', desc: 'Anamorphic macro droplet on dark stone' },
        { time: '00:04', label: 'Sensory Pivot', desc: 'Obsidian bottle emerging from volumetric smoke' },
        { time: '00:09', label: 'Mechanism', desc: 'Single-source botanical extraction visual' },
        { time: '00:18', label: 'Authority', desc: 'Prestige typography & olfactory note profile' },
        { time: '00:26', label: 'Direct Offer', desc: 'Discovery travel set complimentary voucher' },
      ],
    },
    {
      id: 'founder',
      title: 'The Conviction Principle — Executive Founder Film',
      category: 'Coaches & Advisory',
      client: 'Vanguard Capital',
      result: '$840k in signed advisory contracts',
      image: images.showcaseFounder,
      beats: [
        { time: '00:01', label: 'Hook', desc: 'Floor-to-ceiling twilight skyline silhouette' },
        { time: '00:05', label: 'Core Problem', desc: 'The dangerous illusion of retail advisory' },
        { time: '00:12', label: 'Origin Story', desc: 'The hard-won lessons from the 2008 crash' },
        { time: '00:20', label: 'Thesis', desc: 'Conviction over consensus management' },
        { time: '00:28', label: 'Direct Offer', desc: 'Quarterly private portfolio review invitation' },
      ],
    },
    {
      id: 'distillery',
      title: 'Maritime Botanicals — Heritage Distillery Commercial',
      category: 'Adelaide SME Brand',
      client: 'Kangaroo Island Craft Spirits',
      result: '+310% DTC growth & 48hr sellout',
      image: images.showcaseBrand,
      beats: [
        { time: '00:01', label: 'Hook', desc: 'Glowing copper still in low tungsten amber light' },
        { time: '00:06', label: 'Story', desc: 'Wild coastal juniper collected at dawn' },
        { time: '00:13', label: 'Craft', desc: 'Slow distillation process in Adelaide Hills' },
        { time: '00:21', label: 'Sensory', desc: 'Crystal pour over carved ice with smoke' },
        { time: '00:27', label: 'Direct Offer', desc: 'Strictly 500 numbered bottles allocation' },
      ],
    },
  ];

  const currentCut = cuts[activeCutIndex];

  // Auto-progress simulation when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Switch to next cut
          setActiveCutIndex((idx) => (idx + 1) % cuts.length);
          return 0;
        }
        return prev + 1.25;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [isPlaying, cuts.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-12 bg-black border border-[#22222a] overflow-hidden shadow-2xl">
      {/* Top Production Slate Header */}
      <div className="bg-[#0b0b0e] border-b border-[#1c1c24] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-mono text-neutral-400 uppercase tracking-widest text-[11px]">
            REEL // CUT 0{activeCutIndex + 1} OF 0{cuts.length}
          </span>
          <span className="text-neutral-600">|</span>
          <span className="font-semibold text-white tracking-tight">{currentCut.client}</span>
          <span className="text-neutral-500 hidden sm:inline">&middot; {currentCut.category}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* CinemaScope Aspect Ratio Switcher */}
          <button
            onClick={() => setIsCinemaScope(!isCinemaScope)}
            className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border transition-colors cursor-pointer ${
              isCinemaScope
                ? 'border-white bg-white/10 text-white'
                : 'border-neutral-800 text-neutral-400 hover:text-white'
            }`}
            title="Toggle 2.39:1 CinemaScope Anamorphic Letterbox"
          >
            {isCinemaScope ? '2.39:1 Anamorphic' : '16:9 Standard'}
          </button>

          {/* Director Beat Overlay Switcher */}
          <button
            onClick={() => setShowDirectorBeats(!showDirectorBeats)}
            className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border transition-colors cursor-pointer ${
              showDirectorBeats
                ? 'border-white bg-white/10 text-white'
                : 'border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            {showDirectorBeats ? 'Story Beats: ON' : 'Story Beats: OFF'}
          </button>
        </div>
      </div>

      {/* Main Screen Container with Cinema letterbox */}
      <div
        className={`relative w-full bg-black flex items-center justify-center overflow-hidden transition-all duration-300 ${
          isCinemaScope ? 'aspect-[2.39/1]' : 'aspect-video'
        }`}
      >
        {/* Cinema Letterbox Bars */}
        {isCinemaScope && (
          <>
            <div className="absolute top-0 left-0 right-0 h-4 md:h-8 bg-black z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-4 md:h-8 bg-black z-10 pointer-events-none" />
          </>
        )}

        {/* Video / Commercial Frame Stills */}
        <div className="relative w-full h-full">
          <img
            src={currentCut.image}
            alt={currentCut.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          />

          {/* Film Grain & Cinematic Vignette */}
          <div className="absolute inset-0 cinematic-vignette pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Active Cut Overlay Information */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="space-y-1 max-w-lg">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                {currentCut.result}
              </span>
              <h4 className="text-lg sm:text-2xl font-display font-bold text-white tracking-tight drop-shadow-md">
                {currentCut.title}
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCalendly}
                className="px-4 py-2 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Produce Your Commercial
              </button>
            </div>
          </div>

          {/* Simulated Director Narrative Beat Tag */}
          {showDirectorBeats && (
            <div className="absolute top-6 left-6 z-20 bg-black/75 border border-white/20 backdrop-blur-md px-3 py-1.5 text-xs text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider">
                FRAME ANALYSIS // 3-SECOND HOOK RATE: 74.8%
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Scrubber & Timeline Bar */}
      <div className="bg-[#0b0b0e] border-t border-[#1c1c24] p-4 space-y-3">
        {/* Scrubber Bar */}
        <div
          className="relative w-full h-2 bg-neutral-800 cursor-pointer group"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            setProgress(Math.min(100, Math.max(0, clickPos * 100)));
          }}
        >
          <div
            className="h-full bg-white transition-all duration-75 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Story beat markers on scrubber */}
          <div className="absolute top-0 bottom-0 left-[10%] w-0.5 bg-neutral-600" title="Hook End" />
          <div className="absolute top-0 bottom-0 left-[35%] w-0.5 bg-neutral-600" title="Core Mechanism" />
          <div className="absolute top-0 bottom-0 left-[70%] w-0.5 bg-neutral-600" title="Proof" />
        </div>

        {/* Playback Controls & Cut Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-white/10 hover:bg-white text-white hover:text-black transition-colors rounded-none cursor-pointer"
              aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle mute"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Timecode */}
            <span className="font-mono text-xs text-neutral-400 tabular-nums">
              00:{Math.floor((progress * 0.3)).toString().padStart(2, '0')}:14 / 00:30:00
            </span>
          </div>

          {/* Quick Select Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {cuts.map((cut, idx) => (
              <button
                key={cut.id}
                onClick={() => {
                  setActiveCutIndex(idx);
                  setProgress(0);
                }}
                className={`px-3 py-1 text-xs whitespace-nowrap transition-colors cursor-pointer ${
                  activeCutIndex === idx
                    ? 'bg-white text-black font-semibold'
                    : 'bg-[#15151c] text-neutral-400 hover:text-white'
                }`}
              >
                {cut.client}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
