import React, { useState } from 'react'
import { Brain, CheckCircle2 } from 'lucide-react'
import type { CognitiveTaskItem } from '@/types/project-details.types'
import { renderNamedIcon } from './iconHelper'

interface CognitiveTasksGridProps {
  tasks?: CognitiveTaskItem[]
  projectTitle: string
}

export const CognitiveTasksGrid: React.FC<CognitiveTasksGridProps> = ({
  tasks,
  projectTitle,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all')

  if (!tasks || tasks.length === 0) return null

  // Extract unique cognitive domains for filtering
  const domains = Array.from(new Set(tasks.map((t) => t.cognitiveDomain)))

  const filteredTasks =
    selectedDomain === 'all'
      ? tasks
      : tasks.filter((t) => t.cognitiveDomain === selectedDomain)

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/80"
      id="cognitive-tasks"
    >
      <div className="container-custom space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5" />
            <span>Standardized Neurocognitive Battery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Cognitive Assessment Modules (10 Interactive Tasks)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            The platform administers ten structured neurocognitive evaluation modules designed to
            measure distinct cognitive domains including lexical access, working memory, spatial
            configuration, and delayed recall for {projectTitle}.
          </p>
        </div>

        {/* Filter Tabs by Cognitive Domain */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          <button
            type="button"
            onClick={() => setSelectedDomain('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedDomain === 'all'
                ? 'bg-[#0066FF] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Modules (10)
          </button>

          {domains.map((dom) => {
            const isSelected = selectedDomain === dom
            const count = tasks.filter((t) => t.cognitiveDomain === dom).length

            return (
              <button
                key={dom}
                type="button"
                onClick={() => setSelectedDomain(dom)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0066FF] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{dom}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* 10 Tasks Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredTasks.map((task) => (
            <div
              key={task.taskNumber}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Row: Task Number & Domain Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#0066FF] bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-lg">
                    Task 0{task.taskNumber}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {task.cognitiveDomain}
                  </span>
                </div>

                {/* Task Title with Icon */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-200/60 shadow-xs group-hover:scale-110 transition-transform">
                    {renderNamedIcon(task.iconName || 'Brain', 'w-5 h-5')}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors leading-snug">
                      {task.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">{task.category}</p>
                  </div>
                </div>

                {/* Purpose Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {task.purpose}
                </p>

                {/* Stimulus & Interaction Details */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-700 shrink-0">Stimulus:</span>
                    <span className="text-slate-600">{task.stimulus}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-700 shrink-0">Interaction:</span>
                    <span className="text-slate-600">{task.interaction}</span>
                  </div>
                </div>
              </div>

              {/* Scoring Formula Box */}
              <div className="mt-5 p-3.5 bg-slate-50/90 rounded-xl border border-slate-200/80 text-xs">
                <div className="flex items-center gap-1.5 text-slate-700 font-bold mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Automated Backend Scoring:</span>
                </div>
                <div className="text-slate-600 font-mono text-[11px] leading-relaxed">
                  {task.scoringMechanism}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CognitiveTasksGrid
