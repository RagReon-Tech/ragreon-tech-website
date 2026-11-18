import React from 'react'
import { cn } from '@/utils/cn'
import type { RequirementsData } from '@/types/projectDiscovery.types'

interface RequirementsStepProps {
  requirements: RequirementsData
  errors?: Record<string, string>
  onChange: (requirements: RequirementsData) => void
}

export const RequirementsStep: React.FC<RequirementsStepProps> = ({
  requirements,
  errors = {},
  onChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    onChange({
      ...requirements,
      [name]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
          What Should Your Solution Do?
        </h2>
        <p className="text-sm sm:text-base text-slate-500">
          Tell us about the key features and capabilities you need.
        </p>
      </div>

      <div className="space-y-5 pt-2">
        {/* Key Features */}
        <div className="space-y-1.5">
          <label
            htmlFor="req-keyFeatures"
            className="block text-xs sm:text-sm font-semibold text-slate-800"
          >
            Key Features and Requirements <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="req-keyFeatures"
            name="keyFeatures"
            rows={4}
            value={requirements.keyFeatures}
            onChange={handleInputChange}
            placeholder="List the most important features or capabilities you need..."
            className={cn(
              'w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-150 resize-y bg-white text-slate-900',
              errors.keyFeatures
                ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                : 'border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100',
            )}
          />
          {errors.keyFeatures && (
            <p className="text-xs text-rose-500 font-medium">{errors.keyFeatures}</p>
          )}
        </div>

        {/* Technologies, Integrations or Constraints */}
        <div className="space-y-1.5">
          <label
            htmlFor="req-constraints"
            className="block text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-between"
          >
            <span>Technologies, Integrations or Constraints</span>
            <span className="text-xs text-slate-400 font-normal">Optional</span>
          </label>
          <textarea
            id="req-constraints"
            name="constraints"
            rows={3}
            value={requirements.constraints}
            onChange={handleInputChange}
            placeholder="Are there any specific technologies, integrations, platforms, or constraints we should know about?"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all duration-150 resize-y bg-white text-slate-900"
          />
        </div>
      </div>
    </div>
  )
}
