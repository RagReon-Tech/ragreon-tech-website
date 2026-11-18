import { projectsData } from './projects'
import type { ProjectDomain, ProjectItem } from '@/types/project.types'
import type {
  PersonalPortfolioConfig,
  PersonalPortfolioId,
  ResolvedPersonalPortfolio,
} from '@/types/personal-portfolio.types'

export const personalPortfoliosMap: Record<PersonalPortfolioId, PersonalPortfolioConfig> = {
  sreeram: {
    id: 'sreeram',
    route: '/sreeram',
    name: 'Sreeram Ganesh S',
    shortName: 'Sreeram Ganesh',
    role: 'Co-Founder at RagReon Tech | Data Analytics & AI',
    headlineExpertise: 'Data Analytics | AI | Data Science | Software Development',
    greeting: "Hello, I'm",
    heroIntro:
      'A technology enthusiast and Co-Founder at RagReon Tech focused on transforming complex data into meaningful insights and engineering practical AI-driven and web-based software solutions.',
    image: '/images/team/sreeram-ganesh.png',
    imagePosition: '50% 10%',
    themeVariant: 'data-ai',
    aboutParagraphs: [
      'I am Sreeram Ganesh S, Co-Founder of RagReon Tech, specializing in Data Analytics, Business Intelligence, Data Science, Machine Learning, and practical Software Development.',
      'My work revolves around designing clean relational data models, writing structured SQL queries, developing executive Power BI dashboards, and integrating predictive Machine Learning pipelines into accessible web applications.',
      'Across domains like financial risk intelligence, healthcare diagnostics, urban transportation, e-commerce analytics, and institutional management, I focus on building solutions that make complex operational data clear, actionable, and dependable.',
    ],
    focusPoints: [
      {
        title: 'Data Analytics & Business Intelligence',
        description:
          'Architecting Star Schema data models, custom DAX measures, Power Query transformations, and interactive multi-page Power BI dashboards.',
        icon: 'barChart',
      },
      {
        title: 'Data Science & Machine Learning',
        description:
          'Building end-to-end Scikit-Learn pipelines, feature engineering workflows, and balanced Random Forest risk classification models.',
        icon: 'brain',
      },
      {
        title: 'Full-Stack & Database Engineering',
        description:
          'Developing structured Flask backends, relational MySQL and SQL Server schemas, and responsive web interfaces for real-time model inference.',
        icon: 'code',
      },
    ],
    whatIBuild: [
      'Executive Power BI & SQL Business Intelligence dashboards',
      'Predictive Machine Learning classification & risk-scoring systems',
      'Data-driven Flask web portals with relational databases',
      'Interactive analytics tools for healthcare, fintech, and enterprise operations',
    ],
    skillCategories: [
      {
        title: 'Programming & Query Languages',
        icon: 'code',
        description: 'Core languages used across analytical pipelines and web applications.',
        skills: ['Python', 'SQL', 'T-SQL', 'JavaScript', 'HTML/CSS'],
      },
      {
        title: 'Data Analytics & Business Intelligence',
        icon: 'barChart',
        description: 'End-to-end BI reporting, data modeling, and visual storytelling.',
        skills: [
          'Power BI',
          'DAX',
          'Power Query',
          'Data Modeling',
          'Excel',
          'Data Visualization',
          'Power BI Maps',
        ],
      },
      {
        title: 'Data Science & Machine Learning',
        icon: 'brain',
        description: 'Statistical modeling, feature engineering, and predictive classification.',
        skills: [
          'Scikit-Learn',
          'Pandas',
          'Random Forest',
          'Predictive Analytics',
          'Feature Engineering',
          'Model Evaluation',
        ],
      },
      {
        title: 'Web, Databases & Developer Tools',
        icon: 'database',
        description: 'Backend web frameworks, relational databases, and version control.',
        skills: ['Flask', 'MySQL', 'SQL Server', 'Git', 'GitHub'],
      },
    ],
    projectSlugs: [
      'loangauge-ai',
      'cognitive-screening-system',
      'uk-transportation-analysis',
      'student-information-system',
      'loan-lending-performance-dashboard',
      'patient-diagnostic-dashboard',
      'ecommerce-conversion-analysis',
      'campfly-sales-analysis',
      'insurance-risk-overview',
      'ai-skills-job-risk',
    ],
    email: 'sreeramganesh00719@gmail.com',
    phone: '+91 6383309954',
    linkedinUrl: 'https://www.linkedin.com/in/sreeram-ganesh-s',
    githubUrl: 'https://github.com/sreeramganesh',
    seo: {
      title: 'Sreeram Ganesh S | Data Analytics, AI & Software Development',
      description:
        'Personal portfolio of Sreeram Ganesh S, Co-Founder at RagReon Tech. Explore verified projects in Data Analytics, Power BI, SQL, Data Science, Machine Learning, and Full-Stack Web Development.',
    },
  },

  raghuraman: {
    id: 'raghuraman',
    route: '/raghuraman',
    name: 'Raghuraman',
    shortName: 'Raghuraman',
    role: 'Co-Founder at RagReon Tech | IoT & Embedded Systems',
    headlineExpertise: 'IoT | Embedded Systems | Hardware Integration | AI & Software Development',
    greeting: "Hello, I'm",
    heroIntro:
      'A technology builder and Co-Founder at RagReon Tech focused on IoT, embedded systems, hardware integration, machine learning, and practical full-stack software engineering.',
    image: '/images/team/raghuraman.jpg',
    imagePosition: '50% 15%',
    themeVariant: 'iot-hardware',
    aboutParagraphs: [
      'I am Raghuraman, Co-Founder of RagReon Tech, specializing in IoT, Embedded Systems, Hardware Integration, Python, Machine Learning, and Full-Stack Web Development.',
      'My engineering focus bridges physical hardware with intelligent software—from coordinating multi-node ESP32 wireless sensor networks with cloud telemetry dashboards to building explainable ML frameworks, deep learning computer vision models, and scalable web applications.',
      'I enjoy developing practical connected prototypes and real-world software solutions that solve tangible challenges in environmental monitoring, agriculture, customer intelligence, and service automation.',
    ],
    focusPoints: [
      {
        title: 'IoT & Embedded Hardware Systems',
        description:
          'Building wireless microcontroller networks with ESP32, Raspberry Pi, DHT22 sensors, C/C++ firmware, and ThingSpeak cloud monitoring dashboards.',
        icon: 'cpu',
      },
      {
        title: 'Machine Learning & Deep Learning',
        description:
          'Developing explainable ML pipelines (Scikit-Learn, LightGBM, XGBoost, SHAP) and Convolutional Neural Networks (TensorFlow/Keras) for computer vision.',
        icon: 'brain',
      },
      {
        title: 'Full-Stack Web & API Engineering',
        description:
          'Engineering responsive web platforms and microservices using Node.js, Express, MongoDB, Flask, REST APIs, and modern JavaScript.',
        icon: 'globe',
      },
    ],
    whatIBuild: [
      'Multi-node ESP32 IoT telemetry & cloud dashboard systems',
      'Deep Learning CNN prototypes for visual pathology classification',
      'Explainable Machine Learning models with SHAP attribution',
      'Full-stack Node.js/MongoDB & Flask web applications',
    ],
    skillCategories: [
      {
        title: 'IoT & Embedded Systems',
        icon: 'cpu',
        description: 'Microcontrollers, sensors, embedded firmware, and cloud telemetry.',
        skills: [
          'ESP32',
          'Raspberry Pi',
          'DHT22 Sensor',
          'Sensor Integration',
          'Embedded Systems',
          'C/C++',
          'ThingSpeak Cloud',
        ],
      },
      {
        title: 'AI, Machine Learning & Deep Learning',
        icon: 'brain',
        description: 'Supervised classification, gradient boosting, explainable AI, and CNNs.',
        skills: [
          'Python',
          'Scikit-Learn',
          'TensorFlow',
          'Keras',
          'CNN',
          'Random Forest',
          'LightGBM',
          'XGBoost',
          'SHAP',
        ],
      },
      {
        title: 'Data Science & Analytical Tools',
        icon: 'barChart',
        description: 'Data processing, scientific computing, and model diagnostics.',
        skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Pillow', 'Joblib', 'Jupyter'],
      },
      {
        title: 'Web Development & Databases',
        icon: 'globe',
        description: 'Backend APIs, NoSQL databases, and interactive web interfaces.',
        skills: [
          'JavaScript',
          'Node.js',
          'Express',
          'MongoDB',
          'Mongoose',
          'Flask',
          'REST API',
          'HTML5/CSS3',
          'Git & GitHub',
        ],
      },
    ],
    projectSlugs: [
      'esp-data-transmission',
      'water-quality-management',
      'customer-churn-webpage',
      'plant-disease-prediction',
      'food-ordering-system',
    ],
    email: 'krraghu240906@gmail.com',
    phone: '+91 63695 19752',
    linkedinUrl: 'https://www.linkedin.com/in/raghuraman-k-89b41a3a0/',
    githubUrl: 'https://github.com/k-raghu24',
    seo: {
      title: 'Raghuraman | IoT, Embedded Systems & Technology',
      description:
        'Personal portfolio of Raghuraman, Co-Founder at RagReon Tech. Explore verified projects in IoT, ESP32 Embedded Systems, Machine Learning, Deep Learning CNNs, and Full-Stack Web Development.',
    },
  },
}

/**
 * Resolves a personal portfolio configuration along with its authoritative
 * verified projects and dynamically computed filter domains from projectsData.
 */
export function getPersonalPortfolio(
  id: PersonalPortfolioId,
): ResolvedPersonalPortfolio {
  const config = personalPortfoliosMap[id]

  // Preserve the curated slug order while fetching authoritative records from projectsData
  const projects: ProjectItem[] = config.projectSlugs
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter((p): p is ProjectItem => Boolean(p))

  // Derive only domains that genuinely exist on this individual's projects
  const domainSet = new Set<ProjectDomain>()
  projects.forEach((project) => {
    const projectDomains =
      project.domains && project.domains.length > 0
        ? project.domains
        : [project.domain]
    projectDomains.forEach((d) => domainSet.add(d))
  })

  return {
    ...config,
    projects,
    availableDomains: Array.from(domainSet),
  }
}
