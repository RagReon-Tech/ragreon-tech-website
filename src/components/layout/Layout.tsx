import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useScrollToTop } from '@/hooks/useScrollToTop'

export interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Automatically scroll to top on route change
  useScrollToTop()

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Shared Header Navigation */}
      <Navbar />

      {/* Main Page Content Body */}
      <main id="main-content" className="flex-1 flex flex-col">
        {children || <Outlet />}
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  )
}

export default Layout
