import React from 'react'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { PersonalPortfolioNavbar } from './PersonalPortfolioNavbar'
import { PersonalPortfolioFooter } from './PersonalPortfolioFooter'
import type { ResolvedPersonalPortfolio } from '@/types/personal-portfolio.types'

interface PersonalPortfolioLayoutProps {
  portfolio: ResolvedPersonalPortfolio
  children: React.ReactNode
}

export const PersonalPortfolioLayout: React.FC<PersonalPortfolioLayoutProps> = ({
  portfolio,
  children,
}) => {
  useScrollToTop()

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#0066FF] selection:text-white">
      {/* Accessibility Skip Link */}
      <a
        href="#personal-main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0066FF] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Dedicated Personal Portfolio Header Navigation */}
      <PersonalPortfolioNavbar portfolio={portfolio} />

      {/* Main Content */}
      <main id="personal-main-content" className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Dedicated Personal Portfolio Footer */}
      <PersonalPortfolioFooter portfolio={portfolio} />
    </div>
  )
}

export default PersonalPortfolioLayout
