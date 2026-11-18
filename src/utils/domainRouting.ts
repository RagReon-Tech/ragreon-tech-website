import type { ProjectDomain } from '@/types/project.types'
import type { FilterCategory } from '@/components/sections/portfolio/PortfolioFilterBar'

export interface DomainCapability {
  name: string
  slug: string
  domain: ProjectDomain
}

/**
 * Official Core Capabilities listed in the RagReon Tech footer,
 * mapped to their URL query slugs and internal project domains.
 * The order and labels match the footer design.
 */
export const FOOTER_CAPABILITIES: DomainCapability[] = [
  {
    name: 'Data Analytics & BI',
    slug: 'data-analytics-bi',
    domain: 'Data Analytics',
  },
  {
    name: 'Data Science',
    slug: 'data-science',
    domain: 'Data Science',
  },
  {
    name: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    domain: 'AI & Machine Learning',
  },
  {
    name: 'Web Development',
    slug: 'web-development',
    domain: 'Web Development',
  },
  {
    name: 'Python & Automation',
    slug: 'python-automation',
    domain: 'Python Development',
  },
  {
    name: 'IoT & Embedded Systems',
    slug: 'iot-embedded-systems',
    domain: 'IoT & Embedded Systems',
  },
  {
    name: 'Deep Learning & Vision',
    slug: 'deep-learning-vision',
    domain: 'Deep Learning & Computer Vision',
  },
]

/**
 * Converts a FilterCategory into a URL-friendly query parameter slug.
 * Returns null for 'all' to produce clean URLs without query parameters.
 */
export function domainToSlug(category: FilterCategory): string | null {
  switch (category) {
    case 'Data Analytics':
      return 'data-analytics-bi'
    case 'Data Science':
      return 'data-science'
    case 'AI & Machine Learning':
      return 'ai-machine-learning'
    case 'Web Development':
      return 'web-development'
    case 'Python Development':
      return 'python-automation'
    case 'IoT & Embedded Systems':
      return 'iot-embedded-systems'
    case 'Deep Learning & Computer Vision':
      return 'deep-learning-vision'
    default:
      return null
  }
}

/**
 * Converts a URL slug into the corresponding FilterCategory.
 * Handles canonical slugs, alternate aliases, and direct domain names gracefully.
 * Safely falls back to 'all' for missing or unrecognised values.
 */
export function slugToDomain(slug: string | null | undefined): FilterCategory {
  if (!slug) return 'all'

  const normalized = slug.trim().toLowerCase()

  switch (normalized) {
    // 1. Data Analytics & BI
    case 'data-analytics-bi':
    case 'data-analytics':
    case 'data analytics':
    case 'data analytics & bi':
    case 'data-analytics-business-intelligence':
      return 'Data Analytics'

    // 2. Data Science
    case 'data-science':
    case 'data science':
      return 'Data Science'

    // 3. AI & Machine Learning
    case 'ai-machine-learning':
    case 'ai-ml':
    case 'ai & machine learning':
    case 'ai machine learning':
      return 'AI & Machine Learning'

    // 4. Web Development
    case 'web-development':
    case 'web':
    case 'web development':
      return 'Web Development'

    // 5. Python & Automation
    case 'python-automation':
    case 'python-development':
    case 'python':
    case 'python & automation':
    case 'python development':
      return 'Python Development'

    // 6. IoT & Embedded Systems
    case 'iot-embedded-systems':
    case 'iot':
    case 'iot & embedded systems':
    case 'iot embedded systems':
      return 'IoT & Embedded Systems'

    // 7. Deep Learning & Vision
    case 'deep-learning-vision':
    case 'deep-learning-computer-vision':
    case 'computer-vision':
    case 'deep learning & vision':
    case 'deep learning & computer vision':
      return 'Deep Learning & Computer Vision'

    // Unrecognised or explicit 'all'
    case 'all':
    case 'all-projects':
    default:
      return 'all'
  }
}
