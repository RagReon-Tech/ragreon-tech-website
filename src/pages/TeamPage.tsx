import React, { useEffect } from 'react'
import { TeamHeroSection } from '@/components/sections/team/TeamHeroSection'
import { TeamMembersSection } from '@/components/sections/team/TeamMembersSection'
import { TeamValuesSection } from '@/components/sections/team/TeamValuesSection'
import { TeamWorkflowSection } from '@/components/sections/team/TeamWorkflowSection'
import { TeamCTASection } from '@/components/sections/team/TeamCTASection'

export const TeamPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Team | RagReon Tech - Software, AI & Automation'
  }, [])

  return (
    <div className="flex flex-col">
      {/* 1. Team Hero Section */}
      <TeamHeroSection />

      {/* 2. Team Members Section (2 Founders Cards) */}
      <TeamMembersSection />

      {/* 3. Our Values Section (What Drives Us - 4 Values) */}
      <TeamValuesSection />

      {/* 4. How We Work Together Section (4 Process Steps) */}
      <TeamWorkflowSection />

      {/* 5. Contact Call To Action */}
      <TeamCTASection />
    </div>
  )
}

export default TeamPage
