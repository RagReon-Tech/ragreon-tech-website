import React from 'react'
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react'
import type { ProjectOutcomes as IProjectOutcomes } from '@/types/project-details.types'

interface ProjectOutcomesProps {
  outcomes?: IProjectOutcomes
}

export const ProjectOutcomes: React.FC<ProjectOutcomesProps> = ({ outcomes }) => {
  if (!outcomes) return null

  const hasOutcomes =
    (outcomes.completedFunctionalities && outcomes.completedFunctionalities.length > 0) ||
    (outcomes.technicalAchievements && outcomes.technicalAchievements.length > 0) ||
    (outcomes.testingResults && outcomes.testingResults.length > 0) ||
    (outcomes.demonstratedCapabilities && outcomes.demonstratedCapabilities.length > 0) ||
    (outcomes.verifiedMetrics && outcomes.verifiedMetrics.length > 0)

  if (!hasOutcomes) return null

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="project-outcomes">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Demonstrated Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Project Outcomes
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Verified functional milestones and technical capabilities delivered by this implementation.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Completed Functionalities */}
          {outcomes.completedFunctionalities && outcomes.completedFunctionalities.length > 0 && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Delivered Functionalities</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {outcomes.completedFunctionalities.map((func, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{func}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Achievements */}
          {outcomes.technicalAchievements && outcomes.technicalAchievements.length > 0 && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#0066FF]" />
                <span>Technical Achievements</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {outcomes.technicalAchievements.map((achieve, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>{achieve}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Demonstrated Capabilities / Testing */}
          {outcomes.demonstratedCapabilities && outcomes.demonstratedCapabilities.length > 0 && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-indigo-500" />
                <span>Verified Capabilities</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {outcomes.demonstratedCapabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>{cap}</span>
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

export default ProjectOutcomes
