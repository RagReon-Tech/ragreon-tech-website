import type { ProjectDomain, ProjectItem } from './project.types'

export type PersonalPortfolioId = 'sreeram' | 'raghuraman'

export type VisualThemeVariant = 'data-ai' | 'iot-hardware'

export type SkillCategoryIcon =
  | 'code'
  | 'barChart'
  | 'brain'
  | 'globe'
  | 'database'
  | 'cpu'
  | 'layers'

export interface SkillCategory {
  title: string
  icon: SkillCategoryIcon
  description: string
  skills: string[]
}

export interface SpecializationHighlight {
  title: string
  description: string
  icon: SkillCategoryIcon
}

export interface PersonalPortfolioSEO {
  title: string
  description: string
}

export interface PersonalPortfolioConfig {
  id: PersonalPortfolioId
  route: string
  name: string
  shortName: string
  role: string
  headlineExpertise: string
  greeting: string
  heroIntro: string
  image: string
  imagePosition: string
  themeVariant: VisualThemeVariant
  aboutParagraphs: string[]
  focusPoints: SpecializationHighlight[]
  whatIBuild: string[]
  skillCategories: SkillCategory[]
  projectSlugs: string[]
  email: string
  phone: string
  linkedinUrl: string
  githubUrl: string
  seo: PersonalPortfolioSEO
}

export interface ResolvedPersonalPortfolio extends PersonalPortfolioConfig {
  projects: ProjectItem[]
  availableDomains: ProjectDomain[]
}
