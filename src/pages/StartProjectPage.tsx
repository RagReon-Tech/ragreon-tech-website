import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProjectProgressSidebar } from '@/components/sections/project-discovery/ProjectProgressSidebar'
import { ProjectProgressBar } from '@/components/sections/project-discovery/ProjectProgressBar'
import { IdeaDiscoveryStep } from '@/components/sections/project-discovery/steps/IdeaDiscoveryStep'
import { DomainSelectionStep } from '@/components/sections/project-discovery/steps/DomainSelectionStep'
import { ProjectTypeStep } from '@/components/sections/project-discovery/steps/ProjectTypeStep'
import { ProjectVisionStep } from '@/components/sections/project-discovery/steps/ProjectVisionStep'
import { RequirementsStep } from '@/components/sections/project-discovery/steps/RequirementsStep'
import { BudgetTimelineStep } from '@/components/sections/project-discovery/steps/BudgetTimelineStep'
import { ContactDetailsStep } from '@/components/sections/project-discovery/steps/ContactDetailsStep'
import { ProjectReviewStep } from '@/components/sections/project-discovery/steps/ProjectReviewStep'
import { ProjectSuccessScreen } from '@/components/sections/project-discovery/ProjectSuccessScreen'
import { submitProjectDiscovery } from '@/services/projectDiscoveryService'
import type { ProjectDiscoveryFormData, IdeaStage } from '@/types/projectDiscovery.types'
import type { SubmissionResponse } from '@/types/contact.types'

const initialFormData: ProjectDiscoveryFormData = {
  ideaStage: 'I have a clear project idea.',
  domains: ['Data Analytics & Business Intelligence'],
  otherDomainText: '',
  projectTypes: ['Analytics Dashboard'],
  vision: {
    projectIdea: '',
    expectedOutcome: '',
    targetUsers: '',
    existingResources: [],
  },
  requirements: {
    keyFeatures: '',
    constraints: '',
  },
  scope: {
    budget: '',
    timeline: '',
  },
  contact: {
    fullName: '',
    email: '',
    phone: '',
    company: '',
  },
}

export const StartProjectPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([1])
  const [formData, setFormData] = useState<ProjectDiscoveryFormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  // Scroll to top of the wizard container on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStep, isSuccess])

  // Validate step before advancing
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.ideaStage) {
        setFormData((prev) => ({
          ...prev,
          ideaStage: 'I want to explore ideas and possibilities.',
        }))
      }
    }

    if (step === 2) {
      if (formData.domains.length === 0) {
        setFormData((prev) => ({
          ...prev,
          domains: ['Not Sure Yet / Need Guidance'],
        }))
      }
    }

    if (step === 3) {
      if (formData.projectTypes.length === 0) {
        setFormData((prev) => ({
          ...prev,
          projectTypes: ['Other / Not Sure Yet'],
        }))
      }
    }

    if (step === 4) {
      if (!formData.vision.projectIdea.trim()) {
        newErrors.projectIdea = 'Please describe your project idea or problem.'
      } else if (formData.vision.projectIdea.trim().length < 5) {
        newErrors.projectIdea = 'Please provide a bit more detail (at least 5 characters).'
      }

      if (!formData.vision.expectedOutcome.trim()) {
        newErrors.expectedOutcome = 'Please tell us what success looks like.'
      } else if (formData.vision.expectedOutcome.trim().length < 3) {
        newErrors.expectedOutcome = 'Please provide an expected outcome.'
      }

      if (!formData.vision.targetUsers) {
        newErrors.targetUsers = 'Please select who the primary users will be.'
      }
    }

    if (step === 5) {
      if (!formData.requirements.keyFeatures.trim()) {
        newErrors.keyFeatures = 'Please list at least one key feature or requirement.'
      } else if (formData.requirements.keyFeatures.trim().length < 5) {
        newErrors.keyFeatures = 'Please provide a bit more detail (at least 5 characters).'
      }
    }

    if (step === 7) {
      if (!formData.contact.fullName.trim()) {
        newErrors.fullName = 'Full name is required.'
      } else if (formData.contact.fullName.trim().length < 2) {
        newErrors.fullName = 'Name must be at least 2 characters.'
      }

      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      if (!formData.contact.email.trim()) {
        newErrors.email = 'Email address is required.'
      } else if (!emailRegex.test(formData.contact.email.trim())) {
        newErrors.email = 'Please provide a valid email address.'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps((prev) => [...prev, currentStep])
      }
      setCurrentStep((prev) => Math.min(prev + 1, 8))
    }
  }

  const handleBack = () => {
    setErrors({})
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleStepJump = (step: number) => {
    setErrors({})
    setCurrentStep(step)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmissionResult(null)

    try {
      const result = await submitProjectDiscovery(formData)
      setSubmissionResult(result)

      if (result.success) {
        setIsSuccess(true)
      }
    } catch (err) {
      setSubmissionResult({
        success: false,
        isLiveSubmission: false,
        message: 'A network error occurred while submitting. Please check your connection and retry.',
        details: err instanceof Error ? err.message : String(err),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-8 sm:py-12 bg-[#F8FAFC] min-h-[calc(100vh-80px)]">
      <div className="container-custom">
        {isSuccess && submissionResult ? (
          <ProjectSuccessScreen
            formData={formData}
            submissionResult={submissionResult}
          />
        ) : (
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Desktop Left-Side Vertical Step Navigation */}
            <ProjectProgressSidebar
              currentStep={currentStep}
              completedSteps={completedSteps}
              onStepClick={handleStepJump}
            />

            {/* Main Content Card */}
            <div className="flex-1 w-full bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
              <ProjectProgressBar currentStep={currentStep} totalSteps={8} />

              {/* Step View Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentStep === 1 && (
                    <IdeaDiscoveryStep
                      selectedStage={formData.ideaStage}
                      onChange={(stage: IdeaStage) =>
                        setFormData((prev) => ({ ...prev, ideaStage: stage }))
                      }
                    />
                  )}

                  {currentStep === 2 && (
                    <DomainSelectionStep
                      selectedDomains={formData.domains}
                      otherDomainText={formData.otherDomainText}
                      onChange={(domains, otherText) =>
                        setFormData((prev) => ({
                          ...prev,
                          domains,
                          otherDomainText: otherText,
                        }))
                      }
                    />
                  )}

                  {currentStep === 3 && (
                    <ProjectTypeStep
                      selectedTypes={formData.projectTypes}
                      onChange={(types) =>
                        setFormData((prev) => ({ ...prev, projectTypes: types }))
                      }
                    />
                  )}

                  {currentStep === 4 && (
                    <ProjectVisionStep
                      vision={formData.vision}
                      errors={errors}
                      onChange={(vision) =>
                        setFormData((prev) => ({ ...prev, vision }))
                      }
                    />
                  )}

                  {currentStep === 5 && (
                    <RequirementsStep
                      requirements={formData.requirements}
                      errors={errors}
                      onChange={(requirements) =>
                        setFormData((prev) => ({ ...prev, requirements }))
                      }
                    />
                  )}

                  {currentStep === 6 && (
                    <BudgetTimelineStep
                      scope={formData.scope}
                      onChange={(scope) =>
                        setFormData((prev) => ({ ...prev, scope }))
                      }
                    />
                  )}

                  {currentStep === 7 && (
                    <ContactDetailsStep
                      contact={formData.contact}
                      errors={errors}
                      onChange={(contact) =>
                        setFormData((prev) => ({ ...prev, contact }))
                      }
                    />
                  )}

                  {currentStep === 8 && (
                    <ProjectReviewStep
                      formData={formData}
                      onEditStep={handleStepJump}
                      onSubmit={handleSubmit}
                      isSubmitting={isSubmitting}
                      submissionResult={submissionResult}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Bottom Step Actions (Steps 1 through 7) */}
              {currentStep < 8 && (
                <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-100">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer group"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              )}

              {/* In Step 8, show Back button at bottom left if not submitting */}
              {currentStep === 8 && (
                <div className="flex items-center justify-start pt-4">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StartProjectPage
