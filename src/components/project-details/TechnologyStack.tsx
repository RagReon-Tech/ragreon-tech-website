import React from 'react'
import { Code2, Layers } from 'lucide-react'
import type { TechStackGroup } from '@/types/project-details.types'
import { renderNamedIcon } from './iconHelper'

interface TechnologyStackProps {
  techStack: string[]
  techStackGrouped?: TechStackGroup[]
}

export const TechnologyStack: React.FC<TechnologyStackProps> = ({
  techStack,
  techStackGrouped,
}) => {
  const hasGrouped = techStackGrouped && techStackGrouped.length > 0
  const hasFlat = techStack && techStack.length > 0

  if (!hasGrouped && !hasFlat) return null

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200/80" id="technology-stack">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Tech Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Technology Stack
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Modern frameworks, libraries, tools, and platforms utilized in this project.
          </p>
        </div>

        {/* Grouped Stack Layout */}
        {hasGrouped ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStackGrouped.map((group, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-bold text-[#0B132B] uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {group.items.length} {group.items.length === 1 ? 'tech' : 'techs'}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {group.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 transition-colors border border-slate-100"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0066FF] shadow-xs">
                          {renderNamedIcon(item.iconName || 'Code2', 'w-4 h-4')}
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-[#0B132B]">
                          {item.name}
                        </span>
                      </div>
                      {item.role && (
                        <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200/60">
                          {item.role}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Flat Tech Stack Fallback */
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-50 text-[#0066FF] border border-blue-200/80 shadow-xs"
                >
                  <Layers className="w-4 h-4" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TechnologyStack

