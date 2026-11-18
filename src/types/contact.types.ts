export type SubmissionType = 'consultation' | 'project_discovery'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  service: string
  message: string
  phone?: string
  budget?: string
  submissionType?: SubmissionType
  // Optional structured fields for project discovery workflow
  company?: string
  ideaStage?: string
  domains?: string[]
  otherDomainText?: string
  projectTypes?: string[]
  projectIdea?: string
  expectedOutcome?: string
  targetUsers?: string
  existingResources?: string[]
  keyFeatures?: string
  constraints?: string
  timeline?: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  subject?: string
  service?: string
  message?: string
  phone?: string
  budget?: string
}

export interface ConsultationFormData {
  name: string
  email: string
  phone?: string
  service: string
  budget?: string
  message: string
}

export interface ConsultationFormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  budget?: string
  message?: string
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'demo_mode' | 'error'

export interface SubmissionResponse {
  success: boolean
  isLiveSubmission: boolean
  message: string
  details?: string
  enquiryId?: string
  emailSent?: boolean
}

