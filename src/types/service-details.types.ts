export interface ServiceHeroData {
  headline: string
  subheadline: string
  supportingText: string
  ctaLabel?: string
  techBadges: string[]
}

export interface ServiceOverviewData {
  heading: string
  conceptExplanation: string
  howItWorks: string
  realWorldContext: string
  commonUseCases: string[]
}

export interface ServiceImportancePoint {
  title: string
  explanation: string
  iconName?: string
}

export interface ServiceImportanceData {
  heading: string
  description: string
  points: ServiceImportancePoint[]
}

export interface ProblemSolvedItem {
  id: number
  title: string
  explanation: string
  impact: string
  iconName?: string
}

export interface SolutionCapabilityItem {
  id: number
  title: string
  description: string
  deliverables: string[]
  iconName?: string
}

export interface ServiceTechItem {
  name: string
  role: string
  context: string
  category: string
  iconName?: string
}

export interface DevelopmentStepItem {
  stepNumber: number
  title: string
  description: string
  deliverables?: string[]
}

export interface WhyChooseUsItem {
  title: string
  description: string
  iconName?: string
}

export interface ServiceFaqItem {
  question: string
  answer: string
}

export interface ServiceDetails {
  id: string
  slug: string
  title: string
  shortTitle: string
  serviceNumber: string
  category: string
  iconName: string
  highlightColor: string
  image?: string
  hero: ServiceHeroData
  overview: ServiceOverviewData
  importance: ServiceImportanceData
  problemsSolved: ProblemSolvedItem[]
  solutionsCapabilities: SolutionCapabilityItem[]
  technologies: ServiceTechItem[]
  developmentProcess: DevelopmentStepItem[]
  relatedProjectSlugs: string[]
  whyChooseUs: WhyChooseUsItem[]
  faqs: ServiceFaqItem[]
}

