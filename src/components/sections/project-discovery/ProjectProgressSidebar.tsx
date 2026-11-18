import React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface StepItem {
  id: number
  title: string
}

export const WIZARD_STEPS: StepItem[] = [
  { id: 1, title: 'Your Idea' },
  { id: 2, title: 'Domain' },
  { id: 3, title: 'Project Type' },
  { id: 4, title: 'Your Vision' },
  { id: 5, title: 'Requirements' },
  { id: 6, title: 'Budget & Timeline' },
  { id: 7, title: 'Contact Details' },
  { id: 8, title: 'Review & Submit' },
]

interface ProjectProgressSidebarProps {
  currentStep: number
  completedSteps: number[]
  onStepClick: (step: number) => void
}

export const ProjectProgressSidebar: React.FC<ProjectProgressSidebarProps> = ({
  currentStep,
  completedSteps,
  onStepClick,
}) => {
  return (
    <aside className="w-full lg:w-64 xl:w-72 shrink-0 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm">
      <div className="mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Project Steps
        </span>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#0066FF]">
          {currentStep} / {WIZARD_STEPS.length}
        </span>
      </div>

      <nav aria-label="Wizard Steps Progress" className="space-y-1.5">
        {WIZARD_STEPS.map((step) => {
          const isActive = currentStep === step.id
          const isCompleted = completedSteps.includes(step.id) && !isActive
          const isAccessible = isCompleted || step.id <= Math.max(...completedSteps, 1)

          return (
            <button
              key={step.id}
              type="button"
              disabled={!isAccessible}
              onClick={() => onStepClick(step.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all duration-150',
                isActive &&
                  'bg-blue-50/80 text-[#0066FF] font-semibold border border-blue-200/70 shadow-xs',
                isCompleted && 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer',
                !isActive && !isCompleted && 'text-slate-400 opacity-60 cursor-not-allowed',
              )}
            >
              <div
                className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors',
                  isActive && 'bg-[#0066FF] text-white',
                  isCompleted && 'bg-blue-100 text-[#0066FF]',
                  !isActive && !isCompleted && 'bg-slate-100 text-slate-400 border border-slate-200',
                )}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : step.id}
              </div>
              <span className="truncate">{step.title}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
