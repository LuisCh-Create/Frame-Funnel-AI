import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenAudit: () => void;
  onOpenCalendly: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenAudit,
  onOpenCalendly,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'who-we-help', label: 'Who We Help' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
    { id: 'audit', label: 'Free Audit' },
  ];

  const handleNavClick = (tabId: string) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#070707]/90 backdrop-blur-md border-b border-[#1c1c22]">
      {/* Top Bar strictly complying with Top Bar Contract: 3 Zones, gap-8 */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white shrink-0"
        >
          <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-neutral-300 transition-colors uppercase whitespace-nowrap">
            FRAME &amp; FUNNEL
          </span>
        </button>

        {/* Zone 2: 4–6 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer focus-visible:outline-none focus-visible:text-white ${
                  isActive
                    ? 'text-white border-b-2 border-white'
                    : 'hover:text-white hover:border-b-2 hover:border-neutral-500'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (with mobile hamburger alongside) */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenCalendly}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white focus-visible:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0E] border-b border-[#222228] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-medium py-2 px-3 transition-colors ${
                  currentTab === link.id
                    ? 'text-white bg-white/5 font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-white border border-neutral-700 hover:border-white transition-colors"
            >
              Get Free Performance Audit
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalendly();
              }}
              className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
