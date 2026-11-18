import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, User, ArrowRight, Clock } from 'lucide-react'
import type { ContributorItem } from '@/types/project-details.types'

interface ProjectContributorsProps {
  contributors?: ContributorItem[]
  projectTitle?: string
}

export const ProjectContributors: React.FC<ProjectContributorsProps> = ({
  contributors = [],
}) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const isPending = !contributors || contributors.length === 0

  return (
    <section
      className="py-12 sm:py-16 bg-white border-b border-slate-200/80"
      id="project-contributors"
      aria-label="Project Contributors"
    >
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Project Contributors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Project Contributors
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Meet the people who contributed to building this project.
          </p>
        </div>

        {/* Contributor Cards Display */}
        {isPending ? (
          /* Pending / To Be Confirmed State */
          <div className="max-w-md mx-auto p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 text-center space-y-3 shadow-2xs">
            <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto text-[#0066FF]">
              <Clock className="w-6 h-6 text-amber-500" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#0B132B]">
                Contributors To Be Confirmed
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Contributor verification for this project is currently in progress and will be updated once confirmed.
              </p>
            </div>
          </div>
        ) : (
          /* Confirmed Contributor(s) Grid */
          <div
            className={`flex flex-wrap justify-center gap-6 sm:gap-8 ${
              contributors.length === 1 ? 'max-w-sm mx-auto' : 'max-w-3xl mx-auto'
            }`}
          >
            {contributors.map((member, idx) => {
              const hasError = imageErrors[member.name]
              const isSreeram = member.name.toLowerCase().includes('sreeram')

              return (
                <div
                  key={idx}
                  className="w-full max-w-xs sm:max-w-sm bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Circular Profile Photo Frame with Gradient Ring */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-500 shadow-md group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                        {member.image && !hasError ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            style={{
                              objectPosition: isSreeram ? '50% 10%' : '50% 15%',
                            }}
                            onError={() =>
                              setImageErrors((prev) => ({
                                ...prev,
                                [member.name]: true,
                              }))
                            }
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B132B] to-slate-800 text-white font-bold text-2xl">
                            <User className="w-8 h-8 text-blue-300" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Full Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] tracking-tight group-hover:text-[#0066FF] transition-colors">
                    {member.name}
                  </h3>

                  {/* Role Label */}
                  <p className="text-xs sm:text-sm font-semibold text-[#0066FF] mt-1">
                    {member.role || 'Project Contributor'}
                  </p>

                  {/* Individual Portfolio Link */}
                  {member.portfolioUrl ? (
                    <Link
                      to={member.portfolioUrl}
                      className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#0066FF] bg-blue-50 hover:bg-blue-100 hover:text-blue-800 border border-blue-200/80 transition-all duration-200 group/link"
                      aria-label={`View ${member.name}'s portfolio`}
                    >
                      <span>View Portfolio</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  ) : null}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectContributors

