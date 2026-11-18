import React, { useEffect } from 'react'
import { PortfolioHeroSection } from '@/components/sections/portfolio/PortfolioHeroSection'
import { PortfolioGridSection } from '@/components/sections/portfolio/PortfolioGridSection'
import { PortfolioCTASection } from '@/components/sections/portfolio/PortfolioCTASection'

export const PortfolioPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Portfolio | RagReon Tech - Software, AI & Automation'
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION A: Portfolio Hero with Live Stat Counters & 3D Tech Illustration */}
      <PortfolioHeroSection />

      {/* SECTION B & C: Filter Controls & Responsive Project Cards Grid */}
      <PortfolioGridSection />

      {/* SECTION 9: Bottom Call-To-Action Banner */}
      <PortfolioCTASection />
    </div>
  )
}

export default PortfolioPage
