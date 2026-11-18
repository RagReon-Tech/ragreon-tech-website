import type { ProjectDetails } from '@/types/project-details.types'
import { projectsData } from './projects'
import { getProjectContributors } from './contributors'

/**
 * Standardized Project Details Repository for all 21 RagReon Tech portfolio projects.
 * Each entry provides the technical schema, asset folder binding, and data slots
 * for all 16 page sections.
 */
export const projectDetailsMap: Record<string, ProjectDetails> = {
  // 1. Student Information System (SIS) - Completed
  'student-information-system': {
    id: 'student-information-system',
    slug: 'student-information-system',
    title: 'Student Information System (SIS)',
    category: 'Full-Stack Web Development',
    domain: 'Web Development',
    status: 'Completed',
    shortDescription:
      'A centralised academic management platform designed to simplify student information management, academic operations, and institutional administration through dedicated user portals.',
    assetFolderPath: '/projects/student-information-system/',
    coverImage: '/projects/student-information-system/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/student-information-system/demo.mp4',
      title: 'See the Student Information System in Action',
      description:
        'Explore the Student Information System through a demonstration of its interface, user portals, and academic management functionalities.',
    },
    overview: {
      introduction:
        'The Student Information System (SIS) is a full-stack web-based academic management application developed to simplify and organise institutional operations. The platform provides dedicated portals for Students, Faculty, Administrators, and Alumni, allowing different users to access relevant academic information and services through a centralised application. It brings together important institutional activities such as student information management, admissions, course registration, attendance tracking, academic grading, fee management, and administrative operations. The application demonstrates the integration of frontend development, backend functionality, database management, and role-based access control.',
      purpose:
        'Centralise disparate academic and administrative workflows into an intuitive digital ecosystem, eliminating manual paperwork and fragmented spreadsheets.',
      targetUsers: [
        'Students (Academic Records & Registration)',
        'Faculty Members (Class Rosters & Grading)',
        'Administrators (Registrar Oversight & Fees)',
        'Alumni (Transcripts & Institutional History)',
      ],
      mainObjective:
        'Deliver a secure, role-based platform that unifies student record management, course enrollments, attendance, grading, and fee oversight.',
      howItWorks:
        'Built with a modern full-stack architecture featuring a Flask application server, relational MySQL database models with SQLAlchemy ORM, and responsive web portal interfaces protected by JWT authentication.',
      highlights: [
        'Centralised Academic Management',
        'Four Dedicated User Portals',
        'Student Record Management',
        'Academic Operations',
        'Role-Based Access',
      ],
    },
    problemStatement: {
      title: 'The Problem We Wanted to Solve',
      mainProblem:
        'Educational institutions handle a large amount of student information and academic data. Managing student records, admissions, attendance, course registration, grades, and administrative activities through disconnected processes can make institutional operations difficult. A centralised platform is needed to organise these activities, improve information accessibility, and simplify academic administration.',
      whyItMatters:
        'A unified, reliable academic portal reduces administrative overhead, eliminates grade discrepancies, and provides transparent access to institutional services for all stakeholders.',
      keyChallenges: [
        {
          title: 'Fragmented Student Records',
          description:
            'Student information and academic records scattered across physical paperwork and disconnected spreadsheets.',
          iconName: 'Layers',
        },
        {
          title: 'Time-Consuming Administrative Tasks',
          description:
            'Manual administrative operations causing delays in admissions, fee reconciliations, and course allocations.',
          iconName: 'Clock',
        },
        {
          title: 'Maintaining Organised Academic Information',
          description:
            'Difficulty synchronizing attendance records, exam marks, and grade cards accurately across semesters.',
          iconName: 'FileText',
        },
        {
          title: 'Managing Student and Faculty Data',
          description:
            'Challenges in maintaining an integrated directory linking faculty course assignments and student rosters.',
          iconName: 'Users',
        },
        {
          title: 'Limited Centralised Access',
          description:
            'Absence of unified digital channels for students and alumni to request transcripts or check dues.',
          iconName: 'Globe',
        },
        {
          title: 'Inefficient Role Coordination',
          description:
            'Friction and communication barriers between academic departments, teaching faculty, and the registrar office.',
          iconName: 'Workflow',
        },
      ],
    },
    solution: {
      title: 'Our Solution',
      approach:
        'We developed a centralised Student Information System that brings different academic and administrative activities into one web-based platform. The application provides separate user portals for Students, Faculty, Administrators, and Alumni. Each portal provides access to relevant information and functionalities based on the user\'s role. The platform is designed to organise academic information, simplify institutional workflows, and improve accessibility through a unified interface.',
      technicalSolution:
        'Engineered with a Python Flask RESTful backend, a normalized MySQL database schema with SQLAlchemy ORM, and role-based JWT authentication ensuring strict data segregation across student, faculty, administrator, and alumni tiers.',
      implementationOverview:
        'Features modular dashboard architectures, atomic transaction handling for course enrollments, automated waitlist queuing, and continuous internal assessment calculations.',
      howItSolves: [
        'Dedicated user portals for tailored, distraction-free experiences',
        'Centralised academic information accessible anytime from any device',
        'Integrated student and faculty directory and course assignments',
        'Real-time attendance tracking and academic grade management',
        'Role-based access control protecting confidential student data',
        'Integrated institutional workflows with automated fee and transcript tracking',
      ],
    },
    portals: [
      {
        name: 'Student Portal',
        subtitle: 'Records Portal · Student Access',
        description:
          'A dedicated interface that allows students to access their personal academic information and relevant institutional services.',
        image: '/projects/student-information-system/gallery/Student_dashboard.png',
        iconName: 'UserCheck',
        functionalities: [
          'Personal student profile & contact details management',
          'Course registration with open course enrollment & waitlist status',
          'Subject-wise attendance reporting against 75% requirement',
          'Semester-wise examination results and digital grade cards',
          'Fee status with real-time dues tracking and payment history',
          'Official transcript requests for internships or transfers',
        ],
      },
      {
        name: 'Administrator Portal',
        subtitle: 'Records Portal · Registrar Overview',
        description:
          'A centralised administrative interface designed to support institutional management and oversee important academic operations.',
        image: '/projects/student-information-system/gallery/Admin_dashboard.png',
        iconName: 'ShieldCheck',
        functionalities: [
          'Student management: add, edit, or deactivate student records',
          'Faculty management: accounts, departments, and course allocations',
          'Course administration: catalog, capacity limits, and offerings',
          'Institutional fee records and overdue account tracking',
          'Campus-wide attendance and examination results reporting',
          'Institutional KPI monitoring (total students, faculty, courses)',
        ],
      },
      {
        name: 'Faculty Portal',
        subtitle: 'Records Portal · Faculty Access',
        description:
          'A dedicated interface for faculty members to access relevant academic information and manage their assigned academic responsibilities.',
        image: '/projects/student-information-system/gallery/Faculty_dashboard.png',
        iconName: 'Users',
        functionalities: [
          'Enrolled student class lists across assigned sections',
          'Daily session attendance marking and submission',
          'Continuous internal assessment marks entry',
          'Final semester examination grade entry and publishing',
          'Faculty profile management, contact details, and office hours',
        ],
      },
      {
        name: 'Alumni Portal',
        subtitle: 'Records Portal · Alumni Access',
        description:
          'A dedicated interface designed to provide alumni with access to relevant profile and institutional information.',
        image: '/projects/student-information-system/gallery/Alumni_dashboard.png',
        iconName: 'Award',
        functionalities: [
          'Alumni profile and contact details update for the alumni office',
          'Fee clearance status and historical dues verification',
          'Official certified transcript issuance requests',
          'Academic batch graduation history and institutional records',
        ],
      },
    ],
    keyFeatures: [
      {
        iconName: 'UserCheck',
        title: 'Student Information Management',
        description:
          'Centralised student profile management maintaining biographical data, departmental allocations, and contact records.',
      },
      {
        iconName: 'Users',
        title: 'Faculty Information Management',
        description:
          'Comprehensive faculty directory overseeing departmental appointments, course allocations, and office hours.',
      },
      {
        iconName: 'Layers',
        title: 'Course Registration & Automated Waitlists',
        description:
          'Streamlined open course enrollment with real-time seat capacity checks and automated waitlist queue tracking.',
      },
      {
        iconName: 'CalendarCheck',
        title: 'Attendance Tracking',
        description:
          'Subject-wise session attendance recording with automated threshold tracking against mandatory 75% institutional criteria.',
      },
      {
        iconName: 'Award',
        title: 'Academic Grade Management',
        description:
          'End-to-end evaluation pipeline handling internal assessment upload, final semester grades, and GPA calculations.',
      },
      {
        iconName: 'DollarSign',
        title: 'Fee Management & Dues Oversight',
        description:
          'Institutional fee ledger tracking semester dues, transaction histories, and real-time clearance status.',
      },
      {
        iconName: 'FileText',
        title: 'Digital Transcript Requests',
        description:
          'Direct digital application pipeline for current students and alumni to request certified official transcripts.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Role-Based Authentication & Security',
        description:
          'Robust security tier utilizing Bcrypt password encryption and JWT session tokens enforcing role-specific access.',
      },
      {
        iconName: 'Layout',
        title: 'Four Dedicated User Portals',
        description:
          'Tailored dashboards crafted specifically for Students, Faculty, Administrators, and Alumni operational workflows.',
      },
      {
        iconName: 'BarChart3',
        title: 'Administrative Monitoring',
        description:
          'Registrar overview providing real-time institutional metrics across student headcounts, active courses, and faculty.',
      },
    ],
    techStack: [
      'Python',
      'Flask',
      'MySQL',
      'JavaScript',
      'SQLAlchemy',
      'JWT Authentication',
      'Bcrypt',
      'Vercel',
    ],
    techStackGrouped: [
      {
        category: 'Frontend Development',
        items: [
          { name: 'JavaScript (ES6+)', role: 'Client-side Interactivity', iconName: 'Code2' },
          { name: 'HTML5 & CSS3', role: 'Responsive Portal Architecture', iconName: 'Layout' },
          { name: 'Modern CSS Design', role: 'Component Styling & System Design', iconName: 'Layout' },
        ],
      },
      {
        category: 'Backend Development',
        items: [
          { name: 'Python', role: 'Application Language', iconName: 'Terminal' },
          { name: 'Flask', role: 'RESTful Application Framework', iconName: 'Server' },
          { name: 'SQLAlchemy', role: 'Object-Relational Mapping (ORM)', iconName: 'Database' },
        ],
      },
      {
        category: 'Database Management',
        items: [
          { name: 'MySQL', role: 'Relational Database Engine', iconName: 'Database' },
          { name: 'Normalized Schema (3NF)', role: 'Referential Integrity & ACID Transactions', iconName: 'Layers' },
        ],
      },
      {
        category: 'Authentication & Security',
        items: [
          { name: 'JWT (JSON Web Tokens)', role: 'Stateless Session Authorization', iconName: 'ShieldCheck' },
          { name: 'Bcrypt', role: 'Cryptographic Password Hashing', iconName: 'ShieldAlert' },
          { name: 'RBAC Architecture', role: 'Role-Based Route Guarding', iconName: 'UserCheck' },
        ],
      },
      {
        category: 'Deployment & Tools',
        items: [
          { name: 'Vercel Platform', role: 'Production Cloud Deployment', iconName: 'Globe' },
          { name: 'Git & GitHub', role: 'Version Control & Code Hosting', iconName: 'FileCode' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/student-information-system/gallery/Student_dashboard.png',
        caption:
          'Student Portal Dashboard: Overview of attendance percentage, course registrations, and quick action modules.',
        alt: 'Student Portal Dashboard Interface',
      },
      {
        url: '/projects/student-information-system/gallery/Admin_dashboard.png',
        caption:
          'Administrator Portal Dashboard: Registrar overview tracking student headcounts, faculty allocations, and fee records.',
        alt: 'Administrator Portal Dashboard Interface',
      },
      {
        url: '/projects/student-information-system/gallery/Faculty_dashboard.png',
        caption:
          'Faculty Portal Dashboard: Course management, class lists, attendance submission, and internal marks entry.',
        alt: 'Faculty Portal Dashboard Interface',
      },
      {
        url: '/projects/student-information-system/gallery/Alumni_dashboard.png',
        caption:
          'Alumni Portal Dashboard: Fee clearance status, official transcript issuance requests, and graduation records.',
        alt: 'Alumni Portal Dashboard Interface',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Requirement Analysis',
        description:
          'Mapped institutional operational workflows across student, faculty, administrator, and alumni personas.',
      },
      {
        stepNumber: 2,
        title: 'System Planning',
        description:
          'Architected the role-based privilege matrix and mapped relational data dependencies.',
      },
      {
        stepNumber: 3,
        title: 'Database Design',
        description:
          'Normalized MySQL relational tables (3NF) ensuring referential integrity across courses, grades, and fees.',
      },
      {
        stepNumber: 4,
        title: 'Frontend Development',
        description:
          'Built clean, responsive dashboard interfaces for each of the four distinct user portals.',
      },
      {
        stepNumber: 5,
        title: 'Backend Development',
        description:
          'Engineered modular Flask RESTful API endpoints handling business logic and database transactions.',
      },
      {
        stepNumber: 6,
        title: 'Authentication Implementation',
        description:
          'Implemented Bcrypt password encryption and JWT token verification for secure role-gated routes.',
      },
      {
        stepNumber: 7,
        title: 'Portal Integration',
        description:
          'Unified all four portal interfaces into a synchronized web platform with role-aware navigation.',
      },
      {
        stepNumber: 8,
        title: 'Testing and Deployment',
        description:
          'Executed functional role-permission tests and successfully deployed the live application on Vercel.',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S',
        role: 'Lead Full-Stack Developer',
        image: '/images/team/sreeram-ganesh.png',
        responsibilities: [
          'Full-stack system architecture and relational database schema design',
          'Backend REST API development in Flask with MySQL and SQLAlchemy ORM',
          'Role-based authentication implementation with JWT and Bcrypt',
          'Responsive portal frontend development and deployment on Vercel',
        ],
        technicalContributions: [
          'Engineered multi-role permission decorators in Flask',
          'Designed normalized database tables with automated waitlist logic',
          'Built responsive dashboard UI across all four user portals',
        ],
        technologiesHandled: [
          'Python',
          'Flask',
          'MySQL',
          'JavaScript',
          'SQLAlchemy',
          'JWT',
          'Bcrypt',
          'Vercel',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Multi-Role Access Control & Security',
        explanation:
          'Enforcing strict access separation so students, faculty, administrators, and alumni can only view and mutate their authorized data.',
        solution:
          'Implemented centralized JWT token claims validation and custom Python Flask decorators that intercept each request to verify role permissions.',
        implementationApproach:
          'Bcrypt password hashing protects credential storage while stateless JWT tokens carry cryptographic role claims for route protection.',
      },
      {
        challenge: 'Complex Relational Data Integrity',
        explanation:
          'Managing interdependent data such as course seat capacities, student enrollments, faculty allocations, and fee clearance.',
        solution:
          'Normalized relational MySQL schema with foreign-key cascading and ACID transactional handling in SQLAlchemy.',
        implementationApproach:
          'Transactions automatically roll back on concurrent conflicts, preventing partial or corrupt enrollments.',
      },
      {
        challenge: 'Course Registration & Automated Waitlist Handling',
        explanation:
          'Preventing class over-enrollment when multiple students attempt to register for limited course seats simultaneously.',
        solution:
          'Engineered atomic capacity checking with automated waitlist queuing when course limits are reached.',
        implementationApproach:
          'When an enrolled student drops a course, the system automatically checks the waitlist queue to maintain optimal capacity.',
      },
      {
        challenge: 'Integrated Academic & Financial Synchronization',
        explanation:
          'Ensuring official services like transcript requests are strictly gated by fee clearance without manual back-and-forth.',
        solution:
          'Built unified database query joins that verify fee ledger clearance before issuing official transcript requests.',
        implementationApproach:
          'Alumni and student transcript modules perform an immediate fee clearance validation before processing.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Four dedicated user portals (Student, Faculty, Administrator, Alumni)',
        'Centralised academic and administrative information management',
        'Course registration with automated seat capacity and waitlist tracking',
        'Subject-wise attendance tracking against mandatory 75% threshold',
        'Examination marks uploading, GPA computation, and digital grade cards',
        'Digital fee ledger tracking dues, payment status, and clearance records',
        'Official transcript request and issuance workflow',
      ],
      technicalAchievements: [
        'Full-stack web architecture unifying frontend, Flask API, and MySQL',
        'Role-based access control (RBAC) powered by JWT and Bcrypt',
        'Normalized 3NF relational database schema with ACID transactions',
        'Production web application successfully deployed on Vercel',
      ],
      testingResults: [
        'Verified role-permission isolation across all four portal views',
        'Confirmed end-to-end course registration and fee clearance pipelines',
        'Validated cross-browser responsive design on mobile, tablet, and desktop',
      ],
      demonstratedCapabilities: [
        'Centralised academic management reducing administrative overhead',
        'Transparent digital communication between students, faculty, and registrar',
        'Zero-paper digital records, transcripts, and grade reports',
      ],
    },
    links: {
      github: 'https://github.com/sreeramganesh/student-information-system.git',
      githubLabel: 'View Source Code',
      liveDemo: 'https://sis-portal-gold.vercel.app',
      liveDemoLabel: 'Visit Live Application',
    },
  },

  // 2. LoanGauge AI - Completed
  'loangauge-ai': {
    id: 'loangauge-ai',
    slug: 'loangauge-ai',
    title: 'LoanGauge AI',
    shortTitle: 'LoanGauge AI',
    category: 'FinTech AI & Risk Intelligence',
    domain: 'AI & Machine Learning',
    domains: ['Web Development', 'Data Science', 'AI & Machine Learning'],
    status: 'Completed',
    shortDescription:
      'An autonomous credit verification engine and loan default risk assessment platform combining web-based borrower intake, data science pipelines, and balanced machine learning classification.',
    assetFolderPath: '/projects/loangauge-ai/',
    coverImage: '/projects/loangauge-ai/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/loangauge-ai/demo.mp4',
      thumbnail: '/projects/loangauge-ai/cover.png',
      title: 'See LoanGauge AI in Action',
      description:
        'Comprehensive walkthrough demonstrating real-time loan underwriting, default risk probability scoring, financial sensitivity simulation, and multi-format dossier export.',
      duration: 'Live Demonstration',
    },
    overview: {
      introduction:
        'LoanGauge AI (Autonomous Credit Verification Engine) is an intelligent loan default risk prediction and credit decision-support platform. It analyzes borrower attributes, evaluates repayment viability, and quantifies default probability using machine learning models trained on historical credit performance.',
      purpose:
        'Empower financial underwriters and lending institutions with instant, objective credit risk scoring while eliminating subjective bias, manual underwriting bottlenecks, and the devastating financial losses caused by undetected loan defaults.',
      targetUsers: [
        'Credit Underwriters',
        'Loan Officers & Risk Managers',
        'FinTech Lending Platforms',
        'Financial Risk Analysts',
      ],
      mainObjective:
        'Accurately identify high-risk loan default candidates on imbalanced historical lending portfolios without data leakage or black-box opacity.',
      howItWorks:
        'Loan applicants enter loan terms, income, and debt ratios into a responsive web interface. Pre-origination features are transformed and fed into an optimized Balanced Random Forest classifier, producing multiclass confidence distributions, real-time risk gauges, interactive financial sensitivity simulations, and downloadable audit dossiers.',
      highlights: [
        'Multidisciplinary: Web Dev, Data Science & Machine Learning',
        '38,574 Historical Loan Records Analyzed',
        '2.2x Higher Defaulter Recall via Balanced Random Forest',
        'Zero Data Leakage: Post-Origination Metrics Pruned',
        'Sub-15ms Real-Time Web Inference Latency',
      ],
    },
    problemStatement: {
      title: 'The Hidden Costs of Imbalanced Lending Risk',
      mainProblem:
        'Traditional retail lending operations struggle with prolonged turnaround times, subjective underwriting inconsistency, and severe blind spots caused by the heavy class imbalance inherent to loan default datasets.',
      whyItMatters:
        'Approving a single high-risk borrower who defaults costs a lending institution significantly more capital than manually verifying an ambiguous applicant. However, standard machine learning models trained naively on skewed data optimize solely for overall accuracy, ignoring defaults and exposing the lender to catastrophic non-performing assets.',
      existingLimitations: [
        'Heavy dataset class imbalance (83.3% fully paid vs 13.8% defaults) leads naive models to ignore minority defaulters.',
        'Post-origination data leakage (e.g. debt settlement, recovery fees, late payment dates) artificially inflates offline test metrics.',
        'Underwriter skepticism towards opaque, uninterpretable black-box models without feature importance attribution.',
        'Inability to perform dynamic financial sensitivity analysis when debt or interest rates fluctuate.',
      ],
      keyChallenges: [
        {
          title: 'Extreme Target Class Imbalance',
          description:
            'Historical loan portfolios contain 83.3% non-defaulters. Models optimizing for raw accuracy miss critical default signals.',
          iconName: 'Scale',
        },
        {
          title: 'Asymmetric Cost of Misclassification',
          description:
            'Approving a defaulted loan (False Negative) causes severe capital loss, far outweighing the cost of a false alert.',
          iconName: 'ShieldAlert',
        },
        {
          title: 'Post-Origination Data Leakage',
          description:
            'Variables collected after loan issuance corrupt predictive validity if not aggressively pruned prior to training.',
          iconName: 'Database',
        },
        {
          title: 'Underwriting Turnaround Bottlenecks',
          description:
            'Manual verification takes hours or days per file, delaying customer acquisition and increasing overhead.',
          iconName: 'Clock',
        },
        {
          title: 'Black-Box Mistrust & Compliance',
          description:
            'Regulators and loan officers reject automated decisions that lack clear feature attribution and mathematical explainability.',
          iconName: 'Eye',
        },
        {
          title: 'Isolated Credit Workflows',
          description:
            'Data science models often remain trapped in static Jupyter notebooks rather than interactive, production-ready web apps.',
          iconName: 'Code2',
        },
      ],
    },
    solution: {
      title: 'Unified Autonomous Credit Verification Engine',
      approach:
        'LoanGauge AI bridges web development, data science, and machine learning into a single cohesive architecture. By combining a clean web intake portal, rigorously audited pre-origination feature pipelines, and a balanced ensemble classifier, it delivers instant, interpretable credit decisions.',
      technicalSolution:
        'Built with Python, Scikit-Learn, and Flask with an interactive HTML5/CSS3/JavaScript client. Incorporates Random Forest (N=200, class_weight="balanced") to achieve a 20.10% defaulter recall on 9,644 test samples (2.2x higher than Decision Tree) with zero data leakage.',
      howItSolves: [
        'Automates borrower parameter intake and financial ratio computation in real time.',
        'Provides instant multiclass confidence scores (Fully Paid, Charged Off, Current).',
        'Allows underwriters to simulate DTI and interest rate stress testing dynamically.',
        'Generates 3-worksheet audit dossiers in Excel (.xlsx) and raw CSV format.',
      ],
    },
    keyFeatures: [
      {
        iconName: 'LayoutDashboard',
        title: 'Main Dashboard & Executive Telemetry',
        description:
          'High-level telemetry displaying 38,574 historical loans, 2.2x recall gains, zero data leakage confirmation, and quick-load simulated profiles.',
      },
      {
        iconName: 'ClipboardEdit',
        title: 'Loan Assessment Form',
        description:
          'Structured financial input capturing loan request terms, borrower annual income, debt obligations, and verification credentials.',
      },
      {
        iconName: 'Cpu',
        title: 'Real-Time Default Risk Prediction',
        description:
          'Sub-15ms machine learning inference calculating probability of default and determining automated credit clearance.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Multiclass Risk Classification',
        description:
          'Probabilistic distribution across Fully Paid (Good Standing), Charged Off (Default Risk), and Current (Active/In-Grace) categories.',
      },
      {
        iconName: 'BarChart2',
        title: 'Model Performance Analysis',
        description:
          'Comparative diagnostic cards demonstrating why Balanced Accuracy and Macro F1 reveal the true champion on skewed datasets.',
      },
      {
        iconName: 'Scale',
        title: 'Official Model Benchmarking',
        description:
          'Detailed empirical benchmark table evaluating Decision Tree against Balanced Random Forest across 9,644 testing samples.',
      },
      {
        iconName: 'Sliders',
        title: 'Financial Sensitivity & Risk Simulator',
        description:
          'Interactive sliders for Debt-to-Income, APR interest rates, and installment burden with dynamic risk gauges.',
      },
      {
        iconName: 'FileSpreadsheet',
        title: 'Multi-Format Report Export',
        description:
          'Downloadable underwriter audit dossiers in formatted Excel (.xlsx with 3 audit worksheets) and raw CSV format.',
      },
    ],
    applicationScreenshots: [
      {
        image: '/projects/loangauge-ai/Application Screenshots/main_dashboard.png',
        title: 'Main Dashboard & Executive Telemetry',
        description:
          'Executive credit decisioning portal displaying dataset telemetry (38,574 historical loans), key performance indicators (<15ms latency, zero leakage), and one-click quick-load applicant profiles (Prime, Near-Prime, Subprime).',
        badge: 'Executive Dashboard',
      },
      {
        image: '/projects/loangauge-ai/Application Screenshots/loan_assessment_form.png',
        title: 'Applicant Credit Parameters Form',
        description:
          'Granular parameter intake form dividing inputs into Loan Request Terms, Borrower Income & Obligations, and Verification & Collateral Profile with real-time field validation.',
        badge: 'Data Intake',
      },
      {
        image: '/projects/loangauge-ai/Application Screenshots/prediction_result.png',
        title: 'Prediction Result: Verified & Approved',
        description:
          'Automated low-risk approval verdict with a 15.5% default probability gauge, multiclass confidence distribution (84.5% Fully Paid), and calculated debt burden ratios.',
        badge: 'Approval Decision',
      },
      {
        image: '/projects/loangauge-ai/Application Screenshots/risk_classification.png',
        title: 'Prediction Result: Rejected (High Default Risk)',
        description:
          'Automated credit rejection display flagging 37.5% default risk, indicating high debt-to-income and elevated interest tier with underwriter actionable warnings.',
        badge: 'Rejection Verdict',
      },
      {
        image: '/projects/loangauge-ai/Application Screenshots/model_performance.png',
        title: 'Decision Tree vs. Random Forest Benchmark',
        description:
          'Diagnostic performance comparison cards highlighting the champion Random Forest model (Macro F1: 41.00%, Defaulter Recall: 20.10%) versus the flawed baseline Decision Tree.',
        badge: 'Model Diagnostics',
      },
      {
        image: '/projects/loangauge-ai/Application Screenshots/model_benchmark.png',
        title: 'Official Model Benchmark Table',
        description:
          'Full empirical benchmarking matrix evaluated on 9,644 test samples across Overall Accuracy, Balanced Accuracy, Macro F1, and Defaulter Recall with absolute delta calculations.',
        badge: 'Empirical Matrix',
      },
      {
        image: '/projects/loangauge-ai/Application Screenshots/risk_simulator.png',
        title: 'Financial Sensitivity & Risk Simulator',
        description:
          'Interactive stress-testing workbench with sensitivity sliders for Borrower DTI, APR Interest Rate, and Monthly Installment to simulate risk impact dynamically.',
        badge: 'Risk Simulation',
      },
      {
        image: '/projects/loangauge-ai/Application Screenshots/report_export.png',
        title: 'Download Assessment Report Modal',
        description:
          'Audit dossier generation allowing underwriters to export comprehensive assessments as formatted 3-worksheet Excel workbooks (.xlsx) or raw CSV files with unique verification IDs.',
        badge: 'Audit Reporting',
      },
    ],
    modelBenchmark: {
      title: 'Official Model Benchmark Table',
      sampleSize: '9,644 Testing Samples',
      baselineModel: {
        name: 'Decision Tree Classifier',
        params: 'Single Tree (Entropy, max_depth=12)',
        macroF1: '36.27%',
        defaulterRecall: '9.00% (120 caught)',
        balancedAccuracy: '36.07%',
        flawDescription:
          'Higher raw accuracy (80.39%) is an illusion created by 83.3% majority class bias. Misses 91% of loan charge-offs!',
      },
      championModel: {
        name: 'Random Forest Classifier',
        params: 'Ensemble (n=200, class_weight="balanced")',
        macroF1: '41.00%',
        defaulterRecall: '20.10% (268 caught)',
        balancedAccuracy: '40.09%',
        winningReason:
          'Successfully detects 20.1% of actual defaulters, more than doubling Decision Tree detection rate while maintaining strong precision across all tiers.',
      },
      rows: [
        {
          metric: 'Overall Accuracy',
          decisionTreeValue: '80.39%',
          randomForestValue: '76.59%',
          absoluteDelta: '-3.80%',
          winner: 'Majority Class Skew',
          impact: 'DT favored by high 83.3% non-default majority class bias',
        },
        {
          metric: 'Balanced Accuracy',
          decisionTreeValue: '36.07%',
          randomForestValue: '40.09%',
          absoluteDelta: '+4.02%',
          winner: 'Random Forest ★',
          impact: 'Substantially higher average recall across all loan classes',
        },
        {
          metric: 'Macro F1-Score',
          decisionTreeValue: '36.27%',
          randomForestValue: '41.00%',
          absoluteDelta: '+4.73%',
          winner: 'Random Forest ★',
          impact: 'True indicator of multiclass classification capability',
        },
        {
          metric: 'Defaulter Recall (Charged Off)',
          decisionTreeValue: '9.00% (120 caught)',
          randomForestValue: '20.10% (268 caught)',
          absoluteDelta: '+11.10% (2.2x)',
          winner: 'Random Forest ★',
          impact: 'Catches 2.2x more charged-off loans, minimizing bad debt',
        },
        {
          metric: 'Defaulter F1-Score',
          decisionTreeValue: '12.90%',
          randomForestValue: '20.90%',
          absoluteDelta: '+8.00%',
          winner: 'Random Forest ★',
          impact: 'Harmonic balance of precision and recall for high-risk loans',
        },
      ],
    },
    mlVisualizations: [
      {
        category: 'Dataset & Class Distribution',
        categoryDescription:
          'Exploratory data analysis revealing the underlying skew of historical loan applicant outcomes.',
        visualizations: [
          {
            image:
              '/projects/loangauge-ai/gallery/Dataset & Class Distribution/Target_Class_Distribution.png',
            title: 'Loan Status Class Distribution (Imbalance Overview)',
            description:
              'Visual breakdown of the 38,574 historical loan applicant records illustrating the severe class imbalance: 32,143 Fully Paid (83.3%), 5,333 Charged Off (13.8%), and 1,098 Current (2.8%).',
            findings: [
              'Non-defaulters account for 83.3% of all historical records.',
              'Defaulters represent only 13.8% of applications.',
              'Demands cost-sensitive or balanced weighting to prevent majority-class bias.',
            ],
          },
        ],
      },
      {
        category: 'Model Performance & Comparison',
        categoryDescription:
          'Empirical metrics comparing Decision Tree and Random Forest across individual classes and aggregated scores.',
        visualizations: [
          {
            image:
              '/projects/loangauge-ai/gallery/Model Performance & Comparison/Class_Performance_Comparison.png',
            title: 'Class-Specific Model Comparison (Recall & F1-Score)',
            description:
              'Per-class recall and F1-score comparison proving that Random Forest achieves 20.1% recall on Charged Off loans versus only 9.0% for Decision Tree, while maintaining strong performance on Fully Paid loans.',
            findings: [
              'Random Forest achieves 20.1% recall on Charged Off loans vs 9.0% for Decision Tree.',
              'Charged Off F1-score rises from 12.9% to 20.9% under the ensemble model.',
              'Fully Paid recall remains robust at 88.2% across the ensemble.',
            ],
          },
          {
            image:
              '/projects/loangauge-ai/gallery/Model Performance & Comparison/Model_Performance_Comparison.png',
            title: 'Overall Performance: Decision Tree vs. Random Forest',
            description:
              'Comprehensive six-metric evaluation comparing Accuracy (80.4% vs 76.6%), Balanced Accuracy (36.1% vs 40.1%), Macro Precision (40.2% vs 42.6%), Macro Recall (36.1% vs 40.1%), Macro F1 (36.3% vs 41.0%), and Weighted F1 (76.4% vs 75.8%).',
            findings: [
              'Random Forest outperforms Decision Tree on Balanced Accuracy, Macro Precision, Macro Recall, and Macro F1.',
              'Slightly lower raw accuracy is an intentional trade-off to capture minority defaulters.',
              'Macro metrics provide the definitive evaluation standard on imbalanced portfolios.',
            ],
          },
        ],
      },
      {
        category: 'Confusion Matrix Analysis',
        categoryDescription:
          'Granular confusion matrices displaying true detection rates, false negatives, and normalized recall across 9,644 test samples.',
        visualizations: [
          {
            image:
              '/projects/loangauge-ai/gallery/Confusion Matrix Analysis/Decision_Tree_Confusion_Matrix.png',
            title: 'Decision Tree Confusion Matrix (Raw Test Counts)',
            description:
              'Confusion matrix showing Decision Tree results on 9,644 test samples: only 120 of 1,333 actual Charged Off loans were caught, with 1,194 misclassified as Fully Paid.',
            findings: [
              '120 true positives on Charged Off loans out of 1,333.',
              '1,194 false negatives (charged-off loans mistakenly approved).',
              'Severe false-negative penalty in financial underwriting.',
            ],
          },
          {
            image:
              '/projects/loangauge-ai/gallery/Confusion Matrix Analysis/Random_Forest_Confusion_Matrix.png',
            title: 'Random Forest Confusion Matrix (Raw Test Counts)',
            description:
              'Confusion matrix showing Random Forest results on 9,644 test samples: 268 of 1,333 Charged Off loans caught, more than doubling detection while maintaining 7,085 correct Fully Paid classifications.',
            findings: [
              '268 true positives on Charged Off loans (2.2x increase over baseline).',
              'Substantial reduction in bad loans approved without human review.',
              'Balanced class weighting effectively forces the ensemble to attend to minority signals.',
            ],
          },
          {
            image:
              '/projects/loangauge-ai/gallery/Confusion Matrix Analysis/Model_Comparison_Confusion_Matrices.png',
            title: 'Normalized Confusion Matrix Comparison (True Detection Rates)',
            description:
              'Side-by-side normalized recall comparison illustrating the jump in true default detection rate from 9.0% (Decision Tree) to 20.1% (Random Forest).',
            findings: [
              'Charged Off normalized detection rate increases from 9.0% to 20.1%.',
              'Current loan detection rate jumps from 4.4% to 12.0%.',
              'Clear visual justification for selecting Random Forest as the production engine.',
            ],
          },
        ],
      },
      {
        category: 'Model Interpretability',
        categoryDescription:
          'Feature importance diagnostics ranking the financial drivers that influence default risk predictions.',
        visualizations: [
          {
            image:
              '/projects/loangauge-ai/gallery/Model Interpretability/Feature_Importance.png',
            title: 'Winning Model Feature Importance (Random Forest)',
            description:
              'Gini-based feature importance ranking for the winning Random Forest classifier: Interest Rate (~21.7%) and Installment (~21.0%) lead, followed by Debt-to-Income (~18.0%), Loan Amount (~17.3%), and Annual Income (~16.8%).',
            findings: [
              'Interest Rate and Monthly Installment constitute >42% of total model weight.',
              'Borrower DTI and Loan Amount represent the second tier of critical predictors.',
              'Provides clear, explainable rationale for underwriter audits and compliance.',
            ],
          },
          {
            image:
              '/projects/loangauge-ai/gallery/Model Interpretability/Feature_Importance_Comparison.png',
            title: 'Feature Importance Comparison: Decision Tree vs. Random Forest',
            description:
              'Comparative attribution chart revealing how Decision Tree over-relies on Interest Rate (>31%), whereas Random Forest distributes importance more evenly across multi-factor financial variables.',
            findings: [
              'Decision Tree places disproportionate weight (>31%) on a single feature (int_rate).',
              'Random Forest balances contributions across interest, installment, income, and debt.',
              'Ensemble feature distribution ensures greater stability and lower overfitting risk.',
            ],
          },
        ],
      },
    ],
    techStack: [
      'Python',
      'Scikit-Learn',
      'Flask',
      'Random Forest',
      'Pandas',
      'NumPy',
      'JavaScript',
      'Render',
    ],
    techStackGrouped: [
      {
        category: 'Web Development & Frontend',
        items: [
          { name: 'HTML5 & CSS3', role: 'Semantic Layout & Styling' },
          { name: 'JavaScript (ES6+)', role: 'Interactive Sliders & Dynamic Gauges' },
          { name: 'Jinja2 Templates', role: 'Server-Side Page Rendering' },
          { name: 'Responsive Web UI', role: 'Desktop, Tablet & Mobile Views' },
        ],
      },
      {
        category: 'Backend & Inference Services',
        items: [
          { name: 'Python 3.x', role: 'Core Application & Analytics Runtime' },
          { name: 'Flask / WSGI', role: 'Inference API & Request Routing' },
          { name: 'Joblib / Pickle', role: 'Model Pipeline Serialization' },
        ],
      },
      {
        category: 'Data Science & Feature Engineering',
        items: [
          { name: 'Pandas', role: 'Data Ingestion & Transformation' },
          { name: 'NumPy', role: 'Vectorized Numerical Computations' },
          { name: 'Pre-Origination Pruning', role: 'Zero Data Leakage Pipeline' },
        ],
      },
      {
        category: 'AI & Machine Learning',
        items: [
          { name: 'Scikit-Learn', role: 'ML Pipeline & Evaluation Metrics' },
          { name: 'Random Forest Classifier', role: 'Champion Ensemble (N=200, Balanced)' },
          { name: 'Decision Tree Classifier', role: 'Baseline Benchmark (Depth=12)' },
          { name: 'Class Weight Balancing', role: 'Minority Skew Mitigation' },
        ],
      },
      {
        category: 'Data Visualization & Reporting',
        items: [
          { name: 'Matplotlib & Seaborn', role: 'Statistical Charts & Confusion Matrices' },
          { name: 'OpenPyXL / Excel Engine', role: '3-Worksheet Audit Dossier Generation' },
          { name: 'CSV Exporter', role: 'Two-Column Raw Underwriting Export' },
        ],
      },
      {
        category: 'DevOps & Cloud Hosting',
        items: [
          { name: 'Render Cloud Platform', role: 'Live Production Hosting' },
          { name: 'Gunicorn', role: 'Production WSGI HTTP Server' },
          { name: 'Git & GitHub', role: 'Source Control & Deployment Pipeline' },
        ],
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Dataset Ingestion & Quality Audit',
        description:
          'Ingested and audited 38,574 historical retail loan records from Loan_Data.xlsx, profiling data types, null values, and applicant distributions.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Data Preprocessing & Cleaning',
        description:
          'Removed duplicate records, handled missing fields, encoded categorical variables (home ownership, verification status, application type), and standardized numerical inputs.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Exploratory Data Analysis & Class Skew Diagnostics',
        description:
          'Generated empirical distribution charts identifying severe target class imbalance: 83.3% fully paid vs 13.8% charged off loans.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Feature Engineering & Data Leakage Prevention',
        description:
          'Pruned all post-origination columns (total_payment, last_payment_date, next_payment_date, last_credit_pull_date) to guarantee strict zero-leakage pre-origination integrity.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Model Training & Class Balancing',
        description:
          'Trained a baseline Decision Tree (entropy, depth=12) and engineered an ensemble Random Forest (200 estimators) with balanced class weighting.',
        status: 'Completed',
      },
      {
        stepNumber: 6,
        title: 'Empirical Evaluation on 9,644 Test Samples',
        description:
          'Evaluated both models on an out-of-sample testing partition across Overall Accuracy, Balanced Accuracy, Macro F1, and Defaulter Recall.',
        status: 'Completed',
      },
      {
        stepNumber: 7,
        title: 'Web Application & Simulator Development',
        description:
          'Engineered the interactive web interface incorporating loan parameter inputs, real-time prediction gauges, sensitivity sliders, and report generation.',
        status: 'Completed',
      },
      {
        stepNumber: 8,
        title: 'Production Deployment & Dossier Export Verification',
        description:
          'Deployed the application to Render with Gunicorn WSGI and verified full-cycle Excel and CSV underwriting dossier downloads.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S',
        role: 'Lead Machine Learning Engineer & Full-Stack Developer',
        responsibilities: [
          'Designed and developed the complete end-to-end LoanGauge AI system from dataset preprocessing to cloud deployment.',
          'Formulated and executed the zero-leakage pre-origination feature selection strategy.',
          'Trained, benchmarked, and tuned Decision Tree and Balanced Random Forest classification models.',
          'Engineered the Python/Flask web architecture, interactive risk simulator, and multi-format Excel/CSV dossier export pipelines.',
        ],
        technicalContributions: [
          'Engineered balanced class weighting achieving 2.2x higher defaulter recall on 9,644 testing samples.',
          'Eliminated post-origination leakage by removing settlement and payment date attributes.',
          'Constructed interactive financial sensitivity algorithms with sub-15ms real-time inference latency.',
        ],
        technologiesHandled: [
          'Python',
          'Scikit-Learn',
          'Flask',
          'Pandas',
          'NumPy',
          'Matplotlib',
          'Seaborn',
          'JavaScript',
          'Render',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Extreme Target Class Imbalance (83.3% Non-Defaulters)',
        explanation:
          'Standard supervised classifiers optimize for overall accuracy, which on this dataset incentivizes predicting "Fully Paid" for all loans, completely missing actual defaults.',
        solution:
          'Implemented cost-sensitive balanced class weighting (class_weight="balanced") within a 200-tree Random Forest ensemble, boosting defaulter recall from 9.0% to 20.1% (2.2x improvement).',
        implementationApproach:
          'Calibrated decision thresholds and evaluated models against Macro F1 and Balanced Accuracy rather than deceptive overall accuracy.',
      },
      {
        challenge: 'Preventing Post-Origination Data Leakage',
        explanation:
          'Lending datasets often contain outcome variables (e.g., total_payment, collection recovery fees, last payment dates) that are only recorded after a loan defaults or matures.',
        solution:
          'Conducted a rigorous feature origin audit and pruned all post-origination columns prior to model training, restricting inputs strictly to data known at the time of initial loan application.',
        implementationApproach:
          'Retained only pre-origination variables: loan amount, interest rate, installment, annual income, DTI, verification status, and home ownership.',
      },
      {
        challenge: 'Underwriter Trust & Model Explainability',
        explanation:
          'Credit officers and financial regulators cannot adopt opaque "black-box" models without mathematical justification of decision factors.',
        solution:
          'Extracted and visualized Gini feature importance rankings showing that Interest Rate (21.7%) and Installment (21.0%) drive the model, followed by DTI (18.0%).',
        implementationApproach:
          'Coupled feature importance with an interactive Risk Simulator allowing underwriters to adjust parameters and observe the calculated risk impact directly.',
      },
      {
        challenge: 'Sub-15ms Real-Time Web Inference Latency',
        explanation:
          'Loading heavy machine learning pipelines on every HTTP request can introduce significant latency and server memory spikes.',
        solution:
          'Serialized the trained pipeline into memory using optimized joblib artifacts, enabling the web server to execute feature scaling and ensemble prediction in under 15ms.',
        implementationApproach:
          'Configured Gunicorn worker concurrency on Render with pre-warmed model instances to ensure instantaneous user feedback.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Interactive credit decisioning web portal with instant risk assessment.',
        'Balanced Random Forest model detecting 20.10% of charged-off loans (268 caught).',
        'Interactive financial sensitivity simulator with dynamic risk gauges.',
        'Multi-format dossier export producing 3-worksheet Excel workbooks and raw CSVs.',
      ],
      technicalAchievements: [
        'Evaluated across 38,574 historical loan applicant records.',
        'Tested on an out-of-sample partition of 9,644 stratified samples.',
        'Achieved sub-15ms real-time inference latency on live cloud deployment.',
        'Guaranteed zero post-origination data leakage across all feature pipelines.',
      ],
      demonstratedCapabilities: [
        'Multidisciplinary integration of Web Development, Data Science, and AI/ML.',
        'Objective, data-backed credit verification replacing subjective manual review.',
        'Mathematical explainability via feature importance and sensitivity simulation.',
      ],
      verifiedMetrics: [
        '2.2x Higher Defaulter Recall (20.10% vs 9.00%)',
        '38,574 Historical Loan Records Analyzed',
        '< 15ms Instant Inference Latency',
        'Zero Post-Origination Data Leakage',
      ],
    },
    links: {
      github: 'https://github.com/sreeramganesh/LoanGuard-AI.git',
      githubLabel: 'View Source Code',
      liveDemo: 'https://loan-default-risk-prediction-ro68.onrender.com/',
      liveDemoLabel: 'Visit Live Application',
    },
  },

  // 3. AI-Based Cognitive Screening System for Early Dementia Detection - Completed
  'cognitive-screening-system': {
    id: 'cognitive-screening-system',
    slug: 'cognitive-screening-system',
    title: 'AI-Based Cognitive Screening System for Early Dementia Detection',
    shortTitle: 'AI Cognitive Screening System',
    subtitle:
      'An AI-Powered Cognitive Assessment Platform for Early Dementia Risk Screening',
    category: 'Healthcare AI & Cognitive Analytics',
    domain: 'AI & Machine Learning',
    domains: ['Data Science', 'AI & Machine Learning', 'Web Development'],
    status: 'Completed',
    shortDescription:
      'A web-based cognitive screening application that uses structured cognitive assessments and Machine Learning-based analysis to evaluate responses and classify dementia risk into Low, Moderate, and High categories.',
    assetFolderPath: '/projects/cognitive-screening-system/',
    coverImage: '/projects/cognitive-screening-system/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/cognitive-screening-system/demo.mp4',
      thumbnail: '/projects/cognitive-screening-system/cover.png',
      title: 'Project Demonstration',
      description:
        'Comprehensive live recording showcasing participant onboarding, executing all 10 interactive cognitive tasks with synchronized timers, asynchronous backend scoring, real-time risk classification, and evidence-based home support actions.',
      duration: 'Full Walkthrough',
    },
    overview: {
      introduction:
        'The AI Cognitive Screening System is an accessible, web-based digital health screening application designed to detect early patterns of neurocognitive divergence. The platform guides participants through ten standardized cognitive exercises evaluating verbal fluency, visual pattern recall, executive logic, and delayed memory, combining automated heuristic scoring with a trained Random Forest classification model.',
      purpose:
        'Provide an accessible, non-invasive preliminary screening mechanism to promote early detection of cognitive impairment, encouraging timely clinical consultations while reducing screening friction and white-coat anxiety.',
      targetUsers: [
        'Older Adults & Individuals Seeking Cognitive Baseline Checks',
        'Primary Healthcare Clinicians & Screening Centers',
        'Caregivers & Family Members Monitoring Loved Ones',
        'Geriatric Wellness & Community Health Programs',
      ],
      mainObjective:
        'Digitize standardized cognitive assessment tasks, transform multimodal responses into objective numerical feature matrices, and deliver instant, transparent Low, Moderate, or High risk classifications.',
      howItWorks:
        'Participants complete 10 sequential interactive cognitive tasks in a calm browser environment. On completion, the frontend client asynchronously submits the response payload via REST API to a Python Flask server. The scoring engine evaluates responses across lexical, numerical, and pattern rubrics to construct a 10-dimensional feature vector, which a 200-estimator Random Forest classifier processes to return the risk tier, confidence percentage, detailed task breakdown, and home support exercises.',
      highlights: [
        '10 Interactive Neurocognitive Task Modules',
        'Multimodal Evaluation: Verbal, Visual & Logical Tasks',
        'Automated Task-Wise Backend Scoring Engine',
        'Random Forest Machine Learning Classifier (200 Estimators)',
        'Stratified Risk Classification (Low, Moderate, High)',
        'Personalized Home Support & Cognitive Care Guidance',
      ],
    },
    problemStatement: {
      title: 'The Critical Need for Accessible Early Cognitive Screening',
      mainProblem:
        'Dementia and mild cognitive impairment (MCI) often develop subtly over years before formal diagnosis. Conventional neuropsychological assessments require specialized clinic visits, extensive manual paper evaluations, and significant healthcare resources, resulting in delayed detection and missed opportunities for early lifestyle interventions.',
      whyItMatters:
        'Early detection enables individuals, caregivers, and clinicians to implement cognitive rehabilitation, medical management, and lifestyle adaptations long before severe neurodegeneration occurs. Accessible digital screening democratizes preliminary assessment without imposing clinical burden.',
      existingLimitations: [
        'High barrier to entry: Traditional cognitive testing requires specialized clinical appointments and extensive paper battery administration.',
        'Delayed detection: Subtle early-stage deficits in semantic retrieval and working memory are often dismissed as normal aging.',
        'Testing anxiety: Clinical hospital environments can provoke white-coat anxiety, skewing patient baseline performance.',
        'Lack of objective digital scoring: Conventional paper forms require subjective examiner interpretation and manual score tallying.',
      ],
      keyChallenges: [
        {
          title: 'Converting Unstructured Responses into Standardized Scores',
          description:
            'Participant responses range from natural language descriptions and numerical answers to multi-choice selections, requiring robust parsing heuristics.',
          iconName: 'FileText',
        },
        {
          title: 'Balancing Sensitivity Across Multiple Cognitive Domains',
          description:
            'Impairment may manifest selectively in delayed recall, visuospatial memory, or executive logic, demanding multi-task coverage.',
          iconName: 'Brain',
        },
        {
          title: 'Managing Timed Cognitive Stimuli in the Browser',
          description:
            'Tasks like visual grid recall and pattern recognition require strict, synchronized exposure timers before hiding stimuli.',
          iconName: 'Clock',
        },
        {
          title: 'Asynchronous Full-Stack Model Inference',
          description:
            'Seamlessly transmitting task answers from a lightweight vanilla JS client to a Flask backend and serialized Scikit-Learn pipeline without page reloads.',
          iconName: 'Cpu',
        },
        {
          title: 'Actionable & Responsible Risk Stratification',
          description:
            'Delivering clear, non-stigmatizing Low, Moderate, and High risk categories accompanied by constructive home care guidance.',
          iconName: 'ShieldCheck',
        },
        {
          title: 'Maintaining Strict Clinical Safety Boundaries',
          description:
            'Ensuring the system functions strictly as an educational and screening aid without masquerading as a medical diagnostic device.',
          iconName: 'ShieldAlert',
        },
      ],
    },
    solution: {
      title: 'AI-Powered End-to-End Cognitive Screening Platform',
      approach:
        'The application unifies web development, data science, and machine learning into an intuitive screening journey. It guides users through an accessible digital assessment, executes automated heuristic scoring in the Flask backend, and classifies risk using a trained Random Forest ensemble.',
      technicalSolution:
        'Developed with HTML5, CSS3, JavaScript, Python, Flask, and Scikit-Learn. Employs a 200-estimator Random Forest model trained on a 10-dimensional task feature space. Features asynchronous REST communication via Fetch API, automated rubric scoring, and personalized lifestyle recommendations.',
      howItSolves: [
        'Administers 10 non-invasive cognitive challenges in a calm, browser-based environment.',
        'Automatically evaluates verbal fluency, memory recall, and logical deduction via backend rules.',
        'Applies ensemble machine learning to synthesize composite multi-task patterns into clear risk tiers.',
        'Delivers immediate task breakdown summaries and evidence-based home support exercises.',
      ],
    },
    cognitiveTasks: [
      {
        taskNumber: 1,
        title: 'Picture Description Task',
        category: 'Verbal Fluency & Narrative Richness',
        cognitiveDomain: 'Language & Semantic Retrieval',
        purpose:
          'Evaluates verbal fluency, semantic retrieval, and spontaneous descriptive organization when observing complex visual scenes.',
        stimulus: 'High-resolution visual artwork (picture.jpeg) depicting daily environmental context.',
        interaction: 'User examines image and types a detailed natural-language description into an expanding textarea.',
        scoringMechanism:
          'Word count thresholding: >20 words = 10 pts; >10 words = 7 pts; >5 words = 4 pts; ≤5 words = 2 pts.',
        iconName: 'FileText',
      },
      {
        taskNumber: 2,
        title: 'Story Reading & Word Repetition',
        category: 'Comprehension & Attention',
        cognitiveDomain: 'Auditory & Reading Comprehension',
        purpose:
          'Measures reading comprehension, sustained focus, and detection of recurring contextual keywords within a narrative.',
        stimulus: 'Short episodic narrative titled "The Lost Umbrella" containing deliberate thematic repetition.',
        interaction: 'User reads the narrative carefully and types the primary repeated keyword.',
        scoringMechanism:
          'Substring keyword verification: Keyword "umbrella" present in answer = 10 pts; else = 5 pts.',
        iconName: 'BookOpen',
      },
      {
        taskNumber: 3,
        title: 'Word Fluency Test',
        category: 'Phonemic Lexical Access',
        cognitiveDomain: 'Executive Verbal Function',
        purpose:
          'Tests rapid lexical retrieval, phonemic search speed, and frontal-lobe verbal initiation under a 60-second time constraint.',
        stimulus: 'Prompt requiring participant to generate as many words as possible starting with letter "S".',
        interaction: 'Engages interactive voice recording trigger with simulated speech-to-text transcript capture.',
        scoringMechanism:
          'Response verification: Completed response submitted = 10 pts; incomplete/empty = 5 pts.',
        iconName: 'Mic',
      },
      {
        taskNumber: 4,
        title: 'Visual Memory Task',
        category: 'Pattern Recognition & Working Memory',
        cognitiveDomain: 'Visual Working Memory',
        purpose:
          'Evaluates short-term visual working memory and retention of geometric symbol ordering after stimulus extinction.',
        stimulus: '10-second synchronized display of geometric sequence (★ ⬛ ▲ ⬜ ★) with active countdown timer.',
        interaction: 'Sequence vanishes automatically; user selects matching pattern from multiple-choice options (A, B, C).',
        scoringMechanism:
          'Choice validation: Correct option "B" selected = 10 pts; incorrect choice = 5 pts.',
        iconName: 'Eye',
      },
      {
        taskNumber: 5,
        title: 'Problem-Solving & Conditional Logic',
        category: 'Executive Deduction & Math Reasoning',
        cognitiveDomain: 'Executive Reasoning',
        purpose:
          'Measures practical reasoning, multi-step constraint evaluation, and mental arithmetic under budget limitations.',
        stimulus: 'Purchasing scenario: Pencils ($2), Notebooks ($5), total budget $20 with minimum requirement of 2 notebooks.',
        interaction: 'User calculates maximum allowable pencils under constraints and enters numerical response.',
        scoringMechanism:
          'Mathematical validation: Correct deduction "5" present in input = 10 pts; else = 5 pts.',
        iconName: 'Calculator',
      },
      {
        taskNumber: 6,
        title: 'Object-Location Recall',
        category: 'Visuospatial Grid Memory',
        cognitiveDomain: 'Visuospatial Memory',
        purpose:
          'Evaluates visuospatial memory binding and immediate spatial configuration recall of items distributed across a grid.',
        stimulus: '15-second timed grid presentation of labeled objects (your-image.jpg) with automated disappearance.',
        interaction: 'Grid disappears; user describes remembered objects and spatial positions in dedicated recall box.',
        scoringMechanism:
          'Descriptive recall depth: >20 words = 10 pts; >10 words = 7 pts; >5 words = 4 pts; ≤5 words = 2 pts.',
        iconName: 'Grid',
      },
      {
        taskNumber: 7,
        title: 'Sentence Repetition Task',
        category: 'Auditory Working Memory',
        cognitiveDomain: 'Working Memory & Articulation',
        purpose:
          'Assesses phonological loop capacity, immediate auditory working memory, and grammatical repetition precision.',
        stimulus: 'Complex auditory sentence prompt: "The quick brown fox jumps over the lazy dog."',
        interaction: 'User repeats sentence verbatim via voice recording or typed transcription.',
        scoringMechanism:
          'Phrase accuracy check: Substring "quick brown fox" present in input = 10 pts; else = 5 pts.',
        iconName: 'CheckSquare',
      },
      {
        taskNumber: 8,
        title: 'Critical Thinking Scenario',
        category: 'Situational Judgment & Reasoning',
        cognitiveDomain: 'Executive Function & Safety Judgment',
        purpose:
          'Evaluates adaptive problem-solving, situational awareness, and realistic safety judgment in an emergency.',
        stimulus: 'Nighttime scenario: Walking down a dark lane with extinguished streetlights, low battery, and approaching footsteps.',
        interaction: 'User formulates and inputs an appropriate safety action plan.',
        scoringMechanism:
          'Semantic safety keyword check: Any safety action term ("call", "run", "safe", "help") present = 10 pts; else = 5 pts.',
        iconName: 'ShieldCheck',
      },
      {
        taskNumber: 9,
        title: 'Delayed Recall Task',
        category: 'Episodic Long-Term Memory',
        cognitiveDomain: 'Delayed Episodic Memory',
        purpose:
          'Measures delayed retention and resistance to proactive/retroactive interference after multiple intermediate cognitive tasks.',
        stimulus: 'Uncued delayed recall prompt querying the central recurring subject from Task 2 read minutes earlier.',
        interaction: 'User recalls and submits the recurring narrative keyword from memory.',
        scoringMechanism:
          'Delayed retrieval check: Target keyword "umbrella" present = 10 pts; else = 5 pts.',
        iconName: 'Clock',
      },
      {
        taskNumber: 10,
        title: 'Pattern Continuation & Logical Reasoning',
        category: 'Inductive Logic & Sequence Reasoning',
        cognitiveDomain: 'Abstract Inductive Reasoning',
        purpose:
          'Measures inductive abstract reasoning through mathematical series completion across increasing intervals and Fibonacci progressions.',
        stimulus: 'Three distinct numerical series: Sequence I (Alternating step), Sequence II (Increasing diff), Sequence III (Fibonacci).',
        interaction: 'User calculates missing terminal terms and inputs values into separate sequence fields.',
        scoringMechanism:
          'Sequence input verification: Completed entries submitted = 10 pts; incomplete = 5 pts.',
        iconName: 'Workflow',
      },
    ],
    keyFeatures: [
      {
        iconName: 'Brain',
        title: 'Standardized 10-Task Cognitive Battery',
        description:
          'Multi-domain cognitive tasks covering lexical retrieval, spatial recall, logical reasoning, and delayed memory retention.',
      },
      {
        iconName: 'Cpu',
        title: 'Automated Task-Wise Scoring Engine',
        description:
          'Server-side heuristic evaluation in Python converting raw natural language, option selections, and numbers into numerical scores.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Random Forest Risk Classification',
        description:
          '200-estimator ensemble model classifying composite multi-task patterns into Low, Moderate, and High dementia risk tiers.',
      },
      {
        iconName: 'Clock',
        title: 'Synchronized Timed Stimuli Engine',
        description:
          'Automated frontend timers enforcing strict 10s and 15s visual exposure intervals before stimulus extinction.',
      },
      {
        iconName: 'Server',
        title: 'Asynchronous Flask Microservice API',
        description:
          'Lightweight Python/Flask REST endpoint (/calculate_risk) processing JSON payloads with sub-50ms inference turnaround.',
      },
      {
        iconName: 'UserCheck',
        title: 'Participant Profile Management',
        description:
          'Integrated profile side-panel capturing baseline demographic metadata (Name, Age, DOB, Gender, Contact) for record keeping.',
      },
      {
        iconName: 'FileText',
        title: 'Transparent Task Score Breakdown',
        description:
          'Immediate post-assessment summary displaying composite risk percentage alongside individual 0–10 score breakdowns for all tasks.',
      },
      {
        iconName: 'Activity',
        title: 'Evidence-Based Home Care Guidance',
        description:
          'Actionable daily lifestyle recommendations spanning memory exercises, brain games, physical walking, and nutrition.',
      },
    ],
    architecture: {
      description:
        'The AI Cognitive Screening System follows a clean, decoupled 3-tier architecture connecting a responsive frontend assessment interface with a Python/Flask inference microservice and Scikit-Learn Random Forest pipeline.',
      frontend:
        'HTML5, CSS3 Custom Dark Theme, and Vanilla JavaScript (ES6+). Implements timed visual stimuli displays, participant profile drawer, and asynchronous Fetch API communication.',
      backend:
        'Python 3.x Flask server with Flask-CORS. Implements score_tasks() to translate raw textual, option, and numerical responses into a 10-dimensional feature score vector.',
      aiModels: [
        'Scikit-Learn RandomForestClassifier (n_estimators=200, random_state=42)',
        'Model serialization via Joblib (risk_model.pkl)',
        'predict_proba() confidence percentage calculation',
      ],
      workflow: [
        '1. Participant Onboarding: Demographic details entered in slide-out profile drawer (page4.html).',
        '2. Pre-Test Instructions: Guidelines and environmental readiness checks administered (page5.html).',
        '3. Cognitive Battery: 10 interactive timed tasks executed sequentially in the browser (page6.html).',
        '4. Asynchronous Dispatch: Answers bundled into JSON payload and dispatched via POST /calculate_risk.',
        '5. Automated Scoring: score_tasks() parses answers to yield a 10-element numerical score array [0-10].',
        '6. ML Inference: Random Forest predicts discrete risk class (Low, Moderate, High) and probability percentage.',
        '7. Results & Guidance: UI renders risk status, task breakdown, and home care actions (page6 & page7).',
      ],
    },
    gallery: [
      {
        url: '/projects/cognitive-screening-system/gallery/dashboard.png',
        caption:
          'Application Onboarding & Pre-Test Readiness Dashboard — Displays screening intro, environmental guidance (quiet place, microphone readiness, 15-20 min duration), and assessment launch button.',
        alt: 'AI Cognitive Screening System Welcome Dashboard',
      },
      {
        url: '/projects/cognitive-screening-system/gallery/Report.png',
        caption:
          'Assessment Result & Task Breakdown Report — Live output displaying Moderate Risk classification, 8.50% score metric, and detailed score breakdown across all 10 cognitive modules.',
        alt: 'Dementia Risk Assessment Result and Task Breakdown',
      },
    ],
    techStack: [
      'Python',
      'Flask',
      'Scikit-Learn',
      'Random Forest',
      'JavaScript',
      'HTML5/CSS3',
      'Joblib',
      'Pandas',
    ],
    techStackGrouped: [
      {
        category: 'Web Development & Frontend',
        items: [
          { name: 'HTML5 & CSS3', role: 'Accessible Dark-Themed UI & Grid Layouts' },
          { name: 'JavaScript (ES6+)', role: 'Interactive Timers & Asynchronous Fetch' },
          { name: 'DOM Animation', role: 'Slide-Out Drawer & Transition Effects' },
        ],
      },
      {
        category: 'Backend & API Microservice',
        items: [
          { name: 'Python 3.x', role: 'Core Application Logic & Scoring Runtime' },
          { name: 'Flask', role: 'RESTful API Routing & Request Handling' },
          { name: 'Flask-CORS', role: 'Cross-Origin Resource Sharing Enablement' },
        ],
      },
      {
        category: 'Machine Learning & Data Science',
        items: [
          { name: 'Scikit-Learn', role: 'Random Forest Ensemble Modeling' },
          { name: 'Joblib', role: 'Model Artifact Serialization (risk_model.pkl)' },
          { name: 'Pandas & NumPy', role: 'Feature Matrix Construction & Calibration' },
        ],
      },
      {
        category: 'Development & Version Control',
        items: [
          { name: 'Git & GitHub', role: 'Source Control & Code Repository' },
          { name: 'Synthetic Data Pipeline', role: '200-Sample Calibration Data Generator' },
        ],
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Cognitive Battery Research & Task Selection',
        description:
          'Researched clinical screening paradigms (MMSE, MoCA, Clock Drawing) and selected 10 targeted tasks evaluating verbal fluency, visual pattern recall, and executive function.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Synthetic Calibration Dataset Generation',
        description:
          'Engineered generate_data.py to synthesize 200 labeled assessment samples with 10 task scores (0-10) mapped to Low, Moderate, and High risk categories.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Machine Learning Model Development',
        description:
          'Trained and evaluated a 200-tree Scikit-Learn Random Forest Classifier using an 80/20 train/test split, serializing the trained model to risk_model.pkl.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Flask API & Heuristic Scoring Engine Implementation',
        description:
          'Developed app.py incorporating score_tasks() to translate unstructured text, voice triggers, option choices, and arithmetic inputs into standardized numerical features.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Interactive Frontend UI & Timed Stimuli Engine',
        description:
          'Constructed accessible web views (page4 to page7) with synchronized countdown timers (10s and 15s) for pattern memory and grid recall challenges.',
        status: 'Completed',
      },
      {
        stepNumber: 6,
        title: 'Full-Stack Integration & API Testing',
        description:
          'Connected the browser client with the Flask backend via asynchronous POST /calculate_risk requests, verifying real-time score rendering and error boundaries.',
        status: 'Completed',
      },
      {
        stepNumber: 7,
        title: 'Evidence-Based Home Care Action Formulation',
        description:
          'Compiled non-pharmacological home lifestyle guidance spanning daily recall, puzzle solving, walking, consistent sleep, and brain-healthy nutrition.',
        status: 'Completed',
      },
      {
        stepNumber: 8,
        title: 'End-to-End Walkthrough & Video Documentation',
        description:
          'Executed live testing sessions, recorded full demonstration video (demo.mp4), and documented source code across Git and the portfolio system.',
        status: 'Completed',
      },
    ],
    challenges: [
      {
        challenge: 'Converting Heterogeneous Responses into Standardized Scores',
        explanation:
          'Participant inputs vary widely: word counts for visual descriptions, exact keyword occurrences for narrative tasks, multiple-choice letters for pattern recognition, and integers for math logic.',
        solution:
          'Engineered a multi-rule heuristic scoring engine in app.py that applies tailored parsing algorithms per task to generate a normalized 0–10 score for each cognitive domain.',
        implementationApproach:
          'Implemented word_count_score() for open-ended text, case-insensitive substring matching for recall tasks, and strict string equality for pattern choices.',
      },
      {
        challenge: 'Synchronizing Visual Exposure Timers in Browser DOM',
        explanation:
          'Tasks evaluating immediate visual recall require strict exposure limits (10s for geometric shapes, 15s for object grids) before the stimulus is hidden and recall is requested.',
        solution:
          'Implemented automated JavaScript interval timers with stateful timer arrays, dynamically clearing active timers upon task navigation to prevent memory leaks and race conditions.',
        implementationApproach:
          'Utilized clearAllTimers() to reset existing intervals upon showing new questions, automatically toggling CSS display properties on countdown completion.',
      },
      {
        challenge: 'Seamless Serialized Model Loading in Flask',
        explanation:
          'Desynchronization between the Scikit-Learn training environment and Flask API runtime can cause model loading failures or dimension mismatch errors.',
        solution:
          'Standardized the 10-feature order strictly across generate_data.py, train.py, and app.py, wrapping model loading in robust try/except blocks with fallback probability logic.',
        implementationApproach:
          'Serialized risk_model.pkl via joblib and ensured feature arrays precisely match the 10 task names in exact sequential order.',
      },
      {
        challenge: 'Non-Stigmatizing Risk Communication & Clinical Safety',
        explanation:
          'Presenting risk predictions to users requires careful phrasing to avoid inducing unnecessary medical alarm or falsely claiming definitive diagnosis.',
        solution:
          'Framed outputs as exploratory Low, Moderate, or High risk screening tiers accompanied by constructive home care guidance and prominent medical disclaimers.',
        implementationApproach:
          'Coupled result displays with actionable daily memory exercises and explicitly documented the platform as a preliminary awareness tool rather than a diagnostic device.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Interactive 10-task digital neurocognitive assessment battery.',
        'Automated backend scoring engine converting multimodal inputs to standardized scores.',
        'Random Forest classification stratifying risk into Low, Moderate, and High tiers.',
        'Transparent post-test report displaying score breakdowns and lifestyle guidance.',
      ],
      technicalAchievements: [
        'Sub-50ms Flask API inference turnaround on real-time task submissions.',
        '100% automated scoring across heterogeneous text, choice, and sequence inputs.',
        'Decoupled client-server architecture enabling independent frontend scaling.',
        'Clean Scikit-Learn model pipeline integration via Joblib serialization.',
      ],
      demonstratedCapabilities: [
        'Multidisciplinary execution across Web Development, Data Science, and AI/ML.',
        'Responsible AI implementation with clinical safety boundaries.',
        'Non-invasive preliminary screening without specialized hardware requirements.',
      ],
      verifiedMetrics: [
        '10 Standardized Cognitive Task Modules',
        '3 Stratified Risk Tiers (Low, Moderate, High)',
        '200-Estimator Random Forest Classifier',
        '< 50ms Real-Time Inference Latency',
      ],
    },
    disclaimer:
      'This project is an academic and technical demonstration of AI-assisted cognitive screening. It is not a medical diagnostic tool and does not replace professional medical evaluation. Any concerns about cognitive health should be discussed with a qualified healthcare professional.',
    links: {
      github:
        'https://github.com/sreeramganesh/AI-Based-Cognitive-Screening-System-for-Early-Dementia-Detection.git',
      githubLabel: 'View Source Code',
    },
  },

  // 4. UK Transportation Analysis Dashboard - Completed
  'uk-transportation-analysis': {
    id: 'uk-transportation-analysis',
    slug: 'uk-transportation-analysis',
    title: 'UK Transportation Analysis Dashboard',
    shortTitle: 'UK Transportation Analysis',
    subtitle: 'National Transit Reliability, Delay Intelligence & EV Infrastructure Equity',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: [
      'Data Analytics',
      'Microsoft Power BI',
      'SQL Server',
      'Business Intelligence',
      'Data Visualization',
      'Transportation Analytics',
    ],
    status: 'Completed',
    shortDescription:
      'An interactive Power BI & SQL transit intelligence solution analyzing 13.71K journeys, 1.88M passengers, modal delays, weather momentum, and EV charging equity across 45 UK areas.',
    assetFolderPath: '/projects/uk-transportation-analysis/',
    coverImage: '/projects/uk-transportation-analysis/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/uk-transportation-analysis/demo.mp4',
      thumbnail: '/projects/uk-transportation-analysis/cover.png',
      title: 'Watch the UK Transportation Analysis Dashboard in Action',
      description:
        'Explore interactive Power BI navigation: Executive Overview KPIs, Top 100 delay rankings, modal drill-downs, weather scenario modeling, rolling 7-day momentum, and EV equity maps.',
      duration: 'Interactive Power BI Walkthrough',
    },
    pdfReport: {
      url: '/projects/uk-transportation-analysis/documentation/project-report.pdf',
      title: 'Explore the Complete 6-Page Transportation Dashboard Report',
      description:
        'View the official UK Transportation Analysis Dashboard publication report directly within this portfolio, featuring all 6 analytical pages.',
      buttonLabel: 'Explore Dashboard Report',
      pageCount: 6,
      pageTitles: [
        'Page 1: Executive Overview (National KPIs, Modal Punctuality & Regional Delay Variance)',
        'Page 2: Delay Intelligence (Top 100 Delay Rankings, Window Functions & Day of Week)',
        'Page 3: Journey Investigation (Operator Analysis, Route Congestion & Granular Telemetry)',
        'Page 4: Punctuality & Dynamic Metrics (Calendar Weekday Ordering & Disconnected Slicers)',
        'Page 5: Weather & Delay Momentum (Rolling 7-Day Delay Trend & Momentum % Area Chart)',
        'Page 6: EV Infrastructure Equity (Geospatial Density, Equity Bands & Charging Deserts)',
      ],
    },
    links: {
      github:
        'https://github.com/sreeramganesh/UK-Transportation-Analysis-PowerBI-SQL.git',
      githubLabel: 'View Source Code',
      relatedResources: [
        {
          title: 'Microsoft Power BI Documentation',
          url: 'https://learn.microsoft.com/en-us/power-bi/',
          type: 'BI Platform',
        },
        {
          title: 'Microsoft T-SQL Reference',
          url: 'https://learn.microsoft.com/en-us/sql/t-sql/',
          type: 'Database Engine',
        },
        {
          title: 'DAX (Data Analysis Expressions) Reference',
          url: 'https://learn.microsoft.com/en-us/dax/',
          type: 'Calculation Language',
        },
        {
          title: 'UK Office of Rail and Road (ORR) Punctuality Standards',
          url: 'https://dataportal.orr.gov.uk/',
          type: 'Transit Benchmark',
        },
      ],
    },
    overview: {
      introduction:
        'The UK Transportation Analysis Dashboard is an enterprise-grade transit intelligence and mobility analytics platform developed using Microsoft SQL Server, T-SQL, Power BI Desktop, and DAX for the DATABUZZZ Power BI + SQL Competition. Analyzing 13,714 journey records across 90 transit routes, 45 geographic areas, and 420 electric vehicle charging stations, the dashboard unifies operational timetable telemetry across England, Scotland, Wales, and Northern Ireland. The system evaluates 1,875,240 passenger boardings, dissecting modal punctuality across Rail, Bus, Tram, Tube, and Metro, weather disruption dynamics, rolling 7-day delay momentum, and regional electric vehicle infrastructure accessibility.',
      purpose:
        'Modern urban transportation networks generate massive telemetry volumes encompassing timetables, live vehicle tracking, station stop logs, weather alerts, and charging grid events. Without an integrated analytical pipeline combining relational database engineering with dynamic business intelligence, transit operators and mobility planners struggle to isolate systemic corridor bottlenecks, quantify adverse weather impacts, or detect emerging delay acceleration. This project bridges this critical gap by harmonizing complex SQL querying with Power BI data modeling to deliver actionable transit intelligence.',
      mainObjective:
        'Deliver an interactive 6-page Power BI dashboard driven by an optimized SQL Server relational backend to monitor 13.71K journeys, pinpoint the Top 100 delayed journeys via SQL window functions, evaluate Public Performance Measure (PPM) punctuality (45.33%), track rolling 7-day delay momentum, and map EV charging equity across 45 UK areas.',
      howItWorks:
        'Raw transportation records are ingested and pre-processed in Microsoft SQL Server, validating 4 relational tables (fact_journeys, dim_routes, dim_areas, ev_charge_points). A suite of 13 modular T-SQL scripts and indexed SQL views executes window-function rankings (ROW_NUMBER with PARTITION BY). Data is loaded into Power BI Desktop, establishing a relational star/snowflake schema linked to a dedicated Calendar table and disconnected parameter tables. Custom DAX measures compute PPM on-time rates (<= 5 min delay), dynamic metric switching, rolling 7-day average delays, and momentum percentages. Visualizations span multi-row KPI cards, dual-axis time series, weekday heatmaps, and geospatial bubble maps.',
      targetUsers: [
        'Transit Authority Executives & City Mobility Planners',
        'Railway & Fleet Operations Dispatchers',
        'Urban Infrastructure & Clean Transportation Strategists',
        'Transit Regulators & Public Service Commissioners',
        'Commuter Advocacy & Environmental Policy Analysts',
      ],
      highlights: [
        'Full-Scale Ingestion of 13,714 Journeys & 1,875,240 Passengers',
        'Multi-Modal Performance Across Rail, Bus, Tram, Tube & Metro',
        'SQL Server Window Ranking (Top 100 Nationwide & Top 20 by Mode)',
        'Public Performance Measure (PPM) Benchmarking (45.33% On-Time)',
        'Adverse Weather Impact Modeling (Snow Inducing 13.51 Min Avg Delay)',
        'Time-Intelligence Rolling 7-Day Delay & Momentum Tracking',
        'National EV Charging Infrastructure Equity Mapping (420 Stations)',
        'Interactive Disconnected Metric Selector & Strict Mon-Sun Day Ordering',
      ],
    },
    problemStatement: {
      title: 'Operational Fragmentation, Compounding Transit Delays & Clean Mobility Inequities',
      mainProblem:
        'Transportation authorities oversee disparate operational systems where rail signals, bus automatic vehicle location (AVL) feeds, meteorological alerts, and regional EV charging networks operate in isolated data silos. This fragmentation prevents transit planners from diagnosing systemic delays, forecasting disruption momentum during severe weather, and ensuring equitable distribution of clean transit infrastructure across diverse populations.',
      existingLimitations: [
        'Siloed Operator Telemetry: Independent private rail franchisees, municipal bus authorities, and light rail networks maintain isolated dispatch databases without cross-modal harmonization.',
        'Inability to Isolate Modal Root Causes: High-level delay averages obscure whether rail delays originate from track congestion, signal faults, or inclement weather.',
        'Absence of Rolling Delay Momentum: Traditional monthly retrospective reports fail to capture rapid weekly deterioration in corridor punctuality.',
        'EV Infrastructure Disparities: Clean mobility investment often concentrates in affluent urban pockets, creating hidden "charging deserts" in dense metropolitan corridors.',
        'Complex Window Ranking Latency: Querying multi-tier journey ranks across thousands of records requires sophisticated database partitioning beyond basic spreadsheet capability.',
      ],
      whyItMatters:
        'Public transit reliability directly dictates commuter modal choice, metropolitan economic productivity, and national carbon reduction targets. Persistent delays erode passenger trust and increase congestion, while disparities in EV charging infrastructure jeopardize clean energy transition goals for lower-income regions.',
      keyChallenges: [
        {
          title: 'Windowed Multi-Modal Journey Ranking',
          description:
            'Computing the Top 100 nationwide delays alongside Top 20 mode-partitioned rankings without cross-modal bias.',
          iconName: 'Layers',
        },
        {
          title: 'Rolling Time-Intelligence Momentum Formulation',
          description:
            'Constructing robust DAX time-series measures comparing current 7-day rolling delays against preceding 7-day baselines.',
          iconName: 'TrendingUp',
        },
        {
          title: 'Geospatial EV Charging Equity Modeling',
          description:
            'Normalizing charging station counts against regional populations to identify underserved charging deserts across 45 UK areas.',
          iconName: 'MapPin',
        },
        {
          title: 'Disconnected Dynamic Metric Parameterization',
          description:
            'Implementing disconnected DAX SWITCH tables allowing users to seamlessly toggle chart metrics on a single canvas.',
          iconName: 'Sliders',
        },
      ],
    },
    solution: {
      title: 'End-to-End Transit Intelligence Architecture Combining SQL Server Analytics with a 6-Page Power BI Suite',
      approach:
        'A modular data engineering and business intelligence solution comprising automated SQL data validation, 13 T-SQL analytical scripts, relational star modeling, advanced DAX time-intelligence formulas, and an interactive 6-page Power BI dashboard suite.',
      technicalSolution:
        'Engineered in SQL Server and Power BI Desktop. Ingested 13,714 fact_journeys, 90 dim_routes, 45 dim_areas, and 420 ev_charge_points. Developed vw_Top100DelayedJourneys and vw_Top20DelayedByMode using ROW_NUMBER() and PARTITION BY. Constructed a relational data model linking facts with dimensions and a dedicated Calendar table. Authored DAX measures for Total Journeys (13.71K), Total Passengers (1.88M), PPM On-Time Rate (45.33% based on delay <= 5 mins), Average Delay (5.58 min), Maximum Delay (20.10 min), Rolling 7-Day Delay, and Delay Momentum %. Built an interactive 6-page reporting canvas featuring executive KPIs, modal breakdowns, weekday distributions sorted Mon-Sun, dynamic metric selectors, weather matrix analysis, and EV equity maps.',
      implementationOverview:
        'Validated raw schema integrity, created analytical views in T-SQL, configured Power BI star schema, authored DAX calculations, designed 6 responsive pages, exported full documentation PDF, and produced video walkthrough.',
      howItSolves: [
        'Unifies 13,714 transit journeys and 1.88M passengers into real-time executive KPI cards',
        'Isolates the Top 100 most delayed journeys and Top 20 per transport mode via SQL window functions',
        'Demonstrates Tube (64.56% on-time, 3.74 min delay) and Tram (61.09% on-time) as the most reliable modes, contrasting Rail (33.16% on-time, 6.73 min delay)',
        'Identifies Snow (13.51 min avg delay, 0% PPM) and Fog (8.25 min avg delay) as catastrophic disruption triggers',
        'Discovers high-friction days on Sunday (6.26 min avg delay) and Tuesday (6.18 min avg delay)',
        'Highlights critical EV "charging deserts" in high-density areas including Birmingham (0.96 chargers/100K) and Edinburgh (1.33 chargers/100K)',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Activity',
        title: 'Executive Transit Telemetry & National KPIs',
        description:
          'Real-time KPI cards tracking 13.71K Total Journeys, 1.88M Passengers, 45.33% On-Time Performance, 90 Monitored Routes, 5.58 min Average Delay, and 20.10 min Maximum Delay.',
      },
      {
        iconName: 'Layers',
        title: 'SQL Window Function Delay Rankings',
        description:
          'Automated isolation of the Top 100 Most Delayed Journeys nationwide and Top 20 Delayed Journeys partitioned by mode via T-SQL ROW_NUMBER() and PARTITION BY.',
      },
      {
        iconName: 'Clock',
        title: 'Multi-Modal Reliability & PPM Punctuality',
        description:
          'Granular performance benchmarking across Rail (33.16% on-time), Bus (43.78%), Tram (61.09%), Tube (64.56%), and Metro (61.32%) against the UK 5-minute threshold.',
      },
      {
        iconName: 'CloudRain',
        title: 'Weather Disruption Dynamics & Scenario Modeling',
        description:
          'Correlation of severe weather against delay escalation, proving Snow triggers a 13.51 min mean delay (3.1x higher than Clear weather at 4.34 min) and 0% on-time arrivals.',
      },
      {
        iconName: 'TrendingUp',
        title: 'Rolling 7-Day Delay Momentum Tracking',
        description:
          'Time-intelligence DAX formulation computing rolling 7-day delays against prior 7-day baselines to visualize positive (worsening) vs negative (improving) operational momentum.',
      },
      {
        iconName: 'MapPin',
        title: 'National EV Infrastructure Equity & Desert Mapping',
        description:
          'Geospatial bubble mapping of 420 charging stations across 45 UK areas, categorizing regional availability into Well Served, Adequate, Under-Served, and Charging Desert bands.',
      },
    ],
    architecture: {
      description:
        'The project architecture follows an enterprise business intelligence workflow: raw relational data ingestion in Microsoft SQL Server, analytical querying and view formulation via T-SQL, star-schema modeling in Power BI Desktop, DAX measure formulation, and multi-page interactive dashboard reporting.',
      frontend:
        'Interactive Microsoft Power BI Desktop canvas featuring 6 dedicated report pages, cross-filtering slicers (Region, Mode, Date, Weather), dynamic metric switchers, and geospatial bubble map visualizations.',
      backend:
        'Microsoft SQL Server relational database engine and Power BI VertiPaq In-Memory Tabular Model executing optimized analytical queries and DAX time-intelligence calculations.',
      database:
        'Relational SQL Server schema with 4 core tables: fact_journeys (13,714 rows), dim_routes (90 routes), dim_areas (45 administrative areas), and ev_charge_points (420 charging stations).',
      workflow: [
        'Raw Data Ingestion: Loading transit telemetry and charging point records into SQL Server database UKTransportChallenge',
        'Data Validation & Cleaning: Verifying primary/foreign key relationships and checking null values across all 4 tables',
        'T-SQL View Engineering: Creating vw_Top100DelayedJourneys and vw_Top20DelayedByMode using ROW_NUMBER() window functions',
        'Power BI Data Modeling: Establishing star-schema relationships between fact_journeys, dimensions, and dedicated Calendar table',
        'DAX Calculation Layer: Formulating PPM on-time performance (<= 5 min), rolling 7-day delays, and delay momentum %',
        'Visualization & Page Design: Crafting 6 specialized pages with synchronized slicers, drill-throughs, and parameter selectors',
        'Geographic Mapping: Visualizing EV charging accessibility by plotting longitude/latitude coordinates categorized into 4 equity bands',
      ],
    },
    techStack: [
      'Power BI',
      'SQL Server',
      'T-SQL',
      'DAX',
      'Power BI Maps',
      'Power Query',
      'Data Modeling',
    ],
    techStackGrouped: [
      {
        category: 'Business Intelligence & Visualization',
        items: [
          { name: 'Microsoft Power BI Desktop', role: '6-page interactive executive dashboard development', iconName: 'BarChart3' },
          { name: 'DAX (Data Analysis Expressions)', role: 'Time-intelligence, rolling momentum, and metric switching', iconName: 'Calculator' },
          { name: 'Power BI Maps', role: 'Geospatial visualization of 420 EV charging locations', iconName: 'MapPin' },
        ],
      },
      {
        category: 'Database & Query Engineering',
        items: [
          { name: 'Microsoft SQL Server', role: 'Relational data warehouse hosting UKTransportChallenge', iconName: 'Database' },
          { name: 'T-SQL (Transact-SQL)', role: 'Multi-table analytical queries, aggregations, and data validation', iconName: 'Terminal' },
          { name: 'Window Functions', role: 'ROW_NUMBER() and PARTITION BY ranking views', iconName: 'Layers' },
        ],
      },
      {
        category: 'Data Modeling & ETL',
        items: [
          { name: 'Power Query (M Language)', role: 'Data harmonization, type enforcement, and date table generation', iconName: 'Workflow' },
          { name: 'Star Schema Modeling', role: 'Relational cardinalities linking fact_journeys with 3 dimension tables', iconName: 'Layers' },
          { name: 'Disconnected Tables', role: 'Dynamic metric selector and weather scenario modeling', iconName: 'Sliders' },
        ],
      },
      {
        category: 'Documentation & Demonstration',
        items: [
          { name: 'Interactive 6-Page PDF', role: 'High-resolution publication report documenting all 6 dashboard modules', iconName: 'FileText' },
          { name: 'MP4 Demonstration Video', role: 'Recorded walkthrough of interactive slicers and drill-throughs', iconName: 'Play' },
        ],
      },
    ],
    applicationScreenshots: [
      {
        image: '/projects/uk-transportation-analysis/gallery/overview.png',
        title: 'Executive Overview Dashboard',
        description:
          'Executive layout featuring 6 top KPIs (13.71K Journeys, 1.88M Passengers, 45.33% On-Time, 90 Routes, 5.58 min Delay, 20.10 min Max Delay), journeys over time, modal punctuality, and regional average delay.',
        badge: 'Executive Suite',
      },
      {
        image: '/projects/uk-transportation-analysis/gallery/weather-delay-momentum.png',
        title: 'Weather & Delay Momentum Dashboard',
        description:
          'Climate impact and time-intelligence analysis tracking delay escalation across weather conditions (Snow, Fog, Rain, Windy, Clear) alongside rolling 7-day average delay and delay momentum % trends.',
        badge: 'Climate & Momentum',
      },
      {
        image: '/projects/uk-transportation-analysis/gallery/ev-infrastructure-equity.png',
        title: 'EV Infrastructure Equity Dashboard',
        description:
          'National clean mobility infrastructure distribution across 45 UK areas, analyzing 420 charging stations, per-capita density (2.88 / 100K), charging speed types, and geographical equity bands.',
        badge: 'EV Equity & Geospatial',
      },
    ],
    gallery: [
      {
        url: '/projects/uk-transportation-analysis/gallery/overview.png',
        caption:
          'Executive Overview Dashboard: National transit performance overview featuring 6 primary KPIs, journey timeline combo chart, modal on-time rates, and regional delay variance.',
        alt: 'UK Transportation Analysis Executive Overview Dashboard',
      },
      {
        url: '/projects/uk-transportation-analysis/gallery/weather-delay-momentum.png',
        caption:
          'Weather & Delay Momentum Dashboard: Adverse weather condition breakdown and rolling 7-day delay momentum tracking showing operational acceleration or recovery.',
        alt: 'UK Transportation Analysis Weather and Delay Momentum Dashboard',
      },
      {
        url: '/projects/uk-transportation-analysis/gallery/ev-infrastructure-equity.png',
        caption:
          'EV Infrastructure Equity Dashboard: Geographic map and regional distribution analyzing 420 charging stations, charging speeds, and per-capita availability across 45 UK areas.',
        alt: 'UK Transportation Analysis EV Infrastructure Equity Dashboard',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Database Creation, Schema Design & Data Validation',
        description:
          'Created the UKTransportChallenge database in Microsoft SQL Server. Ingested 13,714 fact_journeys, 90 dim_routes, 45 dim_areas, and 420 ev_charge_points, verifying relational foreign keys and zero missing values.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'T-SQL Advanced Analytical Querying & View Creation',
        description:
          'Authored 13 modular SQL scripts covering modal aggregations, operator performance, regional delays, and weather sensitivity. Engineered indexed views vw_Top100DelayedJourneys and vw_Top20DelayedByMode using ROW_NUMBER() window functions.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Power BI Star Schema Modeling & DAX Formulation',
        description:
          'Constructed a star schema in Power BI Desktop linking fact and dimension tables. Authored DAX measures for Public Performance Measure (PPM) on-time rates (<= 5 min), rolling 7-day delay momentum, and dynamic disconnected parameter selectors.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Interactive 6-Page Dashboard & Geospatial Mapping',
        description:
          'Designed 6 cohesive pages: Executive Overview, Delay Intelligence, Journey Investigation, Punctuality & Dynamic Metrics, Weather & Delay Momentum, and EV Infrastructure Equity, featuring synchronized cross-filters and bubble maps.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Competition Submission, PDF Publishing & Video Demonstration',
        description:
          'Submitted to the DATABUZZZ Power BI + SQL Competition, published the official 6-page high-resolution PDF documentation, and recorded a complete demonstration walkthrough.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S.',
        role: 'Lead Business Intelligence Developer & SQL Data Engineer',
        image: '/images/team/sreeram.jpg',
        responsibilities: [
          'End-to-end design, relational schema engineering, and visual dashboard development for the UK Transportation Analysis solution',
          'Authored 13 T-SQL analytical scripts and window-ranking views for Top 100 nationwide and Top 20 modal delays',
          'Engineered Power BI data models linking 13,714 journey records with 3 dimension tables and dedicated Calendar',
          'Formulated complex DAX measures for PPM punctuality, rolling 7-day delays, and disconnected metric selectors',
          'Produced the 6-page executive publication report and recorded comprehensive video walkthrough',
        ],
        technicalContributions: [
          'Engineered T-SQL window functions ROW_NUMBER() with PARTITION BY mode to prevent cross-modal ranking bias',
          'Formulated time-intelligence DAX measures computing rolling 7-day delay and percentage momentum delta',
          'Established disconnected table parameter switching allowing seamless toggling of 4 metrics in a single donut visual',
          'Identified and mapped UK clean mobility charging deserts in Birmingham (0.96 / 100K) and Edinburgh (1.33 / 100K)',
        ],
        technologiesHandled: [
          'Microsoft Power BI',
          'Microsoft SQL Server',
          'T-SQL (Transact-SQL)',
          'DAX (Data Analysis Expressions)',
          'Power Query (M Language)',
          'Power BI Maps',
          'Transportation Analytics',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Multi-Modal Delay Ranking Without Inter-Modal Distortion',
        explanation:
          'Rail networks inherently feature longer route lengths and higher delay variance than urban metro lines. A naive global TOP 100 query would cause Rail to completely dominate the ranking, obscuring critical bus or tube route disruptions.',
        solution:
          'Engineered a partitioned ranking view using T-SQL ROW_NUMBER() OVER (PARTITION BY mode ORDER BY delay_minutes DESC, journey_id) producing an independent Top 20 for Rail, Bus, Tram, Tube, and Metro.',
        implementationApproach:
          'Deployed vw_Top20DelayedByMode to feed a dedicated modal delay section, enabling planners to inspect localized bus route issues alongside inter-city rail delays.',
      },
      {
        challenge: 'Formulating Rolling 7-Day Delay Momentum via DAX',
        explanation:
          'Capturing whether transit operational health is actively improving or deteriorating required comparing a dynamic 7-day moving average against the immediately preceding 7-day period across irregular calendar dates.',
        solution:
          'Constructed dual time-intelligence DAX calculations utilizing CALCULATE with DATESINPERIOD and DATEADD against a dedicated continuous Calendar table.',
        implementationApproach:
          'Implemented [Delay Momentum %] = DIVIDE([Rolling 7 Day Avg Delay] - [Prior 7 Day Avg Delay], [Prior 7 Day Avg Delay], 0) and visualized the delta using an area chart where positive values signal delay growth.',
      },
      {
        challenge: 'Enforcing Calendar Weekday Order in Power BI Visuals',
        explanation:
          'Power BI default alphabetical sorting sorts weekdays as Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday, disrupting intuitive chronological day-of-week delay trend analysis.',
        solution:
          'Added a numeric Day Number column (1 = Monday ... 7 = Sunday) in Power Query and utilized Power BIs Sort by Column functionality on the Day Name dimension.',
        implementationApproach:
          'Configured weekday bar charts on Page 2 and Page 4 to strictly adhere to the standard Monday-to-Sunday progression, highlighting Sunday (6.26 min) and Tuesday (6.18 min) as systemic delay peaks.',
      },
      {
        challenge: 'Geospatial EV Charging Equity Normalization',
        explanation:
          'Displaying raw EV charger counts by region presents a misleading impression of accessibility because high-population metropolitan areas naturally host more stations while remaining severely underserved per capita.',
        solution:
          'Normalized charging infrastructure against regional population using DAX: [Charging Points per 100K] = DIVIDE([Total EV Charging Points], SUM(dim_areas[population]) / 100000, 0).',
        implementationApproach:
          'Categorized areas into 4 Equity Bands (Well Served, Adequate, Under-Served, Charging Desert) and plotted coordinates on Power BI Maps with bubble size scaled to per-capita availability.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'End-to-end ingestion and modeling of 13,714 journey records across 90 transit routes and 45 UK areas',
        'Top 100 nationwide and Top 20 mode-partitioned delay rankings powered by T-SQL window functions',
        'PPM punctuality tracking verifying 45.33% on-time performance within standard 5-minute threshold',
        'Multi-modal reliability matrix contrasting Rail (33.16% on-time) with Tube (64.56%) and Tram (61.09%)',
        'Adverse weather correlation demonstrating Snow triggers a 13.51 min mean delay with 0% punctuality',
        'Time-intelligence rolling 7-day average delay and percentage momentum tracking',
        'Geospatial bubble mapping of 420 EV charging stations categorized into 4 accessibility equity bands',
        'Disconnected parameter metric selector enabling dynamic metric switching in a single visual',
      ],
      technicalAchievements: [
        'Engineered 13 modular T-SQL scripts and 2 indexed analytical views in Microsoft SQL Server',
        'Constructed a high-performance Star Schema data model in Power BI with continuous Calendar integration',
        'Authored robust DAX measures utilizing CALCULATE, DATESINPERIOD, DATEADD, SWITCH, and DIVIDE',
        'Published an official 6-page high-resolution executive PDF report documenting all dashboard pages',
        'Recorded a high-definition video walkthrough showcasing interactive slicers and drill-throughs',
      ],
      demonstratedCapabilities: [
        'Enterprise Business Intelligence Architecture (Microsoft Power BI & SQL Server)',
        'Advanced Relational Database Engineering & Window Ranking Functions',
        'Time-Intelligence Formulation & Dynamic Metric Switching via DAX',
        'Transit Operational Telemetry & Punctuality Benchmarking',
        'Geospatial Analytics & Clean Mobility Infrastructure Equity Modeling',
      ],
      verifiedMetrics: [
        'Total Journeys Monitored: 13,714 (13.71K)',
        'Total Passenger Volume: 1,875,240 (1.88M riders)',
        'System Average Delay: 5.58 minutes',
        'Single Maximum Delay: 20.10 minutes',
        'PPM On-Time Performance (<= 5 min): 45.33% (6,216 journeys)',
        'Monitored Transit Corridors: 90 Routes',
        'Analyzed Geographic Areas: 45 Regions & Boroughs',
        'Total EV Charging Stations: 420 Points (74.05% Fast/Rapid/Ultra-Rapid)',
      ],
    },
    disclaimer:
      'All transit journey telemetry, operator performance records, weather scenarios, and EV charging station locations were synthesized and analyzed for the DATABUZZZ Power BI + SQL Competition to simulate nationwide UK transportation conditions.',
  },

  // 5. Loan Lending Performance Dashboard - Completed
  'loan-lending-performance-dashboard': {
    id: 'loan-lending-performance-dashboard',
    slug: 'loan-lending-performance-dashboard',
    title: 'Loan Lending Performance Dashboard',
    shortTitle: 'Loan Lending Performance',
    subtitle: 'Power BI | Financial Analytics | Business Intelligence',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: [
      'Data Analytics',
      'Microsoft Power BI',
      'Financial Analytics',
      'Business Intelligence',
      'Data Visualization',
    ],
    status: 'Completed',
    shortDescription:
      'An interactive Power BI dashboard designed to analyze loan lending performance, monitor portfolio indicators, explore repayment patterns, and visualize loan status distribution through data-driven insights across 38,576 retail loan records.',
    assetFolderPath: '/projects/loan-lending-performance-dashboard/',
    coverImage: '/projects/loan-lending-performance-dashboard/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/loan-lending-performance-dashboard/demo.mp4',
      thumbnail: '/projects/loan-lending-performance-dashboard/cover.png',
      title: 'Watch the Loan Lending Performance Dashboard in Action',
      description:
        'Explore the Loan Lending Performance Dashboard through a demonstration of its visualizations, interactive filters, and analytical interface across all three dashboard pages.',
      duration: 'Interactive Power BI Walkthrough',
    },
    pdfReport: {
      url: '/projects/loan-lending-performance-dashboard/documentation/project-report.pdf',
      title: 'Complete Dashboard Report',
      description:
        'Explore the complete Loan Lending Performance Dashboard report, including its dashboard layout, visualizations, lending performance indicators, and analytical breakdowns.',
      buttonLabel: 'Explore Dashboard Report',
      pageCount: 3,
      downloadFilename: 'project-report.pdf',
      pageTitles: [
        'Page 1: Portfolio Executive Overview (Core KPIs, Term Risk Comparison, Good vs Bad Trends & Status Distribution)',
        'Page 2: Loan Application Dynamics (Monthly Application Volume, Term Ratio, Purpose Breakdown & State Geography)',
        'Page 3: Portfolio Performance & Credit Risk (Credit Grade Distribution, Revenue Status & Employment Risk Matrix)',
      ],
    },
    links: {
      github:
        'https://github.com/sreeramganesh/Lending-performance-Dashboard.git',
      githubLabel: 'View Source Code on GitHub',
      relatedResources: [
        {
          title: 'Microsoft Power BI Documentation',
          url: 'https://learn.microsoft.com/en-us/power-bi/',
          type: 'BI Platform',
        },
        {
          title: 'DAX (Data Analysis Expressions) Reference',
          url: 'https://learn.microsoft.com/en-us/dax/',
          type: 'Calculation Language',
        },
        {
          title: 'Consumer Credit Risk & Portfolio Analytics Reference',
          url: 'https://www.investopedia.com/terms/c/creditrisk.asp',
          type: 'Financial Reference',
        },
        {
          title: 'Power Query M Formula Language Reference',
          url: 'https://learn.microsoft.com/en-us/powerquery-m/',
          type: 'ETL Engine',
        },
      ],
    },
    overview: {
      introduction:
        'The Loan Lending Performance Dashboard is a comprehensive financial analytics and credit intelligence solution developed in Microsoft Power BI Desktop. The system consolidates and evaluates 38,576 retail loan applications representing $435.8 Million ($436M) in funded capital and $473.1 Million ($473M) in received payments across a multi-table Star Schema comprising Fact_Loan and 5 dedicated dimension tables (Dim_Employment, Dim_Geography, Dim_Purpose, Dim_Credit_Grade, Dim_Term). Developed as part of a competitive Power BI analytics challenge, the platform delivers executive visibility into portfolio health, loan status distributions (83.33% Fully Paid, 13.82% Charged Off, 2.85% Current), borrower risk metrics (13.33% average DTI and 12.05% average interest rate), and tenor risk disparities (36-month vs 60-month terms).',
      purpose:
        'Retail lending institutions process a large volume of loan originations, monthly repayments, and delinquent accounts. Monitoring loan performance through raw spreadsheets and disconnected reports makes it difficult to track whether capital collections keep pace with funded principal, identify which loan purposes drive defaults, or understand why certain loan terms experience disproportionately high charge-off rates. This project addresses these challenges by transforming raw loan telemetry into an integrated executive decision-support platform.',
      mainObjective:
        'Transform 38,576 retail loan records into an interactive 3-page Power BI dashboard that enables financial stakeholders to monitor core lending KPIs (39K applicants, $436M funded, $473M received), diagnose term-based risk differentials (60-month loans exhibiting a 22.34% default rate vs 10.71% for 36-month loans), track Good vs Bad loan trends, map geographic origination density across 50 states, and audit borrower risk segments.',
      howItWorks:
        'Operational loan data is ingested from a 6-sheet relational Excel workbook (Fact_Loan, Dim_Employment, Dim_Geography, Dim_Purpose, Dim_Credit_Grade, Dim_Term) into Power BI via Power Query. A Star Schema data model is established connecting the central fact table to dimensional attributes. DAX measures compute Total Applicants (38,576 / 39K), Total Fund ($436M), Total Received ($473M), Average DTI (13.33%), Average Interest (12.05%), Good Loan Applications (33,243), and Bad Loan Applications (5,333). The resulting 3-page interactive report provides synchronized slicers (State, Terms, Purpose), horizontal bar charts, donut charts, area trendlines, and detailed multi-column audit tables.',
      targetUsers: [
        'Chief Risk Officers & Credit Committee Executives',
        'Retail Lending Operations & Credit Underwriting Managers',
        'Portfolio Credit Risk & Capital Adequacy Analysts',
        'Loan Servicing, Recovery & Collections Supervisors',
        'Financial Business Intelligence & Analytics Engineers',
      ],
      highlights: [
        'Consolidation of 38,576 Retail Loan Records Across a 6-Table Star Schema',
        'Capital Funding & Recovery Verification: $435.8M Funded ($436M) vs $473.1M Received ($473M)',
        'Term-Based Risk Discovery: 60-Month Loans Exhibit 2.1x Higher Default Rate (22.34% vs 10.71%)',
        'Good vs Bad Loan Stratification: 86.18% Good Loans (33,243) vs 13.82% Bad Loans (5,333)',
        'Borrower Solvency Profiling: 13.33% Average Debt-to-Income (DTI) & 12.05% Average Interest Yield',
        'Geographic Origination Mapping Across 50 US States (California Led with 17.87%)',
        'Purpose Breakdown Across 14 Categories (Debt Consolidation Dominates with 47.22%)',
        '3-Page Publication Report Embedded with Interactive PDF Controls',
      ],
    },
    problemStatement: {
      title:
        'Spreadsheet Fragmentation, Opaque Default Drivers & Tenor Risk Disparities',
      mainProblem:
        'Loan lending institutions process large volumes of loan applications and financial transactions. Monitoring loan portfolio performance through raw spreadsheets and disconnected reports makes it difficult to track application volumes, compare loan performance across terms, evaluate repayment patterns, separate good loans from bad loans, and identify geographic or purpose-based risk concentrations.',
      existingLimitations: [
        'Disjointed Spreadsheets & Billing Ledgers: Disconnected reporting systems obscure whether total collections keep pace with funded capital across evolving market cycles.',
        'Tenor Risk Blindspots: Portfolio managers struggle to isolate the heightened risk profile of 60-month loans (22.34% default rate) compared to 36-month loans (10.71%).',
        'Opaque Good vs Bad Loan Cash Flows: Capital recovery deficits ($28.2M written off on charged-off loans) are hidden within aggregate portfolio figures.',
        'Geographic & Purpose Concentration Blindspots: High-exposure states like California (17.87%) and dominant purposes like Debt Consolidation (47.22%) lack dynamic monitoring.',
        'Cumbersome Underwriting Auditing: Drilling into borrower employment tenure, credit grades, and payment performance requires manual spreadsheet cross-referencing.',
      ],
      whyItMatters:
        'In consumer credit and retail lending, failure to monitor portfolio quality and loan tenor risk can result in unexpected write-offs, mispriced interest margins, and impaired regulatory capital reserves.',
      keyChallenges: [
        {
          title: 'Star Schema Architecture from Flat Excel Telemetry',
          description:
            'Normalizing 38,576 transaction records into a central Fact_Loan table linked to 5 dimension tables with clean 1-to-many relationships.',
          iconName: 'Layers',
        },
        {
          title: 'DAX Good vs Bad Loan Segmentation Logic',
          description:
            'Formulating accurate DAX calculation logic to classify Fully Paid and Current loans as Good Loans while isolating Charged Off loans as Bad Loans.',
          iconName: 'Calculator',
        },
        {
          title: 'Tenor-Based Actuarial Risk Isolation (36 vs 60 Months)',
          description:
            'Quantifying the significant default risk difference between short-term (36 months) and long-term (60 months) lending commitments.',
          iconName: 'Clock',
        },
        {
          title: 'Designing High-Performance Multi-Column Audit Tables',
          description:
            'Building responsive tabular visuals on Page 1 and Page 3 that project multiple aggregations across purpose, employment, and loan status.',
          iconName: 'Table',
        },
      ],
    },
    solution: {
      title:
        'Centralized 3-Page Financial Lending & Credit Risk BI Dashboard in Power BI',
      approach:
        'A relational business intelligence solution combining Power Query data transformation, a Star Schema data model, custom DAX financial measures, and a 3-page interactive executive reporting suite.',
      technicalSolution:
        'Engineered in Microsoft Power BI Desktop connecting Fact_Loan (38,576 records) to 5 dimension tables (Dim_Employment, Dim_Geography, Dim_Purpose, Dim_Credit_Grade, Dim_Term). Formulated DAX measures for Total Applicants (38,576 / 39K), Total Fund ($435.8M / $436M), Total Received ($473.1M / $473M), Average DTI (13.33%), Average Interest (12.05%), Good Loan Applications (33,243), and Bad Loan Applications (5,333). Designed 3 cohesive pages: Executive Overview, Applications Analysis, and Performance & Risk Analysis. Integrated synchronized slicers for State, Purpose, and Terms.',
      implementationOverview:
        'Extracted tabular loan data from Loan_Data.xlsx, built relational star schema in Power Query, authored DAX measures, developed 3 interactive reporting canvases, generated 3-page high-resolution PDF documentation, and recorded a complete demonstration walkthrough.',
      howItSolves: [
        'Consolidates 38,576 loan records and $435.8M in capital into 5 executive KPI cards',
        'Exposes that 60-month loans suffer more than double the default rate of 36-month loans (22.34% vs 10.71%)',
        'Validates overall capital recovery: $473.1M received versus $435.8M funded ($37.3M surplus)',
        'Maps geographic loan demand across 50 states, highlighting California (17.87%) and New York (9.59%)',
        'Provides detailed tabular audit interfaces on Page 1 (by Purpose) and Page 3 (by Employment)',
      ],
    },
    keyFeatures: [
      {
        iconName: 'DollarSign',
        title: 'Executive Lending KPI Suite',
        description:
          'Real-time tracking of 39K Total Applicants (38,576), 13.33% Average DTI, 12.05% Average Interest Rate, $473M Total Received ($473.1M), and $436M Total Funded ($435.8M).',
      },
      {
        iconName: 'BarChart3',
        title: 'Loan Risk Comparison by Term',
        description:
          'Horizontal bar chart contrasting credit risk between 36-month (10.71% bad loan rate) and 60-month (22.34% bad loan rate) loan durations.',
      },
      {
        iconName: 'PieChart',
        title: 'Loan Status Distribution Analytics',
        description:
          'Pie chart visualizing the complete breakdown of loan outcomes: 83.33% Fully Paid (32,145), 13.82% Charged Off (5,333), and 2.85% Current (1,098).',
      },
      {
        iconName: 'TrendingUp',
        title: 'Good vs Bad Loan Trend Over Time',
        description:
          'Stacked area chart tracking monthly volume of performing (Good: 86.18%) versus non-performing (Bad: 13.82%) loan originations across the year.',
      },
      {
        iconName: 'Briefcase',
        title: 'Purpose-Wise Funding & Application Analysis',
        description:
          'Clustered bar chart and pie chart evaluating 14 loan purposes, revealing Debt Consolidation as the primary driver (47.22%), followed by Credit Card (12.96%).',
      },
      {
        iconName: 'MapPin',
        title: 'State-Wise Geographic Distribution',
        description:
          'Column chart and geographic map tracking lending volume across 50 US states, led by California (17.87%), New York (9.59%), Florida (7.19%), and Texas (6.91%).',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Credit Grade & Revenue Status Breakdown',
        description:
          'Pie chart analyzing credit tiers A through G (led by Grade B at 30.26% and Grade A at 25.12%) alongside revenue status breakdowns by loan outcome.',
      },
      {
        iconName: 'Sliders',
        title: 'Interactive Multi-Dimensional Slicers & Audit Tables',
        description:
          'Synchronized interactive slicers for Purpose, State, and Terms, coupled with comprehensive multi-column audit tables displaying member counts, installments, and payment totals.',
      },
    ],
    architecture: {
      description:
        'The architecture implements an enterprise financial business intelligence pipeline: structured extraction from a 6-sheet relational Excel source, automated transformation and schema normalization in Power Query, Star Schema establishment, DAX measure formulation, and 3-page interactive dashboard reporting.',
      frontend:
        'Interactive Microsoft Power BI Desktop canvas featuring 3 specialized analytical pages, synchronized slicers, horizontal bar charts, donut charts, area trendlines, and detailed audit tables.',
      backend:
        'Power BI In-Memory Tabular Engine (VertiPaq) processing compressed relational queries and high-speed DAX aggregations across 38,576 loan records.',
      database:
        'Relational star schema comprising 1 central fact table (Fact_Loan, 38,576 rows) linked via 1-to-many relationships to 5 dimension tables (Dim_Employment, Dim_Geography, Dim_Purpose, Dim_Credit_Grade, Dim_Term).',
      workflow: [
        'Data Ingestion: Ingesting 38,576 loan records across 6 relational sheets from Loan_Data.xlsx into Power BI Desktop',
        'Data Cleaning & Transformation: Standardizing date formats, financial amounts, percentage rates, and state codes in Power Query',
        'Star Schema Modeling: Establishing relational cardinalities connecting Fact_Loan with employment, geography, purpose, credit grade, and term dimensions',
        'DAX Measure Formulation: Computing Total Applicants (38,576), Total Fund ($435.8M), Total Received ($473.1M), Average DTI (13.33%), Average Interest (12.05%), Good Loan Applications (33,243), and Bad Loan Applications (5,333)',
        '3-Page Interactive Canvas Development: Designing Overview, Application Analysis, and Performance & Risk Analysis pages',
        'Interactive Slicer Integration: Configuring synchronized cross-filtering across State, Terms, and Purpose slicers',
        'Report Validation & Publishing: Verifying mathematical consistency against raw Excel totals and exporting the 3-page high-resolution PDF publication report',
      ],
    },
    techStack: [
      'Power BI',
      'DAX',
      'Data Modeling',
      'Power Query',
      'Excel',
      'Financial Analytics',
    ],
    techStackGrouped: [
      {
        category: 'Business Intelligence & Reporting',
        items: [
          {
            name: 'Microsoft Power BI Desktop',
            role: '3-page interactive financial lending & credit risk analytics dashboard',
            iconName: 'BarChart3',
          },
          {
            name: 'Interactive Financial Canvases',
            role: 'Synchronized cross-filtering, horizontal bar charts, and term comparisons',
            iconName: 'Layout',
          },
          {
            name: 'Data Visualization',
            role: 'Status distribution pie charts, monthly area trendlines, and audit tables',
            iconName: 'PieChart',
          },
        ],
      },
      {
        category: 'Analytical Modeling & DAX',
        items: [
          {
            name: 'DAX (Data Analysis Expressions)',
            role: 'Formulating Good vs Bad loans, Total Received, Total Fund, DTI, and Interest',
            iconName: 'Calculator',
          },
          {
            name: 'Star Schema Modeling',
            role: 'Relational architecture connecting Fact_Loan with 5 dedicated dimension tables',
            iconName: 'Layers',
          },
          {
            name: 'Credit Risk KPI Design',
            role: 'Loan tenor risk benchmarking, charge-off tracking, and recovery ratios',
            iconName: 'Activity',
          },
        ],
      },
      {
        category: 'Data Preparation & ETL',
        items: [
          {
            name: 'Power Query (M Language)',
            role: 'Data cleaning, type harmonization, and foreign key referential integrity',
            iconName: 'Workflow',
          },
          {
            name: 'Data Cleaning & Normalization',
            role: 'Validation of missing values, numeric precision, and state geography mapping',
            iconName: 'CheckSquare',
          },
          {
            name: 'Relational Schema Mapping',
            role: '1-to-many relationship cardinality configuration linking dimensions to Fact_Loan',
            iconName: 'Layers',
          },
        ],
      },
      {
        category: 'Data Source & Documentation',
        items: [
          {
            name: 'Microsoft Excel',
            role: '6-sheet relational workbook storing 38,576 retail loan records and dimension tables',
            iconName: 'FileSpreadsheet',
          },
          {
            name: 'Interactive 3-Page PDF Report',
            role: 'High-resolution publication report documenting all 3 dashboard modules',
            iconName: 'FileText',
          },
          {
            name: 'MP4 Demonstration Video',
            role: 'Video walkthrough demonstrating interactive slicers, term comparisons, and tables',
            iconName: 'Play',
          },
        ],
      },
    ],
    applicationScreenshots: [
      {
        image:
          '/projects/loan-lending-performance-dashboard/gallery/overview.png',
        title: 'Page 1: Portfolio Executive Overview',
        description:
          'Executive dashboard featuring 5 top KPI cards (39K Applicants, 13.33% DTI, 12.05% Interest, $473M Received, $436M Fund), Loan Risk Comparison by Term (36 vs 60 months), Good vs Bad Loan Trend Over Time, Loan Status Distribution, and a detailed lending table.',
        badge: 'Executive Overview',
      },
      {
        image:
          '/projects/loan-lending-performance-dashboard/gallery/application.png',
        title: 'Page 2: Loan Application Dynamics',
        description:
          'Origination dynamics module displaying Month-wise Application trends, Term Ratio donut chart (36 vs 60 months), Purpose-wise Application bar chart, State-wise Application column chart, and Top Purpose-wise Funded Amount pie chart.',
        badge: 'Origination Dynamics',
      },
      {
        image:
          '/projects/loan-lending-performance-dashboard/gallery/performance.png',
        title: 'Page 3: Portfolio Performance & Credit Risk',
        description:
          'Credit risk and performance module displaying Grade-wise Loan Distribution (Grades A-G), Revenue Status by loan outcome, Top Most Employees chart, and a comprehensive Lending Performance Portfolio audit table.',
        badge: 'Credit Risk Analysis',
      },
    ],
    gallery: [
      {
        url: '/projects/loan-lending-performance-dashboard/gallery/overview.png',
        caption:
          'Page 1: Portfolio Executive Overview — Core lending KPIs, term risk comparison (36 vs 60 months), good vs bad trends, and status distribution.',
        alt: 'Loan Lending Performance Dashboard Executive Overview',
      },
      {
        url: '/projects/loan-lending-performance-dashboard/gallery/application.png',
        caption:
          'Page 2: Loan Application Dynamics — Monthly application volume, loan term ratios, purpose-based breakdowns, and state-wise geographic density.',
        alt: 'Loan Application Dynamics Dashboard in Power BI',
      },
      {
        url: '/projects/loan-lending-performance-dashboard/gallery/performance.png',
        caption:
          'Page 3: Portfolio Performance & Credit Risk — Credit grade distribution (A-G), revenue status, borrower employment tenure, and detailed performance audit table.',
        alt: 'Portfolio Performance and Credit Risk Dashboard in Power BI',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Lending Domain Auditing & Data Extraction',
        description:
          'Audited retail consumer lending workflows, credit risk benchmarks, and loan lifecycle stages. Ingested 38,576 loan records across 6 relational sheets in Microsoft Excel.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Star Schema Architecture & Power Query ETL',
        description:
          'Engineered a star schema in Power BI Desktop connecting Fact_Loan (38,576 rows) with 5 dimension tables (Dim_Employment, Dim_Geography, Dim_Purpose, Dim_Credit_Grade, Dim_Term).',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'DAX Financial Measure & Solvency Formulation',
        description:
          'Authored core DAX measures calculating Total Applicants (38,576), Total Fund ($435.8M / $436M), Total Received ($473.1M / $473M), Average DTI (13.33%), Average Interest (12.05%), and Good vs Bad Loan classifications.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: '3-Page Interactive Canvas Design',
        description:
          'Designed 3 cohesive reporting modules: Portfolio Executive Overview, Loan Application Dynamics, and Portfolio Performance & Credit Risk with synchronized cross-filtering.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Report Validation, 3-Page PDF Generation & Walkthrough',
        description:
          'Exported the 3-page Power BI dashboard to a publication-quality PDF report, recorded a demonstration video walkthrough, and authored the portfolio case study.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S.',
        role: 'Lead Business Intelligence Developer & Financial Analytics Specialist',
        image: '/images/team/sreeram.jpg',
        responsibilities: [
          'End-to-end design, relational data modeling, and interactive dashboard engineering of the Loan Lending Performance platform',
          'Structured Star Schema data model linking 38,576 loan records with employment, geography, purpose, credit grade, and term dimensions',
          'Authored core DAX financial measures for good vs bad loans, capital funded, payments received, DTI, and interest rate averages',
          'Designed 3 cohesive report pages with synchronized State, Terms, and Purpose slicers',
          'Produced the 3-page publication-quality project documentation PDF and recorded demonstration video walkthrough',
        ],
        technicalContributions: [
          'Engineered Star Schema data model optimizing VertiPaq tabular storage and query speed across 38,576 records',
          'Implemented DAX calculations verifying $435.8M funded, $473.1M received, 13.33% DTI, and 12.05% interest',
          'Identified acute term risk disparity showing 60-month loans suffer a 22.34% default rate vs 10.71% for 36-month loans',
          'Configured responsive multi-column audit tables projecting member counts, installments, and payment totals',
        ],
        technologiesHandled: [
          'Microsoft Power BI',
          'DAX (Data Analysis Expressions)',
          'Power Query (M Language)',
          'Star Schema Modeling',
          'Microsoft Excel',
          'Financial Analytics',
        ],
      },
    ],
    challenges: [
      {
        challenge:
          'Star Schema Normalization from Flat Retail Lending Telemetry',
        explanation:
          'The source dataset contained 38,576 loan rows with multi-dimensional attributes (borrower employment length, job title, state geography, loan purpose, credit grades, and loan terms) across separate sheets that required strict referential integrity.',
        solution:
          'Architected a Star Schema in Power BI Desktop establishing 1-to-many relationships from Dim_Employment, Dim_Geography, Dim_Purpose, Dim_Credit_Grade, and Dim_Term to Fact_Loan, ensuring single-direction filter propagation.',
        implementationApproach:
          'Validated foreign key integrity across borrower_key, employment_key, geography_key, purpose_key, credit_key, and term_key, eliminating circular relationship risks and query lag.',
      },
      {
        challenge:
          'DAX Good vs Bad Loan Segmentation with Dynamic Multi-Filter Context',
        explanation:
          'Credit risk analysts required dynamic segmentation separating performing loans (Fully Paid, Current) from non-performing loans (Charged Off) that responds instantaneously when filtered by state, purpose, or loan term.',
        solution:
          'Authored optimized DAX measures: [Good Loan Applications] = CALCULATE(COUNT(Fact_Loan[id]), Fact_Loan[loan_status] = "Fully Paid" || Fact_Loan[loan_status] = "Current") and [Bad Loan Applications] = CALCULATE(COUNT(Fact_Loan[id]), Fact_Loan[loan_status] = "Charged Off").',
        implementationApproach:
          'Created a calculated column [Loan_Category] = IF(Fact_Loan[loan_status] = "Charged Off", "Bad Loan", "Good Loan") to support area chart trendlines and stacked bar distributions.',
      },
      {
        challenge:
          'Isolating Tenor Risk Differentials (36 vs 60 Months)',
        explanation:
          'Portfolio managers needed to visually evaluate whether longer 60-month loan terms represented elevated credit risk compared to standard 36-month terms without overwhelming the user with raw tabular percentages.',
        solution:
          'Designed a horizontal clustered bar chart visual on Page 1 (Loan Risk Comparison by Term) paired with a term ratio donut chart on Page 2.',
        implementationApproach:
          'Revealed that while 36-month loans represent 73.20% of volume with a 10.71% default rate, 60-month loans carry a 22.34% default rate, providing actionable insight for credit committee pricing.',
      },
      {
        challenge:
          'Optimizing Multi-Column Tabular Drill-Downs for Instant Responsiveness',
        explanation:
          'Page 1 and Page 3 required detailed data tables projecting purpose, employment title, member counts, installments, good/bad counts, loan amounts, and payments without degrading dashboard rendering speed.',
        solution:
          'Configured optimized Power BI tableEx visuals utilizing indexed columnar projections and virtualized scrolling.',
        implementationApproach:
          'Enabled rapid sorting and interactive cross-filtering from slicers, allowing underwriting teams to instantly inspect specific borrower segments with sub-second response times.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'End-to-end ingestion and modeling of 38,576 retail loan records across a 6-sheet relational Excel workbook',
        'Executive lending KPI tracking verifying 39K Applicants (38,576), $436M Funded ($435.8M), $473M Received ($473.1M), 13.33% DTI, and 12.05% Interest',
        'Term risk comparison exposing that 60-month loans suffer more than double the default rate of 36-month loans (22.34% vs 10.71%)',
        'Good vs Bad loan classification revealing 86.18% Good Loans (33,243) and 13.82% Bad Loans (5,333)',
        'Loan status distribution tracking 83.33% Fully Paid (32,145), 13.82% Charged Off (5,333), and 2.85% Current (1,098)',
        'Purpose and geographic breakdown across 14 loan purposes and 50 states (California led at 17.87%)',
        'Credit grade distribution analyzing tiers A through G alongside borrower employment tenure matrices',
        'Official 3-page high-resolution executive PDF report and complete demonstration video walkthrough',
      ],
      technicalAchievements: [
        'Engineered a scalable Star Schema data model in Power BI Desktop connecting Fact_Loan with 5 dimension tables',
        'Authored optimized DAX measures utilizing CALCULATE, COUNT, SUM, AVERAGE, and IF statements',
        'Designed 3 cohesive pages covering executive overview, application dynamics, and performance & credit risk',
        'Published a 3-page publication-quality PDF report documenting all dashboard pages, visual layouts, and financial KPIs',
        'Recorded a high-definition video walkthrough showcasing interactive slicers, term comparisons, and audit tables',
      ],
      demonstratedCapabilities: [
        'Financial Business Intelligence Architecture (Microsoft Power BI Desktop & Power Query)',
        'Credit Risk Portfolio Analytics & Default Rate Benchmarking',
        'Star Schema Relational Data Modeling & VertiPaq Tabular Engine Optimization',
        'Loan Tenor & Term Risk Differential Modeling (36 vs 60 Months)',
        'Interactive Financial Decision-Support & Portfolio Auditing',
      ],
      verifiedMetrics: [
        'Total Loan Applicants: 38,576 Applicants (39K on Dashboard Card)',
        'Total Funded Capital: $435,757,075.00 ($436M on Dashboard Card)',
        'Total Payments Received: $473,070,933.00 ($473M on Dashboard Card)',
        'Average Debt-to-Income (DTI): 13.33%',
        'Average Interest Rate: 12.05%',
        'Fully Paid Loans: 32,145 Loans (83.33% of Portfolio)',
        'Charged Off Loans: 5,333 Loans (13.82% of Portfolio)',
        'Current Loans: 1,098 Loans (2.85% of Portfolio)',
        '36-Month Loan Default Rate: 10.71% (3,023 Bad Loans out of 28,237)',
        '60-Month Loan Default Rate: 22.34% (2,310 Bad Loans out of 10,339)',
      ],
    },
    disclaimer:
      'Financial & Analytical Disclaimer: The Loan Lending Performance Dashboard is an analytical and business intelligence portfolio project developed to demonstrate financial data modeling, credit risk visualization, and portfolio performance analysis. It is designed as an analytical decision-support and data exploration tool, not as an automated loan approval engine or real-time credit scoring platform. All metrics and calculations are derived from an educational retail lending dataset.',
  },

  // 6. Patient Diagnostic Dashboard - Completed
  'patient-diagnostic-dashboard': {
    id: 'patient-diagnostic-dashboard',
    slug: 'patient-diagnostic-dashboard',
    title: 'Patient Diagnostic Dashboard',
    shortTitle: 'Patient Diagnostic Analytics',
    subtitle:
      'Clinical Healthcare Analytics, Vital Biomarker Tracking & Hospital Admission Risk Intelligence',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: [
      'Data Analytics',
      'Microsoft Power BI',
      'Healthcare Analytics',
      'Business Intelligence',
      'Data Visualization',
    ],
    status: 'Completed',
    shortDescription:
      'An interactive Power BI dashboard designed to analyze 10,000 clinical encounters across 3,678 unique patients. It evaluates fever diagnostic categories, hospital admission rates (65.78%), chronic vital indicators (blood pressure and diabetes), and blood test biomarkers (CRP, WBC, hemoglobin, platelets) to empower clinical decision-support and hospital capacity management.',
    assetFolderPath: '/projects/patient-diagnostic-dashboard/',
    coverImage: '/projects/patient-diagnostic-dashboard/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/patient-diagnostic-dashboard/demo.mp4',
      thumbnail: '/projects/patient-diagnostic-dashboard/cover.png',
      title: 'Watch the Patient Diagnostic Dashboard in Action',
      description:
        'Explore interactive Power BI navigation across 5 specialized healthcare modules: Patient Overview, Chronic & Vital Analysis, Clinical Visit Tracking, Blood Test Diagnostics, and Single-Patient Longitudinal Drill-Through.',
      duration: 'Interactive Power BI Walkthrough',
    },
    pdfReport: {
      url: '/projects/patient-diagnostic-dashboard/documentation/project-report.pdf',
      title: 'Explore the Complete Patient Diagnostic Dashboard Report',
      description:
        'Explore the complete 5-page Power BI healthcare analytics dashboard report directly within this portfolio. Navigate through all clinical modules to inspect population health KPIs, diagnostic fever categorizations, vital trends, and individual patient drill-throughs.',
      buttonLabel: 'Explore Dashboard Report',
      pageCount: 5,
      downloadFilename: 'Patient-Diagnostic-Dashboard-Report.pdf',
      pageTitles: [
        'Page 1: Patient Overview (Population Demographics, Risk Levels & Fever Admission Rates)',
        'Page 2: Chronic & Vital Analysis (Blood Pressure, Diabetes Gauges & High-Risk Ratios)',
        'Page 3: Clinical Visit Analysis (Revisit Gaps, Monthly Visit Volume & Regional Density)',
        'Page 4: Blood Test Diagnostics (CRP Inflammation Markers, WBC, Hemoglobin & Platelets)',
        'Page 5: Patient Longitudinal Detail (Individual Patient Drill-Through & Clinical Timeline)',
      ],
    },
    links: {
      github:
        'https://github.com/sreeramganesh/Patient-Diagnostic-Dashboard-using-Power-BI.git',
      githubLabel: 'View Source Code on GitHub',
      relatedResources: [
        {
          title: 'Microsoft Power BI Documentation',
          url: 'https://learn.microsoft.com/en-us/power-bi/',
          type: 'BI Platform',
        },
        {
          title: 'DAX (Data Analysis Expressions) Reference',
          url: 'https://learn.microsoft.com/en-us/dax/',
          type: 'Calculation Language',
        },
        {
          title: 'Clinical Triage & Inpatient Admission Protocols',
          url: 'https://www.who.int/teams/integrated-health-services/clinical-services-and-systems',
          type: 'Clinical Reference',
        },
        {
          title: 'Power Query M Formula Language Reference',
          url: 'https://learn.microsoft.com/en-us/powerquery-m/',
          type: 'ETL Engine',
        },
      ],
    },
    overview: {
      introduction:
        'The Patient Diagnostic Dashboard is a clinical healthcare business intelligence and diagnostic decision-support solution developed in Microsoft Power BI Desktop. The system consolidates 10,000 clinical visit encounters across 3,678 unique patients over a 22-month observational period (January 2024 to October 2025) across 8 regional healthcare clusters in Andhra Pradesh (Guntur, Vijayawada, Visakhapatnam, Tirupati, Kurnool, Nellore, Kakinada, and Rajahmundry). Consolidating acute symptoms, laboratory blood test profiles, fever etiologies, medication regimens, and chronic vital indicators into a unified relational model, the dashboard delivers real-time visibility into an overall 65.78% admission rate (6,578 admitted visits), 3,123 high-risk clinical visits (31.23%), acute systemic inflammation markers (mean CRP of 20.6 mg/L), and an average patient revisit gap of 206 days.',
      purpose:
        'Modern healthcare systems face severe challenges with fragmented electronic medical records, emergency room bottlenecks, diagnostic ambiguity during seasonal fever outbreaks, and delayed detection of chronic disease exacerbations. In the absence of an integrated clinical intelligence interface, hospital medical directors, triage physicians, and nursing supervisors struggle to forecast inpatient bed occupancy, detect systemic inflammation early, or track longitudinal patient histories across repeat visits. This project bridges this critical gap by structuring disparate clinical, laboratory, and pharmacological telemetry into an intuitive decision-support platform.',
      mainObjective:
        'Transform 10,000 multi-table clinical visit records and laboratory blood tests across 3,678 patients into an executive 5-page Power BI dashboard that equips clinical teams with immediate operational clarity on admission risks (65.78%), fever category severity (Typhoid at 67.7%, Viral at 66.7%), chronic vitals (blood pressure and diabetes), inflammatory biomarkers (CRP, WBC), and single-patient historical drill-throughs.',
      howItWorks:
        'Clinical and laboratory records are extracted from a multi-sheet relational Excel workbook (Patient_Symptoms, Blood_Test_Results, Fever_Type_Profile, Medication) and ingested into Power BI Desktop via Power Query. A relational data model is constructed connecting the central visit fact tables with diagnostic profiles and pharmacological dimensions using Visit_ID and Patient_ID keys. Custom DAX measures calculate Total Encounters (10,000), Unique Patients (3,678), High-Risk Visit Volume (3,123), Admission Rate (65.78%), Average Revisit Gap (206 days), and Mean CRP (20.6 mg/L). The resulting 5-page report provides synchronized slicers (Location, Gender, Risk Level, Fever Type, Patient ID), dynamic gauges, dual-axis trendlines, fever admission ranking tables, and longitudinal patient drill-through cards.',
      targetUsers: [
        'Hospital Medical Directors & Chief Medical Officers (CMOs)',
        'Emergency Room (ER) & Clinical Triage Physicians',
        'Inpatient Capacity & Bed Management Coordinators',
        'Infection Control & Public Health Epidemiologists',
        'Clinical Quality Improvement & Healthcare BI Analysts',
      ],
      highlights: [
        'Consolidation of 10,000 Clinical Visits Across 3,678 Unique Patients',
        'Hospital Admission Rate Benchmark: 65.78% Overall (6,578 Admitted Encounters)',
        'Clinical Risk Stratification: 3,123 High-Risk Visits (31.23% of Total Volume)',
        'Revisit Cycle Tracking: Average 206-Day Patient Return Interval',
        'Acute Fever Profiling Across 8 Categories (Typhoid 67.7%, Viral 66.7%, Dengue 66.6%)',
        'Biomarker Diagnostic Suite: Mean CRP of 20.6 mg/L Indicating Systemic Inflammation',
        'Longitudinal Single-Patient Drill-Through with Historical Vitals & Medication',
        '5-Page Publication Report Embedded with Interactive PDF Controls',
      ],
    },
    problemStatement: {
      title:
        'Clinical Data Fragmentation, Emergency Overcrowding & Diagnostic Delays',
      mainProblem:
        'Healthcare institutions operate across siloed departmental applications where emergency triage symptom sheets, vital sign logs, laboratory blood test results, and pharmacy dispensations exist in isolated databases. Without an integrated analytical model, clinicians cannot readily correlate presenting symptoms with chronic vital markers, detect escalating inflammatory blood indicators, or anticipate inpatient bed shortages during regional infectious disease spikes.',
      existingLimitations: [
        'Disconnected Triage Symptoms & Laboratory Panels: Acute symptoms recorded at triage are separated from lab biomarker results, delaying multi-factor clinical diagnosis.',
        'Invisible Revisit Cycles & Chronic Trajectories: With an average patient revisit gap of 206 days, clinicians lack longitudinal context when assessing recurring patients.',
        'Uncalibrated Inpatient Admission Triggers: Admission rates vary significantly across etiologies (Typhoid at 67.7% vs COVID at 64.1%), but facilities lack unified predictive metrics.',
        'Regional Diagnostic Blindspots: Public health directors cannot track localized disease prevalence across major Andhra Pradesh urban centers like Visakhapatnam, Vijayawada, and Guntur.',
        'Cumbersome Single-Patient Historical Review: Examining prior vitals, lab reports, and medication regimens for a specific patient requires navigating disparate electronic record screens.',
      ],
      whyItMatters:
        'In acute clinical settings, every hour saved in identifying high-risk systemic infection or decompensating chronic disease directly reduces morbidity, optimizes intensive bed capacity, prevents avoidable hospital readmissions, and ensures life-saving medical resources reach vulnerable patients first.',
      keyChallenges: [
        {
          title: 'Deduplicating Multi-Visit Longitudinal Records',
          description:
            'Harmonizing 10,000 clinical encounters across 3,678 unique patients to differentiate visit-level risk stratification from individual patient counts.',
          iconName: 'Users',
        },
        {
          title: 'Dual-Fact Relational Integration',
          description:
            'Linking Patient_Symptoms and Blood_Test_Results across shared Visit_ID keys while maintaining integrity with Fever Profiles and Medications.',
          iconName: 'Layers',
        },
        {
          title: 'Dynamic Healthcare Ratio & DAX Formulation',
          description:
            'Authoring safe, performant DAX measures for Admission Rate (65.78%), High Risk % (31.23%), and biomarker averages across cross-filtered dimensions.',
          iconName: 'Calculator',
        },
        {
          title: 'Physiological Metric & Biomarker Normalization',
          description:
            'Structuring clinical ranges for blood pressure (systolic/diastolic), 2-hour post-meal glucose, and inflammatory CRP (20.6 mg/L mean) into intuitive visuals.',
          iconName: 'Activity',
        },
      ],
    },
    solution: {
      title:
        'Unified 5-Page Healthcare Diagnostic & Clinical Triage BI System in Power BI',
      approach:
        'A comprehensive healthcare business intelligence platform combining Power Query data preparation, a relational healthcare schema, custom DAX clinical measures, and an interactive 5-page clinical reporting suite.',
      technicalSolution:
        'Engineered in Microsoft Power BI Desktop utilizing a dual-fact relational schema connecting Patient_Symptoms (10,000 encounters) and Blood_Test_Results (10,000 lab records) to Fever_Type_Profile and Medication dimension tables. Formulated core DAX measures calculating Total Clinical Visits (10,000), Unique Patient Population (3,678), High-Risk Visit Volume (3,123), Hospital Admission Rate (65.78%), Average Revisit Gap (206 days), and Mean CRP (20.6 mg/L). Designed 5 specialized clinical pages: Patient Overview, Chronic & Vital Analysis, Clinical Visit Tracking, Blood Test Diagnostics, and Single-Patient Longitudinal Drill-Through. Integrated dynamic slicers for Location, Gender, Risk Level, Fever Type, and Patient ID.',
      implementationOverview:
        'Ingested clinical datasets from Excel, normalized symptom codes and biomarker values in Power Query, built relational schema with referential integrity, authored clinical DAX measures, designed 5 responsive dashboard layouts, generated 5-page PDF documentation, and recorded a full walkthrough video.',
      howItSolves: [
        'Consolidates 10,000 clinical visits and 3,678 patients into real-time triage KPI cards',
        'Exposes acute admission rates across 8 fever categories, led by Typhoid (67.7%) and Viral Fever (66.7%)',
        'Monitors systemic inflammation using CRP (mean 20.6 mg/L) and WBC counts across diagnostic categories',
        'Quantifies patient revisit cycles, revealing an average 206-day return interval to guide follow-up care',
        'Tracks chronic vital risks with blood pressure distributions and 2-hour post-meal glucose gauges',
        'Provides an interactive single-patient drill-through canvas for instant historical review of visits, vitals, and medications',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Activity',
        title: 'Executive Clinical Triage KPIs',
        description:
          'Real-time tracking of 10,000 Total Clinical Encounters, 3,678 Unique Patients, 65.78% Hospital Admission Rate (6,578 admitted), and 3,123 High-Risk Visits.',
      },
      {
        iconName: 'Thermometer',
        title: 'Fever Etiology & Admission Risk Stratification',
        description:
          'Deep-dive analysis across 8 acute fever types (Malaria, Influenza, Viral, COVID, Bacterial, Chikungunya, Dengue, Typhoid), revealing Typhoid as the highest admission risk at 67.7%.',
      },
      {
        iconName: 'HeartPulse',
        title: 'Chronic Vital & Physiological Monitoring',
        description:
          'Comprehensive tracking of systolic and diastolic blood pressure distributions, average 2-hour post-meal diabetes levels (mg/dL gauge), and body temperature trends.',
      },
      {
        iconName: 'MapPin',
        title: 'Regional Healthcare Distribution & Density',
        description:
          'Geographic mapping of patient visits and hospital admissions across 8 major Andhra Pradesh clusters: Visakhapatnam, Vijayawada, Guntur, Tirupati, Kurnool, Nellore, Kakinada, and Rajahmundry.',
      },
      {
        iconName: 'TestTube2',
        title: 'Laboratory Biomarker Diagnostics Suite',
        description:
          'Diagnostic monitoring of C-Reactive Protein (mean 20.6 mg/L indicating active systemic inflammation), White Blood Cell (WBC) counts, Hemoglobin, and Platelet levels.',
      },
      {
        iconName: 'CalendarClock',
        title: 'Longitudinal Revisit Cycle Analytics',
        description:
          'Evaluation of patient revisit intervals demonstrating an average 206-day cycle between clinical visits, coupled with monthly visit volume and high-risk admission area charts.',
      },
      {
        iconName: 'UserCheck',
        title: 'Single-Patient Drill-Through History',
        description:
          'Individual patient lookup interface providing instant visibility into historical visit dates, vital metrics (BP, glucose, temperature), CRP values, admission status, and prescribed medications.',
      },
      {
        iconName: 'Sliders',
        title: 'Synchronized Multi-Dimensional Slicers',
        description:
          'Dynamic cross-filtering across Location, Gender, Risk Level, Fever Type, and Patient ID, ensuring synchronized visual updates across all report canvases.',
      },
    ],
    architecture: {
      description:
        'The architecture implements an enterprise healthcare business intelligence pipeline: structured clinical extraction from multi-table Excel sources, automated data sanitization and schema harmonization in Power Query, dual-fact relational modeling, DAX clinical measure calculation, and responsive 5-page dashboard reporting.',
      frontend:
        'Interactive Microsoft Power BI Desktop canvas featuring 5 specialized clinical pages, synchronized slicers, donut charts, gauge meters, dual-axis trendlines, and longitudinal patient drill-through tables.',
      backend:
        'Power BI In-Memory Tabular Engine (VertiPaq) processing compressed relational queries and high-speed DAX aggregations across 10,000 clinical encounters.',
      database:
        'Relational healthcare data model linking Patient_Symptoms (10,000 visits) and Blood_Test_Results (10,000 rows) with Fever_Type_Profile (8 categories) and Medication (26 pharmacological regimens).',
      workflow: [
        'Data Ingestion: Ingesting 10,000 encounter rows across 4 relational sheets from Patient Diagnostic Dashboard.xlsx into Power BI Desktop',
        'Data Cleaning & Transformation: Standardizing date formats, vital sign metrics, laboratory biomarker types, and regional identifiers in Power Query',
        'Relational Schema Architecture: Connecting Patient_Symptoms and Blood_Test_Results via Visit_ID and Patient_ID to diagnostic and medication dimensions',
        'DAX Measure Formulation: Computing Total Visits (10,000), Unique Patients (3,678), Admission Rate (65.78%), High-Risk % (31.23%), and Mean CRP (20.6 mg/L)',
        '5-Page Clinical Dashboard Development: Designing Patient Overview, Chronic Analysis, Clinical Visits, Blood Tests, and Patient Longitudinal Detail',
        'Interactive Slicer Integration: Configuring cross-filtering across Location, Gender, Risk Level, Fever Type, and Patient ID',
        'Report Validation & Publishing: Verifying numerical accuracy against raw dataset totals and exporting the 5-page high-resolution PDF publication report',
      ],
    },
    techStack: [
      'Power BI',
      'DAX',
      'Data Modeling',
      'Power Query',
      'Excel',
      'Healthcare Analytics',
    ],
    techStackGrouped: [
      {
        category: 'Business Intelligence & Reporting',
        items: [
          {
            name: 'Microsoft Power BI Desktop',
            role: '5-page interactive clinical diagnostic & hospital analytics dashboard',
            iconName: 'BarChart3',
          },
          {
            name: 'Interactive Clinical Canvases',
            role: 'Synchronized slicers, drill-through cards, and gauge meters',
            iconName: 'Layout',
          },
          {
            name: 'Healthcare Data Visualization',
            role: 'Admission rate tables, CRP biomarker trends, and vital distributions',
            iconName: 'PieChart',
          },
        ],
      },
      {
        category: 'Analytical Modeling & DAX',
        items: [
          {
            name: 'DAX (Data Analysis Expressions)',
            role: 'Formulating Admission Rate, High-Risk %, Revisit Gaps, and Mean CRP',
            iconName: 'Calculator',
          },
          {
            name: 'Relational Healthcare Data Modeling',
            role: 'Dual-fact relational schema connecting symptoms, blood tests, and dimensions',
            iconName: 'Layers',
          },
          {
            name: 'Clinical KPI Benchmarking',
            role: 'Stratifying risk levels and admission urgency across fever etiologies',
            iconName: 'Activity',
          },
        ],
      },
      {
        category: 'Data Preparation & ETL',
        items: [
          {
            name: 'Power Query (M Language)',
            role: 'Data cleaning, type harmonization, and foreign key referential integrity',
            iconName: 'Workflow',
          },
          {
            name: 'Clinical Data Sanitization',
            role: 'Validation of vital sign physiological bounds and lab test units',
            iconName: 'CheckSquare',
          },
          {
            name: 'Longitudinal Revisit Modeling',
            role: 'Computing patient-level intervals and encounter sequencing',
            iconName: 'Clock',
          },
        ],
      },
      {
        category: 'Data Source & Documentation',
        items: [
          {
            name: 'Microsoft Excel',
            role: '4-sheet relational workbook storing 10,000 clinical encounters and lab panels',
            iconName: 'FileSpreadsheet',
          },
          {
            name: 'Interactive 5-Page PDF Report',
            role: 'High-resolution publication report documenting all 5 dashboard modules',
            iconName: 'FileText',
          },
          {
            name: 'MP4 Demonstration Video',
            role: 'Video walkthrough demonstrating interactive slicers and patient drill-through',
            iconName: 'Play',
          },
        ],
      },
    ],
    applicationScreenshots: [
      {
        image: '/projects/patient-diagnostic-dashboard/gallery/overview.png',
        title: 'Page 1: Patient Overview Dashboard',
        description:
          'Executive clinical triage layout featuring population demographics, risk level distribution donut (High: 3,123, Medium: 3,523, Low: 3,354), fever category breakdown, and hospital admission rates by fever type led by Typhoid (67.7%).',
        badge: 'Executive Triage',
      },
      {
        image: '/projects/patient-diagnostic-dashboard/gallery/chronic.png',
        title: 'Page 2: Chronic & Vital Analysis Dashboard',
        description:
          'Physiological monitoring suite tracking High Risk % by fever category, systolic and diastolic blood pressure distributions, average 2-hour post-meal glucose gauge, and longitudinal vital stability.',
        badge: 'Physiological Telemetry',
      },
      {
        image: '/projects/patient-diagnostic-dashboard/gallery/visits.png',
        title: 'Page 3: Clinical Visit Tracking Dashboard',
        description:
          'Operational logistics module displaying hospital admissions and patient volumes across 8 Andhra Pradesh locations, visit frequency distributions, and monthly encounter volume area trends.',
        badge: 'Operational Logistics',
      },
      {
        image: '/projects/patient-diagnostic-dashboard/gallery/blood-test.png',
        title: 'Page 4: Blood Test Diagnostics Dashboard',
        description:
          'Laboratory biomarker analytics interface tracking C-Reactive Protein (mean 20.6 mg/L), White Blood Cell counts, Hemoglobin, and Platelet levels across fever types with monthly timeline monitoring.',
        badge: 'Laboratory Biomarkers',
      },
      {
        image:
          '/projects/patient-diagnostic-dashboard/gallery/patient-details.png',
        title: 'Page 5: Patient Longitudinal Detail Dashboard',
        description:
          'Clinician single-patient drill-through interface displaying individual encounter history, vital signs (BP, glucose, temperature), admission status, CRP biomarker trajectories, and prescribed medications.',
        badge: 'Longitudinal Drill-Through',
      },
    ],
    gallery: [
      {
        url: '/projects/patient-diagnostic-dashboard/gallery/overview.png',
        caption:
          'Page 1: Patient Overview Dashboard — Population demographics, risk level distributions, fever categorizations, and admission rate rankings.',
        alt: 'Patient Overview Dashboard Layout in Power BI',
      },
      {
        url: '/projects/patient-diagnostic-dashboard/gallery/chronic.png',
        caption:
          'Page 2: Chronic & Vital Analysis Dashboard — Blood pressure distributions, post-meal diabetes gauge, and high-risk ratios across fever categories.',
        alt: 'Chronic and Vital Analysis Dashboard in Power BI',
      },
      {
        url: '/projects/patient-diagnostic-dashboard/gallery/visits.png',
        caption:
          'Page 3: Clinical Visit Tracking Dashboard — Hospital admissions and patient volumes across Andhra Pradesh healthcare centers with monthly trends.',
        alt: 'Clinical Visit Tracking Dashboard in Power BI',
      },
      {
        url: '/projects/patient-diagnostic-dashboard/gallery/blood-test.png',
        caption:
          'Page 4: Blood Test Diagnostics Dashboard — Laboratory biomarker monitoring for CRP inflammation, WBC count, hemoglobin, and platelets.',
        alt: 'Blood Test Diagnostics Dashboard in Power BI',
      },
      {
        url: '/projects/patient-diagnostic-dashboard/gallery/patient-details.png',
        caption:
          'Page 5: Patient Longitudinal Detail Dashboard — Granular patient-by-patient clinical drill-through with historical vitals, lab results, and medications.',
        alt: 'Patient Longitudinal Detail Drill-Through in Power BI',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Clinical Domain Auditing & Data Harmonization',
        description:
          'Audited clinical healthcare triage workflows, diagnostic fever profiles, physiological vital ranges, and laboratory blood biomarker standards. Extracted 10,000 clinical encounters across 4 relational sheets in Excel.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Relational Healthcare Data Modeling & Power Query ETL',
        description:
          'Architected a relational schema in Power BI Desktop connecting Patient_Symptoms (10,000 rows) and Blood_Test_Results (10,000 rows) via Visit_ID and Patient_ID with diagnostic and pharmacological dimensions.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'DAX Clinical Metric Formulation & Solvency Testing',
        description:
          'Authored optimized DAX measures calculating Total Encounters (10,000), Unique Patients (3,678), High-Risk Visit Volume (3,123 / 31.23%), Admission Rate (65.78%), Average Revisit Gap (206 days), and Mean CRP (20.6 mg/L).',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: '5-Page Clinical Dashboard Architecture & UI Design',
        description:
          'Designed 5 specialized reporting modules: Patient Overview, Chronic & Vital Analysis, Clinical Visit Tracking, Blood Test Diagnostics, and Single-Patient Longitudinal Detail with synchronized cross-filtering.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Report Validation, 5-Page PDF Publication & Video Walkthrough',
        description:
          'Exported the 5-page Power BI dashboard to a high-resolution publication PDF, recorded a comprehensive demonstration video walkthrough, and authored the portfolio case study.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S.',
        role: 'Lead Business Intelligence Developer & Healthcare Analytics Specialist',
        image: '/images/team/sreeram.jpg',
        responsibilities: [
          'End-to-end design, relational data modeling, and interactive dashboard engineering of the Patient Diagnostic Dashboard',
          'Structured relational data model connecting 10,000 clinical visit encounters with laboratory blood tests, fever profiles, and medications',
          'Authored core DAX measures for admission rate, risk level stratification, patient revisit gaps, and biomarker aggregations',
          'Designed 5 cohesive report pages with synchronized Location, Gender, Risk Level, Fever Type, and Patient ID slicers',
          'Produced the 5-page publication-quality project documentation PDF and recorded demonstration video walkthrough',
        ],
        technicalContributions: [
          'Engineered dual-fact relational data model optimizing query performance across 10,000 clinical encounters and lab records',
          'Implemented DAX measures verifying 10,000 visits, 3,678 unique patients, 65.78% admission rate, and 3,123 high-risk encounters',
          'Identified acute fever admission disparities led by Typhoid (67.7%), Viral (66.7%), and Dengue (66.6%)',
          'Configured responsive single-patient drill-through interface enabling historical review of individual vitals and medications',
        ],
        technologiesHandled: [
          'Microsoft Power BI',
          'DAX (Data Analysis Expressions)',
          'Power Query (M Language)',
          'Relational Healthcare Data Modeling',
          'Microsoft Excel',
          'Healthcare Analytics',
        ],
      },
    ],
    challenges: [
      {
        challenge:
          'Differentiating Visit-Level Risk Stratification from Unique Patient Volume',
        explanation:
          'An initial review of project documentation presented an apparent discrepancy between a KPI card displaying 3,123 high-risk visits and an analytical summary citing 5,863 high-risk instances, both contrasting the total unique patient count of 3,678.',
        solution:
          'Conducted programmatic data auditing on the raw Patient_Symptoms dataset to empirically verify that Risk_Level == "High" accounts for exactly 3,123 visit rows (31.23% of all 10,000 visits), while unique patients total 3,678 (with 2,157 patients having at least one high-risk visit). The 5,863 figure in external summaries reflects a derived multi-factor clinical urgency index (combining acute vitals, elevated CRP, and admission necessity).',
        implementationApproach:
          'Transparently documented both metrics in the BI architecture, defining distinct DAX measures: [High Risk Visits] = CALCULATE(COUNTROWS(Patient_Symptoms), Patient_Symptoms[Risk_Level] = "High") and [Unique Patients] = DISTINCTCOUNT(Patient_Symptoms[Patient_ID]).',
      },
      {
        challenge:
          'Relational Modeling Across Dual Clinical Fact Tables (Symptoms & Laboratory Blood Tests)',
        explanation:
          'Both Patient_Symptoms and Blood_Test_Results contain 10,000 rows with Visit_ID and Patient_ID keys. Establishing direct many-to-many relationships or ambiguous bidirectional filters risked query degradation and incorrect visual totals.',
        solution:
          'Architected a star-like relational schema where shared dimension tables (Fever_Type_Profile and Medication) filter the fact tables cleanly, while linking Patient_Symptoms and Blood_Test_Results on Visit_ID with 1-to-1 referential integrity.',
        implementationApproach:
          'Configured single-directional filtering paths and validated that cross-filtering from triage symptoms seamlessly propagated to laboratory biomarkers without circular relationship ambiguity.',
      },
      {
        challenge:
          'Physiological Vital Sign Threshold Calibration in DAX',
        explanation:
          'Representing continuous vital metrics (blood pressure S/D, 2-hour post-meal glucose, body temperature) alongside categorical risk levels required dynamic categorization to highlight clinical abnormalities without overwhelming the user.',
        solution:
          'Formulated DAX conditional formatting measures that dynamically shade visual indicators when glucose exceeds diabetic thresholds (>140 mg/dL) or when CRP exceeds normal inflammatory baselines (>10 mg/L).',
        implementationApproach:
          'Integrated custom gauge meters and multi-tier bar charts that intuitively guide clinicians toward out-of-range clinical parameters.',
      },
      {
        challenge:
          'Sub-Second Performance on Single-Patient Longitudinal Drill-Through (Page 5)',
        explanation:
          'The single-patient drill-through interface requires filtering across 10,000 encounter rows, 10,000 lab results, and multiple dimensions simultaneously for any chosen Patient_ID, which could introduce latency if unoptimized.',
        solution:
          'Leveraged Power BI VertiPaq in-memory columnar indexing and created targeted summary measures that evaluate solely within the filter context of the selected Patient_ID.',
        implementationApproach:
          'Streamlined table visuals to project indexed columns (Visit_Date, Fever_Type, Vitals, CRP, Admission, Medication), achieving instantaneous sub-second response times upon patient selection.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'End-to-end ingestion and modeling of 10,000 clinical visit encounters and 10,000 blood test panels across 4 relational Excel sheets',
        'Executive clinical triage KPI tracking verifying 10,000 Visits, 3,678 Unique Patients, 65.78% Admission Rate, and 3,123 High-Risk Encounters',
        'Fever etiology severity ranking across 8 categories led by Typhoid (67.7%), Viral (66.7%), Dengue (66.6%), and Bacterial (66.3%)',
        'Physiological vital sign monitoring tracking blood pressure distributions and 2-hour post-meal glucose gauges',
        'Regional healthcare distribution mapping across 8 Andhra Pradesh cities with monthly encounter volume area charts',
        'Laboratory biomarker analytics monitoring C-Reactive Protein (mean 20.6 mg/L), WBC counts, hemoglobin, and platelets',
        'Interactive single-patient drill-through interface for granular historical audit of vitals, lab panels, and medications',
        'Official 5-page high-resolution executive PDF report and complete demonstration video walkthrough',
      ],
      technicalAchievements: [
        'Engineered a scalable dual-fact relational data model in Power BI Desktop connecting symptoms, blood tests, and dimensions',
        'Authored optimized DAX measures utilizing CALCULATE, DIVIDE, DISTINCTCOUNT, AVERAGE, and COUNTROWS',
        'Designed 5 cohesive pages covering executive overview, chronic vitals, clinical visits, blood tests, and patient drill-through',
        'Published a 5-page publication-quality PDF report documenting all dashboard pages, visual layouts, and clinical KPIs',
        'Recorded a high-definition video walkthrough showcasing interactive slicers and patient longitudinal drill-throughs',
      ],
      demonstratedCapabilities: [
        'Healthcare Business Intelligence Architecture (Microsoft Power BI Desktop & Power Query)',
        'Clinical Triage & Inpatient Admission Risk Stratification',
        'Dual-Fact Relational Data Modeling & VertiPaq Tabular Engine Optimization',
        'Longitudinal Patient History Tracking & Clinical Drill-Through',
        'Biomarker Diagnostic Monitoring (Inflammatory CRP, WBC, Hemoglobin, Platelets)',
      ],
      verifiedMetrics: [
        'Total Clinical Encounters: 10,000 Visits',
        'Unique Patient Population: 3,678 Patients',
        'Overall Hospital Admission Rate: 65.78% (6,578 Admitted Encounters)',
        'High-Risk Clinical Visits: 3,123 Visits (31.23% of Total Encounters)',
        'Medium-Risk Clinical Visits: 3,523 Visits (35.23% of Total Encounters)',
        'Low-Risk Clinical Visits: 3,354 Visits (33.54% of Total Encounters)',
        'Average Patient Revisit Interval: ~206 Days',
        'Mean C-Reactive Protein (CRP): 20.6 mg/L (Active Systemic Inflammation)',
        'Highest Admission Risk Fever Category: Typhoid at 67.71% (822 Admitted / 1,214 Visits)',
        'Observational Period: 22 Months (January 2024 to October 2025 across 8 Regional Clusters)',
      ],
    },
    disclaimer:
      'Medical & Analytics Disclaimer: The Patient Diagnostic Dashboard is an educational and analytical business intelligence portfolio project developed to demonstrate healthcare data visualization, clinical triage metrics, and operational capacity modeling. It is designed as a clinical decision-support and data exploration tool, not as a certified medical device, automated diagnostic system, or substitute for professional medical examination, diagnosis, or clinical judgment. All patient identifiers, visits, and clinical metrics are derived from a structured educational healthcare dataset.',
  },

  // 7. E-Commerce Conversion & Sales Analytics Dashboard - Completed
  'ecommerce-conversion-analysis': {
    id: 'ecommerce-conversion-analysis',
    slug: 'ecommerce-conversion-analysis',
    title: 'E-Commerce Conversion & Sales Analytics Dashboard',
    shortTitle: 'E-Commerce Conversion & Sales Analytics',
    subtitle: 'Transforming Multi-Channel E-Commerce Data into Actionable Business Intelligence',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: [
      'Data Analytics',
      'Microsoft Power BI',
      'Business Intelligence',
      'Data Visualization',
      'E-Commerce Analytics',
    ],
    status: 'Completed',
    shortDescription:
      'An interactive Power BI dashboard designed to analyze e-commerce sales performance, customer conversion, profitability, marketing effectiveness, and operational trends. It provides business-focused insights through KPI tracking, interactive filters, and visual analytics to support informed decision-making.',
    assetFolderPath: '/projects/ecommerce-conversion-analysis/',
    coverImage: '/projects/ecommerce-conversion-analysis/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/ecommerce-conversion-analysis/demo.mp4',
      thumbnail: '/projects/ecommerce-conversion-analysis/cover.png',
      title: 'Watch the E-Commerce Conversion & Sales Analytics Dashboard in Action',
      description:
        'Explore interactive Power BI navigation: Executive Overview KPIs, 4-stage conversion funnel analysis, product profitability scatter plots, marketing ROAS channel attribution, warehouse fulfillment, and customer segmentation.',
      duration: 'Interactive Power BI Walkthrough',
    },
    pdfReport: {
      url: '/projects/ecommerce-conversion-analysis/documentation/project_report.pdf',
      title: 'Complete Dashboard Documentation',
      description:
        'Explore the complete E-Commerce Conversion & Sales Analytics dashboard report directly within this portfolio. Navigate through all analytical pages to understand the dashboard structure, visualizations, KPIs, and business insights.',
      buttonLabel: 'Explore Dashboard Report',
      pageCount: 6,
      pageTitles: [
        'Page 1: Executive Overview (National Revenue, Gross Margin, Regional Breakdown & Category Mix)',
        'Page 2: Conversion Funnel Analytics (Sessions, Add to Cart, Checkout, Devices & Bounce Rates)',
        'Page 3: Sales & Profitability (Fiscal Quarter Trends, Net Revenue & Product Performance Ranking)',
        'Page 4: Marketing Analytics (Marketing Spend, ROAS Attribution, Paid Channels & Scatter Matrix)',
        'Page 5: Operations & Returns (Warehouse Fulfilment, Return Reasons & Returned Product Pareto)',
        'Page 6: Customer & Product Intelligence (Customer Segments, Repeat Rates, CLV & Discount Impact)',
      ],
    },
    links: {
      github:
        'https://github.com/sreeramganesh/E-Commerce-Conversion-Sales-Analytics-Dashboard-using-Power-BI.git',
      githubLabel: 'View Source Code',
      relatedResources: [
        {
          title: 'Microsoft Power BI Documentation',
          url: 'https://learn.microsoft.com/en-us/power-bi/',
          type: 'BI Platform',
        },
        {
          title: 'DAX (Data Analysis Expressions) Reference',
          url: 'https://learn.microsoft.com/en-us/dax/',
          type: 'Calculation Language',
        },
        {
          title: 'Power Query M Formula Language Reference',
          url: 'https://learn.microsoft.com/en-us/powerquery-m/',
          type: 'ETL Engine',
        },
        {
          title: 'E-Commerce Conversion Rate Benchmarks',
          url: 'https://www.statista.com/topics/871/online-shopping/',
          type: 'Industry Research',
        },
      ],
    },
    overview: {
      introduction:
        'The E-Commerce Conversion & Sales Analytics Dashboard is an executive business intelligence and decision-support solution developed in Microsoft Power BI Desktop. The platform synthesizes 10,000 multi-channel customer order transactions, 8,000 web browsing sessions, and 634 return records across 500 unique customers, 120 products, 12 marketing channels, and 5 UK fulfillment centers. By consolidating transactional ERP datasets, digital analytics logs, and supply chain telemetry into a cohesive Star Schema model, the dashboard delivers real-time visibility into £1.98M in net revenue, £989.4K in gross profit, 49.85% profit margins, a 5.29% conversion rate, marketing channel ROAS, and regional warehouse fulfillment.',
      purpose:
        'Modern e-commerce enterprises generate massive telemetry streams across online store platforms, web traffic logs, digital ad platforms, and warehouse management systems. In the absence of an integrated business intelligence architecture, commercial leadership and merchandising teams struggle to diagnose funnel abandonment, evaluate marketing spend efficiency, identify margin leakage from product returns, or allocate warehouse inventory to meet localized regional demand. This project addresses these challenges by transforming raw tabular e-commerce data into an interactive decision-support platform.',
      mainObjective:
        'Transform 10,000 orders and 8,000 web session records into a unified 6-page Power BI dashboard that enables commercial leaders to monitor core financial KPIs (£1.98M revenue, £989.4K profit, 49.85% margin), diagnose 4-stage conversion funnels (5.29% conversion, 72.69% cart abandonment), evaluate advertising ROAS, track warehouse fulfillment, and optimize customer lifetime value.',
      howItWorks:
        'Multi-table operational data is extracted from a structured Excel workbook spanning 13 relational sheets and ingested into Power BI via Power Query. A Star Schema data model is established connecting 3 fact tables (Fact_Orders, Fact_Sessions, Fact_Returns) with 8 dimension tables (Dim_Date, Dim_Customer, Dim_Product, Dim_Channel, Dim_Geography, Dim_Warehouse, Dim_ProductTag, Dim_CustomerSegment) and 2 bridge tables. DAX measures compute top-line revenue, gross profit, margin percentages, 4-stage funnel conversion progression, marketing ROAS, and return rates. The resulting 6-page interactive report features synchronized slicers (Fiscal Year, Fiscal Quarter, Region), dual-axis trendlines, 4-quadrant scatter matrices, and fulfillment capacity bars.',
      targetUsers: [
        'E-Commerce Directors & Commercial Business Owners',
        'Performance Marketing Leads & Campaign Strategists',
        'Merchandising & Product Category Managers',
        'Supply Chain & Fulfillment Warehouse Supervisors',
        'Customer Experience & Retention Analysts',
      ],
      highlights: [
        'Consolidation of 10,000 Customer Orders & 8,000 Web Browsing Sessions',
        'Analysis of £1.98M Net Revenue & £989.4K Gross Profit (49.85% Margin)',
        'Full 4-Stage Purchase Funnel Analysis with 5.29% Conversion Rate',
        'Marketing Channel ROAS Evaluation Across 12 Digital & Offline Channels',
        'Warehouse Operations & Returns Analysis (634 Returns across 7 Root Causes)',
        'Customer Segmentation into 10 Behavioral Cohorts via Bridge Tables',
        'Interactive Multi-Dimensional Slicers for Fiscal Year, Quarter & Region',
        '6-Page Responsive Executive Report Documented in High-Resolution PDF',
      ],
    },
    problemStatement: {
      title: 'Fragmented Data Silos, Shopping Funnel Abandonment & Margin Degradation',
      mainProblem:
        'Online retail businesses operate across disjointed digital storefronts, marketing platforms, and logistics warehouses. Customer journey telemetry—from initial session landing to cart addition, checkout progression, payment completion, fulfillment dispatch, and post-purchase returns—is stored across separate systems. This disconnect leaves leadership unable to trace which marketing campaigns deliver profitable orders, why high-intent shoppers abandon carts, or which returned products erode operating margins.',
      existingLimitations: [
        'Disjointed Web Analytics & Sales Ledgers: Web session logs (sessions, bounces, cart adds) exist separately from ERP billing records, preventing precise revenue attribution by traffic source.',
        'Opaque Shopping Funnel Drop-Off: Merchandisers cannot pinpoint whether checkout friction is caused by mobile device incompatibility, browser performance, or unexpected shipping fees.',
        'Blind Campaign Spend Allocation: Advertising budgets are spent across Google Ads, Meta, TikTok, and Bing without real-time Return on Advertising Spend (ROAS) margin tracking.',
        'Uncontrolled Return Margin Erosion: Returns are treated as an isolated customer service task rather than an operational problem tied to product defects, descriptions, or sizing.',
        'Lack of Customer Lifetime Value Cohort Tracking: Repeat buyer trends, cross-category purchasing, and loyalty program tiers are obscured by aggregate order counts.',
      ],
      whyItMatters:
        'In high-velocity digital commerce, real-time intelligence into conversion rates and channel profitability protects operating margins, reduces customer acquisition costs (CAC), guides inventory buffer allocation across regional warehouses, and fosters sustainable customer retention.',
      keyChallenges: [
        {
          title: 'Multi-Fact Star Schema Integration',
          description:
            'Harmonizing three distinct fact tables (Orders, Sessions, Returns) with differing granularities and date keys into a unified data model.',
          iconName: 'Layers',
        },
        {
          title: '4-Stage Conversion Funnel Formulation',
          description:
            'Tracking session progression from Total Sessions (8,000) to Add to Cart (1,549), Checkout (795), and Converted Purchases (423) via DAX.',
          iconName: 'Sliders',
        },
        {
          title: 'Cross-Channel Marketing ROAS Attribution',
          description:
            'Evaluating spend efficiency and Return on Advertising Spend across 12 distinct platforms combining paid, organic, email, and offline channels.',
          iconName: 'TrendingUp',
        },
        {
          title: 'Many-to-Many Bridge Table Normalization',
          description:
            'Accurately mapping multiple product tags and dynamic customer segments to order transactions without double-counting revenue.',
          iconName: 'Database',
        },
      ],
    },
    solution: {
      title: 'End-to-End E-Commerce Business Intelligence Architecture Powered by Microsoft Power BI',
      approach:
        'A robust multi-fact star schema model built in Power BI Desktop that bridges web session events, order transactions, and return records with shared calendar, customer, product, geography, and warehouse dimensions.',
      technicalSolution:
        'Engineered in Power BI Desktop utilizing an Excel source workbook with 13 relational sheets. Constructed a star schema comprising Fact_Orders (10,000 rows), Fact_Sessions (8,000 rows), and Fact_Returns (634 rows) linked to 8 dimension tables and 2 bridge tables. Authored DAX measures for Total Revenue (£1.98M), Gross Profit (£989.4K), Gross Margin % (49.85%), Total Orders (10K), Conversion Rate (5.29%), Average Order Value (£198.48), Bounce Rate (40.02%), Cart Abandonment Rate (72.69%), and ROAS. Designed 6 analytical pages: Executive Overview, Conversion Funnel Analytics, Sales & Profitability, Marketing Analytics, Operations & Returns, and Customer & Product Intelligence, with interactive slicers filtering by Fiscal Year, Fiscal Quarter, and Region.',
      implementationOverview:
        'Extracted and validated 13 relational tables from Excel, established schema cardinalities and active/inactive relationships, formulated DAX measures using CALCULATE, USERELATIONSHIP, DIVIDE, and SWITCH, designed interactive visualizations with custom tooltips, published 6-page PDF documentation, and recorded a complete demonstration walkthrough.',
      howItSolves: [
        'Unifies £1.98M in net revenue and £989.4K in gross profit across 10,000 orders into real-time executive KPI cards',
        'Visualizes the 4-stage shopping funnel, revealing a 5.29% overall conversion rate and 72.69% cart abandonment rate to prioritize checkout optimizations',
        'Evaluates ROAS across paid marketing channels (Google Ads, Bing, Meta Ads, TikTok) alongside high-margin organic search and email campaigns',
        'Pinpoints London (£705K revenue) and North West (£415K revenue) as primary regional demand centers',
        'Isolates Electronics (21 products) and Fashion (19 products) as leading revenue contributors while analyzing margin variations',
        'Analyzes 634 customer returns, identifying "Changed mind" (26.8%) and "Faulty product" (17.7%) as the dominant return drivers',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Activity',
        title: 'Executive Financial & Order Telemetry',
        description:
          'Real-time KPI cards tracking £1.98M Net Revenue, £989.4K Gross Profit, 49.85% Gross Margin, 10K Total Orders, 5.29% Conversion Rate, and £198.48 Average Order Value.',
      },
      {
        iconName: 'Sliders',
        title: '4-Stage Purchase Conversion Funnel',
        description:
          'Step-by-step visitor progression tracking Total Sessions (8,000) → Added to Cart (1,549) → Reached Checkout (795) → Converted Sessions (423), isolating a 72.69% cart abandonment rate.',
      },
      {
        iconName: 'TrendingUp',
        title: 'Sales & Product Profitability Ranking',
        description:
          'Multi-dimensional product performance ranking evaluating revenue, gross margin percentage, order volume, and time-series trends by Order Date and Shipped Date.',
      },
      {
        iconName: 'PieChart',
        title: 'Multi-Channel Marketing ROAS Attribution',
        description:
          'Comprehensive marketing spend and Return on Advertising Spend (ROAS) analysis across 12 acquisition channels with a 4-quadrant Revenue vs Margin scatter matrix.',
      },
      {
        iconName: 'Truck',
        title: 'Warehouse Operations & Return Root-Cause Pareto',
        description:
          'Logistics fulfillment monitoring across 5 UK distribution hubs and root-cause return categorization analyzing 634 return requests across 7 failure reasons.',
      },
      {
        iconName: 'Users',
        title: 'Customer Segmentation & Lifetime Value Intelligence',
        description:
          'Cohort segmentation classifying 500 customers into 10 behavioral groups (High Value, Regular Buyer, Deal Seeker, Lapsed) tracking CLV, spend, and repeat purchase rates.',
      },
    ],
    architecture: {
      description:
        'The platform follows an enterprise business intelligence architecture: multi-table extraction from structured Excel workbooks, relational schema mapping and data typing in Power Query M, multi-fact star schema modeling with bridge tables in Power BI Desktop, DAX calculation formulation, and responsive 6-page interactive reporting.',
      frontend:
        'Interactive Microsoft Power BI Desktop reporting interface with 6 dedicated analytical pages, cross-filtering slicers (Fiscal Year, Fiscal Quarter, Region), funnel charts, 4-quadrant scatter plots, and drill-through tables.',
      backend:
        'Power BI In-Memory Tabular Model (VertiPaq engine) evaluating optimized DAX measures and executing instantaneous cross-filtering queries across 18,000+ total fact records.',
      database:
        'Relational star schema containing 3 fact tables (Fact_Orders: 10K rows, Fact_Sessions: 8K rows, Fact_Returns: 634 rows), 8 dimension tables (Dim_Date, Dim_Customer, Dim_Product, Dim_Channel, Dim_Geography, Dim_Warehouse, Dim_ProductTag, Dim_CustomerSegment), and 2 bridge tables.',
      workflow: [
        'Data Extraction: Extracting 13 relational tables from source Excel workbook into Power BI via Power Query',
        'Data Harmonization: Enforcing clean data types, primary key integrity, and handling inactive relationship paths (e.g., ShippedDate vs OrderDate)',
        'Star Schema Modeling: Constructing 1-to-many relationships connecting fact tables with dimension tables and configuring bridge tables for product tags and customer segments',
        'DAX Calculation Formulation: Authoring measures for Net Revenue, Gross Profit, Gross Margin %, Conversion Rate, Bounce Rate, Cart Abandonment, and ROAS',
        'Executive Dashboard Design: Assembling 6 analytical pages with standardized layout, consistent color hierarchies, and multi-row KPI cards',
        'Interactive Filter Engineering: Integrating Fiscal Year, Fiscal Quarter, and Region slicers with bidirectional cross-filtering across visuals',
        'Insight Validation & Documentation: Exporting the full 6-page dashboard report to PDF and recording an end-to-end interactive video demonstration',
      ],
    },
    techStack: [
      'Power BI',
      'DAX',
      'Power Query',
      'Data Modeling',
      'Excel',
      'Data Visualization',
    ],
    techStackGrouped: [
      {
        category: 'Business Intelligence & Reporting',
        items: [
          { name: 'Microsoft Power BI Desktop', role: '6-page interactive executive analytics dashboard', iconName: 'BarChart3' },
          { name: 'Interactive Dashboards', role: 'Synchronized cross-filtering, drill-through, and tooltips', iconName: 'Layout' },
          { name: 'Data Visualization', role: 'Funnels, 4-quadrant scatter plots, combo charts, and donut visuals', iconName: 'PieChart' },
        ],
      },
      {
        category: 'Analytical Modeling & Calculations',
        items: [
          { name: 'DAX (Data Analysis Expressions)', role: 'CALCULATE, USERELATIONSHIP, DIVIDE, SWITCH, and TOTALYTD measures', iconName: 'Calculator' },
          { name: 'Star Schema Modeling', role: 'Multi-fact architecture linking Orders, Sessions, and Returns to dimensions', iconName: 'Layers' },
          { name: 'Time Intelligence Functions', role: 'Fiscal year-to-date, quarter-over-quarter, and monthly trend analysis', iconName: 'Calendar' },
        ],
      },
      {
        category: 'Data Preparation & ETL',
        items: [
          { name: 'Power Query (M Language)', role: 'Data transformation, type coercion, and relationship normalization', iconName: 'Workflow' },
          { name: 'Bridge Table Modeling', role: 'Resolving many-to-many relationships for product tags and customer segments', iconName: 'Database' },
          { name: 'Data Cleaning & Validation', role: 'Audit of missing values, duplicate records, and foreign key constraints', iconName: 'CheckSquare' },
        ],
      },
      {
        category: 'Data Source & Documentation',
        items: [
          { name: 'Microsoft Excel', role: '13-sheet relational workbook storing 18,000+ total rows', iconName: 'FileSpreadsheet' },
          { name: 'Interactive 6-Page PDF', role: 'High-resolution publication report documenting all dashboard pages', iconName: 'FileText' },
          { name: 'MP4 Demonstration Video', role: 'Recorded video walkthrough of interactive features and drill-downs', iconName: 'Play' },
        ],
      },
    ],
    applicationScreenshots: [
      {
        image: '/projects/ecommerce-conversion-analysis/gallery/overview.png',
        title: 'Executive Overview Dashboard',
        description:
          'Executive performance layout featuring 6 core KPIs (£1.98M Revenue, £989.4K Profit, 49.85% Margin, 10K Orders, 5.29% Conversion, £198.48 AOV), monthly revenue trends, regional contribution, and product margin combo charts.',
        badge: 'Executive Suite',
      },
      {
        image: '/projects/ecommerce-conversion-analysis/gallery/sales-profitability.png',
        title: 'Sales & Profitability Dashboard',
        description:
          'Comprehensive financial analytics tracking revenue by Order Date and Shipped Date, fiscal quarterly trends, cumulative YTD revenue, and granular product performance rankings.',
        badge: 'Financial & Product',
      },
      {
        image: '/projects/ecommerce-conversion-analysis/gallery/marketing-analytics.png',
        title: 'Marketing Analytics Dashboard',
        description:
          'Cross-channel acquisition analytics monitoring marketing spend, Return on Advertising Spend (ROAS) across paid search and paid social channels, and a 4-quadrant Revenue vs Gross Margin scatter matrix.',
        badge: 'Marketing & ROAS',
      },
    ],
    gallery: [
      {
        url: '/projects/ecommerce-conversion-analysis/gallery/overview.png',
        caption:
          'Executive Overview Dashboard: High-level executive telemetry tracking top KPIs, seasonal revenue trends, regional geographic performance, and product category contributions.',
        alt: 'E-Commerce Conversion Analytics Executive Overview Dashboard',
      },
      {
        url: '/projects/ecommerce-conversion-analysis/gallery/sales-profitability.png',
        caption:
          'Sales & Profitability Dashboard: In-depth financial analysis comparing order date vs shipped date revenue, fiscal quarterly performance, and ranked product margins.',
        alt: 'E-Commerce Conversion Analytics Sales and Profitability Dashboard',
      },
      {
        url: '/projects/ecommerce-conversion-analysis/gallery/marketing-analytics.png',
        caption:
          'Marketing Analytics Dashboard: Marketing spend evaluation, channel ROAS benchmarking, and 4-quadrant product category revenue vs gross margin scatter visualization.',
        alt: 'E-Commerce Conversion Analytics Marketing Analytics Dashboard',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'E-Commerce Domain Auditing & Data Extraction',
        description:
          'Audited multi-channel e-commerce business operations. Structured 13 relational sheets in Microsoft Excel encompassing 10,000 orders, 8,000 web sessions, and 634 return records.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Multi-Fact Star Schema & Power Query ETL',
        description:
          'Engineered a star schema in Power BI Desktop connecting 3 fact tables (Fact_Orders, Fact_Sessions, Fact_Returns) to 8 dimension tables and 2 bridge tables for many-to-many relationships.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'DAX Business Measure & Funnel Formulation',
        description:
          'Authored core DAX measures computing Net Revenue (£1.98M), Gross Profit (£989.4K), 49.85% Gross Margin, 4-stage funnel conversion (5.29%), 72.69% cart abandonment, and ROAS.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: '6-Page Interactive Dashboard Design',
        description:
          'Designed 6 cohesive pages: Executive Overview, Conversion Funnel Analytics, Sales & Profitability, Marketing Analytics, Operations & Returns, and Customer & Product Intelligence with synchronized slicers.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Documentation Publishing, PDF Generation & Walkthrough',
        description:
          'Exported the 6-page Power BI dashboard to a high-resolution PDF publication report, recorded a comprehensive demonstration video, and authored the portfolio case study.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S.',
        role: 'Lead Business Intelligence Developer & E-Commerce Data Analyst',
        image: '/images/team/sreeram.jpg',
        responsibilities: [
          'End-to-end design, data modeling, and visual dashboard engineering of the E-Commerce Conversion & Sales Analytics platform',
          'Structured multi-fact star schema linking 10,000 orders, 8,000 sessions, and 634 returns to 8 dimensions and 2 bridge tables',
          'Authored DAX business measures for revenue, gross margin, funnel conversion progression, ROAS, and customer lifetime value',
          'Designed 6 cohesive report pages with synchronized Fiscal Year, Fiscal Quarter, and Region slicers',
          'Produced the 6-page high-resolution project documentation PDF and recorded demonstration video walkthrough',
        ],
        technicalContributions: [
          'Engineered multi-fact star schema optimizing analytical query performance across 18,000+ total transactional records',
          'Implemented DAX USERELATIONSHIP() to analyze revenue by Shipped Date alongside primary Order Date relationships',
          'Constructed 4-stage shopping funnel tracking sessions through cart additions and checkout to final purchase',
          'Formulated ROAS measures across 12 acquisition channels and designed a 4-quadrant product margin scatter matrix',
        ],
        technologiesHandled: [
          'Microsoft Power BI',
          'DAX (Data Analysis Expressions)',
          'Power Query (M Language)',
          'Star Schema Modeling',
          'Microsoft Excel',
          'E-Commerce Analytics',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Multi-Fact Modeling with Divergent Granularities',
        explanation:
          'Web sessions (8,000 rows) operate at a session-event granularity, customer orders (10,000 rows) operate at an order-line transaction level, and returns (634 rows) occur asynchronously days or weeks post-purchase. Modeling them in a single flat table would cause extreme duplication and calculation distortion.',
        solution:
          'Architected a multi-fact star schema with three dedicated fact tables (Fact_Orders, Fact_Sessions, Fact_Returns) linked to shared conformed dimensions (Dim_Date, Dim_Customer, Dim_Product, Dim_Geography, Dim_Warehouse).',
        implementationApproach:
          'Configured clean 1-to-many relationships and leveraged DAX CALCULATE() and FILTER() context transitions to analyze metrics across facts without data cross-contamination.',
      },
      {
        challenge: 'Inactive Date Relationship Switching via DAX USERELATIONSHIP()',
        explanation:
          'Orders contain multiple operational dates (OrderDate and ShippedDate) that both link to Dim_Date. Only one relationship can be active at a time, making it difficult to analyze fulfillment velocity and revenue recognized upon shipment.',
        solution:
          'Kept the OrderDate-to-DateTable relationship active as default, and authored specialized DAX measures utilizing USERELATIONSHIP() for shipped revenue analysis.',
        implementationApproach:
          'Formulated [Shipped Revenue] = CALCULATE([Total Revenue], USERELATIONSHIP(Fact_Orders[ShippedDateID], Dim_Date[DateKey])) to power the Shipped Date timeline on Page 3.',
      },
      {
        challenge: 'Cross-Channel Marketing ROAS Attribution Across Paid and Organic Touchpoints',
        explanation:
          'Marketing channels range from direct paid spend (Google Ads, Meta, TikTok, Bing) with known monthly spend figures to zero-direct-cost channels (SEO, Direct, Organic Social). Computing ROAS uniformly required handling zero-spend denominators safely.',
        solution:
          'Formulated robust DAX measures using DIVIDE() with alternate fallback values: [ROAS] = DIVIDE([Attributed Revenue], [Marketing Spend], BLANK()).',
        implementationApproach:
          'Created separated clustered bar charts on Page 4 isolating Paid Marketing Channels (Google Ads, Meta Ads, TikTok, Bing) alongside channel-wide revenue contributions.',
      },
      {
        challenge: 'Many-to-Many Bridge Table Normalization for Product Tags and Customer Segments',
        explanation:
          'Individual products can carry multiple marketing tags (e.g., "Bestseller", "Eco-Friendly", "Discounted"), and customers can belong to multiple behavioral segments (e.g., "High Value" and "Brand Advocate"). A standard direct join causes cartesian product expansion.',
        solution:
          'Implemented two normalized bridge tables (Bridge_ProductTag and Bridge_CustomerSegment) with bidirectional cross-filtering enabled in the Power BI relationship editor.',
        implementationApproach:
          'Enabled seamless category filtering on Page 6 where selecting a tag dynamically filters attributed revenue without double-counting underlying order totals.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'End-to-end ingestion and modeling of 10,000 orders, 8,000 web sessions, and 634 return records across 13 relational sheets',
        'Executive financial KPI tracking verifying £1.98M Net Revenue, £989.4K Gross Profit, and 49.85% Gross Margin',
        '4-stage digital shopping funnel tracking 8,000 sessions through to 423 converted purchases with 5.29% conversion rate',
        'Multi-channel marketing ROAS evaluation across 12 digital acquisition platforms and 4-quadrant margin scatter matrix',
        'Logistics fulfillment monitoring across 5 UK warehouses and Pareto analysis of 634 customer returns across 7 failure categories',
        'Customer behavioral segmentation into 10 cohorts tracking customer lifetime value, spend per customer, and repeat rates',
        'Interactive filtering via Fiscal Year, Fiscal Quarter, and Region slicers with responsive visual cross-filtering',
        'Official 6-page high-resolution executive PDF report and complete demonstration video walkthrough',
      ],
      technicalAchievements: [
        'Engineered a scalable multi-fact Star Schema data model in Power BI Desktop with conformed dimensions',
        'Resolved many-to-many relationship challenges using normalized bridge tables for product tags and customer segments',
        'Authored optimized DAX measures utilizing CALCULATE, USERELATIONSHIP, DIVIDE, SWITCH, and TOTALYTD',
        'Published a 6-page publication-quality PDF report documenting all dashboard pages, visual layouts, and KPIs',
        'Recorded a high-definition video walkthrough showcasing interactive slicers and drill-throughs',
      ],
      demonstratedCapabilities: [
        'Enterprise Business Intelligence Architecture (Microsoft Power BI Desktop & Power Query)',
        'Multi-Fact Relational Data Modeling & Bridge Table Normalization',
        'Advanced DAX Formulation & Inactive Relationship Time-Intelligence',
        'E-Commerce Funnel Optimization & Behavioral Customer Segmentation',
        'Marketing Attribution & Logistics Fulfillment Analytics',
      ],
      verifiedMetrics: [
        'Total Net Revenue: £1,984,788.10 (£1.98M)',
        'Total Gross Profit: £989,448.98 (£989.4K)',
        'Gross Profit Margin: 49.85%',
        'Total Orders Processed: 10,000 (10K Orders)',
        'Overall Conversion Rate: 5.29% (423 Converted / 8,000 Sessions)',
        'Average Order Value (AOV): £198.48',
        'Total Web Sessions: 8,000 (8K Sessions)',
        'Cart Abandonment Rate: 72.69% (1,549 Cart Adds vs 423 Purchases)',
        'Total Returns Recorded: 634 (6.34% Return Rate)',
        'Unique Customer Accounts: 500 Customers',
        'Monitored Product Catalog: 120 Products across 13 Categories',
        'Active UK Fulfillment Hubs: 5 Regional Distribution Warehouses',
      ],
    },
    disclaimer:
      'All customer transaction records, web sessions, product catalogs, and warehouse locations were modeled using representative e-commerce operational data to simulate enterprise retail analytics conditions.',
  },

  // 8. Transmission of Data Between ESPs and Displaying Them in Dashboard - Completed
  'esp-data-transmission': {
    id: 'esp-data-transmission',
    slug: 'esp-data-transmission',
    title: 'Transmission of Data Between ESPs and Displaying Them in Dashboard',
    shortTitle: 'ESP Data Transmission & IoT Dashboard',
    subtitle:
      'Multi-node environmental telemetry system gathering sensor data across distributed ESP32 nodes and relaying metrics to ThingSpeak cloud and a live web dashboard.',
    category: 'IoT & Embedded Systems',
    domain: 'IoT & Embedded Systems',
    domains: ['IoT & Embedded Systems', 'Web Development'],
    status: 'Completed',
    shortDescription:
      'Distributed multi-node IoT environmental monitoring architecture gathering real-time microclimate metrics across ESP32 microcontrollers, bridging data to ThingSpeak cloud channels, and visualizing telemetry on an active web dashboard with automated node health monitoring.',
    assetFolderPath: '/projects/esp-data-transmission/',
    coverImage: '/projects/esp-data-transmission/cover.png',
    overview: {
      introduction:
        'Transmission of Data Between ESPs and Displaying Them in Dashboard is an academic Internet of Things (IoT) and embedded systems engineering project designed to capture, transmit, cloud-synchronize, and visualize distributed ambient environmental data. Utilizing four Espressif ESP32 microcontrollers—three deployed as remote sensor nodes and one acting as a central gateway coordinator—the system samples ambient temperature and relative humidity using precision digital sensors and transmits telemetry across a wireless star-topology network.',
      purpose:
        'Developed to explore robust multi-node wireless telemetry relaying, overcoming single-point sensor limitations and demonstrating reliable edge-to-cloud data bridging. The project connects localized microcontroller nodes to the ThingSpeak IoT analytics platform and presents live metrics on an interactive, self-updating web dashboard equipped with automated node health detection.',
      mainObjective:
        'Establish an end-to-end hardware-to-cloud pipeline that coordinates multiple ESP32 nodes, reads environmental metrics via dedicated GPIO pins, prevents cloud write-rate bottlenecks through central gateway aggregation, and provides real-time web monitoring with an automated 5-minute inactivity heartbeat rule.',
      howItWorks:
        'Each remote ESP32 node continuously measures ambient temperature (°C) and relative humidity (%) through a DHT22 digital sensor interfaced on GPIO 4. The nodes wirelessly transmit their data packets to a central ESP32 Gateway Node. The gateway validates and collates all incoming node streams, issuing authenticated HTTP REST API updates to ThingSpeak Cloud Channel "Esp" across 6 distinct fields (Fields 1 to 6). A custom web dashboard polls the ThingSpeak feeds every 20 seconds, displaying real-time dual-metric cards for each node and dynamically raising an amber Offline alert whenever a node fails to report within a 5-minute threshold.',
      targetUsers: [
        'IoT & Embedded Systems Engineers',
        'Academic Researchers in Wireless Sensor Networks',
        'Smart Agriculture & Greenhouse Operators',
        'Industrial Climate & Warehouse Facility Managers',
      ],
      highlights: [
        '4-Microcontroller Network (3 Sensor Nodes + 1 Central Gateway Node)',
        'DHT22 Precision Digital Temperature & Humidity Sensing on GPIO 4',
        'Centralized Gateway Aggregator with ThingSpeak Cloud Integration',
        '6 Distinct Cloud Telemetry Fields on ThingSpeak Channel "Esp"',
        'Self-Updating Web Dashboard with 20-Second Polling Cycle',
        'Automated 5-Minute Node Inactivity Heartbeat Detection Engine',
      ],
    },
    problemStatement: {
      title: 'Challenges in Distributed Multi-Node Wireless Telemetry',
      mainProblem:
        'Monitoring distributed physical environments—such as agricultural zones, warehouses, or multi-room facilities—presents significant communication and synchronization hurdles when deploying independent sensor units without a unified coordination architecture.',
      existingLimitations: [
        'Direct cloud connectivity from every individual sensor node drastically increases Wi-Fi power consumption and network overhead.',
        'Standard Wi-Fi router coverage limitations leave peripheral sensor nodes isolated in dead zones without direct internet access.',
        'ThingSpeak cloud ingestion enforces rate-limiting (minimum 15-second write intervals on public channels), causing dropped packets when multiple nodes broadcast concurrently.',
        'Lack of centralized node heartbeat monitoring makes it difficult to detect hardware failures, power dropouts, or out-of-range sensor units in real time.',
        'Sensor jitter and electrical noise during 1-wire digital bus reads can cause erroneous microclimate spikes if not properly conditioned in firmware.',
      ],
      whyItMatters:
        'In industrial and environmental monitoring, silent sensor dropouts and corrupted telemetry feeds lead to unmonitored microclimate variations, delayed hazard responses, and flawed analytical models.',
      keyChallenges: [
        {
          title: 'Cloud Rate Limiting & Throttling',
          description:
            'Free-tier IoT cloud platforms enforce a 15-second write interval per channel, rejecting concurrent multi-node HTTP requests.',
          iconName: 'Cloud',
        },
        {
          title: 'Inter-Node Wireless Contention',
          description:
            'Multiple edge transmitters broadcasting simultaneously on the 2.4 GHz spectrum risk packet collisions at the receiving gateway.',
          iconName: 'Radio',
        },
        {
          title: 'Silent Edge Sensor Dropouts',
          description:
            'Remote battery-operated or field-deployed microcontrollers can fail or lose signal silently without automated heartbeat detection.',
          iconName: 'AlertTriangle',
        },
      ],
    },
    solution: {
      title: 'Hierarchical Edge-to-Cloud Wireless Telemetry System',
      approach:
        'A two-tier IoT telemetry architecture combining a 3-node wireless sensor mesh with a central ESP32 gateway that aggregates environmental data, performs cloud uploads to ThingSpeak, and feeds a real-time web dashboard.',
      technicalSolution:
        'Engineered three dedicated ESP32 sensor nodes interfaced with DHT22 temperature and humidity sensors via digital GPIO 4. Each node wirelessly broadcasts structured data payloads to a designated ESP32 Gateway Node. The gateway buffers and serializes the multi-node readings into an authenticated HTTP REST payload targeting ThingSpeak Cloud Channel "Esp" across 6 distinct fields (Fields 1–6). A custom web dashboard continuously queries the cloud API on a 20-second polling cycle, featuring an automated 5-minute heartbeat monitor that flags unresponsive nodes as Offline.',
      implementationOverview:
        'The embedded firmware is written in C/C++ on the ESP32 platform, utilizing the single-bus DHT22 protocol on GPIO 4 for microsecond-precise timing. The gateway manages packet validation and scheduled cloud dispatching to respect ThingSpeak rate boundaries. The frontend monitoring client is engineered with HTML5, CSS3, and JavaScript, rendering clean metric cards, real-time status badges, and polling timestamps.',
      howItSolves: [
        'Centralizes cloud communication through a single gateway, conserving power and bandwidth on remote sensor nodes',
        'Partitions environmental telemetry cleanly across 6 dedicated ThingSpeak fields for independent time-series analysis',
        'Eliminates rate-limit throttling by staging and synchronizing multi-node data transfers through the gateway coordinator',
        'Implements an automated 5-minute node heartbeat monitor that visually alerts operators when an edge sensor goes offline',
        'Provides a responsive, lightweight web dashboard that automatically refreshes every 20 seconds without requiring page reloads',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Radio',
        title: '3-Node Wireless Telemetry',
        description:
          'Three distributed ESP32 sensor nodes independently gather and wirelessly stream localized environmental metrics.',
      },
      {
        iconName: 'Cpu',
        title: 'DHT22 Digital Sensing (GPIO 4)',
        description:
          'Calibrated digital temperature and relative humidity sensing interfaced via dedicated GPIO 4 pins across all sensor nodes.',
      },
      {
        iconName: 'Workflow',
        title: 'Central Gateway Aggregator',
        description:
          'A fourth ESP32 serves as a centralized aggregator bridge, parsing incoming node payloads and managing cloud uplink.',
      },
      {
        iconName: 'Cloud',
        title: '6-Field ThingSpeak Cloud Channel',
        description:
          'Channel "Esp" logs temperature and humidity streams into Fields 1 through 6 with persistent historical tracking.',
      },
      {
        iconName: 'Layout',
        title: 'Real-Time Web Dashboard',
        description:
          'Lightweight, modern dashboard presenting live node cards, current readings, and verified last-check timestamps.',
      },
      {
        iconName: 'Activity',
        title: '5-Minute Offline Heartbeat Engine',
        description:
          'Automatic health-check algorithm that detects stale data timestamps and flags inactive nodes as Offline.',
      },
    ],
    architecture: {
      diagramImage: '/projects/esp-data-transmission/node-connection-diagram.jpeg',
      description:
        'The system implements a hierarchical IoT star architecture. Three distributed sensor nodes (ESP32 + DHT22 on GPIO 4) capture microclimate metrics and transmit telemetry wirelessly to a central ESP32 Gateway. The Gateway conditions the data and issues authenticated REST API calls to the ThingSpeak IoT cloud, which stores 6 time-series data fields. A lightweight web dashboard polls ThingSpeak every 20 seconds to display real-time sensor metrics and track node availability.',
      frontend:
        'Responsive Web Dashboard built with HTML5, CSS3, and JavaScript; queries ThingSpeak REST API on a 20-second interval with dynamic DOM rendering and automated 5-minute node health detection.',
      backend:
        'Embedded C/C++ firmware running on ESP32-WROOM-32 microcontrollers; implements DHT22 1-wire communication on GPIO 4, packet serialization, wireless transmission, and HTTP REST cloud forwarding.',
      database:
        'ThingSpeak IoT Cloud Channel ("Esp") with persistent time-series storage partitioned across 6 data fields (Node 1 Temp/Hum: Fields 1-2, Node 2 Temp/Hum: Fields 3-4, Node 3 Temp/Hum: Fields 5-6).',
      apis: [
        'ThingSpeak Update Channel Feed (GET/POST /update?api_key=...&field1=...&field2=...)',
        'ThingSpeak Get Channel Feed (GET /channels/CHANNEL_ID/feeds.json?results=1)',
        'Inter-Device Wireless Packet Protocol (Sensor payload serialization & CRC verification)',
      ],
      hardwareSensors: [
        'ESP32 Node 1: ESP32-WROOM-32 Dual-Core 240MHz MCU with 2.4GHz Wi-Fi',
        'ESP32 Node 2: ESP32-WROOM-32 Dual-Core 240MHz MCU with 2.4GHz Wi-Fi',
        'ESP32 Node 3: ESP32-WROOM-32 Dual-Core 240MHz MCU with 2.4GHz Wi-Fi',
        'Gateway Node: ESP32-WROOM-32 Cloud Aggregator and Wi-Fi Uplink Coordinator',
        'Sensors 1–3: 3x DHT22 Digital Temperature (-40 to 80°C ±0.5°C) & Humidity (0-100% RH ±2%)',
        'Pin Configuration: DHT22 VCC -> 3V3, DATA -> GPIO 4, GND -> Common Ground across all 3 nodes',
      ],
      workflow: [
        '1. Sensor Data Acquisition: Nodes 1, 2, and 3 read ambient temperature and humidity via GPIO 4 every collection cycle.',
        '2. Wireless Packet Transmission: Sensor nodes format and transmit telemetry packets wirelessly to the Central ESP32 Gateway.',
        '3. Gateway Ingestion & Parsing: Gateway receives payloads, validates data integrity, and serializes all 6 metrics.',
        '4. ThingSpeak Cloud Push: Gateway sends HTTP REST updates to ThingSpeak Channel "Esp", populating Fields 1 through 6.',
        '5. Web Dashboard Polling: The dashboard client queries ThingSpeak feeds every 20 seconds to refresh UI cards.',
        '6. Heartbeat Status Evaluation: Dashboard evaluates the last seen timestamp; if > 5 minutes, node status flips to Offline.',
      ],
    },
    techStack: [
      'ESP32',
      'DHT22 Sensor',
      'C/C++',
      'ThingSpeak Cloud',
      'REST API',
      'JavaScript',
      'HTML5/CSS3',
      'IoT Protocols',
    ],
    techStackGrouped: [
      {
        category: 'Hardware & Microcontrollers',
        items: [
          { name: 'ESP32-WROOM-32', role: 'Dual-Core 240MHz 32-bit Wi-Fi MCU', iconName: 'Cpu' },
          { name: 'DHT22 (AM2302)', role: 'Precision Digital Temperature & Humidity Sensor', iconName: 'Radio' },
          { name: 'GPIO Digital Bus', role: '1-Wire Digital Communication Interface (GPIO 4)', iconName: 'Cpu' },
        ],
      },
      {
        category: 'Wireless & Embedded Firmware',
        items: [
          { name: 'C / C++', role: 'Low-level embedded microcontroller firmware', iconName: 'Code' },
          { name: 'Arduino Core / ESP-IDF', role: 'Hardware abstraction layer & sensor drivers', iconName: 'Layers' },
          { name: 'Inter-ESP Wireless', role: 'Point-to-multipoint star wireless communication', iconName: 'Wifi' },
        ],
      },
      {
        category: 'IoT Cloud & APIs',
        items: [
          { name: 'ThingSpeak IoT Platform', role: 'Time-series cloud analytics & telemetry channel hosting', iconName: 'Cloud' },
          { name: 'HTTP REST API', role: 'Channel feed read/write endpoints and JSON payloads', iconName: 'Globe' },
        ],
      },
      {
        category: 'Web Dashboard & Visualization',
        items: [
          { name: 'Modern JavaScript (ES6+)', role: 'Asynchronous REST polling and dynamic DOM updates', iconName: 'Code' },
          { name: 'HTML5 & CSS3', role: 'Responsive multi-card telemetry monitoring interface', iconName: 'Layout' },
          { name: 'Node Heartbeat Engine', role: 'Client-side 5-minute inactivity detection algorithm', iconName: 'Activity' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/esp-data-transmission/node-connection-diagram.jpeg',
        caption:
          'Hardware Circuit Connection Diagram: Three ESP32 sensor nodes interfaced with DHT22 sensors on GPIO 4 transmitting wirelessly to the central ESP32 Gateway.',
        alt: 'Hardware Circuit Connection Diagram',
      },
      {
        url: '/projects/esp-data-transmission/gallery/esp-dashboard.png',
        caption:
          'Custom Web Monitoring Dashboard: Real-time telemetry cards (Node 1: 25.1°C / 64.3%, Node 2: 26.4°C / 53.8%), 20-second polling cycle, and Node 3 Offline alert (5 min timeout).',
        alt: 'Live Web Monitoring Dashboard',
      },
      {
        url: '/projects/esp-data-transmission/gallery/thingspeak-1.png',
        caption:
          'ThingSpeak IoT Cloud Channel "Esp" (Fields 1 to 4): Live time-series charts for Temperature1, Humidity1, Temperature2, and Humidity2.',
        alt: 'ThingSpeak Cloud Channel Feeds 1-4',
      },
      {
        url: '/projects/esp-data-transmission/gallery/thingspeak-2.png',
        caption:
          'ThingSpeak IoT Cloud Channel "Esp" (Fields 5 & 6): Live time-series charts for Temperature3 and Humidity3 with persistent data logging.',
        alt: 'ThingSpeak Cloud Channel Feeds 5-6',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Hardware Prototyping & Sensor Wiring',
        description:
          'Configured four ESP32-WROOM-32 microcontrollers on breadboards. Wired DHT22 digital sensors to GPIO 4 with proper pull-up resistors and power rail decoupling across Nodes 1, 2, and 3.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Embedded Firmware & Wireless Messaging',
        description:
          'Authored C/C++ firmware using the Arduino framework to read DHT22 digital metrics, handle timing intervals, and wirelessly relay structured telemetry packets to the central ESP32 Gateway.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Gateway Ingestion & ThingSpeak Cloud Bridge',
        description:
          'Programmed the central gateway to receive multi-node packets, validate checksums, and serialize readings into authenticated HTTP GET/POST requests targeting ThingSpeak Channel "Esp" Fields 1 through 6.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Web Dashboard Development & Heartbeat Verification',
        description:
          'Constructed the lightweight web dashboard with asynchronous 20-second API polling, dynamic metric card rendering, and built-in 5-minute inactivity threshold flagging offline nodes.',
        status: 'Completed',
      },
    ],
    challenges: [
      {
        challenge: 'Channel Rate Limiting on Free IoT Cloud Tiers',
        explanation:
          'ThingSpeak enforces a strict 15-second write limit on public channels. Directly uploading from 3 separate nodes would trigger 429 Too Many Requests errors and lost data.',
        solution:
          'Centralized all uploads through the single Gateway Node. The gateway buffers node telemetry and serializes readings into unified multi-field HTTP transactions, guaranteeing 100% cloud acceptance within rate boundaries.',
      },
      {
        challenge: 'Multi-Node Wireless Packet Collisions at the Gateway',
        explanation:
          'When multiple edge nodes broadcast telemetry simultaneously on the 2.4 GHz spectrum, RF packet collisions can occur at the gateway receiver.',
        solution:
          'Implemented staggered sensor sampling intervals and small randomized backoff delays on each sensor node, ensuring collision-free gateway packet reception.',
      },
      {
        challenge: 'Silent Edge Node Failures in Distributed Environments',
        explanation:
          'Sensor nodes deployed across distant locations may experience battery depletion or hardware failure without actively signaling distress.',
        solution:
          'Developed an automated heartbeat detection algorithm in the web dashboard that computes elapsed time since last seen. Any node exceeding 5 minutes without a fresh update is immediately highlighted with an amber Offline status.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        '3-Node wireless microclimate sensor telemetry acquisition',
        'Centralized ESP32 gateway reception and packet aggregation',
        'ThingSpeak IoT cloud integration with 6 dedicated data fields',
        'Live responsive web monitoring dashboard with 20s polling cycle',
        'Automated 5-minute inactivity heartbeat detection engine',
        'Real-time ambient temperature and humidity metric card rendering',
      ],
      technicalAchievements: [
        'Zero-packet-loss inter-microcontroller wireless messaging',
        'Elimination of cloud rate-limiting drops through scheduled batch gateway dispatching',
        'Sub-second DOM updates on client browser during 20s polling cycles',
        '100% accurate node fault detection via client-side timestamp comparison',
        'Single-pin digital bus protocol implementation on GPIO 4 with microsecond accuracy',
        'Zero ongoing cloud hosting infrastructure costs using free-tier ThingSpeak channels',
      ],
      testingResults: [
        'Verified multi-hour continuous telemetry streaming across all 3 nodes',
        'Confirmed ThingSpeak channel ingestion across Fields 1 through 6 without 429 rate errors',
        'Successfully triggered amber Offline badge when Node 3 exceeded 5 minutes without telemetry',
        'Consistent sensor readings: Node 1 at 25.1°C / 64.3%, Node 2 at 26.4°C / 53.8%',
      ],
      demonstratedCapabilities: [
        'Embedded Systems Engineering & Microcontroller Firmware (C/C++)',
        'Wireless Sensor Network (WSN) Architecture & Star Topology',
        'IoT Cloud Integration & RESTful API Communication',
        'Frontend Web Development (HTML5, CSS3, Asynchronous JavaScript)',
        'Fault Tolerance & Device Heartbeat Monitoring',
      ],
    },
    links: {
      github:
        'https://github.com/k-raghu24/Transmission-of-data-between-ESP-s-and-displaying-them-in-Dashboard.git',
      githubLabel: 'View Source Code',
    },
  },

  // 9. AI Skills vs Job Risk Dashboard - Completed
  'ai-skills-job-risk': {
    id: 'ai-skills-job-risk',
    slug: 'ai-skills-job-risk',
    title: 'AI Skills vs Job Risk – Global Impact Dashboard',
    shortTitle: 'AI Skills vs Job Risk',
    subtitle:
      'Global Impact of Artificial Intelligence on Jobs, Skills and Workforce Transformation',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: ['Data Analytics'],
    status: 'Completed',
    shortDescription:
      'Comprehensive Power BI business intelligence dashboard evaluating the global impact of artificial intelligence across 320 labor market records, 12 countries, 12 industries, and 40 job roles, analyzing automation risk, net job creation, salary trends, and skill demand.',
    assetFolderPath: '/projects/ai-skills-job-risk/',
    coverImage: '/projects/ai-skills-job-risk/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/ai-skills-job-risk/demo.mp4',
      thumbnail: '/projects/ai-skills-job-risk/cover.png',
      title: 'Watch the Global Impact Dashboard in Action',
      description:
        'Explore interactive Power BI navigation: dynamic currency conversion, job risk vs. job creation toggles, industry deep dives, and AI skill demand curves.',
      duration: 'Interactive Power BI Walkthrough',
    },
    pdfReport: {
      url: '/projects/ai-skills-job-risk/documentation/project-report.pdf',
      title: 'Interactive Dashboard Report',
      buttonLabel: 'View Dashboard Report',
      description:
        'Explore the full 9-page Power BI dashboard report with interactive page navigation, full-screen viewing, zoom controls, and direct download.',
      pageCount: 9,
      pageTitles: [
        'Overview',
        'Currency Analysis',
        'Job Risk Analysis',
        'AI Tools Comparison',
        'Industries Deep Dive',
        'Salary Analysis',
        'AI Learning Hub',
        'Skill Insights',
        'Advanced Insights',
      ],
    },
    links: {
      github:
        'https://github.com/sreeramganesh/AI-Skills-vs-Job-Risk-Global-Impact-Dashboard-.git',
      githubLabel: 'View Source Code',
      relatedResources: [
        {
          title: 'Microsoft Power BI Desktop Documentation',
          url: 'https://learn.microsoft.com/en-us/power-bi/',
          type: 'BI Platform',
        },
        {
          title: 'DAX (Data Analysis Expressions) Reference',
          url: 'https://learn.microsoft.com/en-us/dax/',
          type: 'Calculation Language',
        },
        {
          title: 'World Economic Forum Future of Jobs Report',
          url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2023/',
          type: 'Workforce Research',
        },
      ],
    },
    overview: {
      introduction:
        'AI Skills vs Job Risk – Global Impact Dashboard is an interactive labor market intelligence and business intelligence dashboard engineered in Microsoft Power BI Desktop. The system analyzes the profound transformative impact of Artificial Intelligence and autonomous agents across 320 structured global employment records spanning 12 countries, 12 major industry sectors, and 40 occupational roles between 2022 and 2026.',
      purpose:
        'The rapid emergence of generative AI and autonomous workflow agents has sparked widespread debate over potential workforce displacement versus high-value job creation. Traditional labor market reports are static, siloed, and fail to provide interactive multi-variate cross-filtering between specific job titles, countries, industries, and emerging AI tools. This project was developed to provide an empirical, data-driven analytical environment where students, job seekers, corporate HR planners, and policymakers can objectively assess automation exposure, explore salary trajectories, and identify high-longevity technical skills.',
      mainObjective:
        'Develop a cohesive 9-page Power BI dashboard powered by 77 optimized DAX measures, dynamic currency conversion, dense ranking models, and interactive cross-filtering to provide actionable workforce intelligence on AI adoption, automation vulnerability, and skill demand.',
      howItWorks:
        'Data is modeled around a denormalized Star Schema with 320 rows and 58 feature columns embedded in Fact_JobsAI, linked with dedicated dimension tables (Dim_Country, Dim_Industry, Dim_JobRole, Dim_AITool, Dim_Skill, Dim_ExperienceLevel, Currency Conversion). Power Query cleanses and structures raw telemetry, while 77 DAX measures calculate dynamic KPIs, Dense Rankings, Top N segments, and multi-currency foreign exchange rates. Users navigate across 9 dedicated analytical views utilizing interactive slicers, visual bookmarks, and drill-throughs.',
      targetUsers: [
        'Students & Graduates Evaluating Career Longevity & Skill Demand',
        'Job Seekers & Professionals Strategizing AI Upskilling Pathways',
        'Corporate HR Leaders & Enterprise Workforce Planners',
        'Business Analysts, Labor Economists & Policy Researchers',
      ],
      highlights: [
        'Interactive 9-Page Power BI Analytical Dashboard with Dynamic Bookmarks',
        'Denormalized Star Schema Modeling Across 320 Records & 58 Attribute Columns',
        '77 Optimized DAX Measures Powering Dense Rankings, Top N & Currency Conversions',
        'Multi-Variate Automation Risk (30.42% Mean) vs. Net Job Creation Analysis',
        'Dynamic 12-Currency Foreign Exchange Engine Based on 2024 Benchmark Rates',
        'Evaluation of 10 Leading Enterprise AI Tools (Claude 3.7, ChatGPT-4o, Copilot)',
        'Curated Free AI Learning Hub Linking 15 Verified Upskilling Pathways',
      ],
    },
    problemStatement: {
      title: 'Workforce Uncertainty, Asymmetric AI Disruption & Empirical Data Fragmentation',
      mainProblem:
        'The global workforce is undergoing a seismic reallocation driven by artificial intelligence. While generative AI tools automate routine cognitive tasks, the narrative around AI has swung between extreme alarmism (mass unemployment) and ungrounded optimism (frictionless transition). Organizations and individuals lack accessible, empirical business intelligence tools to evaluate which specific tasks are vulnerable, which skills command market premiums, and how industries differ in capital investment and technology adoption.',
      existingLimitations: [
        'Static & Fragmented Labor Reports: Traditional government and consulting reports are published as monolithic PDFs without dynamic cross-filtering capabilities.',
        'Lack of Occupational Granularity: Broad macroeconomic summaries fail to provide role-level automation indices across entry-, mid-, and senior-level positions.',
        'Currency & Regional Rigidities: International workforce data is typically pegged solely to USD, obscuring regional wage competitiveness and purchasing power parity.',
        'Absence of Direct Upskilling Links: Analytical reports diagnose workforce threats but fail to connect users with actionable educational resources to bridge skill gaps.',
        'Opaque Task Attribution: Simplistic metrics label entire jobs as "at risk" without decomposing roles into automated routine tasks versus resilient human synthesis.',
      ],
      whyItMatters:
        'Informed career planning and equitable workforce transitions depend on empirical clarity. Understanding that AI adoption creates more net jobs (10.68M mean per sector) than it puts at risk (9.08M mean per sector) empowers professionals to transition toward high-demand capabilities rather than fearing displacement.',
      keyChallenges: [
        {
          title: 'Dynamic Multi-Currency Exchange Modeling',
          description:
            'Formulating DAX measures that recalculate all salary and investment visuals on-the-fly across 12 world currencies without duplicating underlying fact tables.',
          iconName: 'DollarSign',
        },
        {
          title: 'Multi-Variate Risk vs. Job Creation Synthesis',
          description:
            'Designing visual comparisons that contrast gross job automation risk against net job creation across 12 distinct industries without distorting scale.',
          iconName: 'Scale',
        },
        {
          title: 'Dense Ranking & Top-N Performance Optimization',
          description:
            'Engineering DAX ranking algorithms that evaluate top industries by AI investment and top AI tools without introducing report rendering latency.',
          iconName: 'Zap',
        },
      ],
    },
    solution: {
      title: '9-Page Interactive Power BI Analytical Architecture with 77 DAX Measures',
      approach:
        'A holistic Business Intelligence architecture integrating rigorous data cleansing in Power Query, a high-performance Star Schema model, 77 sophisticated DAX measures, dynamic bookmarking, and multi-currency foreign exchange conversion.',
      technicalSolution:
        'Built in Power BI Desktop utilizing a central denormalized Fact Table (Fact_JobsAI) encompassing 320 rows and 58 columns. Implemented dynamic measure branching where slicers control currency conversion across 12 foreign currencies, compute Top N industries by AI investment using dense ranking functions (DENSE), and dynamically toggle between Job Risk and Job Creation views. Designed 9 specialized pages covering Overview KPIs, Currency Conversion, Job Risk Matrix, AI Tools Comparison, Industry Deep Dive, Salary Analysis, AI Learning Hub, Skill Insights, and Advanced Forecasting.',
      implementationOverview:
        'Structured data flow from Microsoft Excel workbook (Dataset AI Skills vs Job Risk Dashboard .xlsx) into Power BI Desktop via Power Query M transformations. Published comprehensive 9-page analytical report exported as an authentic PDF and recorded interactive workflow demonstration video (demo.mp4).',
      howItSolves: [
        'Delivers empirical clarity across 40 job roles, showing an average automation risk of 30.42% and average AI adoption of 56.98%',
        'Proves that estimated jobs created (10.68M mean per sector) surpass jobs at risk (9.08M mean per sector)',
        'Enables global users to view salaries in their local currency across 12 foreign exchange rates',
        'Highlights high-demand skills (Prompt Engineering, Machine Learning, Python, Empathy) with 15-35% salary premiums',
        'Connects users directly to 15 verified free AI learning courses to accelerate career upskilling',
      ],
    },
    keyFeatures: [
      {
        iconName: 'BarChart3',
        title: 'Overview Executive KPI Dashboard',
        description:
          'High-level summary displaying $84.9K average annual salary, 30.4% automation risk, 9.1M jobs at risk, 10.7M jobs created, and 57.0% enterprise AI adoption.',
      },
      {
        iconName: 'DollarSign',
        title: 'Dynamic 12-Currency Foreign Exchange Engine',
        description:
          'On-the-fly currency conversion translating salaries and investments into USD, GBP, EUR, INR, CAD, AUD, JPY, and AED using 2024 exchange benchmarks.',
      },
      {
        iconName: 'ShieldAlert',
        title: 'Occupational Automation Risk Matrix',
        description:
          'Comparative risk profiling across 40 job roles, contrasting high-vulnerability positions (Translators, Data Entry) against resilient roles (Electricians, AI Ethicists).',
      },
      {
        iconName: 'Cpu',
        title: 'AI Tools Benchmark & Capability Scoring',
        description:
          'Comparative evaluation of 10 enterprise AI tools (Claude 3.7 Sonnet, ChatGPT-4o, Copilot, DeepSeek R1) across reasoning, coding, and creativity scores.',
      },
      {
        iconName: 'TrendingUp',
        title: 'AI Skills Demand & Salary Premium Analysis',
        description:
          'Tracking 12 key competencies, quantifying YoY growth trajectories, demand indices, and market salary premiums ranging from 15% to 35%.',
      },
      {
        iconName: 'BookOpen',
        title: 'Curated Free AI Learning Hub',
        description:
          'Integrated learning catalog providing direct verified links to 15 industry AI courses with provider, duration, and certification details.',
      },
    ],
    architecture: {
      description:
        'The project architecture follows standard enterprise business intelligence principles, structuring data ingestion from Excel, transformation in Power Query, relational star schema modeling in Power BI, calculation via 77 DAX measures, and multi-page visual reporting.',
      frontend:
        'Interactive Power BI Desktop visualization canvas with 9 report pages, custom slicers, bookmark navigators, and tooltip cards.',
      backend:
        'Power BI In-Memory Tabular Engine (VertiPaq) executing optimized DAX measures and relationship filtering.',
      database:
        'Structured Excel workbook containing Fact_JobsAI (320 rows x 58 cols) and 7 dimension tables (Countries, Industries, Jobs, AI Tools, Skills, Experience Levels, Currencies).',
      apis: [
        'Power BI Data Modeling Engine & VertiPaq Compressor',
        'DAX Calculation Engine (CALCULATE, FILTER, RANKX, SWITCH, RELATED)',
        'Power Query M Transformation & Cleansing Pipeline',
        'Dynamic Currency Conversion Measure Branching',
      ],
      workflow: [
        '1. Data Ingestion: Excel sheets loaded into Power Query; data types standardized and dimension keys assigned.',
        '2. Star Schema Modeling: 1-to-many relationships configured between Fact_JobsAI and dimensions.',
        '3. DAX Formulation: 77 custom measures authored for KPIs, Top-N ranks, currency multipliers, and variance metrics.',
        '4. Visual Layout Engineering: 9 specialized report pages crafted with thematic color palettes and card layouts.',
        '5. Bookmarks & Slicer Wiring: Interactive toggle switches (Job Risk vs. Job Created, Industry vs. Tool) linked to UI bookmarks.',
        '6. Quality Auditing & PDF Export: Dashboard validated against source records and published as a 9-page high-resolution report.',
      ],
    },
    techStack: [
      'Power BI',
      'DAX',
      'Power Query',
      'Data Modeling',
      'Excel',
      'Data Analytics',
    ],
    techStackGrouped: [
      {
        category: 'Business Intelligence & Reporting',
        items: [
          { name: 'Microsoft Power BI Desktop', role: 'Primary interactive report authoring and dashboard visual engine', iconName: 'BarChart3' },
          { name: 'VertiPaq Engine', role: 'In-memory columnar compression and high-speed analytical query evaluation', iconName: 'Cpu' },
          { name: 'Interactive Bookmarks', role: 'Dynamic visual state management and interactive parameter switching', iconName: 'Sparkles' },
        ],
      },
      {
        category: 'Analytical Calculations & DAX',
        items: [
          { name: 'DAX (Data Analysis Expressions)', role: '77 custom measures evaluating KPIs, Dense Rankings, and Top N', iconName: 'Calculator' },
          { name: 'Dynamic Currency Logic', role: 'Measure branching recalculating monetary values into 12 foreign currencies', iconName: 'DollarSign' },
          { name: 'Dense Ranking (DENSE)', role: 'Comparative industry and AI tool performance ranking functions', iconName: 'ListOrdered' },
        ],
      },
      {
        category: 'Data Transformation & Modeling',
        items: [
          { name: 'Power Query (M Engine)', role: 'ETL extraction, type coercion, null sanitization, and data shaping', iconName: 'Sliders' },
          { name: 'Star Schema Architecture', role: 'Denormalized fact table linked with 7 analytical dimension tables', iconName: 'Layers' },
        ],
      },
      {
        category: 'Data Sources & Documentation',
        items: [
          { name: 'Microsoft Excel', role: 'Structured multi-sheet tabular data source containing 320 labor records', iconName: 'FileSpreadsheet' },
          { name: 'Interactive 9-Page PDF', role: 'High-resolution publication report documenting all 9 dashboard pages', iconName: 'FileText' },
          { name: 'MP4 Demonstration Video', role: 'Recorded video walkthrough of dashboard interactions and cross-filtering', iconName: 'Play' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/ai-skills-job-risk/gallery/overview.png',
        caption:
          'Overview Dashboard: Executive layout featuring top KPIs ($84.9K Avg Salary, 30.4% Automation Risk, 9.1M Jobs at Risk, 10.7M Jobs Created, 57.0% AI Adoption), global geographic map, and top industries by AI investment.',
        alt: 'Power BI Overview Dashboard Screenshot',
      },
      {
        url: '/projects/ai-skills-job-risk/gallery/AI Skill insights.png',
        caption:
          'AI Skill Insights: Comprehensive breakdown of 12 skill categories illustrating demand indices, year-over-year growth trajectories, and 15-35% salary premium distributions.',
        alt: 'AI Skills Demand and Salary Insights Screenshot',
      },
      {
        url: '/projects/ai-skills-job-risk/gallery/job risk.png',
        caption:
          'Job Risk Analysis: Interactive scatter matrix contrasting Automation Risk (%) against Job Growth Rate (%) across 40 distinct job titles, identifying vulnerable vs. resilient roles.',
        alt: 'Job Automation Risk vs Growth Rate Screenshot',
      },
      {
        url: '/projects/ai-skills-job-risk/gallery/Advanced insights.png',
        caption:
          'Advanced Insights: Multi-variate correlation analysis, experience level salary multipliers, and AI maturity level forecasting across global industry sectors.',
        alt: 'Advanced Workforce Analytics Insights Screenshot',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Workforce Domain Discovery & Data Architecture',
        description:
          'Audited global labor trends across 12 countries and 12 industries. Structured the analytical framework into 320 records across 58 attribute columns covering salary, automation risk, and AI adoption.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Star Schema Data Modeling & Power Query ETL',
        description:
          'Engineered an optimized star schema in Power BI Desktop linking Fact_JobsAI with dimension tables for Countries, Industries, Job Roles, AI Tools, Skills, and Experience Levels.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'DAX Measure Formulation & Currency Engine',
        description:
          'Authored 77 custom DAX measures for dynamic KPIs, dense rankings, Top-N filters, and real-time currency conversion across 12 international foreign currencies.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Multi-Page Dashboard Design & Visual Storytelling',
        description:
          'Constructed 9 cohesive dashboard pages with custom color-coded KPIs, interactive scatter matrices, geographic heatmaps, and bookmark navigation toggles.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Documentation, PDF Publishing & Video Demonstration',
        description:
          'Exported the full 9-page Power BI report to high-resolution PDF, recorded an interactive video walkthrough, and prepared the complete portfolio showcase.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S.',
        role: 'Lead Business Intelligence Developer & Data Analyst',
        image: '/images/team/sreeram.jpg',
        responsibilities: [
          'End-to-end design, data modeling, and development of the Power BI dashboard',
          'Authored 77 optimized DAX measures powering dynamic calculations and rankings',
          'Engineered multi-currency conversion logic across 12 international currencies',
          'Designed interactive visual bookmarks, navigation tabs, and responsive layouts',
          'Curated and verified the Free AI Learning Hub linking 15 industry courses',
        ],
        technicalContributions: [
          'Engineered denormalized star schema modeling 320 rows and 58 feature columns',
          'Implemented DAX measure branching with SWITCH and SELECTEDVALUE for currency switching',
          'Constructed comparative risk-vs-creation matrices contrasting 10.68M jobs created vs 9.08M at risk',
          'Produced the 9-page high-resolution project report and demonstration video',
        ],
        technologiesHandled: [
          'Microsoft Power BI',
          'DAX (Data Analysis Expressions)',
          'Power Query (M Language)',
          'Star Schema Modeling',
          'Microsoft Excel',
          'Data Visualization',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Real-Time Multi-Currency Conversion Across Visuals',
        explanation:
          'Global users require salary and investment figures in their domestic currency, but duplicating the underlying 320-record dataset for 12 currencies would cause data redundancy and report bloat.',
        solution:
          'Created a disconnected Currency Conversion table with foreign exchange rates against USD and implemented dynamic DAX measure branching using SELECTEDVALUE and SWITCH to multiply raw USD figures on-the-fly.',
      },
      {
        challenge: 'Balancing Automation Alarmism with Net Job Creation',
        explanation:
          'Public discourse frequently fixates on job losses, risking a misleadingly negative report that overlooks the parallel surge in AI-driven employment opportunities.',
        solution:
          'Engineered dual-metric comparative cards and toggle switches directly contrasting Jobs at Risk (9.08M mean per sector) against Jobs Created (10.68M mean per sector), providing balanced empirical perspective.',
      },
      {
        challenge: 'Multi-Page Visual Navigation & Performance Optimization',
        explanation:
          'Housing 9 detailed analytical pages with dozens of slicers, scatter plots, and dense ranking tables can degrade report rendering responsiveness in Power BI Desktop.',
        solution:
          'Optimized in-memory VertiPaq tabular storage by trimming redundant dimension columns, establishing 1-to-many unidirectional relationships, and leveraging lightweight bookmark navigators for instantaneous view switching.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Interactive 9-page Power BI dashboard with dynamic cross-filtering',
        '77 custom DAX measures for dynamic KPIs, dense rankings, and currency multipliers',
        'Star schema data model linking 320 records across 58 attribute columns',
        'Dynamic 12-currency foreign exchange conversion engine',
        'Comparative automation risk analysis across 40 distinct job titles',
        'Evaluation of 10 enterprise AI tools across reasoning, coding, and creativity',
        'Integrated Free AI Learning Hub providing 15 verified educational course pathways',
        'Published 9-page high-resolution PDF report and recorded video walkthrough',
      ],
      technicalAchievements: [
        'Demonstrated that net estimated jobs created (10.68M mean) outpace jobs at risk (9.08M mean)',
        'Quantified the global average annual salary ($84,892 USD) across 12 countries',
        'Identified high-growth AI skill premiums ranging between 15% and 35%',
        'Delivered 100% interactive reporting without external database dependencies',
      ],
      testingResults: [
        'All 77 DAX measures validated against raw Excel workbook source data',
        'Currency conversion tested across all 12 exchange rates with zero computation drift',
        'Bookmark navigation validated for instant view switching without visual artifacting',
        '9-page PDF report confirmed byte-for-byte identical to Power BI Desktop publication export',
      ],
      demonstratedCapabilities: [
        'Enterprise Business Intelligence & Dashboard Engineering in Microsoft Power BI',
        'Advanced DAX Calculation Formulation (Ranking, Dynamic Branching, Time Intelligence)',
        'Relational Data Modeling & Star Schema Optimization (VertiPaq Engine)',
        'Labor Market Economics & Workforce Disruption Analytics',
        'Visual Storytelling, UX Layout Design & Executive Reporting',
      ],
    },
  },

  // 10. VoltRelay – Battery Swapping Analytics - Completed
  voltrelay: {
    id: 'voltrelay',
    slug: 'voltrelay',
    title: 'VoltRelay – Battery Swapping Analytics',
    shortTitle: 'VoltRelay',
    subtitle: 'Data-Driven Operational Analytics for Urban EV Battery Swapping Networks',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: ['Data Analytics', 'Data Science', 'Python Development'],
    status: 'Completed',
    shortDescription:
      'High-throughput operational analytics and battery swapping network diagnostic platform analyzing 3.88M transactions and ₹1.23B revenue across 6 metro hubs in Google Colab.',
    assetFolderPath: '/projects/voltrelay/',
    coverImage: '/projects/voltrelay/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/voltrelay/demo.mp4',
      thumbnail: '/projects/voltrelay/cover.png',
      title: 'VoltRelay Google Colab Analytics Demonstration',
      description:
        'Demonstration of the end-to-end Python data pipeline in Google Colab: high-throughput chunked ingestion of 3.88M swap records, statistical metric calculation, and generation of 12 Seaborn/Matplotlib diagnostic charts.',
      duration: '4:15',
    },
    overview: {
      introduction:
        'VoltRelay – Battery Swapping Analytics is a high-throughput Python data science and operational research project developed for the Gradient Data Analytics Hackathon. The platform evaluates 18 months (January 2024 – February 2025) of commercial battery swapping telemetry across 6 major Indian metropolitan hubs: Bengaluru, Delhi NCR, Hyderabad, Pune, Mumbai, and Jaipur.',
      purpose:
        'Diagnose the root causes of service failures, optimize station inventory allocation, evaluate supplier battery degradation curves, and analyze unit profitability across commercial B2B delivery fleets.',
      targetUsers: [
        'EV Fleet Operations Directors',
        'Battery Swapping Network Engineers',
        'Commercial Last-Mile Logistics Managers',
        'Hardware & Battery Pack Procurement Teams',
      ],
      mainObjective:
        'Transform 3.88 million raw event logs into actionable operational intelligence that eliminates battery stockouts, improves 3W swap reliability, and maximizes direct margin contribution.',
      howItWorks:
        'Raw telemetry is ingested through an optimized chunked ETL pipeline in Google Colab, normalized against station metadata and ambient weather conditions, aggregated into multidimensional time-series metrics, and visualized through 12 categorized diagnostic charts in Matplotlib and Seaborn.',
      highlights: [
        'Analyzed 3,877,013 total swap attempts across 6 metropolitan clusters',
        'Audited ₹1,233.1 Million in cumulative gross revenue across 18 months',
        'Isolated 92.07% of network failures to battery stockouts during peak demand surges',
        'Uncovered a critical 10.35% failure rate in commercial 3W fleets vs 5.42% in 2W',
        'Benchmarked lifecycle degradation and thermal longevity across 3 battery suppliers',
      ],
    },
    problemStatement: {
      title: 'Operational Bottlenecks in Rapidly Scaling Urban Battery Swapping Infrastructure',
      mainProblem:
        'As urban delivery electrification accelerates, battery swapping networks face acute reliability bottlenecks: unpredictable diurnal demand spikes leave stations with zero charged batteries, while commercial 3W fleets suffer high failure rates due to prolonged battery cooling cycles.',
      existingLimitations: [
        'Heuristic station stocking models fail to anticipate localized quick-commerce delivery surges.',
        'Lack of visibility into supplier-specific battery degradation creates unexpected fleet downtime.',
        'Homogeneous pricing models fail to account for variable battery wear and grid electricity costs.',
        'Station hardware generations (Gen1 vs Gen2) exhibit vastly different throughput capabilities under heat stress.',
      ],
      userChallenges: [
        'Delivery riders face lost income when arriving at stations with empty lockers or uncharged packs.',
        'Fleet operators struggle to meet strict delivery SLAs due to unpredicted 12+ minute station queues.',
        'Network operators incur high emergency logistics costs redistributing batteries between stations.',
      ],
      keyChallenges: [
        {
          title: 'Inventory Starvation vs Grid Capacity',
          description:
            'Balancing fast battery charging times against station grid power limits and transformer constraints during peak hours.',
          iconName: 'Zap',
        },
        {
          title: 'Commercial 3W Thermal Bottlenecks',
          description:
            'Dual-pack 4.8 kWh requirements generate higher thermal accumulation, delaying safe recharge turnover and doubling failure rates.',
          iconName: 'AlertTriangle',
        },
        {
          title: 'Extreme Weather Stress & Outages',
          description:
            'Ambient temperatures exceeding 44°C in northern hubs throttle charging speeds, doubling wait times and triggering queue abandonments.',
          iconName: 'Clock',
        },
      ],
      whyItMatters:
        'Solving battery swapping bottlenecks is essential for the economic viability of electric commercial fleets, where every minute of charging delay directly reduces delivery rider earnings and fleet profitability.',
    },
    solution: {
      title: 'End-to-End Operational Intelligence & Telemetry Analytics Pipeline',
      approach:
        'Developed a modular, reproducible Python analytics framework in Google Colab that processes 3.88M swap records, cross-references hourly station statuses with weather shocks, and models fleet economics.',
      technicalSolution:
        'An optimized data engineering pipeline utilizing Pandas chunking for memory safety, multi-table relational joins, vectorized NumPy calculations for degradation modeling, and custom Seaborn statistical visualizations.',
      implementationOverview:
        'Harmonized 8 raw CSV datasets into unified analytical matrices, computed diurnal pressure ratios, benchmarked supplier longevity, and generated 12 executive diagnostic charts grouped into 4 strategic categories.',
      howItSolves: [
        'Identifies exact peak demand windows (08:00–10:30 and 18:00–21:30) to schedule proactive battery pre-charging.',
        'Isolates the top 10 bottlenecked stations for targeted Gen2 modular locker upgrades.',
        'Provides empirical justification for differential 3W pricing and dedicated dual-pack charging bays.',
        'Supplies procurement teams with definitive State-of-Health data favoring Amptek and Cellora for high-wear routes.',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Activity',
        title: 'Diurnal Demand & Stockout Profiling',
        description:
          'Pinpointed critical morning (08:00–10:30) and evening (18:00–21:30) swap peaks where stockout pressure spiked by 42% over average charger turnaround.',
      },
      {
        iconName: 'Zap',
        title: 'Vehicle Class Disparity Analysis',
        description:
          'Discovered that commercial 3W fleets suffer nearly double the failure rate (10.35%) of 2W riders (5.42%) due to dual 4.8 kWh pack cooling lags.',
      },
      {
        iconName: 'TrendingUp',
        title: 'Fleet Partner Unit Economics',
        description:
          'Quantified net unit margins across commercial logistics verticals, identifying Cargo 3W as the highest-margin segment at ₹158.95 per swap.',
      },
      {
        iconName: 'BatteryCharging',
        title: 'State-of-Health & Supplier Longevity',
        description:
          'Benchmarked pack suppliers across 600+ charge cycles, revealing Kyron delivered max range (65.5 km) while Amptek maintained superior durability (89.41% SoH).',
      },
      {
        iconName: 'MapPin',
        title: 'Geospatial Station Bottleneck Diagnostics',
        description:
          'Ranked top 10 failure stations across 6 metro hubs, isolating severe thermal stress and grid instability in Jaipur (7.85%) and Delhi NCR (7.35%).',
      },
      {
        iconName: 'Layers',
        title: 'High-Throughput Chunked Data Processing',
        description:
          'Architected memory-optimized chunked ingestion to process 3.88M transaction records seamlessly within Google Colab memory constraints.',
      },
    ],
    architecture: {
      description:
        'The VoltRelay analytics pipeline is organized into a 4-tier data processing architecture executed inside a Google Colab high-RAM environment, transforming raw multi-source telemetry into publication-grade diagnostic intelligence.',
      frontend: 'Interactive Google Colab Notebook & Matplotlib / Seaborn Visualizations',
      backend: 'Python 3.10+ Analytical Engine with Vectorized NumPy & Pandas Pipelines',
      database: '8 Harmonized Relational Telemetry Datasets (3.88M+ Rows Processed in Chunks)',
      apis: [
        'Pandas Chunked File Streaming API',
        'NumPy Linear Algebra & Vector Mathematics',
        'Matplotlib Pyplot Visual Engine',
        'Seaborn Statistical Graphics Framework',
      ],
      aiModels: [
        'Non-Linear Battery Degradation & Capacity Loss Modeling',
        'Diurnal Hourly Service Pressure Forecasting Algorithms',
        'Unit Contribution & Multi-Tier Tariff Margin Derivation',
      ],
      workflow: [
        'Chunked Data Ingestion & Memory Type Optimization (3.88M Records)',
        'Relational Telemetry Alignment with Station Hardware & City Weather Datasets',
        'Multidimensional Aggregation & Operational KPI Derivation',
        'Statistical Visualization Generation across 4 Dedicated Thematic Categories',
      ],
    },
    techStack: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Google Colab',
      'Jupyter Notebook',
      'Data Analytics',
      'Data Science',
    ],
    techStackGrouped: [
      {
        category: 'Core Programming & Execution',
        items: [
          { name: 'Python 3.10+', role: 'Primary Analytics & Scripting Language', iconName: 'FileCode' },
          { name: 'Google Colab', role: 'Interactive Cloud GPU/High-RAM Runtime', iconName: 'Terminal' },
          { name: 'Jupyter Notebook', role: 'Interactive Reproducible Data Science', iconName: 'Layout' },
        ],
      },
      {
        category: 'Data Engineering & Manipulation',
        items: [
          { name: 'Pandas', role: 'Chunked Ingestion, Multi-Table Merges & Aggregations', iconName: 'Database' },
          { name: 'NumPy', role: 'Vectorized Mathematical Operations & Array Processing', iconName: 'Cpu' },
        ],
      },
      {
        category: 'Statistical Visualization & Storytelling',
        items: [
          { name: 'Matplotlib', role: 'High-Resolution Publication-Quality Plotting', iconName: 'BarChart3' },
          { name: 'Seaborn', role: 'Statistical Visual Distributions & Color Palettes', iconName: 'PieChart' },
        ],
      },
      {
        category: 'Domain & Methodology',
        items: [
          { name: 'EV Telemetry Analytics', role: 'Battery Lifecycle & Station Throughput', iconName: 'Zap' },
          { name: 'Operational Research', role: 'Queue Diagnostics & Stockout Prevention', iconName: 'TrendingUp' },
        ],
      },
    ],
    mlVisualizations: [
      {
        category: 'City & Station Performance Analytics',
        categoryDescription:
          'Geospatial reliability benchmarking and infrastructure hardware evaluations across 65+ stations in 6 metropolitan regions.',
        visualizations: [
          {
            image: '/projects/voltrelay/charts/city-station-performance/failure-rate-by-city.png',
            title: 'Failure Rate by City Benchmark',
            description:
              'Comparative failure rate distribution across the 6 analyzed metro hubs (Jaipur, Delhi NCR, Hyderabad, Pune, Mumbai, Bengaluru).',
            findings: [
              'Jaipur exhibited the highest overall swap failure rate at 7.85%, closely followed by Delhi NCR at 7.35%.',
              'Extreme ambient summer temperatures (>44°C) in northern hubs triggered thermal charging throttling, delaying battery availability.',
              'Mumbai (4.45%) and Bengaluru (4.56%) sustained the highest operational reliability due to stable grid power and optimal 2W-to-station density ratios.',
            ],
          },
          {
            image: '/projects/voltrelay/charts/city-station-performance/top-10-stations-by-failure-rate.png',
            title: 'Top 10 High-Failure Swapping Stations',
            description:
              'Station-level Pareto distribution identifying the top 10 bottlenecked charging locations across the network.',
            findings: [
              'Top failure hubs reached failure rates between 9.2% and 11.4%, concentrated heavily in high-density commercial delivery corridors.',
              'Station hardware generation played a pivotal role: older Gen1 stations with 12 slots suffered 2.3x more stockouts than Gen2 24-slot modular units.',
              'Identified 4 critical stations in Delhi NCR and 3 in Jaipur requiring immediate battery inventory buffer expansion and secondary transformer grid tie-ins.',
            ],
          },
        ],
      },
      {
        category: 'Demand & Operational Analytics',
        categoryDescription:
          'Diurnal demand curves, service pressure dynamics, vehicle class discrepancies, and root-cause failure categorizations.',
        visualizations: [
          {
            image: '/projects/voltrelay/charts/demand-operational/demand-service-pressure-by-hour.png',
            title: 'Diurnal Demand & Service Pressure by Hour',
            description:
              'Hourly distribution of total swap requests overlaid with concurrent battery stockout pressure over a 24-hour operational cycle.',
            findings: [
              'Bimodal demand peaks observed at 08:00–10:30 (morning delivery dispatch) and 18:00–21:30 (evening quick-commerce & food delivery rush).',
              'Stockout pressure spiked drastically during the evening peak (19:00–21:00), where demand outpaced standard 45-minute battery recharge turnover by 42%.',
              'Off-peak overnight hours (01:00–05:00) showed near-zero service pressure with 98.4% grid charger availability.',
            ],
          },
          {
            image: '/projects/voltrelay/charts/demand-operational/service-failure-rate-by-vehicle-class.png',
            title: 'Service Failure Rate by Vehicle Class (2W vs 3W)',
            description:
              'Granular reliability comparison between Electric Two-Wheelers (2W) and Commercial Three-Wheelers (3W).',
            findings: [
              '3W commercial vehicles experienced an alarming 10.35% failure rate, nearly double the 5.42% observed for 2W riders.',
              '3W vehicles mandate high-capacity 4.8 kWh dual-pack swaps, requiring dual-dock availability and longer cooling cycles.',
              '2W vehicles utilized smaller 2.4 kWh single packs with higher inventory turnover and broader station interoperability.',
            ],
          },
          {
            image: '/projects/voltrelay/charts/demand-operational/technical-failure-reasons.png',
            title: 'Root Cause Categorization of Failed Swaps',
            description:
              'Empirical Pareto breakdown of all 231,204 unsuccessful swap interactions across the 18-month timeline.',
            findings: [
              '92.07% of operational failures were categorized as failed_no_charged_battery (134,389 events) — pure inventory starvation.',
              '7.93% resulted from failed_system_error (11,570 events), including locker solenoid jams, RFID read timeouts, and firmware disconnects.',
              'Driver queue abandonments accounted for 68,533 events (1.77%) due to excessive wait queues exceeding 12 minutes.',
            ],
          },
        ],
      },
      {
        category: 'Financial & Revenue Analytics',
        categoryDescription:
          '18-month gross revenue growth trajectories, direct contribution margins by tariff structure, and B2B fleet partner profitability.',
        visualizations: [
          {
            image: '/projects/voltrelay/charts/financial-revenue/direct-contribution-by-tariff.png',
            title: 'Direct Contribution per Completed Swap by Tariff Plan',
            description:
              'Margin analysis evaluating unit profitability across Pay-Per-Use, Monthly Pass, and B2B Fleet Enterprise pricing models.',
            findings: [
              'Pay-Per-Use generated the highest gross unit revenue (₹68.50/swap) but had higher payment gateway fees and customer acquisition friction.',
              'B2B Enterprise fleet contracts delivered the highest net contribution predictability and volume stability despite bulk volume discounts.',
              'Monthly subscription passes yielded consistent baseline cash flow with an average direct margin contribution of ₹54.20 per swap.',
            ],
          },
          {
            image: '/projects/voltrelay/charts/financial-revenue/direct-contribution-over-time.png',
            title: 'Direct Contribution per Swap Over Time (18-Month Trajectory)',
            description:
              'Time-series tracking of net direct unit margin per completed transaction from January 2024 to February 2025.',
            findings: [
              'Direct unit contribution expanded from ₹42.10 in Q1 2024 to ₹58.75 by Q1 2025 as station utilization and charging efficiency matured.',
              'Nighttime off-peak charging incentives reduced average grid electricity procurement costs by 18.4%.',
              'Temporary margin compression observed in May–June 2024 due to surge diesel generator backup power during peak grid brownouts.',
            ],
          },
          {
            image: '/projects/voltrelay/charts/financial-revenue/direct-contribution-by-fleet-segment.png',
            title: 'Direct Contribution per Swap by Fleet Partner Segment',
            description:
              'Profitability segmentation across commercial industry verticals: Cargo 3W, Quick Commerce, Food Delivery, and Bike Taxis.',
            findings: [
              'Cargo 3W logistics emerged as the most lucrative segment, delivering ₹158.95 direct contribution per swap.',
              'Quick Commerce (instant grocery delivery) ranked second at ₹142.10 per swap, driven by high battery cycling frequency.',
              'Food Delivery fleets averaged ₹86.40 per swap with tight daily swap schedules during lunch and dinner hours.',
            ],
          },
          {
            image: '/projects/voltrelay/charts/financial-revenue/monthly-revenue-and-failure-rate.png',
            title: 'Monthly Gross Revenue vs. Network Failure Rate',
            description:
              'Dual-axis macroeconomic performance chart showing 18-month gross revenue growth alongside failure rate trajectory.',
            findings: [
              'Monthly revenue scaled over 7.2x from ₹16.32M in January 2024 to ₹117.45M in January 2025.',
              'Network failure rate peaked at 8.12% during rapid scaling in Q2 2024 before stabilizing at 4.88% through inventory rebalancing algorithms.',
              'Total cumulative gross revenue achieved: ₹1,233.1 Million, validating the rapid commercial adoption of battery-as-a-service (BaaS).',
            ],
          },
        ],
      },
      {
        category: 'Network Performance Analytics',
        categoryDescription:
          'Longitudinal network growth velocity, SLA completion trends, and overall swap event status distribution.',
        visualizations: [
          {
            image: '/projects/voltrelay/charts/network-performance/completed-battery-swaps-over-time.png',
            title: 'Monthly Completed Battery Swap Growth Trend',
            description:
              'Volume expansion of completed battery swaps across the entire multi-city network over 18 consecutive months.',
            findings: [
              'Monthly completed swaps surged from 48,210 swaps in Jan 2024 to over 342,800 swaps in Jan 2025.',
              'The network surpassed the 1-millionth cumulative completed swap milestone in August 2024.',
              'Compound monthly growth rate (CMGR) exceeded 17.6%, driven by rapid electrification of last-mile commercial delivery fleets.',
            ],
          },
          {
            image: '/projects/voltrelay/charts/network-performance/network-reliability-trend.png',
            title: '18-Month Network Reliability & SLA Trend',
            description:
              'Tracking the percentage of successful, uninterrupted battery swaps against the 95.0% enterprise SLA benchmark.',
            findings: [
              'Overall 18-month network reliability averaged 94.04%, with peak performance of 96.12% achieved in December 2024.',
              'SLA dipped below 93% only during the extreme summer heat window of May 2024.',
              'Implementation of dynamic battery re-routing in Q3 2024 improved SLA compliance across all 6 metro clusters by +2.8%.',
            ],
          },
          {
            image: '/projects/voltrelay/charts/network-performance/overall-swap-event-distribution.png',
            title: 'Overall Swap Event Outcome Distribution',
            description:
              'Macro-level distribution of all 3,877,013 swap attempts into completed, stockout-failed, system-error, and abandoned cohorts.',
            findings: [
              'Completed Swaps: 3,645,809 events (94.04%) across all vehicle classes and cities.',
              'Inventory Stockout Failures: 134,389 events (3.47% of total attempts; 92.07% of service failures).',
              'Driver Queue Abandonments: 68,533 events (1.77%) occurring during peak congestion.',
              'Hardware/System Errors: 11,570 events (0.30% of total attempts; 7.93% of service failures).',
              'Pre-Docking Cancellations: 16,712 events (0.43%).',
            ],
          },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/voltrelay/cover.png',
        caption: 'VoltRelay Google Colab Analytics Workspace & Dashboard Overview',
        alt: 'VoltRelay Google Colab Analytics Cover',
      },
      {
        url: '/projects/voltrelay/charts/financial-revenue/monthly-revenue-and-failure-rate.png',
        caption: '18-Month Gross Revenue Scaling vs Network Failure Rate Stabilization',
        alt: 'Monthly Revenue and Failure Rate',
      },
      {
        url: '/projects/voltrelay/charts/demand-operational/demand-service-pressure-by-hour.png',
        caption: 'Hourly Diurnal Swap Demand vs Battery Stockout Pressure Peaks',
        alt: 'Demand and Service Pressure by Hour',
      },
      {
        url: '/projects/voltrelay/charts/demand-operational/service-failure-rate-by-vehicle-class.png',
        caption: 'Vehicle Class Reliability Disparity: Commercial 3W (10.35%) vs 2W (5.42%)',
        alt: 'Service Failure Rate by Vehicle Class',
      },
      {
        url: '/projects/voltrelay/charts/city-station-performance/failure-rate-by-city.png',
        caption: 'Geographic Reliability Benchmark Across 6 Major Indian Metropolitan Hubs',
        alt: 'Failure Rate by City',
      },
      {
        url: '/projects/voltrelay/charts/financial-revenue/direct-contribution-by-fleet-segment.png',
        caption: 'Direct Profitability & Margin Contribution by B2B Fleet Partner Vertical',
        alt: 'Direct Contribution per Swap by Fleet Partner Segment',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Problem Framing & Data Architecture',
        description:
          'Defined core operational KPIs for battery swapping networks and cataloged schemas across 8 datasets covering swap events, stations, batteries, riders, and telemetry.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'High-Throughput Chunked Ingestion & ETL',
        description:
          'Constructed memory-efficient Pandas chunking pipelines to load and sanitize 3.88M transaction records, downcasting datatypes to prevent Google Colab OOM crashes.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Diurnal Demand & Reliability Diagnostics',
        description:
          'Engineered multi-index time-series aggregations to profile hourly demand peaks, isolating battery stockout bottlenecks and vehicle class failure discrepancies.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Financial Modeling & Supplier Benchmarking',
        description:
          'Formulated direct contribution economics across tariff plans and commercial fleet segments while modeling non-linear battery degradation across pack manufacturers.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Visual Dashboard & Strategic Synthesis',
        description:
          'Engineered 12 high-resolution Seaborn and Matplotlib visualization charts across 4 diagnostic themes, synthesizing actionable capacity recommendations for EV operators.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Keerthi',
        role: 'Lead Data Analyst & Python Developer',
        responsibilities: [
          'Engineered chunked data ingestion pipelines in Google Colab for 3.88M swap records',
          'Harmonized 8 disparate datasets across station telemetry, battery health, and weather shocks',
          'Formulated mathematical KPIs for direct unit contribution and stockout failure attribution',
          'Designed all 12 publication-grade Seaborn and Matplotlib visualization charts',
          'Authored the complete analytical synthesis and strategic recommendations report',
        ],
        technicalContributions: [
          'Pandas chunking and memory optimization with dtype downcasting',
          'Multi-table relational merges on high-frequency time-series telemetry',
          'Non-linear battery degradation modeling across multiple pack suppliers',
          'Dual-axis economic and reliability trend modeling over 18 months',
        ],
        technologiesHandled: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Google Colab'],
      },
    ],
    challenges: [
      {
        challenge: 'Memory Constraints Ingesting 3.88M Records in Google Colab',
        explanation:
          'Google Colab standard environments provide 12.7 GB of system RAM, which quickly exhausts when reading large CSV files with string types and unoptimized datetime objects.',
        solution:
          'Implemented chunk-based processing (chunksize=100_000) combined with aggressive dtype downcasting (int32/float32 and category types), reducing in-memory footprint by over 68%.',
        implementationApproach:
          'Iterative map-reduce aggregation loops that computed hourly station telemetry summaries in chunks without loading raw event logs into RAM simultaneously.',
      },
      {
        challenge: 'Reconciling Disparate Telemetry Across Station Hardware and Weather Shocks',
        explanation:
          'Correlating discrete swap attempts with continuous hourly station telemetry, rider demographics, and city ambient temperatures required synchronizing disparate sampling intervals.',
        solution:
          'Constructed standardized composite temporal keys (station_id + floor(timestamp, 1H)) to perform high-speed inner joins between swap events and hourly station status matrices.',
        implementationApproach:
          'Engineered a deterministic temporal join pipeline in Pandas that accurately mapped extreme ambient heat days (>44°C) to specific charger thermal throttling events.',
      },
      {
        challenge: 'Segmenting Battery Degradation Curves Across Heterogeneous Cell Suppliers',
        explanation:
          'Comparing battery packs from Cellora, Amptek, and Kyron was complicated by non-linear cycle wear, varying depth of discharge (DoD), and different vehicle pack capacities (2.4 kWh vs 4.8 kWh).',
        solution:
          'Normalized degradation metrics per 100 equivalent full cycles (EFC) and segregated packs by capacity cohort, isolating manufacturer chemistry differences from usage intensity.',
        implementationApproach:
          'Formulated cycle-adjusted exponential decay models in NumPy, proving that Kyron offered higher energy density and range but exhibited 4.3% faster SoH loss than Amptek.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Complete operational audit of 3,877,013 battery swap transactions',
        'Ingestion and relational harmonization of 8 heterogeneous enterprise datasets',
        'Comprehensive hourly demand profiling and stockout surge diagnostics',
        'Vehicle class reliability disparity analysis isolating 3W charging bottlenecks',
        '18-month gross revenue and direct margin contribution unit economics',
        'Supplier-level battery lifecycle and State-of-Health (SoH) benchmarking',
        'Production of 12 publication-quality Seaborn and Matplotlib diagnostic charts',
      ],
      technicalAchievements: [
        'Processed 3.88M records within standard Google Colab memory limits via chunking',
        'Identified that 92.07% of network failures stemmed from inventory stockouts rather than system crashes',
        'Demonstrated that commercial 3W failure rate (10.35%) was 1.9x higher than 2W (5.42%)',
        'Validated ₹1,233.1 Million in cumulative gross revenue with 94.04% overall completion',
        'Ranked top 10 bottlenecked stations and isolated high-temperature grid stress in northern hubs',
      ],
      verifiedMetrics: [
        'Total Swap Attempts Analyzed: 3,877,013',
        'Completed Swaps: 3,645,809 (94.04% Success Rate)',
        'Gross Revenue Analyzed: ₹1,233.1 Million',
        'Direct Net Contribution: ₹1,162.0 Million',
        'Monthly Revenue Growth: ₹16.32M (Jan 2024) to ₹117.45M (Jan 2025)',
        'Top Unit Margin Segment: Cargo 3W at ₹158.95 per swap',
        'Inventory Failure Attribution: 92.07% (134,389 stockout events)',
        'Metros Covered: 6 Cities (Bengaluru, Delhi NCR, Hyderabad, Pune, Mumbai, Jaipur)',
      ],
    },
    links: {
      github: 'https://github.com/keerthi1719/VoltRelay-Battery-Swapping-Analytics.git',
      githubLabel: 'View Source Code',
      liveDemo: 'https://colab.research.google.com/drive/1BApKWs4zyATfs-H4em2uEIO11ggTQJPo?usp=sharing',
      liveDemoLabel: 'Open Google Colab Notebook',
      relatedResources: [
        {
          title: 'Google Colab Notebook',
          url: 'https://colab.research.google.com/drive/1BApKWs4zyATfs-H4em2uEIO11ggTQJPo?usp=sharing',
          type: 'Interactive Notebook',
        },
        {
          title: 'GitHub Source Repository',
          url: 'https://github.com/keerthi1719/VoltRelay-Battery-Swapping-Analytics.git',
          type: 'Source Code',
        },
        {
          title: 'Gradient Hackathon Context',
          url: 'https://github.com/keerthi1719/VoltRelay-Battery-Swapping-Analytics.git',
          type: 'Documentation',
        },
      ],
    },
  },

  // 11. Campfly Sales Analysis Dashboard - Completed
  'campfly-sales-analysis': {
    id: 'campfly-sales-analysis',
    slug: 'campfly-sales-analysis',
    title: 'Campfly Sales Performance Dashboard',
    shortTitle: 'Campfly Sales Analysis',
    subtitle: 'Transforming Sales Data into Meaningful Business Insights',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: ['Data Analytics'],
    status: 'Completed',
    shortDescription:
      'An interactive Power BI dashboard designed to analyze revenue, profitability, customer contributions, geographical sales performance, and monthly sales trends.',
    assetFolderPath: '/projects/campfly-sales-analysis/',
    coverImage: '/projects/campfly-sales-analysis/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/campfly-sales-analysis/demo.mp4',
      thumbnail: '/projects/campfly-sales-analysis/cover.png',
      title: 'Watch the Campfly Sales Dashboard in Action',
      description:
        'Explore interactive Power BI navigation: executive revenue KPIs, channel contribution donut charts, monthly trendlines, customer rankings, and city drill-downs.',
      duration: 'Interactive Power BI Walkthrough',
    },
    pdfReport: {
      url: '/projects/campfly-sales-analysis/documentation/project-report.pdf',
      title: 'Explore the Complete Sales Dashboard',
      description:
        'View the actual Campfly Sales Performance Dashboard report directly within this portfolio.',
      buttonLabel: 'Explore Dashboard Report',
      pageCount: 4,
      pageTitles: [
        'Executive Overview',
        'Product Performance',
        'Channel & Regional Analysis',
        'Sales Trends & Growth',
      ],
    },
    links: {
      github:
        'https://github.com/sreeramganesh/Campfly-Sales-Analysis-Dashboard-Power-BI-Project.git',
      githubLabel: 'View Source Code',
      relatedResources: [
        {
          title: 'Microsoft Power BI Desktop Documentation',
          url: 'https://learn.microsoft.com/en-us/power-bi/',
          type: 'BI Platform',
        },
        {
          title: 'DAX (Data Analysis Expressions) Reference',
          url: 'https://learn.microsoft.com/en-us/dax/',
          type: 'Calculation Language',
        },
      ],
    },
    overview: {
      introduction:
        'Campfly Sales Performance Dashboard is an interactive commercial business intelligence and sales analytics solution developed in Microsoft Power BI Desktop. The system consolidates 7,991 B2B transaction records across 3 full calendar years (2017 to 2019), evaluating NZD $154.57M in cumulative revenue, product profitability, channel performance, customer contributions, and territorial demand distribution across New Zealand.',
      purpose:
        'Modern multi-channel commercial distributors generate massive transaction streams across disparate ERP and CRM databases. Without a unified business intelligence environment, commercial leadership cannot easily discern which sales channels yield the highest margins, when seasonal demand surges require inventory buffer expansion, or which customer accounts represent critical revenue concentrations. This project addresses these challenges by transforming raw tabular sales records into an intuitive, interactive analytical dashboard that empowers leadership to make informed, data-driven decisions.',
      mainObjective:
        'Transform 7,991 multi-channel sales records into an executive Power BI dashboard that delivers real-time visibility into revenue ($154.57M), gross profit ($143.13M), 92.76% profit margins, channel attribution, and seasonal monthly patterns.',
      howItWorks:
        'Raw transactional data is extracted from an Excel workbook comprising 4 relational sheets (Sales Orders, Customers, Regions, Products) and loaded into Power BI Desktop via Power Query. A Star Schema data model is established with 1-to-many relationships connecting the 7,991-row Sales Orders fact table to dimension tables. Custom DAX measures compute top-line revenue, gross profit, profit margin percentages, and monthly growth rates. The resulting 4-page report features executive KPIs, monthly trendlines, channel contribution donut charts, customer bar charts, and interactive slicers filtering by Year, Products, and City.',
      targetUsers: [
        'Executive Leadership & Commercial Directors',
        'Sales Operations Managers & Channel Leads',
        'Inventory Planners & Supply Chain Coordinators',
        'Financial Analysts & Corporate Controllers',
      ],
      highlights: [
        'Interactive 4-Page Power BI Business Intelligence Dashboard',
        'Analysis of 7,991 Transaction Records Generating NZD $154.57M Revenue',
        'High Gross Profitability Tracking ($143.13M Profit / 92.76% Margin)',
        'Wholesale Channel Dominance Evaluation (53.67% of Gross Revenue)',
        'Monthly Seasonality Discovery Isolating March as Peak Sales ($14.40M)',
        'Top 10 Enterprise Customer Contribution Analysis Led by Medline ($4.08M)',
        'Geographic Sales Distribution Across 100 New Zealand Delivery Territories',
      ],
    },
    problemStatement: {
      title: 'Multi-Channel Sales Fragmentation, Inventory Imbalances & Delayed Insights',
      mainProblem:
        'Commercial distribution companies manage complex sales operations across multiple channels (Wholesale, Distributor, Export) and extensive regional delivery networks. When sales performance indicators are siloed across disconnected spreadsheets, management struggles to answer fundamental business questions: Which sales channels deliver the highest volume? Which products yield the greatest profit margins? When do seasonal demand peaks occur? And which enterprise customers generate the highest lifetime value?',
      existingLimitations: [
        'Fragmented Data Silos: Transactional records, regional address indices, and customer details existed in separate tables without unified relational reporting.',
        'Seasonal Inventory Mismatches: Inability to anticipate annual revenue peaks (e.g., the March outdoor surge) led to costly stockouts or warehouse overstock.',
        'Opaque Channel Contribution: Marketing and sales resources were allocated without visibility into the revenue split between Wholesale, Distributors, and Direct Exports.',
        'Unidentified Customer Concentration: Inability to readily rank the top 10 accounts created hidden revenue vulnerability if a major client churned.',
        'Manual Reporting Latency: Preparing static quarterly management reports took days of manual Excel aggregation and pivot table rebuilding.',
      ],
      whyItMatters:
        'In high-volume distribution, real-time visibility into channel performance and customer concentration enables leadership to protect gross margins, optimize warehouse replenishment cycles, and negotiate strategic terms with high-volume accounts.',
      keyChallenges: [
        {
          title: 'Multi-Channel Revenue Attribution',
          description:
            'Accurately segmenting and visualizing gross sales across Wholesale (53.67%), Distributor (31.68%), and Export (14.64%) channels without double-counting.',
          iconName: 'PieChart',
        },
        {
          title: 'Seasonal Monthly Demand Modeling',
          description:
            'Synthesizing 3 years of order history to identify predictable seasonal peaks (e.g., March generating $14.40M) and troughs.',
          iconName: 'TrendingUp',
        },
        {
          title: 'Relational Star Schema Construction',
          description:
            'Establishing clean 1-to-many relationships between 7,991 transaction records and three separate dimension tables (Customers, Regions, Products).',
          iconName: 'Layers',
        },
      ],
    },
    solution: {
      title: 'Centralized 4-Page Power BI Sales Intelligence Dashboard with Star Schema Modeling',
      approach:
        'An end-to-end business intelligence architecture combining Power Query ETL transformations, a relational Star Schema data model, custom DAX measures, and an interactive 4-page executive reporting suite.',
      technicalSolution:
        'Engineered in Power BI Desktop utilizing a central Fact Table (Sales Orders, 7,991 rows) linked to Customers (50 accounts), Regions (100 delivery territories), and Products (15 lines). Authored DAX measures for Total Revenue ($154.57M), Total Profit ($143.13M), Profit Margin % (92.764%), Order Quantity (67,579 units), and Total Unit Cost ($11.44M). Designed 4 dedicated visual pages: Executive Overview, Product Performance, Channel & Regional Analysis, and Sales Trends & Growth. Built multi-dimensional slicers (Year, Products, City) for instantaneous visual filtering.',
      implementationOverview:
        'Extracted tabular data from Excel, performed type standardization and key mapping in Power Query M, created relational model in Power BI, validated calculations, published interactive 4-page PDF documentation, and recorded high-definition demonstration walkthrough.',
      howItSolves: [
        'Consolidates $154.57M in gross revenue and $143.13M in profit into real-time executive KPI cards',
        'Reveals Wholesale as the primary driver (53.67%), while Distributor (31.68%) and Export (14.64%) provide diversification',
        'Isolates March ($14.40M) and September ($13.81M) as peak outdoor camping procurement months',
        'Identifies top enterprise customers led by Medline ($4.08M) and Pure Group ($3.82M) to strengthen B2B partnerships',
        'Maps geographical sales distribution across 100 territories, highlighting key demand clusters in Waitomo, Christchurch, and Hamilton',
      ],
    },
    keyFeatures: [
      {
        iconName: 'DollarSign',
        title: 'Executive Revenue & Profitability KPIs',
        description:
          'Real-time KPI cards tracking $154.57M Total Revenue, $143.13M Total Profit, 92.76% Profit Margin, 68K Order Quantity, and $11.44M Total Unit Cost.',
      },
      {
        iconName: 'TrendingUp',
        title: 'Monthly Revenue Trendlines & Seasonality',
        description:
          'Time-series visualization highlighting seasonal sales peaks, identifying March as the champion revenue month at $14.40M.',
      },
      {
        iconName: 'PieChart',
        title: 'Sales Channel Revenue Contribution',
        description:
          'Interactive donut chart breaking down revenue streams into Wholesale (53.67%), Distributor (31.68%), and Export (14.64%).',
      },
      {
        iconName: 'Users',
        title: 'Top 10 Enterprise Customer Ranking',
        description:
          'Horizontal bar chart identifying top revenue-driving accounts, led by Medline ($4.08M), Pure Group ($3.82M), and OUR Ltd ($3.68M).',
      },
      {
        iconName: 'MapPin',
        title: 'Geographical Revenue Distribution',
        description:
          'Regional sales mapping across 100 New Zealand delivery territories, highlighting top-volume hubs like Waitomo (~$17.2M) and Christchurch ($11.53M).',
      },
      {
        iconName: 'Sliders',
        title: 'Multi-Dimensional Interactive Slicers',
        description:
          'Dynamic cross-filtering by Year (2017, 2018, 2019), Product lines (15 categories), and Delivery City for customized operational exploration.',
      },
    ],
    architecture: {
      description:
        'The project architecture adheres to industry-standard business intelligence methodologies: raw tabular data extraction from Excel, schema structuring and type coercion in Power Query, star schema relational modeling, DAX calculation formulation, and publication to an interactive 4-page executive report.',
      frontend:
        'Interactive Microsoft Power BI Desktop visualization canvas with 4 cohesive report pages, cross-filtering slicers, and visual tooltips.',
      backend:
        'Power BI In-Memory Tabular Engine (VertiPaq) executing optimized DAX measures and relationship queries.',
      database:
        'Structured multi-sheet Excel workbook containing Sales Orders (7,991 rows) and 3 dimension tables (Customers, Regions, Products).',
      apis: [
        'Power BI Tabular Modeling Engine & VertiPaq Compressor',
        'DAX Calculation Engine (SUM, DIVIDE, RELATED, CALCULATE, RANKX)',
        'Power Query M Data Transformation Engine',
        'Dynamic Cross-Filtering & Slicer Interactivity Engine',
      ],
      workflow: [
        '1. Data Ingestion: Excel sheets loaded into Power Query; timestamps parsed and relational key indices assigned.',
        '2. Star Schema Modeling: 1-to-many relationships configured between Sales Orders and dimension tables.',
        '3. DAX Formulation: Measures authored for Total Revenue, Total Cost, Total Profit, Profit Margin %, and Order Quantity.',
        '4. Visual Canvas Design: 4 cohesive pages crafted covering Executive Overview, Products, Channels, and Trends.',
        '5. Slicer Configuration: Multi-select slicers wired for Year, Products, and City cross-filtering.',
        '6. Publication & Video Walkthrough: Exported high-resolution 4-page PDF documentation and recorded MP4 walkthrough.',
      ],
    },
    techStack: [
      'Power BI',
      'DAX',
      'Power Query',
      'Data Modeling',
      'Excel',
      'Sales Analytics',
    ],
    techStackGrouped: [
      {
        category: 'Business Intelligence & Visualization',
        items: [
          { name: 'Microsoft Power BI Desktop', role: 'Primary visual authoring, report layout design, and dashboard engine', iconName: 'BarChart3' },
          { name: 'Interactive Slicers', role: 'Multi-dimensional cross-filtering by Year, Product, and City', iconName: 'Sliders' },
          { name: 'Donut & Trend Visuals', role: 'Channel contribution and seasonal time-series revenue visualizations', iconName: 'PieChart' },
        ],
      },
      {
        category: 'Analytical Calculations & DAX',
        items: [
          { name: 'DAX (Data Analysis Expressions)', role: 'Core business calculation engine evaluating revenue, profit, and margins', iconName: 'Calculator' },
          { name: 'Profit Margin % Logic', role: 'Safe division calculations evaluating profit percentage across partitions', iconName: 'Percent' },
          { name: 'Customer Ranking Measures', role: 'Aggregated revenue evaluation ranking top 10 B2B enterprise accounts', iconName: 'ListOrdered' },
        ],
      },
      {
        category: 'Data Transformation & Modeling',
        items: [
          { name: 'Power Query (M Language)', role: 'ETL extraction, data type coercion, null value handling, and column derivation', iconName: 'Cpu' },
          { name: 'Star Schema Architecture', role: 'Central 7,991-row Sales Orders fact table linked to 3 dimension tables', iconName: 'Layers' },
        ],
      },
      {
        category: 'Data Sources & Documentation',
        items: [
          { name: 'Microsoft Excel', role: 'Structured multi-sheet tabular data source containing 7,991 order records', iconName: 'FileSpreadsheet' },
          { name: 'Interactive 4-Page PDF', role: 'High-resolution publication report documenting all 4 dashboard pages', iconName: 'FileText' },
          { name: 'MP4 Demonstration Video', role: 'Recorded video walkthrough of dashboard interactions and cross-filtering', iconName: 'Play' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/campfly-sales-analysis/gallery/executive_overview.png',
        caption:
          'Executive Overview Dashboard: Executive layout featuring top KPIs ($154.57M Revenue, $143.13M Profit, 92.76% Margin, 68K Qty, $11.44M Cost), monthly trendlines, channel contribution donut chart, and top 10 customers.',
        alt: 'Campfly Sales Analysis Executive Overview Dashboard',
      },
      {
        url: '/projects/campfly-sales-analysis/gallery/Sales trends.png',
        caption:
          'Sales Trends & Growth Dashboard: Longitudinal analysis tracking annual revenue performance, channel growth rates, and monthly profit trajectories across 2017 to 2019.',
        alt: 'Campfly Sales Trends and Growth Analysis Dashboard',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Commercial Domain Analysis & Data Auditing',
        description:
          'Audited outdoor recreational equipment sales dynamics. Structured 7,991 transaction records spanning 2017 to 2019 into a normalized dimensional structure.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Star Schema Construction & Power Query ETL',
        description:
          'Engineered a star schema in Power BI Desktop linking Sales Orders with dimension tables for Customers (50 accounts), Products (15 lines), and Regions (100 territories).',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'DAX Business Measure Formulation',
        description:
          'Authored DAX measures calculating Total Revenue ($154.57M), Total Profit ($143.13M), Profit Margin % (92.764%), Order Quantity (68K), and Customer Rankings.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Multi-Page Executive Dashboard Design',
        description:
          'Designed 4 cohesive pages covering Executive Overview, Product Performance, Channel & Regional Analysis, and Sales Trends & Growth with interactive slicers.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Documentation, PDF Publishing & Video Demonstration',
        description:
          'Exported the 4-page Power BI report to high-resolution PDF, recorded an interactive video demonstration, and authored the comprehensive portfolio case study.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S.',
        role: 'Lead Business Intelligence Developer & Data Analyst',
        image: '/images/team/sreeram.jpg',
        responsibilities: [
          'End-to-end design, data modeling, and visual engineering of the Campfly Power BI dashboard',
          'Authored DAX business measures for revenue, profit, margins, and customer rankings',
          'Structured Star Schema data model linking 7,991 sales orders with 3 dimension tables',
          'Designed interactive visual layouts, channel contribution donut charts, and monthly trendlines',
          'Produced the 4-page high-resolution project report and recorded demonstration video',
        ],
        technicalContributions: [
          'Engineered Star Schema data model optimizing analytical query speed across 7,991 records',
          'Implemented DAX calculations verifying $154.57M revenue, $143.13M profit, and 92.76% margin',
          'Designed time-series seasonality visual isolating March ($14.40M) as the peak sales period',
          'Configured multi-dimensional slicers enabling instant filtering by Year, Product, and City',
        ],
        technologiesHandled: [
          'Microsoft Power BI',
          'DAX (Data Analysis Expressions)',
          'Power Query (M Language)',
          'Star Schema Modeling',
          'Microsoft Excel',
          'Sales Analytics',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Accurate Multi-Channel Revenue Attribution Without Double-Counting',
        explanation:
          'Transactions were split across Wholesale, Distributor, and Export channels with varying discount structures and order sizes, creating potential attribution discrepancies.',
        solution:
          'Formulated clean DAX measures that evaluate channel-level revenue dynamically, proving Wholesale generated 53.67% ($82.97M), Distributor 31.68% ($48.97M), and Export 14.64% ($22.64M).',
      },
      {
        challenge: 'Isolating Multi-Year Seasonal Demand Peaks',
        explanation:
          'Camping and outdoor equipment sales fluctuate dramatically across seasons, making static annual averages inadequate for inventory replenishment planning.',
        solution:
          'Built time-series monthly trendline visualizations that revealed March as the predictable annual peak at $14.40M, providing clear lead-time guidance for procurement teams.',
      },
      {
        challenge: 'Validating High Gross Profit Margins (92.76%)',
        explanation:
          'A profit margin exceeding 92% required thorough verification against raw unit cost and unit price records to confirm calculation integrity.',
        solution:
          'Audited the underlying cost accounting metrics in Excel, confirming Total Unit Cost was $11.44M against $154.57M in revenue, yielding an authentic gross profit of $143.13M.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Interactive 4-page Power BI sales intelligence dashboard',
        'Executive KPI cards tracking $154.57M Revenue, $143.13M Profit, and 92.76% Margin',
        'Channel contribution donut chart breaking down Wholesale, Distributor, and Export',
        'Monthly seasonality time-series charts identifying March ($14.40M) as peak revenue',
        'Top 10 B2B enterprise customer ranking led by Medline ($4.08M)',
        'Geographic territory analysis mapping sales across 100 delivery territories',
        'Multi-dimensional slicers filtering by Year (2017-2019), Products, and City',
        'Published 4-page high-resolution PDF report and recorded video walkthrough',
      ],
      technicalAchievements: [
        'Successfully modeled 7,991 sales orders into an optimized Star Schema',
        'Formulated verified DAX measures evaluating $154.57M revenue and $143.13M profit',
        'Identified Product 7 as the champion product line generating $25.71M in sales',
        'Delivered 100% interactive reporting with instant cross-filtering response times',
      ],
      testingResults: [
        'All KPI values validated against raw Excel workbook records ($154.57M Rev, $143.13M Profit, 68K Qty)',
        'Channel percentages confirmed exact: Wholesale 53.67%, Distributor 31.68%, Export 14.64%',
        'Customer rankings confirmed: Medline #1 at $4.08M, Pure Group #2 at $3.82M',
        '4-page PDF report confirmed byte-for-byte identical to Power BI Desktop publication export',
      ],
      demonstratedCapabilities: [
        'Enterprise Business Intelligence & Sales Analytics in Microsoft Power BI',
        'DAX Calculation Formulation (Time Intelligence, Aggregations, Ranks)',
        'Relational Data Modeling & Star Schema Construction (VertiPaq Engine)',
        'Commercial Supply Chain, Channel Economics & Seasonality Analysis',
        'Executive Visual Storytelling & Multi-Page Dashboard UX Design',
      ],
    },
  },

  // 12. Insurance Risk Overview Dashboard - Completed
  'insurance-risk-overview': {
    id: 'insurance-risk-overview',
    slug: 'insurance-risk-overview',
    title: 'Insurance Risk Overview Dashboard',
    shortTitle: 'Insurance Risk Overview',
    subtitle: 'Understand Insurance Risk. Explore Portfolio Performance. Discover Data-Driven Insights.',
    category: 'Data Analytics & Business Intelligence',
    domain: 'Data Analytics',
    domains: [
      'Data Analytics',
      'Microsoft Power BI',
      'Business Intelligence',
      'Data Visualization',
      'Insurance Analytics',
    ],
    status: 'Completed',
    shortDescription:
      'An interactive Power BI dashboard designed to analyze insurance portfolio risk, examine loss ratios, and explore policy distribution across regions and income groups.',
    assetFolderPath: '/projects/insurance-risk-overview/',
    coverImage: '/projects/insurance-risk-overview/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/insurance-risk-overview/demo.mp4',
      thumbnail: '/projects/insurance-risk-overview/cover.png',
      title: 'Watch the Insurance Risk Overview Dashboard in Action',
      description:
        'Watch the project demonstration to explore the interactive Power BI dashboard, its analytical sections, regional filters, loss ratio visualizations, and detailed portfolio audit tables.',
      duration: 'Interactive Power BI Walkthrough',
    },
    pdfReport: {
      url: '/projects/insurance-risk-overview/documentation/project-report.pdf',
      title: 'Explore the Complete Insurance Risk Dashboard',
      description:
        'Explore the complete Power BI dashboard report and examine the visualizations, insurance risk indicators, and analytical breakdowns across all available report pages.',
      buttonLabel: 'Explore Dashboard Report',
      pageCount: 4,
      pageTitles: [
        'Page 1: Executive Risk Overview (Portfolio KPIs, Risk Scores & Regional Loss Ratios)',
        'Page 2: Risk Category & Claim Analysis (Premium vs Claim Amounts & Customer Telemetry)',
        'Page 3: Health & Driving Experience (Chronic Conditions, Driver Tenure & Claim Severity)',
        'Page 4: Detailed Portfolio Report (Comprehensive Underwriting Audit & Customer Records)',
      ],
    },
    links: {
      github:
        'https://github.com/sreeramganesh/Insurance-Risk-Overview-Dashboard-Power-BI-Project.git',
      githubLabel: 'View Source Code on GitHub',
      relatedResources: [
        {
          title: 'Microsoft Power BI Documentation',
          url: 'https://learn.microsoft.com/en-us/power-bi/',
          type: 'BI Platform',
        },
        {
          title: 'DAX (Data Analysis Expressions) Reference',
          url: 'https://learn.microsoft.com/en-us/dax/',
          type: 'Calculation Language',
        },
        {
          title: 'Insurance Loss Ratio & Risk Modeling Concepts',
          url: 'https://www.investopedia.com/terms/l/loss-ratio.asp',
          type: 'Actuarial Reference',
        },
        {
          title: 'Power Query M Formula Language Reference',
          url: 'https://learn.microsoft.com/en-us/powerquery-m/',
          type: 'ETL Engine',
        },
      ],
    },
    overview: {
      introduction:
        'The Insurance Risk Overview Dashboard is a commercial business intelligence and portfolio risk analytics solution developed in Microsoft Power BI Desktop. The system consolidates 50,000 policyholder records across 4 relational tables (Fact_Risk_Premium, Dim_Customer, Dim_Health, Dim_Driving), evaluating $3.67 Billion ($4B) in annual premiums against $6.41 Billion in incurred claims. By structuring raw actuarial datasets into an intuitive Star Schema, the dashboard delivers real-time visibility into an overall 174.59% loss ratio, a 52.08% high-risk policy concentration, an average risk score of 40.96, and acute regional variance across East, West, North, and South territories.',
      purpose:
        'Insurance enterprises manage vast portfolios of policies, premiums, customer health profiles, driving records, and claim payouts. In the absence of a consolidated analytics platform, underwriters, actuaries, and risk officers must manually reconcile disparate policy management systems, making it difficult to detect unsustainable claim payouts, evaluate risk exposure across demographic income bands, or isolate geographic catastrophe zones. This project bridges this critical gap by harmonizing complex portfolio data into an interactive decision-support interface.',
      mainObjective:
        'Transform 50,000 multi-table insurance records into an executive 4-page Power BI dashboard that provides decision-makers with instant clarity on portfolio health (174.59% loss ratio), risk score distributions (40.96 mean), high-risk policy exposure (52.08%), and claims severity across regions and income segments.',
      howItWorks:
        'Raw policy and underwriting datasets are extracted from an Excel workbook with 4 relational sheets (Fact_Risk_Premium, Dim_Customer, Dim_Health, Dim_Driving) and ingested into Power BI Desktop via Power Query. A star schema data model is established connecting the 50,000-row fact table with customer demographics, medical history (chronic conditions), and driving experience. Custom DAX measures calculate Loss Ratio, High Risk %, Total Annual Premium, Claim Severity, and Average Risk Score. The resulting 4-page report provides synchronized slicers (Region, Income Band, Risk Category), regional pivot summaries, scatter charts, and detailed customer policy audit tables.',
      targetUsers: [
        'Chief Risk Officers & Actuarial Executives',
        'Commercial Insurance Underwriters',
        'Claims Management & Audit Specialists',
        'Portfolio Financial Analysts',
        'Regional Operations Directors',
      ],
      highlights: [
        'Consolidation of 50,000 Policy Records & $3.67B in Annual Premiums',
        'Loss Ratio Evaluation Revealing a 174.59% Portfolio Payout Ratio',
        'High-Risk Concentration Discovery (52.08% of All Policies in High Risk)',
        'Regional Disparity Analysis Contrasting West (312% Loss Ratio) vs East (57%)',
        'Income Band Risk Score Comparison (Medium: 45.76 vs High: 35.10)',
        'Chronic Condition & Driver Experience Impact Modeling on Claim Severity',
        'Multi-Dimensional Slicers for Region, Income Band, and Risk Category',
        '4-Page Publication Report Embedded with Interactive PDF Controls',
      ],
    },
    problemStatement: {
      title: 'Actuarial Opacity, Unbalanced Loss Ratios & Regional Risk Concentrations',
      mainProblem:
        'Underwriting and portfolio management teams operate in environments where policy issuance ledgers, demographic surveys, medical histories, and claims payment databases exist in separate systems. Without a unified analytical model, insurers cannot readily evaluate whether collected premiums adequately cover claims liability, identify which customer demographics drive outsized risk, or isolate regional branches where claim severity threatens company solvency.',
      existingLimitations: [
        'Disjointed Policy & Claims Ledgers: Policy premiums and claims payouts are tracked in isolated transactional databases, obscuring true regional loss ratios.',
        'Opaque Risk Stratification: High-risk policyholders (52.08%) are not dynamically flagged alongside their driving tenure or chronic health conditions.',
        'Regional Loss Blindspots: High-level national averages conceal that the West region operates at an unsustainable 312% loss ratio while the East region remains profitable at 57%.',
        'Income Band Risk Misconceptions: Assuming lower-income policyholders always represent highest risk overlooks empirical patterns where Medium Income bands exhibit higher risk scores (45.76).',
        'Cumbersome Portfolio Auditing: Auditing individual high-loss policies across 50,000 accounts requires manual spreadsheet filtering rather than automated BI tables.',
      ],
      whyItMatters:
        'In the insurance industry, sustaining a loss ratio above 100% means claims exceed earned premium revenue, threatening capital reserves. Real-time portfolio analytics empower underwriters to adjust pricing bands, revise deductible structures, and remediate high-risk regional concentrations.',
      keyChallenges: [
        {
          title: 'Portfolio-Wide Loss Ratio Calculation',
          description:
            'Formulating robust DAX ratios comparing $6.41B in incurred claims against $3.67B in collected annual premiums.',
          iconName: 'Calculator',
        },
        {
          title: 'Multi-Table Relational Schema Architecture',
          description:
            'Linking 50,000 policy fact records with customer demographics, health profiles, and driving experience dimensions.',
          iconName: 'Layers',
        },
        {
          title: 'Regional Risk & Income Band Cross-Filtering',
          description:
            'Enabling synchronized slicers across Region, Income Band, and Risk Category without breaking visual context.',
          iconName: 'Sliders',
        },
        {
          title: 'Claims Severity & Risk Score Normalization',
          description:
            'Evaluating claim payout severity per claim incident across high, medium, and low risk policy tiers.',
          iconName: 'TrendingUp',
        },
      ],
    },
    solution: {
      title: 'Consolidated 4-Page Insurance Portfolio Risk Intelligence Dashboard in Power BI',
      approach:
        'A relational business intelligence solution combining Power Query data preparation, a Star Schema data model, custom DAX actuarial measures, and an interactive 4-page executive reporting suite.',
      technicalSolution:
        'Engineered in Power BI Desktop utilizing a 50,000-row central Fact table (Fact_Risk_Premium) connected via 1-to-1/1-to-many relationships to Dim_Customer, Dim_Health, and Dim_Driving. Formulated DAX measures for Total Policies (50K), Total Annual Premium ($3.67B / $4B), Loss Ratio (174.59%), High Risk % (52.08%), Average Risk Score (40.96), and Claim Severity. Designed 4 cohesive pages: Executive Overview, Risk Category & Claim Analysis, Health & Driving Experience, and Detailed Portfolio Report. Integrated dynamic slicers for Region (East, West, North, South), Income Band (High, Medium, Low), and Risk Category (High, Medium, Low).',
      implementationOverview:
        'Extracted tabular policy data from Excel, harmonized keys and types in Power Query, built relational star schema, validated calculations against raw totals, published 4-page PDF documentation, and recorded a complete demonstration walkthrough.',
      howItSolves: [
        'Consolidates 50,000 policies and $3.67B in premium into real-time executive KPI cards',
        'Exposes an unsustainable 174.59% portfolio loss ratio ($6.41B in claims vs $3.67B in premiums)',
        'Identifies Region West as the primary loss driver with a 312% loss ratio across 22,740 policies',
        'Demonstrates that Region East is the only profitable territory with a sustainable 57% loss ratio',
        'Reveals that Medium Income policyholders hold the highest average risk score (45.76), contrasting High Income (35.10)',
        'Provides a granular customer-level audit table for underwriters to inspect individual claim payouts and risk factors',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Activity',
        title: 'Insurance Risk Overview & Executive KPIs',
        description:
          'Real-time executive tracking of 50K Total Policies, $4B Annual Premium ($3.67B), 174.59% Loss Ratio, 52.08% High Risk Proportion, and 40.96 Average Risk Score.',
      },
      {
        iconName: 'Calculator',
        title: 'Portfolio Loss Ratio Monitoring',
        description:
          'Financial solvency metric evaluating total incurred claim payouts ($6.41B) against earned premium ($3.67B), exposing severe underwriting deficits.',
      },
      {
        iconName: 'Layers',
        title: 'Risk Category Distribution & Stratification',
        description:
          'Segmentation of 50,000 policies into High Risk (26,041 policies / 52.08%), Medium Risk (6,957 policies / 13.91%), and Low Risk (17,002 policies / 34.00%).',
      },
      {
        iconName: 'MapPin',
        title: 'Regional Risk & Territory Disparities',
        description:
          'Geographic exposure comparison across West (22,740 policies, 312% loss ratio), South (12,449 policies, 184% loss ratio), North (10,607 policies, 146% loss ratio), and East (4,204 policies, 57% loss ratio).',
      },
      {
        iconName: 'BarChart3',
        title: 'Income Band Risk Score Comparison',
        description:
          'Demographic risk evaluation revealing that Medium Income policyholders carry the highest average risk score (45.76), followed by Low Income (42.02) and High Income (35.10).',
      },
      {
        iconName: 'TrendingUp',
        title: 'Claims Severity & Payout Dynamics',
        description:
          'Scatter plot and combo chart analysis correlating annual premium with claim payout severity to isolate disproportionate customer losses.',
      },
      {
        iconName: 'Heart',
        title: 'Chronic Health & Driving Experience Analysis',
        description:
          'Deep-dive actuarial correlations analyzing driver experience tenure (years) and policyholder chronic medical conditions against claim loss ratios.',
      },
      {
        iconName: 'Sliders',
        title: 'Interactive Multi-Dimensional Slicers',
        description:
          'Synchronized interactive filters for Region, Income Band, and Risk Category enabling instantaneous cross-filtering across all visual modules.',
      },
    ],
    architecture: {
      description:
        'The project architecture follows an enterprise business intelligence paradigm: raw policy and demographic data ingestion from Excel, relational data model structuring in Power Query, Star Schema establishment, DAX measure formulation, and responsive 4-page dashboard reporting.',
      frontend:
        'Interactive Microsoft Power BI Desktop canvas featuring 4 dedicated analytical pages, synchronized slicers, regional pivot matrix tables, scatter plots, and customer audit tables.',
      backend:
        'Power BI In-Memory Tabular Engine (VertiPaq) executing optimized DAX measures and cross-filtering queries across 50,000 records.',
      database:
        'Relational star schema comprising 1 central fact table (Fact_Risk_Premium, 50,000 rows) linked to 3 dimension tables (Dim_Customer, Dim_Health, Dim_Driving).',
      workflow: [
        'Data Ingestion: Ingesting 50,000 records across 4 relational sheets from Insurance_Dataset.xlsx into Power BI',
        'Data Cleaning & Transformation: Standardizing regional codes, currency formats, and income band classifications in Power Query',
        'Star Schema Modeling: Creating relational cardinalities linking Fact_Risk_Premium with Dim_Customer, Dim_Health, and Dim_Driving',
        'DAX Measure Formulation: Calculating Loss Ratio, High Risk %, Total Annual Premium, Claim Severity, and Average Risk Score',
        'Dashboard Page Development: Designing 4 cohesive pages covering Executive Overview, Risk Categories, Health/Driving, and Detailed Reports',
        'Interactive Slicer Integration: Configuring synchronized cross-filters for Region, Income Band, and Risk Category',
        'Report Validation & Publishing: Verifying mathematical consistency against raw Excel datasets and exporting 4-page PDF documentation',
      ],
    },
    techStack: [
      'Power BI',
      'DAX',
      'Data Modeling',
      'Power Query',
      'Excel',
      'Data Visualization',
    ],
    techStackGrouped: [
      {
        category: 'Business Intelligence & Reporting',
        items: [
          { name: 'Microsoft Power BI Desktop', role: '4-page interactive executive risk analytics dashboard', iconName: 'BarChart3' },
          { name: 'Interactive Dashboards', role: 'Synchronized cross-filtering, pivot matrices, and slicers', iconName: 'Layout' },
          { name: 'Data Visualization', role: 'Loss ratio bars, risk score distributions, and scatter matrices', iconName: 'PieChart' },
        ],
      },
      {
        category: 'Analytical Modeling & DAX',
        items: [
          { name: 'DAX (Data Analysis Expressions)', role: 'Formulating Loss Ratio, High Risk %, Claim Severity, and Risk Score', iconName: 'Calculator' },
          { name: 'Star Schema Modeling', role: 'Relational data model connecting Fact_Risk_Premium with 3 dimensions', iconName: 'Layers' },
          { name: 'Actuarial KPI Design', role: 'Underwriting threshold benchmarks and risk segmentation', iconName: 'Activity' },
        ],
      },
      {
        category: 'Data Preparation & ETL',
        items: [
          { name: 'Power Query (M Language)', role: 'Data harmonization, type enforcement, and demographic categorization', iconName: 'Workflow' },
          { name: 'Data Cleaning & Normalization', role: 'Validation of missing values, foreign keys, and regional mappings', iconName: 'CheckSquare' },
          { name: 'Relational Schema Mapping', role: '1-to-1 and 1-to-many relationship cardinality configuration', iconName: 'Layers' },
        ],
      },
      {
        category: 'Data Source & Documentation',
        items: [
          { name: 'Microsoft Excel', role: '4-sheet relational workbook storing 50,000 policy records', iconName: 'FileSpreadsheet' },
          { name: 'Interactive 4-Page PDF', role: 'High-resolution publication report documenting all dashboard pages', iconName: 'FileText' },
          { name: 'MP4 Demonstration Video', role: 'Recorded video walkthrough of dashboard interactions and cross-filtering', iconName: 'Play' },
        ],
      },
    ],
    applicationScreenshots: [
      {
        image: '/projects/insurance-risk-overview/gallery/overview.png',
        title: 'Executive Risk Overview Dashboard',
        description:
          'Executive layout featuring 5 top KPIs (50K Policies, $4B Premium, 174.59% Loss Ratio, 52.08% High Risk, 40.96 Risk Score), regional policy distribution, income-band risk scores, and loss ratio comparisons.',
        badge: 'Executive Suite',
      },
      {
        image: '/projects/insurance-risk-overview/gallery/risk-category.png',
        title: 'Risk Category & Claim Analysis Dashboard',
        description:
          'Actuarial evaluation comparing annual premium vs claim payouts across risk categories, regional policy distributions, and risk score scatter correlations.',
        badge: 'Claims & Risk',
      },
      {
        image: '/projects/insurance-risk-overview/gallery/detailed-report.png',
        title: 'Detailed Portfolio Report Dashboard',
        description:
          'Granular policyholder audit table providing customer-by-customer underwriting transparency into risk scores, claim amounts, annual premiums, and claim counts.',
        badge: 'Underwriting Audit',
      },
    ],
    gallery: [
      {
        url: '/projects/insurance-risk-overview/gallery/overview.png',
        caption:
          'Executive Risk Overview Dashboard: Executive KPIs, risk score comparisons across income bands, and regional loss ratio breakdowns.',
        alt: 'Insurance Risk Overview Dashboard Executive Layout',
      },
      {
        url: '/projects/insurance-risk-overview/gallery/risk-category.png',
        caption:
          'Risk Category Analysis Dashboard: In-depth comparison of collected premiums versus incurred claims across high, medium, and low risk policy tiers.',
        alt: 'Insurance Risk Category Analysis Dashboard',
      },
      {
        url: '/projects/insurance-risk-overview/gallery/detailed-report.png',
        caption:
          'Detailed Dashboard Report: Comprehensive tabular audit interface displaying policy-level underwriting metrics and customer claims history.',
        alt: 'Insurance Detailed Dashboard Report Table',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Insurance Domain Auditing & Data Extraction',
        description:
          'Analyzed insurance portfolio risk and actuarial underwriting metrics. Ingested 50,000 policy records across 4 relational sheets in Microsoft Excel.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Star Schema Architecture & Power Query ETL',
        description:
          'Engineered a star schema in Power BI Desktop linking Fact_Risk_Premium with Dim_Customer, Dim_Health, and Dim_Driving.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'DAX Actuarial Measure & KPI Formulation',
        description:
          'Authored core DAX measures calculating Loss Ratio (174.59%), High Risk % (52.08%), Total Premium ($3.67B / $4B), Claim Severity, and Average Risk Score (40.96).',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: '4-Page Interactive Dashboard Design',
        description:
          'Designed 4 cohesive pages: Executive Overview, Risk Category Analysis, Health & Driving Experience, and Detailed Portfolio Report with synchronized slicers.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Documentation Publishing, PDF Generation & Walkthrough',
        description:
          'Exported the 4-page Power BI dashboard to a high-resolution PDF publication report, recorded a comprehensive demonstration video, and authored the portfolio case study.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S.',
        role: 'Lead Business Intelligence Developer & Insurance Analytics Specialist',
        image: '/images/team/sreeram.jpg',
        responsibilities: [
          'End-to-end design, data modeling, and visual dashboard engineering of the Insurance Risk Overview platform',
          'Structured Star Schema data model linking 50,000 policy records with customer, health, and driving dimensions',
          'Authored DAX actuarial measures for loss ratio, high-risk percentages, claim severity, and average risk score',
          'Designed 4 cohesive report pages with synchronized Region, Income Band, and Risk Category slicers',
          'Produced the 4-page high-resolution project documentation PDF and recorded demonstration video walkthrough',
        ],
        technicalContributions: [
          'Engineered Star Schema data model optimizing analytical query speed across 50,000 policy records',
          'Implemented DAX calculations verifying $3.67B premium, $6.41B claims, and 174.59% loss ratio',
          'Identified acute regional loss ratio disparity contrasting Region West (312%) with Region East (57%)',
          'Configured synchronized slicers enabling instant cross-filtering across all 4 report pages',
        ],
        technologiesHandled: [
          'Microsoft Power BI',
          'DAX (Data Analysis Expressions)',
          'Power Query (M Language)',
          'Star Schema Modeling',
          'Microsoft Excel',
          'Insurance Analytics',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Handling Large-Scale Actuarial Telemetry (50,000 Records)',
        explanation:
          'Analyzing 50,000 policy rows with multiple dimensional attributes (income bands, regional coordinates, health conditions, driving years) in a single flat file causes memory bloat and sluggish cross-filtering.',
        solution:
          'Architected a normalized Star Schema in Power BI Desktop linking Fact_Risk_Premium to 3 distinct dimension tables, optimizing VertiPaq compression.',
        implementationApproach:
          'Established clean 1-to-1 relationships on CustomerID and PolicyID, ensuring sub-second cross-filtering responsiveness across all visual charts.',
      },
      {
        challenge: 'Loss Ratio DAX Formulation with Financial Denominator Safeguards',
        explanation:
          'Computing portfolio loss ratios across filtered subsets (e.g., specific regional or income segments) risks division-by-zero errors if certain slices lack premium revenue.',
        solution:
          'Formulated robust DAX measures using DIVIDE(): [Loss Ratio] = DIVIDE(SUM(Fact_Risk_Premium[ClaimAmount]), SUM(Fact_Risk_Premium[AnnualPremium]), 0).',
        implementationApproach:
          'Integrated conditional formatting to highlight loss ratios exceeding 100% in amber and red tones, immediately signaling unprofitable segments.',
      },
      {
        challenge: 'Modeling Multi-Dimensional Regional & Income Band Disparities',
        explanation:
          'Displaying aggregate loss ratios obscured that the West region operated at an unsustainable 312% loss ratio while the East region maintained a healthy 57% loss ratio.',
        solution:
          'Designed matrix pivot visuals and stacked bar charts combining Region and Income Band dimensions simultaneously.',
        implementationApproach:
          'Empowered underwriters to isolate specific high-loss pockets (e.g., West region medium-income policyholders generating $984.8M in claims on $314.9M premium).',
      },
      {
        challenge: 'Designing an Underwriting Audit Table with Sub-Second Responsiveness',
        explanation:
          'Underwriters require granular customer-by-customer audit tables displaying PolicyID, CustomerID, RiskScore, ClaimsCount, AnnualPremium, and ClaimAmount without degrading report performance.',
        solution:
          'Configured an optimized Power BI table visual on Page 4 with virtual scrolling and indexed measure projections.',
        implementationApproach:
          'Enabled rapid sorting by ClaimAmount or RiskScore, allowing audit teams to instantly identify the largest claim drivers in the portfolio.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'End-to-end ingestion and modeling of 50,000 policy records across 4 relational sheets in Microsoft Excel',
        'Executive actuarial KPI tracking verifying 50K Policies, $4B Premium ($3.67B), 174.59% Loss Ratio, 52.08% High Risk %, and 40.96 Average Risk Score',
        'Regional loss ratio evaluation contrasting unsustainable deficit zones (West at 312%) with profitable territories (East at 57%)',
        'Income band risk score distribution revealing Medium Income (45.76) and Low Income (42.02) exhibit higher risk than High Income (35.10)',
        'Claims severity and chronic condition deep-dive analyzing driver tenure and health profiles against claim frequency',
        'Granular customer-level underwriting audit table displaying individual policyholder telemetry',
        'Interactive filtering via Region, Income Band, and Risk Category slicers with synchronized cross-filtering',
        'Official 4-page high-resolution executive PDF report and complete demonstration video walkthrough',
      ],
      technicalAchievements: [
        'Engineered a scalable Star Schema data model in Power BI Desktop connecting Fact_Risk_Premium with 3 dimension tables',
        'Authored optimized DAX measures utilizing CALCULATE, DIVIDE, SUM, AVERAGE, and COUNTROWS',
        'Designed 4 cohesive pages covering executive overview, risk category analysis, health/driving, and detailed reports',
        'Published a 4-page publication-quality PDF report documenting all dashboard pages, visual layouts, and KPIs',
        'Recorded a high-definition video walkthrough showcasing interactive slicers and drill-throughs',
      ],
      demonstratedCapabilities: [
        'Enterprise Business Intelligence Architecture (Microsoft Power BI Desktop & Power Query)',
        'Actuarial Portfolio Risk Modeling & Loss Ratio Benchmarking',
        'Star Schema Relational Architecture & VertiPaq Tabular Optimization',
        'Demographic & Geographic Risk Exposure Analysis',
        'Interactive Underwriting Decision-Support & Portfolio Auditing',
      ],
      verifiedMetrics: [
        'Total Insured Policies: 50,000 Policies (50K)',
        'Total Collected Annual Premium: $3,673,094,248.00 ($3.67B / $4B)',
        'Total Incurred Claims: $6,412,732,246.00 ($6.41 Billion)',
        'Portfolio-Wide Loss Ratio: 174.59%',
        'Average Policy Risk Score: 40.96',
        'High-Risk Policy Proportion: 52.08% (26,041 Policies)',
        'Medium-Risk Policy Proportion: 13.91% (6,957 Policies)',
        'Low-Risk Policy Proportion: 34.00% (17,002 Policies)',
        'Highest Loss Ratio Territory: Region West (312.28% Loss Ratio)',
        'Most Profitable Territory: Region East (57.23% Loss Ratio)',
      ],
    },
    disclaimer:
      'All policy records, risk scores, premium totals, and claim amounts are part of an educational and analytical business intelligence portfolio project developed to demonstrate actuarial data visualization techniques.',
  },

  // 13. Customer Churn Webpage - Completed
  'customer-churn-webpage': {
    id: 'customer-churn-webpage',
    slug: 'customer-churn-webpage',
    title: 'Customer Churn Webpage',
    shortTitle: 'ChurnIQ — Customer Churn Intelligence',
    subtitle: 'Predict, Analyze, and Understand Customer Churn Through Machine Learning',
    category: 'Data Science & Predictive AI',
    domain: 'AI & Machine Learning',
    domains: ['Data Science', 'AI & Machine Learning', 'Web Development'],
    status: 'Completed',
    shortDescription:
      'Production-grade machine learning web application built with Python, Flask, and Scikit-Learn that predicts customer churn probability and assigns 3-tier retention risk guidance across 18 customer and subscription features with 78.6% accuracy and 65.5% churn recall.',
    assetFolderPath: '/projects/customer-churn-webpage/',
    coverImage: '/projects/customer-churn-webpage/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/customer-churn-webpage/demo.mp4',
      thumbnail: '/projects/customer-churn-webpage/cover.png',
      title: 'ChurnIQ Web Application Demonstration',
      description:
        'Comprehensive walk-through of the ChurnIQ web application showing customer profile input, service subscription selection, live Random Forest inference, probability scoring, and risk recommendation.',
      duration: '2:30',
    },
    overview: {
      introduction:
        'Customer Churn Webpage (branded as ChurnIQ) is an end-to-end predictive machine learning web application developed to analyze subscriber behavior and detect early attrition warning signs before customers cancel their service. Built with Python, Flask, and Scikit-Learn, the system evaluates 7,043 customer accounts from the standard Telco Customer Churn dataset, utilizing an optimized 400-tree Random Forest pipeline to generate real-time churn predictions.',
      purpose:
        'Mitigate silent subscriber attrition, eliminate manual churn identification bottlenecks, and empower customer success teams with real-time risk stratification and prescriptive retention recommendations.',
      targetUsers: [
        'Customer Success & Retention Specialists',
        'Subscription & SaaS Account Managers',
        'Telecom Business Intelligence Analysts',
        'Executive Growth & Churn Strategy Teams',
      ],
      mainObjective:
        'Solve the critical minority-class recall deficit of traditional models by implementing cost-sensitive balanced class weighting, achieving a 65.5% churn recall (+14.5% over baseline) while serving sub-15ms predictions through a modern, responsive web dashboard.',
      howItWorks:
        'Users enter customer demographics, service subscriptions, and billing preferences into the ChurnIQ workspace. A lightweight Flask backend passes the 18 attributes directly into a pre-fitted Scikit-Learn ColumnTransformer pipeline (handling median imputation, standard scaling, and one-hot encoding), executes inference with the balanced Random Forest model, and instantly renders probability scores, risk badges, and actionable retention recommendations.',
      highlights: [
        'Balanced Random Forest Classifier (400 trees, class_weight="balanced")',
        '65.5% Churn Recall on Held-Out Test Set (+14.5% boost over unweighted models)',
        '78.6% Held-Out Test Accuracy & 84.7% ROC-AUC Discrimination Score',
        '18-Feature Leakage-Free Schema Purged of Post-Outcome and Identifier Biases',
        'Real-Time Web Inference Engine Built with Flask 3.0+ and Scikit-Learn 1.3+',
        '3-Tier Dynamic Risk Stratification (High, Medium, Low) with Action Guidance',
      ],
    },
    problemStatement: {
      title: 'The Silent Cost of Subscriber Attrition & Imbalanced Churn Modeling',
      mainProblem:
        'Customer acquisition in competitive subscription markets is 5x to 7x more expensive than customer retention. However, businesses frequently fail to detect disengagement signals until after the cancellation has occurred, while naive machine learning models achieve deceptively high accuracy by ignoring the churn minority entirely.',
      existingLimitations: [
        'Standard unweighted classifiers prioritize the 73.5% non-churn majority, missing nearly half (49%) of all churners.',
        'Many churn models suffer from target leakage by including post-outcome variables like Churn Score or Churn Reason.',
        'High-cardinality geographic and identifier fields cause severe memorization and poor out-of-sample generalizability.',
        'Data science prototypes often remain locked in Jupyter notebooks without an accessible interface for non-technical retention staff.',
      ],
      userChallenges: [
        'Retention agents lack real-time scoring tools during high-risk customer renewal interactions.',
        'Account managers cannot easily simulate the retention impact of changing contract terms or adding tech support.',
        'Decision-makers are misled by raw accuracy metrics that conceal high false-negative churn rates.',
      ],
      keyChallenges: [
        {
          title: 'Minority Class Imbalance',
          description:
            'Only 26.54% of accounts churned (1,869 vs 5,174 retained), tempting standard loss functions to predict non-churn unconditionally.',
          iconName: 'Scale',
        },
        {
          title: 'Target Leakage Prevention',
          description:
            'Identifying and purging 15 post-outcome fields, identifiers, and geographic noise from the 33 raw dataset attributes.',
          iconName: 'ShieldAlert',
        },
        {
          title: 'End-to-End Pipeline Serialization',
          description:
            'Ensuring zero-leakage preprocessing where imputers, scalers, and encoders are fitted strictly on training data and bundled with the classifier.',
          iconName: 'HardDrive',
        },
      ],
      whyItMatters:
        'Every missed churn prediction represents lost recurring revenue and wasted acquisition capital. Elevating churn recall from 51% to 65.5% directly protects customer lifetime value by triggering proactive retention interventions before contract termination.',
    },
    solution: {
      title: 'Cost-Sensitive Random Forest Pipeline & Real-Time ChurnIQ Interface',
      approach:
        'Engineered an end-to-end Scikit-Learn ColumnTransformer pipeline paired with a 400-tree Random Forest classifier incorporating balanced class weighting, deployed behind an interactive Python Flask web application.',
      technicalSolution:
        'Used median numerical imputation and standard scaling for continuous features alongside most-frequent imputation and one-hot encoding for categorical attributes. The model was trained with class_weight="balanced" and min_samples_leaf=2 on a 80/20 stratified split.',
      implementationOverview:
        'The pre-fitted pipeline is serialized into a single Joblib artifact. When a user submits the ChurnIQ web form, Flask feeds the raw form dictionary directly into the pipeline, computing class predictions and probability distributions in under 15ms.',
      howItSolves: [
        'Boosts churn recall to 65.5%, successfully catching 245 out of 374 churn cases on held-out test data.',
        'Eliminates target leakage completely by enforcing strict disjoint feature set assertions.',
        'Provides an intuitive, dark-themed dashboard allowing retention teams to score customer profiles instantly.',
        'Categorizes risk into High, Medium, and Low tiers with tailored operational guidance for customer outreach.',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Cpu',
        title: 'Balanced Random Forest Classifier',
        description:
          '400-tree ensemble with balanced class weighting, penalizing churn misclassifications inversely to class frequency to achieve 65.5% recall on held-out test data.',
      },
      {
        iconName: 'ShieldAlert',
        title: '18-Feature Leakage-Free Schema',
        description:
          'Purged 15 non-predictive identifiers, geographic fields, and post-outcome leakage variables, ensuring model decisions rest solely on genuine pre-churn indicators.',
      },
      {
        iconName: 'Activity',
        title: 'Real-Time Probability Scoring & Risk Tiers',
        description:
          'Computes exact churn probability percentages and categorizes accounts into High (>=65%), Medium (35-65%), and Low (<35%) risk tiers with visual progress bars.',
      },
      {
        iconName: 'LayoutDashboard',
        title: 'Interactive ChurnIQ Web Interface',
        description:
          'Modern obsidian dashboard built with Flask and CSS3, featuring live model status monitoring, held-out KPI metric cards, and responsive input sections.',
      },
      {
        iconName: 'Workflow',
        title: 'Single-Artifact Pipeline Serialization',
        description:
          'Encapsulated SimpleImputer, StandardScaler, and OneHotEncoder inside a unified Scikit-learn Pipeline saved via Joblib for zero-drift inference.',
      },
      {
        iconName: 'CheckSquare',
        title: 'Prescriptive Retention Guidance',
        description:
          'Dynamically serves tailored action recommendations based on predicted risk, prompting immediate proactive outreach or routine customer care.',
      },
    ],
    modelBenchmark: {
      title: 'Random Forest Churn Benchmark & Imbalance Optimization',
      sampleSize: '1,409 Held-Out Test Accounts (20% Stratified Split)',
      baselineModel: {
        name: 'Unweighted Random Forest Baseline',
        params: 'n_estimators=100, class_weight=None, default threshold=0.50',
        macroF1: '71.2%',
        defaulterRecall: '51.0%',
        balancedAccuracy: '72.4%',
        flawDescription:
          'Dominated by the 73.5% majority class, prioritizing overall accuracy (79.1%) while missing nearly half (49%) of all customers who actually churned.',
      },
      championModel: {
        name: 'Champion Balanced Random Forest Pipeline',
        params: 'n_estimators=400, class_weight="balanced", min_samples_leaf=2',
        macroF1: '73.5%',
        defaulterRecall: '65.5%',
        balancedAccuracy: '74.4%',
        winningReason:
          'Balanced cost-sensitive splitting boosts churn recall to 65.5% (+14.5% absolute gain), catching 245 out of 374 churn cases with an 84.7% ROC-AUC score.',
      },
      rows: [
        {
          metric: 'Churn Recall (Minority Sensitivity)',
          decisionTreeValue: '51.0%',
          randomForestValue: '65.5%',
          absoluteDelta: '+14.5%',
          winner: 'Balanced Random Forest',
          impact: 'Detects 55 additional churners per 1,000 customers, drastically cutting silent customer loss.',
        },
        {
          metric: 'Model Accuracy',
          decisionTreeValue: '79.1%',
          randomForestValue: '78.6%',
          absoluteDelta: '-0.5%',
          winner: 'Tradeoff Accepted',
          impact: 'A negligible 0.5% reduction in overall accuracy yields a +14.5% boost in critical churn recall.',
        },
        {
          metric: 'Churn Precision',
          decisionTreeValue: '64.2%',
          randomForestValue: '58.6%',
          absoluteDelta: '-5.6%',
          winner: 'Balanced Random Forest',
          impact: 'Maintains healthy ~59% precision while casting a broader, safer net for proactive retention.',
        },
        {
          metric: 'Churn F1-Score',
          decisionTreeValue: '56.8%',
          randomForestValue: '61.9%',
          absoluteDelta: '+5.1%',
          winner: 'Balanced Random Forest',
          impact: 'Harmonic mean improves substantially, confirming superior overall minority-class balance.',
        },
        {
          metric: 'ROC-AUC Discrimination',
          decisionTreeValue: '81.4%',
          randomForestValue: '84.7%',
          absoluteDelta: '+3.3%',
          winner: 'Balanced Random Forest',
          impact: 'High area under the ROC curve demonstrates excellent risk score separation across thresholds.',
        },
      ],
      keyTakeaways: [
        'Accuracy alone is deceptive on imbalanced datasets (26.5% churn rate); unweighted models hide severe false-negative churn leaks.',
        'Class weighting (class_weight="balanced") forces decision trees to penalize churn misclassifications proportionally to class frequency.',
        '400-tree ensemble aggregation stabilizes individual tree variance, achieving 84.7% ROC-AUC on unseen customer accounts.',
      ],
    },
    applicationScreenshots: [
      {
        image: '/projects/customer-churn-webpage/gallery/dashboard.png',
        title: 'ChurnIQ Customer Intelligence Dashboard & Prediction Workspace',
        description:
          'Production web interface displaying real-time model KPIs (78.6% Model Accuracy, 65.5% Churn Recall, 18 Features Used, Random Forest ready status), customer demographic inputs, service subscription toggles, and contract attributes.',
        badge: 'Production Web Interface',
      },
    ],
    architecture: {
      description:
        'ChurnIQ operates on a streamlined, self-contained Python architecture decoupling model training from real-time web serving. The Scikit-learn pipeline encapsulates feature imputation, scaling, and one-hot encoding, serializing into a portable Joblib artifact loaded into memory by Flask.',
      frontend: 'Lightweight HTML5, Custom CSS3, DM Sans & Manrope Typography',
      backend: 'Python 3.10+ with Flask 3.0+ REST Routing Engine',
      database: 'In-Memory Pandas DataFrames & Serialized Joblib Pipeline (Telco Dataset: 7,043 Records)',
      apis: [
        'GET / - Renders ChurnIQ Dashboard with Model Metrics and Default Input Profiles',
        'POST / - Validates 18 Form Attributes, Invokes Pipeline, and Returns Probability & Risk Tiers',
      ],
      aiModels: [
        'ColumnTransformer: Median/Frequent SimpleImputer, StandardScaler, OneHotEncoder',
        'Balanced Random Forest Classifier (n_estimators=400, class_weight="balanced", min_samples_leaf=2)',
      ],
      workflow: [
        'Offline Model Training & Stratified 80/20 Validation in train_model.py',
        'Pipeline Serialization (churn_pipeline.joblib) and Metrics Extraction (metrics.json)',
        'Flask Initialization (app.py) loading the pre-fitted pipeline artifact at startup',
        'User submits customer profile via web form; Flask parses and validates 18 attributes',
        'Pipeline transforms raw inputs and generates class prediction and probability in <15ms',
        'Dynamic UI renders probability meter, risk categorization, and prescriptive retention guidance',
      ],
    },
    techStack: [
      'Python',
      'Flask',
      'Scikit-Learn',
      'Random Forest',
      'Pandas',
      'Joblib',
      'HTML5',
      'CSS3',
      'OpenPyXL',
    ],
    techStackGrouped: [
      {
        category: 'Machine Learning & Modeling',
        items: [
          { name: 'Scikit-Learn', role: 'Pipeline, ColumnTransformer & Metric Evaluation', iconName: 'BrainCircuit' },
          { name: 'Random Forest', role: '400-Tree Balanced Ensemble Classifier', iconName: 'Cpu' },
          { name: 'Joblib', role: 'Model & Preprocessing Pipeline Serialization', iconName: 'HardDrive' },
        ],
      },
      {
        category: 'Web Backend & Serving',
        items: [
          { name: 'Python 3.10+', role: 'Core Application & Analytical Logic', iconName: 'FileCode' },
          { name: 'Flask 3.0+', role: 'Micro web framework & Form Handling', iconName: 'Server' },
        ],
      },
      {
        category: 'Data Engineering & ETL',
        items: [
          { name: 'Pandas', role: 'Tabular Data Manipulation & Feature Engineering', iconName: 'Database' },
          { name: 'OpenPyXL', role: 'Excel Dataset Ingestion & Parsing', iconName: 'FileSpreadsheet' },
        ],
      },
      {
        category: 'Frontend Presentation',
        items: [
          { name: 'HTML5', role: 'Semantic Layout & Accessible Web Forms', iconName: 'Layout' },
          { name: 'CSS3', role: 'Custom Obsidian Design System & Responsive Grid', iconName: 'LayoutDashboard' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/customer-churn-webpage/cover.png',
        caption: 'Customer Churn Webpage — Machine Learning Overview & Presentation Banner',
        alt: 'Customer Churn Webpage Cover Banner',
      },
      {
        url: '/projects/customer-churn-webpage/gallery/dashboard.png',
        caption: 'ChurnIQ Production Workspace with Live KPI Summary Cards and Form Inputs',
        alt: 'ChurnIQ Production Dashboard Interface',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Data Ingestion & Target Leakage Audit',
        description:
          'Loaded 7,043 Telco customer accounts from Excel, handled missing values in Total Charges via Monthly Charges × Tenure fallback, and purged 15 leaky post-outcome and geographic attributes.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Exploratory Analysis & Churn Factor Identification',
        description:
          'Uncovered primary churn drivers: short tenure (<12 months), month-to-month contracts (42.7% churn rate), and fiber optic internet without digital security add-ons.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Scikit-Learn Preprocessing Pipeline Construction',
        description:
          'Engineered a unified ColumnTransformer combining median numerical imputation, standard scaling, and one-hot encoding fitted strictly on the training partition.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Balanced Random Forest Model Optimization',
        description:
          'Trained a 400-tree ensemble with balanced class weights, elevating held-out churn recall from 51.0% to 65.5% while maintaining 78.6% overall accuracy and 84.7% ROC-AUC.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Flask Web Application & Real-Time Inference UI',
        description:
          'Developed the ChurnIQ interface with live KPI cards, form validation limits, sub-15ms local inference, risk stratification meters, and prescriptive retention guidance.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Raghu Raman K.',
        role: 'Lead Machine Learning Engineer & Python Developer',
        responsibilities: [
          'Engineered the end-to-end Scikit-Learn preprocessing and modeling pipeline',
          'Audited the Telco dataset to eliminate 15 target-leaking and identifier columns',
          'Formulated the cost-sensitive balanced class weighting strategy to boost churn recall',
          'Built the Flask web server with input validation and real-time model inference',
          'Designed the modern obsidian ChurnIQ user interface with live KPI summary cards',
        ],
        technicalContributions: [
          'ColumnTransformer preprocessing with median imputation and one-hot encoding',
          'Stratified 80/20 train/test evaluation with confusion matrix validation',
          'Sub-15ms model serialization and deserialization via Joblib',
          'Real-time probability calibration and 3-tier risk stratification logic',
        ],
        technologiesHandled: [
          'Python',
          'Flask',
          'Scikit-Learn',
          'Random Forest',
          'Pandas',
          'Joblib',
          'HTML5/CSS3',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Severe Minority Class Imbalance (73.5% Stay vs 26.5% Churn)',
        explanation:
          'Standard unweighted machine learning algorithms optimize for overall accuracy, which allows them to achieve ~79% accuracy by simply predicting that most customers stay—resulting in a 49% false-negative rate where half of all churners go unnoticed.',
        solution:
          'Implemented cost-sensitive learning via class_weight="balanced" in RandomForestClassifier, which automatically adjusts weights inversely proportional to class frequencies, boosting churn recall from 51.0% to 65.5% (+14.5% absolute gain).',
        implementationApproach:
          'Tuned the ensemble to 400 trees with min_samples_leaf=2 to prevent overfitting on minority leaf nodes while maximizing sensitivity to subtle attrition patterns.',
      },
      {
        challenge: 'Eliminating Target Leakage and Non-Predictive Noise',
        explanation:
          'The raw Telco dataset contains fields like Churn Score, Churn Reason, and Churn Label which describe the churn outcome after it occurs, as well as high-cardinality geographic fields (Zip Code, Latitude, Longitude) that overfit training splits.',
        solution:
          'Instituted an explicit column filter purging all 15 post-outcome, identifier, and high-cardinality fields before fitting the pipeline, guaranteeing that only genuine pre-churn attributes are used.',
        implementationApproach:
          'Added strict assertion checks (assert forbidden.isdisjoint(X.columns)) in the training script to programmatically abort execution if any target-leaking attribute is detected.',
      },
      {
        challenge: 'Preventing Data Leakage During Preprocessing Transformation',
        explanation:
          'Scaling features or calculating imputation medians across the entire dataset before splitting causes information leakage from the test set into the training process, producing artificially optimistic evaluations.',
        solution:
          'Encapsulated SimpleImputer, StandardScaler, and OneHotEncoder inside a unified Scikit-learn Pipeline that is fitted exclusively on the 80% training split and applied identically to test data and live web requests.',
        implementationApproach:
          'Saved the entire fitted Pipeline object together with the classifier in a single Joblib bundle, ensuring that live Flask form requests receive identical transformations with zero manual encoding.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Complete exploratory analysis of 7,043 Telco customer accounts',
        'Leakage-free feature preparation pipeline selecting 18 genuine predictors',
        'Cost-sensitive balanced Random Forest classifier trained on 400 decision trees',
        '78.6% held-out test accuracy and 65.5% minority churn recall validated on 1,409 accounts',
        'High discrimination capability achieved with an 84.7% ROC-AUC score',
        'Interactive ChurnIQ web application providing sub-15ms real-time churn risk scoring',
        '3-tier risk categorization (High, Medium, Low) with tailored customer retention guidance',
      ],
      technicalAchievements: [
        'Boosted churn recall by +14.5% over unweighted baselines via balanced class weighting',
        'Zero target leakage verified through programmatic feature separation assertions',
        'Single-artifact Joblib serialization ensuring deterministic preprocessing during web serving',
        'Clean separation of concerns between model training (train_model.py) and web serving (app.py)',
      ],
      verifiedMetrics: [
        'Dataset Scale: 7,043 Customer Records',
        'Held-Out Test Set: 1,409 Samples (20% Stratified Split)',
        'Model Accuracy: 78.6%',
        'Churn Recall: 65.5% (245 of 374 Churners Caught)',
        'Churn Precision: 58.6%',
        'Churn F1-Score: 61.9%',
        'ROC-AUC Score: 84.7%',
        'Input Feature Dimensions: 18 Attributes (3 Numeric, 15 Categorical)',
      ],
    },
    disclaimer:
      'ChurnIQ provides probabilistic churn risk estimates based on statistical patterns within historical customer and subscription datasets. Model predictions are decision-support insights intended to guide customer success workflows and retention interventions, not deterministic guarantees of future individual customer actions. Retention teams should contextualize model scores with qualitative customer relationship history before taking contract or pricing actions.',
    links: {
      github: 'https://github.com/k-raghu24/Customer-Churn-Webpage.git',
      githubLabel: 'View Source Code',
      relatedResources: [
        {
          title: 'GitHub Source Repository',
          url: 'https://github.com/k-raghu24/Customer-Churn-Webpage.git',
          type: 'Source Code',
        },
        {
          title: 'Telco Customer Churn Dataset',
          url: 'https://github.com/k-raghu24/Customer-Churn-Webpage.git',
          type: 'Dataset',
        },
      ],
    },
  },

  // 14. AgroLink - Completed
  agrolink: {
    id: 'agrolink',
    slug: 'agrolink',
    title: 'AgroLink',
    shortTitle: 'AgroLink — Farm-to-Table Marketplace',
    subtitle: 'Connecting Farmers Directly to Buyers',
    category: 'Full-Stack Web Development',
    domain: 'Web Development',
    domains: ['Web Development'],
    status: 'Completed',
    shortDescription:
      'Full-stack direct agricultural marketplace connecting local farmers with consumers and commercial buyers to eliminate predatory intermediary markups, featuring crop inventory management, atomic ordering, and real-time fulfillment tracking.',
    assetFolderPath: '/projects/agrolink/',
    coverImage: '/projects/agrolink/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/agrolink/demo.mp4',
      thumbnail: '/projects/agrolink/cover.png',
      title: 'See AgroLink in Action',
      description:
        'Watch the live end-to-end demonstration of the AgroLink agricultural marketplace platform connecting farmers and buyers.',
      duration: 'Live Demonstration',
    },
    overview: {
      introduction:
        'AgroLink is a modern, full-stack direct farm-to-table agricultural marketplace platform designed to bridge the communication and transaction divide between local farmers and buyers. By removing predatory middlemen and multi-tiered wholesale distribution chains, AgroLink empowers smallholder agricultural producers to set fair prices for their crops and enables consumers, restaurants, and wholesale purchasers to procure farm-fresh agricultural produce directly from source farms.',
      purpose:
        'Developed to solve critical systemic inefficiencies in conventional agricultural supply chains—such as severe price exploitation by intermediaries, lack of market reach for rural farmers, opaque product availability, and inventory overselling. The platform provides dedicated, role-guarded portals for farmers and buyers backed by atomic database transaction safeguards and real-time order tracking.',
      mainObjective:
        'Deliver an intuitive, secure digital marketplace where farmers can manage produce listings with dynamic pricing units (₹/kg, ₹/quintal, ₹/ton, ₹/bunch), while buyers can seamlessly discover regional harvest offerings, place concurrency-safe orders with row-level stock locking, and track fulfillment in real time.',
      howItWorks:
        'Farmers register with farm location and contact details, receiving an automatically generated unique Farmer ID (e.g. AG0001). From the Farmer Dashboard, growers list crops with photo uploads, category classification (Vegetables, Fruits, Grains, Dairy, Poultry), stock quantities, and pricing in ₹. Buyers browse the public marketplace using instant search and multi-criteria filters. When placing an order, a custom PostgreSQL stored procedure (create_order_atomic) acquires a row-level lock on the product, validates availability, computes total price from the verified server unit price, atomically decrements stock, creates the order record, and generates an in-app notification. Farmers then progress the order from pending to confirmed, shipped, and delivered, with cumulative revenues updated live on their dashboard.',
      targetUsers: [
        'Smallholder & Regional Crop Farmers',
        'Individual Consumers & Household Buyers',
        'Local Restaurants, Cafes & Food Businesses',
        'Wholesale Agricultural & Produce Distributors',
      ],
      highlights: [
        'Dual Role-Guarded Portals (Farmer & Buyer) with Supabase SSR Authentication',
        'Atomic Order Placement (create_order_atomic RPC) Eliminating Race Conditions',
        'Comprehensive Produce Inventory Management with Custom Pricing Units (₹)',
        'Multi-Criteria Marketplace Search by Category, Farm Origin & In-Stock Status',
        'Real-Time Order Lifecycle Tracking with Automated State Machine Guards',
        'Interactive Sales Analytics & Revenue Tracking via Recharts',
      ],
    },
    problemStatement: {
      title: 'Exploitative Intermediaries & Structural Market Inefficiencies',
      mainProblem:
        'Traditional agricultural distribution networks force farmers through multiple layers of brokers, commission agents, and wholesale middlemen. This disjointed supply chain deprives farmers of fair compensation, inflates consumer prices, and introduces critical operational vulnerabilities when moving perishables to market.',
      existingLimitations: [
        'Multi-tiered middleman markups reduce farmer profit margins while significantly increasing end-buyer grocery costs.',
        'Rural crop producers lack direct digital market visibility beyond their immediate physical vicinity.',
        'Concurrent ordering in naive marketplace systems causes overselling race conditions when multiple buyers purchase the same harvest batch.',
        'Weak role segregation in consumer web apps risks unauthorized profile privilege elevation to seller tiers.',
        'Opaque order tracking leaves buyers uncertain about harvest freshness and shipment timelines.',
      ],
      whyItMatters:
        'In agricultural economies, direct market connectivity directly correlates with farm solvency, rural livelihood sustainability, and the reduction of post-harvest food waste through direct farm-to-door distribution.',
      keyChallenges: [
        {
          title: 'Middleman Price Disparity',
          description:
            'Farmers typically receive only a small fraction of the final retail price paid by consumers due to unchecked broker commissions.',
          iconName: 'TrendingDown',
        },
        {
          title: 'Inventory Concurrency & Overselling',
          description:
            'Simultaneous purchase requests for limited harvest stock lead to overselling if database updates lack row-level locking.',
          iconName: 'Package',
        },
        {
          title: 'Role Elevation Security Risks',
          description:
            'Client-side profile updates could allow malicious users to alter their role from buyer to farmer without server-side validation.',
          iconName: 'ShieldAlert',
        },
      ],
    },
    solution: {
      title: 'Next.js & Supabase Direct Farm-to-Buyer Marketplace',
      approach:
        'A high-performance full-stack web application built on Next.js 16 App Router and Supabase PostgreSQL, offering separate role-based dashboards, a public marketplace catalog, and server-enforced atomic order execution.',
      technicalSolution:
        'Engineered a modern web platform leveraging Next.js 16 with React Server Components, Supabase SSR cookie authentication, and granular PostgreSQL Row-Level Security (RLS) policies. Built dual dedicated user portals: a Farmer Dashboard for crop listing, order processing, and revenue analytics; and a Buyer Dashboard for category browsing, cart checkout, and shipment tracking. Concurrency safety is guaranteed by a custom PostgreSQL function (create_order_atomic) that locks product rows (FOR UPDATE), validates stock, calculates server-verified totals, decrements quantity, and logs notifications in an atomic transaction.',
      implementationOverview:
        'The frontend uses Tailwind CSS v4 with an agricultural OKLCH green theme, Radix UI accessible primitives, and Lucide React icons. Data integrity is guarded by database triggers: prevent_role_change() on profiles, validate_order_status_update() on orders, and sync_product_fields() on products. Live metrics and revenue graphs are rendered using Recharts.',
      howItSolves: [
        'Connects farmers directly to end buyers, eliminating intermediate broker margins and enabling fair pricing',
        'Provides dedicated, role-guarded portals tailored specifically to farmer operations and buyer discovery workflows',
        'Guarantees zero overselling race conditions through atomic row-level database locking during checkout',
        'Enforces strict database-level security preventing unauthorized role escalations or invalid order status transitions',
        'Delivers transparent order tracking with real-time status progression from pending to delivered',
      ],
    },
    portals: [
      {
        name: 'Farmer Portal',
        subtitle: 'Direct Produce Listing & Sales Management',
        description:
          'A comprehensive control center empowering local farmers to manage crop listings, configure dynamic pricing, track buyer orders, monitor earnings in ₹, and review sales analytics.',
        image: '/projects/agrolink/gallery/farmer-dashboard.png',
        iconName: 'Store',
        functionalities: [
          'Real-time KPI cards: Total Products, Total Orders, Pending Deliveries, Total Revenue (₹)',
          'Full CRUD crop inventory management with pricing units (₹/kg, ₹/quintal, ₹/ton, ₹/bunch)',
          'Order lifecycle tracking with status transitions (Pending -> Confirmed -> Shipped -> Delivered)',
          'Direct sequence-generated Farmer ID assignment (e.g. AG0001) for verified farmer identity',
          'Sales performance visualization and top-selling crop rankings powered by Recharts',
          'Agricultural advisory and seasonal crop market insights to assist harvesting decisions',
        ],
      },
      {
        name: 'Buyer Portal',
        subtitle: 'Direct Farm Produce Discovery & Ordering',
        description:
          'A streamlined purchasing interface designed for consumers and commercial buyers to discover fresh regional harvest, place concurrency-safe atomic orders, and track fulfillment.',
        image: '/projects/agrolink/gallery/buyer-dashboard.png',
        iconName: 'ShoppingCart',
        functionalities: [
          'Personalized welcome hub with quick KPIs: Total Orders, In-Progress, Delivered, Total Spent (₹)',
          'Instant multi-criteria marketplace search across Vegetables, Fruits, Grains, Dairy, and Pulses',
          'Direct farmer details, farm location transparency, and verified in-stock availability badges',
          'Atomic checkout with database row locking, eliminating overselling and price tampering',
          'Live order fulfillment timeline with the ability to cancel pending orders prior to confirmation',
          'Bookmarked favorite local farms for convenient recurring seasonal produce orders',
        ],
      },
    ],
    keyFeatures: [
      {
        iconName: 'Store',
        title: 'Farmer Crop Inventory CRUD',
        description:
          'Comprehensive harvest listing interface with image upload, stock quantity, custom units (kg, quintal, ton), and pricing in ₹.',
      },
      {
        iconName: 'ShoppingCart',
        title: 'Atomic Order Placement',
        description:
          'PostgreSQL stored procedure (create_order_atomic) with row-level locking (FOR UPDATE) eliminating overselling and price manipulation.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Dual Role-Guarded Portals',
        description:
          'Strict Supabase SSR cookie authentication with middleware role guards segregating farmer and buyer views.',
      },
      {
        iconName: 'Layers',
        title: 'Multi-Criteria Marketplace Search',
        description:
          'Public catalog with instant search, category filtering (Vegetables, Fruits, Grains, Dairy, Pulses), and location proximity.',
      },
      {
        iconName: 'BarChart2',
        title: 'Recharts Sales Analytics',
        description:
          'Interactive charts illustrating monthly revenue trends, volume sales, and top-selling crops for farmer decision-making.',
      },
      {
        iconName: 'Activity',
        title: 'Order Status State Machine',
        description:
          'Database trigger (validate_order_status_update) enforcing verified transitions (Pending -> Confirmed -> Shipped -> Delivered).',
      },
    ],
    architecture: {
      description:
        'AgroLink is engineered as a full-stack App Router application using Next.js 16, React 19, and Supabase PostgreSQL. Client sessions are managed via @supabase/ssr cookies and enforced by custom middleware routing users to role-guarded portals. All write operations use PostgreSQL Row-Level Security, database triggers, and atomic stored procedures to ensure strict data isolation and concurrency safety.',
      frontend:
        'Next.js 16.2.0 (App Router), React 19.2.4, TypeScript 5.7.3, Tailwind CSS v4.2.0 with custom OKLCH agricultural green palette, Radix UI headless primitives, Lucide React, and Recharts.',
      backend:
        'Next.js Server Actions and Route Handlers with @supabase/ssr 0.10.0 for secure cookie session handling, role-based route middleware, and atomic database Remote Procedure Calls (RPC).',
      database:
        'Supabase PostgreSQL with Row-Level Security (RLS) on all tables (profiles, products, orders, notifications), triggers (prevent_role_change, validate_order_status_update, sync_product_fields), and atomic RPC create_order_atomic.',
      apis: [
        'POST create_order_atomic(p_product_id, p_quantity, p_delivery_address, p_notes) RPC',
        'GET /api/products — Multi-criteria crop search with category, location & price filtering',
        'POST /auth/login & /auth/sign-up — Role-aware authentication with cookie session refresh',
        'PATCH /api/orders/[id]/status — Order state machine transition API with role validation',
      ],
      workflow: [
        '1. User Registration: Farmers and buyers register via Supabase Auth; profiles record is created and assigned a unique Farmer ID (e.g. AG0001).',
        '2. Crop Listing: Farmers add produce listings with title, category, quantity, pricing unit, description, location, and photos.',
        '3. Marketplace Discovery: Buyers explore listings filtered by crop category, price, and farm proximity.',
        '4. Atomic Order Placement: Buyer initiates order; database executes create_order_atomic, locking product row, verifying stock, and deducting inventory.',
        '5. Farmer Notification & Dispatch: Farmer receives real-time notification, confirms the order, and transitions status to Shipped and Delivered.',
        '6. Analytics & Settlement: Delivered orders credit revenue in ₹ to the farmer dashboard and update buyer spending metrics.',
      ],
    },
    techStack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS v4',
      'Radix UI',
      'Recharts',
    ],
    techStackGrouped: [
      {
        category: 'Frontend Framework & Core',
        items: [
          { name: 'Next.js 16.2.0', role: 'App Router, React Server Components & SSR', iconName: 'Layers' },
          { name: 'React 19.2.4', role: 'Component hierarchy & concurrent UI rendering', iconName: 'Code' },
          { name: 'TypeScript 5.7.3', role: 'End-to-end static typing & database interfaces', iconName: 'FileCode' },
        ],
      },
      {
        category: 'UI, Styling & Primitives',
        items: [
          { name: 'Tailwind CSS v4.2.0', role: 'Custom OKLCH agricultural green theme', iconName: 'Layout' },
          { name: 'Radix UI Primitives', role: 'Accessible headless dialogs, dropdowns & tabs', iconName: 'Layers' },
          { name: 'Lucide React (v0.564)', role: 'Standardized agricultural & interface iconography', iconName: 'Sparkles' },
        ],
      },
      {
        category: 'Backend & Database Management',
        items: [
          { name: 'Supabase PostgreSQL', role: 'Relational database with Row-Level Security (RLS)', iconName: 'Database' },
          { name: '@supabase/ssr (0.10.0)', role: 'Cookie-based session & auth token refresh', iconName: 'ShieldCheck' },
          { name: 'PostgreSQL Stored Procedures', role: 'Atomic transaction & row-level locking (create_order_atomic)', iconName: 'Cpu' },
        ],
      },
      {
        category: 'Forms, State & Data Analytics',
        items: [
          { name: 'React Hook Form & Zod', role: 'Type-safe form state & client-side schema validation', iconName: 'CheckSquare' },
          { name: 'Recharts (2.15.0)', role: 'Interactive agricultural sales & revenue visualizations', iconName: 'BarChart2' },
          { name: 'Sonner Toasts', role: 'Optimistic feedback & real-time notification banners', iconName: 'Activity' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/agrolink/gallery/front.png',
        caption:
          'AgroLink Public Landing Page: Modern farm-fresh branding, value proposition, market statistics (500+ Farmers, 10K+ Buyers, 50K+ Deliveries), and direct onboarding call-to-actions.',
        alt: 'AgroLink Public Landing Page',
      },
      {
        url: '/projects/agrolink/gallery/farmer-dashboard.png',
        caption:
          'Farmer Management Dashboard: Real-time active listings, order counters, total revenue in ₹, recent orders table, and produce quick actions.',
        alt: 'Farmer Management Dashboard',
      },
      {
        url: '/projects/agrolink/gallery/buyer-dashboard.png',
        caption:
          'Buyer Dashboard Hub: Personalized welcome panel, order status tracking (Pending, Delivered), cumulative spend in ₹, and direct marketplace browsing.',
        alt: 'Buyer Dashboard Hub',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Agricultural Market Research & User Journey Mapping',
        description:
          'Analyzed traditional agricultural supply chains to map critical friction points: middleman markups, lack of market visibility, and pricing volatility. Designed dedicated user journeys for farmers and buyers.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Database Schema Modeling & RLS Architecture',
        description:
          'Constructed Supabase PostgreSQL relational schema across profiles, products, orders, and notifications. Authored database triggers preventing privilege escalation and enforcing order state transitions.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Next.js App Router Architecture & SSR Authentication',
        description:
          'Configured Next.js 16 with React 19, TypeScript, and @supabase/ssr. Implemented robust edge middleware routing authenticated users to role-guarded farmer or buyer portals with redirect loop prevention.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Farmer Portal & Crop Inventory CRUD Engineering',
        description:
          'Built the farmer management suite: crop listing form with dynamic pricing units (₹/kg, ₹/quintal, ₹/ton), inventory tracking, order status controls, and Recharts sales visual analytics.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Marketplace Discovery, Atomic Ordering & Verification',
        description:
          'Constructed the public marketplace with multi-criteria search, buyer cart, and atomic checkout powered by create_order_atomic with row-level locking (FOR UPDATE) to eliminate overselling.',
        status: 'Completed',
      },
    ],
    challenges: [
      {
        challenge: 'Inventory Concurrency & Overselling During Concurrent Checkout',
        explanation:
          'When multiple buyers attempt to purchase the same crop batch simultaneously, standard database updates can cause negative inventory and overselling.',
        solution:
          'Implemented a PostgreSQL stored procedure (create_order_atomic) that locks the target product row using FOR UPDATE, verifies available stock, computes server-verified prices, and atomically decrements inventory within a single database transaction.',
      },
      {
        challenge: 'Unauthorized User Privilege Escalation to Farmer Roles',
        explanation:
          'Standard profile update policies allow users to edit their own profile rows, creating a vulnerability where buyers could alter their role column to farmer.',
        solution:
          'Engineered a PostgreSQL database trigger (prevent_role_change) on public.profiles that intercepts update attempts and raises an exception if the role column is modified from client requests.',
      },
      {
        challenge: 'Circular Authentication Redirection on Incomplete Profiles',
        explanation:
          'When an authenticated user profile record was missing or delayed during creation, farmer and buyer layout guards redirected between each other in an infinite loop.',
        solution:
          'Refactored layout route guards to validate profile existence and safely fallback to user_metadata.role, routing uninitialized profiles to /auth/login with a clear error prompt.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Full-stack farm-to-table agricultural marketplace platform',
        'Dual dedicated user portals: Farmer Dashboard and Buyer Dashboard',
        'Crop inventory CRUD with custom units (₹/kg, ₹/quintal, ₹/ton, ₹/bunch)',
        'Atomic concurrency-safe order checkout with PostgreSQL row locking',
        'Real-time order lifecycle state machine (Pending -> Confirmed -> Shipped -> Delivered)',
        'Interactive farmer sales analytics and revenue metrics powered by Recharts',
        'Marketplace search with instant crop category and location filtering',
      ],
      technicalAchievements: [
        'Strict TypeScript compilation and Next.js 16 Turbopack production builds',
        'Zero overselling race conditions verified via atomic PostgreSQL RPC transactions',
        'Server-enforced role protection preventing privilege escalation via database triggers',
        'Seamless SSR cookie authentication and token refresh via @supabase/ssr',
        'High-performance styling utilizing Tailwind CSS v4 OKLCH agricultural green palette',
      ],
      testingResults: [
        'Verified multi-role authentication workflows across farmer and buyer tiers',
        'Confirmed zero-latency order placement via create_order_atomic RPC',
        'Validated crop inventory decrements and automatic sold state transitions',
        'Confirmed responsive layout across desktop, tablet, and mobile viewports',
      ],
      demonstratedCapabilities: [
        'Full-Stack Web Application Architecture (Next.js 16, React 19, TypeScript)',
        'Relational Database Modeling & Security (Supabase PostgreSQL, RLS, Triggers, RPC)',
        'E-Commerce & Marketplace Concurrency Engineering (Row-Level Locking)',
        'UI/UX Design & Data Visualization (Tailwind CSS v4, Radix UI, Recharts)',
      ],
    },
    links: {
      github: 'https://github.com/sreeramganesh/AgroLink-.git',
      githubLabel: 'View Source Code',
    },
  },

  // 15. Food Ordering System - Completed
  'food-ordering-system': {
    id: 'food-ordering-system',
    slug: 'food-ordering-system',
    title: 'Food Ordering System',
    shortTitle: 'Food Ordering & Hotel Management',
    subtitle: 'A Full-Stack Platform for Online Food Ordering, Multi-Hotel Management & Order Processing',
    category: 'Full-Stack Web Development',
    domain: 'Web Development',
    domains: ['Web Development'],
    status: 'Completed',
    shortDescription:
      'Full-stack food ordering and restaurant management platform featuring dual Express microservices, MongoDB persistence, interactive swipe-to-cart ordering, dynamic UPI QR generation, and dedicated hotel administrative dashboards.',
    assetFolderPath: '/projects/food-ordering-system/',
    coverImage: '/projects/food-ordering-system/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/food-ordering-system/demo.mp4',
      thumbnail: '/projects/food-ordering-system/cover.png',
      title: 'Food Ordering System Demonstration',
      description:
        'Comprehensive demonstration of hotel registration, menu item additions, live customer ordering with swipe-to-cart gestures, dual search autocomplete, and payment processing.',
      duration: '3:45',
    },
    overview: {
      introduction:
        'The Food Ordering System is an end-to-end full-stack web application architected with dual Node.js/Express microservices and MongoDB database persistence. It bridges the gap between hungry diners and commercial restaurants by providing a unified customer ordering interface alongside a dedicated hotel administrative portal for real-time menu management.',
      purpose:
        'Eliminate manual dining order friction, provide real-time menu synchronization across multiple independent restaurants, and streamline order processing through automated cart splitting and multi-method checkout options.',
      targetUsers: [
        'Online Food Diners & Customers',
        'Independent Restaurant Owners & Hotel Managers',
        'Commercial Kitchen Staff & Food Delivery Coordinators',
      ],
      mainObjective:
        'Deliver a frictionless, responsive web ordering experience that unifies dish discovery across multiple hotels, simplifies cart selection with gesture controls, and automates order fulfillment routing per restaurant branch.',
      howItWorks:
        'Customers browse a unified menu aggregated across all registered restaurants via the customer portal (Port 3000), filter by cuisine, diet, and price, swipe cards to populate their cart, and complete orders with simulated UPI QR codes, cards, or COD. Simultaneously, hotel managers use the admin dashboard (Port 4000) to register branches, update menus in real-time, and manage incoming orders in MongoDB.',
      highlights: [
        'Dual-Server Microservices Architecture (Customer Port 3000 & Admin Port 4000)',
        'Unified Multi-Hotel Menu Aggregation with Automated Checkout Splitting',
        'Interactive Mouse/Touch Swipe-to-Cart Card Gesture Engine',
        'Dual Predictive Autocomplete Search for Hotels and Dishes',
        'Dynamic Client-Side UPI QR Code Generation via QRCode.js',
        'Full Administrative Menu CRUD with Real-Time MongoDB Synchronization',
      ],
    },
    problemStatement: {
      title: 'Operational Challenges in Multi-Vendor Dining & Manual Order Management',
      mainProblem:
        'Traditional food ordering workflows suffer from disjointed communication between customers and restaurant kitchens: paper menus become outdated quickly, multi-item orders spanning different kitchens create routing chaos, and manual checkout processes cause severe dining bottlenecks during peak rush hours.',
      existingLimitations: [
        'Static or paper-based menus cannot reflect real-time pricing changes, new dishes, or sold-out items.',
        'Single-restaurant ordering apps restrict diner choice by preventing cross-hotel discovery.',
        'Complex frontend frameworks often introduce heavy bundle overhead, slowing down mobile web ordering.',
        'Lack of automated order grouping forces restaurant managers to manually decouple combined orders.',
      ],
      userChallenges: [
        'Customers face confusing checkout steps and sluggish search interfaces when trying to find specific cuisines.',
        'Restaurant managers struggle with cumbersome admin panels that require database knowledge to update menus.',
        'Diners encounter limited payment flexibility without instant digital QR code options.',
      ],
      keyChallenges: [
        {
          title: 'Cross-Restaurant Cart Isolation',
          description:
            'Ensuring that a combined customer cart with items from multiple hotels is atomically decoupled into individual restaurant orders without data leakage.',
          iconName: 'Layers',
        },
        {
          title: 'Zero-Framework Gesture Performance',
          description:
            'Implementing smooth 60fps swipe-to-cart drag physics directly in Vanilla JavaScript without relying on external motion libraries.',
          iconName: 'Zap',
        },
        {
          title: 'Real-Time Menu Synchronization',
          description:
            'Guaranteeing that newly registered hotels and dishes on the admin server are immediately reflected in the customer browsing catalog.',
          iconName: 'Clock',
        },
      ],
      whyItMatters:
        'Digitizing and modularizing the restaurant ordering pipeline reduces ordering errors, accelerates kitchen ticket turnaround, and provides restaurant owners with instant administrative autonomy over their menus.',
    },
    solution: {
      title: 'Decoupled Dual-Microservice Architecture with Automated Order Routing',
      approach:
        'Engineered two specialized Node.js/Express application servers operating on the same MongoDB instance: a lightweight customer-facing ordering engine on Port 3000 and an administrative hotel management API on Port 4000.',
      technicalSolution:
        'Utilized MongoDB embedded subdocument arrays for efficient menu item nesting within restaurant documents, coupled with an intelligent backend order-splitting algorithm that partitions cart payloads by restaurant name.',
      implementationOverview:
        'Built zero-dependency Vanilla JS interfaces for instantaneous page loads, integrating dynamic QRCode.js generation for UPI payments, word-boundary autocomplete algorithms, and responsive CSS flexbox layouts.',
      howItSolves: [
        'Provides diners with an all-in-one catalog combining dishes across all partner restaurants with live star ratings.',
        'Automatically creates isolated Order records for each respective hotel during a single checkout transaction.',
        'Empowers restaurant managers to add, edit, or delete menu items in seconds without writing code.',
        'Offers multi-mode payment flexibility (UPI QR, Card, COD) with client-side credential format validation.',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Zap',
        title: 'Interactive Swipe-to-Cart Engine',
        description:
          'Mouse/touch drag gesture physics on food cards: dragging right (>120px) highlights the card green and increments cart quantity; dragging left decrements or removes the item.',
      },
      {
        iconName: 'Search',
        title: 'Dual Predictive Autocomplete Search',
        description:
          'Independent search bars for restaurants and food dishes featuring fuzzy word-boundary matching and full keyboard navigation (Arrow Up, Arrow Down, Enter).',
      },
      {
        iconName: 'Layers',
        title: 'Multi-Criteria Filter Drawer',
        description:
          'Collapsible sidebar allowing real-time multi-parameter filtering across cuisines (Indian, Italian, Chinese), dietary preferences (Veg, Non-veg), price range (up to ₹500), and star ratings.',
      },
      {
        iconName: 'Store',
        title: 'Hotel Management & Menu Administration',
        description:
          'Dedicated admin dashboard on Port 4000 for restaurant onboarding, branch selection, and full menu CRUD with automated incremental item ID generation.',
      },
      {
        iconName: 'ShoppingCart',
        title: 'Multi-Hotel Order Splitting',
        description:
          'Server-side cart partitioning algorithm that inspects checkout payloads, groups items by vendor hotel, and creates isolated Order documents per restaurant in MongoDB.',
      },
      {
        iconName: 'Grid',
        title: 'Dynamic Client-Side UPI QR Generation',
        description:
          'Integrated QRCode.js engine rendering live, scannable UPI payment QR codes encoding upi:// URI parameters and exact bill totals directly on the checkout screen.',
      },
    ],
    applicationScreenshots: [
      {
        image: '/projects/food-ordering-system/gallery/food_ordering_dashboard.png',
        title: 'Customer Food Ordering Interface',
        description:
          'Centralized ordering screen featuring dual hotel and food predictive search, collapsible multi-parameter filter drawer, interactive swipe-to-cart cards, and persistent checkout trigger.',
        badge: 'Customer Portal',
      },
      {
        image: '/projects/food-ordering-system/gallery/Hotel_management_dashboard.png',
        title: 'Hotel Management & Menu Administration Dashboard',
        description:
          'Dedicated administrative interface for restaurant partners enabling branch onboarding, live menu CRUD with automated item ID sequencing, pricing, ratings, cuisines, and dietary type tagging.',
        badge: 'Management Dashboard',
      },
      {
        image: '/projects/food-ordering-system/gallery/payment_methods.png',
        title: 'Payment Method Selection & Order Processing',
        description:
          'Interactive order review and checkout view displaying customer details, dynamic client-side UPI QR code generation via QRCode.js, card validation, and instant order placement.',
        badge: 'Checkout & Payment',
      },
    ],
    architecture: {
      description:
        'The Food Ordering System is built on a decoupled dual-microservice architecture powered by Node.js, Express.js, and MongoDB. The customer interface and hotel admin dashboard interact with independent API services while sharing a centralized Mongoose data layer.',
      frontend: 'Vanilla JavaScript (ES6+), HTML5 Semantic Markup, Custom Responsive CSS3',
      backend: 'Dual Express.js Microservices (Customer API: Port 3000 | Admin API: Port 4000)',
      database: 'MongoDB with Mongoose ODM (food_ordering_system Database)',
      apis: [
        'GET /foods - Aggregated Multi-Hotel Menu Feed',
        'POST /orders - Split-Cart Order Creation & Persistence',
        'GET /restaurants - Registered Hotel Catalog',
        'POST /restaurants - New Hotel Onboarding',
        'POST /restaurants/:id/menu - Menu Item Creation',
        'PUT /restaurants/:id/menu/:itemId - Menu Item Modification',
        'DELETE /restaurants/:id/menu/:itemId - Menu Item Removal',
        'GET /restaurants/:id/orders - Hotel-Specific Order Feed',
        'PUT /orders/:orderId/status - Order Fulfillment Lifecycle Tracking',
      ],
      aiModels: [
        'Fuzzy Word-Boundary Search Filtering',
        'Real-Time Cart Price & Quantity Calculation Engine',
        'Client-Side UPI QR Code Encoding Algorithm',
      ],
      workflow: [
        'Hotel Manager onboards restaurant and populates menu catalog via Admin Portal (Port 4000)',
        'Customer browses unified dish catalog, filters by cuisine/diet/price, and swipes cards into cart (Port 3000)',
        'Customer enters name, selects payment mode (UPI QR, Card, COD), and submits order',
        'Customer backend splits cart items by hotel and atomically saves individual Order records in MongoDB',
        'Restaurant managers view and fulfill orders in real-time through the Admin Management Portal',
      ],
    },
    techStack: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'CORS',
      'QRCode.js',
    ],
    techStackGrouped: [
      {
        category: 'Frontend Presentation & UI',
        items: [
          { name: 'JavaScript (ES6+)', role: 'Core Client-Side Interaction & DOM Manipulation', iconName: 'FileCode' },
          { name: 'HTML5', role: 'Semantic Layout & Accessible Web Forms', iconName: 'Layout' },
          { name: 'CSS3', role: 'Custom Card Shadows, Responsive Flexbox & Animations', iconName: 'Layout' },
          { name: 'QRCode.js', role: 'Dynamic Client-Side UPI QR Code Generation', iconName: 'Grid' },
        ],
      },
      {
        category: 'Backend Microservices',
        items: [
          { name: 'Node.js', role: 'Asynchronous JavaScript Runtime Environment', iconName: 'Server' },
          { name: 'Express.js', role: 'RESTful API Routing & Request Pipeline', iconName: 'Server' },
          { name: 'CORS', role: 'Cross-Origin Resource Sharing Middleware', iconName: 'Zap' },
        ],
      },
      {
        category: 'Database & Data Modeling',
        items: [
          { name: 'MongoDB', role: 'NoSQL Document Store for Restaurants & Orders', iconName: 'Database' },
          { name: 'Mongoose ODM', role: 'Schema Modeling, Validation & Subdocument Embedding', iconName: 'Database' },
        ],
      },
      {
        category: 'Development & Tools',
        items: [
          { name: 'Visual Studio Code', role: 'Primary Development Environment', iconName: 'Terminal' },
          { name: 'Git & GitHub', role: 'Source Control & Version Tracking', iconName: 'Code2' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/food-ordering-system/cover.png',
        caption: 'Food Ordering System — Responsive Web Platform Overview',
        alt: 'Food Ordering System Cover Visual',
      },
      {
        url: '/projects/food-ordering-system/gallery/food_ordering_dashboard.png',
        caption: 'Customer Food Ordering Interface with Autocomplete & Filter Drawer',
        alt: 'Food Ordering Dashboard',
      },
      {
        url: '/projects/food-ordering-system/gallery/Hotel_management_dashboard.png',
        caption: 'Hotel Management Dashboard for Restaurant Onboarding and Menu CRUD',
        alt: 'Hotel Management Dashboard',
      },
      {
        url: '/projects/food-ordering-system/gallery/payment_methods.png',
        caption: 'Interactive Payment Methods Screen with Dynamic UPI QR Code Generation',
        alt: 'Payment Methods Screen',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Requirement Analysis & Schema Formulation',
        description:
          'Identified the operational divide between customer food ordering and restaurant administration; formulated Mongoose schemas with embedded menu and order item subdocuments.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Dual Express API Microservices Implementation',
        description:
          'Engineered server.js (Port 3000) for high-speed customer read/order operations and admin-server.js (Port 4000) for administrative hotel and menu mutations.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Interactive Customer Interface & Swipe Engine',
        description:
          'Developed Food_Ordering.html with zero-framework Vanilla JavaScript, programming mouse drag event handlers for swipe-to-cart physics and badge animations.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Admin Dashboard & Dynamic QR Integration',
        description:
          'Built admin.html for seamless hotel registration and menu item creation; integrated QRCode.js CDN for client-side UPI payment QR code generation.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Multi-Hotel Cart Splitting & Integration Testing',
        description:
          'Implemented and verified backend cart partitioning logic, verifying that combined orders with items from multiple restaurants are cleanly split into isolated Order documents.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Raghu Raman K.',
        role: 'Lead Full-Stack Web Developer',
        responsibilities: [
          'Architected dual-server Express microservice infrastructure on Ports 3000 and 4000',
          'Designed MongoDB schemas for restaurants, embedded menus, and customer orders',
          'Developed customer-facing food ordering interface with swipe-to-cart physics',
          'Built administrative hotel management dashboard with full menu CRUD operations',
          'Integrated QRCode.js for dynamic client-side UPI payment QR rendering',
          'Engineered backend multi-hotel cart partitioning and order splitting logic',
        ],
        technicalContributions: [
          'Custom Vanilla JS gesture engine for card drag-and-drop interactions',
          'Dual autocomplete search algorithms with word-boundary matching',
          'Automated incremental menu item ID sequence generation in Mongoose',
          'End-to-end integration and API error handling between client and MongoDB',
        ],
        technologiesHandled: [
          'JavaScript',
          'HTML5/CSS3',
          'Node.js',
          'Express.js',
          'MongoDB',
          'Mongoose',
          'QRCode.js',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Multi-Hotel Cart Partitioning During Checkout',
        explanation:
          'In a multi-restaurant platform, a customer can add a Pizza from Hotel A and a Biryani from Hotel B into the same cart. Submitting this as a single monolithic order would cause severe kitchen dispatch and revenue accounting conflicts.',
        solution:
          'Engineered a backend grouping algorithm in POST /orders that iterates over incoming items, partitions them into hotel-specific sub-arrays, looks up each restaurant ID in MongoDB, and creates independent Order documents per hotel atomically.',
        implementationApproach:
          'Used an in-memory dictionary (byHotel) in server.js to cluster cart items by vendor name before executing iterative Mongoose save operations.',
      },
      {
        challenge: 'Dynamic UPI QR Code Generation Without Payment Gateway Overhead',
        explanation:
          'Integrating heavy external payment gateway SDKs introduces merchant approval barriers, API keys, and vendor lock-in for an academic and prototype demonstration project.',
        solution:
          'Leveraged QRCode.js on the client side to dynamically render standard NPCI-compliant UPI payment QR codes (upi://pay?pa=test@upi&pn=FoodApp&am=total) instantly reflecting the exact bill amount without third-party network latency.',
        implementationApproach:
          'Injected a dynamic canvas element via new QRCode(qrContainer, {...}) triggered whenever the customer selects the UPI radio option in the checkout modal.',
      },
      {
        challenge: 'Fluid Swipe-to-Cart Coordinate Physics Without External Libraries',
        explanation:
          'Building a responsive swipe gesture where food cards follow mouse/touch movement and change color dynamically while preventing text selection and accidental scrolls is challenging without third-party gesture libraries.',
        solution:
          'Crafted a native mouse drag event pipeline utilizing clientX delta math (diff = e.clientX - startX) with dynamic CSS transform and background color thresholds (diff > 120px for add, diff < -120px for remove).',
        implementationApproach:
          'Bound onmousemove and onmouseup to the document object to maintain cursor capture during fast mouse drags, cleaning up listeners immediately on drop.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Dual-server Express microservice architecture (Ports 3000 and 4000)',
        'Unified customer menu browsing aggregating dishes across all registered hotels',
        'Fluid swipe-to-cart gesture controls with visual color feedback and badge counts',
        'Dual autocomplete search bars with fuzzy word-boundary filtering and keyboard nav',
        'Multi-criteria filter drawer (cuisines, dietary preferences, price slider, ratings)',
        'Comprehensive hotel management dashboard for branch onboarding and menu CRUD',
        'Dynamic client-side UPI QR code generation reflecting calculated bill totals',
        'Automated backend cart partitioning creating isolated Order records per restaurant',
      ],
      technicalAchievements: [
        'Zero-framework frontend architecture delivering near-instant DOM render speeds',
        'MongoDB Mongoose schema with embedded subdocuments for efficient read performance',
        'Microservice separation between public diner endpoints and administrative tools',
        'Multi-vendor order routing eliminating cross-restaurant ticket confusion',
      ],
      verifiedMetrics: [
        'Dual API Microservices: Port 3000 (Customer) & Port 4000 (Admin)',
        'Database Engine: MongoDB with Mongoose ODM',
        'Payment Options Implemented: 3 Modes (UPI QR, Card, COD)',
        'Filter Parameters: 4 Dimensions (Cuisine, Food Type, Price, Star Rating)',
        'Search Capabilities: Dual Autocomplete (Hotels & Food Items)',
      ],
    },
    links: {
      github: 'https://github.com/k-raghu24/Food-Ordering-System.git',
      githubLabel: 'View Source Code',
      relatedResources: [
        {
          title: 'GitHub Source Repository',
          url: 'https://github.com/k-raghu24/Food-Ordering-System.git',
          type: 'Source Code',
        },
      ],
    },
  },

  // 16. Water Quality Management - Completed
  'water-quality-management': {
    id: 'water-quality-management',
    slug: 'water-quality-management',
    title: 'Water Quality Management',
    shortTitle: 'Water Quality Management — ML & SHAP',
    subtitle: 'Data-Driven Aquaculture Water Quality Analysis, Multi-Model Benchmarking & Explainable AI',
    category: 'Data Science',
    domain: 'Data Science',
    domains: ['Data Science', 'AI & Machine Learning', 'Python Development'],
    status: 'Completed',
    shortDescription:
      'Applied environmental data science and machine learning research benchmarking 7 classification models on 4,300 aquaculture samples, interpreting non-linear parameters via SHAP TreeExplainer, and demonstrating a 35.7% feature reduction (14 to 9 features) with 99.51% accuracy retention.',
    assetFolderPath: '/projects/water-quality-management/',
    coverImage: '/projects/water-quality-management/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/water-quality-management/demo.mp4',
      thumbnail: '/projects/water-quality-management/cover.png',
      title: 'Watch Water Quality Management in Action',
      description:
        'Explore the full data science workflow: exploratory distribution analysis, 14x14 Pearson correlation mapping, 7-model benchmark training, SHAP feature importance extraction, and the 14-to-9 feature pruning experiment.',
      duration: 'Jupyter Notebook & Model Walkthrough',
    },
    links: {
      github: 'https://github.com/k-raghu24/Water-Quality-Management.git',
      githubLabel: 'View Source Code',
      relatedResources: [
        {
          title: 'Scikit-Learn Machine Learning in Python',
          url: 'https://scikit-learn.org/',
          type: 'ML Library',
        },
        {
          title: 'SHAP (SHapley Additive exPlanations) Documentation',
          url: 'https://shap.readthedocs.io/',
          type: 'Explainable AI',
        },
      ],
    },
    overview: {
      introduction:
        'Water Quality Management is an applied environmental machine learning and explainable AI framework designed to classify and monitor water suitability in aquaculture ecosystems. Operating on a structured empirical dataset of 4,300 water quality observations across 14 biochemical parameters (Temperature, Turbidity, DO, BOD, CO2, pH, Alkalinity, Hardness, Calcium, Ammonia, Nitrite, Phosphorus, H2S, and Plankton density), the system predicts operational quality tiers: Excellent, Good, and Poor.',
      purpose:
        'Aquaculture organisms—such as finfish, prawns, and shrimp—depend upon delicate biochemical equilibrium. Sudden fluctuations in toxic metabolites (ammonia, nitrite, hydrogen sulfide) or dissolved oxygen depletion can cause catastrophic mortality events in hours. Conventional water monitoring depends on manual reagent testing, acid-base titration, and microscopic plankton counts, which are labor-intensive, expensive, and introduce delayed interventions. This project was developed to establish an automated, cost-effective data science pipeline that identifies key water degradation drivers and reduces required sensor parameters without sacrificing diagnostic accuracy.',
      mainObjective:
        'Benchmark 7 supervised classification algorithms on 4,300 aquaculture water samples, apply SHAP TreeExplainer for multi-class feature attribution, and evaluate feature reduction from 14 down to 9 parameters to create an optimized, low-cost water quality assessment suite.',
      howItWorks:
        'Water samples are preprocessed and standardized using StandardScaler across a stratified 67/33 train/test split. Seven classification models (Random Forest, Decision Tree, XGBoost, LightGBM, SVM, KNN, AdaBoost) are tuned using 5-fold cross-validation. SHAP TreeExplainer calculates mean absolute Shapley values to rank feature influence and plot directional beeswarm attribution. A progressive feature pruning experiment systematically eliminates the 5 lowest-ranked parameters (pH, Hardness, Calcium, Plankton, Phosphorus), demonstrating that the remaining 9 features retain 99.51% test accuracy.',
      targetUsers: [
        'Aquaculture Farm Operators & Hatchery Managers',
        'Environmental Data Scientists & Hydrological Researchers',
        'Limnologists & Water Resource Conservationists',
        'IoT Environmental Telemetry Engineers',
      ],
      highlights: [
        'Empirical Benchmarking Across 7 Supervised Classification Algorithms',
        'Random Forest Model Achieving 99.51% Test Accuracy & 0.9926 MCC',
        'SHAP TreeExplainer Explaining Global & Directional Class Attribution',
        '92.28% Total Decision Weight Concentrated in the Top 9 Features',
        '35.7% Parameter Reduction (14 to 9 Features) Retaining 99.51% Accuracy',
        '14x14 Pearson Correlation Heatmap Proving Zero Multicollinearity (|r| < 0.85)',
        'Synthetic Gaussian Sensor Noise Robustness Testing Over 120 Iterations',
      ],
    },
    problemStatement: {
      title: 'Biochemical Volatility, Sensor Overhead & Latency in Aquaculture Monitoring',
      mainProblem:
        'Aquatic ecosystems are prone to rapid biochemical swings triggered by biological waste, feeding cycles, temperature shifts, and unmanaged microbial blooms. In intensive aquaculture, a localized drop in Dissolved Oxygen (< 3 mg/L) or a surge in unionized Ammonia or Hydrogen Sulfide triggers mass asphyxiation within hours. However, tracking 14 continuous biochemical parameters requires expensive electrochemical sensors and lab reagents, making comprehensive continuous monitoring economically unviable for commercial hatcheries.',
      existingLimitations: [
        'Cost-Prohibitive Multiparameter Sensor Suites: Maintaining 14 calibrated probe sensors per pond imposes severe capital and maintenance overhead.',
        'Laboratory Reagent Titration Latency: Measuring parameters like Hardness, Calcium, and Phosphorus requires manual chemical titration that cannot provide real-time alerts.',
        'Microscopic Biological Counts: Plankton enumeration mandates lab microscopy and manual cell counts, creating days of reporting lag.',
        'Opaque Black-Box Decision Making: Naive classifiers provide categorical predictions without explaining which specific chemical imbalance caused the degradation.',
        'Sensor Drift & Environmental Noise: Real-world aquatic probes suffer calibration drift and biofouling noise that degrade algorithmic predictions in the field.',
      ],
      whyItMatters:
        'Water quality degradation accounts for over 70% of unexpected stock mortality in commercial aquaculture. A reliable, explainable machine learning model that operates on an optimized subset of 9 easily sensored parameters empowers farmers to take proactive remediation action before mortality thresholds are breached.',
      keyChallenges: [
        {
          title: '14-Parameter Overhead vs. Diagnostic Accuracy',
          description:
            'Determining whether expensive laboratory parameters can be safely omitted without degrading water quality classification reliability.',
          iconName: 'Scale',
        },
        {
          title: 'Multi-Class Non-Linear Feature Attribution',
          description:
            'Quantifying exactly how individual parameters push water quality toward Excellent, Good, or Poor across complex tree ensembles.',
          iconName: 'Activity',
        },
        {
          title: 'Field Sensor Noise Resilience',
          description:
            'Evaluating model stability when real-world probes experience Gaussian measurement noise and sensor drift.',
          iconName: 'ShieldAlert',
        },
      ],
    },
    solution: {
      title: 'Systematic 7-Algorithm Benchmarking, SHAP Attribution & Parameter Pruning',
      approach:
        'A rigorous environmental data science methodology integrating exploratory correlation analysis, 7-model supervised benchmarking, SHAP TreeExplainer interpretation, and data-driven feature pruning to deliver a high-accuracy, cost-optimized 9-parameter evaluation suite.',
      technicalSolution:
        'Standardized 4,300 aquaculture samples using StandardScaler and evaluated 7 classifiers across 5-fold stratified cross-validation. Random Forest achieved 99.51% accuracy (0.9926 MCC), while LightGBM and XGBoost achieved 99.37%. Computed global Shapley values showing that H2S (14.98%), Nitrite (12.43%), DO (11.88%), Turbidity (11.63%), Ammonia (11.60%), and BOD (11.54%) dominate model decisions. Systematically pruned the 5 lowest-ranked features (pH, Hardness, Calcium, Plankton, Phosphorus), proving that a compact 9-feature LightGBM model preserves 99.51% test accuracy (Macro F1 = 1.00). Evaluated sensor noise robustness across 120 repeat trials to verify operational stability.',
      implementationOverview:
        'Built in Python 3.10 within Jupyter Notebook environments using Scikit-Learn, LightGBM, XGBoost, and SHAP. Serialized the trained 9-feature model (lgbm_9_features.joblib) and scaler (scaler_14.joblib) for lightweight production inference.',
      howItSolves: [
        'Delivers 99.51% classification accuracy across Excellent, Good, and Poor water quality tiers',
        'Reduces required monitoring parameters by 35.7% (from 14 to 9), eliminating complex laboratory titration tests',
        'Provides transparent SHAP beeswarm explanations highlighting specific chemical toxicity drivers',
        'Verifies zero multicollinearity across all 14 parameters (|r| < 0.85 in Pearson heatmap)',
        'Validates model resilience against synthetic probe noise across 120 experimental iterations',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Award',
        title: '7-Algorithm Model Benchmarking',
        description:
          'Rigorous comparison of Random Forest (99.51%), Decision Tree (99.44%), LightGBM (99.37%), XGBoost (99.37%), SVM (95.42%), KNN (87.17%), and AdaBoost (84.64%).',
      },
      {
        iconName: 'Activity',
        title: 'SHAP TreeExplainer Multi-Class Attribution',
        description:
          'Computes normalized mean absolute Shapley values (|SHAP|) and directional beeswarm plots explaining parameter impact per class.',
      },
      {
        iconName: 'Sliders',
        title: '14-to-9 Feature Pruning Optimization',
        description:
          'Data-driven reduction eliminating 5 lab-intensive features (pH, Hardness, Calcium, Plankton, Phosphorus) while retaining 99.51% accuracy.',
      },
      {
        iconName: 'Grid',
        title: '14x14 Pearson Correlation Heatmap',
        description:
          'Thermal matrix mapping inter-parameter relationships and proving zero multicollinearity (|r| < 0.85 across all pairs).',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Sensor Noise Robustness Stress-Testing',
        description:
          'Evaluates model stability against synthetic Gaussian noise (sigma up to 0.2) over 120 repeat simulation runs.',
      },
      {
        iconName: 'Droplets',
        title: '3-Tier Operational Water Quality Grading',
        description:
          'Stratified multi-class classification into Excellent (462), Good (462), and Poor (495) tiers to drive automated intervention.',
      },
    ],
    modelBenchmark: {
      title: '7-Algorithm Classifier Benchmark (1,419 Test Samples)',
      sampleSize: '4,300 Samples (2,881 Train / 1,419 Test)',
      baselineModel: {
        name: 'Decision Tree Classifier',
        params: 'max_depth=None, criterion=gini, random_state=42',
        macroF1: '99.44%',
        defaulterRecall: '99.44%',
        balancedAccuracy: '99.44%',
        flawDescription:
          'Single unpruned decision trees are prone to variance instability and lack ensemble smoothing against noisy field sensor inputs.',
      },
      championModel: {
        name: 'Random Forest Classifier',
        params: 'n_estimators=300, max_depth=None, random_state=42, n_jobs=-1',
        macroF1: '99.51%',
        defaulterRecall: '99.51%',
        balancedAccuracy: '99.51%',
        winningReason:
          'Ensemble bagging with 300 decision trees achieved the highest test accuracy (99.51%), precision (99.51%), recall (99.51%), and Matthews Correlation Coefficient (0.9926).',
      },
      rows: [
        {
          metric: 'Overall Test Accuracy',
          decisionTreeValue: '99.44%',
          randomForestValue: '99.51%',
          absoluteDelta: '+0.07%',
          winner: 'Random Forest',
          impact: 'Achieves superior generalization on 1,419 unseen test water samples.',
        },
        {
          metric: 'Macro Precision',
          decisionTreeValue: '99.44%',
          randomForestValue: '99.51%',
          absoluteDelta: '+0.07%',
          winner: 'Random Forest',
          impact: 'Eliminates false-positive contamination alarms across all three classes.',
        },
        {
          metric: 'Macro Recall',
          decisionTreeValue: '99.44%',
          randomForestValue: '99.51%',
          absoluteDelta: '+0.07%',
          winner: 'Random Forest',
          impact: 'Ensures 99.51% of degraded water samples are correctly intercepted.',
        },
        {
          metric: 'Macro F1-Score',
          decisionTreeValue: '99.44%',
          randomForestValue: '99.51%',
          absoluteDelta: '+0.07%',
          winner: 'Random Forest',
          impact: 'Harmonious balance across Excellent (1.00), Good (1.00), and Poor (0.99).',
        },
        {
          metric: 'Matthews Correlation (MCC)',
          decisionTreeValue: '0.9916',
          randomForestValue: '0.9926',
          absoluteDelta: '+0.0010',
          winner: 'Random Forest',
          impact: 'High correlation demonstrating robust multi-class separation.',
        },
        {
          metric: 'Noise Robustness Stability',
          decisionTreeValue: 'Moderate',
          randomForestValue: 'High (>=98% @ sigma=0.15)',
          absoluteDelta: '+12% Stability',
          winner: 'Random Forest',
          impact: 'Ensemble voting dampens sensor reading jitter in real-world probes.',
        },
      ],
      keyTakeaways: [
        'Random Forest achieved the top overall test accuracy of 99.51% and Matthews Correlation Coefficient of 0.9926.',
        'LightGBM and XGBoost demonstrated near-identical performance at 99.37% with substantially faster inference.',
        'The 9-feature pruned LightGBM model retained 99.51% accuracy, eliminating 5 costly laboratory titration tests.',
      ],
    },
    mlVisualizations: [
      {
        category: 'Exploratory Data Analysis & Parameter Distributions',
        categoryDescription:
          'Statistical profiling of 4,300 empirical aquaculture observations across 14 biochemical parameters to evaluate distribution spread and inter-parameter dependencies.',
        visualizations: [
          {
            image: '/projects/water-quality-management/gallery/Water Quality Features.jpeg',
            title: 'Aquaculture Water Quality Parameter Distributions',
            description:
              '14-panel subplot grid displaying histograms and kernel density estimations (KDE) for all monitored biochemical features across the 4,300 dataset samples.',
            findings: [
              'Highlights natural biological ranges and skewed distributions for critical parameters such as H2S and Ammonia.',
              'Confirms distinct multimodal distributions in Dissolved Oxygen and BOD reflecting varying aquaculture pond health levels.',
              'Validates absence of anomalous data spikes or artificial clipping across the dataset.',
            ],
          },
          {
            image: '/projects/water-quality-management/gallery/pearson correlation Matrix.jpeg',
            title: '14x14 Pearson Correlation Matrix Heatmap',
            description:
              'Comprehensive thermal correlation matrix computing pairwise Pearson correlation coefficients (r) between all 14 biochemical features.',
            findings: [
              'Confirms zero high-correlation pairs with |r| >= 0.85, proving the absence of multicollinearity.',
              'Reveals significant negative correlation between water temperature and dissolved oxygen solubility.',
              'Shows strong diagnostic independence among organic pollution markers (BOD, Ammonia, Nitrite).',
            ],
          },
        ],
      },
      {
        category: 'Model Explainability & SHAP Attribution',
        categoryDescription:
          'Model-agnostic game-theoretic feature attribution using SHAP TreeExplainer to interpret non-linear decision boundaries and directional impact.',
        visualizations: [
          {
            image: '/projects/water-quality-management/gallery/Shap importance.jpeg',
            title: 'SHAP Feature Importance & Multi-Class Decision Weights',
            description:
              'Stacked horizontal bar chart quantifying the normalized mean absolute Shapley value (|SHAP|) across Excellent, Good, and Poor water quality classes.',
            findings: [
              'Identifies Hydrogen Sulfide (H2S, 14.98%), Nitrite (12.43%), DO (11.88%), Turbidity (11.63%), Ammonia (11.60%), and BOD (11.54%) as the top 6 decision drivers.',
              'Reveals that the top 9 features account for 92.28% of the total cumulative model decision weight.',
              'Identifies pH, Hardness, Calcium, Plankton, and Phosphorus as low-contribution features (< 2% each).',
            ],
          },
          {
            image: '/projects/water-quality-management/gallery/Shap Value.jpeg',
            title: 'SHAP Value Beeswarm & Directional Class Attribution',
            description:
              'SHAP beeswarm dot plot illustrating how high (red) versus low (blue) feature values directionally push predictions toward or away from specific water quality classes.',
            findings: [
              'High levels of toxic metabolites (H2S, Nitrite, Ammonia) exert a massive positive SHAP push toward Poor water quality.',
              'High Dissolved Oxygen levels and low BOD readings exert a strong positive SHAP push toward Excellent water quality.',
              'Unveils non-linear threshold inflection points where safe parameters rapidly transition into toxic hazard zones.',
            ],
          },
        ],
      },
      {
        category: 'Feature Pruning & Efficiency Optimization',
        categoryDescription:
          'Data-driven feature pruning analysis evaluating the trade-off between monitoring parameter count, sensor cost, and multi-class classification accuracy.',
        visualizations: [
          {
            image: '/projects/water-quality-management/gallery/Baseline.jpeg',
            title: '14-Feature vs. 9-Feature Baseline Model Accuracy',
            description:
              'Comparative performance bar chart contrasting baseline 14-feature model accuracy (99.65%) against the pruned 9-feature model (99.51%).',
            findings: [
              'Eliminating 5 laboratory-intensive features (pH, Hardness, Calcium, Plankton, Phosphorus) incurs a negligible accuracy penalty of only 0.14%.',
              'The 9-feature model achieves 99.51% test accuracy with 1.00 macro F1-score across 1,419 test samples.',
              'Reduces required sensor hardware and chemical reagent testing overhead by 35.7% for practical field adoption.',
            ],
          },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/water-quality-management/gallery/Baseline.jpeg',
        caption:
          'Baseline Comparison (14 Features vs. 9 Features): Demonstrates that pruning 5 complex parameters retains 99.51% classification accuracy with 35.7% reduced testing overhead.',
        alt: 'Baseline 14 vs 9 Features Comparison',
      },
      {
        url: '/projects/water-quality-management/gallery/pearson correlation Matrix.jpeg',
        caption:
          '14x14 Pearson Correlation Matrix: Heatmap illustrating pairwise relationships between water quality parameters and proving zero multicollinearity (|r| < 0.85).',
        alt: 'Pearson Correlation Matrix Heatmap',
      },
      {
        url: '/projects/water-quality-management/gallery/Shap importance.jpeg',
        caption:
          'SHAP Feature Importance: Multi-class stacked bar chart showing that the top 9 features govern 92.28% of total model decision weight.',
        alt: 'SHAP Feature Importance Chart',
      },
      {
        url: '/projects/water-quality-management/gallery/Shap Value.jpeg',
        caption:
          'SHAP Value Beeswarm Plot: Directional attribution showing how high toxic metabolites (H2S, Nitrite, Ammonia) push samples into Poor water quality.',
        alt: 'SHAP Value Beeswarm Distribution',
      },
      {
        url: '/projects/water-quality-management/gallery/Water Quality Features.jpeg',
        caption:
          'Water Quality Feature Distributions: 14-panel subplot grid showing histograms and KDE curves for all empirical aquaculture parameters across 4,300 samples.',
        alt: 'Water Quality Parameter Distributions Grid',
      },
      {
        url: '/projects/water-quality-management/cover.png',
        caption:
          'Water Quality Management Project Visual Identity: Modern data science interface showcasing multi-parameter water analysis, machine learning algorithms, and SHAP explainability.',
        alt: 'Water Quality Management Cover Branding',
      },
    ],
    architecture: {
      description:
        'The Water Quality Management analytical architecture is structured as a modular, reproducible data science pipeline. The workflow encompasses data ingestion, feature normalization, multi-model cross-validation, game-theoretic SHAP explainability, progressive feature pruning, sensor noise stress-testing, and lightweight joblib model serialization.',
      frontend:
        'Interactive Jupyter Notebook exploratory computing environment, Matplotlib and Seaborn visualization renderers, and exported publication-grade analytical figures.',
      backend:
        'Python 3.10+ data science runtime, Scikit-Learn pipeline transformers, LightGBM and XGBoost C++ gradient boosting engines, and SHAP C-accelerated TreeExplainer.',
      database:
        'Structured empirical dataset (WQD.xlsx) containing 4,300 validated aquaculture water quality observations with 14 continuous biochemical metrics and 1 multi-class label.',
      apis: [
        'Scikit-Learn GridSearchCV & StratifiedKFold cross-validation APIs',
        'LightGBM & XGBoost multi-threaded gradient boosting APIs',
        'SHAP TreeExplainer API for multi-class Shapley value calculations',
        'Joblib model and scaler serialization API (joblib.dump / joblib.load)',
      ],
      workflow: [
        '1. Dataset Ingestion: 4,300 water quality records loaded from WQD.xlsx; target variable encoded into Excellent, Good, and Poor classes.',
        '2. Stratified Partitioning & Normalization: Data split into 67% training (2,881 samples) and 33% testing (1,419 samples); features scaled via StandardScaler.',
        '3. 7-Model Benchmark Training: Random Forest, Decision Tree, XGBoost, LightGBM, SVM, KNN, and AdaBoost trained with 5-fold cross-validation.',
        '4. SHAP Feature Attribution: TreeExplainer extracts mean absolute Shapley values; top 9 features identified accounting for 92.28% of decision weight.',
        '5. Feature Pruning Experiment: Bottom 5 features (pH, Hardness, Calcium, Plankton, Phosphorus) removed; 9-feature LightGBM model retrained.',
        '6. Noise Stress-Testing & Serialization: Model subjected to synthetic Gaussian sensor noise (sigma up to 0.2); 9-feature model saved to joblib.',
      ],
    },
    techStack: [
      'Python',
      'Scikit-Learn',
      'LightGBM',
      'XGBoost',
      'SHAP',
      'Pandas',
      'NumPy',
      'Seaborn',
      'Matplotlib',
      'Jupyter',
    ],
    techStackGrouped: [
      {
        category: 'Core Language & Environment',
        items: [
          { name: 'Python 3.10+', role: 'Primary data science and scientific computing runtime', iconName: 'Code' },
          { name: 'Jupyter Notebook', role: 'Interactive literate programming and analytical experiment harness', iconName: 'FileCode' },
          { name: 'Joblib', role: 'High-throughput model and preprocessor serialization', iconName: 'HardDrive' },
        ],
      },
      {
        category: 'Machine Learning & Boosting',
        items: [
          { name: 'Scikit-Learn', role: 'Random Forest, Decision Tree, SVM, KNN, AdaBoost, and cross-validation', iconName: 'Cpu' },
          { name: 'LightGBM', role: 'High-speed histogram-based gradient boosting classifier', iconName: 'Zap' },
          { name: 'XGBoost', role: 'Extreme gradient boosting with regularized objective optimization', iconName: 'Activity' },
        ],
      },
      {
        category: 'Data Engineering & Processing',
        items: [
          { name: 'Pandas', role: 'Tabular data wrangling, feature engineering, and slicing', iconName: 'FileSpreadsheet' },
          { name: 'NumPy', role: 'Vectorized mathematical calculations and array operations', iconName: 'Calculator' },
          { name: 'StandardScaler', role: 'Z-score feature normalization for distance-sensitive algorithms', iconName: 'Sliders' },
        ],
      },
      {
        category: 'Explainability & Visualization',
        items: [
          { name: 'SHAP (TreeExplainer)', role: 'Game-theoretic Shapley value attribution and beeswarm plotting', iconName: 'Sparkles' },
          { name: 'Seaborn', role: 'Statistical visualization, distribution plots, and correlation heatmaps', iconName: 'BarChart3' },
          { name: 'Matplotlib', role: 'Custom multi-panel figure layouts and publication-grade export', iconName: 'Layout' },
        ],
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Aquaculture Domain Analysis & Empirical Data Exploration',
        description:
          'Audited biochemical thresholds for aquaculture health. Processed 4,300 water quality samples across 14 parameters, generating 14-panel KDE distributions and a 14x14 Pearson correlation matrix proving zero multicollinearity (|r| < 0.85).',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Data Preprocessing & Stratified Splitting',
        description:
          'Implemented a stratified 67/33 train/test split (2,881 train / 1,419 test) preserving class balance across Excellent (462), Good (462), and Poor (495). Standardized continuous parameters using StandardScaler to prevent feature scale bias.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: '7-Algorithm Model Benchmarking & Hyperparameter Tuning',
        description:
          'Trained and evaluated 7 classification algorithms with 5-fold cross-validation. Random Forest achieved 99.51% test accuracy (0.9926 MCC), while LightGBM and XGBoost achieved 99.37%, establishing strong multi-class classification baselines.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'SHAP TreeExplainer Attribution & Class Impact Profiling',
        description:
          'Deployed SHAP TreeExplainer to calculate multi-class Shapley values. Identified H2S (14.98%), Nitrite (12.43%), DO (11.88%), and Turbidity (11.63%) as the dominant drivers, with the top 9 features representing 92.28% of total model decision weight.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Data-Driven Feature Pruning & Noise Robustness Verification',
        description:
          'Pruned the 5 lowest-ranking features (pH, Hardness, Calcium, Plankton, Phosphorus), proving the 9-feature model retains 99.51% accuracy. Verified model resilience against synthetic Gaussian sensor noise across 120 repeat trials.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Raghu Raman K.',
        role: 'Lead Machine Learning Engineer & Data Scientist',
        image: '/images/team/raghuraman.jpg',
        responsibilities: [
          'End-to-end architecture and execution of the Water Quality Management data science project',
          'Conducted exploratory data analysis, 14-panel distribution modeling, and Pearson correlation mapping',
          'Constructed 7-model benchmarking pipeline with 5-fold stratified cross-validation',
          'Implemented SHAP TreeExplainer multi-class attribution and beeswarm visualization',
          'Formulated 14-to-9 feature pruning optimization reducing testing overhead by 35.7%',
          'Conducted synthetic Gaussian sensor noise robustness experiments over 120 iterations',
        ],
        technicalContributions: [
          'Engineered stratified 67/33 data pipeline preserving multi-class representation across 4,300 samples',
          'Achieved 99.51% test accuracy and 0.9926 Matthews Correlation Coefficient with Random Forest',
          'Quantified normalized Shapley weights demonstrating 92.28% decision concentration in top 9 features',
          'Demonstrated 99.51% accuracy retention on the pruned 9-feature LightGBM model',
        ],
        technologiesHandled: [
          'Python 3.10+',
          'Scikit-Learn',
          'LightGBM',
          'XGBoost',
          'SHAP',
          'Pandas',
          'NumPy',
          'Seaborn',
          'Matplotlib',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'High Laboratory Testing Costs Across 14 Biochemical Features',
        explanation:
          'Monitoring 14 continuous biochemical parameters requires expensive electrochemical sensors and lab reagents, making continuous testing economically unviable for commercial aquaculture.',
        solution:
          'Leveraged SHAP TreeExplainer to compute normalized mean absolute Shapley values across all 14 features. Demonstrated that the top 9 features govern 92.28% of model decisions. Retrained a 9-feature model that retained 99.51% test accuracy (Macro F1 = 1.00), safely eliminating 5 reagent-heavy titration tests (Calcium, Hardness, Phosphorus, Plankton, pH) to cut testing costs by 35.7%.',
      },
      {
        challenge: 'Interpreting Complex Non-Linear Multi-Class Ensembles',
        explanation:
          'Tree ensembles such as Random Forest and LightGBM produce complex non-linear decision boundaries that operate as black boxes, making it difficult to explain why a specific pond was graded as Poor.',
        solution:
          'Integrated SHAP TreeExplainer to generate multi-class directional beeswarm plots. Revealed that elevated toxic metabolites (H2S, Nitrite, Ammonia) exert a massive positive attribution push toward Poor water quality, while high Dissolved Oxygen and low BOD push toward Excellent, providing actionable remediation guidance.',
      },
      {
        challenge: 'Field Sensor Measurement Noise & Calibration Drift',
        explanation:
          'Electrochemical aquatic probes deployed in real-world aquaculture ponds experience biofouling, temperature drift, and electronic noise that degrade classifier accuracy in production.',
        solution:
          'Designed a synthetic Gaussian noise robustness test evaluating models under varying perturbation levels (sigma up to 0.20) across 120 repeat simulation runs. Proved that ensemble models like Random Forest and LightGBM retain over 98% accuracy under moderate noise (sigma = 0.15), demonstrating field deployment readiness.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'End-to-end data science pipeline processing 4,300 empirical aquaculture observations',
        '7-algorithm machine learning benchmark with 5-fold stratified cross-validation',
        'Random Forest champion model achieving 99.51% accuracy and 0.9926 MCC',
        'SHAP TreeExplainer multi-class importance and directional beeswarm attribution',
        'Optimized 9-feature LightGBM model retaining 99.51% test accuracy',
        '14x14 Pearson correlation matrix proving zero multicollinearity (|r| < 0.85)',
        'Synthetic Gaussian sensor noise stress-testing across 120 repeat simulation runs',
        'Exported serialized models and preprocessors (joblib) for lightweight production inference',
      ],
      technicalAchievements: [
        'Achieved 99.51% test accuracy across 1,419 unseen held-out test samples',
        'Successfully reduced required monitoring features by 35.7% (from 14 to 9 parameters)',
        'Identified H2S (14.98%), Nitrite (12.43%), DO (11.88%), and Turbidity (11.63%) as primary drivers',
        'Demonstrated ensemble resilience against synthetic sensor noise (>= 98% accuracy at sigma=0.15)',
        'Delivered 100% transparent model explainability eliminating black-box decision risks',
      ],
      testingResults: [
        'Random Forest: 99.51% accuracy, 99.51% precision, 99.51% recall, 99.51% F1, 0.9926 MCC',
        'Decision Tree: 99.44% accuracy, 99.44% precision, 99.44% recall, 99.44% F1, 0.9916 MCC',
        'LightGBM: 99.37% accuracy, 99.37% precision, 99.37% recall, 99.37% F1, 0.9905 MCC',
        'XGBoost: 99.37% accuracy, 99.37% precision, 99.37% recall, 99.36% F1, 0.9905 MCC',
        'SVM: 95.42% accuracy, 95.64% precision, 95.42% recall, 95.38% F1, 0.9328 MCC',
        'Pruned 9-Feature LightGBM: 99.51% test accuracy, 1.00 macro F1-score',
      ],
      demonstratedCapabilities: [
        'Applied Environmental Data Science & Aquaculture Telemetry Modeling',
        'Supervised Multi-Class Machine Learning & Gradient Boosting (LightGBM, XGBoost)',
        'Model Explainability & Game-Theoretic Attribution (SHAP TreeExplainer)',
        'Dimensionality Reduction & Data-Driven Feature Pruning Optimization',
        'Sensor Noise Robustness Testing & Statistical Quality Assurance',
      ],
    },
  },

  // 17. Atmosphere – Real-Time Weather Forecast Application - Completed
  atmosphere: {
    id: 'atmosphere',
    slug: 'atmosphere',
    title: 'Atmosphere – Real-Time Weather Forecast Application',
    shortTitle: 'Atmosphere Weather Intelligence',
    subtitle: 'Stay Informed. Plan Better. Explore Every Forecast.',
    category: 'Python Development & Automation',
    domain: 'Python Development',
    domains: ['Python Development'],
    status: 'Completed',
    shortDescription:
      'Dual-interface Python weather intelligence application retrieving real-time atmospheric observations, 3-hour hourly timelines, and 5-day daily forecast summaries via OpenWeatherMap API, featuring High-DPI Tkinter GUI and Colorama CLI.',
    assetFolderPath: '/projects/atmosphere/',
    coverImage: '/projects/atmosphere/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/atmosphere/demo.mp4',
      thumbnail: '/projects/atmosphere/cover.png',
      title: 'See Atmosphere in Action',
      description:
        'Watch the live demonstration showcasing city search, High-DPI Tkinter GUI, in-memory unit toggling, and Colorama CLI execution.',
      duration: 'Desktop & CLI Walkthrough',
    },
    overview: {
      introduction:
        'Atmosphere is a dual-interface Python meteorological intelligence suite designed to provide instantaneous, clutter-free weather observations, 3-hour chronological hourly timelines, and 5-day daily forecast summaries. Built to interface with the OpenWeatherMap REST API, Atmosphere eliminates the heavy memory overhead and ad clutter of browser-based weather portals, delivering clean weather diagnostics through both a native High-DPI desktop GUI and a fast, scriptable terminal CLI.',
      purpose:
        'Developed to satisfy the daily need for reliable weather awareness—such as travel route planning, commute scheduling, outdoor event management, and developer command-line workflows. Atmosphere demonstrates production-grade Python desktop engineering by solving real-world challenges including thread race conditions, main-thread GUI freezing during remote icon downloads, and redundant network requests on unit toggles.',
      mainObjective:
        'Establish a unified weather intelligence suite that queries OpenWeatherMap endpoints, decodes JSON telemetry into structured data structures, renders a responsive High-DPI Tkinter desktop interface alongside a formatted Colorama CLI, and guarantees sub-15ms local unit conversions with thread-safe concurrency.',
      howItWorks:
        'Users launch either the desktop graphical interface (weather_gui.py) or the terminal application (weather_app.py). When a city query is entered, a daemon worker thread is dispatched to request current meteorological metrics and 5-day / 3-hour forecast feeds from OpenWeatherMap. An atomic request-ID validation mechanism ensures that responses from rapid sequential queries never overwrite newer searches. The GUI parses temperature, humidity, wind velocity, and atmospheric pressure, while pre-fetching condition icons into PIL memory before rendering. Toggling between Celsius (°C) and Fahrenheit (°F) triggers instant in-memory mathematical conversions across active data cards without making additional API calls.',
      targetUsers: [
        'Software Developers & Terminal Power Users',
        'Daily Commuters & Regional Travelers',
        'Outdoor Sports & Event Planners',
        'Python Engineers & Open-Source Enthusiasts',
      ],
      highlights: [
        'Dual Interface Architecture: High-DPI Desktop GUI and Colorama Terminal CLI',
        '3-Hour Chronological Hourly Timeline Covering a 24-Hour Horizon',
        '5-Day Daily Forecast Summaries with True Min/Max Temperature Ranges',
        'Instant In-Memory Mathematical Unit Conversion (°C ↔ °F) Without API Overhead',
        'Thread-Safe Concurrency Guard (Atomic Request-ID) Eliminating Race Conditions',
        'Comprehensive Error Resilience Handling HTTP 401, 404, 429, 5xx, and Network Timeouts',
      ],
    },
    problemStatement: {
      title: 'Overhead, Clutter & Unreliable Concurrency in Weather Software',
      mainProblem:
        'Accessing everyday weather information is surprisingly frustrating. Most modern weather portals consume hundreds of megabytes of RAM inside web browsers, load intrusive video ads, and suffer from sluggish search responses. Meanwhile, basic desktop utilities often freeze during network I/O, suffer from race conditions when users search rapidly, and re-fetch entire API payloads merely to switch between Celsius and Fahrenheit.',
      existingLimitations: [
        'Browser-based weather dashboards demand substantial memory and bandwidth while displaying intrusive advertisements.',
        'Synchronous network calls in GUI event loops freeze desktop windows, generating "Not Responding" operating system hangs.',
        'Rapid sequential city queries trigger thread race conditions where out-of-order network responses overwrite active search results.',
        'Naive temperature unit toggling forces redundant HTTP API requests, triggering 429 rate limits on public developer keys.',
        'Terminal users lack clean, color-graded CLI weather utilities capable of rendering formatted forecast matrices without external dependencies.',
      ],
      whyItMatters:
        'Reliable meteorological software must be instantaneous, robust against network jitter, and lightweight enough to run continuously on low-resource hardware without lagging or leaking credentials.',
      keyChallenges: [
        {
          title: 'Network Thread Race Conditions',
          description:
            'Rapid consecutive city searches spawn background threads that resolve out of order, overwriting fresh data with stale results.',
          iconName: 'AlertTriangle',
        },
        {
          title: 'Tkinter Main-Thread Freezing',
          description:
            'Downloading remote weather icons sequentially on the GUI thread blocks the main event loop for up to 5 seconds per request.',
          iconName: 'Clock',
        },
        {
          title: 'Redundant Network Overhead',
          description:
            'Re-requesting API endpoints to convert between Celsius and Fahrenheit wastes API quotas and introduces unnecessary latency.',
          iconName: 'TrendingDown',
        },
      ],
    },
    solution: {
      title: 'Thread-Safe, High-DPI Python Weather Intelligence Suite',
      approach:
        'A modular Python architecture combining a High-DPI Tkinter graphical application and an ANSI-colored Colorama CLI, backed by threaded network dispatching, atomic request-ID validation, and local mathematical unit conversion.',
      technicalSolution:
        'Engineered weather_gui.py using Python Tkinter, Pillow (PIL), and Windows DWM High-DPI hooks (ctypes.windll.shcore.SetProcessDpiAwareness(1)). Built a non-blocking background worker thread model with atomic request-ID counters (_active_request_id), ensuring stale network packets are safely discarded. Remote weather icons are asynchronously streamed into PIL memory on background workers and instantiated as PhotoImage objects only on main-thread dispatch. Developed local conversion helpers (c_to_f, f_to_c, ms_to_mph) allowing instantaneous unit switching in memory without network traffic. Engineered weather_app.py as an interactive CLI featuring Colorama temperature thermal grading and tabular 5-day forecast matrices.',
      implementationOverview:
        'The application interfaces with OpenWeatherMap REST endpoints (/weather and /forecast). Defensive error validation intercepts placeholder keys, catches HTTP 401/404/429/5xx status codes, and displays meaningful user guidance. The GUI renders a 3-hour chronological timeline (8 intervals) and aggregates 5-day daily min/max bounds with midday condition filtering (11:00 AM – 4:00 PM local time).',
      howItSolves: [
        'Eliminates main-thread GUI freezing by offloading all API network requests and icon downloads to background daemon threads',
        'Guarantees 100% search consistency through atomic request-ID matching that discards out-of-order responses',
        'Provides sub-15ms unit toggling between Celsius and Fahrenheit via local mathematical calculations with zero network overhead',
        'Provides terminal power users with a formatted Colorama CLI with interactive commands and temperature color coding',
        'Delivers an ad-free, high-performance desktop experience utilizing an obsidian and slate dark theme on High-DPI displays',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Cloud',
        title: 'Dual GUI & CLI Interfaces',
        description:
          'High-DPI Tkinter desktop application with an obsidian theme alongside a fast, scriptable Colorama terminal CLI.',
      },
      {
        iconName: 'Clock',
        title: '3-Hour Hourly Timeline (24h)',
        description:
          'Chronological timeline displaying up to 8 intervals with weather icons, projected temperatures, and precipitation probabilities.',
      },
      {
        iconName: 'Calendar',
        title: '5-Day Daily Forecast Summaries',
        description:
          'Aggregated daily cards computing true daily min/max temperature bounds and representative midday condition icons.',
      },
      {
        iconName: 'Sliders',
        title: 'Instant In-Memory Unit Toggling',
        description:
          'Sub-15ms mathematical conversion between Celsius (°C) and Fahrenheit (°F) across all active cards without API calls.',
      },
      {
        iconName: 'Cpu',
        title: 'Atomic Request-ID Concurrency',
        description:
          'Thread-safe worker architecture ensuring rapid sequential city queries never overwrite newer results out of order.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Defensive API Resilience',
        description:
          'Pre-flight placeholder key interception and dedicated handlers for HTTP 401, 404, 429, 5xx, and network timeouts.',
      },
    ],
    architecture: {
      description:
        'Atmosphere is organized around a clean decoupled model. The core networking and data processing layer handles OpenWeatherMap REST communication, JSON schema parsing, and mathematical conversions. The GUI presentation layer leverages Tkinter and Pillow with background daemon workers and High-DPI scaling. The CLI presentation layer leverages Colorama for ANSI escape formatting and interactive REPL loops.',
      frontend:
        'High-DPI Python Tkinter Desktop GUI with custom Obsidian & Slate dark styling, Pillow (PIL) icon decoders, dynamic weather accent highlights, and Colorama ANSI Terminal CLI.',
      backend:
        'Python 3.10+ application runtime, daemon threading (threading.Thread), atomic request-ID synchronization locks, in-memory data cache (_current_weather_raw, _current_forecast_raw), and local unit converters.',
      database:
        'Lightweight local session state and environment configuration managed via python-dotenv (.env), with in-memory caching of active meteorological observations.',
      apis: [
        'OpenWeatherMap Current Weather API (GET /data/2.5/weather?q={city}&appid={key}&units={units})',
        'OpenWeatherMap 5-Day / 3-Hour Forecast API (GET /data/2.5/forecast?q={city}&appid={key}&units={units})',
        'OpenWeatherMap Icon CDN (GET /img/wn/{icon}@2x.png)',
      ],
      workflow: [
        '1. Application Initialization: Environment variables are loaded via python-dotenv; API key validity is verified against placeholder patterns.',
        '2. Query Entry: User searches for a city via GUI search bar, quick-city shortcut, or CLI argument/command prompt.',
        '3. Threaded API Dispatch: A background daemon thread is spawned with an incremented request ID (_active_request_id).',
        '4. OpenWeatherMap Ingestion: Requests queries /weather and /forecast endpoints with a 10-second timeout; JSON responses are validated.',
        '5. Data Processing & Icon Pre-Fetching: Background worker parses current metrics, computes 3-hour timelines and 5-day daily bounds, and pre-fetches icons into PIL memory.',
        '6. Thread-Safe Dispatch: Callback verifies request ID matching before updating Tkinter widgets or printing Colorama tables, preventing race condition overwrites.',
      ],
    },
    techStack: [
      'Python',
      'Tkinter',
      'OpenWeatherMap API',
      'Requests',
      'Pillow (PIL)',
      'Colorama',
      'python-dotenv',
      'Threading',
    ],
    techStackGrouped: [
      {
        category: 'Core Language & Runtime',
        items: [
          { name: 'Python 3.10+', role: 'Core application runtime, mathematical conversion, and data logic', iconName: 'Code' },
          { name: 'Standard Library', role: 'sys, os, io, datetime, collections, and unittest frameworks', iconName: 'FileCode' },
          { name: 'Threading Module', role: 'Daemon background workers for non-blocking UI network I/O', iconName: 'Cpu' },
        ],
      },
      {
        category: 'Desktop GUI & Image Decoding',
        items: [
          { name: 'Tkinter GUI Engine', role: 'Native desktop window management, canvas & card rendering', iconName: 'Layout' },
          { name: 'Pillow (PIL 10.0+)', role: 'Asynchronous icon decoding and ImageTk.PhotoImage conversion', iconName: 'Sparkles' },
          { name: 'Windows DWM DPI API', role: 'High-DPI scaling hook via ctypes.windll.shcore', iconName: 'Layers' },
        ],
      },
      {
        category: 'Terminal CLI & Output Formatting',
        items: [
          { name: 'Colorama (v0.4.6)', role: 'Cross-platform ANSI color grading and thermal status palettes', iconName: 'Terminal' },
          { name: 'ASCII Table Formatter', role: 'Formatted tabular rendering for multi-day forecast matrices', iconName: 'FileText' },
        ],
      },
      {
        category: 'Networking, API & Configuration',
        items: [
          { name: 'Requests (v2.28+)', role: 'HTTP client with timeout handling and error code processing', iconName: 'Globe' },
          { name: 'OpenWeatherMap API', role: 'REST weather observations and 5-day / 3-hour forecast feeds', iconName: 'Cloud' },
          { name: 'python-dotenv (v1.0+)', role: 'Secure environment variable management from local .env', iconName: 'ShieldCheck' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/atmosphere/gallery/dashboard.png',
        caption:
          'Atmosphere High-DPI Desktop GUI: Live meteorological intelligence for Trichy, IN (26.1°C, Overcast Clouds, 88% Humidity, 0.7 m/s Wind, 1011 hPa Pressure, 3-hour timeline, and 5-day daily forecast summary).',
        alt: 'Atmosphere Desktop GUI Dashboard',
      },
      {
        url: '/projects/atmosphere/cover.png',
        caption:
          'Atmosphere Project Visual Identity: Modern weather forecasting concept illustrating desktop weather widgets, temperature graphs, and 5-day outlook.',
        alt: 'Atmosphere Cover Branding',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Requirement Analysis & Meteorological API Investigation',
        description:
          'Audited weather data providers to evaluate endpoint reliability, rate limitations, and forecast resolution. Selected OpenWeatherMap REST endpoints for current weather and 5-day/3-hour forecasts.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'High-DPI Desktop GUI Engineering & Obsidian Theme Styling',
        description:
          'Built the Tkinter interface with Windows High-DPI scaling hooks, card-based layout structure, quick-city shortcuts, and an Obsidian & Slate dark color palette with weather-responsive accents.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Threading Model & Race-Condition Hardening',
        description:
          'Engineered a non-blocking background worker thread model with atomic request-ID validation and asynchronous PIL icon pre-fetching, completely eliminating main-thread freezes and search overwrites.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Colorama Terminal CLI & Interactive REPL Implementation',
        description:
          'Constructed weather_app.py featuring Colorama ANSI color grading based on temperature thresholds, command-line argument parsing (--metric, --imperial), and an interactive query loop.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Automated Unit Testing & Edge-Case Verification',
        description:
          'Authored a comprehensive 15-test automated test suite in tests/test_atmosphere.py verifying placeholder key detection, local unit conversion math, CLI formatting, and thread-safe request ID matching.',
        status: 'Completed',
      },
    ],
    challenges: [
      {
        challenge: 'Concurrent Search Race Conditions in Desktop GUI',
        explanation:
          'When users entered multiple city searches in rapid succession, separate background threads were spawned without request identifiers, allowing older responses to overwrite newer results out of order.',
        solution:
          'Implemented atomic request-ID tracking (_active_request_id with threading.Lock). Every new search increments the ID, and background thread callbacks verify req_id == self._active_request_id before updating the UI, safely discarding out-of-order packets.',
      },
      {
        challenge: 'Main-Thread GUI Freezing During Remote Icon Downloads',
        explanation:
          'Sequential HTTP requests for weather condition icons executed on the main GUI thread during timeline rendering, freezing the Tkinter window for up to 5 seconds per search.',
        solution:
          'Offloaded all icon network streaming to background worker threads using Pillow in-memory byte buffers. Converted icons into ImageTk.PhotoImage instances only upon main-thread UI dispatch.',
      },
      {
        challenge: 'Redundant Network Overhead on Temperature Unit Toggles',
        explanation:
          'Switching between Celsius (°C) and Fahrenheit (°F) previously triggered an entire fresh network fetch, consuming API quotas and creating potential unit mismatch race conditions.',
        solution:
          'Developed local mathematical conversion formulas (c_to_f, f_to_c, ms_to_mph, mph_to_ms) that instantly re-compute and re-render in-memory cached observations in sub-15ms with zero network traffic.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Dual-interface weather intelligence suite: Desktop GUI and Terminal CLI',
        'Real-time atmospheric telemetry lookup across global cities via OpenWeatherMap',
        '3-hour chronological hourly timeline covering a 24-hour horizon (8 intervals)',
        '5-day daily forecast summary computing true daily min/max temperature ranges',
        'Instant sub-15ms in-memory mathematical unit conversion (°C ↔ °F)',
        'Quick-access shortcut buttons for popular domestic and global metropolitan hubs',
      ],
      technicalAchievements: [
        '100% thread-safe UI execution with zero main-thread network blocking',
        'Atomic request-ID concurrency guard completely eliminating out-of-order search overwrites',
        'High-DPI display scaling support on Windows via ctypes DWM hooks',
        'Zero API network overhead when switching between Celsius and Fahrenheit units',
        'Pre-flight API key validation intercepting template placeholders before network calls',
      ],
      testingResults: [
        '15 passed automated unit tests in tests/test_atmosphere.py covering conversions, security & CLI',
        'Verified non-blocking UI responsiveness during simulated slow network connections',
        'Confirmed accurate daytime condition filtering (11:00 AM – 4:00 PM) for 5-day daily summaries',
        'Validated cross-platform ANSI thermal color grading in terminal sessions',
      ],
      demonstratedCapabilities: [
        'Python Application Development & High-DPI Desktop GUI Engineering (Tkinter, PIL)',
        'Multi-Threaded Concurrency & Race Condition Elimination (threading.Thread, Lock)',
        'REST API Integration, Error Interception & Defensive Programming (Requests)',
        'Command-Line Interface Design & Terminal Formatting (Colorama, sys, os)',
      ],
    },
    links: {
      github:
        'https://github.com/sreeramganesh/Real-Time-Weather-Forecast-Application.git',
      githubLabel: 'View Source Code',
    },
  },

  // 18. Quiz Master Pro - Completed
  'quiz-master-pro': {
    id: 'quiz-master-pro',
    slug: 'quiz-master-pro',
    title: 'Quiz Master Pro',
    shortTitle: 'Quiz Master Pro — PyQt6 Desktop Edition',
    subtitle: 'Interactive PyQt6 Desktop Assessment & Performance Analytics Engine',
    category: 'Python Development & Automation',
    domain: 'Python Development',
    domains: ['Python Development'],
    status: 'Completed',
    shortDescription:
      'High-performance Python desktop assessment software built with PyQt6 featuring a 100ms real-time countdown QTimer, dynamic color-shifting urgency indicators, detailed velocity analytics, and persistent multi-metric leaderboard tracking.',
    assetFolderPath: '/projects/quiz-master-pro/',
    coverImage: '/projects/quiz-master-pro/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/quiz-master-pro/demo.mp4',
      thumbnail: '/projects/quiz-master-pro/cover.png',
      title: 'Quiz Master Pro Desktop Application Demonstration',
      description:
        'Watch the full PyQt6 desktop workflow in action: participant onboarding, configurable timer settings (10s, 15s, 20s, 30s), real-time color-coded countdowns, automated question submissions, post-quiz analytical breakdown, and dynamic leaderboard generation.',
      duration: 'Desktop GUI Walkthrough',
    },
    overview: {
      introduction:
        'Quiz Master Pro is a production-grade Python desktop evaluation engine developed with PyQt6. Designed as an offline-first examination platform, it bridges the gap between static multiple-choice tests and dynamic real-time assessment environments. The software incorporates high-frequency event timers, dynamic urgency color feedback, granular question-level speed diagnostics, and an automated persistent leaderboard system—all packaged into a responsive, single-window desktop application.',
      purpose:
        'Built to eliminate the distractions, latency, and connectivity dependencies inherent in web-based quiz platforms. In educational environments, coding bootcamps, and technical interview screening, instructors and examinees require an offline-capable, deterministic software harness that accurately measures both knowledge recall and response velocity under strict temporal pressure.',
      mainObjective:
        'Deliver an autonomous desktop assessment platform with sub-second temporal precision (100ms QTimer resolution), seamless single-window navigation via QStackedWidget, automated performance metrics (accuracy, question-level latency, velocity), and persistent score tracking without requiring external database engines or cloud infrastructure.',
      howItWorks:
        'Upon launching desktop_app.py, participants enter their name and configure the per-question countdown limit (10s, 15s, 20s, or 30s) on the Home dashboard, which also displays real-time Top 3 podium medalists parsed from results.txt. During the quiz, a 100ms QTimer powers a dynamic progress bar that shifts colors from emerald green (safe > 6s) to amber (warning 3-6s) to crimson red (critical <= 3s). Answers are submitted manually or auto-submitted upon expiration. Upon completion, the Summary view presents 4 KPI cards (Score, Accuracy %, Total Time, Avg Speed/Q), a performance tier badge, and a scrollable question-by-question review area. Results are appended to results.txt and ranked on the global Leaderboard table.',
      targetUsers: [
        'Educators & Academic Instructors',
        'Coding Bootcamps & Technical Interviewers',
        'Competitive Exam Candidates & Students',
        'Python Engineers & GUI Developers',
      ],
      highlights: [
        '100ms High-Frequency QTimer with Dynamic Color-Shifting Progress Indicators',
        'Modular 5-View Single-Window Navigation via PyQt6 QStackedWidget',
        'Granular Response Velocity Analytics (Total Duration & Average Seconds per Question)',
        'Dynamic Performance Tier Badging (Mastermind, Well Done, Keep Practicing)',
        'Scrollable Question-by-Question Review with Visual Answer Verification',
        'Persistent Flat-File Leaderboard Store with Multi-Metric Tiebreaker Sorting',
        'Alternative Interactive Terminal CLI Harness (quiz_platform.py) with Live Scoring',
      ],
    },
    problemStatement: {
      title: 'Latency, Distraction & Timing Inaccuracies in Digital Assessment Tools',
      mainProblem:
        'Most modern digital testing tools rely on heavy browser-based frameworks that suffer from network latency, accidental page refreshes, and lack of deterministic offline execution. Conversely, basic desktop test scripts often freeze the UI during timing loops, lack visual urgency feedback, and fail to track granular candidate response velocity.',
      existingLimitations: [
        'Web-based test portals introduce network jitter, tab-switching distractions, and dependency on constant internet connectivity.',
        'Naive Python desktop loops (such as time.sleep) freeze GUI event loops, resulting in unresponsive windows and OS crash dialogs.',
        'Static countdown timers fail to visually convey urgency, causing participants to mismanage their allotted time.',
        'Conventional quiz tools only record final scores, omitting critical speed and velocity metrics that distinguish mastery from guesswork.',
        'Heavy enterprise assessment software mandates complex SQL or cloud setups, making lightweight classroom deployment impossible.',
      ],
      whyItMatters:
        'Accurate assessment demands precise temporal measurement and an uninterrupted user experience. A lightweight desktop tool guarantees immediate offline availability, zero telemetry leaks, and equal testing conditions for every participant.',
      keyChallenges: [
        {
          title: 'GUI Event Loop Freezing vs. Timer Precision',
          description:
            'Executing countdowns without blocking user interactions or drifting over time in an event-driven PyQt6 main loop.',
          iconName: 'Clock',
        },
        {
          title: 'Multi-Screen Navigation in a Single Window',
          description:
            'Managing smooth transitions between launcher, assessment, summary, leaderboard, and rules screens without opening cluttered secondary windows.',
          iconName: 'Layers',
        },
        {
          title: 'Resilient Offline Flat-File Persistence',
          description:
            'Storing, parsing, and sorting historical scores from results.txt with defense against corrupted or incomplete line entries.',
          iconName: 'Database',
        },
      ],
    },
    solution: {
      title: 'Event-Driven PyQt6 Desktop Engine with Microsecond Timing & Flat-File Persistence',
      approach:
        'A decoupled desktop software architecture utilizing PyQt6 QStackedWidget for single-window screen management, high-frequency QTimer (100ms resolution) for non-blocking countdown updates, and a structured flat-file persistence model for historical analytics.',
      technicalSolution:
        'Engineered desktop_app.py using PyQt6 QMainWindow and QStackedWidget to seamlessly orchestrate 5 distinct views (Home, Quiz, Summary, Leaderboard, Rules). Designed an event-driven timer mechanism with QTimer.setInterval(100) that continuously recalculates remaining time and dynamically updates QProgressBar stylesheets based on remaining seconds (>6s: emerald green #10b981; 3-6s: warning amber #f59e0b; <=3s: critical crimson #ef4444). Implemented microsecond-accurate response latency tracking across each question to compute true average speed (s/Q). Formatted persistent records into delimiter-separated results.txt rows, loaded dynamically by QTableWidget with automated tiebreaker sorting (Accuracy DESC, Score DESC, Total Time ASC). Created an alternative terminal CLI engine (quiz_platform.py) for headless command-line workflows.',
      implementationOverview:
        'The application runs entirely offline using Python 3.10+ and PyQt6 6.8.0. The state engine maintains participant names, active question indexes, per-question timestamps, selected choices, and running scores in memory. At test conclusion, performance KPIs are calculated and rendered alongside a scrollable review pane. Results are persisted to results.txt and reflected immediately in the Top 3 Hall of Fame podium on the launcher.',
      howItSolves: [
        'Eliminates UI freezing by driving countdown ticks via asynchronous PyQt6 Qt signals and slots rather than blocking loops',
        'Provides immediate visual urgency feedback with dynamic CSS/QSS color transitions on the progress bar',
        'Delivers in-depth velocity telemetry (accuracy %, total elapsed time, average speed per question)',
        'Guarantees 100% offline data persistence using resilient flat-file parsing with error recovery',
        'Provides a cohesive single-window user experience using QStackedWidget navigation',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Clock',
        title: '100ms High-Frequency Countdown QTimer',
        description:
          'Sub-second temporal precision with smooth countdown progress and automatic question submission upon expiration.',
      },
      {
        iconName: 'Activity',
        title: 'Dynamic Color-Shifting Urgency Indicator',
        description:
          'Progress bar dynamically changes color: Emerald Green (>6s), Amber Yellow (3-6s), and Crimson Red (<=3s).',
      },
      {
        iconName: 'Layers',
        title: 'Single-Window 5-View QStackedWidget',
        description:
          'Seamless transitions across Home, Quiz, Summary, Leaderboard, and Rules views within a single responsive window.',
      },
      {
        iconName: 'BarChart3',
        title: 'Comprehensive Performance Analytics',
        description:
          'Real-time computation of final score, accuracy percentage, total assessment duration, and average latency per question.',
      },
      {
        iconName: 'Trophy',
        title: 'Persistent Hall of Fame & Leaderboard',
        description:
          'Automatic flat-file results.txt synchronization, live Top 3 launcher podium, and full-screen historical QTableWidget.',
      },
      {
        iconName: 'Terminal',
        title: 'Dual-Interface Desktop & CLI Architecture',
        description:
          'Full-featured PyQt6 graphical user interface accompanied by a dedicated interactive terminal CLI (quiz_platform.py).',
      },
    ],
    applicationScreenshots: [
      {
        image: '/projects/quiz-master-pro/gallery/dashboard.png',
        title: 'Assessment Launcher & Hall of Fame Dashboard',
        description:
          'The native PyQt6 launcher interface where participants enter their name, configure per-question timer durations (10s, 15s, 20s, 30s), view dynamic system rules, and inspect the real-time Hall of Fame (Top 3) podium medals loaded from results.txt.',
        badge: 'Launcher & Live Podium',
      },
      {
        image: '/projects/quiz-master-pro/gallery/leaderboard.png',
        title: 'Global Performance Leaderboard Table',
        description:
          'Full-screen QTableWidget ranking historical quiz attempts loaded from results.txt. Displays Rank, Participant Name, Score (/10), Accuracy Percentage, Total Time, Average Speed per Question, and formatted Assessment Timestamps with responsive column resizing.',
        badge: 'Persistent Analytics',
      },
    ],
    architecture: {
      description:
        'Quiz Master Pro is built on an event-driven desktop software model. The presentation layer utilizes PyQt6 QMainWindow, QStackedWidget, and native widgets styled with modern QSS stylesheets. The application core contains the Question Engine, Timer Manager (QTimer signals), and Analytics Calculator. The persistence layer manages local disk I/O to results.txt with defensive parsing and error recovery.',
      frontend:
        'PyQt6 Desktop Graphical Interface (QMainWindow, QStackedWidget, QProgressBar with dynamic QSS stylesheets, QScrollArea, QTableWidget, and QButtonGroup) alongside an interactive ANSI Terminal CLI (quiz_platform.py).',
      backend:
        'Python 3.10+ event-driven runtime, Qt Signal/Slot mechanism, high-frequency QTimer (100ms interval), microsecond timestamp delta computation, and modular state management.',
      database:
        'Persistent offline flat-file store (results.txt) utilizing structured delimiter-separated records with defensive string parsing and error-handling routines.',
      workflow: [
        '1. Participant Setup: Participant launches desktop_app.py, enters player name, and selects question countdown interval (10s, 15s, 20s, or 30s). Top 3 Hall of Fame is rendered from results.txt.',
        '2. Quiz Initialization: QStackedWidget switches to Quiz View. Active question pool is loaded, option radio buttons are generated, and the 100ms QTimer begins ticking.',
        '3. Real-Time Execution: Progress bar smoothly interpolates and shifts colors based on remaining seconds. Question start/end timestamps are captured into latency arrays.',
        '4. Submission & Scoring: Candidate selects an option or timer triggers auto-submission. Option feedback is rendered and score accumulator updates.',
        '5. Performance Synthesis: Summary View displays 4 KPI metric cards, performance tier badge, and a scrollable review of all questions, answers, and time taken.',
        '6. Persistence & Ranking: Record is saved to results.txt. Leaderboard parses and sorts historical entries by Accuracy, Score, and Speed for podium display.',
      ],
    },
    techStack: [
      'Python',
      'PyQt6',
      'QTimer',
      'QStackedWidget',
      'Event-Driven GUI',
      'QTableWidget',
      'Flat-File Database',
      'CLI Interface',
    ],
    techStackGrouped: [
      {
        category: 'Core Language & GUI Framework',
        items: [
          { name: 'Python 3.10+', role: 'Core runtime, execution state, and data parsing logic', iconName: 'Code' },
          { name: 'PyQt6 (v6.8.0)', role: 'Native desktop GUI framework binding Qt6 to Python', iconName: 'Layout' },
          { name: 'PyQt6 Widgets', role: 'QMainWindow, QStackedWidget, QTableWidget, QProgressBar, QScrollArea', iconName: 'Layers' },
        ],
      },
      {
        category: 'Event-Driven Concurrency & Timing',
        items: [
          { name: 'Qt Event Loop', role: 'Non-blocking desktop application main loop and input polling', iconName: 'Cpu' },
          { name: 'QTimer (100ms Loop)', role: 'High-frequency sub-second countdown timer and progress tick', iconName: 'Clock' },
          { name: 'Qt Signals & Slots', role: 'Loosely coupled event communication between timer, UI, and logic', iconName: 'Zap' },
        ],
      },
      {
        category: 'Analytics & Speed Measurement',
        items: [
          { name: 'Microsecond Latency Engine', role: 'Accurate per-question response duration tracking via time deltas', iconName: 'Activity' },
          { name: 'Speed Analytics Formulas', role: 'Automated calculation of accuracy percentages and average speed (s/Q)', iconName: 'BarChart3' },
          { name: 'Performance Tier Engine', role: 'Rule-based classification for Mastermind, Well Done, and Practice tiers', iconName: 'Award' },
        ],
      },
      {
        category: 'Persistence, CLI & Testing',
        items: [
          { name: 'Flat-File Store (results.txt)', role: 'Lightweight delimiter-separated persistence for assessment logs', iconName: 'FileText' },
          { name: 'Defensive Parser Engine', role: 'Resilient token extraction with error interception and multi-key sorting', iconName: 'ShieldCheck' },
          { name: 'Terminal CLI Harness', role: 'Companion quiz_platform.py terminal quiz runner with live scoring', iconName: 'Terminal' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/quiz-master-pro/gallery/dashboard.png',
        caption:
          'Quiz Master Pro Desktop Launcher: Participant name configuration, timer duration selection (10s, 15s, 20s, 30s), system rules, and live Top 3 Hall of Fame podium loaded from results.txt.',
        alt: 'Quiz Master Pro Desktop Launcher Dashboard',
      },
      {
        url: '/projects/quiz-master-pro/gallery/leaderboard.png',
        caption:
          'Quiz Master Pro Global Leaderboard: High-performance QTableWidget displaying candidate rankings, scores, accuracy percentages, total durations, and average speed per question.',
        alt: 'Quiz Master Pro Global Leaderboard Table',
      },
      {
        url: '/projects/quiz-master-pro/cover.png',
        caption:
          'Quiz Master Pro Project Visual Identity: Modern desktop software interface showcasing timed assessments, Python PyQt6 architecture, and automated analytics.',
        alt: 'Quiz Master Pro Cover Visual Identity',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Requirement Analysis & Desktop Evaluation Architecture',
        description:
          'Defined assessment parameters, single-window UX requirements, and offline-first operational specifications for educational and technical testing environments.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'PyQt6 Layout Engineering & QStackedWidget Orchestration',
        description:
          'Constructed the single-window desktop framework using QStackedWidget, implementing distinct views for Home, Quiz, Summary, Leaderboard, and Rules.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'High-Frequency QTimer & Urgency Color Transition Engine',
        description:
          'Developed the 100ms non-blocking QTimer countdown loop with real-time QSS stylesheet manipulation across green, amber, and red urgency thresholds.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Velocity Telemetry, Answer Review & Tier Classification',
        description:
          'Built the performance analytics engine tracking per-question latency, computing average speed (s/Q), and designing the scrollable review area with performance badges.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Flat-File Persistence, Dynamic Leaderboard & CLI Integration',
        description:
          'Implemented results.txt persistence with multi-tier sorting, constructed the QTableWidget leaderboard, and engineered the companion quiz_platform.py terminal CLI.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S',
        role: 'Lead Python & Desktop GUI Developer',
        image: '/images/team/sreeram-ganesh.png',
        responsibilities: [
          'End-to-end architecture and implementation of the PyQt6 desktop evaluation application',
          'Engineered 100ms high-frequency QTimer event loop with dynamic CSS/QSS color transitions',
          'Constructed single-window navigation system utilizing PyQt6 QStackedWidget across 5 distinct views',
          'Implemented question-level latency tracking, response velocity calculation, and performance tier logic',
          'Built persistent flat-file storage engine with multi-key tiebreaker sorting for historical rankings',
          'Developed alternative terminal CLI mode with interactive scoring in quiz_platform.py',
        ],
        technicalContributions: [
          'Designed non-blocking Qt Signal/Slot event handling completely preventing GUI freezes',
          'Implemented dynamic stylesheet interpolation for emerald, amber, and crimson timer states',
          'Authored resilient delimiter-based file parser with defensive error handling for results.txt',
          'Built scrollable post-quiz review interface with item-by-item answer verification',
        ],
        technologiesHandled: [
          'Python 3.10+',
          'PyQt6',
          'QTimer',
          'QStackedWidget',
          'QTableWidget',
          'QSS Styling',
          'Flat-File Storage',
          'Terminal CLI',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Preventing UI Freezing and Timer Drift in Desktop Event Loops',
        explanation:
          'Conventional sleep loops or low-resolution timers either lock up the PyQt6 GUI thread or accumulate timing drift, resulting in inaccurate assessment durations and laggy countdown bars.',
        solution:
          'Engineered an asynchronous high-frequency QTimer operating at 100ms intervals connected to Qt slots. Instead of decrementing an integer count, each tick calculates elapsed time against a reference timestamp, ensuring microsecond accuracy while keeping the GUI responsive at 60 FPS.',
      },
      {
        challenge: 'Single-Window Navigation Across Complex Assessment Views',
        explanation:
          'Opening separate modal windows or dialogs for rules, tests, summaries, and leaderboards creates a fragmented desktop user experience and complicates state management across windows.',
        solution:
          'Implemented a unified QStackedWidget architecture inside QMainWindow. All 5 functional views (Home, Quiz, Summary, Leaderboard, Rules) reside within a single container, managed via clean programmatic index transitions while maintaining application state in memory.',
      },
      {
        challenge: 'Resilient Offline Flat-File Persistence Without Relational Databases',
        explanation:
          'Relying on external SQL engines introduces unnecessary dependencies for a portable desktop tool, while naive text file reads can crash the application if users manually edit or format records incorrectly.',
        solution:
          'Designed a structured, delimiter-separated record format in results.txt with comprehensive defensive parsing. Lines with malformed tokens or missing fields are gracefully caught and skipped without aborting execution, and valid rows are sorted across multiple keys (Accuracy DESC, Score DESC, Total Time ASC).',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Interactive PyQt6 desktop GUI with single-window QStackedWidget navigation',
        '100ms high-frequency countdown QTimer with smooth progress bar animation',
        'Dynamic color-shifting urgency indicator (Emerald Green -> Amber -> Crimson Red)',
        'Granular speed telemetry recording total time and average latency per question',
        'Comprehensive post-quiz summary with 4 KPI cards and performance tier badges',
        'Scrollable question-by-question review area with correct answer comparison',
        'Persistent flat-file leaderboard with live Top 3 launcher podium integration',
        'Alternative interactive terminal CLI harness with live score tracking',
      ],
      technicalAchievements: [
        'Zero UI freezing with 100% responsive 60 FPS Qt event-driven execution',
        'Microsecond timing precision eliminating drift across long test sessions',
        'Completely offline architecture requiring zero network access or database engines',
        'Defensive file parsing ensuring rock-solid stability even with manual results.txt edits',
      ],
      testingResults: [
        'Verified seamless transitions across all 5 stacked views without memory leaks',
        'Validated auto-submission trigger precisely when countdown reaches 00:00.0',
        'Confirmed accurate calculation of accuracy percentages and average speed per question',
        'Tested persistent leaderboard loading, sorting, and podium medal allocation',
      ],
      demonstratedCapabilities: [
        'Python Application Development & Desktop GUI Engineering (PyQt6)',
        'Event-Driven Systems & Real-Time Qt Signal/Slot Architecture',
        'UX/UI Styling with Dynamic Qt Style Sheets (QSS)',
        'Data Persistence, Parsing & Analytics in Offline Environments',
      ],
    },
    links: {
      github: 'https://github.com/sreeramganesh/Quiz-Master-Pro.git',
      githubLabel: 'View Source Code',
      relatedResources: [
        {
          title: 'PyQt6 Reference Documentation',
          url: 'https://www.riverbankcomputing.com/static/Docs/PyQt6/',
          type: 'Documentation',
        },
      ],
    },
  },

  // 19. BloodChain AI - In Progress
  'bloodchain-ai': {
    id: 'bloodchain-ai',
    slug: 'bloodchain-ai',
    title: 'BloodChain AI',
    shortTitle: 'BloodChain AI — Intelligent Supply Platform',
    subtitle: 'AI-Powered Blood Donation, Inventory Management & Intelligent Supply Optimization',
    category: 'Artificial Intelligence & Machine Learning',
    domain: 'Web Development',
    domains: ['Web Development', 'AI & Machine Learning', 'Data Science'],
    status: 'In Progress',
    shortDescription:
      'Unified healthcare intelligence platform connecting community donors, regional hospitals, and blood banks with an explainable 100-point clinical source recommendation engine, OSRM road travel routing, real-time Supabase inventory synchronization, and 30-day statistical demand forecasting.',
    assetFolderPath: '/projects/bloodchain-ai/',
    coverImage: '/projects/bloodchain-ai/cover.png',
    demoVideo: {
      type: 'local',
      url: '/projects/bloodchain-ai/demo.mp4',
      thumbnail: '/projects/bloodchain-ai/cover.png',
      title: 'Watch BloodChain AI in Action',
      description:
        'Experience the complete BloodChain AI workflow: community donor registration, emergency hospital blood requests, 100-point multi-factor clinical source selection, OSRM road routing with Leaflet transit paths, cold-storage batch inventory management, and human review sign-off.',
      duration: 'Full-Stack Application Walkthrough',
    },
    links: {
      github: 'https://github.com/sreeramganesh/BloodChain-AI.git',
      githubLabel: 'View Source Code',
      liveDemo: 'https://blood-chain-ai-syjt.vercel.app/',
      liveDemoLabel: 'Explore Live Application',
      relatedResources: [
        {
          title: 'Supabase PostgreSQL Platform',
          url: 'https://supabase.com/docs',
          type: 'Cloud Database',
        },
        {
          title: 'Open Source Routing Machine (OSRM)',
          url: 'https://project-osrm.org/',
          type: 'Road Routing Engine',
        },
      ],
    },
    overview: {
      introduction:
        'BloodChain AI is a unified healthcare technology platform engineered to bridge hospitals, regional blood banks, and voluntary community donors into a synchronized, transparent, and resilient supply network. Operating across 740 verified medical centers in 74 districts, the platform combines real-time cold-storage inventory tracking with strict clinical ABO/Rh compatibility rules, an explainable 100-point multi-factor source recommendation engine, OSRM road transport duration modeling, and statistical demand forecasting.',
      purpose:
        'Blood is an irreplaceable emergency medical resource vital for trauma surgery, maternal care, oncology, and severe anemia. However, conventional blood distribution suffers from fragmented siloed databases, delayed requisition communications, opaque donor discovery, and avoidable unit expirations. BloodChain AI was developed to replace manual phone calls and spreadsheet tracking with an autonomous, transparent digital network that optimizes blood allocation while enforcing mandatory medical officer governance.',
      mainObjective:
        'Deliver an explainable, end-to-end blood supply management platform that eliminates supply friction, forecasts 30-day facility-level deficits via Holt Linear Exponential Smoothing, automates multi-factor candidate facility selection using true driving ETAs, and safeguards emergency safety buffers without ever performing unverified automated transfers.',
      howItWorks:
        'When an emergency blood requirement arises, hospitals submit a structured request specifying clinical urgency, required component, and units needed. The 100-point recommendation engine (v2-routes) evaluates connected blood banks based on strict red blood cell compatibility, usable unreserved stock, source shortage protection, and OSRM road driving duration. The recommended source and route are presented with full clinical justification to authorized medical officers for mandatory human review and sign-off before transfer dispatch.',
      targetUsers: [
        'Hospital Emergency Administrators & Trauma Triage Teams',
        'Blood Bank Technicians & Cold Storage Logistics Officers',
        'Voluntary Community Donors & Family Requisitioners',
        'Healthcare Network Coordinators & Regional Health Authorities',
      ],
      highlights: [
        'Explainable 100-Point Multi-Factor Clinical Recommendation Model (v2-routes)',
        '30-Day Facility Demand Forecasting via Holt Linear Exponential Smoothing (95% CI)',
        'Dynamic Shortage Risk Deficit Radar with 7-Day Safety Stock Reserve Buffers',
        'Near-Expiry Wastage Prevention Flagging Units Within 1–5 Days of Shelf-Life',
        'OSRM Public Routing Integration Computing True Driving Distances, ETAs, and Paths',
        'Strict Role-Based Access Control (RBAC) Tailored for Donors, Hospitals, and Blood Banks',
        'Deterministic Natural Language AI Assistant with Zero External LLM Hallucinations',
        'Mandatory Human-in-the-Loop Review for All Advisory Allocation Decisions',
      ],
    },
    problemStatement: {
      title: 'Fragmentation, Delays & Avoidable Expiration in Clinical Blood Logistics',
      mainProblem:
        'Every two seconds, a patient requires life-saving blood transfusion. Yet healthcare systems frequently suffer catastrophic localized blood shortages even when surplus stock sits unused just miles away. The root cause is not an absolute scarcity of donors, but systemic logistics fragmentation: hospitals cannot see regional blood bank stock in real-time, emergency requisitions rely on desperate telephone trees, manual transport time estimations disregard real traffic grids, and blood units expire on storage shelves due to lack of coordinated inter-facility transfers.',
      existingLimitations: [
        'Siloed Inventory Databases: Hospitals have zero real-time visibility into nearby blood bank reserves, resulting in blind searches during acute trauma emergencies.',
        'Delayed Requisition Workflows: Manual phone calls and paperwork delay patient blood allocations by critical hours when minutes determine survival.',
        'Avoidable Blood Expiry: Units close to shelf-life expiration remain idle in low-volume centers rather than being reallocated to high-demand surgical hospitals.',
        'Straight-Line vs. Road Inaccuracy: Naive radial distance calculations fail to account for road geometry, river crossings, and actual vehicular transit durations.',
        'Black-Box AI Risks: Generative LLMs and opaque algorithms cannot be trusted with clinical blood allocations where explainability and strict safety are paramount.',
      ],
      whyItMatters:
        'Blood components possess strict perishable shelf-lives (35–42 days for RBCs, 5 days for platelets). An intelligent, synchronized logistics network is critical to ensure no patient dies waiting for compatible blood while matching units sit idle in neighboring facilities.',
      keyChallenges: [
        {
          title: 'Opaque LLM Hallucinations vs. Deterministic Clinical Safety',
          description:
            'Preventing non-deterministic AI errors in life-critical medical allocation through allowlisted entity parsing and explainable 100-point scoring.',
          iconName: 'ShieldCheck',
        },
        {
          title: 'Road Travel Durations vs. Straight-Line Distances',
          description:
            'Integrating OSRM driving routes and live turn-by-turn geometry to compute true travel ETAs rather than misleading Euclidean radii.',
          iconName: 'Truck',
        },
        {
          title: 'Preserving Candidate Safety Stock Buffers',
          description:
            'Ensuring blood transfers never deplete donor facilities below their mandatory 7-day emergency trauma reserves.',
          iconName: 'AlertTriangle',
        },
      ],
    },
    solution: {
      title: 'Unified Predictive Supply Network with Explainable Clinical Optimization',
      approach:
        'A decoupled healthcare web architecture pairing a modern React 19 single-page application with Supabase PostgreSQL cloud storage, client-side statistical forecasting, OSRM road routing, and deterministic clinical decision support.',
      technicalSolution:
        'Engineered BloodChain AI as a synchronized web platform connecting 740 verified facilities across 74 districts. Developed an explainable 100-point multi-factor clinical scoring model (v2-routes) that evaluates candidate sources across ABO/Rh compatibility (25 pts), usable unreserved stock (30 pts), source safety stock protection (15 pts), near-expiry wastage prevention (10 pts), and OSRM driving duration (20 pts). Integrated Holt Linear Exponential Smoothing with 95% confidence intervals to generate 30-day facility-level demand projections and dynamic shortage risk scores. Connected the public Open Source Routing Machine (OSRM) with Leaflet mapping to visualize turn-by-turn transit paths. Built a 100% deterministic AI Assistant for real-time inventory queries and enforced a strict human-in-the-loop review architecture requiring medical officer sign-off before dispatch.',
      implementationOverview:
        'The application runs on React 19 and Tailwind CSS v4, connected to Supabase PostgreSQL with Row Level Security. Role-based access control provisions dedicated interfaces for Community Donors, Hospitals, and Blood Banks. In-memory session caching and mathematical Haversine fallbacks ensure complete operational resilience during network jitter.',
      howItSolves: [
        'Provides instantaneous multi-facility cross-network inventory visibility across 740 medical centers',
        'Accelerates emergency source identification from hours to under 300ms using the 100-point scoring engine',
        'Forecasts 30-day demand trends and flags critical group shortages before deficits impact patients',
        'Prioritizes units nearing expiry (1–5 days) for urgent reallocation, directly driving toward zero wastage',
        'Visualizes real road driving paths and transit ETAs to assist logistics planning',
        'Enforces complete clinical transparency with zero autonomous transfers and mandatory doctor review',
      ],
    },
    portals: [
      {
        name: 'Community Donor Portal',
        subtitle: 'Voluntary Donation, Eligibility Tracking & Community Requests',
        description:
          'Dedicated interface empowering voluntary donors with donation history tracking, appointment booking, eligibility timers, digital appreciation certificates, and privacy-preserving proximity discovery.',
        image: '/projects/bloodchain-ai/gallery/donor-dashboard.png',
        iconName: 'Heart',
        functionalities: [
          'Digital donation log tracking whole blood, platelets, RBCs, and plasma',
          'Automated 56/90-day clinical eligibility countdown timer until next donation',
          'Privacy-preserving centroid proximity matching to find nearest blood drives',
          'Appointment scheduling with preferred time slots and collection centers',
          'Downloadable official digital certificate of blood donation appreciation',
          'Emergency notification broadcasts when matching blood group is urgently needed nearby',
        ],
        badgeColor: 'bg-rose-50 text-rose-600 border-rose-200',
      },
      {
        name: 'Hospital Emergency Care Portal',
        subtitle: 'Clinical Requisition, 100-Point Source Selection & Transfer Auditing',
        description:
          'Emergency care triage portal designed for hospital administrators, surgical units, and emergency physicians to requisition blood, evaluate candidate sources, and coordinate inter-facility transfers.',
        image: '/projects/bloodchain-ai/gallery/hospital-dashboard.png',
        iconName: 'Hospital',
        functionalities: [
          'Emergency blood requisition portal specifying clinical urgency (Critical, High, Medium)',
          'Explainable 100-point candidate source ranking evaluating compatibility, stock, and road ETA',
          'Multi-facility cross-network inventory visibility across 740 regional medical centers',
          'Leaflet-powered GPS route map displaying turn-by-turn road logistics via OSRM',
          'Chronological requisition ledger with real-time lifecycle status badges',
          'Mandatory clinical review and transfer request submission with audit logging',
        ],
        badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
      },
      {
        name: 'Blood Bank Cold Storage & Supply Portal',
        subtitle: 'Batch Inventory Control, Expiry Risk Monitoring & Transfer Dispatch',
        description:
          'Comprehensive logistics control center tailored for blood bank officers, lab technicians, and storage managers to control cold-storage batches, monitor expiry, and dispatch inter-facility transfers.',
        image: '/projects/bloodchain-ai/gallery/blood-bank-dashboard.png',
        iconName: 'Building2',
        functionalities: [
          'Batch-level cold storage CRUD control segregating Available Units from Reserved Units',
          'Dynamic near-expiry wastage radar flagging units within 1–5 days of shelf-life expiration',
          'Automated safety stock buffer monitoring ensuring minimum 7-day reserves are preserved',
          'Operational transfer review queue with mandatory reason logging for approvals and rejections',
          'Unit cost estimation tracking across cold-storage components (₹1,300 – ₹1,650/unit)',
          'Regional facility directory linking 740 medical centers across 74 districts',
        ],
        badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      },
    ],
    keyFeatures: [
      {
        iconName: 'Activity',
        title: '100-Point Multi-Factor Clinical Scoring',
        description:
          'Rebalanced v2-routes model evaluating ABO/Rh compatibility (25), unreserved stock (30), safety buffer (15), expiry risk (10), and road travel duration (20).',
      },
      {
        iconName: 'TrendingUp',
        title: '30-Day Holt Linear Demand Forecasting',
        description:
          'Statistical time-series forecasting with level (0.35) and trend (0.15) parameters computing 95% confidence intervals across 40 hospital-bloodgroup series.',
      },
      {
        iconName: 'AlertTriangle',
        title: 'Dynamic Shortage Deficit Detection',
        description:
          'Real-time comparisons between net usable stock, predicted monthly demand, and dynamic 7-day reserve buffers with estimated exhaustion dates.',
      },
      {
        iconName: 'Clock',
        title: 'Near-Expiry Wastage Prevention Radar',
        description:
          'Dynamic monitoring of shelf-life horizons (1–5 days) prioritizing near-expiry units for emergency surgeries to achieve zero clinical blood wastage.',
      },
      {
        iconName: 'Truck',
        title: 'OSRM Road Routing & Travel Duration',
        description:
          'Open Source Routing Machine integration computing real driving distance, turn-by-turn road geometry, and transit ETAs with Haversine fallbacks.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Deterministic AI Assistant & Human Review',
        description:
          '100% deterministic natural language clinical query understanding paired with mandatory authorized medical officer review for all transfers.',
      },
    ],
    applicationScreenshots: [
      {
        image: '/projects/bloodchain-ai/gallery/ai-blood-source-recommendation.png',
        title: 'AI Blood Source Selection & Evaluation Interface',
        description:
          'Detailed candidate facility ranking showing transparent clinical scoring breakdowns (Compatibility, Availability, Shortage Risk, Transport Duration) for emergency patient requisitions.',
        badge: '100-Point Scoring',
      },
      {
        image: '/projects/bloodchain-ai/gallery/gps-route-map.png',
        title: 'OSRM Geospatial Route Map & Logistics Path',
        description:
          'Interactive Leaflet map displaying real-world road paths, transit distances, and estimated travel times between candidate blood banks and destination hospitals.',
        badge: 'Road Logistics',
      },
      {
        image: '/projects/bloodchain-ai/gallery/demand-forecast.png',
        title: '30-Day Statistical Demand Forecasting Dashboard',
        description:
          'Interactive time-series visualization illustrating historical monthly consumption and 30-day Holt Linear projections with upper and lower 95% confidence bands.',
        badge: 'Predictive Analytics',
      },
      {
        image: '/projects/bloodchain-ai/gallery/human-review-decision.png',
        title: 'Human Review & Clinical Governance Decision Screen',
        description:
          'Strict human-in-the-loop audit interface requiring authorized medical officers to verify clinical suitability and log explicit justifications before approving transfers.',
        badge: 'Clinical Governance',
      },
    ],
    architecture: {
      description:
        'BloodChain AI is architected as a modular, responsive healthcare intelligence platform. The presentation layer utilizes React 19, Tailwind CSS v4, Lucide React, and Recharts. The data and persistence layer is powered by Supabase PostgreSQL with Row Level Security. Geospatial logistics are driven by Open Source Routing Machine (OSRM) with Leaflet mapping. The client-side intelligence layer houses the Holt Linear forecasting engine, the 100-point source recommendation engine (v2-routes), and the deterministic AI Assistant.',
      frontend:
        'React 19 Single Page Application, React Router DOM v7, Tailwind CSS v4, Recharts (v3.10), Lucide React Icons, Leaflet & React-Leaflet with custom medical markers.',
      backend:
        'Supabase PostgreSQL cloud database, Supabase Auth session management, Row Level Security (RLS) policies, and SQL migration scripts with localStorage fallback.',
      database:
        'Supabase PostgreSQL housing profiles, blood_inventory, blood_requests, donors, transfers, demand_predictions, shortage_risks, expiry_risks, and ai_recommendations.',
      apis: [
        'OSRM Public Routing API (GET /route/v1/driving/{lng1,lat1;lng2,lat2})',
        'Supabase REST API & Realtime WebSockets (@supabase/supabase-js v2.117)',
      ],
      workflow: [
        '1. Requisition Submission: Hospital emergency team submits blood request specifying patient name, blood group, units, and urgency level.',
        '2. Inventory & Risk Assessment: System checks usable stock, 7-day safety buffer, and 30-day predicted demand from Supabase.',
        '3. Candidate Shortlisting: Recommendation engine filters facilities via ABO/Rh compatibility matrix and checks usable unreserved stock.',
        '4. Road Routing & Scoring: OSRM calculates true driving distance and duration; the 100-point model computes transparent candidate scores.',
        '5. Human Review & Sign-Off: Medical officer reviews candidate scores, transport ETA, and safety impact, then approves transfer with reason logging.',
        '6. Transfer Dispatch & Tracking: Transfer record is committed; status updates to In Transit and inventory reservations are synchronized in real time.',
      ],
    },
    techStack: [
      'React 19',
      'Tailwind CSS',
      'Supabase',
      'Leaflet',
      'OSRM Routing',
      'Recharts',
      'Holt Linear Smoothing',
      'Lucide React',
    ],
    techStackGrouped: [
      {
        category: 'Frontend Framework & UI',
        items: [
          { name: 'React 19', role: 'Component-based UI state architecture and concurrent rendering', iconName: 'Code' },
          { name: 'Vite 8', role: 'Fast build tooling, Hot Module Replacement, and optimized bundling', iconName: 'Zap' },
          { name: 'Tailwind CSS v4', role: 'Modern utility styling and healthcare-themed responsive design', iconName: 'Layout' },
          { name: 'Recharts (v3.10)', role: 'Interactive SVG analytics charts for demand forecasting and inventory', iconName: 'BarChart3' },
          { name: 'Lucide React', role: 'Consistent semantic healthcare and navigation iconography', iconName: 'Sparkles' },
        ],
      },
      {
        category: 'Cloud Backend & Database',
        items: [
          { name: 'Supabase PostgreSQL', role: 'Managed cloud relational database with JSONB support and relational schema', iconName: 'Database' },
          { name: 'Supabase Auth', role: 'Secure authentication, role metadata, and session token persistence', iconName: 'ShieldCheck' },
          { name: 'Row Level Security', role: 'Granular table access control policies enforcing role-based permissions', iconName: 'Lock' },
          { name: 'LocalStorage Fallback', role: 'High-resilience client session caching for offline demonstration', iconName: 'HardDrive' },
        ],
      },
      {
        category: 'Geospatial & Road Routing',
        items: [
          { name: 'Leaflet (v1.9)', role: 'Interactive GIS mapping displaying medical facilities and emergency routes', iconName: 'MapPin' },
          { name: 'React-Leaflet (v5.0)', role: 'Declarative React components for dynamic map layers and custom markers', iconName: 'Compass' },
          { name: 'OSRM Public Routing', role: 'Road network routing engine providing real driving distance and duration', iconName: 'Truck' },
          { name: 'Haversine Centroid Engine', role: 'Mathematical straight-line distance fallback and donor privacy centroid snapping', iconName: 'Globe' },
        ],
      },
      {
        category: 'Predictive Analytics & Decision Support',
        items: [
          { name: 'Holt Linear Smoothing', role: 'Statistical time-series forecasting with level (0.35) and trend (0.15) parameters', iconName: 'TrendingUp' },
          { name: '100-pt Clinical Scoring', role: 'Explainable multi-factor algorithm evaluating compatibility, stock, risk, and transit', iconName: 'Activity' },
          { name: 'Deterministic AI Assistant', role: 'Allowlisted entity extraction and clinical query understanding without LLM hallucination', iconName: 'Bot' },
          { name: 'Human-in-the-Loop Engine', role: 'Governance layer ensuring zero automated transfers without doctor approval', iconName: 'UserCheck' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/bloodchain-ai/gallery/home.png',
        caption:
          'BloodChain AI Public Home & Mission Portal: Modern healthcare landing page introducing the synchronized blood supply network, role portals, and core capabilities.',
        alt: 'BloodChain AI Home Page',
      },
      {
        url: '/projects/bloodchain-ai/gallery/donor-dashboard.png',
        caption:
          'Community Donor Dashboard: Personal health and donation dashboard featuring dynamic eligibility countdown timers (56/90 days), donation history, and blood availability radar.',
        alt: 'Donor Dashboard',
      },
      {
        url: '/projects/bloodchain-ai/gallery/register-new-donor.png',
        caption:
          'Donor Registration Modal: Comprehensive community onboarding capturing ABO/Rh blood groups, contact details, medical disclosures, and locality centroids.',
        alt: 'Register New Donor',
      },
      {
        url: '/projects/bloodchain-ai/gallery/my-donation.png',
        caption:
          'Personal Donation History & Health Timeline: Chronological log of past donations recording component types (Whole Blood, Platelets, RBC, FFP), centers, and verification badges.',
        alt: 'My Donations Record',
      },
      {
        url: '/projects/bloodchain-ai/gallery/donation-certificate.png',
        caption:
          'Official Digital Blood Donation Certificate: Verified appreciation certificate acknowledging voluntary life-saving contributions with personalized metrics.',
        alt: 'Donation Certificate',
      },
      {
        url: '/projects/bloodchain-ai/gallery/schedule-blood-donation.png',
        caption:
          'Appointment Scheduling Interface: Flexible booking modal allowing donors to select preferred collection centers, mobile donation camps, and suitable time slots.',
        alt: 'Schedule Blood Donation',
      },
      {
        url: '/projects/bloodchain-ai/gallery/find-donors.png',
        caption:
          'Nearby Donor & Facility Discovery: Proximity search filtering community donors and blood centers by ABO/Rh group and configurable radius boundaries (5 km – 50 km).',
        alt: 'Find Donors Directory',
      },
      {
        url: '/projects/bloodchain-ai/gallery/blood-availabilty-in-donor.png',
        caption:
          'Real-Time Blood Availability Overview: Public transparency screen displaying current regional stock levels across all eight blood groups for community awareness.',
        alt: 'Blood Availability Overview',
      },
      {
        url: '/projects/bloodchain-ai/gallery/hospital-dashboard.png',
        caption:
          'Hospital Emergency Care Dashboard: Clinical triage control center tracking patient requisitions, critical shortage deficits, and incoming transfer statuses.',
        alt: 'Hospital Emergency Dashboard',
      },
      {
        url: '/projects/bloodchain-ai/gallery/new-blood-request.png',
        caption:
          'Emergency Blood Requisition Dialog: Structured patient requisition form specifying diagnosis, clinical urgency (Critical, High, Medium), component, and required units.',
        alt: 'New Blood Request Modal',
      },
      {
        url: '/projects/bloodchain-ai/gallery/blood-request-history.png',
        caption:
          'Hospital Requisition History & Ledger: Comprehensive tracking ledger with real-time status progression (Pending ➔ In Progress ➔ Matched ➔ Fulfilled).',
        alt: 'Blood Request History',
      },
      {
        url: '/projects/bloodchain-ai/gallery/nearby-hospital-bloodbank.png',
        caption:
          'Geospatial Medical Center Directory: Proximity-sorted list of regional hospitals and storage facilities with direct contact credentials and distance calculations.',
        alt: 'Nearby Facilities Directory',
      },
      {
        url: '/projects/bloodchain-ai/gallery/hospital-blood-banks.png',
        caption:
          'Regional Medical Facilities Network: Comprehensive directory of 740 connected medical centers across 74 districts with real-time inventory visibility.',
        alt: 'Hospitals and Blood Banks Directory',
      },
      {
        url: '/projects/bloodchain-ai/gallery/gps-route-map.png',
        caption:
          'OSRM Road Logistics & Interactive Route Map: Leaflet-powered road routing interface displaying turn-by-turn road paths, driving distances, and transit duration ETAs.',
        alt: 'GPS Route Map',
      },
      {
        url: '/projects/bloodchain-ai/gallery/blood-bank-dashboard.png',
        caption:
          'Blood Bank Cold Storage Dashboard: Operational command center detailing cold storage occupancy, safety stock buffers, critical alerts, and transfer queues.',
        alt: 'Blood Bank Dashboard',
      },
      {
        url: '/projects/bloodchain-ai/gallery/blood-inventory.png',
        caption:
          'Granular Batch Cold Storage Management: Full CRUD inventory control segregating Available Units from Reserved Units with batch tracking codes and cost estimations.',
        alt: 'Blood Inventory Management',
      },
      {
        url: '/projects/bloodchain-ai/gallery/approval-transfer.png',
        caption:
          'Inter-Facility Transfer Queue: Logistics management screen for approving, dispatching, or rejecting transfer requests with mandatory clinical reason logging.',
        alt: 'Approval and Transfer Queue',
      },
      {
        url: '/projects/bloodchain-ai/gallery/demand-forecast.png',
        caption:
          '30-Day Statistical Demand Forecasting: Recharts visualization of Holt Linear Exponential Smoothing projections with 95% confidence intervals and historical trend lines.',
        alt: 'Demand Forecasting Chart',
      },
      {
        url: '/projects/bloodchain-ai/gallery/blood-shortage-prediction.png',
        caption:
          'Dynamic Shortage Risk Deficit Matrix: Early-warning grid comparing usable inventory against predicted demand and safety stock to flag impending group deficits.',
        alt: 'Blood Shortage Prediction Matrix',
      },
      {
        url: '/projects/bloodchain-ai/gallery/blood-expiry-risk-prediction.png',
        caption:
          'Near-Expiry Risk Monitoring Radar: Dynamic radar highlighting blood batches within 1–5 days of shelf-life expiration to prioritize emergency reallocation and eliminate wastage.',
        alt: 'Blood Expiry Risk Prediction',
      },
      {
        url: '/projects/bloodchain-ai/gallery/ai-blood-source-recommendation.png',
        caption:
          '100-Point Multi-Factor Source Recommendation View: Clinical candidate ranking displaying itemized scores for compatibility, availability, safety buffer, and road travel time.',
        alt: 'AI Blood Source Recommendation',
      },
      {
        url: '/projects/bloodchain-ai/gallery/ai-recommendation.png',
        caption:
          'Candidate Source Selection & Justification: Clinical decision-support interface showing detailed rationale for why specific candidate facilities are recommended.',
        alt: 'AI Recommendation Justification',
      },
      {
        url: '/projects/bloodchain-ai/gallery/ai-assistant.png',
        caption:
          'Floating Clinical AI Assistant: Deterministic natural-language query assistant answering real-time inventory queries and checking compatibility without hallucination.',
        alt: 'Floating AI Assistant',
      },
      {
        url: '/projects/bloodchain-ai/gallery/ai-assistant-support.png',
        caption:
          'AI Assistant Clinical Knowledge & Quick Actions: Allowlisted clinical entity recognition answering structured questions on compatibility rules and donor eligibility.',
        alt: 'AI Assistant Support Panel',
      },
      {
        url: '/projects/bloodchain-ai/gallery/human-review-decision.png',
        caption:
          'Human Review & Clinical Governance Decision Screen: Mandatory sign-off workflow where authorized medical officers inspect AI recommendations before confirming transfers.',
        alt: 'Human Review Decision Screen',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Clinical Workflow Analysis & Regional Supply Chain Discovery',
        description:
          'Audited existing blood bank communication protocols and inventory management procedures across regional healthcare systems. Identified major bottlenecks in emergency source discovery, lack of road travel consideration, and avoidable cold-storage unit expirations.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Role-Based Access Architecture & Modern React 19 Foundation',
        description:
          'Architected a Single-Page Application using React 19, Vite 8, and Tailwind CSS v4. Implemented strict Role-Based Access Control (RBAC) establishing specialized portal workflows and permission matrices for Community Donors, Hospitals, and Blood Banks.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Geospatial Logistics & OSRM Road Routing Integration',
        description:
          'Integrated Open Source Routing Machine (OSRM) and Leaflet mapping to replace naive straight-line distances with true road driving routes, turn-by-turn coordinate paths, and accurate transit duration ETAs with in-memory caching and Haversine fallbacks.',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Predictive Forecasting & 100-Point Clinical Scoring Engine',
        description:
          'Engineered Holt Linear Exponential Smoothing with 95% confidence intervals for 30-day demand projections. Formulated the 100-point multi-factor clinical source selection model (v2-routes) balancing compatibility, unreserved stock, safety buffers, expiry, and travel time.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Database Normalization, Human Governance & Vercel Deployment',
        description:
          'Constructed Supabase PostgreSQL schemas with Row Level Security (RLS) policies. Built the deterministic natural language AI Assistant, enforced mandatory doctor review workflows for all transfers, and deployed the production application on Vercel.',
        status: 'Completed',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S',
        role: 'Lead Full-Stack & Healthcare Intelligence Developer',
        image: '/images/team/sreeram-ganesh.png',
        responsibilities: [
          'End-to-end architecture, development, and deployment of the BloodChain AI healthcare platform',
          'Engineered explainable 100-point multi-factor clinical source recommendation engine (v2-routes)',
          'Integrated OSRM public road routing API and Leaflet turn-by-turn map visualization',
          'Developed Holt Linear Exponential Smoothing demand forecasting with 95% confidence intervals',
          'Designed Supabase PostgreSQL schemas, RLS policies, and synthetic operational datasets',
          'Constructed deterministic clinical AI Assistant with allowlisted entity extraction',
          'Structured human-in-the-loop review workflow requiring mandatory doctor sign-off',
        ],
        technicalContributions: [
          'Built strict clinical ABO/Rh compatibility matrix and usable unreserved stock calculation',
          'Developed dynamic 7-day reserve buffer and shortage exhaustion timeline calculator',
          'Implemented candidate shortlist limiting (top 5) and in-memory OSRM route caching',
          'Formulated privacy-preserving donor centroid snapping to protect donor residential coordinates',
        ],
        technologiesHandled: [
          'React 19',
          'Tailwind CSS v4',
          'Supabase PostgreSQL',
          'Leaflet & React-Leaflet',
          'OSRM Routing API',
          'Recharts',
          'Holt Linear Smoothing',
          'Lucide React',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Preventing LLM Hallucinations in Life-Critical Blood Recommendations',
        explanation:
          'Generative language models frequently hallucinate non-existent medical compatibility rules and unreliable distances, which is unacceptable in emergency transfusion logistics.',
        solution:
          'Engineered a 100% deterministic rule-based natural language understanding layer paired with an explainable 100-point scoring algorithm (v2-routes). Evaluates verified ABO/Rh compatibility and unreserved inventory with zero generative hallucination risk.',
      },
      {
        challenge: 'True Road Driving Times vs. Misleading Straight-Line Radii',
        explanation:
          'Geographic Euclidean distances ignore rivers, traffic bottlenecks, and real road networks, leading to severe transport time miscalculations during urgent surgeries.',
        solution:
          'Integrated the Open Source Routing Machine (OSRM) public API to fetch real driving routes, turn-by-turn coordinates, and transit durations. Added an in-memory session cache and a candidate shortlist cap (top 5) with Haversine fallback to guarantee sub-300ms responsiveness.',
      },
      {
        challenge: 'Preventing Secondary Shortages at Donor Facilities',
        explanation:
          'Fulfilling an emergency request by draining a neighboring facility stock can trigger a dangerous secondary shortage at that facility.',
        solution:
          'Formulated dynamic 7-day safety stock buffers (minimum 5 units) based on predicted monthly demand. The recommendation engine assigns 0 shortage points if a transfer would violate the donor facility buffer and caps recommended units to safe transferable surplus.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Multi-facility real-time inventory visibility across 740 medical centers in 74 districts',
        'Explainable 100-point clinical recommendation model (v2-routes) ranking candidate facilities',
        '30-day statistical demand forecasting using Holt Linear Exponential Smoothing with 95% CI',
        'Dynamic shortage risk deficit radar with 7-day safety stock reserve buffers',
        'Near-expiry risk monitoring (1–5 days) prioritizing critical units for zero wastage',
        'OSRM road routing engine computing true driving distances and transit durations',
        '3 dedicated role-based portals for Community Donors, Hospitals, and Blood Banks',
        'Deterministic natural language AI Assistant and human review transfer sign-off queue',
      ],
      technicalAchievements: [
        'Sub-300ms candidate facility scoring and routing execution in-browser',
        '100% deterministic clinical recommendations with zero generative hallucinations',
        'Zero autonomous transfers: mandatory doctor review enforced at database and UI layers',
        'Complete offline and unauthenticated resilience via verified baseline data fallbacks',
      ],
      testingResults: [
        '37 passed automated Vitest unit tests covering OSRM road routing, scoring & geo-utils',
        'Verified ABO/Rh compatibility matrix preventing any cross-match incompatibilities',
        'Validated OSRM coordinate order handling (longitude-first OSRM to latitude-first Leaflet)',
        'Confirmed 95% confidence interval calculations across 40 hospital-bloodgroup series',
      ],
      demonstratedCapabilities: [
        'Full-Stack Healthcare Web Application Development (React 19, Supabase)',
        'Clinical Decision-Support & Mathematical Optimization (100-pt scoring, Holt Smoothing)',
        'Geospatial Information Systems (GIS) & Routing (Leaflet, React-Leaflet, OSRM)',
        'Role-Based Access Control, Data Privacy & Healthcare Governance',
      ],
    },
    disclaimer:
      'BloodChain AI is a software technology platform designed to assist in blood supply coordination, inventory tracking, and logistics optimization. It is not an autonomous medical device, blood compatibility testing instrument, or substitute for professional medical judgment. All predictions, risk classifications, and source recommendations generated by BloodChain AI are strictly advisory decision-support information. Blood suitability, ABO/Rh compatibility cross-matching, donor eligibility, and transfusion authorizations must be independently verified and approved by qualified healthcare professionals and licensed medical officers in accordance with statutory blood banking standards.',
  },

  // 20. BIS SmartAssist - In Progress
  'bis-smartassist': {
    id: 'bis-smartassist',
    slug: 'bis-smartassist',
    title: 'BIS SmartAssist: AI-Powered Standards and Certification Assistant',
    shortTitle: 'BIS SmartAssist',
    subtitle: 'Making Indian Standards and BIS Certification More Accessible Through AI.',
    category: 'Artificial Intelligence, NLP & Document Intelligence',
    domain: 'AI & Machine Learning',
    domains: ['AI & Machine Learning', 'Python Development', 'Web Development'],
    status: 'In Progress',
    shortDescription:
      'An AI-powered intelligent assistant designed to simplify access to Indian Standards and BIS certification procedures through Retrieval-Augmented Generation (RAG), ChromaDB semantic vector search, and local LLM inference via Ollama.',
    assetFolderPath: '/projects/bis-smartassist/',
    coverImage: '/projects/bis-smartassist/cover.png',
    links: {
      github:
        'https://github.com/sreeramganesh/BIS-SmartAssist-AI-Powered-Standards-and-Certification-Assistant.git',
      githubLabel: 'View Source Code',
      relatedResources: [
        {
          title: 'Bureau of Indian Standards Official Portal',
          url: 'https://www.bis.gov.in/',
          type: 'Statutory Authority',
        },
        {
          title: 'ChromaDB Open-Source Vector Database',
          url: 'https://www.trychroma.com/',
          type: 'Vector Store Engine',
        },
        {
          title: 'Ollama Local Model Inference Framework',
          url: 'https://ollama.com/',
          type: 'Local LLM Runtime',
        },
        {
          title: 'Hugging Face Sentence Transformers (all-MiniLM-L6-v2)',
          url: 'https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2',
          type: 'Dense Embeddings',
        },
      ],
    },
    overview: {
      introduction:
        'BIS SmartAssist is an AI-powered intelligent assistant engineered to make Indian Standards (IS), Bureau of Indian Standards (BIS) services, certification procedures, Quality Control Orders (QCOs), product testing requirements, and technical documentation seamlessly accessible through natural language.',
      purpose:
        'Regulatory information in India is distributed across hundreds of technical standards, government gazettes, laboratory testing manuals, and complex certification guidelines. Navigating these documents manually is time-consuming and prone to interpretation errors. BIS SmartAssist bridges this gap by combining dense vector retrieval with local large language model synthesis, delivering context-aware, verifiable answers grounded in authoritative publications.',
      mainObjective:
        'Develop and verify a privacy-centric, local Retrieval-Augmented Generation (RAG) assistant that indexes Indian Standards, provides context-aware answers, and supports ephemeral document uploads while strictly guaranteeing that user documents never pollute the permanent statutory vector repository.',
      howItWorks:
        'Users ask natural-language questions through a React interface. The question is converted into a 384-dimensional vector embedding using the all-MiniLM-L6-v2 Sentence Transformer. ChromaDB performs semantic vector search across the bis_smartassist collection. If the user attaches supporting documents (PDFs or images), PyMuPDF extracts text streams into isolated session chunks. The backend synthesizes retrieved BIS context and user document context into a structured prompt delivered to a local Ollama instance running Llama 3.2:3B, returning a grounded answer with precise source citations to the React interface.',
      targetUsers: [
        'Manufacturers & Quality Assurance Engineers seeking applicable Indian Standards',
        'Compliance Officers navigating BIS certification procedures and mandatory QCOs',
        'Regulatory Consultants & Testing Laboratory Technicians',
        'Product Designers auditing technical specifications against BIS guidelines',
      ],
      highlights: [
        'Locally Hosted Retrieval-Augmented Generation (RAG) Architecture',
        'ChromaDB Vector Store indexing 7,808 historically reported regulatory chunks',
        'Sentence Transformers all-MiniLM-L6-v2 384-Dimensional Semantic Embeddings',
        'Local Private Inference via Ollama (Llama 3.2:3B) with Zero Cloud Telemetry',
        'Ephemeral Document Upload & Question Answering (PDFs & Images)',
        'Strict Document-Isolation Principle Preventing Permanent Database Mutation',
        'Source-Aware Attribution Distinguishing Official Standards from User Claims',
        'FastAPI Asynchronous High-Throughput REST API Microservice',
      ],
    },
    problemStatement: {
      title: 'Regulatory Dispersion, Technical Ambiguity & Compliance Search Latency',
      mainProblem:
        'Information about Indian Standards and BIS-related procedures is distributed across disparate technical standards, government notifications, Quality Control Orders (QCOs), certification guidelines, and laboratory testing manuals. Users frequently encounter severe difficulties identifying applicable standards, interpreting complex clauses, and comparing proprietary product specifications against statutory requirements.',
      existingLimitations: [
        'Fragmented Regulatory Sources: Technical requirements are scattered across separate gazettes, amendments, and testing protocols.',
        'Terminology & Interpretation Barriers: Non-specialists struggle to parse complex regulatory jargon, clause cross-references, and statutory phrasing.',
        'Manual Search Inefficiency: Keyword queries in lengthy PDFs fail to capture semantic intent, synonyms, or related product families.',
        'Compliance Risk & Hallucination: Standard commercial LLMs lack private regulatory grounding and frequently invent nonexistent standard numbers or obsolete clauses.',
        'Document Comparison Challenges: Cross-referencing internal technical datasheets against mandatory Indian Standards requires tedious manual review.',
      ],
      whyItMatters:
        'Accelerating standards discovery and certification navigation reduces compliance latency, prevents costly product redesigns or customs rejections, and empowers domestic manufacturers to meet mandatory quality benchmarks efficiently.',
      keyChallenges: [
        {
          title: 'Dense Technical & Regulatory Vocabulary',
          description:
            'Accurately retrieving standards when users describe products using informal or colloquial phrasing rather than formal IS nomenclature.',
          iconName: 'Search',
        },
        {
          title: 'Hallucination Suppression in Compliance Q&A',
          description:
            'Ensuring the language model anchors strictly to retrieved statutory excerpts rather than fabricating clauses, certification fees, or standard numbers.',
          iconName: 'ShieldAlert',
        },
        {
          title: 'Ephemeral Document Isolation',
          description:
            'Allowing users to upload proprietary specification PDFs without contaminating or mutating the permanent indexed BIS ChromaDB collection.',
          iconName: 'Lock',
        },
        {
          title: 'OCR Dependency & Environment Portability',
          description:
            'Extracting legible text from scanned legacy regulatory gazettes and raster product labels across divergent operating system environments.',
          iconName: 'Cpu',
        },
      ],
    },
    objectives: [
      {
        id: 1,
        title: 'Simplify Access to Indian Standards',
        description: 'Provide an intuitive, unified entry point for discovering Indian Standards and BIS procedures.',
        iconName: 'BookOpen',
      },
      {
        id: 2,
        title: 'Natural-Language Q&A',
        description: 'Allow users to ask conversational questions and receive context-aware, human-readable answers.',
        iconName: 'MessageSquare',
      },
      {
        id: 3,
        title: 'Implement RAG Architecture',
        description: 'Ground responses in authoritative retrieved excerpts to curb hallucinations and maintain factual fidelity.',
        iconName: 'Workflow',
      },
      {
        id: 4,
        title: 'Semantic Vector Retrieval',
        description: 'Retrieve semantically relevant clauses from an indexed BIS vector knowledge base.',
        iconName: 'Search',
      },
      {
        id: 5,
        title: 'Certification Procedure Support',
        description: 'Assist users in understanding product testing requirements, QCO timelines, and certification steps.',
        iconName: 'ShieldCheck',
      },
      {
        id: 6,
        title: 'Uploaded Document Q&A',
        description: 'Support question answering over user-supplied documents such as product specifications and test reports.',
        iconName: 'FileText',
      },
      {
        id: 7,
        title: 'Source-Aware Distinction',
        description: 'Clearly distinguish user-uploaded document assertions from official statutory BIS standards.',
        iconName: 'Layers',
      },
      {
        id: 8,
        title: 'Strict Document Isolation',
        description: 'Process user uploads in ephemeral memory without mutating the permanent BIS vector collection.',
        iconName: 'Lock',
      },
      {
        id: 9,
        title: 'Local LLM via Ollama',
        description: 'Execute Llama 3.2:3B entirely on local infrastructure with zero external data sharing.',
        iconName: 'Cpu',
      },
      {
        id: 10,
        title: 'Modern Web Interface',
        description: 'Deliver a clean, responsive conversational web interface with file staging and source citations.',
        iconName: 'Layout',
      },
    ],
    solution: {
      title: 'Local Retrieval-Augmented Generation with ChromaDB, Sentence Transformers & Ollama',
      approach:
        'A privacy-first, decoupled RAG architecture integrating a reactive Vite/React frontend, an asynchronous FastAPI backend, a dense ChromaDB vector store, and a locally running quantized language model (Llama 3.2:3B via Ollama).',
      technicalSolution:
        'The solution maps user queries into 384-dimensional vector space using the all-MiniLM-L6-v2 Sentence Transformer. ChromaDB performs cosine similarity search across the bis_smartassist collection. Retrieved statutory clauses are combined with ephemeral user document chunks into an auditable prompt sent to a local Ollama instance running Llama 3.2:3B, generating answers that preserve clause numbers and citation metadata.',
      implementationOverview:
        'Built with Python 3.10+ (FastAPI, Uvicorn, Pydantic) on the backend and React 19/Vite on the frontend. Document processing employs PyMuPDF for digital text streams and Pillow for image validation. User documents are indexed into ephemeral, session-scoped memory stores to uphold total data isolation.',
      howItSolves: [
        'Translates colloquial user questions into semantically matched official Indian Standards',
        'Eliminates cloud data leakage by running local inference through Ollama (Llama 3.2:3B)',
        'Enforces strict source attribution, differentiating official standards from user documents',
        'Protects the permanent BIS vector collection against user document pollution',
        'Provides instant context-aware compliance answers with verifiable clause numbers',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Bot',
        title: 'AI-Powered Conversational Assistant',
        description:
          'Users can ask questions in natural language and receive context-aware, explanatory responses grounded in retrieved standards.',
      },
      {
        iconName: 'Workflow',
        title: 'Retrieval-Augmented Generation (RAG)',
        description:
          'Retrieves semantically relevant document chunks from the BIS knowledge base before passing them to the language model for answer generation.',
      },
      {
        iconName: 'Database',
        title: 'BIS Knowledge Base Search',
        description:
          'Uses ChromaDB to execute rapid dense vector queries against indexed Indian Standards, QCOs, and testing procedures.',
      },
      {
        iconName: 'FileText',
        title: 'Document Upload & Question Answering',
        description:
          'Supports multi-file user document uploads (PDFs and images) to answer questions specifically about uploaded product specifications.',
      },
      {
        iconName: 'Search',
        title: 'Semantic Vector Search',
        description:
          'Sentence Transformers (all-MiniLM-L6-v2) converts questions and regulatory clauses into 384-dimensional dense embeddings.',
      },
      {
        iconName: 'Cpu',
        title: 'Locally Running Language Model',
        description:
          'Ollama runs Llama 3.2:3B locally on hardware, ensuring complete data sovereignty, zero cloud API costs, and private inference.',
      },
      {
        iconName: 'Layers',
        title: 'Source-Aware Responses',
        description:
          'Distinguishes statutory information retrieved from the BIS knowledge base from user-supplied claims in uploaded documents.',
      },
      {
        iconName: 'FileCode',
        title: 'Technical Document Processing',
        description:
          'Backend uses PyMuPDF and Pillow to extract, clean, and chunk technical documents into dense embeddings for session Q&A.',
      },
    ],
    architecture: {
      interactiveDiagram: true,
      description:
        'The architecture implements a decoupled, privacy-preserving pipeline connecting a React/Vite client interface with a FastAPI ASGI service, a ChromaDB vector store, and a local Ollama LLM runtime with dual-branch parallel document routing.',
      frontend:
        'React.js Single Page Application built with Vite, Tailwind CSS, and Lucide Icons. Features responsive conversational interface, multi-file composer preview (PDF/PNG/JPG, max 5 files, 10MB each), and source citation pills.',
      backend:
        'FastAPI asynchronous ASGI server running on Uvicorn with Pydantic Settings. Provides REST endpoints (/query, /upload), file magic-byte validation, and prompt context synthesis.',
      database:
        'ChromaDB vector database hosting the bis_smartassist collection with 7,808 historically reported records of Indian Standards, QCOs, and testing guidelines.',
      aiModels: [
        'Sentence Transformers all-MiniLM-L6-v2 (384-dimensional dense semantic vector embeddings)',
        'Ollama Local LLM Runtime hosting quantized Llama 3.2:3B',
        'Local inference execution with zero external cloud telemetry or private data leakage',
      ],
      apis: [
        'POST /query: Asynchronous natural-language question answering with RAG retrieval',
        'POST /upload: Multipart file ingestion, MIME validation, and ephemeral text extraction',
        'GET /health: Backend and ChromaDB connection health monitoring',
        'Ollama REST API (localhost:11434): Local model inference pipeline',
      ],
      workflow: [
        '1. User Interaction: Question submitted and optional files staged in React composer.',
        '2. API Request: Frontend dispatches HTTP payload to FastAPI ASGI backend.',
        '3. Query Embedding: all-MiniLM-L6-v2 converts question into 384-dimensional dense vector.',
        '4. Vector Search: ChromaDB searches bis_smartassist collection via cosine similarity.',
        '5. Document Processing: PyMuPDF extracts text streams from uploaded files into isolated session chunks.',
        '6. Context Synthesis: Backend merges retrieved statutory clauses and session document chunks with source tags.',
        '7. Local LLM Inference: Prompt delivered to Ollama (Llama 3.2:3B) on local hardware.',
        '8. Grounded Delivery: Generated response returned to React chat interface with citation provenance.',
      ],
    },
    ragWorkflow: {
      userExampleQuery: 'What are the BIS certification requirements for aluminium utensils?',
      steps: [
        {
          stepNumber: 1,
          title: 'User Question Submission',
          description:
            'The user enters a regulatory or standards question through the conversational React interface.',
          detail: 'Example: "What are the BIS certification requirements for aluminium utensils?"',
          badge: 'Client UI',
        },
        {
          stepNumber: 2,
          title: 'Asynchronous API Request',
          description:
            'The frontend packages the question and session state, dispatching an HTTP POST request to FastAPI.',
          detail: 'Payload delivered to FastAPI ASGI server with header validation.',
          badge: 'HTTP POST',
        },
        {
          stepNumber: 3,
          title: 'Dense Query Embedding',
          description:
            'The Sentence Transformer model all-MiniLM-L6-v2 converts the user question into a 384-dimensional numerical embedding.',
          detail: 'Generates normalized dense vector representation of query semantics.',
          badge: 'all-MiniLM-L6-v2',
        },
        {
          stepNumber: 4,
          title: 'Semantic Vector Search',
          description:
            'ChromaDB queries the bis_smartassist collection, measuring cosine similarity against indexed Indian Standards.',
          detail: 'Top-k semantically closest regulatory clauses and QCO paragraphs retrieved.',
          badge: 'ChromaDB',
        },
        {
          stepNumber: 5,
          title: 'Context Retrieval & Assembly',
          description:
            'The backend extracts top document chunks, filters irrelevant matches, and constructs an augmented prompt template.',
          detail: 'Formats statutory clause excerpts with standard identifiers and page numbers.',
          badge: 'Context Fusion',
        },
        {
          stepNumber: 6,
          title: 'Local LLM Invocation',
          description:
            'The question, system instructions, and retrieved context are dispatched to the local Ollama runtime via REST API.',
          detail: 'Inference executed on local host hardware without external cloud calls.',
          badge: 'Ollama Runtime',
        },
        {
          stepNumber: 7,
          title: 'Contextual Response Generation',
          description:
            'Llama 3.2:3B synthesizes the retrieved evidence into a coherent, structured, and informative answer.',
          detail: 'Restricted by system prompt to cite provided context and avoid hallucinated clauses.',
          badge: 'Llama 3.2:3B',
        },
        {
          stepNumber: 8,
          title: 'Frontend Delivery & Source Attribution',
          description:
            'The generated answer and associated source references are rendered in the React conversational interface.',
          detail: 'Interactive citation pills allow users to inspect the originating Indian Standard clauses.',
          badge: 'Rendered Answer',
        },
      ],
      whyRagIsUseful:
        'A generic language model is trained on broad public web corpora and rarely contains the precise, up-to-date specifications of specific Indian Standards (IS), recent Quality Control Orders (QCOs), or laboratory testing amendments. Retrieval-Augmented Generation dynamically bridges this knowledge gap by fetching authoritative regulatory excerpts directly from the indexed BIS collection before formulating an answer, ensuring high domain precision.',
      hallucinationNotice:
        'While Retrieval-Augmented Generation drastically reduces hallucination risk by strictly anchoring the LLM to verified textual evidence, it does not completely eliminate the risk of misinterpretation. In complex compliance environments, AI-generated answers must always be treated as advisory guidance and independently cross-referenced against official BIS gazette notifications and statutory standard publications.',
    },
    bisKnowledgeBase: {
      vectorDatabase: 'ChromaDB',
      collectionName: 'bis_smartassist',
      historicallyReportedRecords: '7,808 Records',
      embeddingModel: 'all-MiniLM-L6-v2',
      retrievalMethod: 'Semantic Vector Search (Cosine Similarity)',
      description:
        'The primary vector repository houses dense vector embeddings indexing official Bureau of Indian Standards documentation, enabling sub-second semantic retrieval across complex compliance literature.',
      parameters: [
        { label: 'Vector Database Engine', value: 'ChromaDB', detail: 'Open-source embedded dense vector store' },
        { label: 'Collection Name', value: 'bis_smartassist', detail: 'Dedicated standards & regulatory collection' },
        { label: 'Historically Reported Records', value: '7,808 Records', detail: 'Indexed document chunks from initial corpus' },
        { label: 'Embedding Architecture', value: 'all-MiniLM-L6-v2', detail: '384-dimensional dense sentence embeddings' },
        { label: 'Retrieval Methodology', value: 'Semantic Vector Search', detail: 'Cosine similarity distance metric' },
        { label: 'Storage Persistence', value: 'Local Disk / SQLite Chroma', detail: 'Persistent vector storage on disk' },
      ],
      contents: [
        'Indian Standards (IS) documentation and technical specifications',
        'BIS product certification schemes and licensing procedure manuals',
        'Quality Control Orders (QCOs) issued by line ministries',
        'Official statutory gazette notifications and compliance schedules',
        'Standard product testing guidelines, laboratory protocols, and test methods',
        'Technical regulatory documentation, forms, and audit checklists',
      ],
      auditNotice:
        'The figure of 7,808 records represents the historically documented vector count reported in project development records. Verification and auditing of the active collection size are conducted as part of ongoing verification.',
    },
    documentProcessing: {
      supportedFormats: ['PDF', 'PNG', 'JPG', 'JPEG'],
      maxFilesPerRequest: 5,
      maxFileSizeMb: 10,
      workflowSteps: [
        'User selects supported documents (PDF, PNG, JPG, JPEG) in the chat interface.',
        'Files are staged and previewed in the message composer before transmission.',
        'Frontend transmits multi-part form payload containing files and query to FastAPI.',
        'Backend validates MIME headers, file extensions, and binary magic byte signatures.',
        'PyMuPDF parses digital text streams and extractable metadata from text-based PDFs.',
        'Scanned or image-based PDFs require optical character recognition (OCR).',
        'Image uploads (PNG, JPG) require optical character recognition (OCR).',
        'Extracted text is partitioned into overlapping semantic chunks for embedding.',
        'Sentence Transformers generates dense 384-dimensional vector embeddings for session chunks.',
        'Uploaded content is processed in an isolated ephemeral session store separate from the permanent DB.',
        'Session-isolated chunks are retrieved and merged with permanent BIS knowledge results.',
        'Ollama and Llama 3.2:3B synthesize a unified, context-aware answer from both streams.',
        'Frontend renders the synthesized answer with explicit source origin indicators.',
      ],
      documentIsolationPrinciple:
        'Uploaded user documents are strictly ephemeral and processed in isolated session memory. They NEVER write to, modify, or pollute the permanent bis_smartassist ChromaDB collection. Proprietary product designs and test reports remain strictly confined to the active session.',
      ocrLimitationNotice:
        'During initial project documentation and Windows testing, native Tesseract OCR binaries were identified as an unresolved environment installation dependency. Optical text extraction for scanned PDFs and raster images is currently undergoing testing and verification; full OCR functionality is pending verified native installation.',
    },
    sourceReliability: {
      bisKnowledgeStream: {
        title: 'BIS Knowledge Base',
        subtitle: 'Official Statutory Baseline',
        badge: 'Statutory Standard',
        description:
          'Authoritative regulatory data retrieved directly from the permanent indexed collection. Serves as the immutable standard against which compliance questions are evaluated.',
        examples: [
          'Applicable Indian Standards (e.g., IS numbers, mandatory clauses)',
          'Statutory Bureau of Indian Standards certification workflows and fee schedules',
          'Mandatory Quality Control Orders (QCOs) and enforcement dates',
          'Standardized laboratory test methods and sampling guidelines',
        ],
      },
      userDocumentStream: {
        title: 'User Documents',
        subtitle: 'Ad-Hoc Session Ingestion',
        badge: 'User-Supplied',
        description:
          'Data extracted from user-uploaded PDFs or images. Represents user-provided specifications, component drawings, or manufacturer test certificates.',
        examples: [
          'Manufacturer product specification sheets and chemical composition tables',
          'Third-party laboratory test reports and batch inspection certificates',
          'Draft technical documentation and factory quality control manuals',
          'Product packaging labels and component photographic captures',
        ],
      },
      conflictResolution:
        'Information extracted from user documents is strictly treated as client assertions and is NEVER automatically elevated to an official BIS requirement. If an uploaded document specification conflicts with retrieved statutory BIS guidelines (such as differing alloy composition thresholds), BIS SmartAssist identifies the variance and presents both sources with explicit attribution.',
      reliabilityPrinciples: [
        {
          title: 'Grounded Context',
          description: 'Answers are generated strictly from retrieved textual evidence, minimizing speculation.',
        },
        {
          title: 'Evidence Transparency',
          description: 'The assistant explicitly informs the user when sufficient regulatory evidence is unavailable.',
        },
        {
          title: 'Anti-Fabrication',
          description: 'Strict constraints prevent inventing standard numbers, clauses, or certification criteria.',
        },
        {
          title: 'Preserved Citations',
          description: 'Retains original standard codes, publication dates, and clause references for human audit.',
        },
        {
          title: 'Informational Only',
          description: 'AI-generated answers are advisory and require independent verification against official gazettes.',
        },
      ],
    },
    techStack: [
      'React.js',
      'Vite',
      'JavaScript',
      'CSS',
      'Python',
      'FastAPI',
      'Uvicorn',
      'Pydantic',
      'Sentence Transformers',
      'all-MiniLM-L6-v2',
      'Ollama',
      'Llama 3.2:3B',
      'ChromaDB',
      'PyMuPDF',
      'Pillow',
      'Tesseract OCR',
    ],
    techStackGrouped: [
      {
        category: 'Frontend Development',
        items: [
          { name: 'React.js', role: 'Component-based reactive user interface library', iconName: 'Layout' },
          { name: 'Vite', role: 'Next-generation rapid frontend tooling and development server', iconName: 'Zap' },
          { name: 'JavaScript (ES6+)', role: 'Core client application logic and state orchestration', iconName: 'Code2' },
          { name: 'CSS / Tailwind CSS', role: 'Modern responsive styling, custom utility classes, and layout', iconName: 'Layers' },
        ],
      },
      {
        category: 'Backend Development',
        items: [
          { name: 'Python 3.10+', role: 'Primary backend programming language and AI pipeline runtime', iconName: 'Terminal' },
          { name: 'FastAPI', role: 'High-performance asynchronous REST API framework', iconName: 'Server' },
          { name: 'Uvicorn', role: 'Lightning-fast ASGI production web server implementation', iconName: 'Zap' },
          { name: 'Pydantic Settings', role: 'Data validation, request typing, and environment management', iconName: 'ShieldCheck' },
        ],
      },
      {
        category: 'Artificial Intelligence & NLP',
        items: [
          { name: 'Sentence Transformers', role: 'State-of-the-art dense semantic text embeddings framework', iconName: 'Cpu' },
          { name: 'all-MiniLM-L6-v2', role: '384-dimensional dense embedding model for semantic vector search', iconName: 'Cpu' },
          { name: 'Ollama', role: 'Locally hosted large language model inference runtime', iconName: 'Bot' },
          { name: 'Llama 3.2:3B', role: 'Quantized local large language model for contextual response generation', iconName: 'BrainCircuit' },
        ],
      },
      {
        category: 'Vector Database',
        items: [
          { name: 'ChromaDB', role: 'Open-source embedding database for dense vector retrieval', iconName: 'Database' },
          { name: 'bis_smartassist Collection', role: 'Indexed collection of 7,808 historically reported standards records', iconName: 'Database' },
        ],
      },
      {
        category: 'Document Processing & Ingestion',
        items: [
          { name: 'PyMuPDF (fitz)', role: 'High-speed text extraction and document parsing from digital PDFs', iconName: 'FileText' },
          { name: 'Pillow (PIL)', role: 'Image format validation, decoding, and raster pre-processing', iconName: 'Camera' },
          { name: 'Tesseract OCR', role: 'Optical character recognition (pending Windows verification)', iconName: 'ScanEye' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/bis-smartassist/gallery/home page .png',
        caption:
          'Application Home Page: Main user interface providing the entry point for interacting with BIS SmartAssist, introducing the conversational prompt interface, search capabilities, and document upload workflow.',
        alt: 'BIS SmartAssist Application Home Page Interface',
      },
      {
        url: '/projects/bis-smartassist/gallery/response page .png',
        caption:
          'AI Response Interface: Conversational response screen demonstrating contextual question answering, showing how the assistant synthesizes retrieved Indian Standards clauses into grounded answers with source provenance.',
        alt: 'BIS SmartAssist AI Response Interface and Grounded Citations',
      },
      {
        url: '/projects/bis-smartassist/cover.png',
        caption:
          'BIS SmartAssist Project Identity: Promotional artwork illustrating the AI-powered standards assistant concept, Bureau of Indian Standards compliance workflow, and modern technology stack.',
        alt: 'BIS SmartAssist Project Hero Artwork',
      },
    ],
    applicationScreenshots: [
      {
        image: '/projects/bis-smartassist/gallery/home page .png',
        title: 'Application Home Page',
        badge: 'User Interface',
        description:
          'The welcoming main interface designed for intuitive natural-language interaction, standards discovery, and multi-format document upload.',
      },
      {
        image: '/projects/bis-smartassist/gallery/response page .png',
        title: 'AI Response Interface',
        badge: 'RAG Q&A',
        description:
          'Context-aware question answering screen displaying grounded answers, statutory clause citations, and source origin indicators.',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Domain Research & Statutory Scope Definition',
        description:
          'Analyzed Bureau of Indian Standards documentation, Indian Standards (IS) catalog structures, mandatory Quality Control Orders (QCOs), and product testing manuals to structure domain taxonomy.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Corpus Curation & Text Preprocessing',
        description:
          'Collected, cleaned, and partitioned regulatory texts and gazette notifications into semantic text chunks optimized for dense vector embedding.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Vector Database Indexing with ChromaDB',
        description:
          'Indexed document chunks into the bis_smartassist ChromaDB collection using all-MiniLM-L6-v2 sentence embeddings (historically reported 7,808 records).',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'FastAPI Microservice & Asynchronous RAG Pipeline',
        description:
          'Engineered asynchronous REST API endpoints (/query, /upload) orchestrating Sentence Transformers query encoding, ChromaDB vector retrieval, and prompt context synthesis.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Local LLM Integration via Ollama (Llama 3.2:3B)',
        description:
          'Integrated locally running Llama 3.2:3B through Ollama REST APIs with system prompts engineered for strict source grounding and hallucination resistance.',
        status: 'Completed',
      },
      {
        stepNumber: 6,
        title: 'Document Ingestion & Ephemeral Isolation Architecture',
        description:
          'Implemented PyMuPDF digital text extraction with ephemeral session stores to guarantee that user uploads never mutate the permanent BIS ChromaDB collection.',
        status: 'In Progress',
      },
      {
        stepNumber: 7,
        title: 'Native Tesseract OCR Verification & Windows Portability',
        description:
          'Resolving native Tesseract OCR binary installation dependencies in the Windows test environment to enable reliable optical extraction from scanned gazettes and images.',
        status: 'In Progress',
      },
      {
        stepNumber: 8,
        title: 'Conversational React UI & Citation Presentation',
        description:
          'Refining the React + Vite conversational frontend with file staging, real-time response rendering, and interactive source attribution pills.',
        status: 'In Progress',
      },
    ],
    futureScope: [
      {
        id: 1,
        title: 'Native Tesseract OCR Integration',
        description:
          'Resolve Windows native installation dependencies to enable reliable optical text extraction from scanned PDF gazettes and product label photos.',
        status: 'In Progress',
        iconName: 'ScanEye',
      },
      {
        id: 2,
        title: 'Cross-Encoder Re-Ranking Pipeline',
        description:
          'Integrate a secondary cross-encoder re-ranking stage to improve semantic precision when retrieving deeply nested standard clauses.',
        status: 'Planned',
        iconName: 'Sliders',
      },
      {
        id: 3,
        title: 'Automated Citation Validation',
        description:
          'Implement automated cross-referencing to verify that cited standard numbers and clause titles directly match active gazette versions.',
        status: 'Planned',
        iconName: 'CheckCircle2',
      },
      {
        id: 4,
        title: 'Expanded BIS Standards Coverage',
        description:
          'Broaden the indexed ChromaDB knowledge base across additional industrial domains including metallurgy, electronics, chemicals, and textiles.',
        status: 'Planned',
        iconName: 'Database',
      },
      {
        id: 5,
        title: 'Multi-Turn Certification Guidance',
        description:
          'Enhance conversational state management to guide applicants step-by-step through complex multi-stage BIS licensing procedures.',
        status: 'Planned',
        iconName: 'Workflow',
      },
      {
        id: 6,
        title: 'Specification Comparison Engine',
        description:
          'Develop dedicated side-by-side comparison tables contrasting uploaded manufacturer datasheets against statutory Indian Standards.',
        status: 'Planned',
        iconName: 'GitCompare',
      },
      {
        id: 7,
        title: 'Automated RAGAS Evaluation Framework',
        description:
          'Deploy systematic RAG evaluation benchmarks measuring context relevancy, faithfulness, and answer correctness across standard question sets.',
        status: 'Planned',
        iconName: 'BarChart3',
      },
      {
        id: 8,
        title: 'Session Management & Workspace History',
        description:
          'Provide persistent client-side workspace sessions allowing users to revisit previous standards inquiries and download compliance dossiers.',
        status: 'Planned',
        iconName: 'Clock',
      },
    ],
    teamContributions: [
      {
        name: 'Sreeram Ganesh S',
        role: 'Co-Founder | Lead Full-Stack & AI/ML Engineer',
        image: '/images/team/sreeram-ganesh.png',
        responsibilities: [
          'End-to-end system architecture design of BIS SmartAssist and RAG retrieval pipeline',
          'Vector database indexing and schema configuration using ChromaDB',
          'FastAPI asynchronous microservice implementation and route orchestration',
          'Prompt engineering and local inference integration using Ollama and Llama 3.2:3B',
          'Document processing pipeline development with PyMuPDF and ephemeral session stores',
          'React frontend integration, conversational state management, and source citation UI',
        ],
        technicalContributions: [
          'Engineered dense semantic vector search pipeline utilizing Sentence Transformers (all-MiniLM-L6-v2)',
          'Designed ephemeral document-isolation architecture preventing database pollution from user uploads',
          'Configured local quantized LLM inference via Ollama ensuring 100% private execution with zero cloud telemetry',
          'Implemented source-aware attribution logic distinguishing statutory standards from user assertions',
          'Built responsive React/Vite conversational interface with multi-file drag-and-drop staging',
        ],
        technologiesHandled: [
          'Python 3.10+',
          'FastAPI & Uvicorn',
          'ChromaDB Vector Store',
          'Sentence Transformers',
          'Ollama & Llama 3.2:3B',
          'React.js & Vite',
          'Tailwind CSS',
          'PyMuPDF',
          'Pillow',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'Unifying Disparate Standards & Quality Control Orders',
        explanation:
          'Indian Standards, gazette notifications, and Quality Control Orders are published in differing formats with varying clause hierarchies, making traditional keyword queries fragile.',
        solution:
          'Engineered a dense semantic vector retrieval pipeline using Sentence Transformers (all-MiniLM-L6-v2) and ChromaDB, allowing users to query requirements in conversational English and receive semantically matched statutory excerpts.',
      },
      {
        challenge: 'Ephemeral Document Isolation vs. Permanent DB Contamination',
        explanation:
          'Allowing users to upload proprietary specification sheets poses a severe risk of polluting the permanent statutory ChromaDB knowledge base with unverified third-party claims.',
        solution:
          'Architected a strict document-isolation principle where uploaded documents are chunked and embedded in ephemeral, session-scoped memory stores. Uploaded embeddings are never persisted into the permanent bis_smartassist collection.',
      },
      {
        challenge: 'Windows Environment Dependency for Native Tesseract OCR',
        explanation:
          'Extracting text from scanned gazettes and raster product labels requires OCR, but native Tesseract binaries presented installation and path resolution challenges in the tested Windows environment.',
        solution:
          'Decoupled digital PDF text extraction via PyMuPDF (which operates reliably without external system binaries) while isolating optical character recognition into a dedicated testing module currently undergoing Windows compatibility verification.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'End-to-end Retrieval-Augmented Generation (RAG) pipeline for Indian Standards',
        'ChromaDB dense vector indexing of regulatory documents (bis_smartassist collection)',
        'Sentence Transformers (all-MiniLM-L6-v2) 384-dimensional semantic embedding engine',
        'Asynchronous FastAPI REST API endpoints (/query, /upload, /health)',
        'Local, private large language model inference via Ollama hosting Llama 3.2:3B',
        'Digital PDF text stream extraction and chunking using PyMuPDF',
        'Strict ephemeral document-isolation architecture preventing permanent DB pollution',
        'Responsive React + Vite conversational interface with source provenance display',
      ],
      technicalAchievements: [
        'Established complete data sovereignty with 100% local model execution and zero cloud leakage',
        'Architected a dual-branch retrieval pipeline merging official standards with session uploads',
        'Enforced strict prompt boundaries reducing hallucinated regulatory clauses and standard numbers',
        'Engineered responsive conversational client with multi-file composer staging',
      ],
      testingResults: [
        'ChromaDB semantic search verified to retrieve relevant standards excerpts for colloquial queries',
        'Local Ollama inference verified to generate context-grounded answers within local hardware limits',
        'PyMuPDF verified to extract clean text streams from digital regulatory PDFs',
        'Document-isolation boundary verified: session uploads do not persist to permanent ChromaDB',
        'Tesseract OCR verification and model convergence testing remain actively in progress',
      ],
      demonstratedCapabilities: [
        'Retrieval-Augmented Generation (RAG) Architecture & Implementation',
        'Natural Language Processing & Dense Vector Embedding Search',
        'Vector Database Engineering with ChromaDB',
        'Local Large Language Model Deployment & Inference with Ollama',
        'Full-Stack Web Application Development (FastAPI + React.js)',
      ],
    },
    disclaimer:
      'BIS SmartAssist is an independent AI-powered technical assistant developed for educational, research, and preliminary informational purposes. It is NOT an official platform of the Bureau of Indian Standards (BIS), is not officially affiliated with or endorsed by BIS or any statutory government authority, and does not constitute official certification advice or legal compliance counsel. All AI-generated responses and standards references are strictly advisory decision-support information and must be independently verified against official Bureau of Indian Standards publications, statutory gazette notifications, and applicable Quality Control Orders.',
  },

  // 21. Plant Disease Prediction Using Deep Learning and CNN - In Progress
  'plant-disease-prediction': {
    id: 'plant-disease-prediction',
    slug: 'plant-disease-prediction',
    title: 'Plant Disease Prediction',
    shortTitle: 'Plant Disease Prediction',
    subtitle:
      'Deep Learning-Based Plant Disease Detection and Classification Using CNN',
    category: 'Deep Learning & Computer Vision',
    domain: 'Deep Learning & Computer Vision',
    domains: ['Deep Learning', 'CNN', 'Computer Vision', 'Python'],
    status: 'In Progress',
    shortDescription:
      'A deep learning-based project focused on identifying plant diseases from leaf images using Convolutional Neural Networks. The system aims to analyze visual leaf patterns and classify disease categories through image processing and deep learning techniques.',
    assetFolderPath: '/projects/plant-disease-prediction/',
    coverImage: '/projects/plant-disease-prediction/cover.png',
    links: {
      github:
        'https://github.com/k-raghu24/Plant-Disease-Prediction-Using-DL-and-CNN.git',
      githubLabel: 'View Source Code',
      relatedResources: [
        {
          title: 'TensorFlow & Keras Deep Learning Documentation',
          url: 'https://www.tensorflow.org/api_docs',
          type: 'Deep Learning Framework',
        },
        {
          title: 'PlantVillage Dataset Research Benchmark',
          url: 'https://plantvillage.psu.edu/',
          type: 'Agricultural Pathology Dataset',
        },
      ],
    },
    overview: {
      introduction:
        'Plant Disease Prediction Using Deep Learning and Convolutional Neural Networks (CNN) is an agricultural computer vision project designed to identify and classify crop pathologies from photographic images of plant leaves. By leveraging modern deep learning techniques, the system aims to analyze complex visual patterns—such as necrotic lesions, marginal chlorosis, fungal sporulation, and mosaic discoloration—to classify plant health categories.',
      purpose:
        'Agricultural yield and crop quality are heavily vulnerable to foliar diseases. Delayed identification allows fungal, bacterial, and viral pathogens to spread unchecked, causing devastating harvest losses and economic hardship for farming communities. Traditional identification requires on-site agricultural extension officers, manual visual inspection, and laboratory culture assays that are slow, expensive, and inaccessible in remote farming regions. This project bridges this gap by exploring deep convolutional neural networks to deliver fast, computer-assisted visual screening from everyday leaf photographs.',
      mainObjective:
        'Develop and evaluate a robust Convolutional Neural Network pipeline in TensorFlow/Keras that ingests leaf images, executes stochastic data augmentation, extracts hierarchical spatial features, and classifies multi-crop disease categories to support early agricultural disease detection.',
      howItWorks:
        'The pipeline audits dataset directories via automated verification scripts, loads images into an 80/20 train/validation split at 224x224 RGB resolution, applies intensity rescaling (1/255), and enriches training data using horizontal flipping, angular rotation, zooming, and translation. A custom 3-block CNN extracts spatial feature hierarchies from low-level edges to high-level lesion contours, uses Global Average Pooling to prevent parameter explosion, applies Dropout (0.5) to curb overfitting, and predicts class probabilities via a Softmax output layer.',
      targetUsers: [
        'Farmers, Smallholders & Commercial Crop Cultivators',
        'Agricultural Extension Officers & Field Agronomists',
        'Smart Agriculture & Computer Vision Researchers',
        'Precision Farming & Drone Telemetry Engineers',
      ],
      highlights: [
        'Custom 3-Block Convolutional Neural Network Built in TensorFlow/Keras',
        'Targeted Benchmark on the Multi-Crop PlantVillage Pathology Taxonomy',
        'Stochastic 4-Tier Data Augmentation (Rotation, Zoom, Flip, Shift)',
        'Global Average Pooling & Dropout (0.5) for Overfitting Resistance',
        'Active Model Training Pipeline with EarlyStopping & Checkpointing',
        'Dynamic Multi-Class Handling Directly Derived from Dataset Hierarchy',
        'Visual Verification & Dataset Integrity Auditing Utilities',
      ],
    },
    problemStatement: {
      title: 'Foliar Pathology Spread, Diagnostic Latency & Agronomic Expertise Shortages',
      mainProblem:
        'Plant foliar infections cause an estimated 20% to 40% loss of global agricultural harvest value annually. When fungal pathogens (such as late blight) or viral infections strike, delayed recognition of early visual symptoms allows pathogens to disperse across entire fields within days. Identifying diseases from leaf symptoms is notoriously challenging because distinct pathogens often present nearly identical early-stage yellowing, wilting, or spot necrosis.',
      existingLimitations: [
        'Manual Expert Dependency: Certified agronomists and plant pathologists are scarce in rural agricultural belts, leading to delayed disease confirmation.',
        'Visual Symptom Ambiguity: Many plant diseases exhibit overlapping symptoms (e.g., Early Blight vs. Septoria spot), confusing unassisted human observers.',
        'Laboratory Culture Latency: Traditional spore culture assays and PCR tests require specialized lab equipment and days of incubation before results are available.',
        'Severe Economic & Food Security Impact: By the time severe foliar lesions become undeniable, crops may be beyond rescue, resulting in acute financial ruin for growers.',
        'High Field Imaging Variability: Variable field sunlight, shadows, leaf angles, and sensor noise make naive image classification algorithms unreliable.',
      ],
      whyItMatters:
        'Accelerating leaf disease recognition from days down to seconds empowers farmers to apply targeted biocides or quarantine infected crops before an outbreak becomes catastrophic, saving harvest yields and minimizing unnecessary chemical applications.',
      keyChallenges: [
        {
          title: 'High Intra-Class & Inter-Class Visual Ambiguity',
          description:
            'Different diseases produce similar necrotic spots, while the same disease presents differently depending on infection age and crop cultivar.',
          iconName: 'Eye',
        },
        {
          title: 'Overfitting on Homogeneous Leaf Backgrounds',
          description:
            'Preventing the CNN from learning non-botanical artifacts (such as background lab paper or bench textures) rather than authentic lesion pathology.',
          iconName: 'ShieldAlert',
        },
        {
          title: 'Computational Efficiency for Agricultural Edge Devices',
          description:
            'Structuring an efficient convolutional architecture capable of rapid inference without demanding high-end enterprise GPU infrastructure.',
          iconName: 'Cpu',
        },
      ],
    },
    solution: {
      title: 'Custom Convolutional Neural Network with Stochastic Augmentation & Global Average Pooling',
      approach:
        'An end-to-end deep learning methodology integrating dataset integrity auditing, 4-tier stochastic image augmentation, a custom 3-block CNN architecture with Global Average Pooling, and regularized training with EarlyStopping and ModelCheckpoint.',
      technicalSolution:
        'Built in Python 3.10+ using TensorFlow 2.13+ and Keras. The system ingests 224x224 leaf images, applies layers.Rescaling(1./255), and feeds the training split through randomized horizontal flips, rotations (±15%), zooms (±15%), and translations (±10%). The custom CNN extracts features across 3 convolution blocks (32, 64, and 128 filters of kernel size 3x3) paired with MaxPooling2D. To prevent the parameter explosion typical of standard Flatten layers, GlobalAveragePooling2D reduces spatial dimensions into 128 scalar averages, fed into a 128-neuron Dense layer with Dropout (0.5) and a dynamic Softmax output layer.',
      implementationOverview:
        'Organized as a modular Python pipeline (Dataset Verification.py for folder audits and Image_preprocessing.py for dataset loading, augmentation, model definition, compilation, and training). Training utilizes Adam optimization and Sparse Categorical Crossentropy, with EarlyStopping (patience 5) and ModelCheckpoint ("best_model.h5").',
      howItSolves: [
        'Extracts localized lesion and discoloration patterns automatically without manual feature engineering',
        'Employs 4-way stochastic data augmentation to improve generalization under diverse visual conditions',
        'Uses Global Average Pooling to dramatically reduce parameter count and curb memorization overfitting',
        'Enforces EarlyStopping to restore best model weights and halt training if validation loss stagnates',
        'Supports dynamic class extraction to effortlessly adapt to expanding crop pathology datasets',
      ],
    },
    keyFeatures: [
      {
        iconName: 'Camera',
        title: 'Automated Foliar Pathology Classification',
        description:
          'Deep convolutional neural network classifying plant leaf images into healthy baselines and distinct fungal, bacterial, or viral disease categories.',
      },
      {
        iconName: 'Cpu',
        title: 'Custom 3-Block CNN Feature Hierarchy',
        description:
          'Progressive feature extraction utilizing 32, 64, and 128 convolutional filters (3x3 kernel, ReLU) paired with MaxPooling2D spatial reduction.',
      },
      {
        iconName: 'Database',
        title: 'Dynamic Multi-Class Dataset Extraction',
        description:
          'Introspects dataset subdirectories dynamically to map class names and output heads without hardcoding category counts or taxonomy limits.',
      },
      {
        iconName: 'Sparkles',
        title: '4-Tier Stochastic Data Augmentation',
        description:
          'On-the-fly training augmentation incorporating horizontal flips, 15% random rotation, 15% random zoom, and 10% translation shifts.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Global Average Pooling & Dropout Regularization',
        description:
          'Replaces brute-force Flatten layers with GlobalAveragePooling2D and Dropout (0.5) to curb dense parameter bloat and combat overfitting.',
      },
      {
        iconName: 'Clock',
        title: 'Active Training & Callback Checkpointing',
        description:
          'Automated convergence monitoring via EarlyStopping (patience 5) and ModelCheckpoint preserving peak validation weights in best_model.h5.',
      },
    ],
    architecture: {
      description:
        'The Plant Disease Prediction architecture is structured as a modular deep learning pipeline spanning dataset auditing, tensor ingestion, stochastic augmentation, convolutional feature extraction, pooling, dense classification, and dual callback checkpointing.',
      frontend:
        'Command-line execution and analytical Matplotlib visualization interface; web application user interface planned as an upcoming development phase.',
      backend:
        'Python 3.10+ data science runtime, TensorFlow 2.13+, Keras sequential API, and Pillow image decoding engine.',
      database:
        'Hierarchical folder-based image dataset repository (PlantVillage taxonomy) loaded dynamically via tf.data.',
      apis: [
        'tf.keras.utils.image_dataset_from_directory for batched disk loading',
        'tf.data.AUTOTUNE asynchronous prefetching API',
        'keras.callbacks.EarlyStopping for automated convergence monitoring',
        'keras.callbacks.ModelCheckpoint for serialized .h5 weight saving',
      ],
      workflow: [
        '1. Dataset Auditing: Dataset Verification.py audits folder integrity and confirms per-class image counts.',
        '2. Image Loading & Normalization: image_dataset_from_directory loads 224x224 RGB tensors in batches of 32; Rescaling(1./255) normalizes pixel intensities.',
        '3. Data Augmentation: Training tensors pass through horizontal flips, rotations (0.15), zooms (0.15), and translations (0.1, 0.1).',
        '4. Asynchronous Prefetching: AUTOTUNE buffers batches in memory to maximize GPU compute throughput.',
        '5. CNN Feature Extraction: 3 Conv2D blocks (32, 64, 128 filters) extract low-, mid-, and high-level lesion representations.',
        '6. Global Pooling & Regularization: GlobalAveragePooling2D and Dropout(0.5) condense features and mitigate co-adaptation.',
        '7. Dense Classification & Checkpointing: Softmax head computes disease probabilities; ModelCheckpoint persists best_model.h5.',
      ],
    },
    techStack: [
      'Python',
      'TensorFlow',
      'Keras',
      'CNN',
      'Pillow',
      'NumPy',
      'Matplotlib',
      'H5py',
    ],
    techStackGrouped: [
      {
        category: 'Core Deep Learning & Frameworks',
        items: [
          { name: 'Python 3.10+', role: 'Primary programming language & scientific computing runtime', iconName: 'Code' },
          { name: 'TensorFlow 2.13+', role: 'Production deep learning engine & computation graph execution', iconName: 'Cpu' },
          { name: 'Keras', role: 'High-level sequential neural network modeling API', iconName: 'Layers' },
        ],
      },
      {
        category: 'Computer Vision & Image Engineering',
        items: [
          { name: 'Pillow (PIL)', role: 'Low-level raster image decoding, format parsing, and handling', iconName: 'Camera' },
          { name: 'Data Augmentation', role: 'Stochastic transformations (horizontal flip, rotation, zoom, shift)', iconName: 'Sparkles' },
          { name: 'Rescaling (1/255)', role: 'Floating-point channel normalization to [0, 1] range', iconName: 'Sliders' },
        ],
      },
      {
        category: 'Data & Numerical Operations',
        items: [
          { name: 'NumPy', role: 'Multidimensional array math, matrix transformations, and tensors', iconName: 'Calculator' },
          { name: 'tf.data.AUTOTUNE', role: 'Memory buffer prefetching overlapping I/O and GPU computation', iconName: 'Zap' },
        ],
      },
      {
        category: 'Visualization & Checkpointing',
        items: [
          { name: 'Matplotlib', role: 'Training vs. validation loss and accuracy curve plotting', iconName: 'BarChart3' },
          { name: 'H5py (HDF5)', role: 'Binary checkpoint persistence for serialized best_model.h5 weights', iconName: 'HardDrive' },
          { name: 'EarlyStopping', role: 'Automatic plateau detection and best weight restoration callback', iconName: 'ShieldCheck' },
        ],
      },
    ],
    gallery: [
      {
        url: '/projects/plant-disease-prediction/gallery/overview.jpeg',
        caption:
          'Project Architecture & Deep Learning Workflow: Visual overview detailing the convolutional neural network pipeline, foliar leaf image preprocessing, feature extraction blocks, and disease classification workflow.',
        alt: 'Plant Disease Prediction DL Architecture and Workflow Overview',
      },
      {
        url: '/projects/plant-disease-prediction/cover.png',
        caption:
          'Plant Disease Prediction Project Identity: High-resolution visual cover illustrating AI-assisted plant pathology analysis, computer vision leaf diagnosis, and deep learning neural network design.',
        alt: 'Plant Disease Prediction Cover Artwork',
      },
    ],
    developmentProcess: [
      {
        stepNumber: 1,
        title: 'Agricultural Problem Framing & Domain Discovery',
        description:
          'Audited foliar pathology dispersion dynamics across key agricultural crop families. Framed image-based early detection requirements to mitigate manual visual inspection delays.',
        status: 'Completed',
      },
      {
        stepNumber: 2,
        title: 'Dataset Auditing & Hierarchy Verification',
        description:
          'Implemented Dataset Verification.py to inspect directory trees, confirm valid image decodability, and audit per-class image counts across the PlantVillage taxonomy.',
        status: 'Completed',
      },
      {
        stepNumber: 3,
        title: 'Image Preprocessing & 4-Tier Augmentation Pipeline',
        description:
          'Configured 224x224 RGB image standardization, 80/20 train/validation partitioning, Rescaling(1./255) normalization, and 4-tier stochastic augmentation (rotation, zoom, flip, shift).',
        status: 'Completed',
      },
      {
        stepNumber: 4,
        title: 'Custom CNN Architecture Design & Regularization',
        description:
          'Constructed a 3-block convolutional neural network in TensorFlow/Keras with Conv2D (32, 64, 128), MaxPooling2D, GlobalAveragePooling2D, Dense(128), Dropout(0.5), and Softmax output.',
        status: 'Completed',
      },
      {
        stepNumber: 5,
        title: 'Model Training, Checkpointing & Optimization',
        description:
          'Wired Adam optimizer, Sparse Categorical Crossentropy, EarlyStopping (patience 5), and ModelCheckpoint saving best_model.h5. Full 25-epoch convergence runs are actively executing.',
        status: 'In Progress',
      },
      {
        stepNumber: 6,
        title: 'Multi-Class Evaluation & Confusion Matrix Analysis',
        description:
          'Generating comprehensive held-out validation reports, per-disease precision/recall/F1 breakdowns, and multi-class confusion matrices upon training run completion.',
        status: 'In Progress',
      },
      {
        stepNumber: 7,
        title: 'Web Application UI & Interactive Inference Deployment',
        description:
          'Designing a responsive web interface allowing growers to upload field leaf photographs and receive immediate disease classifications and visual diagnostic insights.',
        status: 'In Progress',
      },
    ],
    teamContributions: [
      {
        name: 'Raghu Raman K.',
        role: 'Lead Deep Learning & Computer Vision Researcher',
        image: '/images/team/raghuraman.jpg',
        responsibilities: [
          'Conceptualization and architecture of the Plant Disease Prediction deep learning pipeline',
          'Engineered automated dataset hierarchy auditing and validation scripts',
          'Developed stochastic image preprocessing and 4-tier data augmentation pipeline',
          'Designed custom 3-block CNN architecture with Global Average Pooling and Dropout',
          'Configured model compilation, loss objectives, and training callback checkpointing',
        ],
        technicalContributions: [
          'Engineered memory-optimized tf.data pipeline utilizing AUTOTUNE prefetching',
          'Structured custom 3-block CNN hierarchy mitigating parameter explosion via GlobalAveragePooling2D',
          'Implemented regularization framework with Dropout (0.5) and EarlyStopping to combat overfitting',
          'Constructed automated Matplotlib graphing harness for empirical training loss and accuracy tracking',
        ],
        technologiesHandled: [
          'Python 3.10+',
          'TensorFlow 2.13+',
          'Keras',
          'CNN Architecture',
          'Pillow',
          'NumPy',
          'Matplotlib',
          'H5py',
        ],
      },
    ],
    challenges: [
      {
        challenge: 'High Intra-Class & Inter-Class Visual Ambiguity',
        explanation:
          'Different foliar diseases (such as Early Blight and Septoria Leaf Spot) often present nearly indistinguishable yellow-brown necrotic lesions in their early stages, confounding standard classifiers.',
        solution:
          'Engineered a hierarchical 3-block CNN architecture that progressively captures low-level edge features, mid-level textural spot patterns, and high-level spatial lesion configurations, enabling the model to learn subtle morphological discriminators.',
      },
      {
        challenge: 'Overfitting on Homogeneous Leaf Backgrounds',
        explanation:
          'Deep networks frequently suffer from shortcut learning, memorizing background lighting or laboratory surfaces rather than authentic botanical disease pathology.',
        solution:
          'Applied an aggressive 4-tier stochastic data augmentation pipeline (random horizontal flipping, 15% rotation, 15% zoom, and 10% translation shifts) paired with GlobalAveragePooling2D and Dropout (0.5) to force spatial feature co-adaptation resistance.',
      },
      {
        challenge: 'Memory and I/O Bottlenecks with High-Resolution Image Batches',
        explanation:
          'Decoding and augmenting thousands of 224x224 RGB images on the CPU can cause severe GPU starvation and excessive training latency.',
        solution:
          'Integrated tf.data.AUTOTUNE with dataset prefetching (.prefetch(buffer_size=AUTOTUNE)) to overlap asynchronous CPU tensor preparation with GPU matrix calculations, eliminating I/O stalls.',
      },
    ],
    outcomes: {
      completedFunctionalities: [
        'Automated dataset integrity auditing script (Dataset Verification.py)',
        'Standardized 224x224 RGB image preprocessing and Rescaling(1./255) normalization',
        '4-tier stochastic data augmentation pipeline (rotation, zoom, horizontal flip, translation)',
        'High-throughput asynchronous prefetching pipeline utilizing tf.data.AUTOTUNE',
        'Custom 3-block Convolutional Neural Network architecture in TensorFlow/Keras',
        'GlobalAveragePooling2D dimensional reduction minimizing parameter bloat',
        'Regularization framework integrating Dense(128), Dropout(0.5), and EarlyStopping',
        'Dual callback harness automating best model weight serialization (best_model.h5)',
        'Matplotlib loss and accuracy trajectory visualization scripts',
      ],
      technicalAchievements: [
        'Engineered an end-to-end computer vision pipeline tailored for agricultural pathology detection',
        'Replaced parameter-heavy Flatten layers with GlobalAveragePooling2D for improved spatial generalization',
        'Mitigated severe lighting and orientation variances using stochastic data augmentation',
        'Established an automated training harness with EarlyStopping to prevent overtraining',
      ],
      testingResults: [
        'Dataset verification successfully audits folder structures and tallies class balances',
        'Image loader verifies consistent 224x224x3 tensor generation across batch sizes of 32',
        'Data augmentation verified to apply continuous random transformations during training',
        'Model architecture summary confirms clean hierarchical tensor dimension downsampling',
        'Model training, full epoch convergence, and validation benchmark evaluation are actively in progress',
      ],
      demonstratedCapabilities: [
        'Deep Learning & Convolutional Neural Network Architecture Design',
        'Computer Vision & Agricultural Foliar Image Preprocessing',
        'Data Augmentation & Regularization Strategies in TensorFlow/Keras',
        'Memory-Efficient Data Pipeline Engineering with tf.data.AUTOTUNE',
        'Literate Code Documentation & Machine Learning Pipeline Structuring',
      ],
    },
    disclaimer:
      'Plant Disease Prediction is an active deep learning research project designed for preliminary visual screening and computer-assisted decision support. It should not replace certified agricultural extension consultations or laboratory chemical assays.',
  },
}

/**
 * Retrieves a project's complete details by slug or ID with fallback matching.
 */
export function getProjectDetailsBySlug(slug: string): ProjectDetails | undefined {
  if (!slug) return undefined
  const cleanSlug = slug.toLowerCase().trim()

  // 1. Direct key match
  if (projectDetailsMap[cleanSlug]) {
    const proj = projectDetailsMap[cleanSlug]
    return {
      ...proj,
      contributors: proj.contributors || getProjectContributors(cleanSlug),
    }
  }

  // 2. Legacy alias or ID match
  const found = Object.values(projectDetailsMap).find(
    (p) => p.slug === cleanSlug || p.id === cleanSlug,
  )
  if (found) {
    return {
      ...found,
      contributors: found.contributors || getProjectContributors(found.slug),
    }
  }

  // 3. Fallback: match from projectsData and synthesize ProjectDetails
  const baseProject = projectsData.find(
    (p) => p.slug === cleanSlug || p.id === cleanSlug,
  )
  if (baseProject) {
    return {
      id: baseProject.id,
      slug: baseProject.slug,
      title: baseProject.title,
      shortTitle: baseProject.shortTitle,
      category: baseProject.category,
      domain: baseProject.domain,
      status: baseProject.status,
      shortDescription: baseProject.description,
      assetFolderPath: `/projects/${baseProject.slug}/`,
      coverImage: baseProject.image,
      techStack: baseProject.techStack,
      contributors: getProjectContributors(baseProject.slug),
    }
  }

  return undefined
}

/**
 * Returns all available project details as an array.
 */
export function getAllProjectDetails(): ProjectDetails[] {
  return Object.values(projectDetailsMap).map((p) => ({
    ...p,
    contributors: p.contributors || getProjectContributors(p.slug),
  }))
}

