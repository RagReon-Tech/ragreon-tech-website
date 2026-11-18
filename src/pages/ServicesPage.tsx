import React, { useEffect } from 'react'
import { ServicesHeroSection } from '@/components/sections/services/ServicesHeroSection'
import { ServicesGridSection } from '@/components/sections/services/ServicesGridSection'
import { WhyChooseUsServicesSection } from '@/components/sections/services/WhyChooseUsServicesSection'
import { ServicesCTASection } from '@/components/sections/services/ServicesCTASection'

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services | RagReon Tech - Software, AI & Automation'
  }, [])

  return (
    <div className="flex flex-col">
      {/* 1. Services Hero Section */}
      <ServicesHeroSection />

      {/* 2. Comprehensive Technology Solutions (7 Services Grid: 4 in Row 1, 3 in Row 2) */}
      <ServicesGridSection />

      {/* 3. Why Choose Us Section (4 Value Propositions) */}
      <WhyChooseUsServicesSection />

      {/* 4. Bottom Contact Call To Action */}
      <ServicesCTASection />
    </div>
  )
}

export default ServicesPage
