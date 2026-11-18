import React from 'react'
import { AlertCircle, AlertTriangle, HelpCircle, XCircle } from 'lucide-react'
import type { ProblemStatement as IProblemStatement } from '@/types/project-details.types'
import { renderNamedIcon } from './iconHelper'

interface ProblemStatementProps {
  problem?: IProblemStatement
}

export const ProblemStatement: React.FC<ProblemStatementProps> = ({ problem }) => {
  if (!problem || !problem.mainProblem) return null

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80" id="problem-statement">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200/80 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Problem Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            {problem.title || 'The Problem We Wanted to Solve'}
          </h2>
        </div>

        {/* Main Problem Headline Card */}
        <div className="bg-white rounded-2xl border border-red-200/70 p-6 sm:p-7 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span>Core Institutional Challenge</span>
          </div>
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
            {problem.mainProblem}
          </p>
          {problem.whyItMatters && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              {problem.whyItMatters}
            </p>
          )}
        </div>

        {/* Key Challenges Individual Cards (if provided) */}
        {problem.keyChallenges && problem.keyChallenges.length > 0 ? (
          <div className="space-y-4 pt-1">
            <h3 className="text-sm font-bold text-[#0B132B] uppercase tracking-wider">
              Critical Operational Hurdles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {problem.keyChallenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-2.5 shadow-xs hover:border-red-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {renderNamedIcon(challenge.iconName || 'AlertTriangle', 'w-5 h-5 text-red-500')}
                  </div>
                  <h4 className="text-sm font-bold text-[#0B132B] leading-snug">
                    {challenge.title}
                  </h4>
                  {challenge.description && (
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Existing Limitations & User Challenges Fallback Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problem.existingLimitations && problem.existingLimitations.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 space-y-4 shadow-xs">
                <h3 className="text-sm font-bold text-[#0B132B] uppercase tracking-wider flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-slate-400" />
                  <span>Existing System Limitations</span>
                </h3>
                <ul className="space-y-2.5">
                  {problem.existingLimitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {problem.userChallenges && problem.userChallenges.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 space-y-4 shadow-xs">
                <h3 className="text-sm font-bold text-[#0B132B] uppercase tracking-wider flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                  <span>User Pain Points</span>
                </h3>
                <ul className="space-y-2.5">
                  {problem.userChallenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProblemStatement
