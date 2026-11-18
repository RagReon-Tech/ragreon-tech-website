import React from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import type { ChallengeItem } from '@/types/project-details.types'

interface ChallengesSolutionsProps {
  challenges?: ChallengeItem[]
}

export const ChallengesSolutions: React.FC<ChallengesSolutionsProps> = ({ challenges }) => {
  if (!challenges || challenges.length === 0) return null

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200/80" id="challenges-solutions">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Problem Resolution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Challenges &amp; Solutions
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Critical technical hurdles encountered during development and how they were systematically engineered.
          </p>
        </div>

        {/* Challenge-Solution Paired Cards */}
        <div className="space-y-4">
          {challenges.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-6 items-start relative"
            >
              {/* Challenge Side */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span>The Challenge</span>
                </div>
                <h3 className="text-base font-bold text-[#0B132B]">
                  {item.challenge}
                </h3>
                {item.explanation && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.explanation}
                  </p>
                )}
              </div>

              {/* Solution Side */}
              <div className="space-y-2.5 bg-blue-50/50 rounded-xl p-4 sm:p-5 border border-blue-100">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Engineering Solution</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#0B132B]">
                  {item.solution}
                </h4>
                {item.implementationApproach && (
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.implementationApproach}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChallengesSolutions
