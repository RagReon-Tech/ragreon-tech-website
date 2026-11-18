import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Copy, AlertCircle, ChevronDown, ChevronUp, Home } from 'lucide-react'
import type { ProjectDiscoveryFormData } from '@/types/projectDiscovery.types'
import type { SubmissionResponse } from '@/types/contact.types'

interface ProjectSuccessScreenProps {
  formData: ProjectDiscoveryFormData
  submissionResult: SubmissionResponse
}

export const ProjectSuccessScreen: React.FC<ProjectSuccessScreenProps> = ({
  formData,
  submissionResult,
}) => {
  const [copied, setCopied] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  const enquiryId = submissionResult.enquiryId || 'RAG-RECORDED'

  const handleCopyId = () => {
    navigator.clipboard.writeText(enquiryId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-3xl bg-gradient-to-br from-[#060D1E] via-[#0B1A3A] to-[#040814] text-white p-8 sm:p-12 shadow-2xl border border-blue-900/40 text-center overflow-hidden my-4">
      {/* Decorative background glow accents */}
      <div
        className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Celebratory Icon */}
      <div className="relative inline-flex items-center justify-center mb-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <Check className="w-10 h-10 sm:w-12 sm:h-12 stroke-[3]" />
        </div>
        {/* Confetti particles */}
        <span className="absolute -top-2 -left-3 w-3 h-3 rounded-full bg-amber-400 animate-ping opacity-75" />
        <span className="absolute top-1 -right-3 w-2.5 h-2.5 rounded-full bg-blue-400" />
        <span className="absolute -bottom-2 left-1 w-2.5 h-2.5 rounded-full bg-pink-400" />
        <span className="absolute -bottom-1 -right-2 w-3 h-3 rounded-full bg-emerald-300" />
      </div>

      {/* Main Heading & Subtitle */}
      <div className="relative z-10 space-y-3 mb-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Your Project Journey Starts Here!
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
          Thank you for sharing your vision with RagReon Tech. We've received your project
          enquiry and will review your requirements.
        </p>
      </div>

      {/* Enquiry ID Badge */}
      <div className="relative z-10 inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-blue-950/80 border border-blue-700/60 text-xs sm:text-sm font-mono text-blue-300 shadow-inner mb-6">
        <span className="text-slate-400 font-sans">Enquiry ID:</span>
        <span className="font-bold text-white tracking-wider">{enquiryId}</span>
        <button
          type="button"
          onClick={handleCopyId}
          title="Copy Enquiry ID"
          className="p-1 rounded-md hover:bg-blue-800/60 text-blue-300 hover:text-white transition-colors cursor-pointer"
        >
          {copied ? (
            <span className="text-[11px] font-sans text-emerald-400 font-semibold">Copied!</span>
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* User contact response notice */}
      <p className="text-xs sm:text-sm text-slate-400 mb-8">
        We'll get back to you soon at{' '}
        <span className="text-white font-medium underline underline-offset-4 decoration-blue-500">
          {formData.contact.email}
        </span>
      </p>

      {/* Partial Success notice if email delivery was delayed */}
      {submissionResult.emailSent === false && (
        <div className="relative z-10 mb-6 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs text-left flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Your project brief was saved securely in our CRM system. However, the automated
            dispatch email delivery was delayed. Our team monitors new entries directly.
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/30 transition-all cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <button
          type="button"
          onClick={() => setShowSummary(!showSummary)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-sm transition-all cursor-pointer"
        >
          <span>{showSummary ? 'Hide Summary' : 'View Submitted Summary'}</span>
          {showSummary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Collapsible Project Summary Preview */}
      {showSummary && (
        <div className="relative z-10 mt-6 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left text-xs space-y-3 animate-fadeIn">
          <div className="font-bold text-slate-300 uppercase tracking-wider text-[11px] border-b border-slate-800 pb-2">
            Submitted Project Overview
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
            <div>
              <span className="text-slate-500 block">Domain(s):</span>
              <span className="font-medium text-white">
                {formData.domains.join(', ') || 'Not specified'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Project Type:</span>
              <span className="font-medium text-white">
                {formData.projectTypes.join(', ') || 'Not specified'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Budget:</span>
              <span className="font-medium text-white">
                {formData.scope.budget || 'Not specified'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Timeline:</span>
              <span className="font-medium text-white">
                {formData.scope.timeline || 'Not specified'}
              </span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-slate-500 block">Idea / Requirements:</span>
              <p className="font-medium text-slate-200 line-clamp-3">
                {formData.vision.projectIdea || formData.requirements.keyFeatures}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
