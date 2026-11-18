import type { ServiceDetails } from '@/types/service-details.types'

export const serviceDetailsData: Record<string, ServiceDetails> = {
  // 01. Data Analytics & Business Intelligence
  'data-analytics': {
    id: 'data-analytics',
    slug: 'data-analytics',
    serviceNumber: '01',
    title: 'Data Analytics & Business Intelligence',
    shortTitle: 'Data Analytics & BI',
    category: 'Business Intelligence & Visualization',
    iconName: 'BarChart3',
    highlightColor: 'blue',
    image: '/images/services/data-analytics.jpg',
    hero: {
      headline: 'Transform Complex Business Data into Decisive Insights',
      subheadline: 'Interactive Power BI Dashboards, Executive Reporting & Automated Telemetry',
      supportingText:
        'We help organizations consolidate fragmented operational data into structured, interactive reporting ecosystems. From custom star-schema data models and DAX calculations to intuitive executive dashboards, we enable leaders to spot trends, track performance, and make evidence-backed decisions with complete confidence.',
      ctaLabel: 'Discuss Your Analytics Project',
      techBadges: ['Microsoft Power BI', 'SQL Server & T-SQL', 'DAX Measures', 'Power Query & ETL', 'Data Modeling', 'Excel Analytics'],
    },
    overview: {
      heading: 'What Is Data Analytics & Business Intelligence?',
      conceptExplanation:
        'Data Analytics and Business Intelligence (BI) is the practice of converting raw, disconnected business records—such as sales orders, patient telemetry, inventory logs, or financial statements—into structured, understandable visual narratives. Instead of drowning in endless spreadsheet rows, decision-makers interact with dynamic charts, trendlines, and KPIs that instantly highlight organizational health.',
      howItWorks:
        'Raw data is systematically ingested from databases, APIs, or spreadsheets, cleansed and normalized through automated ETL pipelines, modeled into relational star or snowflake schemas, and brought to life through tailored DAX formulas and cross-filtering visual canvas layouts.',
      realWorldContext:
        'Whether evaluating multi-channel retail profit margins, hospital patient admission risk, or regional transit delays, modern BI bridges the gap between stored database rows and strategic executive action.',
      commonUseCases: [
        'Executive C-suite KPIs and operational health scorecards',
        'Sales performance, monthly seasonality, and customer profitability rankings',
        'Financial portfolio risk monitoring and delinquency rate tracking',
        'Healthcare clinical encounters, patient triage, and biomarker analysis',
        'Supply chain transit tracking, route punctuality, and logistics delays',
      ],
    },
    importance: {
      heading: 'Why Is Business Intelligence Vital for Modern Organizations?',
      description:
        'Organizations today capture unprecedented amounts of transactional data. Without proper business intelligence, this information remains an underutilized cost center rather than a competitive advantage.',
      points: [
        {
          title: 'Eliminate Spreadsheet Gridlock',
          explanation: 'Replace fragile, manual Excel files with automated, refreshable reporting pipelines that update at the push of a button.',
          iconName: 'FileSpreadsheet',
        },
        {
          title: 'Sub-Second Anomaly & Trend Detection',
          explanation: 'Spot margin declines, customer churn spikes, or inventory bottlenecks before they escalate into costly operational crises.',
          iconName: 'TrendingUp',
        },
        {
          title: 'Unified Single Source of Truth',
          explanation: 'Align finance, operations, and sales around identical calculated measures and standardized business definitions.',
          iconName: 'Database',
        },
        {
          title: 'Data-Backed Strategic Confidence',
          explanation: 'Empower executive teams to negotiate vendor terms, allocate budgets, and launch initiatives based on verified historical data.',
          iconName: 'ShieldCheck',
        },
      ],
    },
    problemsSolved: [
      {
        id: 1,
        title: 'Manual, Time-Consuming Reporting Cycles',
        explanation: 'Teams spend days every month manually cutting, pasting, and reconciling disparate spreadsheet tabs instead of analyzing results.',
        impact: 'Automated data models cut monthly reporting latency from 3–5 days to instant on-demand dashboards.',
        iconName: 'Clock',
      },
      {
        id: 2,
        title: 'Scattered & Inconsistent Data Sources',
        explanation: 'Transactional records live in separate CRMs, ERPs, accounting software, and spreadsheets with mismatched customer IDs.',
        impact: 'Robust Power Query ETL pipelines sanitize, normalize, and link disparate feeds into a unified schema.',
        iconName: 'Layers',
      },
      {
        id: 3,
        title: 'Lack of Granular Performance Visibility',
        explanation: 'Management knows overall revenue numbers but lacks the ability to filter down by territory, product line, channel, or customer.',
        impact: 'Multi-dimensional slicers and synchronized drill-throughs isolate exact margin contributors in seconds.',
        iconName: 'Search',
      },
      {
        id: 4,
        title: 'Hidden Portfolio & Operational Risk',
        explanation: 'Delinquencies, claims severity, or transit failures go unnoticed until aggregate quarterly reports reveal severe financial loss.',
        impact: 'Dynamic threshold indicators and risk stratification cards surface high-risk clusters immediately.',
        iconName: 'AlertTriangle',
      },
    ],
    solutionsCapabilities: [
      {
        id: 1,
        title: 'Interactive Power BI Dashboard Engineering',
        description: 'End-to-end report design featuring intuitive navigation, custom dark or light themes, dynamic slicers, and synchronized canvas layouts.',
        deliverables: ['Custom page layouts & mobile-responsive views', 'Interactive drill-through and drill-down paths', 'Custom visual palettes matching your brand'],
        iconName: 'LayoutDashboard',
      },
      {
        id: 2,
        title: 'Complex DAX Calculation & Analytical Modeling',
        description: 'Advanced Data Analysis Expressions (DAX) powering dynamic time intelligence, rolling averages, dense window rankings, and multi-currency conversion.',
        deliverables: ['Time intelligence (YTD, MoM, YoY growth)', 'Currency switches across global exchange rates', 'Pareto 80/20 & Top-N dynamic ranking rules'],
        iconName: 'Calculator',
      },
      {
        id: 3,
        title: 'Relational Star Schema & ETL Data Engineering',
        description: 'Normalization of raw flat files into performant fact and dimension tables linked with one-to-many relationships for optimal query speed.',
        deliverables: ['Automated Power Query M transformations', 'Data dictionary and schema documentation', 'Calendar dimension with fiscal period hierarchies'],
        iconName: 'Database',
      },
      {
        id: 4,
        title: 'Executive KPI Cards & Decision-Support Visuals',
        description: 'High-density summary scorecards that synthesize tens of thousands of rows into actionable operational metrics with clear visual indicators.',
        deliverables: ['Target vs. actual variance gauges', 'Geospatial bubble maps & territory density heatmaps', 'Deficit/surplus alerting indicators'],
        iconName: 'Activity',
      },
    ],
    technologies: [
      { name: 'Microsoft Power BI', role: 'Primary BI Canvas & Visualization Engine', context: 'Used for report canvas creation, data model relationships, and synchronized visual cross-filtering.', category: 'Visualization' },
      { name: 'DAX (Data Analysis Expressions)', role: 'Analytical Calculation Layer', context: 'Used to write measures for rolling metrics, time intelligence, dense ranking, and currency conversions.', category: 'Calculations' },
      { name: 'Power Query (M Formula)', role: 'Data Extraction & Transformation', context: 'Cleanses, reshapes, unpivots, and merges raw datasets into normalized tabular models.', category: 'ETL' },
      { name: 'Microsoft SQL Server & T-SQL', role: 'Relational Ingestion & Analytical Views', context: 'Used for relational querying, window functions (ROW_NUMBER), and high-throughput data staging.', category: 'Database' },
      { name: 'Microsoft Excel', role: 'Tabular Staging & Ad-hoc Auditing', context: 'Serves as data input, quick data auditing, and cross-reconciliation baseline.', category: 'Spreadsheets' },
      { name: 'Star Schema Data Modeling', role: 'Architectural Framework', context: 'Organizes data into centralized fact tables surrounded by standardized dimension tables for fast in-memory execution.', category: 'Architecture' },
    ],
    developmentProcess: [
      { stepNumber: 1, title: 'Discovery & Business KPI Framing', description: 'We identify core strategic metrics, decision points, user roles, and existing data source limitations.', deliverables: ['KPI definition matrix', 'Target user personas'] },
      { stepNumber: 2, title: 'Data Audit, Ingestion & Sanitation', description: 'We evaluate raw schema consistency, clean missing records, and construct automated Power Query transformations.', deliverables: ['Data sanitation pipeline', 'ETL documentation'] },
      { stepNumber: 3, title: 'Relational Data Modeling', description: 'We construct normalized Star or Snowflake schema models with verified one-to-many cardinality and dedicated date hierarchies.', deliverables: ['Schema relationship diagram', 'Fact/dimension table definitions'] },
      { stepNumber: 4, title: 'DAX Formulation & Measure Engineering', description: 'We formulate and test robust DAX measures for time intelligence, percentage distributions, rankings, and currency calculations.', deliverables: ['Validated measure library', 'Metric audit reports'] },
      { stepNumber: 5, title: 'Visual Canvas Design & User Testing', description: 'We craft high-fidelity, interactive report pages with ergonomic slicers, intuitive color psychology, and drill-through paths.', deliverables: ['Interactive report canvas', 'User feedback iterations'] },
      { stepNumber: 6, title: 'Documentation & Knowledge Handover', description: 'We deliver comprehensive project documentation, metric definitions, and instructions for automated data refresh.', deliverables: ['Technical report documentation', 'PDF walkthrough and dossier'] },
    ],
    relatedProjectSlugs: [
      'uk-transportation-analysis',
      'loan-lending-performance-dashboard',
      'patient-diagnostic-dashboard',
      'ecommerce-conversion-analysis',
      'ai-skills-job-risk',
      'voltrelay',
      'campfly-sales-analysis',
      'insurance-risk-overview',
    ],
    whyChooseUs: [
      { title: 'Proven Real-World Track Record', description: 'We have engineered robust dashboards analyzing millions in revenue, tens of thousands of healthcare visits, and nationwide transit routes.', iconName: 'Award' },
      { title: 'Deep Architectural Modeling Rigor', description: 'We do not simply generate pretty charts; we architect clean star-schema relational foundations that scale efficiently without performance lag.', iconName: 'Layers' },
      { title: 'Auditable & Documented Formulations', description: 'Every single DAX measure and ETL transformation is documented, verifiable, and accompanied by transparent logic.', iconName: 'FileCheck' },
      { title: 'Human-Centered Ergonomics', description: 'Our dashboards are designed for immediate clarity, ensuring busy non-technical executives can extract insights within seconds.', iconName: 'Eye' },
    ],
    faqs: [
      { question: 'What is a Power BI dashboard, and how does it help my business?', answer: 'A Power BI dashboard is an interactive visual analytics application that connects directly to your business data. Rather than reading static spreadsheets, you can click on charts, filter by dates or regions, and watch every visual dynamically recalculate in real time to reveal insights.' },
      { question: 'Can you build dashboards using messy, multi-sheet Excel files or CSVs?', answer: 'Yes. One of our core strengths is using Power Query ETL pipelines to clean, reshape, merge, and normalize messy, unstandardized spreadsheets into reliable relational data models.' },
      { question: 'Do you create custom calculated metrics and financial ratios?', answer: 'Absolutely. We formulate custom DAX expressions for complex requirements including time-intelligence comparisons (YoY, MoM), customer lifetime value, default risk rates, rolling delay momentums, and multi-currency conversions.' },
      { question: 'Can we interact with the dashboards on mobile devices and tablets?', answer: 'Yes. We design responsive layouts and dedicated mobile-friendly canvas views to ensure executives can monitor critical KPIs seamlessly from phones or tablets.' },
      { question: 'What happens when our underlying business data updates?', answer: 'Our models are architected for seamless re-ingestion. When new monthly files or database rows arrive, refreshing the dataset automatically recalculates all DAX measures, charts, and KPI cards.' },
    ],
  },

  // 02. Data Science
  'data-science': {
    id: 'data-science',
    slug: 'data-science',
    serviceNumber: '02',
    title: 'Data Science & Statistical Analysis',
    shortTitle: 'Data Science',
    category: 'Statistical Analytics & Feature Engineering',
    iconName: 'Database',
    highlightColor: 'cyan',
    image: '/images/services/data-science.jpg',
    hero: {
      headline: 'Uncover Hidden Patterns and Drive Data-Backed Decisions',
      subheadline: 'Exploratory Data Analysis, Statistical Modeling & Scientific Feature Engineering',
      supportingText:
        'We bridge the gap between raw data collection and strategic business action. Using Python scientific libraries, hypothesis testing, and systematic feature transformation, we help organizations understand customer behavior, diagnose operational bottlenecks, and formulate reliable mathematical models.',
      ctaLabel: 'Discuss Your Data Science Project',
      techBadges: ['Python 3', 'Pandas & NumPy', 'Matplotlib & Seaborn', 'Exploratory Data Analysis', 'Statistical Inference', 'Feature Engineering'],
    },
    overview: {
      heading: 'What Is Data Science?',
      conceptExplanation:
        'Data Science is the systematic application of statistics, programming, and domain knowledge to extract meaningful insights from structured and unstructured data. It goes beyond descriptive reporting by investigating *why* trends occur, which variables correlate, and how future behavior can be reliably modeled.',
      howItWorks:
        'Data scientists clean messy datasets, handle missing values and outliers, perform exploratory statistical tests, engineer novel mathematical features, and produce reproducible analysis workflows using Python notebooks and computational scripts.',
      realWorldContext:
        'From analyzing electric vehicle battery degradation factors to stratifying dementia cognitive indicators or isolating customer churn signals, data science provides the analytical backbone for modern technology products.',
      commonUseCases: [
        'Exploratory Data Analysis (EDA) on newly captured organizational datasets',
        'Customer segmentation, churn propensity, and behavioral clustering',
        'Statistical hypothesis testing and correlation matrix evaluation',
        'Feature transformation, scaling, and dimensionality reduction for machine learning',
        'Predictive modeling and scenario sensitivity simulations',
      ],
    },
    importance: {
      heading: 'Why Invest in Systematic Data Science?',
      description:
        'Intuition alone is insufficient in complex competitive environments. Data science equips teams with empirical evidence to optimize resources, reduce risk, and validate assumptions.',
      points: [
        {
          title: 'Detect Non-Obvious Correlations',
          explanation: 'Identify subtle interdependencies between variables that simple manual reviews or basic averages completely miss.',
          iconName: 'Search',
        },
        {
          title: 'Prevent Biased Decision-Making',
          explanation: 'Rely on statistical significance and rigorous probability distributions rather than gut instinct or loudest-voice assumptions.',
          iconName: 'Scale',
        },
        {
          title: 'Foundation for Machine Learning',
          explanation: 'Machine learning models are only as good as the features fed into them. Rigorous data engineering ensures high model accuracy.',
          iconName: 'Cpu',
        },
        {
          title: 'Quantified Risk & Sensitivity Scenarios',
          explanation: 'Simulate how changes in pricing, terms, or operational parameters affect risk and return before committing capital.',
          iconName: 'TrendingUp',
        },
      ],
    },
    problemsSolved: [
      {
        id: 1,
        title: 'Severe Data Imbalance & Skewness',
        explanation: 'Real-world datasets (like loan defaulters or rare medical conditions) frequently feature 80–90% negative instances, leading naive algorithms to fail.',
        impact: 'We apply resampling, SMOTE, class-weight balancing, and stratified validation to ensure accurate minority-class detection.',
        iconName: 'Sliders',
      },
      {
        id: 2,
        title: 'Noisy, Incomplete & Duplicate Datasets',
        explanation: 'Raw telemetry and customer records contain missing entries, inconsistent formats, and outliers that distort analysis.',
        impact: 'Systematic imputation pipelines, z-score outlier detection, and encoding ensure pristine analytical data.',
        iconName: 'AlertTriangle',
      },
      {
        id: 3,
        title: 'Unclear Variable Importance',
        explanation: 'Organizations track hundreds of parameters but do not know which factors truly drive customer churn, risk, or mechanical failure.',
        impact: 'Feature importance ranking, correlation analysis, and SHAP explainability isolate high-impact variables.',
        iconName: 'BarChart2',
      },
      {
        id: 4,
        title: 'Inaccessible Black-Box Predictions',
        explanation: 'Complex statistical outputs confuse stakeholders when presented without plain-English explanations or actionable context.',
        impact: 'We translate statistical findings into clear visualizations, sensitivity simulators, and executive executive summaries.',
        iconName: 'Eye',
      },
    ],
    solutionsCapabilities: [
      {
        id: 1,
        title: 'End-to-End Exploratory Data Analysis (EDA)',
        description: 'Comprehensive auditing of raw datasets with distribution histograms, correlation heatmaps, boxplot outlier scans, and statistical summaries.',
        deliverables: ['Detailed EDA notebooks & visualizations', 'Data quality & integrity audit reports', 'Key correlation & trend takeaways'],
        iconName: 'BarChart3',
      },
      {
        id: 2,
        title: 'Advanced Feature Engineering & Selection',
        description: 'Creating high-signal mathematical features from raw variables (ratios, interaction terms, cyclical encodings, binned risk buckets).',
        deliverables: ['Normalized & standardized feature vectors', 'One-hot & target encoding pipelines', 'Feature importance ranking evaluations'],
        iconName: 'Cpu',
      },
      {
        id: 3,
        title: 'Statistical Hypothesis Testing & Modeling',
        description: 'Applying ANOVA, t-tests, chi-square tests, and regression models to determine whether observed business differences are statistically significant.',
        deliverables: ['P-value & confidence interval reports', 'Regression parameter estimates', 'Hypothesis validation summaries'],
        iconName: 'Calculator',
      },
      {
        id: 4,
        title: 'Interactive Sensitivity Simulators',
        description: 'Building interactive client-facing simulators where users can slide input parameters and watch predicted outcomes recalculate in real time.',
        deliverables: ['Web-based interactive parameter sliders', 'What-if financial sensitivity tools', 'Automated report export (.xlsx/.csv)'],
        iconName: 'Sliders',
      },
    ],
    technologies: [
      { name: 'Python', role: 'Core Scientific Programming Runtime', context: 'Primary environment for writing data pipelines, statistical calculations, and analytical algorithms.', category: 'Languages' },
      { name: 'Pandas', role: 'Data Manipulation & DataFrame Operations', context: 'Used for dataset loading, joining, grouping, aggregation, time series reslicing, and cleaning.', category: 'Data Wrangling' },
      { name: 'NumPy', role: 'Vectorized Numerical Computing', context: 'Provides high-performance multi-dimensional array operations and linear algebra routines.', category: 'Mathematics' },
      { name: 'Matplotlib & Seaborn', role: 'Statistical Visualizations & Graphing', context: 'Generates correlation heatmaps, distribution plots, regression lines, and publication-ready graphs.', category: 'Visualization' },
      { name: 'Scikit-Learn Preprocessing', role: 'Feature Scaling & Encoders', context: 'Implements StandardScaler, MinMaxScaler, OneHotEncoder, and train-test partitioning.', category: 'Preprocessing' },
      { name: 'Jupyter Notebooks', role: 'Interactive Exploratory Environment', context: 'Used for literate programming, visual research documentation, and reproducible analytical workflows.', category: 'Development' },
    ],
    developmentProcess: [
      { stepNumber: 1, title: 'Problem Formulation & Data Scoping', description: 'We define the analytical questions, establish success criteria, and audit existing dataset schemas.', deliverables: ['Research objective document', 'Target outcome definitions'] },
      { stepNumber: 2, title: 'Data Cleaning & Quality Verification', description: 'We handle missing values, resolve data type discrepancies, and detect aberrant measurement outliers.', deliverables: ['Cleaned dataset repository', 'Data audit log'] },
      { stepNumber: 3, title: 'Exploratory Visual & Statistical Analysis', description: 'We plot variable distributions, inspect correlation heatmaps, and test hypothesis assumptions.', deliverables: ['Comprehensive EDA notebook', 'Visual findings gallery'] },
      { stepNumber: 4, title: 'Feature Engineering & Selection', description: 'We create domain-specific features, apply mathematical scaling, and select variables that maximize predictive signal.', deliverables: ['Feature pipeline code', 'Feature importance rankings'] },
      { stepNumber: 5, title: 'Validation & Sensitivity Modeling', description: 'We validate statistical models across stratified splits and build interactive sensitivity simulation tools.', deliverables: ['Cross-validation results', 'Interactive simulator'] },
      { stepNumber: 6, title: 'Synthesized Reporting & Delivery', description: 'We translate analytical conclusions into clear executive takeaways, actionable recommendations, and clean code.', deliverables: ['Executive analytical dossier', 'Reproducible codebase'] },
    ],
    relatedProjectSlugs: [
      'loangauge-ai',
      'cognitive-screening-system',
      'voltrelay',
      'customer-churn-webpage',
      'water-quality-management',
      'bloodchain-ai',
    ],
    whyChooseUs: [
      { title: 'Rigorous Mathematical Grounding', description: 'We do not rely on automated black-box tools; our feature engineering and statistical models are built with sound mathematical fundamentals.', iconName: 'Brain' },
      { title: 'Practical, Problem-First Approach', description: 'We focus on answering real operational questions—such as default rates, battery life, or patient risks—rather than abstract theory.', iconName: 'Target' },
      { title: 'Proven Real-World Implementations', description: 'Our data science pipelines power live credit scoring tools, water quality classification systems, and healthcare screening platforms.', iconName: 'Award' },
      { title: 'Transparent & Reproducible Code', description: 'All scripts, notebooks, and pipelines are cleanly commented and organized for seamless handover and auditing.', iconName: 'Code' },
    ],
    faqs: [
      { question: 'What is the difference between Data Science and Data Analytics?', answer: 'Data Analytics primarily focuses on examining historical data to answer "what happened" through interactive dashboards and reports. Data Science uses statistical methods, hypothesis testing, and advanced feature engineering to ask "why did it happen" and "what is likely to happen next."' },
      { question: 'What kind of data do you need to begin a data science project?', answer: 'We can work with structured tabular data (CSV, Excel, SQL databases), transactional system logs, time-series sensor telemetry, or survey results. Even if your data is messy or unformatted, we perform initial cleaning and verification as part of our process.' },
      { question: 'How do you handle datasets with missing values or severe imbalance?', answer: 'We apply domain-appropriate imputation techniques (median, KNN, or iterative imputation) rather than naive row deletion. For imbalanced datasets (e.g. rare defaults), we use stratified sampling, class-weight adjustments, and evaluation metrics like Macro F1 and Recall rather than deceptive overall accuracy.' },
      { question: 'Will you provide clean, reusable Python code and notebooks?', answer: 'Yes. Every project includes well-documented Jupyter notebooks or modular Python scripts that your internal team can run, inspect, and build upon.' },
    ],
  },

  // 03. AI & Machine Learning
  'ai-machine-learning': {
    id: 'ai-machine-learning',
    slug: 'ai-machine-learning',
    serviceNumber: '03',
    title: 'AI & Machine Learning',
    shortTitle: 'AI & Machine Learning',
    category: 'Intelligent Systems & Predictive AI',
    iconName: 'BrainCircuit',
    highlightColor: 'indigo',
    image: '/images/services/ai-machine-learning.jpg',
    hero: {
      headline: 'Build Smarter Applications with Applied Artificial Intelligence',
      subheadline: 'Predictive Classifiers, Retrieval-Augmented Generation (RAG) & Decision Support',
      supportingText:
        'We design and deploy practical machine-learning solutions that learn from verified data to classify risks, forecast demand, and automate complex information retrieval. From balanced ensemble models to local privacy-first LLM applications, we transform technical complexity into reliable, explainable software.',
      ctaLabel: 'Discuss Your AI/ML Project',
      techBadges: ['Python & Scikit-Learn', 'Ensemble Random Forests', 'ChromaDB Vector Store', 'Sentence Transformers', 'Ollama & Local LLMs', 'FastAPI & Flask APIs'],
    },
    overview: {
      heading: 'What Is AI & Machine Learning?',
      conceptExplanation:
        'Artificial Intelligence and Machine Learning enable software systems to discover patterns in historical data and make accurate predictions, classifications, or recommendations without relying on rigid, hardcoded if-else logic. Instead of programmers manually writing rules for every scenario, ML algorithms learn optimal decision boundaries directly from verified training examples.',
      howItWorks:
        'Labeled training data is transformed into numerical feature vectors, processed by algorithms (such as Random Forest ensembles, gradient boosters, or vector embeddings), evaluated against unseen validation splits, and served through high-throughput REST APIs for instant real-time inference.',
      realWorldContext:
        'From evaluating retail credit default probabilities in sub-15ms to indexing official Indian Standards for conversational regulatory Q&A, applied machine learning elevates software from static data stores into proactive intelligent assistants.',
      commonUseCases: [
        'Risk classification (loan default prediction, churn propensity, fraud detection)',
        'Retrieval-Augmented Generation (RAG) over private document repositories',
        'Clinical and cognitive screening decision support systems',
        'Multi-factor supply chain recommendation and emergency allocation engines',
        'Time-series statistical forecasting (exponential smoothing, demand curves)',
      ],
    },
    importance: {
      heading: 'Why Adopt Machine Learning for Critical Workflows?',
      description:
        'Modern business processes are too multi-dimensional for manual inspection or simplistic rulebooks. Machine learning enables consistent, scalable, and auditable automation across high-volume decisions.',
      points: [
        {
          title: 'Sub-Second Real-Time Scoring',
          explanation: 'Evaluate customer applications, technical queries, or health screenings instantly rather than waiting days for manual review.',
          iconName: 'Zap',
        },
        {
          title: 'Grounded & Verifiable AI Outputs',
          explanation: 'Combine dense vector retrieval with local language models to deliver accurate answers backed by concrete source citations.',
          iconName: 'ShieldCheck',
        },
        {
          title: 'Explainable Decision Support',
          explanation: 'We emphasize interpretable algorithms and transparent scoring criteria, ensuring human operators understand why an AI recommendation was made.',
          iconName: 'Eye',
        },
        {
          title: '100% Privacy & Local Sovereignty',
          explanation: 'Run open-weight models locally through Ollama, guaranteeing zero sensitive customer data is shared with external third-party cloud APIs.',
          iconName: 'Lock',
        },
      ],
    },
    problemsSolved: [
      {
        id: 1,
        title: 'High False-Negative Risk in Rare Event Detection',
        explanation: 'Standard classification models trained on skewed data frequently predict the majority class, missing critical minority loan defaults or health risks.',
        impact: 'We engineer balanced ensemble classifiers (Balanced Random Forest) yielding up to 2.2x higher minority-class recall.',
        iconName: 'AlertTriangle',
      },
      {
        id: 2,
        title: 'Hallucination & Inaccuracy in LLM Answers',
        explanation: 'Generic cloud chatbots invent non-existent regulatory clauses, standard numbers, or factual details when asked technical questions.',
        impact: 'We implement Retrieval-Augmented Generation (RAG) using ChromaDB and Sentence Transformers to strictly ground answers in retrieved evidence.',
        iconName: 'ShieldAlert',
      },
      {
        id: 3,
        title: 'Opaque "Black-Box" Predictions',
        explanation: 'Users and regulators reject AI systems when models make critical decisions without explainability or auditable rationale.',
        impact: 'We build explainable score breakdowns, feature importance charts, and source-attribution tags for every prediction.',
        iconName: 'CheckSquare',
      },
      {
        id: 4,
        title: 'Data Privacy & Cloud API Cost Exposure',
        explanation: 'Sending proprietary business documents or private customer records to commercial cloud LLMs raises compliance and ongoing cost concerns.',
        impact: 'We deploy quantized local models (Llama 3.2:3B via Ollama) running entirely on your infrastructure with zero external telemetry.',
        iconName: 'Lock',
      },
    ],
    solutionsCapabilities: [
      {
        id: 1,
        title: 'Predictive Classification & Risk Engines',
        description: 'Trained ensemble models (Random Forest, Gradient Boosting) for credit default evaluation, customer churn prediction, and risk tier stratification.',
        deliverables: ['Serialized production model artifacts (.pkl, .joblib)', 'Scoring microservices with sub-15ms response latency', 'Full metric evaluation matrices (Precision, Recall, ROC-AUC)'],
        iconName: 'Cpu',
      },
      {
        id: 2,
        title: 'Retrieval-Augmented Generation (RAG) Systems',
        description: 'Domain-specific semantic search engines coupling dense vector stores (ChromaDB) with local or cloud language models for document Q&A.',
        deliverables: ['Dense vector embeddings pipelines (all-MiniLM-L6-v2)', 'Ephemeral session document upload & isolation', 'Direct source clause attribution and citation pills'],
        iconName: 'Workflow',
      },
      {
        id: 3,
        title: 'Intelligent Recommendation & Allocation Engines',
        description: 'Multi-factor clinical and logistics matching algorithms combining geospatial routing, facility capability scoring, and demand forecast buffers.',
        deliverables: ['Deterministic multi-factor scoring algorithms (0-100 pts)', 'OSRM road transit distance integration', '30-day statistical demand forecasting curves'],
        iconName: 'Target',
      },
      {
        id: 4,
        title: 'FastAPI & Flask AI Inference Microservices',
        description: 'Clean, asynchronous REST endpoints that wrap trained ML models and RAG pipelines for seamless integration into web and mobile frontends.',
        deliverables: ['POST /predict and POST /query endpoints with Pydantic validation', 'Cross-Origin Resource Sharing (CORS) integration', 'Automated health and connection monitoring endpoints'],
        iconName: 'Server',
      },
    ],
    technologies: [
      { name: 'Python', role: 'Primary AI/ML Language', context: 'Used for dataset preparation, model training, pipeline orchestration, and REST API development.', category: 'Languages' },
      { name: 'Scikit-Learn', role: 'Classical Machine Learning Toolkit', context: 'Implements RandomForestClassifier, DecisionTrees, cross-validation, and classification metrics.', category: 'Machine Learning' },
      { name: 'ChromaDB', role: 'Dense Vector Embeddings Database', context: 'Provides embedded vector storage and sub-second cosine similarity search for RAG systems.', category: 'Vector Databases' },
      { name: 'Sentence Transformers', role: 'Semantic Text Embeddings', context: 'Converts natural language queries and documents into 384-dimensional dense vectors (all-MiniLM-L6-v2).', category: 'NLP' },
      { name: 'Ollama & Llama 3.2:3B', role: 'Local Language Model Inference', context: 'Hosts open-weight LLMs locally on hardware for privacy-preserving, zero-cost conversational Q&A.', category: 'Generative AI' },
      { name: 'FastAPI & Flask', role: 'High-Performance Serving Microservice', context: 'Exposes trained models and RAG pipelines as asynchronous REST APIs for web client consumption.', category: 'Serving' },
    ],
    developmentProcess: [
      { stepNumber: 1, title: 'Feasibility & Objective Definition', description: 'We evaluate the business problem, assess dataset quality and balance, and determine whether supervised ML or RAG is the appropriate solution.', deliverables: ['Technical architecture proposal', 'Metric benchmarks (Target F1/Recall)'] },
      { stepNumber: 2, title: 'Data Preprocessing & Vectorization', description: 'We handle class imbalances, engineer discriminating features, partition stratified splits, and generate vector embeddings.', deliverables: ['Normalized feature matrices', 'Indexed vector collections'] },
      { stepNumber: 3, title: 'Model Training & Hyperparameter Tuning', description: 'We train candidate models (Decision Trees, Random Forests, embeddings), tuning estimators and depth to prevent memorization overfitting.', deliverables: ['Comparative benchmark tables', 'Tuned model weights (.pkl)'] },
      { stepNumber: 4, title: 'Rigorous Evaluation & Benchmark Audit', description: 'We test across held-out test splits, auditing Macro F1, Recall, Confusion Matrices, and inference latency under stress.', deliverables: ['Evaluation matrix documentation', 'Error analysis report'] },
      { stepNumber: 5, title: 'API Wrapping & Frontend Integration', description: 'We encapsulate the inference logic inside FastAPI/Flask endpoints and connect responsive React user interfaces.', deliverables: ['REST API documentation', 'Interactive client UI with sliders & file uploads'] },
      { stepNumber: 6, title: 'Deployment & Human Review Guardrails', description: 'We establish human-in-the-loop review boundaries, transparent disclaimers, and automated logging for ongoing monitoring.', deliverables: ['Operational documentation', 'Responsible AI safety notice'] },
    ],
    relatedProjectSlugs: [
      'loangauge-ai',
      'cognitive-screening-system',
      'customer-churn-webpage',
      'water-quality-management',
      'bloodchain-ai',
      'bis-smartassist',
      'plant-disease-prediction',
    ],
    whyChooseUs: [
      { title: 'Honest, Evidence-Grounded AI', description: 'We do not sell overhyped "autonomous" promises. We build reliable, explainable decision-support systems that keep humans in the loop.', iconName: 'ShieldCheck' },
      { title: 'Proven Minority-Class Accuracy', description: 'Our balanced ensemble architectures have been empirically verified to double detection recall on skewed real-world lending datasets.', iconName: 'TrendingUp' },
      { title: 'Privacy-First Architecture', description: 'We specialize in local model deployment with Ollama, keeping your proprietary data 100% off third-party commercial clouds.', iconName: 'Lock' },
      { title: 'End-to-End Full-Stack Delivery', description: 'We do not stop at model weights; we build the responsive web interfaces, interactive simulators, and FastAPI endpoints required for practical use.', iconName: 'Layers' },
    ],
    faqs: [
      { question: 'What is the difference between traditional software and Machine Learning?', answer: 'Traditional software follows static, hardcoded rules written by programmers ("if credit score < 600, reject"). Machine Learning analyzes thousands of past outcomes, discovering subtle multi-variable patterns that human rule-writers would miss, producing continuous probability scores.' },
      { question: 'What is Retrieval-Augmented Generation (RAG)?', answer: 'RAG is an AI architecture that connects a language model to an external vector database (like ChromaDB) indexing your private technical documents. When a user asks a question, the system retrieves the exact relevant excerpts first and passes them to the model, ensuring the answer is factually grounded with citations.' },
      { question: 'Can you run AI models locally without paying monthly cloud API bills?', answer: 'Yes. We frequently deploy quantized open-weight models (such as Llama 3.2:3B) through Ollama directly on local servers or workstations. This eliminates monthly API costs and ensures complete data confidentiality.' },
      { question: 'How do you prevent machine learning models from hallucinating?', answer: 'We use strict system prompts, temperature controls, and dense vector retrieval grounding. Furthermore, our systems explicitly inform the user when sufficient context is unavailable rather than guessing.' },
    ],
  },

  // 04. Web Development
  'web-development': {
    id: 'web-development',
    slug: 'web-development',
    serviceNumber: '04',
    title: 'Full-Stack Web Development',
    shortTitle: 'Web Development',
    category: 'Full-Stack Applications & Cloud Platforms',
    iconName: 'Code2',
    highlightColor: 'emerald',
    image: '/images/services/web-development.jpg',
    hero: {
      headline: 'Engineer Modern, Responsive & High-Performance Web Applications',
      subheadline: 'React 19, TypeScript, Next.js, FastAPI & Secure Cloud Database Architectures',
      supportingText:
        'We build scalable, beautiful web platforms tailored to operational workflows. From multi-role institutional portals and interactive healthcare interfaces to fast landing pages and REST microservices, we combine modern frontend ergonomics with robust, secure backend foundations.',
      ctaLabel: 'Discuss Your Web Project',
      techBadges: ['React 19 & Next.js', 'TypeScript & JavaScript', 'Tailwind CSS', 'FastAPI & Flask', 'PostgreSQL & Supabase', 'RESTful API Engineering'],
    },
    overview: {
      heading: 'What Is Modern Full-Stack Web Development?',
      conceptExplanation:
        'Full-Stack Web Development encompasses the complete engineering lifecycle of internet-accessible software—from the interactive client-side user interface (frontend) to the application servers, database schemas, authentication layers, and API microservices (backend).',
      howItWorks:
        'Using modern component frameworks like React and Next.js, we construct dynamic Single Page Applications that communicate asynchronously via JSON REST APIs with Python or Node backend servers, persisting data in relational SQL databases with Row Level Security.',
      realWorldContext:
        'Whether coordinating emergency blood donor logistics across three distinct user portals, managing academic records in a student portal, or deploying an e-commerce checkout flow, robust web architecture ensures fast loading speeds, intuitive navigation, and reliable uptime.',
      commonUseCases: [
        'Role-based institutional and operational web portals (Admins, Users, Donors, Staff)',
        'Interactive AI-driven software interfaces and simulation tools',
        'High-converting landing pages, portfolio showcases, and company websites',
        'Database-driven internal tools and management dashboards',
        'E-commerce platforms, food ordering systems, and catalog applications',
      ],
    },
    importance: {
      heading: 'Why Quality Web Engineering Is Crucial',
      description:
        'Your web application is often the primary touchpoint for customers, partners, and employees. Slow, brittle, or confusing web software damages credibility and impedes operational efficiency.',
      points: [
        {
          title: 'Sub-Second Loading & High Responsiveness',
          explanation: 'Modern bundling (Vite, Next.js) and optimized assets ensure rapid page loads across desktop, tablet, and mobile browsers.',
          iconName: 'Zap',
        },
        {
          title: 'Role-Based Access & Data Governance',
          explanation: 'Granular authentication and Row Level Security ensure users only access the data authorized for their specific permissions.',
          iconName: 'ShieldCheck',
        },
        {
          title: 'Maintainable, Typed Component Architecture',
          explanation: 'Building with TypeScript and modular React components prevents silent runtime bugs and makes future feature additions straightforward.',
          iconName: 'Code2',
        },
        {
          title: 'Intuitive, Ergonomic User Experience',
          explanation: 'Clean typography, cohesive color palettes, and accessible navigation reduce user confusion and increase task completion rates.',
          iconName: 'Layout',
        },
      ],
    },
    problemsSolved: [
      {
        id: 1,
        title: 'Clunky, Outdated Legacy User Interfaces',
        explanation: 'Users struggle with confusing navigation, non-responsive mobile layouts, and slow page reloads common in legacy web applications.',
        impact: 'We construct reactive React Single Page Applications with fluid transitions, instant feedback, and mobile-first layouts.',
        iconName: 'Layout',
      },
      {
        id: 2,
        title: 'Unsecured, Fragmented Data Access',
        explanation: 'Different user groups (e.g. students vs. administrators, or blood donors vs. hospitals) need different access tiers without data leakage.',
        impact: 'We implement dedicated role-based portals backed by database policies and tokenized session management.',
        iconName: 'Lock',
      },
      {
        id: 3,
        title: 'Disconnected Frontend and Backend Systems',
        explanation: 'Frontend forms fail silently or lack proper input validation, resulting in corrupted database records and poor error feedback.',
        impact: 'Pydantic schemas and TypeScript interfaces enforce strict end-to-end type validation from browser input to database write.',
        iconName: 'Server',
      },
      {
        id: 4,
        title: 'Poor Mobile & Cross-Device Compatibility',
        explanation: 'Websites look passable on desktop monitors but break completely when viewed on smartphones or tablets.',
        impact: 'Tailwind CSS utility architectures ensure responsive multi-column layouts that gracefully stack on compact touchscreens.',
        iconName: 'Activity',
      },
    ],
    solutionsCapabilities: [
      {
        id: 1,
        title: 'Single Page Applications (SPA) & Dynamic Web Portals',
        description: 'Modern React 19 and Next.js applications featuring client-side routing, optimistic state updates, and accessible component hierarchies.',
        deliverables: ['Responsive component libraries', 'Clean client-side routing via React Router DOM', 'Context-driven state management'],
        iconName: 'Layout',
      },
      {
        id: 2,
        title: 'FastAPI & Flask REST API Microservices',
        description: 'High-throughput Python backend servers providing validated endpoints, CORS headers, asynchronous processing, and clean JSON payloads.',
        deliverables: ['Documented RESTful API routes (/docs OpenAPI)', 'Pydantic request/response validation schemas', 'Secure environment configuration management'],
        iconName: 'Server',
      },
      {
        id: 3,
        title: 'Relational Database Design & Cloud Persistence',
        description: 'PostgreSQL, MySQL, and Supabase database schemas with normalized tables, foreign keys, and Row Level Security policies.',
        deliverables: ['Normalized SQL database migration scripts', 'Supabase Realtime WebSockets integration', 'Secure connection pooling'],
        iconName: 'Database',
      },
      {
        id: 4,
        title: 'Interactive Geospatial & Data-Rich Components',
        description: 'Integrating interactive Leaflet maps, routing engines (OSRM), animated chart visualizations (Recharts), and document file composers.',
        deliverables: ['Custom interactive map markers & route lines', 'Multi-file staging and drag-and-drop composers', 'Interactive modal workflows and lightboxes'],
        iconName: 'Workflow',
      },
    ],
    technologies: [
      { name: 'React 19', role: 'Reactive UI Component Framework', context: 'Used to build high-performance client interfaces, stateful forms, and interactive views.', category: 'Frontend' },
      { name: 'TypeScript & JavaScript', role: 'Type-Safe Programming Language', context: 'Ensures reliable code structure, strict prop typing, and seamless developer collaboration.', category: 'Languages' },
      { name: 'Tailwind CSS', role: 'Utility-First Styling Engine', context: 'Provides rapid, consistent, responsive styling with custom color tokens and smooth hover states.', category: 'Styling' },
      { name: 'FastAPI & Python', role: 'High-Throughput ASGI Backend', context: 'Powers asynchronous REST endpoints, validation pipelines, and machine learning model serving.', category: 'Backend' },
      { name: 'Supabase & PostgreSQL', role: 'Relational Database & Auth Platform', context: 'Manages user authentication, relational schemas, SQL tables, and real-time database subscriptions.', category: 'Database' },
      { name: 'Vite', role: 'Next-Generation Frontend Tooling', context: 'Provides sub-second Hot Module Replacement (HMR) and optimized minified production builds.', category: 'Tooling' },
    ],
    developmentProcess: [
      { stepNumber: 1, title: 'Requirements & User Journey Mapping', description: 'We identify user personas, map page flows, determine API contract boundaries, and select database schemas.', deliverables: ['Site architecture blueprint', 'User journey diagram'] },
      { stepNumber: 2, title: 'UI/UX Wireframing & Design System', description: 'We establish component hierarchies, typography scales, color palettes, and responsive grid layouts.', deliverables: ['Component wireframes', 'Design token specifications'] },
      { stepNumber: 3, title: 'Frontend Component Architecture', description: 'We construct clean, accessible React components with Tailwind CSS styling, state hooks, and client-side routing.', deliverables: ['Interactive frontend prototype', 'Mobile-responsive layouts'] },
      { stepNumber: 4, title: 'Backend API & Database Engineering', description: 'We build FastAPI/Flask microservices, configure database schemas with SQL migrations, and wire REST endpoints.', deliverables: ['Validated API endpoints', 'Database migration scripts'] },
      { stepNumber: 5, title: 'Integration, Validation & Security Auditing', description: 'We connect frontend forms with backend endpoints, test error states, and enforce CORS and authentication rules.', deliverables: ['Integrated staging build', 'End-to-end testing log'] },
      { stepNumber: 6, title: 'Production Build & Deployment', description: 'We compile optimized production bundles with minified assets, configure routing fallbacks, and verify cross-browser performance.', deliverables: ['Production build bundle', 'Deployment documentation'] },
    ],
    relatedProjectSlugs: [
      'student-information-system',
      'agrolink',
      'food-ordering-system',
      'customer-churn-webpage',
      'bloodchain-ai',
      'bis-smartassist',
      'loangauge-ai',
      'cognitive-screening-system',
      'esp-data-transmission',
    ],
    whyChooseUs: [
      { title: 'Full-Stack Technical Breadth', description: 'We seamlessly connect modern React frontends with Python backends and PostgreSQL databases without outsourcing or communication gaps.', iconName: 'Layers' },
      { title: 'AI & Data-Integrated Solutions', description: 'Unlike generic web agencies, we specialize in embedding machine learning models, RAG pipelines, and interactive analytics directly into web software.', iconName: 'BrainCircuit' },
      { title: 'Clean, Maintainable Codebases', description: 'We write modular TypeScript and clean Python adhering to industry conventions, ensuring your software can easily grow.', iconName: 'Code' },
      { title: 'No Fragile Templates or Page-Builder Bloat', description: 'We handcraft modern applications from source code, ensuring maximum performance, zero vendor lock-in, and full customization.', iconName: 'ShieldCheck' },
    ],
    faqs: [
      { question: 'Can you build custom full-stack web applications from scratch?', answer: 'Yes. We specialize in building custom applications tailored to your specific workflow—from relational database architecture and REST APIs to responsive React frontends.' },
      { question: 'Which frontend and backend frameworks do you recommend?', answer: 'We primarily recommend React 19 or Next.js paired with Tailwind CSS on the frontend for speed and responsiveness, and FastAPI or Flask with PostgreSQL on the backend for clean, maintainable, high-performance logic.' },
      { question: 'How do you handle role-based access for different user types?', answer: 'We design role-based access control (RBAC) where each user type (e.g. students vs. administrators, or donors vs. hospitals) has dedicated views, protected routes, and database-level security policies.' },
      { question: 'Will the web application be mobile-friendly?', answer: 'Yes, absolutely. Every page and component is engineered mobile-first using Tailwind CSS, ensuring smooth, legible rendering on smartphones, tablets, laptops, and wide desktop displays.' },
    ],
  },

  // 05. Python Development & Automation
  'python-development': {
    id: 'python-development',
    slug: 'python-development',
    serviceNumber: '05',
    title: 'Python Development & Automation',
    shortTitle: 'Python Development',
    category: 'Backend Engineering & Workflow Automation',
    iconName: 'Terminal',
    highlightColor: 'amber',
    image: '/images/services/python-automation.jpg',
    hero: {
      headline: 'Build Robust Software, Data Pipelines & Automated Workflows',
      subheadline: 'Desktop GUI Applications, RESTful APIs, Batch Processors & Automation Scripts',
      supportingText:
        'Python is the world’s most versatile programming language. We leverage its rich ecosystem to build modular desktop applications, high-performance web microservices, automated data processing scripts, and system integrations that eliminate repetitive manual labor and accelerate operations.',
      ctaLabel: 'Discuss Your Python Project',
      techBadges: ['Python 3.10+', 'FastAPI & Flask', 'PyQt6 Desktop GUIs', 'Pandas & NumPy', 'Batch Data Pipelines', 'REST API Integration'],
    },
    overview: {
      heading: 'What Is Python Development & Automation?',
      conceptExplanation:
        'Python Development spans the engineering of custom scripts, desktop software, data ingestion pipelines, and backend APIs using the Python programming language. Automation refers to configuring software scripts that execute repetitive digital tasks—such as fetching weather forecasts, auditing folder structures, or processing batch data—without human intervention.',
      howItWorks:
        'We write clean, modular Python modules leveraging built-in standard libraries and battle-tested packages. Whether designing a desktop quiz platform with timed loops or building a REST API that normalizes JSON payloads, Python allows for rapid prototyping and reliable execution.',
      realWorldContext:
        'From running data verification scripts across thousands of image folders to orchestrating asynchronous RAG retrieval pipelines, Python acts as the operational workhorse behind modern computational systems.',
      commonUseCases: [
        'Automated batch file processing, format conversion, and directory auditing',
        'Desktop GUI applications with interactive controls, timers, and persistent state',
        'Third-party REST API integrations and scheduled data fetchers',
        'Data cleaning, validation, and automated Excel/CSV report generation',
        'Backend service development powering web and mobile client applications',
      ],
    },
    importance: {
      heading: 'Why Python Is the Foundation of Intelligent Systems',
      description:
        'Python combines readability, rapid development speed, and unrivaled integration with data science and machine learning libraries, making it the ideal choice for modern technical projects.',
      points: [
        {
          title: 'Unmatched Library Ecosystem',
          explanation: 'Access to thousands of specialized packages for database connections, GUI creation, image handling, and statistical computing.',
          iconName: 'Package',
        },
        {
          title: 'Eliminate Repetitive Manual Effort',
          explanation: 'Automate tedious administrative data entry, file renaming, and report compilation into one-click scripts.',
          iconName: 'Zap',
        },
        {
          title: 'Seamless Transition to AI & Data Science',
          explanation: 'Code written for basic data manipulation seamlessly connects to machine learning models without rewriting across different languages.',
          iconName: 'BrainCircuit',
        },
        {
          title: 'Cross-Platform Portability',
          explanation: 'Python runs reliably across Windows, Linux, and macOS environments with consistent behavior and minimal system overhead.',
          iconName: 'Server',
        },
      ],
    },
    problemsSolved: [
      {
        id: 1,
        title: 'Repetitive Manual File & Data Manipulation',
        explanation: 'Employees spend hours every week downloading files, renaming directories, and re-formatting spreadsheets by hand.',
        impact: 'Automated Python scripts execute complex batch processing across thousands of records in seconds.',
        iconName: 'Clock',
      },
      {
        id: 2,
        title: 'Need for Dedicated Desktop Applications',
        explanation: 'Certain training, testing, or laboratory environments require responsive desktop GUI software that operates reliably without internet connectivity.',
        impact: 'We develop standalone PyQt6 desktop applications with persistent local storage, custom styling, and sub-second timer loops.',
        iconName: 'Layout',
      },
      {
        id: 3,
        title: 'Fragile API Integrations',
        explanation: 'Connecting disparate web services without proper error handling leads to crashed processes and unlogged data drops.',
        impact: 'Robust request handling with exponential backoff retries, logging, and schema validation guarantees pipeline stability.',
        iconName: 'ShieldCheck',
      },
      {
        id: 4,
        title: 'Unstandardized Data Extraction',
        explanation: 'Extracting data from multi-format PDFs, JSON payloads, and text files requires reliable parsing without manual re-typing.',
        impact: 'PyMuPDF and custom regex extractors parse and clean unstructured text streams into normalized databases.',
        iconName: 'FileText',
      },
    ],
    solutionsCapabilities: [
      {
        id: 1,
        title: 'Interactive Desktop GUI Applications (PyQt6)',
        description: 'Building responsive desktop software featuring multi-screen stacked widgets, animated countdown timers, local file persistence, and custom styles.',
        deliverables: ['Standalone desktop application packages', 'Persistent local scoring and leaderboard engines', 'Clean keyboard and mouse event handling'],
        iconName: 'Layout',
      },
      {
        id: 2,
        title: 'Asynchronous REST API Backend Services',
        description: 'Developing high-throughput FastAPI and Flask web services with automatic OpenAPI documentation, CORS support, and Pydantic validation.',
        deliverables: ['Asynchronous route handlers (/query, /predict)', 'Secure environment variable configurations', 'Automated health-check endpoints'],
        iconName: 'Server',
      },
      {
        id: 3,
        title: 'Automated Data Extraction & Ingestion Pipelines',
        description: 'Writing scripts to parse digital PDFs (PyMuPDF), validate image files (Pillow), and partition text into overlapping chunks for indexing.',
        deliverables: ['Automated text and image extraction scripts', 'Folder integrity and verification utilities', 'Normalized CSV/JSON dataset outputs'],
        iconName: 'FileCode',
      },
      {
        id: 4,
        title: 'Third-Party API Integrations & Telemetry Fetchers',
        description: 'Connecting software to external weather services, financial data providers, or hardware telemetry streams with robust logging.',
        deliverables: ['Weather and external API wrapper modules', 'Cached in-memory telemetry buffers', 'Structured error and exception handling routines'],
        iconName: 'Activity',
      },
    ],
    technologies: [
      { name: 'Python 3.10+', role: 'Core Programming Language', context: 'Used for general-purpose programming, object-oriented design, and scripting workflows.', category: 'Languages' },
      { name: 'PyQt6 / QWidgets', role: 'Desktop GUI Toolkit', context: 'Powers standalone desktop applications with custom buttons, timers, stacked layouts, and styling.', category: 'Desktop GUI' },
      { name: 'FastAPI & Uvicorn', role: 'High-Performance Asynchronous ASGI API', context: 'Provides lightning-fast backend REST endpoints with automatic interactive documentation.', category: 'Backend' },
      { name: 'Flask', role: 'Lightweight WSGI Web Framework', context: 'Used for decoupled microservices, inference endpoints, and web server routing.', category: 'Backend' },
      { name: 'PyMuPDF (fitz)', role: 'High-Speed PDF Document Parsing', context: 'Extracts clean text streams, metadata, and page layouts from technical standard documents.', category: 'Document Processing' },
      { name: 'Pillow (PIL)', role: 'Image Processing & Validation', context: 'Handles image decoding, format validation, dimension checks, and raster pre-processing.', category: 'Image Processing' },
    ],
    developmentProcess: [
      { stepNumber: 1, title: 'Workflow Scoping & Requirement Analysis', description: 'We analyze the manual task or software requirement, outline logic flowcharts, and select the optimal Python packages.', deliverables: ['Workflow flowchart', 'Package dependency specifications'] },
      { stepNumber: 2, title: 'Modular Script & Architecture Design', description: 'We design decoupled Python modules with object-oriented structure, typed function signatures, and error boundaries.', deliverables: ['Core module architecture', 'Data structure definitions'] },
      { stepNumber: 3, title: 'Core Logic & Interface Implementation', description: 'We construct the GUI views, backend endpoints, or batch data processors with robust exception handling.', deliverables: ['Functional Python codebase', 'Interactive desktop or API interface'] },
      { stepNumber: 4, title: 'Edge Case Testing & Exception Handling', description: 'We test with missing inputs, corrupted files, and network timeouts to ensure the software fails gracefully.', deliverables: ['Automated test scripts', 'Exception logging verification'] },
      { stepNumber: 5, title: 'Optimization & Packaging', description: 'We profile memory usage, optimize I/O loops, and package the application for straightforward deployment on target systems.', deliverables: ['Optimized source repository', 'Setup and installation guide (requirements.txt)'] },
      { stepNumber: 6, title: 'Handover & Ongoing Documentation', description: 'We deliver clean, commented code, operational instructions, and documentation for future team maintenance.', deliverables: ['Comprehensive code documentation', 'User operation manual'] },
    ],
    relatedProjectSlugs: [
      'atmosphere',
      'quiz-master-pro',
      'voltrelay',
      'water-quality-management',
      'bis-smartassist',
      'plant-disease-prediction',
    ],
    whyChooseUs: [
      { title: 'Clean, Idiomatic Python Code', description: 'We write PEP 8 compliant, type-hinted Python that is easy for any developer to read, maintain, and extend.', iconName: 'Code' },
      { title: 'Full Application Lifecycle Experience', description: 'From desktop PyQt6 interfaces to FastAPI microservices and AI embeddings, we understand the complete Python ecosystem.', iconName: 'Layers' },
      { title: 'Reliability & Fault-Tolerant Design', description: 'Our automation pipelines include comprehensive try-except handling, detailed logging, and safe fallbacks.', iconName: 'ShieldCheck' },
      { title: 'Direct Bridge to Data & AI', description: 'Because Python is the native language of AI, software we build can seamlessly integrate machine learning models down the road.', iconName: 'BrainCircuit' },
    ],
    faqs: [
      { question: 'What kind of applications can you build with Python?', answer: 'We build a wide variety of software with Python, including standalone desktop GUI applications (using PyQt6), high-speed REST API web backends (FastAPI/Flask), automated data-cleaning scripts, and AI/RAG inference engines.' },
      { question: 'Can Python automate repetitive tasks on our computers?', answer: 'Yes. Python can monitor folders, batch rename and convert files, pull data from web APIs, scrape authorized data sources, transform spreadsheet rows, and generate consolidated reports automatically.' },
      { question: 'Is Python suitable for production-grade web APIs?', answer: 'Yes. Frameworks like FastAPI run on modern ASGI servers (Uvicorn), providing asynchronous performance comparable to Node.js and Go, complete with automatic type validation and OpenAPI documentation.' },
      { question: 'How do you ensure Python desktop applications run on computers without Python installed?', answer: 'We can package Python desktop software using tools like PyInstaller, bundling the runtime and dependencies into a standalone executable that runs directly on target machines.' },
    ],
  },

  // 06. IoT & Embedded Systems
  'iot-embedded-systems': {
    id: 'iot-embedded-systems',
    slug: 'iot-embedded-systems',
    serviceNumber: '06',
    title: 'IoT & Embedded Systems',
    shortTitle: 'IoT & Embedded Systems',
    category: 'Hardware Integration & Connected Devices',
    iconName: 'Cpu',
    highlightColor: 'orange',
    image: '/images/services/iot-embedded.jpg',
    hero: {
      headline: 'Bridge the Physical World and Digital Cloud with Connected IoT Systems',
      subheadline: 'Microcontroller Programming, Sensor Telemetry & Real-Time Device Dashboards',
      supportingText:
        'We design and prototype connected hardware solutions that capture environmental and operational signals in the real world. Leveraging ESP32, Arduino, Raspberry Pi, and wireless transmission protocols, we link physical sensors to digital dashboards for continuous, real-time monitoring.',
      ctaLabel: 'Discuss Your IoT Project',
      techBadges: ['ESP32 & ESP8266', 'Arduino IDE', 'Embedded C/C++', 'Sensor Telemetry', 'Wireless Protocols (WiFi/HTTP)', 'Real-Time Web Dashboards'],
    },
    overview: {
      heading: 'What Is IoT & Embedded Systems?',
      conceptExplanation:
        'The Internet of Things (IoT) and Embedded Systems involve programming dedicated microcontrollers and microprocessors to interact directly with physical hardware components—such as temperature sensors, flow meters, relays, and displays—and transmitting that data across networks to digital monitoring platforms.',
      howItWorks:
        'A microcontroller (such as an ESP32) executes low-level embedded code to sample analog and digital sensor inputs, applies calibration and noise-reduction math, formats telemetry into network packets, and transmits data wirelessly (via WiFi, HTTP, or MQTT) to web servers and dashboards.',
      realWorldContext:
        'From wireless peer-to-peer telemetry between microcontroller nodes to water quality monitoring stations and remote facility telemetry, IoT provides the critical sensory layer for modern intelligent infrastructure.',
      commonUseCases: [
        'Wireless sensor networks and peer-to-peer microcontroller telemetry',
        'Environmental monitoring (temperature, humidity, water quality, air parameters)',
        'Remote equipment status tracking and automated threshold relay control',
        'Real-time web dashboards rendering live physical sensor streams',
        'Hardware prototype development for smart agriculture, labs, and logistics',
      ],
    },
    importance: {
      heading: 'Why Connected Hardware Matters',
      description:
        'Physical operations cannot be managed effectively without accurate, continuous real-world telemetry. IoT replaces slow manual gauge reading with continuous digital data streams.',
      points: [
        {
          title: 'Real-Time Operational Visibility',
          explanation: 'Access physical machine parameters, storage temperatures, or tank levels from any web browser 24/7.',
          iconName: 'Eye',
        },
        {
          title: 'Automated Threshold Alerts & Protection',
          explanation: 'Trigger alerts, shutdown relays, or automated notifications the moment physical sensor readings cross safety limits.',
          iconName: 'AlertTriangle',
        },
        {
          title: 'Eliminate Manual Inspection Latency',
          explanation: 'Replace physical clipboard checks in remote locations with wireless battery-powered sensory telemetry nodes.',
          iconName: 'Clock',
        },
        {
          title: 'Rich Empirical Datasets for Future AI',
          explanation: 'Continuous sensor logging provides the foundational time-series data needed to train predictive maintenance models.',
          iconName: 'Database',
        },
      ],
    },
    problemsSolved: [
      {
        id: 1,
        title: 'Isolated Physical Equipment & Siloed Gauges',
        explanation: 'Facilities rely on personnel physically walking to machines to write down analog gauge readings, delaying response to equipment failures.',
        impact: 'Microcontroller nodes sample sensors automatically and stream live values to a centralized web dashboard.',
        iconName: 'Activity',
      },
      {
        id: 2,
        title: 'Communication Across Distributed Hardware Nodes',
        explanation: 'Transmitting telemetry between multiple microcontrollers across a facility without running expensive physical cables.',
        impact: 'We program wireless mesh and HTTP peer-to-peer transmission protocols between sender and receiver nodes.',
        iconName: 'Radio',
      },
      {
        id: 3,
        title: 'Sensor Noise & Erratic Analog Readings',
        explanation: 'Raw analog sensor readings fluctuate due to electrical noise, temperature drift, and power supply variations.',
        impact: 'Embedded software applies moving-average smoothing, median filtering, and calibration curves before transmission.',
        iconName: 'Sliders',
      },
      {
        id: 4,
        title: 'Bridging Hardware Data to Web Frontends',
        explanation: 'Hardware engineers understand microcontrollers, but often struggle to render live data into modern, attractive web dashboards.',
        impact: 'We bridge embedded microcontrollers with React web dashboards, providing a seamless full-stack experience.',
        iconName: 'Layers',
      },
    ],
    solutionsCapabilities: [
      {
        id: 1,
        title: 'ESP32 & Microcontroller Firmware Development',
        description: 'Writing robust embedded C/C++ code in Arduino IDE for GPIO management, ADC sampling, timer interrupts, and WiFi communication.',
        deliverables: ['Clean embedded firmware source code', 'Pinout and hardware wiring diagrams', 'Device configuration and flashing instructions'],
        iconName: 'Cpu',
      },
      {
        id: 2,
        title: 'Multi-Node Wireless Data Transmission',
        description: 'Configuring sender and receiver microcontroller pairs communicating wirelessly via HTTP client-server or peer protocols.',
        deliverables: ['Wireless packet formatting & validation logic', 'Re-connection and network heartbeat routines', 'Multi-device telemetry aggregation'],
        iconName: 'Radio',
      },
      {
        id: 3,
        title: 'Sensor Calibration & Signal Preprocessing',
        description: 'Interfacing with physical sensors (pH, temperature, humidity, electrical parameters), applying calibration curves, and filtering noise.',
        deliverables: ['Signal filtering algorithms (moving average, median)', 'Calibration threshold maps', 'Sensor health diagnostic routines'],
        iconName: 'Sliders',
      },
      {
        id: 4,
        title: 'Real-Time Hardware Web Dashboards',
        description: 'Constructing modern web interfaces that receive hardware telemetry streams, plot live trendlines, and display alert indicators.',
        deliverables: ['Live telemetry gauge and chart components', 'Threshold alert indicators', 'Historical sensor log visualization'],
        iconName: 'LayoutDashboard',
      },
    ],
    technologies: [
      { name: 'ESP32 Microcontroller', role: 'Dual-Core Wireless IoT SOC', context: 'Primary microcontroller platform offering integrated WiFi, Bluetooth, rich GPIOs, and high compute speed.', category: 'Hardware' },
      { name: 'Arduino IDE & Embedded C/C++', role: 'Firmware Development Environment', context: 'Used for compiling hardware control code, sensor drivers, timing loops, and networking libraries.', category: 'Embedded Software' },
      { name: 'ESP8266 & Arduino Uno', role: 'Prototyping Microcontroller Platforms', context: 'Employed for baseline prototyping, GPIO expansion, and lightweight sensory tasks.', category: 'Hardware' },
      { name: 'Sensor Telemetry Interfaces', role: 'Analog & Digital Sensor Integration', context: 'Interfaces with I2C, SPI, UART, and analog sensors measuring physical environmental parameters.', category: 'Electronics' },
      { name: 'Wireless HTTP & Socket Protocols', role: 'Network Communication Layer', context: 'Transmits JSON telemetry packets between microcontroller nodes and web servers.', category: 'Networking' },
      { name: 'Web Dashboard Visualization', role: 'Presentation & Monitoring Layer', context: 'Renders incoming physical telemetry into intuitive browser-accessible gauge scorecards and charts.', category: 'Software' },
    ],
    developmentProcess: [
      { stepNumber: 1, title: 'Hardware Scoping & Sensor Selection', description: 'We identify physical parameters to measure, assess electrical requirements, and select appropriate microcontrollers and sensors.', deliverables: ['Hardware BOM (Bill of Materials)', 'Pinout connection schematic'] },
      { stepNumber: 2, title: 'Circuit Breadboarding & Bench Testing', description: 'We wire prototype circuits, test power supply stability, and inspect raw analog/digital sensor signals.', deliverables: ['Benchtop hardware prototype', 'Signal integrity log'] },
      { stepNumber: 3, title: 'Embedded Firmware Engineering', description: 'We write modular embedded C/C++ code managing sensor sampling, digital filtering, and network transmission loops.', deliverables: ['Embedded firmware source', 'Driver integration code'] },
      { stepNumber: 4, title: 'Wireless Networking & Protocol Configuration', description: 'We establish wireless transmission between microcontroller sender nodes and backend endpoints with automatic re-connect logic.', deliverables: ['Validated wireless packet pipeline', 'Connection timeout recovery'] },
      { stepNumber: 5, title: 'Web Dashboard & Telemetry Display', description: 'We connect live hardware data streams to responsive web dashboard components featuring gauges, trendlines, and status alerts.', deliverables: ['Live web telemetry dashboard', 'Threshold alert triggers'] },
      { stepNumber: 6, title: 'Long-Run Testing & Field Documentation', description: 'We conduct extended reliability run-tests to ensure zero memory leaks, freeze-ups, or unhandled sensor disconnects.', deliverables: ['Hardware wiring documentation', 'Flashing & deployment guide'] },
    ],
    relatedProjectSlugs: [
      'esp-data-transmission',
    ],
    whyChooseUs: [
      { title: 'True Hardware + Software Integration', description: 'Co-founded by an IoT & Embedded Systems specialist, we handle both low-level microcontroller wiring and modern web interfaces in-house.', iconName: 'Cpu' },
      { title: 'Practical, Tested Hardware Prototypes', description: 'Our embedded implementations have been physically breadboarded, bench-tested, and verified with real sensor components.', iconName: 'Award' },
      { title: 'Resilient Firmware Architecture', description: 'We design embedded code with network reconnect loops, watchdog timers, and noise filtering to ensure devices run uninterrupted.', iconName: 'ShieldCheck' },
      { title: 'Seamless Web Dashboard Connectivity', description: 'We eliminate the gap between microcontrollers and browsers, delivering modern, accessible web dashboards for your physical hardware.', iconName: 'Layers' },
    ],
    faqs: [
      { question: 'What is an ESP32, and why is it popular for IoT projects?', answer: 'The ESP32 is a powerful, low-cost dual-core microcontroller with built-in WiFi and Bluetooth. It is widely used because it can sample complex sensors and communicate wirelessly with web servers without needing external network shields.' },
      { question: 'Can you transmit data between two microcontrollers wirelessly?', answer: 'Yes. We have engineered systems where a sender ESP32 gathers sensor telemetry and transmits it wirelessly across local networks to a receiver node or server for live dashboard display.' },
      { question: 'Do I need a separate web developer to build the dashboard for my IoT device?', answer: 'No. Because RagReon Tech is a full-stack engineering team, we develop both the embedded microcontroller firmware and the responsive web dashboard that displays your live sensor data.' },
      { question: 'What sensors can you interface with?', answer: 'We interface with a wide variety of analog and digital sensors, including temperature, humidity, water quality (pH, TDS, turbidity), electrical current, ultrasonic distance, and environmental parameter sensors.' },
    ],
  },

  // 07. Deep Learning & Computer Vision
  'deep-learning-computer-vision': {
    id: 'deep-learning-computer-vision',
    slug: 'deep-learning-computer-vision',
    serviceNumber: '07',
    title: 'Deep Learning & Computer Vision',
    shortTitle: 'Computer Vision & Deep Learning',
    category: 'Convolutional Neural Networks & Visual AI',
    iconName: 'ScanEye',
    highlightColor: 'purple',
    image: '/images/services/computer-vision.jpg',
    hero: {
      headline: 'Empower Applications with Visual Intelligence & Deep Learning',
      subheadline: 'Convolutional Neural Networks (CNNs), Image Classification & Automated Screening',
      supportingText:
        'We design and train deep convolutional neural networks that analyze photographic images and video frames. From agricultural crop pathology detection to automated visual feature extraction, we build structured deep learning pipelines incorporating stochastic augmentation, global pooling, and regularized convergence.',
      ctaLabel: 'Discuss Your Deep Learning Project',
      techBadges: ['TensorFlow 2 & Keras', 'Convolutional Neural Networks (CNN)', 'Stochastic Data Augmentation', 'Pillow (PIL) Image Preprocessing', 'Global Average Pooling', 'Model Checkpointing & EarlyStopping'],
    },
    overview: {
      heading: 'What Is Deep Learning & Computer Vision?',
      conceptExplanation:
        'Computer Vision enables computers to extract high-level semantic understanding from digital images or video. Deep Learning—specifically Convolutional Neural Networks (CNNs)—automates this by passing pixel tensors through hierarchical layers of convolutional filters that progressively learn low-level edges, mid-level textures, and high-level morphological shapes directly from image data.',
      howItWorks:
        'High-resolution photographs are loaded into standardized RGB tensors, normalized, enriched via random stochastic transformations (rotations, zooms, flips), processed through progressive convolution and pooling blocks, and classified into probability distributions via Softmax layers.',
      realWorldContext:
        'From automatically classifying foliar crop pathologies on plant leaves to detecting manufacturing defects or medical visual anomalies, deep learning replaces slow, subjective human visual inspection with rapid, consistent computer-assisted screening.',
      commonUseCases: [
        'Automated agricultural foliar disease classification from field leaf photographs',
        'Visual quality control and surface defect identification in manufacturing',
        'Medical imaging assistance and preliminary dermatological/pathological screening',
        'Object detection, visual categorization, and multi-class image classification',
        'Edge device visual inference for autonomous inspection prototypes',
      ],
    },
    importance: {
      heading: 'Why Visual AI Is Transforming Inspection & Diagnosis',
      description:
        'Visual examination is one of humanity’s primary sensory channels, but human visual inspection is slow, fatigue-prone, and constrained by specialist availability. Computer vision delivers scalable, consistent visual assessment.',
      points: [
        {
          title: 'Sub-Second Visual Analysis',
          explanation: 'Classify complex visual pathologies in leaf or product photographs in fractions of a second rather than waiting days for lab assays.',
          iconName: 'Zap',
        },
        {
          title: 'Eliminate Human Subjectivity & Fatigue',
          explanation: 'Algorithms apply identical mathematical filter matrices across every image, eliminating inconsistent judgments caused by human exhaustion.',
          iconName: 'ShieldCheck',
        },
        {
          title: 'Scalable Remote Agricultural & Field Screening',
          explanation: 'Empower farmers or field technicians to photograph symptoms on smartphones and receive immediate diagnostic guidance.',
          iconName: 'Camera',
        },
        {
          title: 'Hierarchical Feature Discovery',
          explanation: 'CNNs discover complex textural patterns and necrotic spot contours automatically without manual, brittle hand-crafted feature engineering.',
          iconName: 'Layers',
        },
      ],
    },
    problemsSolved: [
      {
        id: 1,
        title: 'Severe Overfitting on Limited Photographic Datasets',
        explanation: 'Deep networks with millions of parameters easily memorize image backgrounds (like lab paper or bench textures) rather than authentic pathology.',
        impact: 'We implement 4-tier stochastic data augmentation (rotations, zoom, flips, shifts) paired with Global Average Pooling and Dropout (0.5).',
        iconName: 'ShieldAlert',
      },
      {
        id: 2,
        title: 'Dense Parameter Bloat & GPU Memory Starvation',
        explanation: 'Brute-force Flatten layers connect thousands of spatial activations directly to dense neurons, causing parameter explosion and memory crashes.',
        impact: 'GlobalAveragePooling2D condenses feature maps into scalar averages, reducing parameter count dramatically while improving generalization.',
        iconName: 'Cpu',
      },
      {
        id: 3,
        title: 'High Visual Ambiguity Across Disease Categories',
        explanation: 'Different fungal, bacterial, and viral infections often present nearly identical early-stage yellowing, wilting, or spot necrosis.',
        impact: 'Hierarchical 3-block convolutional architectures progressively isolate low-level edges, mid-level spot textures, and spatial contours.',
        iconName: 'Eye',
      },
      {
        id: 4,
        title: 'I/O Bottlenecks When Training on Image Tensors',
        explanation: 'Decoding thousands of 224x224 RGB images on the CPU starves the GPU compute pipeline, causing sluggish training epochs.',
        impact: 'Asynchronous prefetching with tf.data.AUTOTUNE buffers batches in memory to maximize hardware throughput.',
        iconName: 'Zap',
      },
    ],
    solutionsCapabilities: [
      {
        id: 1,
        title: 'Custom Convolutional Neural Network (CNN) Architectures',
        description: 'Designing modular sequential and functional CNNs in TensorFlow/Keras tailored for multi-class visual pathology classification.',
        deliverables: ['Custom 3-block Conv2D + MaxPooling2D pipelines', 'GlobalAveragePooling2D dimensional reduction', 'Softmax multi-class output probability heads'],
        iconName: 'Cpu',
      },
      {
        id: 2,
        title: 'Stochastic Data Augmentation & Ingestion Pipelines',
        description: 'Building robust tf.data loading pipelines with automated intensity rescaling (1/255) and randomized rotation, zoom, flip, and translation shifts.',
        deliverables: ['4-tier stochastic data augmentation layers', 'tf.data.AUTOTUNE memory-buffered prefetching', 'Dynamic directory class mapping without hardcoding'],
        iconName: 'Sparkles',
      },
      {
        id: 3,
        title: 'Automated Training Checkpointing & EarlyStopping',
        description: 'Wiring automated callback harnesses that monitor validation loss plateaus, prevent overtraining, and serialize optimal model weights (.h5).',
        deliverables: ['EarlyStopping patience callbacks with weight restoration', 'ModelCheckpoint serialization (best_model.h5)', 'Matplotlib loss/accuracy trajectory curves'],
        iconName: 'ShieldCheck',
      },
      {
        id: 4,
        title: 'Dataset Integrity Auditing & Image Preprocessing',
        description: 'Writing standalone Python audit utilities that inspect directory trees, confirm image decodability, and evaluate class balance distributions.',
        deliverables: ['Automated dataset verification scripts', 'Corrupted image detection and sanitization', 'Training vs. validation split auditing (80/20)'],
        iconName: 'FileCheck',
      },
    ],
    technologies: [
      { name: 'Python 3.10+', role: 'Deep Learning Runtime & Scripting', context: 'Primary programming language for dataset ingestion, tensor operations, and training pipelines.', category: 'Languages' },
      { name: 'TensorFlow 2.13+', role: 'Production Deep Learning Engine', context: 'Provides the computational graph runtime, GPU acceleration, and tf.data input pipelines.', category: 'Frameworks' },
      { name: 'Keras API', role: 'High-Level Neural Network Modeling', context: 'Used to define layers (Conv2D, MaxPooling2D, GlobalAveragePooling2D, Dense, Dropout).', category: 'Modeling' },
      { name: 'Convolutional Neural Networks (CNN)', role: 'Core Visual Architecture', context: 'Hierarchical spatial filter layers that extract low-, mid-, and high-level visual features.', category: 'Architecture' },
      { name: 'Pillow (PIL)', role: 'Low-Level Image Decoding', context: 'Decodes JPEG/PNG files, verifies color channel consistency, and checks pixel integrity.', category: 'Image Processing' },
      { name: 'Matplotlib & NumPy', role: 'Tensor Math & Loss Visualization', context: 'Performs matrix operations and plots training vs. validation accuracy/loss trajectory curves.', category: 'Analytics' },
    ],
    developmentProcess: [
      { stepNumber: 1, title: 'Visual Domain Scoping & Taxonomy Definition', description: 'We analyze the visual classification problem, define target classes, and evaluate required input image resolutions (e.g. 224x224 RGB).', deliverables: ['Class taxonomy specification', 'Image input resolution standards'] },
      { stepNumber: 2, title: 'Dataset Auditing & Hierarchy Verification', description: 'We implement automated verification scripts to audit directory trees, test file decodability, and inspect class distribution balances.', deliverables: ['Dataset verification script', 'Class distribution report'] },
      { stepNumber: 3, title: 'Preprocessing & Stochastic Augmentation Pipeline', description: 'We configure intensity rescaling (1/255), 80/20 train/validation splits, and 4-tier stochastic augmentation (rotation, zoom, flip, shift).', deliverables: ['Data augmentation pipeline', 'Memory-buffered tf.data loader'] },
      { stepNumber: 4, title: 'CNN Architecture Design & Regularization', description: 'We build the convolutional feature hierarchy, replace Flatten layers with GlobalAveragePooling2D, and add Dropout (0.5) to curb overfitting.', deliverables: ['Compiled Keras model summary', 'Parameter count evaluation'] },
      { stepNumber: 5, title: 'Model Training, Checkpointing & Loss Plotting', description: 'We wire Adam optimization, Sparse Categorical Crossentropy, EarlyStopping, and ModelCheckpoint to save optimal weights.', deliverables: ['Serialized best_model.h5 weights', 'Convergence loss & accuracy curves'] },
      { stepNumber: 6, title: 'Held-Out Validation & Inference Delivery', description: 'We evaluate multi-class precision, recall, and confusion matrices on unseen test images, packaging the model for application inference.', deliverables: ['Classification performance report', 'Inference prediction script'] },
    ],
    relatedProjectSlugs: [
      'plant-disease-prediction',
    ],
    whyChooseUs: [
      { title: 'Modern Regularization Best Practices', description: 'We do not rely on outdated, parameter-heavy Flatten layers; we engineer Global Average Pooling and Dropout to combat memorization.', iconName: 'Cpu' },
      { title: 'Robust Data Augmentation Expertise', description: 'We apply stochastic 4-tier image transformations to ensure models generalize under varied field lighting, orientations, and scales.', iconName: 'Sparkles' },
      { title: 'Automated Checkpoint Safeguards', description: 'Our training harnesses include EarlyStopping and ModelCheckpoint to automatically restore and persist best model weights.', iconName: 'ShieldCheck' },
      { title: 'Transparent Engineering Without Fabricated Claims', description: 'We report actual dataset verification results, model layer dimensions, and training states honestly without inventing artificial metrics.', iconName: 'Award' },
    ],
    faqs: [
      { question: 'What is a Convolutional Neural Network (CNN)?', answer: 'A Convolutional Neural Network is a specialized deep learning architecture designed for visual data. It slides small mathematical filters across an image to detect spatial patterns—such as edges, curves, color patches, and textures—combining them into high-level visual features for classification.' },
      { question: 'Why is data augmentation important for computer vision models?', answer: 'In real-world settings, photographs are taken from different angles, with varying lighting, zoom levels, and orientations. Data augmentation randomly applies rotations, flips, and shifts during training, forcing the model to learn authentic visual features rather than memorizing static backgrounds.' },
      { question: 'What is the purpose of Global Average Pooling in a CNN?', answer: 'Traditional CNNs used Flatten layers that created millions of trainable parameters, leading to massive memory usage and severe overfitting. Global Average Pooling computes the average activation of each feature map, dramatically shrinking parameter count while improving generalization.' },
      { question: 'Can computer vision models run on mobile or edge devices?', answer: 'Yes. By using parameter-efficient architectures with Global Average Pooling and model quantization, trained CNNs can be exported to lightweight formats (like TensorFlow Lite) for edge deployment on mobile devices or microprocessors.' },
    ],
  },
}

/**
 * Retrieves full service details by slug with fallback alias support.
 */
export function getServiceDetailsBySlug(slug?: string): ServiceDetails | undefined {
  if (!slug) return undefined
  const cleanSlug = slug.toLowerCase().trim()

  // 1. Direct match
  if (serviceDetailsData[cleanSlug]) {
    return serviceDetailsData[cleanSlug]
  }

  // 2. Slug alias matching (e.g. python-automation <-> python-development)
  if (cleanSlug === 'python-automation') {
    return serviceDetailsData['python-development']
  }
  if (cleanSlug === 'python-development') {
    return serviceDetailsData['python-development']
  }

  // 3. Fallback matching by ID or title substring
  return Object.values(serviceDetailsData).find(
    (s) => s.id === cleanSlug || s.slug === cleanSlug,
  )
}

