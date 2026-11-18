import React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/utils/cn'
import type { ProjectVisionData } from '@/types/projectDiscovery.types'

interface ProjectVisionStepProps {
  vision: ProjectVisionData
  errors?: Record<string, string>
  onChange: (vision: ProjectVisionData) => void
}

const targetUserOptions = [
  'Individual users',
  'Small business',
  'Medium or large business',
  'Students or educational institutions',
  'Internal team',
  'Other',
]

const resourceOptions = [
  'Requirements document',
  'Dataset',
  'Existing website or application',
  'Prototype',
  'Source code',
  'None yet',
]

export const ProjectVisionStep: React.FC<ProjectVisionStepProps> = ({
  vision,
  errors = {},
  onChange,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    onChange({
      ...vision,
      [name]: value,
    })
  }

  const toggleResource = (resource: string) => {
    if (resource === 'None yet') {
      if (vision.existingResources.includes('None yet')) {
        onChange({ ...vision, existingResources: [] })
      } else {
        onChange({ ...vision, existingResources: ['None yet'] })
      }
      return
    }

    const withoutNone = vision.existingResources.filter((r) => r !== 'None yet')
    if (withoutNone.includes(resource)) {
      onChange({
        ...vision,
        existingResources: withoutNone.filter((r) => r !== resource),
      })
    } else {
      onChange({
        ...vision,
        existingResources: [...withoutNone, resource],
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
          Tell Us About Your Vision
        </h2>
        <p className="text-sm sm:text-base text-slate-500">
          Help us understand your goals and the problem you want to solve.
        </p>
      </div>

      <div className="space-y-5 pt-2">
        {/* Project Idea or Problem */}
        <div className="space-y-1.5">
          <label
            htmlFor="vision-projectIdea"
            className="block text-xs sm:text-sm font-semibold text-slate-800"
          >
            Project Idea or Problem <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="vision-projectIdea"
            name="projectIdea"
            rows={3}
            value={vision.projectIdea}
            onChange={handleInputChange}
            placeholder="Describe your idea, the problem you want to solve, or the opportunity you see..."
            className={cn(
              'w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-150 resize-y bg-white text-slate-900',
              errors.projectIdea
                ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                : 'border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100',
            )}
          />
          {errors.projectIdea && (
            <p className="text-xs text-rose-500 font-medium">{errors.projectIdea}</p>
          )}
        </div>

        {/* Expected Outcome */}
        <div className="space-y-1.5">
          <label
            htmlFor="vision-expectedOutcome"
            className="block text-xs sm:text-sm font-semibold text-slate-800"
          >
            Expected Outcome <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="vision-expectedOutcome"
            name="expectedOutcome"
            rows={2}
            value={vision.expectedOutcome}
            onChange={handleInputChange}
            placeholder="What would success look like for your project?"
            className={cn(
              'w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-150 resize-y bg-white text-slate-900',
              errors.expectedOutcome
                ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                : 'border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100',
            )}
          />
          {errors.expectedOutcome && (
            <p className="text-xs text-rose-500 font-medium">{errors.expectedOutcome}</p>
          )}
        </div>

        {/* 2 Columns: Target Users & Existing Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
          {/* Target Users */}
          <div className="space-y-1.5">
            <label
              htmlFor="vision-targetUsers"
              className="block text-xs sm:text-sm font-semibold text-slate-800"
            >
              Target Users <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <select
                id="vision-targetUsers"
                name="targetUsers"
                value={vision.targetUsers}
                onChange={handleInputChange}
                className={cn(
                  'w-full px-4 py-3 rounded-xl border text-sm outline-none appearance-none transition-all duration-150 cursor-pointer bg-white text-slate-900',
                  errors.targetUsers
                    ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                    : 'border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100',
                )}
              >
                <option value="">Select target users</option>
                {targetUserOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
                ▼
              </div>
            </div>
            {errors.targetUsers && (
              <p className="text-xs text-rose-500 font-medium">{errors.targetUsers}</p>
            )}
          </div>

          {/* Existing Resources */}
          <div className="space-y-1.5">
            <span className="block text-xs sm:text-sm font-semibold text-slate-800">
              Existing Resources <span className="text-slate-400 font-normal">(Optional)</span>
            </span>
            <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50/50">
              {resourceOptions.map((res) => {
                const isChecked = vision.existingResources.includes(res)
                return (
                  <label
                    key={res}
                    className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer select-none py-1 hover:text-slate-900"
                  >
                    <div
                      onClick={() => toggleResource(res)}
                      className={cn(
                        'w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0',
                        isChecked
                          ? 'bg-[#0066FF] border-[#0066FF] text-white'
                          : 'border-slate-300 bg-white',
                      )}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="truncate">{res}</span>
                  </label>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
