import React from 'react'
import { CheckCircle2, Clock, GitCommit } from 'lucide-react'
import type { DevelopmentStage } from '@/types/project-details.types'

interface DevelopmentProcessProps {
  stages?: DevelopmentStage[]
}

export const DevelopmentProcess: React.FC<DevelopmentProcessProps> = ({ stages }) => {
  if (!stages || stages.length === 0) return null

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200/80" id="development-process">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Engineering Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            How We Built It
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Iterative development milestones from technical discovery to production deployment.
          </p>
        </div>

        {/* Development Stages Sequential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage) => {
            const isCompleted = stage.status === 'Completed' || stage.status === undefined

            return (
              <div
                key={stage.stepNumber}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 space-y-3 shadow-xs relative overflow-hidden"
              >
                {/* Step Number & Status */}
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0066FF] font-mono text-xs font-bold flex items-center justify-center">
                    0{stage.stepNumber}
                  </span>
                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                      <Clock className="w-3 h-3" /> In Progress
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#0B132B]">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DevelopmentProcess

