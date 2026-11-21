import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_COPY } from '../data/siteData.ts';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenAudit: () => void;
  onOpenCalendly: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAudit,
  onOpenCalendly,
}) => {
  return (
    <footer className="bg-[#050507] border-t border-[#1a1a20] pt-20 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#1c1c22]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <span className="font-display font-extrabold text-2xl tracking-tight text-white block">
              FRAME &amp; FUNNEL
            </span>
            <p className="text-sm text-neutral-300 font-medium">
              AI Commercials &amp; Growth Studio
            </p>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Where Storytelling Meets Revenue. We create commercials that look like a film and perform like an ad. Hollywood storytelling, Adelaide pricing, and measurable growth.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>{SITE_COPY.location.address}, Australia</span>
              </div>
              <a
                href={`tel:${SITE_COPY.location.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors w-fit"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>{SITE_COPY.location.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_COPY.location.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors w-fit"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>{SITE_COPY.location.email}</span>
              </a>
            </div>
          </div>

          {/* Pillars & Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Capabilities</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  FRAME™ AI Commercials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  FUNNEL™ Meta &amp; Google Ads
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  FRAME + FUNNEL™ Full Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Founder Documentary Films
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Growth Attribution &amp; CRO
                </button>
              </li>
            </ul>
          </div>

          {/* Who We Help */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Who We Help</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('who-we-help')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  E-Commerce Brands ($500k–$5M)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('who-we-help')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Coaches, Consultants &amp; Experts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('who-we-help')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Adelaide &amp; SA Businesses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Case Studies &amp; ROAS Proof
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Founder Story
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Work With Us</h4>
            <div className="space-y-3">
              <button
                onClick={onOpenCalendly}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenAudit}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white border border-neutral-700 hover:border-white transition-colors cursor-pointer"
              >
                <span>Free 20-Min Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 border border-[#22222a] hover:border-white hover:text-white transition-colors cursor-pointer"
              >
                <span>Contact Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-xs text-neutral-500 pt-1">
                Zero pushy sales reps. You speak directly with our creative growth directors.
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Area: Copyright, keywords, terms */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Frame &amp; Funnel Pty Ltd. All rights reserved. Adelaide, South Australia.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-500">
            <span>AI Advertising Agency Australia</span>
            <span aria-hidden="true">&middot;</span>
            <span>Performance Marketing Adelaide</span>
            <span aria-hidden="true">&middot;</span>
            <span>AI Commercial Production</span>
            <span aria-hidden="true">&middot;</span>
            <span>Meta Ads Agency Adelaide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
