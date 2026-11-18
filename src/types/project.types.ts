export type ProjectStatus = 'Completed' | 'In Progress'

export type ProjectDomain =
  | 'Web Development'
  | 'AI & Machine Learning'
  | 'Data Science'
  | 'Data Analytics'
  | 'IoT & Embedded Systems'
  | 'Python Development'
  | 'Deep Learning & Computer Vision'

export interface ProjectItem {
  id: string
  slug: string
  title: string
  shortTitle?: string
  description: string
  category: string
  domain: ProjectDomain
  domains?: ProjectDomain[]
  status: ProjectStatus
  techStack: string[]
  image?: string
  featured?: boolean
  challenge?: string
  solution?: string
  features?: string[]
  metrics?: string
  githubUrl?: string
  demoUrl?: string
}

export interface PortfolioStats {
  completedCount: number
  ongoingCount: number
  domainsCount: number
}
