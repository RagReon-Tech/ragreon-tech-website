import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home, Layers, ArrowLeft } from 'lucide-react'

interface ServiceBreadcrumbProps {
  title: string
}

export const ServiceBreadcrumb: React.FC<ServiceBreadcrumbProps> = ({ title }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white border-b border-slate-200/80 sticky top-20 z-30 transition-all shadow-xs"
    >
      <div className="container-custom py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Breadcrumb Trail */}
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-slate-500 font-medium">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="hover:text-[#0066FF] flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          <li aria-hidden="true" className="text-slate-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>

          <li className="inline-flex items-center">
            <Link
              to="/services"
              className="hover:text-[#0066FF] flex items-center gap-1 transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Services</span>
            </Link>
          </li>

          <li aria-hidden="true" className="text-slate-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>

          <li aria-current="page">
            <span className="font-semibold text-[#0B132B] truncate max-w-[200px] sm:max-w-xs md:max-w-md inline-block align-bottom">
              {title}
            </span>
          </li>
        </ol>

        {/* Back to All Services link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#0066FF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Services</span>
        </Link>
      </div>
    </nav>
  )
}

export default ServiceBreadcrumb

