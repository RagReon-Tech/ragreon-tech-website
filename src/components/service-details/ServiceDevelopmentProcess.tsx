import React from 'react'
import { GitBranch, CheckCircle2 } from 'lucide-react'
import type { DevelopmentStepItem } from '@/types/service-details.types'

interface ServiceDevelopmentProcessProps {
  process: DevelopmentStepItem[]
}

export const ServiceDevelopmentProcess: React.FC<ServiceDevelopmentProcessProps> = ({ process }) => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <GitBranch className="w-4 h-4 text-[#0066FF]" />
            <span>Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Our Development Approach & Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every project follows a disciplined engineering pipeline designed for transparency, rapid iteration, and verifiable outcomes from initial discovery to long-term operations.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((step) => (
            <div
              key={step.stepNumber}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center font-mono font-bold text-sm group-hover:scale-105 transition-transform">
                    0{step.stepNumber}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Phase {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              {step.deliverables && step.deliverables.length > 0 && (
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Phase Deliverables
                  </div>
                  {step.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceDevelopmentProcess

