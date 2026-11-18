import React from 'react'

interface ProjectProgressBarProps {
  currentStep: number
  totalSteps: number
}

export const ProjectProgressBar: React.FC<ProjectProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const percentage = Math.min(100, Math.round((currentStep / totalSteps) * 100))

  return (
    <div className="w-full space-y-2 mb-6 sm:mb-8">
      <div className="flex items-center justify-between text-xs font-bold tracking-wider uppercase">
        <span className="text-[#0066FF]">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-slate-400 font-semibold">{percentage}% Completed</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#0066FF] to-[#0EA5E9] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
