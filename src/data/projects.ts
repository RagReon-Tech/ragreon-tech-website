import type { ProjectItem, PortfolioStats } from '@/types/project.types'

export const projectsData: ProjectItem[] = [
  // 1. Student Information System (SIS) - Completed
  {
    id: 'student-information-system',
    slug: 'student-information-system',
    title: 'Student Information System (SIS)',
    description:
      'Web-based student information management portal for academic records, attendance tracking, and administrative data processing.',
    category: 'Full-Stack Web Development',
    domain: 'Web Development',
    status: 'Completed',
    image: '/projects/student-information-system/cover.png',
    techStack: ['Flask', 'MySQL', 'JavaScript', 'HTML/CSS'],
    challenge:
      'Consolidating disparate student academic records, attendance files, and course allocations into a centralized administrative portal.',
    solution:
      'Engineered a normalized relational database backend using Flask and MySQL with dynamic JavaScript client views.',
    features: [
      'Student profile management',
      'Course enrollment tracking',
      'Academic grade records',
      'Role-based administrative controls',
    ],
  },

  // 2. LoanGauge AI - Completed
  {
    id: 'loangauge-ai',
    slug: 'loangauge-ai',
    title: 'LoanGauge AI',
    description:
      'Intelligent credit verification and loan default risk assessment engine combining web interactivity, data science workflows, and balanced machine learning classification.',
    category: 'FinTech AI & Risk Intelligence',
    domain: 'AI & Machine Learning',
    domains: ['Web Development', 'Data Science', 'AI & Machine Learning'],
    status: 'Completed',
    image: '/projects/loangauge-ai/cover.png',
    techStack: ['Python', 'Scikit-Learn', 'Flask', 'Random Forest', 'Pandas', 'JavaScript'],
    challenge:
      'Detecting minority-class loan defaults across highly skewed historical lending datasets (83.3% non-defaulters) without false-negative leakage.',
    solution:
      'Engineered pre-origination feature pipelines and trained a balanced Random Forest ensemble yielding 2.2x higher defaulter recall and sub-15ms real-time scoring.',
    features: [
      'Real-time loan default risk prediction',
      '2.2x higher defaulter recall (Balanced RF)',
      'Interactive financial sensitivity simulator',
      'Underwriter audit report export (.xlsx & .csv)',
    ],
    githubUrl: 'https://github.com/sreeramganesh/LoanGuard-AI.git',
    demoUrl: 'https://loan-default-risk-prediction-ro68.onrender.com/',
  },

  // 3. AI-Based Cognitive Screening System for Early Dementia Detection - Completed
  {
    id: 'cognitive-screening-system',
    slug: 'cognitive-screening-system',
    title: 'AI-Based Cognitive Screening System for Early Dementia Detection',
    shortTitle: 'AI Cognitive Screening System',
    description:
      'Web-based cognitive screening application utilizing structured multi-task neurocognitive assessments and Random Forest machine learning to evaluate responses and stratify early dementia risk.',
    category: 'Healthcare AI & Cognitive Analytics',
    domain: 'AI & Machine Learning',
    domains: ['Data Science', 'AI & Machine Learning', 'Web Development'],
    status: 'Completed',
    image: '/projects/cognitive-screening-system/cover.png',
    techStack: [
      'Python',
      'Flask',
      'Scikit-Learn',
      'Random Forest',
      'JavaScript',
      'HTML/CSS',
    ],
    challenge:
      'Detecting subtle neurocognitive decline across verbal fluency, spatial memory, and working memory through an accessible digital screening format.',
    solution:
      'Engineered a 10-task interactive assessment battery with automated feature extraction, asynchronous Flask API scoring, and Random Forest risk classification.',
    features: [
      '10 interactive neurocognitive tasks',
      'Automated task-wise scoring engine',
      'Random Forest risk classification',
      'Stratified Low, Moderate & High risk report',
    ],
    githubUrl:
      'https://github.com/sreeramganesh/AI-Based-Cognitive-Screening-System-for-Early-Dementia-Detection.git',
  },

  // 4. UK Transportation Analysis Dashboard - Completed
  {
    id: 'uk-transportation-analysis',
    slug: 'uk-transportation-analysis',
    title: 'UK Transportation Analysis Dashboard',
    description:
      'Power BI & SQL transit intelligence platform analyzing 13.7K journeys, delays, weather momentum, and EV charging equity across 45 UK areas.',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    status: 'Completed',
    techStack: ['Power BI', 'SQL Server', 'T-SQL', 'DAX', 'Power BI Maps'],
    image: '/projects/uk-transportation-analysis/cover.png',
    featured: true,
    challenge:
      'Synthesizing multi-modal transit telemetry across 90 routes to isolate severe delays, weather sensitivities, and regional EV charging disparities.',
    solution:
      'Architected a 4-table relational star schema with 13 T-SQL analytical views, advanced window ranking functions, and time-intelligence DAX momentum models.',
    features: [
      'Top 100 delayed journeys with SQL window ranking',
      'Modal reliability and punctuality benchmarking',
      'Weather impact and 7-day delay momentum tracking',
      'EV charging infrastructure equity and desert mapping',
    ],
    githubUrl:
      'https://github.com/sreeramganesh/UK-Transportation-Analysis-PowerBI-SQL.git',
  },

  // 5. Loan Lending Performance Dashboard - Completed
  {
    id: 'loan-lending-performance-dashboard',
    slug: 'loan-lending-performance-dashboard',
    title: 'Loan Lending Performance Dashboard',
    shortTitle: 'Loan Lending Performance',
    description:
      'An interactive Power BI dashboard analyzing 38,576 retail loan applications, $435.8M in funded capital ($436M), $473.1M in received payments ($473M), debt-to-income ratios (13.33%), and loan performance across 36-month and 60-month terms.',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    status: 'Completed',
    techStack: ['Power BI', 'DAX', 'Data Modeling', 'Power Query', 'Excel'],
    image: '/projects/loan-lending-performance-dashboard/cover.png',
    challenge:
      'Evaluating retail lending portfolio health, capital recovery, and delinquency risk across 38,576 loan records without an integrated business intelligence architecture.',
    solution:
      'Architected a 3-page interactive Power BI dashboard utilizing a Star Schema data model and custom DAX measures for 39K applicants, $436M funded, $473M received, and term risk evaluation.',
    features: [
      'Executive lending KPIs (39K applicants, $436M funded, $473M received, 13.33% DTI, 12.05% interest)',
      'Term risk comparison contrasting 36-month (10.71% bad rate) vs 60-month (22.34% bad rate) loans',
      'Loan status distribution (83.33% Fully Paid, 13.82% Charged Off, 2.85% Current)',
      'Purpose and geographic breakdown across 14 loan purposes and 50 states (California led at 17.87%)',
    ],
    githubUrl:
      'https://github.com/sreeramganesh/Lending-performance-Dashboard.git',
  },

  // 6. Patient Diagnostic Dashboard - Completed
  {
    id: 'patient-diagnostic-dashboard',
    slug: 'patient-diagnostic-dashboard',
    title: 'Patient Diagnostic Dashboard',
    shortTitle: 'Patient Diagnostic Analytics',
    description:
      'A comprehensive healthcare business intelligence dashboard in Power BI analyzing 10,000 clinical encounters across 3,678 unique patients, evaluating fever diagnostic categories, acute admission rates (65.78%), chronic vital indicators, and CRP inflammatory biomarkers.',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    status: 'Completed',
    techStack: ['Power BI', 'DAX', 'Data Modeling', 'Power Query', 'Excel'],
    image: '/projects/patient-diagnostic-dashboard/cover.png',
    challenge:
      'Synthesizing 10,000 clinical visits, fever symptom profiles, chronic vital metrics, and laboratory blood tests across 3,678 unique patients into unified triage decision-support intelligence.',
    solution:
      'Architected a relational healthcare data model in Power BI Desktop linking symptom and blood test fact tables with medication and fever profiles, calculating High-Risk visit volume (3,123 / 31.23%), Admission Rate (65.78%), and CRP inflammation trends.',
    features: [
      'Executive clinical triage tracking (10,000 visits, 3,678 unique patients, 65.78% admission rate)',
      'Fever category admission risk analysis across Typhoid (67.7%), Viral (66.7%), Dengue, and Malaria',
      'Chronic condition tracking for blood pressure distribution and diabetic thresholds',
      'Longitudinal single-patient drill-through telemetry and CRP biomarker timelines',
    ],
    githubUrl:
      'https://github.com/sreeramganesh/Patient-Diagnostic-Dashboard-using-Power-BI.git',
  },

  // 7. E-Commerce Conversion & Sales Analytics Dashboard - Completed
  {
    id: 'ecommerce-conversion-analysis',
    slug: 'ecommerce-conversion-analysis',
    title: 'E-Commerce Conversion & Sales Analytics Dashboard',
    shortTitle: 'E-Commerce Conversion & Sales Analytics',
    description:
      'An interactive Power BI dashboard analyzing £1.98M in e-commerce revenue, customer conversion funnels, product margins, marketing ROAS, and warehouse fulfillment across 10,000 orders.',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    status: 'Completed',
    techStack: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Excel'],
    image: '/projects/ecommerce-conversion-analysis/cover.png',
    challenge:
      'Transforming fragmented e-commerce transactional, web session, and fulfillment data across 10K orders and 8K sessions into unified executive decision-support intelligence.',
    solution:
      'Architected a star schema with 3 fact tables and 8 dimension tables, formulating DAX measures for 4-stage funnel conversion (5.29%), 49.85% gross margins, and marketing ROAS.',
    features: [
      'Executive KPI tracking (£1.98M revenue, £989.4K gross profit, 49.85% margin)',
      '4-stage conversion funnel analysis with device and browser breakdown',
      'Marketing channel ROAS attribution and spend efficiency scatter analysis',
      'Warehouse operations, fulfillment capacity, and return root-cause Pareto',
    ],
    githubUrl:
      'https://github.com/sreeramganesh/E-Commerce-Conversion-Sales-Analytics-Dashboard-using-Power-BI.git',
  },

  // 8. Transmission of Data Between ESPs and Displaying Them in Dashboard - Completed
  {
    id: 'esp-data-transmission',
    slug: 'esp-data-transmission',
    title: 'Transmission of Data Between ESPs and Displaying Them in Dashboard',
    shortTitle: 'ESP Data Transmission & IoT Dashboard',
    description:
      'Multi-node environmental telemetry system gathering sensor data across distributed ESP32 nodes and relaying metrics to ThingSpeak cloud and a live web dashboard.',
    category: 'IoT & Embedded Systems',
    domain: 'IoT & Embedded Systems',
    domains: ['IoT & Embedded Systems', 'Web Development'],
    status: 'Completed',
    image: '/projects/esp-data-transmission/cover.png',
    techStack: [
      'ESP32',
      'DHT22 Sensor',
      'C/C++',
      'ThingSpeak Cloud',
      'REST API',
      'JavaScript',
      'HTML/CSS',
    ],
    challenge:
      'Coordinating synchronized wireless data collection across multiple independent ESP32 sensor nodes without packet collision or cloud API rate-limit bottlenecks.',
    solution:
      'Implemented a star-topology gateway network aggregating DHT22 metrics (GPIO 4), batch-uploading to ThingSpeak 6-field cloud channels, and visualizing on a real-time web dashboard with 20s polling and 5-min offline heartbeat detection.',
    features: [
      '3-Node wireless ESP32 telemetry network',
      'DHT22 precision temperature & humidity sensing (GPIO 4)',
      'Centralized ESP32 gateway aggregator',
      'ThingSpeak 6-field time-series cloud logging',
      'Real-time web monitoring dashboard with 20s polling',
      'Automatic 5-minute node offline heartbeat detection',
    ],
    githubUrl:
      'https://github.com/k-raghu24/Transmission-of-data-between-ESP-s-and-displaying-them-in-Dashboard.git',
  },

  // 9. AI Skills vs Job Risk Dashboard - Completed
  {
    id: 'ai-skills-job-risk',
    slug: 'ai-skills-job-risk',
    title: 'AI Skills vs Job Risk – Global Impact Dashboard',
    shortTitle: 'AI Skills vs Job Risk',
    description:
      'Interactive Power BI labor market intelligence dashboard analyzing 320 global workforce records across 12 countries, 12 industries, and 40 job roles, evaluating AI automation risk, net job creation, and emerging skill demand.',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: ['Data Analytics'],
    status: 'Completed',
    image: '/projects/ai-skills-job-risk/cover.png',
    metrics: '320 Labor Records | 77 DAX Measures | 9-Page Power BI Dashboard',
    techStack: [
      'Power BI',
      'DAX',
      'Power Query',
      'Data Modeling',
      'Excel',
      'Data Analytics',
    ],
    challenge:
      'Quantifying occupational vulnerability and skill resilience against emerging generative AI capabilities across global industries and salary tiers.',
    solution:
      'Engineered a 9-page Power BI dashboard featuring 77 DAX measures, dynamic multi-currency conversions, dense rankings, and interactive risk vs. creation matrices.',
    features: [
      'Interactive 9-page analytical dashboard with dynamic cross-filtering',
      '77 DAX measures powering dense rankings, top-N, and currency conversions',
      'Comparative analysis across 40 occupations and 12 global industries',
      'Dynamic currency converter across 12 world currencies',
      'Multi-variate automation risk vs. job growth demand matrices',
      'Dedicated Free AI Learning Hub with 15 verified course pathways',
    ],
    githubUrl:
      'https://github.com/sreeramganesh/AI-Skills-vs-Job-Risk-Global-Impact-Dashboard-.git',
  },

  // 10. VoltRelay – Battery Swapping Analytics - Completed
  {
    id: 'voltrelay',
    slug: 'voltrelay',
    title: 'VoltRelay – Battery Swapping Analytics',
    shortTitle: 'VoltRelay',
    description:
      'High-throughput operational analytics and battery swapping network diagnostic platform analyzing 3.88M transactions and ₹1.23B revenue across 6 metro hubs in Google Colab.',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: ['Data Analytics', 'Data Science', 'Python Development'],
    status: 'Completed',
    image: '/projects/voltrelay/cover.png',
    techStack: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Google Colab',
      'Data Analytics',
      'Data Science',
    ],
    githubUrl: 'https://github.com/keerthi1719/VoltRelay-Battery-Swapping-Analytics.git',
    demoUrl: 'https://colab.research.google.com/drive/1BApKWs4zyATfs-H4em2uEIO11ggTQJPo?usp=sharing',
    metrics: '3.88M Swaps | 94.04% Reliability | ₹1.23B Analyzed',
    challenge:
      'Diagnosing service failure spikes and battery stockout bottlenecks across 3.88 million EV swap attempts and high-temperature operating conditions.',
    solution:
      'Engineered an end-to-end Python data pipeline in Google Colab, harmonizing 8 telemetry datasets into 12 diagnostic charts covering stockouts, unit margins, and battery degradation.',
    features: [
      '3.88M swap event telemetry pipeline',
      'Hourly diurnal demand & stockout profiling',
      'Vehicle class failure disparity (2W vs 3W)',
      'Direct contribution & B2B fleet economics',
    ],
  },

  // 11. Campfly Sales Analysis Dashboard - Completed
  {
    id: 'campfly-sales-analysis',
    slug: 'campfly-sales-analysis',
    title: 'Campfly Sales Performance Dashboard',
    shortTitle: 'Campfly Sales Analysis',
    description:
      'Interactive Power BI sales intelligence dashboard evaluating $154.57M in revenue across 7,991 transactions, 15 product lines, 50 enterprise accounts, and 100 delivery territories with 92.76% gross profit margin.',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: ['Data Analytics'],
    status: 'Completed',
    image: '/projects/campfly-sales-analysis/cover.png',
    metrics: '7,991 Orders | $154.57M Revenue | 92.76% Profit Margin | 4-Page Power BI',
    techStack: [
      'Power BI',
      'DAX',
      'Power Query',
      'Data Modeling',
      'Excel',
      'Sales Analytics',
    ],
    challenge:
      'Multi-channel revenue tracking across Wholesale, Distributor, and Export channels suffered from data fragmentation and delayed seasonal demand insights.',
    solution:
      'Engineered a centralized 4-page Power BI dashboard featuring executive KPIs, monthly trendlines, customer rankings, and territory heatmaps.',
    features: [
      'Executive KPI tracking ($154.57M Revenue, $143.13M Profit, 92.76% Margin)',
      'Channel revenue distribution (Wholesale 53.67%, Distributor 31.68%, Export 14.64%)',
      'Monthly seasonality analysis isolating March ($14.40M) as peak sales period',
      'Top 10 customer contribution ranking led by Medline ($4.08M) and Pure Group ($3.82M)',
      'Geographical revenue distribution across 100 New Zealand delivery territories',
      'Multi-dimensional slicers filtering by Year (2017-2019), Products, and City',
    ],
    githubUrl:
      'https://github.com/sreeramganesh/Campfly-Sales-Analysis-Dashboard-Power-BI-Project.git',
  },

  // 12. Insurance Risk Overview Dashboard - Completed
  {
    id: 'insurance-risk-overview',
    slug: 'insurance-risk-overview',
    title: 'Insurance Risk Overview Dashboard',
    shortTitle: 'Insurance Risk Overview',
    description:
      'Insurance portfolio and risk analytics dashboard monitoring loss ratios, policy distribution, and risk exposure trends across 50,000 policies.',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    status: 'Completed',
    techStack: ['Power BI', 'DAX', 'Data Modeling', 'Power Query', 'Excel'],
    image: '/projects/insurance-risk-overview/cover.png',
    challenge:
      'Evaluating portfolio-wide risk exposure and claims severity across 50,000 policyholders to isolate high-loss underwriting segments.',
    solution:
      'Architected a relational star schema in Power BI Desktop with custom DAX measures for Loss Ratio (174.59%), High Risk % (52.08%), and claims severity across 4 regions.',
    features: [
      'Portfolio-wide KPI monitoring (50K policies, $4B premium, 174.59% loss ratio)',
      'Risk score comparison across High, Medium, and Low income bands',
      'Regional loss ratio evaluation across West, South, North, and East',
      'Interactive policy risk segmentation and detailed customer audit tables',
    ],
    githubUrl:
      'https://github.com/sreeramganesh/Insurance-Risk-Overview-Dashboard-Power-BI-Project.git',
  },

  // 13. Customer Churn Webpage - Completed
  {
    id: 'customer-churn-webpage',
    slug: 'customer-churn-webpage',
    title: 'Customer Churn Webpage',
    shortTitle: 'ChurnIQ — Customer Churn Intelligence',
    description:
      'Machine learning-based customer analytics and churn prediction web application powered by a balanced Random Forest pipeline and Flask, analyzing 18 customer attributes with 78.6% accuracy and 65.5% churn recall.',
    category: 'AI & Machine Learning',
    domain: 'AI & Machine Learning',
    domains: ['Data Science', 'AI & Machine Learning', 'Web Development'],
    status: 'Completed',
    image: '/projects/customer-churn-webpage/cover.png',
    techStack: [
      'Python',
      'Flask',
      'Scikit-Learn',
      'Random Forest',
      'Pandas',
      'Joblib',
      'HTML5/CSS3',
    ],
    githubUrl: 'https://github.com/k-raghu24/Customer-Churn-Webpage.git',
    metrics: '78.6% Accuracy | 65.5% Churn Recall | 18 Features',
    challenge:
      'Detecting minority-class subscriber churn (26.5% of accounts) without allowing unweighted models to favor majority retention at the expense of high false-negative churn leakage.',
    solution:
      'Engineered an end-to-end ColumnTransformer Scikit-learn pipeline with median/one-hot imputers and a 400-tree balanced Random Forest classifier integrated into a real-time Flask web application.',
    features: [
      'Balanced Random Forest classifier (65.5% churn recall)',
      '18-feature leakage-free prediction schema',
      'Real-time probability scoring & 3-tier risk classification',
      'Interactive ChurnIQ web dashboard with form validation',
    ],
  },

  // 14. AgroLink - Completed
  {
    id: 'agrolink',
    slug: 'agrolink',
    title: 'AgroLink',
    shortTitle: 'AgroLink — Farm-to-Table Marketplace',
    description:
      'Full-stack direct agricultural marketplace connecting local farmers with consumers and commercial buyers to eliminate predatory intermediary markups.',
    category: 'Full-Stack Web Development',
    domain: 'Web Development',
    domains: ['Web Development'],
    status: 'Completed',
    image: '/projects/agrolink/cover.png',
    techStack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS v4',
    ],
    challenge:
      'Connecting smallholder farmers with buyers while preventing inventory overselling race conditions and unauthorized user role escalations.',
    solution:
      'Engineered a Next.js 16 App Router platform with Supabase SSR, dual role-guarded portals (Farmer & Buyer), Row-Level Security, and atomic order placement via PostgreSQL stored procedures.',
    features: [
      'Dual farmer and buyer role-guarded dashboards',
      'Agricultural crop catalog with custom pricing units',
      'Atomic order placement with row-level locking (FOR UPDATE)',
      'Live order lifecycle tracking (Pending -> Confirmed -> Delivered)',
      'Recharts sales analytics and revenue metrics in ₹',
    ],
    githubUrl: 'https://github.com/sreeramganesh/AgroLink-.git',
  },

  // 15. Food Ordering System - Completed
  {
    id: 'food-ordering-system',
    slug: 'food-ordering-system',
    title: 'Food Ordering System',
    shortTitle: 'Food Ordering & Hotel Management',
    description:
      'Full-stack food ordering and restaurant management platform featuring dual Express microservices, MongoDB persistence, interactive swipe-to-cart ordering, dynamic UPI QR generation, and dedicated hotel administrative dashboards.',
    category: 'Full-Stack Web Development',
    domain: 'Web Development',
    domains: ['Web Development'],
    status: 'Completed',
    image: '/projects/food-ordering-system/cover.png',
    techStack: [
      'JavaScript',
      'HTML5/CSS3',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'QRCode.js',
    ],
    githubUrl: 'https://github.com/k-raghu24/Food-Ordering-System.git',
    metrics: 'Dual Express APIs | Multi-Hotel Architecture | MongoDB Backend',
    challenge:
      'Managing synchronized menu updates across multiple independent restaurants while preventing order routing confusion during multi-item customer checkouts.',
    solution:
      'Engineered a dual-server microservices architecture with a customer ordering portal on Port 3000 and an admin management dashboard on Port 4000, utilizing MongoDB subdocument schemas and automated cart splitting per restaurant.',
    features: [
      'Interactive swipe-to-cart card gestures',
      'Dual autocomplete search for hotels and dishes',
      'Dedicated hotel onboarding & menu management dashboard',
      'Automated multi-hotel cart splitting & order routing',
      'Dynamic client-side UPI QR code generation via QRCode.js',
    ],
  },

  // 16. Water Quality Management - Completed
  {
    id: 'water-quality-management',
    slug: 'water-quality-management',
    title: 'Water Quality Management',
    shortTitle: 'Water Quality Management — ML & SHAP',
    description:
      'Applied machine learning and explainable AI framework assessing aquaculture water suitability across 4,300 samples, benchmarking 7 classification models, and pruning features from 14 to 9 with 99.51% accuracy retention.',
    category: 'Data Science',
    domain: 'Data Science',
    domains: ['Data Science', 'AI & Machine Learning', 'Python Development'],
    status: 'Completed',
    image: '/projects/water-quality-management/cover.png',
    metrics: '4,300 Samples | 99.51% RF Accuracy | 14-to-9 Feature SHAP Reduction',
    techStack: [
      'Python',
      'Scikit-Learn',
      'LightGBM',
      'XGBoost',
      'SHAP',
      'Pandas',
      'Seaborn',
      'Jupyter',
    ],
    challenge:
      'Commercial aquaculture requires continuous monitoring of 14 complex biochemical parameters, but lab-intensive titration tests create hazardous delays and prohibitive operational costs.',
    solution:
      'Benchmarked 7 classification algorithms and leveraged TreeExplainer SHAP attribution to safely eliminate 5 reagent-heavy features, proving that 9 easily measurable parameters retain 99.51% multi-class accuracy.',
    features: [
      '7-algorithm benchmark across 4,300 samples (Random Forest champion at 99.51%)',
      'SHAP TreeExplainer quantifying global importance and directional beeswarm attribution',
      'Data-driven feature pruning from 14 to 9 features with near-zero accuracy loss (<0.14%)',
      '14x14 Pearson correlation matrix proving zero multicollinearity (|r| < 0.85)',
      'Synthetic sensor noise robustness testing across 120 repeat iterations',
      '3-tier operational water quality assessment (Excellent, Good, Poor)',
    ],
    githubUrl: 'https://github.com/k-raghu24/Water-Quality-Management.git',
  },

  // 17. Atmosphere – Real-Time Weather Forecast Application - Completed
  {
    id: 'atmosphere',
    slug: 'atmosphere',
    title: 'Atmosphere – Real-Time Weather Forecast Application',
    shortTitle: 'Atmosphere Weather Intelligence',
    description:
      'Dual-interface Python weather intelligence application retrieving real-time atmospheric observations, 3-hour hourly timelines, and 5-day daily forecast summaries via OpenWeatherMap.',
    category: 'Python Development & Automation',
    domain: 'Python Development',
    domains: ['Python Development'],
    status: 'Completed',
    image: '/projects/atmosphere/cover.png',
    techStack: [
      'Python',
      'Tkinter',
      'OpenWeatherMap API',
      'Requests',
      'Pillow (PIL)',
      'Colorama',
    ],
    challenge:
      'Preventing UI freezing and thread race conditions during rapid city searches while providing instant temperature unit conversions without redundant network calls.',
    solution:
      'Engineered a non-blocking background threading architecture with atomic request-ID validation, thread-safe icon caching, and instant in-memory mathematical unit conversions across High-DPI Tkinter GUI and Colorama CLI.',
    features: [
      'Dual High-DPI Tkinter Desktop GUI and Colorama CLI',
      '3-hour chronological hourly forecast timeline (24h horizon)',
      '5-day daily forecast summary with min/max temperature ranges',
      'Atomic request-ID concurrency guard preventing race conditions',
      'Instant in-memory Celsius/Fahrenheit conversion without API calls',
    ],
    githubUrl:
      'https://github.com/sreeramganesh/Real-Time-Weather-Forecast-Application.git',
  },

  // 18. Quiz Master Pro - Completed
  {
    id: 'quiz-master-pro',
    slug: 'quiz-master-pro',
    title: 'Quiz Master Pro',
    shortTitle: 'Quiz Master Pro — PyQt6 Desktop Edition',
    description:
      'High-performance Python desktop evaluation application built with PyQt6 featuring real-time 100ms QTimer countdowns, color-coded urgency thresholds, dynamic speed analytics, and persistent leaderboard tracking.',
    category: 'Python Development & Automation',
    domain: 'Python Development',
    domains: ['Python Development'],
    status: 'Completed',
    image: '/projects/quiz-master-pro/cover.png',
    metrics: 'PyQt6 Desktop GUI | 100ms QTimer Loop | Persistent Leaderboard',
    techStack: [
      'Python',
      'PyQt6',
      'QTimer',
      'Event-Driven GUI',
      'QStackedWidget',
      'Flat-File Database',
    ],
    challenge:
      'Eliminating timer drift in desktop event loops and managing multi-view screen transitions within a single window while ensuring resilient offline score persistence.',
    solution:
      'Engineered a modular PyQt6 desktop architecture with a 100ms high-frequency QTimer, dynamic color-shifting progress bars, single-window QStackedWidget view orchestration, and a delimiter-formatted flat-file database with fail-safe parsing.',
    features: [
      '100ms high-frequency QTimer with dynamic color thresholding',
      '5-view single-window QStackedWidget desktop architecture',
      'Comprehensive performance analytics (Score, Accuracy, Avg Speed/Q)',
      'Persistent flat-file leaderboard with multi-metric tiebreaker sorting',
      'Scrollable post-quiz question-by-question review interface',
      'Alternative interactive terminal CLI mode with live scoring',
    ],
    githubUrl: 'https://github.com/sreeramganesh/Quiz-Master-Pro.git',
  },

  // 19. BloodChain AI - In Progress
  {
    id: 'bloodchain-ai',
    slug: 'bloodchain-ai',
    title: 'BloodChain AI',
    shortTitle: 'BloodChain AI — Intelligent Supply Platform',
    description:
      'Intelligent blood supply chain, inventory synchronization, and logistics platform connecting donors, hospitals, and blood banks with 100-point AI source selection, OSRM road routing, and 30-day statistical demand forecasting.',
    category: 'AI & Full-Stack Development',
    domain: 'Web Development',
    domains: ['Web Development', 'AI & Machine Learning', 'Data Science'],
    status: 'In Progress',
    techStack: [
      'React 19',
      'Tailwind CSS',
      'Supabase',
      'Leaflet',
      'OSRM Routing',
      'Recharts',
      'Holt Linear Smoothing',
    ],
    image: '/projects/bloodchain-ai/cover.png',
    featured: true,
    metrics: '740 Facilities Indexed | 100-pt AI Scoring | OSRM Routing & Holt Forecasting',
    challenge:
      'Preventing critical regional blood shortages and reducing cold-storage expiry wastage without relying on opaque, non-deterministic AI models or fragmented communication channels.',
    solution:
      'Engineered a unified healthcare intelligence platform integrating Supabase real-time synchronization, an explainable 100-point clinical source recommendation engine, OSRM road travel routing, and Holt linear demand forecasting with mandatory human medical review.',
    features: [
      'Explainable 100-point multi-factor clinical source recommendation engine (v2-routes)',
      '30-day statistical demand forecasting via Holt Linear Exponential Smoothing (95% CI)',
      'Dynamic shortage deficit detection with 7-day reserve buffers and depletion timelines',
      'Near-expiry risk monitoring (1-5 days) prioritizing critical units for zero wastage',
      'OSRM road routing engine computing true driving distances and transit durations',
      '3 role-based portals (Donors, Hospitals, Blood Banks) with Leaflet geospatial maps',
    ],
    githubUrl: 'https://github.com/sreeramganesh/BloodChain-AI.git',
    demoUrl: 'https://blood-chain-ai-syjt.vercel.app/',
  },

  // 20. BIS SmartAssist - In Progress
  {
    id: 'bis-smartassist',
    slug: 'bis-smartassist',
    title: 'BIS SmartAssist',
    shortTitle: 'BIS SmartAssist',
    description:
      'An AI-powered assistant that simplifies access to Indian Standards and BIS certification information through Retrieval-Augmented Generation, semantic document retrieval, and local language-model processing.',
    category: 'Artificial Intelligence / NLP / RAG / Full-Stack Development',
    domain: 'AI & Machine Learning',
    domains: ['AI & Machine Learning', 'Python Development', 'Web Development'],
    status: 'In Progress',
    image: '/projects/bis-smartassist/cover.png',
    metrics: '7,808 Vector Records | ChromaDB & Ollama | In Progress',
    techStack: [
      'React',
      'FastAPI',
      'Python',
      'ChromaDB',
      'Sentence Transformers',
      'Ollama',
      'Llama 3.2',
    ],
    featured: true,
    challenge:
      'Navigating thousands of complex Indian Standards, Quality Control Orders, testing guidelines, and official BIS certification procedures.',
    solution:
      'Developing a local Retrieval-Augmented Generation (RAG) assistant combining semantic vector search via ChromaDB and local inference via Ollama (Llama 3.2:3B).',
    features: [
      'Natural-language question answering over Indian Standards',
      'Semantic retrieval from indexed BIS knowledge base (ChromaDB)',
      'Isolated document upload & question answering (PDFs & images)',
      'Locally hosted LLM inference via Ollama (Llama 3.2:3B)',
      'Source-aware responses distinguishing standards from user documents',
    ],
    githubUrl:
      'https://github.com/sreeramganesh/BIS-SmartAssist-AI-Powered-Standards-and-Certification-Assistant.git',
  },

  // 21. Plant Disease Prediction Using Deep Learning and CNN - In Progress
  {
    id: 'plant-disease-prediction',
    slug: 'plant-disease-prediction',
    title: 'Plant Disease Prediction Using Deep Learning and CNN',
    shortTitle: 'Plant Disease Prediction',
    description:
      'Deep learning-based computer vision system utilizing a custom 3-block Convolutional Neural Network with data augmentation to detect and classify foliar crop pathologies from leaf photography.',
    category: 'Deep Learning & Computer Vision',
    domain: 'Deep Learning & Computer Vision',
    domains: [
      'Deep Learning & Computer Vision',
      'AI & Machine Learning',
      'Python Development',
    ],
    status: 'In Progress',
    image: '/projects/plant-disease-prediction/cover.png',
    metrics: 'PlantVillage Dataset | 3-Block CNN Architecture | Model Training In Progress',
    techStack: [
      'Python',
      'TensorFlow',
      'Keras',
      'CNN',
      'Pillow',
      'NumPy',
      'Matplotlib',
    ],
    featured: true,
    challenge:
      'Foliar crop infections spread rapidly when early visible symptoms are misdiagnosed, while manual agronomist lab inspections are slow and costly.',
    solution:
      'Engineering a custom 3-block CNN with 4-tier data augmentation, GlobalAveragePooling2D, and Dropout(0.5) to reliably classify plant disease categories.',
    features: [
      'Automated foliar leaf pathology classification via CNN',
      'Custom 3-block convolutional feature extraction architecture',
      'Dynamic multi-class extraction across PlantVillage taxonomy',
      '4-tier stochastic data augmentation (rotation, zoom, flip, shift)',
      'Global Average Pooling & Dropout (0.5) regularization',
      'Active model training with EarlyStopping and ModelCheckpoint',
    ],
    githubUrl:
      'https://github.com/k-raghu24/Plant-Disease-Prediction-Using-DL-and-CNN.git',
  },
]

/**
 * Dynamically computes portfolio inventory statistics directly from the dataset.
 */
export const getPortfolioStats = (): PortfolioStats => {
  const completedCount = projectsData.filter((p) => p.status === 'Completed').length
  const ongoingCount = projectsData.filter((p) => p.status === 'In Progress').length
  const domainsSet = new Set(projectsData.map((p) => p.domain))

  return {
    completedCount,
    ongoingCount,
    domainsCount: domainsSet.size,
  }
}
