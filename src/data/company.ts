import type { CompanyInfo, ValueProposition, Principle } from '@/types/company.types'

// Central Social Media Link Configuration
// Real profile links can be added directly here when available.
export const LINKEDIN_URL = 'https://www.linkedin.com/company/ragreon-tech'
export const GITHUB_URL = 'https://github.com/RagReon-Tech'

export const socialLinks = {
  instagram: 'https://www.instagram.com/ragreon_tech/',
  youtube: 'https://www.youtube.com/@ragreon-2026',
  whatsapp: 'https://wa.me/916383309954',
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
}

export const companyData: CompanyInfo = {
  name: 'RagReon Tech',
  tagline: 'INNOVATE. BUILD. ELEVATE.',
  descriptor: 'SOFTWARE, AI & AUTOMATION',
  email: 'ragreontechofficial@gmail.com',
  phone: '+916383309954',
  phoneDisplay: '+91 63833 09954',
  workingModel: 'Remote & Online',
  workHours: 'Monday – Saturday, 9:00 AM – 7:00 PM',
  responseNotice: 'We typically reply within 24 hours.',
  socialLinks,
}

export const valuePropositions: ValueProposition[] = [
  {
    id: 'multi-domain',
    title: 'Multi-Domain',
    subtitle: 'Technology Skills',
    icon: 'BarChart2',
  },
  {
    id: 'client-focused',
    title: 'Client-Focused',
    subtitle: 'Practical Solutions',
    icon: 'Users',
  },
  {
    id: 'innovative',
    title: 'Innovative',
    subtitle: 'Problem Solving',
    icon: 'Lightbulb',
  },
  {
    id: 'remote-collab',
    title: 'Remote Collaboration',
    subtitle: 'Global Project Delivery',
    icon: 'ShieldCheck',
  },
]

export const principlesData: Principle[] = [
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'Applying modern AI models, smart embedded devices, and contemporary web technologies to tackle challenging technical bottlenecks.',
    icon: 'Zap',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description:
      'Direct, transparent partnership with founders, students, and businesses without bureaucratic overhead or inflated promises.',
    icon: 'Handshake',
  },
  {
    id: 'reliability',
    title: 'Reliability',
    description:
      'Engineering sturdy architectures, disciplined code quality, and maintainable systems designed to function predictably in production.',
    icon: 'CheckCircle',
  },
  {
    id: 'real-world-impact',
    title: 'Real-World Impact',
    description:
      'Focusing strictly on viable, measurable solutions that solve authentic operational and business needs.',
    icon: 'Target',
  },
]
