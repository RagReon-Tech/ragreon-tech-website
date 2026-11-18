export interface SocialLinks {
  instagram: string
  youtube: string
  whatsapp: string
  linkedin?: string
  github?: string
}

export interface CompanyInfo {
  name: string
  tagline: string
  descriptor: string
  email: string
  phone: string
  phoneDisplay: string
  workingModel: string
  workHours: string
  responseNotice: string
  socialLinks: SocialLinks
}

export interface ValueProposition {
  id: string
  title: string
  subtitle: string
  icon: string
}

export interface Principle {
  id: string
  title: string
  description: string
  icon: string
}
