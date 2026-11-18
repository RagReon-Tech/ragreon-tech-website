import React from 'react'
import { Sparkles, CheckCircle2, Cpu, Wrench } from 'lucide-react'
import type { ProjectSolution as IProjectSolution } from '@/types/project-details.types'

interface ProjectSolutionProps {
  solution?: IProjectSolution
}

export const ProjectSolution: React.FC<ProjectSolutionProps> = ({ solution }) => {
  if (!solution || !solution.approach) return null

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="project-solution">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            {solution.title || 'Our Solution'}
          </h2>
        </div>

        {/* Proposed Approach Main Card */}
        <div className="bg-gradient-to-r from-blue-50/80 via-white to-blue-50/40 rounded-2xl border border-blue-200/90 p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="text-xs font-bold text-[#0066FF] uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#0066FF]" />
            <span>Proposed Engineering Approach</span>
          </div>
          <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
            {solution.approach}
          </p>
          {solution.technicalSolution && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              {solution.technicalSolution}
            </p>
          )}
        </div>

        {/* Implementation Overview & Impact Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solution.implementationOverview && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-[#0066FF]" />
                <span>Implementation Overview</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {solution.implementationOverview}
              </p>
            </div>
          )}

          {solution.howItSolves && solution.howItSolves.length > 0 && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>How the Solution Resolves the Problem</span>
              </div>
              <ul className="space-y-2">
                {solution.howItSolves.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectSolution

