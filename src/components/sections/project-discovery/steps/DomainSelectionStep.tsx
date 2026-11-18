import React from 'react'
import {
  BarChart3,
  LineChart,
  Brain,
  Globe,
  Terminal,
  Radio,
  Eye,
  HelpCircle,
  Layers,
  Check,
} from 'lucide-react'
import { cn } from '@/utils/cn'

interface DomainSelectionStepProps {
  selectedDomains: string[]
  otherDomainText?: string
  onChange: (domains: string[], otherText?: string) => void
}

interface DomainOption {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
}

const domainOptions: DomainOption[] = [
  {
    id: 'Data Analytics & Business Intelligence',
    title: 'Data Analytics & Business Intelligence',
    icon: BarChart3,
  },
  {
    id: 'Data Science',
    title: 'Data Science',
    icon: LineChart,
  },
  {
    id: 'AI & Machine Learning',
    title: 'AI & Machine Learning',
    icon: Brain,
  },
  {
    id: 'Web Development',
    title: 'Web Development',
    icon: Globe,
  },
  {
    id: 'Python Development & Automation',
    title: 'Python Development & Automation',
    icon: Terminal,
  },
  {
    id: 'IoT & Embedded Systems',
    title: 'IoT & Embedded Systems',
    icon: Radio,
  },
  {
    id: 'Deep Learning & Computer Vision',
    title: 'Deep Learning & Computer Vision',
    icon: Eye,
  },
  {
    id: 'Not Sure Yet / Need Guidance',
    title: 'Not Sure Yet (Need Guidance)',
    icon: HelpCircle,
  },
  {
    id: 'Other',
    title: 'Other (Please Specify)',
    icon: Layers,
  },
]

export const DomainSelectionStep: React.FC<DomainSelectionStepProps> = ({
  selectedDomains,
  otherDomainText = '',
  onChange,
}) => {
  const toggleDomain = (domainId: string) => {
    if (domainId === 'Not Sure Yet / Need Guidance') {
      if (selectedDomains.includes('Not Sure Yet / Need Guidance')) {
        onChange([], otherDomainText)
      } else {
        onChange(['Not Sure Yet / Need Guidance'], '')
      }
      return
    }

    // If another domain is picked, remove "Not Sure Yet / Need Guidance"
    const cleaned = selectedDomains.filter((d) => d !== 'Not Sure Yet / Need Guidance')

    if (cleaned.includes(domainId)) {
      const next = cleaned.filter((d) => d !== domainId)
      onChange(next, otherDomainText)
    } else {
      onChange([...cleaned, domainId], otherDomainText)
    }
  }

  const handleOtherTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(selectedDomains, e.target.value)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
          Which Domain Interests You?
        </h2>
        <p className="text-sm sm:text-base text-slate-500">
          Select one or more domains that match your project. Not sure? We can help.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
        {domainOptions.map((option) => {
          const isSelected = selectedDomains.includes(option.id)
          const Icon = option.icon

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => toggleDomain(option.id)}
              className={cn(
                'relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[120px] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]',
                isSelected
                  ? 'border-[#0066FF] bg-blue-50/50 shadow-sm ring-1 ring-[#0066FF]'
                  : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/60 shadow-xs',
              )}
            >
              <div className="flex items-start justify-between w-full mb-3">
                <div
                  className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                    isSelected
                      ? 'bg-[#0066FF] text-white'
                      : 'bg-blue-50 text-[#0066FF] group-hover:bg-blue-100',
                  )}
                >
                  <Icon className="w-5 h-5" />
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

      {selectedDomains.includes('Other') && (
        <div className="pt-2 animate-fadeIn">
          <label
            htmlFor="other-domain-input"
            className="block text-xs font-semibold text-slate-700 mb-1"
          >
            Please specify your domain
          </label>
          <input
            id="other-domain-input"
            type="text"
            value={otherDomainText}
            onChange={handleOtherTextChange}
            placeholder="e.g. Cybersecurity, Blockchain, Mobile Apps..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 text-sm outline-none bg-white text-slate-900"
          />
        </div>
      )}
    </div>
  )
}
