/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { WhoWeHelpPage } from './pages/WhoWeHelpPage.tsx';
import { AuditPage } from './pages/AuditPage.tsx';
import { CaseStudiesPage } from './pages/CaseStudiesPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { BlogPage } from './pages/BlogPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { AuditModal } from './components/AuditModal.tsx';
import { CalendlyModal } from './components/CalendlyModal.tsx';
import { CaseStudyModal } from './components/CaseStudyModal.tsx';
import { CaseStudy } from './data/siteData.ts';

export default function App() {
  // Sync tab with URL hash for seamless GitHub Pages routing
  const getInitialTab = (): string => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['services', 'who-we-help', 'case-studies', 'about', 'blog', 'audit', 'contact'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  };

  const [currentTab, setCurrentTab] = useState<string>(getInitialTab);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['services', 'who-we-help', 'case-studies', 'about', 'blog', 'audit', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      } else {
        setCurrentTab('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    if (tab === 'home') {
      history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = tab;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#ededed] flex flex-col selection:bg-white selection:text-black font-sans">
      {/* Top Bar Navigation Contract (§2) */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenCalendly={() => setIsCalendlyOpen(true)}
      />

      {/* Main Routed Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAudit={() => setIsAuditOpen(true)}
            onOpenCalendly={() => setIsCalendlyOpen(true)}
            onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onOpenAudit={() => setIsAuditOpen(true)}
            onOpenCalendly={() => setIsCalendlyOpen(true)}
          />
        )}

        {currentTab === 'who-we-help' && (
          <WhoWeHelpPage
            onOpenAudit={() => setIsAuditOpen(true)}
            onOpenCalendly={() => setIsCalendlyOpen(true)}
          />
        )}

        {currentTab === 'case-studies' && (
          <CaseStudiesPage
            onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
            onOpenCalendly={() => setIsCalendlyOpen(true)}
            onOpenAudit={() => setIsAuditOpen(true)}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onOpenAudit={() => setIsAuditOpen(true)}
            onOpenCalendly={() => setIsCalendlyOpen(true)}
          />
        )}

        {currentTab === 'blog' && (
          <BlogPage
            onOpenAudit={() => setIsAuditOpen(true)}
            onOpenCalendly={() => setIsCalendlyOpen(true)}
          />
        )}

        {currentTab === 'audit' && (
          <AuditPage onOpenCalendly={() => setIsCalendlyOpen(true)} />
        )}

        {currentTab === 'contact' && (
          <ContactPage
            onOpenCalendly={() => setIsCalendlyOpen(true)}
            onOpenAudit={() => setIsAuditOpen(true)}
          />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenCalendly={() => setIsCalendlyOpen(true)}
      />

      {/* Global Interactive Modals */}
      <AuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        onOpenCalendly={() => {
          setIsAuditOpen(false);
          setIsCalendlyOpen(true);
        }}
      />

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenCalendly={() => {
          setSelectedCaseStudy(null);
          setIsCalendlyOpen(true);
        }}
      />
    </div>
  );
}
