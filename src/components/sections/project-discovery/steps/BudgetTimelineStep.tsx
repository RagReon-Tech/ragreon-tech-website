import React from 'react'
import { Info } from 'lucide-react'
import type { ScopeData } from '@/types/projectDiscovery.types'

interface BudgetTimelineStepProps {
  scope: ScopeData
  onChange: (scope: ScopeData) => void
}

const budgetOptions = [
  'Under ₹5,000',
  '₹5,000–₹15,000',
  '₹15,000–₹30,000',
  '₹30,000–₹50,000',
  '₹50,000+',
  'Not Sure Yet / Need Guidance',
]

const timelineOptions = [
  'Within 1 week',
  '2–4 weeks',
  '1–2 months',
  '3+ months',
  'Flexible / Need Guidance',
]

export const BudgetTimelineStep: React.FC<BudgetTimelineStepProps> = ({
  scope,
  onChange,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    onChange({
      ...scope,
      [name]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
          Let's Discuss Your Project Scope
        </h2>
        <p className="text-sm sm:text-base text-slate-500">
          This helps us understand the estimated effort and plan our approach.
        </p>
      </div>

      <div className="space-y-5 pt-2">
        {/* Project Budget */}
        <div className="space-y-1.5">
          <label
            htmlFor="scope-budget"
            className="block text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-between"
          >
            <span>Project Budget</span>
            <span className="text-xs text-slate-400 font-normal">Optional</span>
          </label>
          <div className="relative">
            <select
              id="scope-budget"
              name="budget"
              value={scope.budget}
              onChange={handleSelectChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 text-sm outline-none appearance-none transition-all duration-150 cursor-pointer bg-white text-slate-900"
            >
              <option value="">Select budget range</option>
              {budgetOptions.map((bg) => (
                <option key={bg} value={bg}>
                  {bg}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Expected Timeline */}
        <div className="space-y-1.5">
          <label
            htmlFor="scope-timeline"
            className="block text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-between"
          >
            <span>Expected Timeline</span>
            <span className="text-xs text-slate-400 font-normal">Optional</span>
          </label>
          <div className="relative">
            <select
              id="scope-timeline"
              name="timeline"
              value={scope.timeline}
              onChange={handleSelectChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 text-sm outline-none appearance-none transition-all duration-150 cursor-pointer bg-white text-slate-900"
            >
              <option value="">Select timeline</option>
              {timelineOptions.map((tl) => (
                <option key={tl} value={tl}>
                  {tl}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Tip Banner */}
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/70 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
          <Info className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Not sure about the budget or timeline? That's okay! You can select{' '}
            <strong className="text-[#0066FF] font-semibold">"Need Guidance"</strong> and we'll
            help you figure it out during our initial review.
          </p>
        </div>
      </div>
    </div>
  )
}
