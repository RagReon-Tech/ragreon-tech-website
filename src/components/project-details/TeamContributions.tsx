import React, { useState } from 'react'
import { Users, User, CheckCircle2, Code2 } from 'lucide-react'
import type { ContributorItem } from '@/types/project-details.types'

interface TeamContributionsProps {
  contributors?: ContributorItem[]
}

export const TeamContributions: React.FC<TeamContributionsProps> = ({ contributors }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  if (!contributors || contributors.length === 0) return null

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="team-contributions">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Engineering Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Team Contributions
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Key engineers and specialists responsible for architecting and delivering this solution.
          </p>
        </div>

        {/* Contributors Grid */}
        <div
          className={`grid gap-6 ${
            contributors.length === 1
              ? 'grid-cols-1 max-w-2xl'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {contributors.map((member, idx) => {
            const hasError = imageErrors[member.name]

            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-4 shadow-xs"
              >
                {/* Member Identity Header */}
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 overflow-hidden text-[#0066FF] font-bold">
                    {member.image && !hasError ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={() =>
                          setImageErrors((prev) => ({ ...prev, [member.name]: true }))
                        }
                      />
                    ) : (
                      <User className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B132B]">{member.name}</h3>
                    <p className="text-xs font-medium text-slate-500">{member.role}</p>
                  </div>
                </div>

                {/* Key Responsibilities */}
                {member.responsibilities && member.responsibilities.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Responsibilities
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {member.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Contributions */}
                {member.technicalContributions && member.technicalContributions.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Contributions
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {member.technicalContributions.map((contrib, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          <span>{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Handled */}
                {member.technologiesHandled && member.technologiesHandled.length > 0 && (
                  <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                    {member.technologiesHandled.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-white text-slate-700 border border-slate-200"
                      >
                        <Code2 className="w-2.5 h-2.5 text-[#0066FF]" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TeamContributions

