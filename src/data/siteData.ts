export interface CaseStudy {
  id: string;
  client: string;
  category: 'E-Commerce' | 'Coaches & Experts' | 'Adelaide SME';
  title: string;
  tagline: string;
  imageKey: 'showcaseEcommerce' | 'showcaseFounder' | 'showcaseBrand';
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  challenge: string;
  strategy: string;
  creativeExecution: string;
  results: string;
  revenueImpact: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServicePillar {
  name: string;
  trademark: string;
  tagline: string;
  description: string;
  features: string[];
  bestFor: string;
  outcomes: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  deliverables: string[];
  techStack: string[];
  businessImpact: string;
  timeframe: string;
}

export interface AudienceProfile {
  id: string;
  title: string;
  subtitle: string;
  revenueTarget: string;
  painPoints: string[];
  ourSolutions: string[];
  expectedOutcomes: string[];
  benchmarkRoas: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Creative That Converts' | 'AI Advertising' | 'Growth Strategy' | 'Meta Ads' | 'Google Ads' | 'Founder-Led Brands';
  readTime: string;
  publishedDate: string;
  summary: string;
  content: string[];
  takeaways: string[];
}

export const SITE_COPY = {
  name: 'Frame & Funnel',
  category: 'AI Commercials & Growth Studio',
  primaryTagline: 'Where Storytelling Meets Revenue.',
  secondaryTaglines: [
    'We create commercials that look like a film and perform like an ad.',
    'Hollywood storytelling. Adelaide pricing. Measurable growth.',
    'Cinematic advertising for businesses that can\'t afford a production company.',
  ],
  heroHeadline: 'Commercials That Look Like Films.\nMarketing That Performs Like Sales.',
  heroSubheadline:
    'Frame & Funnel helps ambitious brands grow through AI-powered commercial production, cinematic storytelling, performance advertising and measurable growth systems.',
  founderHeadline: 'From Filmmaker to Performance Marketer',
  founderStoryP1:
    'For years, I stood behind 35mm cinema cameras directing broadcast commercials. We obsessed over anamorphic lens flaring, 8K colour grading, and dramatic rhythm. The work won festival laurels and looked breathtaking.',
  founderStoryP2:
    'Yet when clients asked about revenue, the production company would shrug and pass the buck to their media agency. Meanwhile, the performance agency was running cheap, pixelated Canva graphics and generic user-generated content that completely degraded the brand.',
  founderStoryP3:
    'I realised both models were broken. Beautiful creative without measurable business outcomes is an expensive vanity project. And high-spending media buying without compelling storytelling is just lighting money on fire. Frame & Funnel was built to kill that trade-off forever.',
  location: {
    city: 'Adelaide',
    region: 'South Australia',
    address: 'Level 4, North Terrace, Adelaide SA 5000',
    phone: '+61 (08) 8200 5590',
    email: 'hello@frameandfunnel.com.au',
  },
};

export const COMPARISON_DATA = [
  {
    criterion: 'Creative Quality',
    traditionalAgency: 'Mediocre Canva templates & low-effort UGC clips',
    productionCompany: 'Stunning 4K film craft but zero ad psychology',
    frameAndFunnel: 'Hollywood cinema aesthetics powered by AI speed & conversion psychology',
    winner: 'Frame & Funnel',
  },
  {
    criterion: 'Speed to Market',
    traditionalAgency: 'Fast but generic; high fatigue within 10 days',
    productionCompany: '6 to 12 weeks per commercial project',
    frameAndFunnel: '72 hours to first cut; 10+ weekly dynamic variants',
    winner: 'Frame & Funnel',
  },
  {
    criterion: 'Cost per Finished Asset',
    traditionalAgency: '$800–$2,000 for static or basic motion edits',
    productionCompany: '$25,000–$75,000 per single shoot day',
    frameAndFunnel: 'Fraction of film studio rates (Adelaide pricing efficiency)',
    winner: 'Frame & Funnel',
  },
  {
    criterion: 'Media & Funnel Alignment',
    traditionalAgency: 'Focuses on spend volume, ignores brand prestige',
    productionCompany: 'Zero media management; delivers files and leaves',
    frameAndFunnel: 'Unified loop: ad creative engineered specifically for Meta & Google algorithms',
    winner: 'Frame & Funnel',
  },
  {
    criterion: 'Creative Iteration & Testing',
    traditionalAgency: 'Rarely test beyond 2–3 copy variations',
    productionCompany: 'Reshoots cost another $20,000+',
    frameAndFunnel: 'Infinite neural iterations (hooks, intros, CTA end-cards, aspect ratios)',
    winner: 'Frame & Funnel',
  },
  {
    criterion: 'Primary Metric',
    traditionalAgency: 'Impressions & vanity clicks',
    productionCompany: 'Artistic awards & portfolio reels',
    frameAndFunnel: 'Customer Acquisition Cost (CAC), Blended ROAS & Pipeline Revenue',
    winner: 'Frame & Funnel',
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    name: 'FRAME',
    trademark: 'FRAME™',
    tagline: 'Cinematic Storytelling Powered by AI',
    description:
      'We combine director-level cinematic framing with cutting-edge AI generation to build broadcast-quality commercials at a fraction of traditional production costs.',
    features: [
      'AI Commercial Production (Hyper-realistic sets & models)',
      'Founder Authority Documentary Films',
      'High-Impact Product Launch Films',
      'High-Velocity Video Ads for Meta & TikTok',
      'Hook Rate & Creative Strategy Blueprint',
    ],
    bestFor: 'Brands suffering from creative fatigue, low hook rates, or cheap-looking ads.',
    outcomes: ['85%+ average 3-second hook rate', 'Zero location permits or crew overheads', '72-hour variant delivery'],
  },
  {
    name: 'FUNNEL',
    trademark: 'FUNNEL™',
    tagline: 'Scientific Performance Advertising & CRO',
    description:
      'High-converting media buying on Meta and Google paired with relentless landing page conversion rate optimisation and transparent multi-touch attribution.',
    features: [
      'Meta Ads (Broad targeting & Advantage+ scale engines)',
      'Google Ads & YouTube Commercial Distribution',
      'High-Converting Landing Page Design & Copy',
      'Conversion Rate Optimisation (CRO) Split Testing',
      'Real-Time Attribution & Blended ROAS Telemetry',
    ],
    bestFor: 'Businesses spending $5k to $100k/month wanting predictable, profitable customer acquisition.',
    outcomes: ['35%–60% reduction in customer acquisition cost', 'Uncapped ad account scalability', 'Live margin reporting'],
  },
  {
    name: 'FRAME + FUNNEL',
    trademark: 'FRAME + FUNNEL™',
    tagline: 'The Complete Full-Stack Growth Engine',
    description:
      'The ultimate partnership. Creative directors and performance media buyers working in the same room. We produce your films, run your ads, optimise your pages, and scale revenue.',
    features: [
      'Full End-to-End Growth Partnership',
      'Bi-Weekly Cinematic Commercial Drops',
      'Full Paid Media Management (Meta + Google)',
      'Weekly Iterative Variant Generation based on Ad Data',
      'Dedicated Growth Strategist & Slack Channel',
      'Executive Financial & Pipeline Reporting',
    ],
    bestFor: 'E-commerce founders ($500k–$5M), high-ticket coaches, and market-leading Adelaide SMEs.',
    outcomes: ['Complete growth system under one roof', 'No inter-agency finger-pointing', 'Guaranteed ROAS milestones'],
  },
];

export const DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: 'ai-commercials',
    title: 'AI Commercial Production',
    tagline: 'Cinema-grade visuals without the $50k shoot day',
    overview:
      'Using proprietary AI neural rendering workflows, generative 3D environments, and director-calibrated prompt engines, we create photorealistic commercials that rival high-budget TV spots. No booking studio locations, no hiring 20-person crews, and no waiting 8 weeks for final colour grading.',
    deliverables: [
      'Photorealistic 4K/8K commercial master files',
      'Horizontal (16:9), Vertical (9:16), and Square (1:1) cuts',
      '10+ Hook variations per commercial concept',
      'Dynamic text overlays, subtitles, and motion graphics',
      'Full perpetual commercial usage & broadcast rights',
    ],
    techStack: ['Midjourney v6', 'Runway Gen-3', 'Luma Dream Machine', 'DaVinci Resolve Studio', 'Topaz Video AI'],
    businessImpact: 'Reduces creative production costs by 78% while accelerating testing speed by 6x.',
    timeframe: 'First master cut ready in 5 business days',
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads Management',
    tagline: 'Scale past creative fatigue with high-converting ads',
    overview:
      'Meta\'s Andromeda algorithm no longer rewards hacky audience targeting. Today, creative IS the targeting. We deploy scientific testing structures across Advantage+ Shopping Campaigns, broad audiences, and dynamic creative modules to scale spend while protecting your net profit margins.',
    deliverables: [
      'Full Meta Ads account audit & restructuring',
      'Dynamic Creative Testing (DCT) weekly sprints',
      'Advantage+ Shopping & Lead Generation setups',
      'Daily bid management and budget scaling protocols',
      'Exclusion of cannibalising brand searches or low-quality traffic',
    ],
    techStack: ['Meta Ads Manager', 'Triple Whale Attribution', 'Northbeam', 'Supermetrics'],
    businessImpact: 'Average client ROAS uplift of 2.8x within the first 60 days of creative scaling.',
    timeframe: 'Ongoing monthly growth sprint with weekly optimizations',
  },
  {
    id: 'google-ads',
    title: 'Google & YouTube Ads Management',
    tagline: 'Capture high-intent buyers ready to purchase',
    overview:
      'We dominate Google Search, YouTube Shorts, and Performance Max with cinematic video assets that stand out against bland competitor banners. We ensure you capture high-intent demand while turning YouTube into a scalable cold customer acquisition channel.',
    deliverables: [
      'Performance Max asset group curation with cinematic video',
      'High-intent exact match search campaign architecture',
      'YouTube in-stream & Shorts commercial placement',
      'Negative keyword filtering & click fraud prevention',
      'Server-side conversion tracking setup',
    ],
    techStack: ['Google Ads', 'YouTube Studio', 'Google Tag Manager', 'GA4 Analytics'],
    businessImpact: 'Captures ready-to-buy searchers while lowering blended CAC by up to 42%.',
    timeframe: 'Full account build and launch within 7 days',
  },
  {
    id: 'creative-strategy',
    title: 'Creative Performance Strategy',
    tagline: 'Engineering hooks that stop the scroll in 0.8 seconds',
    overview:
      'Great ads are not luck; they are forensic consumer psychology. We dissect your market, analyze competitor creative fatigue, and craft 5 core angle categories: Pain-First, Status-Driven, Mechanistic Breakdown, Counter-Intuitive, and Social Proof.',
    deliverables: [
      'Quarterly Creative Angle Matrix (20+ validated angles)',
      'Hook Rate & Hold Rate breakdown reports',
      'Competitor ad library analysis & gap identification',
      'Scripting for founder direct-to-camera authority pieces',
      'Storyboards and visual beat sheets',
    ],
    techStack: ['Foreplay.co', 'Motion Creative Analytics', 'Miro Storyboards'],
    businessImpact: 'Increases 3-second hook rates from industry average 22% to 45%–65%.',
    timeframe: 'Comprehensive strategy deck delivered every 30 days',
  },
  {
    id: 'growth-analytics',
    title: 'Growth Analytics & CRO',
    tagline: 'Know exactly where every dollar goes and what it generates',
    overview:
      'No vanity metrics. We track Blended Marketing Efficiency Ratio (MER), Customer Lifetime Value (LTV), First-Order Profitability, and on-page drop-off points. We rebuild your checkout funnels and landing pages to squeeze maximum revenue out of your ad clicks.',
    deliverables: [
      'Custom real-time Executive Growth Dashboard',
      'Multi-touch first-party attribution modeling',
      'Heatmap and session recording audits',
      'Landing page A/B testing implementation',
      'Weekly financial KPI summary with actionable recommendations',
    ],
    techStack: ['PostHog', 'Triple Whale', 'Hotjar', 'Looker Studio', 'Shopify / Stripe API'],
    businessImpact: 'Improves website visitor-to-sale conversion rates by an average of 38%.',
    timeframe: 'Live 24/7 dashboard with weekly executive reporting',
  },
];

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Brands',
    subtitle: 'Apparel, Luxury, Wellness, Home, and Direct-to-Consumer',
    revenueTarget: 'AUD $500k – $5M Annual Revenue',
    painPoints: [
      'Creative fatigue burning out ads after 10–14 days of scaling',
      'Generic product ads that look identical to cheap dropshippers',
      'Rising Customer Acquisition Costs (CAC) eroding net profit',
      'Agencies that report vanity clicks while bank balance shrinks',
    ],
    ourSolutions: [
      'High-velocity AI commercial production with endless seasonal variations',
      'Hollywood-tier product lighting and cinematic macro shots',
      'Advantage+ scale setups with disciplined creative rotation',
      'Complete landing page and product page CRO enhancements',
    ],
    expectedOutcomes: [
      '3.5x to 5.2x Blended ROAS on scaled budgets',
      'Creative pipeline delivering 8+ fresh ad variants every week',
      'Distinct luxury brand equity that commands premium pricing',
    ],
    benchmarkRoas: '4.2x Avg ROAS',
  },
  {
    id: 'coaches-consultants',
    title: 'Coaches, Consultants & Experts',
    subtitle: 'High-Ticket B2B, Wealth, Executive & Specialist Advisory',
    revenueTarget: 'AUD $20k – $150k Monthly Run Rate',
    painPoints: [
      'Rollercoaster revenue dependent entirely on word-of-mouth referrals',
      'Inconsistent discovery call volume and no-show rates',
      'Weak authority positioning making price resistance painful',
      'Exhausting manual content creation that yields little pipeline',
    ],
    ourSolutions: [
      'Cinematic "Founder Film" that establishes immediate category authority',
      'Direct-response client acquisition funnels with automated calendar booking',
      'Retargeting commercial sequences that warm up prospects before the call',
      'Discipline-focused qualification forms that eliminate tire-kickers',
    ],
    expectedOutcomes: [
      '20–45 qualified discovery calls booked per month on autopilot',
      'Pre-sold prospects who have already watched your cinema-grade story',
      'Ability to increase coaching/consulting retainers by 50%–100%',
    ],
    benchmarkRoas: '6.8x Pipeline ROI',
  },
  {
    id: 'adelaide-smes',
    title: 'Adelaide & SA Businesses',
    subtitle: 'Wineries, Manufacturing, Premium Construction, Professional Services',
    revenueTarget: 'AUD $1M – $15M Annual Turnover',
    painPoints: [
      'Outdated local marketing relying on print, radio, or sluggish agencies',
      'Paying massive retainers to big interstate agencies who outsource work',
      'Zero transparency on what money is actually generating phone calls & sales',
      'Struggling to recruit premium talent and win high-margin regional contracts',
    ],
    ourSolutions: [
      'Adelaide-based strategic team with direct face-to-face access',
      'Cinematic brand commercials shot or rendered with world-class polish',
      'Hyper-targeted geo-location advertising on Meta and Google',
      'Simple, transparent monthly reporting tied to phone calls and revenue',
    ],
    expectedOutcomes: [
      'Dominant local market visibility and prestige reputation',
      'Direct phone enquiry volume increase of 140%+ within 90 days',
      'World-class creative output at sensible South Australian rates',
    ],
    benchmarkRoas: '3.9x Local ROAS',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aethelgard-fragrance',
    client: 'Obsidian & Silk Atelier',
    category: 'E-Commerce',
    title: 'Scaling Luxury Fragrance from $180k to $640k/Month with AI Commercials',
    tagline: 'How cinema-grade dark aesthetic ads smashed a 4.2x ROAS ceiling.',
    imageKey: 'showcaseEcommerce',
    metrics: [
      { label: 'Monthly Revenue', value: '$642,000', sublabel: 'Up from $182,000/mo' },
      { label: 'Blended ROAS', value: '4.42x', sublabel: 'Maintained at scale' },
      { label: 'Ad Variants Tested', value: '48 Cuts', sublabel: 'Delivered in 45 days' },
      { label: 'CAC Reduction', value: '-38.4%', sublabel: 'From $72 down to $44.30' },
    ],
    challenge:
      'Obsidian & Silk had an exceptional $220 luxury fragrance line, but their digital ads looked like cheap smartphone unboxings. Acquisition costs on Meta were climbing, and every creative fatigue cycle forced them to pause scaling after two weeks.',
    strategy:
      'We designed an AI commercial pipeline rendering obsidian stone surfaces, cinematic water mist, and slow-motion droplet physics. We produced 12 unique visual hooks and paired them with a high-contrast landing page focusing on olfactory sensory narrative.',
    creativeExecution:
      'Hyper-realistic 8K AI video assets rendered with macro lens depth of field, paired with an evocative orchestral soundscape and a direct-response offer structure.',
    results:
      'Within 60 days, cold ad click-through rates doubled from 1.1% to 2.85%. The brand scaled monthly ad spend from $35k to $145k while holding a healthy 4.4x blended return.',
    revenueImpact: 'Generated $1.86M in new top-line revenue over a 90-day scaling sprint.',
    testimonial: {
      quote:
        'Traditional production companies quoted us $60,000 for a single shoot day. Frame & Funnel delivered 40+ cinema-quality commercial cuts using AI that outperformed everything we had ever run.',
      author: 'Marcus Vance',
      role: 'Founder & CEO, Obsidian & Silk',
    },
  },
  {
    id: 'vanguard-coaching',
    client: 'Vanguard Capital Advisory',
    category: 'Coaches & Experts',
    title: 'Generating $840k in Advisory Contracts via Founder Documentary Film',
    tagline: 'Replacing frantic outreach with a 3-minute cinema-grade authority film.',
    imageKey: 'showcaseFounder',
    metrics: [
      { label: 'Contract Value Signed', value: '$840,000', sublabel: 'Within 4 months' },
      { label: 'Qualified Calls', value: '94 Calls', sublabel: 'Zero tire-kickers' },
      { label: 'Show-Up Rate', value: '92.4%', sublabel: 'Watched film prior to call' },
      { label: 'Cost Per Call', value: '$112', sublabel: 'High-ticket advisory lead' },
    ],
    challenge:
      'Managing Director Julian Cole was tired of the typical "talking head in front of a whiteboard" coaching ads. High-net-worth clients perceived the firm as generic, creating severe pricing friction for their $25,000 advisory packages.',
    strategy:
      'We directed and produced a cinematic "Founder Film" capturing the philosophy of capital preservation and strategic leadership, blended with AI-generated architectural environments. We then deployed a high-intent LinkedIn & Meta funnel.',
    creativeExecution:
      'A 3-minute executive film styled like a prestige Netflix documentary, accompanied by 6 punchy 30-second commercial cuts addressing risk, conviction, and generational wealth.',
    results:
      'Prospects arrived at discovery calls already emotionally sold on Julian\'s authority. The close rate jumped from 18% to 41%, and the firm closed 28 enterprise retainers in 120 days.',
    revenueImpact: 'Delivered an 8.2x return on total advertising and creative investment.',
    testimonial: {
      quote:
        'The founder film changed the perception of our entire firm overnight. Clients don\'t negotiate our fees anymore; they thank us for accepting them into our program.',
      author: 'Julian Cole',
      role: 'Managing Director, Vanguard Advisory',
    },
  },
  {
    id: 'adelaide-distillery',
    client: 'Kangaroo Island Craft Spirits',
    category: 'Adelaide SME',
    title: 'Local Adelaide Legend to National Brand: 310% Online & Cellar Door Surge',
    tagline: 'Cinematic South Australian storytelling meets hyper-targeted paid acquisition.',
    imageKey: 'showcaseBrand',
    metrics: [
      { label: 'Revenue Growth', value: '+310%', sublabel: 'Year-over-year' },
      { label: 'Batch Sell-Out', value: '48 Hours', sublabel: 'Limited cask release' },
      { label: 'Local Footfall', value: '+140%', sublabel: 'Cellar door bookings' },
      { label: 'Email List Growth', value: '18,500', sublabel: 'Subscribers acquired' },
    ],
    challenge:
      'A beloved South Australian craft distillery had world-class botanical spirits but was losing market share to mass-market commercial brands. Their previous marketing agency ran generic product photos with zero engagement.',
    strategy:
      'We combined on-the-ground cinematic footage of copper pot stills glowing in amber light with AI-expanded atmospheric coastal sequences. We targeted high-income Australian consumers with targeted gift bundles and limited-release clubs.',
    creativeExecution:
      'A cinematic series celebrating the rugged maritime botanicals of Kangaroo Island, contrasted against warm cellar hospitality and pristine mixology.',
    results:
      'Their premier small-batch gin sold out completely within 48 hours of launch. The online store became their primary revenue driver, exceeding cellar door retail for the first time in company history.',
    revenueImpact: 'Added $780k in direct-to-consumer e-commerce sales with an average 3.9x ROAS.',
    testimonial: {
      quote:
        'Frame & Funnel understands South Australia, but creates work that looks like it belongs on the streets of New York or London. We went from a regional secret to a national cult brand.',
      author: 'Elena Rossi',
      role: 'Brand Director, KI Craft Spirits',
    },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'creative-fatigue-formula',
    title: 'The Creative Fatigue Formula: Why Your ROAS Collapses After Day 14',
    category: 'Creative That Converts',
    readTime: '6 min read',
    publishedDate: 'November 2026',
    summary:
      'Why media buying tweaks can\'t save an ad whose creative has burned out—and how to build a high-velocity production loop that keeps CAC low.',
    content: [
      'Every performance marketer knows the sickening feeling: you launch a winning Meta campaign, achieve a 4.5x ROAS in week one, celebrate in Slack, and by day 14 the CPA has doubled and the comment section is dead.',
      'Traditional media buyers blame the algorithm. They adjust bid caps, duplicate ad sets, or change exclusions. This is like rearranging deck chairs on the Titanic. The algorithm didn\'t change; your audience simply developed banner blindness.',
      'To sustain scale, you need a minimum of 4 net-new visual hooks per winning angle every week. If you rely on traditional production shoots, this is financially impossible. By fusing generative AI background pipelines with direct-response psychology, Frame & Funnel produces 20+ cinematic variants in the time it takes an old agency to write a creative brief.',
    ],
    takeaways: [
      'Fatigue happens in the first 3 seconds: change the hook, not the ad set.',
      'High-velocity testing beats "one big heroic commercial" every single time.',
      'AI-powered asset variation reduces production overhead by over 75%.',
    ],
  },
  {
    id: 'ai-commercial-production-stack',
    title: 'The AI Video Ad Stack: How We Cut Commercial Production from 6 Weeks to 72 Hours',
    category: 'AI Advertising',
    readTime: '7 min read',
    publishedDate: 'October 2026',
    summary:
      'A transparent look inside our neural rendering pipeline, virtual lighting rigs, and how we achieve photorealism without the AI slop.',
    content: [
      'Most AI video on social media looks uncanny: distorted hands, plastic skin, and bizarre physics. That\'s what happens when amateur marketers use raw text prompts and hope for the best.',
      'At Frame & Funnel, our founder comes from cinema. We approach AI not as a magic button, but as a virtual studio. We control camera focal length (35mm vs 85mm anamorphic), lens aperture, key-to-fill lighting ratios, and volumetric fog.',
      'By decomposing a commercial into distinct layers—environment generation, product photogrammetry, character performance, and color grading in DaVinci Resolve—we achieve results that cannot be distinguished from a $50k commercial shoot.',
    ],
    takeaways: [
      'Prompting alone produces slop; cinematography theory produces high-end commercials.',
      'Hybrid workflows (AI environment + real product grading) deliver 100% photorealism.',
      'Iteration turnaround drops from 40 days to under 3 days.',
    ],
  },
  {
    id: 'founder-films-as-an-acquisition-asset',
    title: 'Founder Films as an Acquisition Asset: The $100k Deal Engine',
    category: 'Founder-Led Brands',
    readTime: '5 min read',
    publishedDate: 'October 2026',
    summary:
      'Why high-ticket clients don\'t buy companies—they buy convicted leaders with a compelling origin story.',
    content: [
      'If you sell a service priced above $10,000, prospects don\'t make decisions using a rational feature comparison spreadsheet. They buy conviction. They buy identity. They buy the person at the helm.',
      'Yet most coaches and consulting founders run generic screen-recorded webinars with robotic voiceovers. It communicates that you are an amateur.',
      'A Founder Film is a 2 to 3 minute cinematic manifesto. It explains why you built the company, the hard lessons you paid for in blood, and the standard of excellence you enforce. When a prospect watches this before booking a call, sales objections disappear before you even say hello.',
    ],
    takeaways: [
      'Positioning as an authority cuts sales cycles by more than half.',
      'Pre-framing prospects with cinematic origin films boosts show-up rates past 90%.',
      'One great founder film serves as an evergreen acquisition asset for years.',
    ],
  },
  {
    id: 'meta-andromeda-creative-targeting',
    title: 'Meta Andromeda: Why Creative is Now the Only Lever That Matters',
    category: 'Meta Ads',
    readTime: '8 min read',
    publishedDate: 'September 2026',
    summary:
      'How Meta\'s latest machine learning updates rendered micro-targeting obsolete, and why visual narrative dictates who sees your ad.',
    content: [
      'Remember when media buyers spent 3 hours a day tweaking lookalike percentages and interest stacks? Those days are dead and buried.',
      'With Meta\'s modern Advantage+ systems, the algorithm determines who sees your ad based on the semantic content of the video itself. It transcribes audio, identifies visual objects, tracks viewer dwell time, and matches it with high-propensity buyers.',
      'This means if your video creative is generic, you attract generic tire-kickers. If your commercial looks like a luxury film, Meta\'s engine actively finds affluent buyers with high discretionary spending habits.',
    ],
    takeaways: [
      'Broad targeting + exceptional creative beats granular audience segmentation.',
      'Your visual aesthetic actively selects the demographic quality of your buyers.',
      'Invest 80% of your marketing budget into creative production and iteration.',
    ],
  },
  {
    id: 'adelaide-agency-arbitrage',
    title: 'Hollywood Storytelling, Adelaide Pricing: The Creative Arbitrage',
    category: 'Growth Strategy',
    readTime: '5 min read',
    publishedDate: 'August 2026',
    summary:
      'Why global brands are turning to boutique South Australian studios for high-impact performance creative.',
    content: [
      'Sydney and Melbourne agencies charge astronomical retainers primarily to pay for their glass skyscraper rent and bloated account management teams. Very little of that money goes into the actual craft.',
      'Adelaide has quietly become a global powerhouse for visual arts, visual effects, and boutique commercial production. We combine that elite creative talent with lean, AI-accelerated workflows.',
      'The result? Our clients receive commercials that look like they cost $80,000 to shoot in Hollywood, delivered at transparent rates that leave ample budget for paid media deployment.',
    ],
    takeaways: [
      'Eliminate agency overhead bloat: pay for creative and growth engineers, not fancy offices.',
      'South Australian talent provides world-class quality at high capital efficiency.',
      'Speed and agility always beat bloated corporate holding company agencies.',
    ],
  },
  {
    id: 'google-pmax-video-dominance',
    title: 'Cracking Google Performance Max with High-Paced AI Video Ads',
    category: 'Google Ads',
    readTime: '6 min read',
    publishedDate: 'July 2026',
    summary:
      'How to stop Google from auto-generating terrible robotic slideshows and unlock 35%+ higher conversions on YouTube.',
    content: [
      'If you don\'t provide Google Performance Max with high-resolution video assets, Google will automatically string together your static photos into an embarrassing, robotic slideshow with generic background music.',
      'This auto-generated garbage kills your brand prestige and ruins your conversion rate. By supplying 3 distinct aspect ratios of high-octane cinematic commercial creative, you force Google\'s algorithm to place your ads in high-value YouTube Shorts and streaming inventory.',
      'We will show you the exact 15-second pacing structure we use to generate high-intent search clicks from cold video viewers.',
    ],
    takeaways: [
      'Never allow Google to auto-generate video assets for your brand.',
      'YouTube Shorts requires vertical 9:16 cuts with instantaneous hook velocity.',
      'Pairing high-end video with exact match search creates unmatched brand recall.',
    ],
  },
];

export const FAQ_LIST = [
  {
    question: 'How do you create commercials without a 20-person film crew?',
    answer:
      'We combine our founder\'s 10+ years of film directing experience with proprietary AI image, 3D environment, and neural video generation tools. We direct the camera angles, lighting, lens choices, and pacing digitally, eliminating location permits, catering, equipment rentals, and crew overheads. When a project benefits from real-world capture, we blend live footage with AI environments seamlessly.',
  },
  {
    question: 'What is the turnaround time from kickoff to live ads?',
    answer:
      'For our FRAME™ and FRAME + FUNNEL™ packages, we deliver the first complete commercial master cuts within 5 to 7 business days. Once the master direction is approved, we generate new weekly hook and angle variants within 48 to 72 hours.',
  },
  {
    question: 'What kind of ad spend do I need to work with Frame & Funnel?',
    answer:
      'Our systems deliver the highest return for brands spending between AUD $5,000 and $100,000+ per month across Meta and Google. If you are an early-stage brand spending under $5,000/month, our standalone FRAME™ Commercial Production or Creative Performance Audit is the ideal starting point.',
  },
  {
    question: 'Do I own the full intellectual property rights to the commercials?',
    answer:
      'Yes, 100%. You receive complete, perpetual commercial and broadcast usage rights to all final delivered video assets, voiceovers, music licenses, and ad copy. We provide the 4K/8K master files and project assets with zero ongoing royalty fees.',
  },
  {
    question: 'What happens during the Free 20-Minute Creative Performance Audit?',
    answer:
      'We inspect your live Meta & Google ads, analyze your website conversion funnel, benchmark your hook rates against competitors, and identify your top 3 profit leaks. You leave the call with a concrete action plan, whether you hire us or not.',
  },
  {
    question: 'Are you based in Adelaide, and do you work with interstate/international clients?',
    answer:
      'Yes! Our studio headquarters is located on North Terrace in Adelaide, South Australia. We proudly support local South Australian businesses face-to-face while managing high-growth e-commerce and coaching accounts across Australia, the US, and the UK.',
  },
];
