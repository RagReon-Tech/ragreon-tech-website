import React from 'react'
import { AlertCircle, ShieldAlert } from 'lucide-react'
import type { ProblemSolvedItem } from '@/types/service-details.types'
import { ServiceIcon } from './ServiceIcon'

interface ServiceProblemsWeSolveProps {
  problems: ProblemSolvedItem[]
}

export const ServiceProblemsWeSolve: React.FC<ServiceProblemsWeSolveProps> = ({ problems }) => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-600 tracking-wider uppercase">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>Targeted Challenges</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Critical Problems We Solve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Organizations face operational bottlenecks, stale telemetry, and technical debt that impede growth. Here is how our engineering directly addresses these friction points.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-rose-200 hover:bg-rose-50/20 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-2xs group-hover:scale-105 transition-transform">
                    <ServiceIcon name={problem.iconName} className="w-5 h-5 text-rose-600" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    Challenge 0{problem.id}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0B132B] group-hover:text-rose-950 transition-colors">
                  {problem.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {problem.explanation}
                </p>
              </div>

              {/* Impact / Risk Badge */}
              <div className="pt-3 border-t border-slate-200/80 flex items-start gap-2 text-xs font-medium text-slate-700 bg-white/80 p-3 rounded-xl border border-slate-200/60">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-rose-700">Business Impact: </span>
                  <span>{problem.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceProblemsWeSolve

