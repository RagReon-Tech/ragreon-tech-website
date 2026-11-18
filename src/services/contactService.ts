import type {
  ContactFormData,
  ConsultationFormData,
  SubmissionResponse,
} from '@/types/contact.types'

/**
 * Service to handle project enquiry and consultation submissions.
 * Supports configurable REST endpoint or EmailJS/Formspree integration via environment variables.
 *
 * Requirements addressed:
 * - Do not claim an enquiry was sent unless connected to a working backend or submission service.
 * - Provides a clean, documented integration point for production deployment.
 */
export async function submitContactEnquiry(
  formData: ContactFormData,
): Promise<SubmissionResponse> {
  const apiUrl = (import.meta.env.VITE_CONTACT_API_URL || '').trim()
  const formspreeId = (import.meta.env.VITE_FORMSPREE_ID || '').trim()

  // If a live custom API endpoint is configured (e.g. Google Apps Script Web App)
  if (apiUrl) {
    try {
      // Google Apps Script Web Apps require simple POST (text/plain) to avoid CORS preflight (OPTIONS),
      // and redirect: 'follow' to follow the 302 redirect to script.googleusercontent.com
      const submissionType = formData.submissionType || 'consultation'
      const payload: Record<string, unknown> = {
        submissionType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        subject: formData.subject || '',
        service: formData.service || '',
        budget: formData.budget || '',
        message: formData.message || '',
        timestamp: new Date().toISOString(),
        source:
          submissionType === 'project_discovery'
            ? 'RagReon Tech Project Discovery Wizard'
            : 'RagReon Tech Official Website',
      }

      if (submissionType === 'project_discovery') {
        payload.company = formData.company || ''
        payload.ideaStage = formData.ideaStage || ''
        payload.domains = formData.domains || []
        payload.otherDomainText = formData.otherDomainText || ''
        payload.projectTypes = formData.projectTypes || []
        payload.projectIdea = formData.projectIdea || ''
        payload.expectedOutcome = formData.expectedOutcome || ''
        payload.targetUsers = formData.targetUsers || ''
        payload.existingResources = formData.existingResources || []
        payload.keyFeatures = formData.keyFeatures || ''
        payload.constraints = formData.constraints || ''
        payload.timeline = formData.timeline || ''
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
        redirect: 'follow',
      })

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`)
      }

      const data = await response.json().catch(() => null)

      if (data && typeof data === 'object') {
        // Format details safely in case it is an object of field errors (e.g. { email: '...', message: '...' })
        const detailsMessage = data.details
          ? typeof data.details === 'object'
            ? Object.entries(data.details as Record<string, string>)
                .map(([field, msg]) => `${field}: ${msg}`)
                .join(', ')
            : String(data.details)
          : data.error
            ? String(data.error)
            : undefined

        if (data.success === false) {
          return {
            success: false,
            isLiveSubmission: true,
            message: data.message || "We couldn't confirm your enquiry submission. Please try again.",
            details: detailsMessage,
          }
        }

        if (data.success === true) {
          return {
            success: true,
            isLiveSubmission: true,
            enquiryId: data.enquiryId,
            emailSent: data.emailSent !== false,
            message:
              data.message ||
              'Thank you for reaching out. Your project enquiry has been saved successfully.',
          }
        }

        // Response object did not explicitly indicate success
        return {
          success: false,
          isLiveSubmission: true,
          message: data.message || "We couldn't confirm your enquiry submission. Please try again.",
          details: detailsMessage || 'The backend returned an unconfirmed response status.',
        }
      }

      // If data is null or cannot be parsed as JSON, do NOT claim success
      return {
        success: false,
        isLiveSubmission: true,
        message: "We couldn't confirm your enquiry submission. Please try again.",
        details: 'Received an invalid or unparseable response from the server.',
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Unknown network error occurred.'
      return {
        success: false,
        isLiveSubmission: true,
        message: "We couldn't confirm your enquiry submission. Please try again.",
        details: errorMessage,
      }
    }
  }

  // If Formspree endpoint is configured
  if (formspreeId) {
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`Formspree error: ${response.status}`)
      }

      return {
        success: true,
        isLiveSubmission: true,
        message: 'Enquiry successfully sent via Formspree!',
      }
    } catch (err: unknown) {
      return {
        success: false,
        isLiveSubmission: true,
        message: 'Formspree submission failed.',
        details: err instanceof Error ? err.message : String(err),
      }
    }
  }

  // No backend service is configured yet: Clean integration point
  // Return failure status so no fake success state is claimed
  await new Promise((resolve) => setTimeout(resolve, 300))

  return {
    success: false,
    isLiveSubmission: false,
    message: "We couldn't confirm your enquiry submission. Please try again.",
    details:
      'Backend submission endpoint (VITE_CONTACT_API_URL) is not configured. Please deploy the Google Apps Script Web App and set VITE_CONTACT_API_URL in your .env file, or send directly via Email or WhatsApp below.',
  }
}

/**
 * Handles consultation form submission specifically
 */
export async function submitConsultationEnquiry(
  data: ConsultationFormData,
): Promise<SubmissionResponse> {
  return submitContactEnquiry({
    submissionType: 'consultation',
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    budget: data.budget,
    subject: `Project Consultation Request: ${data.service}`,
    message: data.message,
  })
}

/**
 * Generates a pre-filled mailto link so the user can open their mail client directly
 */
export function generateMailtoUrl(formData: ContactFormData | ConsultationFormData): string {
  const recipient = 'ragreontechofficial@gmail.com'
  const subjectText =
    'subject' in formData && formData.subject
      ? `[Project Enquiry] ${formData.subject}`
      : `[Project Consultation] from ${formData.name || 'Website Visitor'}`
  const subject = encodeURIComponent(subjectText)

  const bodyLines = [
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    formData.phone ? `Phone: ${formData.phone}` : null,
    `Service Interested: ${formData.service || 'General Enquiry'}`,
    formData.budget ? `Project Budget: ${formData.budget}` : null,
    'subject' in formData && formData.subject ? `Subject: ${formData.subject}` : null,
    '',
    'Project Details / Message:',
    formData.message,
    '',
    '--- Sent from RagReon Tech Official Website ---',
  ].filter((item): item is string => item !== null)

  return `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyLines.join('\n'))}`
}

/**
 * Generates a pre-filled WhatsApp link for direct instant communication
 */
export function generateWhatsAppUrl(formData: ContactFormData | ConsultationFormData): string {
  const phone = '916383309954'
  const lines = [
    `*Hello RagReon Tech Team!*`,
    `My name is: ${formData.name || 'Visitor'}`,
    formData.email ? `Email: ${formData.email}` : null,
    formData.phone ? `Phone: ${formData.phone}` : null,
    formData.service ? `Interested Service: ${formData.service}` : null,
    formData.budget ? `Project Budget: ${formData.budget}` : null,
    'subject' in formData && formData.subject ? `Subject: ${formData.subject}` : null,
    '',
    `*Project Details:*`,
    formData.message || 'I would like to discuss a project with RagReon Tech.',
  ].filter((item): item is string => item !== null)

  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`
}

