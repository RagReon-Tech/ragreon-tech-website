import React from 'react'
import { Lightbulb, LifeBuoy, Compass, TrendingUp, Check } from 'lucide-react'
import { cn } from '@/utils/cn'
import type { IdeaStage } from '@/types/projectDiscovery.types'

interface IdeaDiscoveryStepProps {
  selectedStage: IdeaStage | ''
  onChange: (stage: IdeaStage) => void
}

interface IdeaCardOption {
  id: IdeaStage
  title: string
  icon: React.ComponentType<{ className?: string }>
}

const options: IdeaCardOption[] = [
  {
    id: 'I have a clear project idea.',
    title: 'I have a clear project idea.',
    icon: Lightbulb,
  },
  {
    id: 'I have a problem but need help finding the right solution.',
    title: 'I have a problem but need help finding the right solution.',
    icon: LifeBuoy,
  },
  {
    id: 'I want to explore ideas and possibilities.',
    title: 'I want to explore ideas and possibilities.',
    icon: Compass,
  },
  {
    id: 'I want to improve an existing product or system.',
    title: 'I want to improve an existing product or system.',
    icon: TrendingUp,
  },
]

export const IdeaDiscoveryStep: React.FC<IdeaDiscoveryStepProps> = ({
  selectedStage,
  onChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
          Let's Start With Your Idea
        </h2>
        <p className="text-sm sm:text-base text-slate-500">
          Every great solution starts with a problem worth solving.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {options.map((option) => {
          const isSelected = selectedStage === option.id
          const Icon = option.icon

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={cn(
                'relative p-6 sm:p-7 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[140px] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]',
                isSelected
                  ? 'border-[#0066FF] bg-blue-50/50 shadow-md shadow-blue-500/10 ring-1 ring-[#0066FF]'
                  : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/60 shadow-xs',
              )}
            >
              <div className="flex items-start justify-between w-full mb-4">
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center transition-colors',
                    isSelected
                      ? 'bg-[#0066FF] text-white shadow-sm'
                      : 'bg-blue-50 text-[#0066FF] group-hover:bg-blue-100',
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                )}
              </div>

              <span
                className={cn(
                  'text-base sm:text-lg font-bold tracking-tight',
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
