import React from 'react'
import { Clock } from 'lucide-react'
import type { FutureScopeItem } from '@/types/project-details.types'
import { renderNamedIcon } from './iconHelper'

interface FutureScopeProps {
  futureScope?: FutureScopeItem[]
  projectTitle: string
}

export const FutureScope: React.FC<FutureScopeProps> = ({
  futureScope,
  projectTitle,
}) => {
  if (!futureScope || futureScope.length === 0) return null

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="future-scope">
      <div className="container-custom space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Roadmap &amp; Planned Enhancements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Future Development &amp; Planned Scope
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            The following initiatives represent planned architectural extensions and research milestones
            scheduled for subsequent iterations of {projectTitle}. These capabilities are actively in planning
            or verification and are not marked as completed features.
          </p>
        </div>

        {/* 8 Planned Improvements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {futureScope.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between space-y-4 hover:bg-white hover:border-amber-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center border border-amber-200 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    {renderNamedIcon(item.iconName, 'w-4 h-4')}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#F59E0B] text-slate-950 shadow-xs">
                    <Clock className="w-3 h-3 text-slate-950" />
                    <span>{item.status}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#0B132B] group-hover:text-amber-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-400">
                Phase #{item.id.toString().padStart(2, '0')} • Engineering Roadmap
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FutureScope
