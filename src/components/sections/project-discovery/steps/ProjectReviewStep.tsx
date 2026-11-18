import React from 'react'
import { Edit3, AlertCircle, Loader2, ArrowRight } from 'lucide-react'
import type { ProjectDiscoveryFormData } from '@/types/projectDiscovery.types'
import type { SubmissionResponse } from '@/types/contact.types'

interface ProjectReviewStepProps {
  formData: ProjectDiscoveryFormData
  onEditStep: (step: number) => void
  onSubmit: () => void
  isSubmitting: boolean
  submissionResult: SubmissionResponse | null
}

export const ProjectReviewStep: React.FC<ProjectReviewStepProps> = ({
  formData,
  onEditStep,
  onSubmit,
  isSubmitting,
  submissionResult,
}) => {
  const domainsText =
    formData.domains.length > 0
      ? formData.domains
          .map((d) => (d === 'Other' && formData.otherDomainText ? `Other (${formData.otherDomainText})` : d))
          .join(', ')
      : 'Not Specified / Need Guidance'

  const typesText =
    formData.projectTypes.length > 0
      ? formData.projectTypes.join(', ')
      : 'Not Specified / Need Guidance'

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
          Review Your Project Brief
        </h2>
        <p className="text-sm sm:text-base text-slate-500">
          Please review your details before submitting your project enquiry.
        </p>
      </div>

      {/* Error alert if previous submission attempt failed */}
      {submissionResult && !submissionResult.success && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex flex-col gap-2.5 animate-fadeIn">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold">
                {submissionResult.message || "We couldn't confirm your enquiry submission."}
              </span>
              {submissionResult.details && (
                <p className="text-xs text-rose-600 leading-relaxed">
                  {submissionResult.details}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Structured Review Sections */}
      <div className="space-y-4 pt-1">
        {/* 1. Project Journey & Domain */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Idea & Domain
            </span>
            <button
              type="button"
              onClick={() => onEditStep(1)}
              className="text-xs font-semibold text-[#0066FF] hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 block text-[11px]">Idea Stage:</span>
              <span className="font-semibold text-slate-800">
                {formData.ideaStage || 'Exploring ideas'}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Domains:</span>
              <span className="font-semibold text-slate-800">{domainsText}</span>
            </div>
          </div>
        </div>

        {/* 2. Project Type */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Solution Type
            </span>
            <button
              type="button"
              onClick={() => onEditStep(3)}
              className="text-xs font-semibold text-[#0066FF] hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>
          </div>
          <div className="text-xs sm:text-sm">
            <span className="text-slate-400 block text-[11px]">Selected Types:</span>
            <span className="font-semibold text-slate-800">{typesText}</span>
          </div>
        </div>

        {/* 3. Vision & Requirements */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Vision & Requirements
            </span>
            <button
              type="button"
              onClick={() => onEditStep(4)}
              className="text-xs font-semibold text-[#0066FF] hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>
          </div>
          <div className="space-y-3 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 block text-[11px]">Project Idea / Problem:</span>
              <p className="font-medium text-slate-800 whitespace-pre-line mt-0.5">
                {formData.vision.projectIdea || 'Not specified'}
              </p>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Expected Outcome:</span>
              <p className="font-medium text-slate-800 whitespace-pre-line mt-0.5">
                {formData.vision.expectedOutcome || 'Not specified'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <span className="text-slate-400 block text-[11px]">Target Users:</span>
                <span className="font-semibold text-slate-800">
                  {formData.vision.targetUsers || 'Not specified'}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Existing Resources:</span>
                <span className="font-semibold text-slate-800">
                  {formData.vision.existingResources.length > 0
                    ? formData.vision.existingResources.join(', ')
                    : 'None yet'}
                </span>
              </div>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Key Features & Requirements:</span>
              <p className="font-medium text-slate-800 whitespace-pre-line mt-0.5">
                {formData.requirements.keyFeatures || 'Not specified'}
              </p>
            </div>
            {formData.requirements.constraints && (
              <div>
                <span className="text-slate-400 block text-[11px]">
                  Technologies / Constraints:
                </span>
                <p className="font-medium text-slate-800 whitespace-pre-line mt-0.5">
                  {formData.requirements.constraints}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 4. Scope & Contact */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Scope & Contact
            </span>
            <button
              type="button"
              onClick={() => onEditStep(7)}
              className="text-xs font-semibold text-[#0066FF] hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 block text-[11px]">Budget Range:</span>
              <span className="font-semibold text-slate-800">
                {formData.scope.budget || 'Not specified / Flexible'}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Target Timeline:</span>
              <span className="font-semibold text-slate-800">
                {formData.scope.timeline || 'Flexible / Need Guidance'}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Full Name:</span>
              <span className="font-semibold text-slate-800">
                {formData.contact.fullName || 'Not provided'}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Email Address:</span>
              <span className="font-semibold text-slate-800">
                {formData.contact.email || 'Not provided'}
              </span>
            </div>
            {formData.contact.phone && (
              <div>
                <span className="text-slate-400 block text-[11px]">Phone:</span>
                <span className="font-semibold text-slate-800">{formData.contact.phone}</span>
              </div>
            )}
            {formData.contact.company && (
              <div>
                <span className="text-slate-400 block text-[11px]">Company / Org:</span>
                <span className="font-semibold text-slate-800">{formData.contact.company}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={onSubmit}
          className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting Your Project Brief...</span>
            </>
          ) : (
            <>
              <span>Submit Project Enquiry</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
