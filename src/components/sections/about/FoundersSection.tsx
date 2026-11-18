import React, { useState } from 'react'
import { ArrowRight, Mail, Layers } from 'lucide-react'
import { teamData } from '@/data/team'
import { Button } from '@/components/common/Button'

export const FoundersSection: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section className="py-14 sm:py-20 bg-[#0B132B] text-white border-t border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>OUR TEAM</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            The People Behind{' '}
            <span className="text-[#0066FF]">RagReon Tech</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Two aspiring technologists working together to turn ideas into
            practical digital solutions.
          </p>
        </div>

        {/* 2 Founder Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {teamData.map((founder) => {
            const hasError = imageErrors[founder.id]
            const initials = founder.name
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('')

            return (
              <div
                key={founder.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 sm:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Top: Avatar & Info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    {/* Founder Avatar with professional styling */}
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-500 shadow-lg shadow-blue-500/20">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                          {founder.image && !hasError ? (
                            <img
                              src={founder.image}
                              alt={`${founder.name} - ${founder.role}`}
                              className="w-full h-full object-cover rounded-full"
                              style={{
                                objectPosition:
                                  founder.id === 'sreeram-ganesh'
                                    ? '50% 10%'
                                    : '50% 15%',
                              }}
                              onError={() => handleImageError(founder.id)}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B132B] to-slate-800 text-white font-bold text-xl sm:text-2xl">
                              {initials}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Name, Role & Email */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {founder.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#0066FF] tracking-wide">
                        {founder.role}
                      </p>
                      <div className="pt-1 flex items-center gap-3">
                        <a
                          href="mailto:ragreontechofficial@gmail.com"
                          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors"
                          title="Contact via email"
                          aria-label={`Email ${founder.name}`}
                        >
                          <Mail className="w-4 h-4 text-blue-400" />
                          <span className="font-mono text-[11px] hidden sm:inline">
                            ragreontechofficial@gmail.com
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Biography */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Areas of Focus / Skills */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      <span>Areas of Focus</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-lg bg-blue-950/40 text-blue-200 font-medium border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-900/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Section Action Button */}
        <div className="text-center pt-4">
          <Button
            to="/services"
            variant="primary"
            size="lg"
            className="rounded-full px-8 shadow-xl shadow-blue-500/20 text-sm sm:text-base font-semibold"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FoundersSection
