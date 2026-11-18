import React from 'react'
import {
  Workflow,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react'
import type { RagWorkflowData } from '@/types/project-details.types'

interface RagWorkflowTimelineProps {
  workflow?: RagWorkflowData
  projectTitle: string
}

export const RagWorkflowTimeline: React.FC<RagWorkflowTimelineProps> = ({
  workflow,
  projectTitle,
}) => {
  if (!workflow || !workflow.steps || workflow.steps.length === 0) return null

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80" id="rag-workflow">
      <div className="container-custom space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>End-to-End Information Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            The Retrieval-Augmented Generation (RAG) Workflow
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            How {projectTitle} transforms natural-language regulatory questions into grounded, verified answers
            by coupling dense vector retrieval with local large language model inference.
          </p>
        </div>

        {/* User Example Query Spotlight Banner */}
        {workflow.userExampleQuery && (
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50/40 to-slate-50 rounded-2xl border border-blue-200/80 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#0066FF] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-[#0066FF]" />
                <span>Example Real-World User Query</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#0B132B]">
                "{workflow.userExampleQuery}"
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-mono font-medium text-slate-700 border border-slate-200 shadow-xs shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>Trace Pipeline &rarr;</span>
            </span>
          </div>
        )}

        {/* 8-Step Visual Timeline */}
        <div className="relative">
          {/* Vertical spine line for desktop/tablet */}
          <div
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-emerald-500 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8 relative">
            {workflow.steps.map((step, idx) => {
              const isEven = idx % 2 === 1

              return (
                <div
                  key={step.stepNumber}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-blue-50 text-[#0066FF] font-mono text-xs font-bold flex items-center justify-center border border-blue-100">
                            {step.stepNumber}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Phase 0{step.stepNumber}
                          </span>
                        </div>
                        {step.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                            {step.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#0B132B]">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>

                      {step.detail && (
                        <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-[#0066FF] bg-blue-50/50 p-2.5 rounded-lg border border-blue-100/60">
                          {step.detail}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-[#0B132B] text-white border-4 border-white shadow-md items-center justify-center font-mono text-xs font-bold shrink-0 z-10">
                    {step.stepNumber}
                  </div>

                  {/* Empty Spacer on other side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Deep Dive Cards: Why RAG Is Useful & Hallucination Guardrails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Why RAG is Useful */}
          <div className="bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 rounded-2xl border border-blue-200/90 p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF]">
              <Lightbulb className="w-4 h-4 text-[#0066FF]" />
              <span>Why RAG Is Critical for Standards</span>
            </div>
            <h3 className="text-base font-bold text-[#0B132B]">
              Overcoming Traditional LLM Knowledge Boundaries
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {workflow.whyRagIsUseful}
            </p>
          </div>

          {/* Hallucination Reduction Alert */}
          <div className="bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 rounded-2xl border border-amber-300/80 p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Reliability &amp; Hallucination Disclaimer</span>
            </div>
            <h3 className="text-base font-bold text-[#0B132B]">
              Reduction vs. Elimination of Hallucination Risk
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {workflow.hallucinationNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RagWorkflowTimeline
