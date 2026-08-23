// Mock data for Fuselab Creative clone (frontend-only)

export const IMG = "https://fuselabcreative.com/wp-content/uploads";

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "About Us", href: "#about" },
  {
    label: "Design for AI",
    href: "#design-ai",
    children: [
      { label: "AI Design Agency", href: "#ai-design" },
      { label: "AI Interface Design", href: "#ai-interface" },
      { label: "AI UX Strategy", href: "#ai-ux" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Data Visualization", href: "#data-viz" },
      { label: "AI Interface", href: "#ai-interface-s" },
      { label: "Dashboard Interface", href: "#dashboard" },
      { label: "Map Visualization", href: "#map" },
      { label: "Design for Simulations", href: "#sim" },
    ],
  },
  {
    label: "Design Expertise",
    href: "#expertise",
    children: [
      { label: "Dashboard Design", href: "#exp-dashboard" },
      { label: "Data Visualization", href: "#exp-dataviz" },
      { label: "Interface Design & UX", href: "#exp-ux" },
      { label: "App Development", href: "#exp-app" },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    children: [
      { label: "Healthcare", href: "#ind-health" },
      { label: "FinTech", href: "#ind-fintech" },
      { label: "Government", href: "#ind-gov" },
      { label: "AI and ML", href: "#ind-ai" },
      { label: "Real Estate", href: "#ind-realestate" },
    ],
  },
  { label: "Latest", href: "#latest" },
];

export const hero = {
  title: "UI/UX Design For The Speed of AI Data.",
  subtitle: "Enterprise dashboards, AI interfaces, and data products.",
  videoId: "V80-gPkpH6M",
};

export const strategy = {
  title: "Strategy Meets Audacity",
  p1: "Most user experience design agencies never get briefed on this category of work. The clients below engaged Fuselab on projects where technical and regulatory complexity exceeded what generalist agencies typically take on.",
  p2: "Recent project work spans enterprise dashboards, AI interfaces, regulated healthcare systems, and industrial robotics control. Each card below opens the full case study with the original brief, the research approach, and what shipped. Use the filters to narrow by industry or service area.",
};

export const projects = [
  {
    id: "drone-forge",
    name: "Drone Forge",
    cover: `${IMG}/2026/08/drone-forge-project-cover.avif`,
    categories: ["AI & ML", "Technology"],
    tags: ["App Development", "Dashboard Design", "Data Visualization", "Interface Design and UX"],
  },
  {
    id: "cyberdefend",
    name: "CyberDefend",
    cover: `${IMG}/2026/03/cyberdefend-project-cover.avif`,
    categories: ["AI & ML", "Technology"],
    tags: ["Dashboard Design", "Data Visualization"],
  },
  {
    id: "spectra-stadium",
    name: "Spectra Stadium",
    cover: `${IMG}/2025/12/spectra-stadium-project-cover.avif`,
    categories: ["AI & ML", "Technology"],
    tags: ["App Development", "Dashboard Design", "Data Visualization", "Interface Design and UX"],
  },
  {
    id: "stardog",
    name: "Stardog Voicebox",
    cover: `${IMG}/2025/09/stardog-project-cover.avif`,
    categories: ["AI & ML", "Technology"],
    tags: ["Dashboard Design", "Data Visualization", "Interface Design and UX"],
  },
  {
    id: "clyhealth",
    name: "Clyhealth",
    cover: `${IMG}/2025/09/clyhealth-project-cover.avif`,
    categories: ["AI & ML", "Biotech", "Healthcare", "Technology"],
    tags: ["App Development", "Dashboard Design", "Data Visualization", "Interface Design and UX"],
  },
  {
    id: "hyperfab",
    name: "Hyperfab",
    cover: `${IMG}/2025/06/hyperfab-project-cover-2.avif`,
    categories: ["AI & ML", "Private Sector", "Technology", "Warehouse and Manufacture"],
    tags: ["App Development", "Dashboard Design", "Data Visualization", "Interface Design and UX", "Software Design"],
  },
  {
    id: "digital-management",
    name: "Digital Management Framework",
    cover: `${IMG}/2025/04/digital-management-framework-project-cover-1.avif`,
    categories: ["AI & ML", "Private Sector", "Technology"],
    tags: ["Dashboard Design", "Data Visualization", "Interface Design and UX"],
  },
  {
    id: "effitrack",
    name: "EffiTrack",
    cover: `${IMG}/2024/12/effitrack-project-cover.avif`,
    categories: ["AI & ML", "Private Sector", "Technology"],
    tags: ["Dashboard Design", "Data Visualization", "Interface Design and UX"],
  },
  {
    id: "robodog",
    name: "Robodog AGV",
    cover: `${IMG}/2024/09/robodog-project-cover-1920x765.avif`,
    categories: ["Private Sector", "Technology", "Transportation", "Warehouse and Manufacture"],
    tags: ["Dashboard Design", "Data Visualization", "Interface Design and UX"],
  },
  {
    id: "fiserv",
    name: "Fiserv Small Business Index",
    cover: `${IMG}/2024/03/fiserv-project-cover-1.avif`,
    categories: ["Finance", "Fintech"],
    tags: ["Dashboard Design", "Data Visualization", "Interface Design and UX"],
  },
  {
    id: "estate-link",
    name: "Estate Link",
    cover: `${IMG}/2024/01/estate-link-project-cover-1.avif`,
    categories: ["Private Sector", "Technology"],
    tags: ["Dashboard Design", "Data Visualization", "Interface Design and UX"],
  },
  {
    id: "vasolabs",
    name: "Vasolabs Artery Scan Platform",
    cover: `${IMG}/2023/10/vasolabs-project-cover-1.avif`,
    categories: ["Biotech", "Healthcare"],
    tags: ["App Development", "Dashboard Design", "Data Visualization", "Interface Design and UX", "Web App Design"],
  },
];

export const services = [
  {
    title: "Data Visualization",
    desc: "Dashboards that surface anomalies in two seconds require information design choices most ux design services treat as afterthoughts. Most of the hard work happens before the chart styling stage: choosing the metrics that matter, designing hierarchy that exposes outliers without burying context, and giving non-analysts a path from a number to an action.",
    img: `${IMG}/2026/04/data-visualization.avif`,
  },
  {
    title: "AI Interface",
    desc: "Any UI/UX design agency that ships AI interfaces quickly learns that the underlying system is non-deterministic. Users need to know when the model is confident, when it is guessing, and how to push back on a wrong answer. Confidence indicators, fallback states, and recovery paths matter more than visual polish.",
    img: `${IMG}/2026/04/ai-interface.avif`,
  },
  {
    title: "Dashboard Interface",
    desc: "Most enterprise dashboards fail because they show too much at once. The skill that separates strong dashboard work from generic ui ux design services is editorial restraint: cutting the screen to the metrics that change most often, matter most to the user's role, and connect to a clear next action.",
    img: `${IMG}/2026/04/dashboard-interface.avif`,
  },
  {
    title: "Map Visualization",
    desc: "Geographic accuracy is rarely where map data visualization fails. Most data visualization agencies stop at styling the geo-layer and never address the actual challenges: data legibility at multiple zoom levels, choosing what to surface at each, and giving users filter controls that make the map a tool for exploration rather than a static image.",
    img: `${IMG}/2026/04/map-visualization.avif`,
  },
  {
    title: "Design for Simulations",
    desc: "Operators working in 2D and 3D simulators face cognitive demands most product UX teams never account for. Simulation interface design overlaps with industrial HMI design and game UI more than with traditional digital product design. The differentiator is managing cognitive load during high-stakes interactions: emergency response, training scenarios, and digital twin operations.",
    img: `${IMG}/2026/04/design-for-simulations.avif`,
  },
  {
    title: "Digital Twin Design",
    desc: "The visual layer of a digital twin sits on top of real-time IoT data, sensor feeds, and live simulation, and any interface design agency working in this space treats sub-second latency as non-negotiable. Beyond latency, the design challenge is making system-level patterns visible to humans without losing the ability to drill into individual asset behavior.",
    img: `${IMG}/2026/04/digital-twin-design.avif`,
  },
];

export const teamPhotos = Array.from({ length: 12 }, (_, i) => `${IMG}/2026/07/team-photo-${i + 1}.avif`);

export const industryFilters = [
  "All industries", "AI & ML", "E-commerce", "Finance", "Government",
  "Healthcare", "Non-Profit", "Private Sector", "Space", "Technology",
  "Transportation", "Travel",
];

export const clients = [
  { name: "Google", logo: `${IMG}/2026/03/google.avif`, desc: "AI-driven product design and user experience services", industries: ["AI & ML", "Technology"], caseStudy: false },
  { name: "Uber", logo: `${IMG}/2023/07/uber-logo.png`, desc: "Mobile app design for transportation services", industries: ["Transportation", "Technology"], caseStudy: true },
  { name: "EY", logo: `${IMG}/2026/03/ey.avif`, desc: "Enterprise digital twin design", industries: ["Private Sector", "Finance"], caseStudy: false },
  { name: "NASA", logo: `${IMG}/2023/07/nasa-logo.png`, desc: "Data visualization and UX design for America's space agency", industries: ["Space", "Government"], caseStudy: false },
  { name: "NIH", logo: `${IMG}/2023/07/nih-logo.png`, desc: "Healthcare interface design for the National Institutes of Health", industries: ["Healthcare", "Government"], caseStudy: false },
  { name: "Avison Young", logo: `${IMG}/2026/03/avison-young.avif`, desc: "AI-canvas platform for commercial real estate", industries: ["Private Sector", "AI & ML"], caseStudy: false },
  { name: "Informa", logo: `${IMG}/2023/07/informa-logo.avif`, desc: "Interface design for a global knowledge and information company", industries: ["Technology", "Private Sector"], caseStudy: false },
  { name: "Mozilla", logo: `${IMG}/2023/06/mozilla.png`, desc: "Open-source voice data platform design", industries: ["Technology", "Non-Profit"], caseStudy: true },
  { name: "Grid AI", logo: `${IMG}/2023/06/grid-ai-logo.avif`, desc: "Machine learning dashboard and interface design", industries: ["AI & ML", "Technology"], caseStudy: true },
  { name: "Geotab", logo: `${IMG}/2023/06/geotab.png`, desc: "One platform for connected and sustainable fleet performance", industries: ["Transportation", "Technology"], caseStudy: true },
  { name: "POGO", logo: `${IMG}/2023/06/pogo.png`, desc: "Government spending transparency and data visualization", industries: ["Government", "Non-Profit"], caseStudy: true },
  { name: "Blis", logo: `${IMG}/2023/06/blis.png`, desc: "Advertising technology platform design", industries: ["Technology", "Private Sector"], caseStudy: true },
  { name: "Nike", logo: `${IMG}/2023/06/nike.png`, desc: "Custom print and digital experience design", industries: ["E-commerce", "Private Sector"], caseStudy: true },
  { name: "Bearn", logo: `${IMG}/2023/06/bearn.png`, desc: "Bearn digital health and wellness technology", industries: ["Healthcare", "Technology"], caseStudy: true },
  { name: "Rybbon", logo: `${IMG}/2023/06/rybbon.png`, desc: "Digital rewards and e-gift card platform design", industries: ["E-commerce", "Technology"], caseStudy: false },
  { name: "ReferralMd", logo: `${IMG}/2023/06/referralmd-logo.avif`, desc: "Healthcare referral management and EHR platform design", industries: ["Healthcare"], caseStudy: true },
  { name: "GeoTourist", logo: `${IMG}/2023/06/geo-tourist.png`, desc: "Experience your environment in a new and inspiring way", industries: ["Travel", "Technology"], caseStudy: true },
  { name: "Novadontics", logo: `${IMG}/2026/03/novadontics.avif`, desc: "Dental EHR, scheduling, and marketing platform design", industries: ["Healthcare"], caseStudy: false },
  { name: "Aircraft Bluebook", logo: `${IMG}/2026/03/aircraft-bluebook.avif`, desc: "Aircraft valuation data platform design", industries: ["Transportation", "Technology"], caseStudy: false },
  { name: "George Mason University", logo: `${IMG}/2026/03/george-mason-university.avif`, desc: "AI-powered healthcare injury records platform design", industries: ["Healthcare", "AI & ML"], caseStudy: false },
  { name: "Aviation Week", logo: `${IMG}/2026/03/aviation-week.avif`, desc: "Aviation industry information platform design", industries: ["Transportation", "Technology"], caseStudy: false },
  { name: "Corelight", logo: `${IMG}/2026/03/corelight.avif`, desc: "Cybersecurity threat detection platform design", industries: ["Technology", "AI & ML"], caseStudy: false },
  { name: "RhythmX AI", logo: `${IMG}/2026/03/rhythmx-ai.avif`, desc: "Healthcare AI platform and data experience design", industries: ["Healthcare", "AI & ML"], caseStudy: false },
  { name: "Handshake", logo: `${IMG}/2023/06/handshake.png`, desc: "Professional networking and career platform design", industries: ["Technology", "Private Sector"], caseStudy: true },
];

export const industries = [
  { name: "Healthcare", icon: `${IMG}/2025/08/healthcare-industry-icon.svg` },
  { name: "Transportation and Logistics", icon: `${IMG}/2025/08/transportation-and-logistics-industry-icon.svg` },
  { name: "Travel", icon: `${IMG}/2025/08/travel-industry-icon.svg` },
  { name: "AI and ML", icon: `${IMG}/2025/08/ai-and-ml-industry-icon.svg` },
  { name: "Ecommerce and Retail", icon: `${IMG}/2025/08/ecommerce-and-retail-industry-icon.svg` },
  { name: "Government & Non-Profit", icon: `${IMG}/2025/08/government-and-non-profit.svg` },
  { name: "Financial Services", icon: `${IMG}/2023/11/finance-app-development-service-avatar-bg.png` },
  { name: "FinTech", icon: `${IMG}/2025/08/fintech-industry-icon.svg` },
  { name: "Manufacturing & Robotics", icon: `${IMG}/2025/08/manufacturing-and-robotics-industry-icon.svg` },
  { name: "Real Estate", icon: `${IMG}/2025/08/real-estate-industry-icon.svg` },
];

export const testimonials = [
  { quote: "We went from prototype to usable software lightening fast, and our customer reviews have never been better.", name: "Glenn Kimball", role: "CIO & CISO, HealthPals", avatar: `${IMG}/2025/08/glenn-kimball-avatar.avif` },
  { quote: "Their creativity and mastery of UX UI design has made our years of working together enjoyable and incredibly successful!", name: "Luanne Vreugdenhil", role: "Head of Product Development, Bearn", avatar: `${IMG}/2025/08/luanne-vreugdenhil-avatar.avif` },
  { quote: "If you need to re-think your product and need some truly unique design talent, Fuselab Creative design team is your answer.", name: "Jacob Jones", role: "Product Designer", avatar: `${IMG}/2025/08/jacob-jones-avatar.avif` },
  { quote: "We needed a nimble team of UX UI designers to work with our development team and they quickly became one of our most vital resources and far exceeded our expectations.", name: "Jay Greenstein", role: "CEO, Playground Studios", avatar: `${IMG}/2025/08/jay-greenstein-avatar.avif` },
];

export const clutch = { rating: "5.0", reviews: "15", recommend: "100%" };

export const blogPosts = [
  { title: "UX metrics: how to measure UX with the numbers that matter", img: `${IMG}/2026/08/healthcare-1920x1228-5.avif` },
  { title: "11 top MVP development companies in the USA for 2026", img: `${IMG}/2026/07/mvp-app-development-1.avif` },
  { title: "SaaS onboarding UX: designing activation flows that retain users", img: `${IMG}/2026/08/saas-onboarding-ux.avif` },
  { title: "Data visualization best practices: charts and tables people read", img: `${IMG}/2026/06/pogo-project.avif` },
  { title: "Sports analytics dashboard design for stadiums in 2026", img: `${IMG}/2026/07/spectra-stadium-project.avif` },
  { title: "Dashboard design system: components for data-heavy products", img: `${IMG}/2026/07/dashboard-design-system.avif` },
];

export const faqs = [
  { q: "What does Fuselab Creative do?", a: "Fuselab Creative is a UI/UX design and digital product agency based in McLean, Virginia, that designs dashboards, data visualizations, and AI interfaces for enterprise and regulated industries. Founded in 2017, we have shipped data-intensive products for NASA, Fiserv, Uber, NIH, and the California Department of Health Care Services. Typical engagements deliver Figma design systems, custom data-visualization libraries, and engineering-ready specifications." },
  { q: "What industries do you specialize in?", a: "Fuselab Creative works across ten industries: healthcare, AI and machine learning, fintech and financial services, government, transportation, manufacturing and warehousing, ecommerce, real estate, and travel. Each engagement adapts to the industry's regulations and standards, including clinical workflows and HIPAA-related requirements in healthcare and Section 508 accessibility for federal projects." },
  { q: "How much does a project cost?", a: "Fuselab Creative prices every project individually after a scoping call, based on product complexity, user roles, compliance needs, and platform scope. You receive a fixed-price proposal before any work begins, so the agreed scope and budget are clear from the start. There are no open-ended hourly engagements." },
  { q: "How long does a typical project take?", a: "Timelines at Fuselab Creative are set during scoping and depend on user roles, platforms, and research scope. Discovery typically takes two to four weeks, with design running in two-week prototype and testing cycles after that. A confirmed timeline is part of every proposal." },
  { q: "How does a project start?", a: "A discovery phase opens every Fuselab Creative engagement, defining business outcomes and research questions before design begins. Prototyping then delivers several design directions for user testing, and iteration continues against the validated goals. New projects typically kick off within two weeks of a signed proposal." },
  { q: "Do you work with federal and government clients?", a: "Federal agencies can procure Fuselab Creative's services through its GSA contract, providing an established government procurement pathway. Government work includes the Medi-Cal interface redesign for the California Department of Health Care Services and data products for NASA and NIH, with Section 508 accessibility requirements incorporated where applicable." },
  { q: "Do you work with startups?", a: "Startups and enterprise teams both hire Fuselab Creative, with scope sized to the client's stage. Early-stage clients such as Grid AI and ClyHealth typically start with an MVP or investor-ready prototype, while enterprises engage for dashboards and regulated product interfaces. Senior practitioners lead every engagement either way." },
  { q: "What makes Fuselab Creative different from other UI/UX design agencies?", a: "Fuselab Creative closes every engagement with a Figma design system your own team can extend, while many agencies structure delivery so each new screen requires another contract. Senior practitioners lead projects directly rather than supervising juniors, and the portfolio centers on regulated enterprise work. For federal buyers, a GSA contract adds direct procurement as well." },
];

export const footer = {
  address: "McLean, Virginia, USA",
  email: "hello@fuselabcreative.com",
  phone: "+1 (703) 574-8181",
  columns: [
    { title: "Services", links: ["Data Visualization", "AI Interface", "Dashboard Interface", "Map Visualization", "Design for Simulations", "Digital Twin Design"] },
    { title: "Industries", links: ["Healthcare", "FinTech", "Government", "AI and ML", "Real Estate", "Transportation"] },
    { title: "Company", links: ["Work", "About Us", "Latest", "Careers", "Contact"] },
  ],
};
