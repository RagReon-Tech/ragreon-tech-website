import React from 'react'
import {
  Monitor,
  Layout,
  BarChart2,
  Bot,
  Cpu,
  Zap,
  Radio,
  Eye,
  TrendingUp,
  GraduationCap,
  Workflow,
  Compass,
  Check,
} from 'lucide-react'
import { cn } from '@/utils/cn'

interface ProjectTypeStepProps {
  selectedTypes: string[]
  onChange: (types: string[]) => void
}

interface ProjectTypeOption {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
}

const projectTypeOptions: ProjectTypeOption[] = [
  { id: 'Business Website', title: 'Business Website', icon: Monitor },
  { id: 'Web Application', title: 'Web Application', icon: Layout },
  { id: 'Analytics Dashboard', title: 'Analytics Dashboard', icon: BarChart2 },
  { id: 'AI-Powered Application', title: 'AI-Powered Application', icon: Bot },
  { id: 'Machine Learning Model', title: 'Machine Learning Model', icon: Cpu },
  { id: 'Automation Tool', title: 'Automation Tool', icon: Zap },
  { id: 'IoT or Embedded System', title: 'IoT or Embedded System', icon: Radio },
  { id: 'Computer Vision Application', title: 'Computer Vision Application', icon: Eye },
  { id: 'Existing Project Improvement', title: 'Existing Project Improvement', icon: TrendingUp },
  { id: 'College or Academic Project', title: 'College or Academic Project', icon: GraduationCap },
  { id: 'Business Process Digitization', title: 'Business Process Digitization', icon: Workflow },
  { id: 'Other / Not Sure Yet', title: 'Other / Not Sure Yet', icon: Compass },
]

export const ProjectTypeStep: React.FC<ProjectTypeStepProps> = ({
  selectedTypes,
  onChange,
}) => {
  const toggleType = (typeId: string) => {
    if (selectedTypes.includes(typeId)) {
      onChange(selectedTypes.filter((t) => t !== typeId))
    } else {
      onChange([...selectedTypes, typeId])
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
          What Would You Like to Create?
        </h2>
        <p className="text-sm sm:text-base text-slate-500">
          Tell us what kind of solution you have in mind. Select all that apply.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
        {projectTypeOptions.map((option) => {
          const isSelected = selectedTypes.includes(option.id)
          const Icon = option.icon

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => toggleType(option.id)}
              className={cn(
                'relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[110px] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]',
                isSelected
                  ? 'border-[#0066FF] bg-blue-50/50 shadow-sm ring-1 ring-[#0066FF]'
                  : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/60 shadow-xs',
              )}
            >
              <div className="flex items-start justify-between w-full mb-2.5">
                <div
                  className={cn(
                    'w-9 h-9 rounded-xl flex items-center justify-center transition-colors',
                    isSelected
                      ? 'bg-[#0066FF] text-white'
                      : 'bg-blue-50 text-[#0066FF] group-hover:bg-blue-100',
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div
                  className={cn(
                    'w-5 h-5 rounded-md border flex items-center justify-center transition-colors',
                    isSelected
                      ? 'bg-[#0066FF] border-[#0066FF] text-white'
                      : 'border-slate-300 bg-white',
                  )}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>

              <span
                className={cn(
                  'text-xs sm:text-sm font-bold leading-snug',
                  isSelected ? 'text-[#0B132B]' : 'text-slate-800 group-hover:text-slate-900',
                )}
              >
                {option.title}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
