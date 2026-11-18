import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home, Briefcase, ArrowLeft } from 'lucide-react'

interface ProjectBreadcrumbProps {
  title: string
}

export const ProjectBreadcrumb: React.FC<ProjectBreadcrumbProps> = ({ title }) => {
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
              to="/portfolio"
              className="hover:text-[#0066FF] flex items-center gap-1 transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Portfolio</span>
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

        {/* Back to Portfolio quick link */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#0066FF] bg-blue-50 hover:bg-blue-100 transition-colors shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    </nav>
  )
}

export default ProjectBreadcrumb

