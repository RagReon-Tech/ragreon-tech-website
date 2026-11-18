import React from 'react'
import { Target, CheckCircle2 } from 'lucide-react'
import type { ProjectObjectiveItem } from '@/types/project-details.types'
import { renderNamedIcon } from './iconHelper'

interface ProjectObjectivesProps {
  objectives?: ProjectObjectiveItem[]
  projectTitle: string
}

export const ProjectObjectives: React.FC<ProjectObjectivesProps> = ({
  objectives,
  projectTitle,
}) => {
  if (!objectives || objectives.length === 0) return null

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80" id="project-objectives">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" />
            <span>Strategic Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Project Objectives
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Core functional and architectural goals guiding the engineering and verification of {projectTitle}.
          </p>
        </div>

        {/* 10 Objectives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {objectives.map((obj) => (
            <div
              key={obj.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center border border-blue-100 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                    {renderNamedIcon(obj.iconName, 'w-4 h-4')}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    #{obj.id.toString().padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B132B] leading-snug group-hover:text-[#0066FF] transition-colors">
                    {obj.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    {obj.description}
                  </p>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Objective</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectObjectives

