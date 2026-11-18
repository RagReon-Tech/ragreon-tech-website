import React from 'react'
import { HeroSection } from '@/components/sections/home/HeroSection'
import { HighlightsBar } from '@/components/sections/home/HighlightsBar'
import { ServicesSection } from '@/components/sections/home/ServicesSection'
import { FeaturedProjectsSection } from '@/components/sections/home/FeaturedProjectsSection'
import { WhyChooseUsSection } from '@/components/sections/home/WhyChooseUsSection'
import { TeamPreviewSection } from '@/components/sections/home/TeamPreviewSection'
import { ContactCTASection } from '@/components/sections/home/ContactCTASection'

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Company Highlights & Value Propositions Bar */}
      <HighlightsBar />

      {/* 3. Comprehensive Technology Solutions (7 Services) */}
      <ServicesSection />

      {/* 4. Featured Projects (4 Core Projects) */}
      <FeaturedProjectsSection />

      {/* 5. Why Choose Us (4 Principles) */}
      <WhyChooseUsSection />

      {/* 6. Team Preview (Founders Introduction) */}
      <TeamPreviewSection />

      {/* 7. Contact Call-To-Action Banner */}
      <ContactCTASection />
    </div>
  )
}

export default HomePage
