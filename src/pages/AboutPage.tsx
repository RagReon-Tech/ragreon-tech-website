import React, { useEffect } from 'react'
import { AboutHeroSection } from '@/components/sections/about/AboutHeroSection'
import { MissionVisionSection } from '@/components/sections/about/MissionVisionSection'
import { StoryAndValuesSection } from '@/components/sections/about/StoryAndValuesSection'
import { FoundersSection } from '@/components/sections/about/FoundersSection'
import { WorkingApproachSection } from '@/components/sections/about/WorkingApproachSection'
import { RemoteCollabSection } from '@/components/sections/about/RemoteCollabSection'
import { AboutCTASection } from '@/components/sections/about/AboutCTASection'

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | RagReon Tech - Software, AI & Automation'
  }, [])

  return (
    <div className="flex flex-col">
      {/* 1. About Hero Section */}
      <AboutHeroSection />

      {/* 2. Mission, Vision, and Our Journey (3 Cards) */}
      <MissionVisionSection />

      {/* 3. Our Story & Core Values (From Ideas to Real-World Impact & What Drives Us) */}
      <StoryAndValuesSection />

      {/* 4. Meet The Founders (The People Behind RagReon Tech) */}
      <FoundersSection />

      {/* 5. Our Working Approach (How We Work - 4 Steps) */}
      <WorkingApproachSection />

      {/* 6. Built for Remote Collaboration (3 Features) */}
      <RemoteCollabSection />

      {/* 7. Contact Call To Action */}
      <AboutCTASection />
    </div>
  )
}

export default AboutPage
