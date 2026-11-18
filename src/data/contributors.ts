import type { ContributorItem } from '@/types/project-details.types'

/**
 * Verified Project Contributors
 * Sourced directly from verified internal team assets.
 */
export const SREERAM_GANESH: ContributorItem = {
  name: 'Sreeram Ganesh',
  role: 'Project Contributor',
  image: '/images/team/sreeram-ganesh.png',
  portfolioUrl: '/sreeram',
  status: 'Confirmed',
}

export const RAGHURAMAN: ContributorItem = {
  name: 'Raghuraman',
  role: 'Project Contributor',
  image: '/images/team/raghuraman.jpg',
  portfolioUrl: '/raghuraman',
  status: 'Confirmed',
}

/**
 * Centralized, single source of truth for project contributor assignments.
 * Mappings strictly verified and configured per portfolio project.
 */
export const projectContributorsMap: Record<string, ContributorItem[]> = {
  // -------------------------------------------------------------
  // Contributor 1: Sreeram Ganesh (10 Projects)
  // -------------------------------------------------------------
  'student-information-system': [SREERAM_GANESH],
  'loangauge-ai': [SREERAM_GANESH],
  'cognitive-screening-system': [SREERAM_GANESH],
  'uk-transportation-analysis': [SREERAM_GANESH],
  'loan-lending-performance-dashboard': [SREERAM_GANESH],
  'patient-diagnostic-dashboard': [SREERAM_GANESH],
  'ecommerce-conversion-analysis': [SREERAM_GANESH],
  'campfly-sales-analysis': [SREERAM_GANESH],
  'insurance-risk-overview': [SREERAM_GANESH],
  'ai-skills-job-risk': [SREERAM_GANESH],

  // -------------------------------------------------------------
  // Contributor 2: Raghuraman (5 Projects)
  // -------------------------------------------------------------
  'esp-data-transmission': [RAGHURAMAN],
  'customer-churn-webpage': [RAGHURAMAN],
  'water-quality-management': [RAGHURAMAN],
  'plant-disease-prediction': [RAGHURAMAN],
  'food-ordering-system': [RAGHURAMAN],

  // -------------------------------------------------------------
  // Contributor 3: Contributors To Be Confirmed (Pending Verification)
  // -------------------------------------------------------------
  'voltrelay': [],
  'agrolink': [],
  'atmosphere': [],
  'quiz-master-pro': [],
  'bloodchain-ai': [],
  'bis-smartassist': [],
}

/**
 * Retrieves the list of confirmed contributors for a given project slug.
 */
export function getProjectContributors(slug?: string): ContributorItem[] {
  if (!slug) return []
  const cleanSlug = slug.toLowerCase().trim()
  return projectContributorsMap[cleanSlug] || []
}

/**
 * Checks whether the project has confirmed contributor(s) assigned.
 */
export function hasConfirmedContributors(slug?: string): boolean {
  return getProjectContributors(slug).length > 0
}

