import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceDetailsPage } from '@/pages/ServiceDetailsPage'
import { PortfolioPage } from '@/pages/PortfolioPage'
import { ProjectDetailsPage } from '@/pages/ProjectDetailsPage'
import { TeamPage } from '@/pages/TeamPage'
import { ContactPage } from '@/pages/ContactPage'
import { StartProjectPage } from '@/pages/StartProjectPage'
import { PersonalPortfolioPage } from '@/pages/PersonalPortfolioPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

import { ConsultationModalProvider } from '@/context/ConsultationModalContext'
import { ConsultationModal } from '@/components/common/ConsultationModal'

export const App: React.FC = () => {
  return (
    <ConsultationModalProvider>
      <Routes>
        {/* Dedicated Individual Personal Portfolios */}
        <Route
          path="/sreeram"
          element={<PersonalPortfolioPage portfolioId="sreeram" />}
        />
        <Route
          path="/raghuraman"
          element={<PersonalPortfolioPage portfolioId="raghuraman" />}
        />

        {/* Main RagReon Tech Company Website */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailsPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/:slug" element={<ProjectDetailsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="start-project" element={<StartProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ConsultationModal />
    </ConsultationModalProvider>
  )
}

export default App
