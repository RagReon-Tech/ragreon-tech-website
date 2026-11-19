import { companyData } from './company'
import { servicesData } from './services'
import { projectsData } from './projects'
import { projectContributorsMap } from './contributors'
import type { ProjectCardData } from '@/types/assistant.types'

/**
 * Builds a project card object directly from existing project registries.
 */
export function getProjectCardBySlug(slug: string): ProjectCardData | undefined {
  const project = projectsData.find((p) => p.slug === slug || p.id === slug)
  if (!project) return undefined

  const contributors = projectContributorsMap[project.slug] || []
  const contributorsText =
    contributors.length > 0
      ? contributors.map((c) => c.name).join(', ')
      : 'Pending Verification (Team Project)'

  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    description: project.description,
    category: project.category,
    domain: project.domain,
    status: project.status,
    techStack: project.techStack,
    image: project.image,
    githubUrl: project.githubUrl,
    demoUrl: project.demoUrl,
    contributorsText,
  }
}

/**
 * Parses assistant response text to extract [[PROJECT:slug]] tags and convert them into
 * rich project cards while cleaning up the raw tags from the rendered text.
 */
export function extractProjectCardsFromText(text: string): {
  cleanedText: string
  cards: ProjectCardData[]
} {
  const projectTagRegex = /\[\[PROJECT:([a-zA-Z0-9_-]+)\]\]/g
  const matchedSlugs: string[] = []
  let match: RegExpExecArray | null

  while ((match = projectTagRegex.exec(text)) !== null) {
    if (match[1] && !matchedSlugs.includes(match[1])) {
      matchedSlugs.push(match[1])
    }
  }

  const cards: ProjectCardData[] = []
  for (const slug of matchedSlugs) {
    const card = getProjectCardBySlug(slug)
    if (card) {
      cards.push(card)
    }
  }

  const cleanedText = text.replace(projectTagRegex, '').trim()
  return { cleanedText, cards }
}

/**
 * Assembles the authoritative system instruction grounding text from live TypeScript registries
 * in a token-efficient, high-density format for sub-3-second inference.
 */
export function buildRagReonKnowledge(): string {
  // 1. Company Information
  const companySection = `
=== RAGREON TECH PROFILE ===
Name: ${companyData.name} | Tagline: "${companyData.tagline}" | Descriptor: ${companyData.descriptor}
Model: ${companyData.workingModel} (Worldwide remote client collaboration)
Email: ${companyData.email} | Phone: ${companyData.phoneDisplay} | WhatsApp: ${companyData.socialLinks.whatsapp}
LinkedIn: ${companyData.socialLinks.linkedin} | GitHub: ${companyData.socialLinks.github}
Hours: ${companyData.workHours} | Response: ${companyData.responseNotice}
What We Do: Remote-first freelance technology team building practical software, AI systems, data analytics pipelines, and IoT embedded devices.
Project Inquiries: Visitors can start a project via /contact or WhatsApp.
`.trim()

  // 2. Services & 7 Core Domains
  const servicesList = servicesData
    .map(
      (s) =>
        `- [${s.serviceNumber}] ${s.title} (/services/${s.slug}): ${s.shortDescription} (Skills: ${s.skills.join(', ')})`,
    )
    .join('\n')

  const servicesSection = `
=== 7 SERVICE DOMAINS ===
${servicesList}
`.trim()

  // 3. Projects (21 Total)
  const projectsList = projectsData
    .map((p) => {
      const contributors = projectContributorsMap[p.slug] || []
      const contributorStatus =
        contributors.length > 0
          ? `Contributor: ${contributors.map((c) => c.name).join(', ')}`
          : 'Contributor: Pending Verification (Team Project)'

      return `- [${p.slug}] "${p.title}" | Status: ${p.status} | Domain: ${p.domain} | Tech: ${p.techStack.join(', ')} | ${contributorStatus} | Route: /portfolio/${p.slug} | Summary: ${p.description}`
    })
    .join('\n')

  const projectsSection = `
=== 21 PORTFOLIO PROJECTS ===
${projectsList}
`.trim()

  // 4. Co-Founders & Personal Portfolios
  const sreeramProjects = Object.entries(projectContributorsMap)
    .filter(([_, list]) => list.some((c) => c.portfolioUrl === '/sreeram'))
    .map(([slug]) => slug)

  const raghuProjects = Object.entries(projectContributorsMap)
    .filter(([_, list]) => list.some((c) => c.portfolioUrl === '/raghuraman'))
    .map(([slug]) => slug)

  const pendingProjects = Object.entries(projectContributorsMap)
    .filter(([_, list]) => list.length === 0)
    .map(([slug]) => slug)

  const foundersSection = `
=== CO-FOUNDERS & CONTRIBUTIONS ===
1. Sreeram Ganesh S:
   Role: Co-Founder | Data Analytics & AI | Portfolio: /sreeram
   Email: sreeramganesh00719@gmail.com | Phone: +91 6383309954 | LinkedIn: https://www.linkedin.com/in/sreeram-ganesh-s | GitHub: https://github.com/sreeramganesh
   Skills: Data Analytics, SQL, Python, Power BI, Data Science, Machine Learning
   Verified Projects (10): ${sreeramProjects.join(', ')}

2. Raghuraman:
   Role: Co-Founder | IoT & Embedded Systems | Portfolio: /raghuraman
   Email: krraghu240906@gmail.com | Phone: +91 63695 19752 | LinkedIn: https://www.linkedin.com/in/raghuraman-k-89b41a3a0/ | GitHub: https://github.com/k-raghu24
   Skills: ESP32, Raspberry Pi, Sensor Integration, Embedded Systems, IoT, Python
   Verified Projects (5): ${raghuProjects.join(', ')}

3. Projects with Contributors Pending Verification (6 Team Projects - NOT assigned to either founder):
   ${pendingProjects.join(', ')}
`.trim()

  // 5. System Instructions & Rules
  const instructions = `
=== GROUNDING INSTRUCTIONS & FORMATTING RULES ===
You are "RagReon AI", official virtual assistant for RagReon Tech.
1. GROUNDING: Answer ONLY using the facts above. Never invent facts, services, projects, or achievements.
2. PROJECT STATUS:
   - 18 projects are "Completed".
   - 3 projects are "In Progress": "BloodChain AI" [bloodchain-ai], "BIS SmartAssist" [bis-smartassist], and "Plant Disease Prediction Using Deep Learning and CNN" [plant-disease-prediction]. Always state their status clearly.
3. CONTRIBUTOR ATTRIBUTION:
   - Sreeram Ganesh S is verified on 10 projects.
   - Raghuraman is verified on 5 projects.
   - 6 projects have "Contributors Pending Verification". NEVER attribute these 6 to either founder.
4. RICH PROJECT CARDS:
   Whenever you mention or recommend any specific project, output its tag on its own line:
   [[PROJECT:project-slug]]
   For example: [[PROJECT:loangauge-ai]]
   The frontend automatically renders an interactive card with cover image, tags, and clickable detail buttons.
5. LINKS:
   - Start a Project: [Start a Project](/contact)
   - Sreeram's Portfolio: [View Sreeram's Portfolio](/sreeram)
   - Raghuraman's Portfolio: [View Raghuraman's Portfolio](/raghuraman)
   - Services: [Explore Services](/services)
6. TONE: Professional, concise, friendly. Use bullet points and bold headers. Avoid walls of text.
`.trim()

  return `${companySection}\n\n${servicesSection}\n\n${projectsSection}\n\n${foundersSection}\n\n${instructions}`
}

export const ragreonSystemInstruction = buildRagReonKnowledge()

export const defaultSuggestedQuestions: { id: string; text: string }[] = [
  { id: 'about-ragreon', text: 'What is RagReon Tech?' },
  { id: 'services-overview', text: 'What services do you offer?' },
  { id: 'ai-projects', text: 'Tell me about your AI projects' },
  { id: 'data-analytics', text: 'Show me your Data Analytics projects' },
  { id: 'co-founders', text: 'Who are the co-founders?' },
  { id: 'sreeram-projects', text: "Show me Sreeram's projects" },
  { id: 'raghu-projects', text: "Show me Raghuraman's projects" },
  { id: 'start-project', text: 'How can I start a project with you?' },
]

