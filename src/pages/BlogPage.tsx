import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, Sparkles, BookOpen, X, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/siteData.ts';

interface BlogPageProps {
  onOpenAudit: () => void;
  onOpenCalendly: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenAudit, onOpenCalendly }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Creative That Converts',
    'AI Advertising',
    'Growth Strategy',
    'Meta Ads',
    'Google Ads',
    'Founder-Led Brands',
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          Field Manual &amp; Growth Strategy
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          How to Scale Attention into Real Cashflow.
        </h1>
        <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed">
          No vague branding fluff. Tactical breakdowns on AI commercial production, Meta Andromeda algorithms, creative fatigue engineering, and founder positioning.
        </p>
      </div>

      {/* Category filter buttons adhering strictly to Zero-Pill discipline (§1.A) */}
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

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="p-6 bg-[#0a0a0f] border border-[#202028] flex flex-col justify-between hover:border-neutral-500 transition-colors cursor-pointer group"
            onClick={() => setReadingPost(post)}
          >
            <div className="space-y-4">
              {/* Unboxed Metadata with typographic separators (§1.A) */}
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="text-white font-medium">{post.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readTime}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.publishedDate}</span>
              </div>

              <h2 className="text-xl font-display font-bold text-white group-hover:text-neutral-200 transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-3">
                {post.summary}
              </p>

              {/* Takeaway Teaser */}
              <div className="pt-3 border-t border-[#1a1a22] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  Core Principle:
                </span>
                <p className="text-[11px] text-neutral-300 italic">
                  "{post.takeaways[0]}"
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1a1a22] mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-white inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Full Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Reader Modal */}
      {readingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0c0c11] border border-[#24242d] text-white shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setReadingPost(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Unboxed Header */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="text-white font-medium">{readingPost.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{readingPost.readTime}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{readingPost.publishedDate}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                {readingPost.title}
              </h1>
              <p className="text-sm text-neutral-300 font-medium">
                {readingPost.summary}
              </p>
            </div>

            {/* Article Content */}
            <div className="space-y-6 text-sm text-neutral-300 leading-relaxed font-sans border-t border-[#1c1c24] pt-6">
              {readingPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {readingPost.sections &&
                readingPost.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-3 pt-2">
                    {section.heading && (
                      <h2 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight pt-3">
                        {section.heading}
                      </h2>
                    )}

                    {section.paragraphs &&
                      section.paragraphs.map((p, pIdx) => <p key={pIdx}>{p}</p>)}

                    {section.bullets && (
                      <ul className="space-y-1.5 pl-2 text-neutral-200">
                        {section.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm">
                            <span className="text-neutral-500 font-mono text-xs mt-1">&mdash;</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.comparison && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {section.comparison.map((col, cIdx) => (
                          <div
                            key={cIdx}
                            className={`p-5 border ${
                              cIdx === 1
                                ? 'bg-[#12121a] border-white/25'
                                : 'bg-[#09090d] border-[#202028]'
                            }`}
                          >
                            <h3 className="text-sm font-display font-bold text-white mb-4">
                              {col.title}
                            </h3>
                            <div className="space-y-3 text-xs">
                              <div>
                                <span className="font-mono uppercase tracking-wider text-[10px] text-emerald-400 block mb-1.5">
                                  Pros
                                </span>
                                <ul className="space-y-1 text-neutral-300">
                                  {col.pros.map((pro, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-emerald-400 font-mono">+</span>
                                      <span>{pro}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="pt-2 border-t border-[#1e1e26]">
                                <span className="font-mono uppercase tracking-wider text-[10px] text-neutral-500 block mb-1.5">
                                  Cons
                                </span>
                                <ul className="space-y-1 text-neutral-400">
                                  {col.cons.map((con, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-neutral-500 font-mono">&minus;</span>
                                      <span>{con}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Key Actionable Takeaways */}
            <div className="mt-8 p-6 bg-[#121218] border border-[#23232c] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-white block font-bold">
                Actionable Framework &amp; Rules:
              </span>
              <div className="space-y-2">
                {readingPost.takeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                    <span className="font-mono text-white font-bold">&rarr;</span>
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer inside reader */}
            <div className="mt-8 pt-6 border-t border-[#1c1c24] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Need this deployed on your Meta or Google accounts?
              </span>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setReadingPost(null);
                    onOpenAudit();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 border border-neutral-700 text-neutral-200 hover:border-white hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Get Free Audit
                </button>
                <button
                  onClick={() => {
                    setReadingPost(null);
                    onOpenCalendly();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Strategy Session</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
