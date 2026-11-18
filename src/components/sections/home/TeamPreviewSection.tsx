import React from 'react'
import { ArrowRight, UserCheck } from 'lucide-react'
import { teamData } from '@/data/team'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'

export const TeamPreviewSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/60">
      <div className="container-custom space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>The Engineers</span>
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Meet the Founders
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A focused two-person technology team combining data analytics, machine
            learning, full-stack web engineering, and embedded IoT systems.
          </p>
        </div>

        {/* 2 Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamData.map((member) => (
            <Card
              key={member.id}
              hoverEffect
              padding="lg"
              className="border-slate-200/90 bg-white space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B132B] to-slate-800 text-white flex items-center justify-center font-bold text-lg shadow-md border border-slate-700 shrink-0">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B132B] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0066FF]">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skill Badges */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Specializations</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Meet Our Team Button */}
        <div className="text-center pt-2">
          <Button
            to="/team"
            variant="secondary"
            size="md"
            className="rounded-full px-6 font-semibold"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Meet Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TeamPreviewSection
