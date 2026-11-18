import React, { useState } from 'react'
import { Mail, Layers } from 'lucide-react'
import { teamData } from '@/data/team'
import { Card } from '@/components/common/Card'
import { FounderContactModal } from './FounderContactModal'
import type { TeamMember } from '@/types/team.types'

export const TeamMembersSection: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const [selectedFounder, setSelectedFounder] = useState<TeamMember | null>(null)

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC]">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>OUR TEAM MEMBERS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            The People Behind Our Work
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Passionate learners, problem solvers, and builders.
          </p>
        </div>

        {/* 2 Founder Profile Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {teamData.map((founder) => {
            const hasError = imageErrors[founder.id]
            const initials = founder.name
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('')

            return (
              <Card
                key={founder.id}
                id={founder.id}
                hoverEffect
                padding="none"
                className="bg-white border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group"
              >
                {/* Left: Founder Portrait Photo Container */}
                <div className="w-full sm:w-44 md:w-52 aspect-[4/5] sm:aspect-auto shrink-0 overflow-hidden bg-slate-100 relative border-b sm:border-b-0 sm:border-r border-slate-100">
                  {founder.image && !hasError ? (
                    <img
                      src={founder.image}
                      alt={`${founder.name} - ${founder.role}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{
                        objectPosition:
                          founder.id === 'sreeram-ganesh'
                            ? '50% 10%'
                            : '50% 15%',
                      }}
                      onError={() => handleImageError(founder.id)}
                    />
                  ) : (
                    <div className="w-full h-full min-h-[16rem] flex items-center justify-center bg-gradient-to-br from-[#0B132B] to-slate-800 text-white font-bold text-3xl">
                      {initials}
                    </div>
                  )}
                </div>

                {/* Right: Info, Bio & Skills */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Header */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] tracking-tight">
                        {founder.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#0066FF] pt-0.5">
                        {founder.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>

                  {/* Skills Badges */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#0066FF]" />
                      <span>Areas of Expertise</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {founder.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-blue-50/80 text-blue-700 font-medium border border-blue-200/60 hover:bg-blue-100 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Action */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedFounder(founder)}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-300 text-xs text-slate-700 hover:text-[#0066FF] transition-all cursor-pointer group/btn"
                      title={`Contact ${founder.name}`}
                      aria-label={`Contact ${founder.name}`}
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0066FF] group-hover/btn:scale-110 transition-transform" />
                      <span className="font-medium text-xs">Contact Founder</span>
                    </button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Founder Contact Popup Modal */}
      <FounderContactModal
        isOpen={!!selectedFounder}
        onClose={() => setSelectedFounder(null)}
        founder={selectedFounder}
      />
    </section>
  )
}

export default TeamMembersSection
