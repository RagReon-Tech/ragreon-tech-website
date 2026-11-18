export type IdeaStage =
  | 'I have a clear project idea.'
  | 'I have a problem but need help finding the right solution.'
  | 'I want to explore ideas and possibilities.'
  | 'I want to improve an existing product or system.'

export interface ProjectVisionData {
  projectIdea: string
  expectedOutcome: string
  targetUsers: string
  existingResources: string[]
}

export interface RequirementsData {
  keyFeatures: string
  constraints: string
}

export interface ScopeData {
  budget: string
  timeline: string
}

export interface ContactDetailsData {
  fullName: string
  email: string
  phone: string
  company: string
}

export interface ProjectDiscoveryFormData {
  ideaStage: IdeaStage | ''
  domains: string[]
  otherDomainText?: string
  projectTypes: string[]
  vision: ProjectVisionData
  requirements: RequirementsData
  scope: ScopeData
  contact: ContactDetailsData
}

export interface WizardStepValidation {
  isValid: boolean
  errors: Record<string, string>
}

export interface WizardNavigationStep {
  step: number
  label: string
  shortLabel: string
}

export interface ProjectSubmissionPayload {
  name: string
  email: string
  phone: string
  subject: string
  service: string
  budget: string
  message: string
  source: string
}
