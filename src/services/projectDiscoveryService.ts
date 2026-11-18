import { submitContactEnquiry } from '@/services/contactService'
import type { SubmissionResponse } from '@/types/contact.types'
import type { ProjectDiscoveryFormData } from '@/types/projectDiscovery.types'

/**
 * Formats full wizard data into a human-readable, structured Project Brief
 * that Google Sheets and Gmail notifications can display cleanly.
 */
export function formatProjectBrief(data: ProjectDiscoveryFormData): string {
  const sections: string[] = []

  sections.push('=== RAGREON TECH - PROJECT DISCOVERY BRIEF ===')
  sections.push(`Journey Stage: ${data.ideaStage || 'Not specified'}`)

  const domainList =
    data.domains.length > 0
      ? data.domains
          .map((d) => (d === 'Other' && data.otherDomainText ? `Other (${data.otherDomainText})` : d))
          .join(', ')
      : 'Not Sure Yet / Need Guidance'
  sections.push(`Domains: ${domainList}`)

  const typesList =
    data.projectTypes.length > 0 ? data.projectTypes.join(', ') : 'Not Sure Yet / Need Guidance'
  sections.push(`Project Types: ${typesList}`)

  sections.push('')
  sections.push('--- VISION & GOALS ---')
  sections.push(`Project Idea / Problem:\n${data.vision.projectIdea || 'Not specified'}`)
  sections.push(`Expected Outcome:\n${data.vision.expectedOutcome || 'Not specified'}`)
  sections.push(`Target Users: ${data.vision.targetUsers || 'Not specified'}`)
  sections.push(
    `Existing Resources: ${
      data.vision.existingResources.length > 0
        ? data.vision.existingResources.join(', ')
        : 'None yet'
    }`,
  )

  sections.push('')
  sections.push('--- REQUIREMENTS & CAPABILITIES ---')
  sections.push(`Key Features:\n${data.requirements.keyFeatures || 'Not specified'}`)
  if (data.requirements.constraints) {
    sections.push(`Technical / Integrations / Constraints:\n${data.requirements.constraints}`)
  }

  sections.push('')
  sections.push('--- ESTIMATED SCOPE ---')
  sections.push(`Project Budget: ${data.scope.budget || 'Not specified / Flexible'}`)
  sections.push(`Target Timeline: ${data.scope.timeline || 'Flexible / Need Guidance'}`)

  sections.push('')
  sections.push('--- CLIENT CONTACT INFO ---')
  sections.push(`Full Name: ${data.contact.fullName}`)
  sections.push(`Email Address: ${data.contact.email}`)
  if (data.contact.phone) {
    sections.push(`Phone: ${data.contact.phone}`)
  }
  if (data.contact.company) {
    sections.push(`Company / Organization: ${data.contact.company}`)
  }

  return sections.join('\n')
}

/**
 * Submits the Project Discovery Brief to Google Apps Script backend CRM
 */
export async function submitProjectDiscovery(
  data: ProjectDiscoveryFormData,
): Promise<SubmissionResponse> {
  const primaryService =
    data.domains.length > 0
      ? data.domains[0] === 'Other' && data.otherDomainText
        ? `Other: ${data.otherDomainText}`
        : data.domains[0]
      : 'Project Consultation'

  const briefMessage = formatProjectBrief(data)

  const payload = {
    submissionType: 'project_discovery' as const,
    name: data.contact.fullName.trim(),
    email: data.contact.email.trim(),
    phone: data.contact.phone ? data.contact.phone.trim() : '',
    service: primaryService,
    budget: data.scope.budget || 'Not specified',
    subject: `Project Discovery Brief: ${data.projectTypes[0] || primaryService}`,
    message: briefMessage,
    // Explicit structured fields
    company: data.contact.company ? data.contact.company.trim() : '',
    ideaStage: data.ideaStage || '',
    domains: data.domains,
    otherDomainText: data.otherDomainText || '',
    projectTypes: data.projectTypes,
    projectIdea: data.vision.projectIdea,
    expectedOutcome: data.vision.expectedOutcome,
    targetUsers: data.vision.targetUsers,
    existingResources: data.vision.existingResources,
    keyFeatures: data.requirements.keyFeatures,
    constraints: data.requirements.constraints || '',
    timeline: data.scope.timeline || '',
  }

  return submitContactEnquiry(payload)
}
