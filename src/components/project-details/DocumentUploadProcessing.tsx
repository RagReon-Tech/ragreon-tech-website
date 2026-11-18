import React from 'react'
import {
  UploadCloud,
  FileText,
  ShieldCheck,
  AlertTriangle,
  Lock,
  HardDrive,
  Workflow,
} from 'lucide-react'
import type { DocumentProcessingData } from '@/types/project-details.types'

interface DocumentUploadProcessingProps {
  data?: DocumentProcessingData
  projectTitle: string
}

export const DocumentUploadProcessing: React.FC<DocumentUploadProcessingProps> = ({
  data,
  projectTitle,
}) => {
  if (!data) return null

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="document-processing">
      <div className="container-custom space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-xs font-bold uppercase tracking-wider">
            <UploadCloud className="w-3.5 h-3.5" />
            <span>Document Ingestion &amp; Isolation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Document Upload &amp; Ephemeral Processing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            In {projectTitle}, users can supply private product specifications, lab testing certificates, or component drawings
            to formulate contextual Q&amp;A queries evaluated against official standards.
          </p>
        </div>

        {/* Upload Limits & Supported Formats Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Supported Formats */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0066FF]" />
              <span>Supported Formats</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {data.supportedFormats.map((fmt) => (
                <span
                  key={fmt}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-white text-slate-800 border border-slate-200 shadow-xs"
                >
                  .{fmt.toLowerCase()}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Supports digital PDF text extractions and standard raster images.
            </p>
          </div>

          {/* Files Limit */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-indigo-600" />
              <span>Batch Ingestion Limit</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#0B132B] font-mono">
              Max {data.maxFilesPerRequest} Files / Request
            </div>
            <p className="text-[11px] text-slate-500">
              Multiple related annexures or technical sheets can be uploaded in a single session.
            </p>
          </div>

          {/* File Size Limit */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>Individual Size Limit</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-[#0B132B] font-mono">
              Max {data.maxFileSizeMb} MB / File
            </div>
            <p className="text-[11px] text-slate-500">
              Strict memory limits protect backend ASGI workers against heap starvation.
            </p>
          </div>
        </div>

        {/* The 13-Step Ingestion & Question-Answering Pipeline */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Workflow className="w-4 h-4 text-[#0066FF]" />
            <span>13-Step Document Ingestion &amp; Question-Answering Pipeline</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {data.workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 p-3.5 space-y-1.5 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-blue-50 text-[#0066FF] font-mono text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-[#0B132B]">Stage {idx + 1}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Critical Architecture Alerts: Document Isolation Principle & OCR Notice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Document Isolation Principle */}
          <div className="bg-emerald-50/70 rounded-2xl border border-emerald-300/80 p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Document-Isolation Principle</span>
            </div>
            <h3 className="text-base font-bold text-emerald-950">
              Zero Database Pollution Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-emerald-900/80 leading-relaxed">
              {data.documentIsolationPrinciple}
            </p>
          </div>

          {/* OCR Limitation Notice */}
          <div className="bg-amber-50/70 rounded-2xl border border-amber-300/80 p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>OCR Implementation &amp; Verification Status</span>
            </div>
            <h3 className="text-base font-bold text-amber-950">
              Native Tesseract Dependency Pending
            </h3>
            <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed">
              {data.ocrLimitationNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DocumentUploadProcessing
