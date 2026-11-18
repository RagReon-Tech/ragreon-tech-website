import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FolderSearch, RotateCcw } from 'lucide-react'
import { projectsData } from '@/data/projects'
import {
  PortfolioFilterBar,
  type FilterCategory,
  type FilterStatus,
  type FilterCounts,
} from './PortfolioFilterBar'
import { ProjectCard } from './ProjectCard'
import { domainToSlug, slugToDomain } from '@/utils/domainRouting'

export const PortfolioGridSection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const domainQuery = searchParams.get('domain')

  // Automatically activate the matching domain filter from the URL query parameter
  // Gracefully falls back to 'all' if parameter is unrecognised, empty, or missing
  const selectedCategory: FilterCategory = useMemo(() => {
    return slugToDomain(domainQuery)
  }, [domainQuery])

  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Synchronise category changes with the URL search parameters
  const handleCategoryChange = (category: FilterCategory) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        const slug = domainToSlug(category)
        if (slug) {
          next.set('domain', slug)
        } else {
          next.delete('domain')
        }
        return next
      },
      { replace: false },
    )
  }

  // Smoothly scroll to the portfolio grid when a domain parameter is detected
  useEffect(() => {
    if (domainQuery) {
      const gridElement = document.getElementById('portfolio-grid')
      if (gridElement) {
        const timer = setTimeout(() => {
          gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 120)
        return () => clearTimeout(timer)
      }
    }
  }, [domainQuery])

  // Compute filtered projects list
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // 1. Category / Domain filter (supports single & multi-domain projects)
      if (selectedCategory !== 'all') {
        const projectDomains =
          project.domains && project.domains.length > 0 ? project.domains : [project.domain]
        if (!projectDomains.includes(selectedCategory)) return false
      }

      // 2. Status filter
      if (selectedStatus !== 'all') {
        if (project.status !== selectedStatus) return false
      }

      // 3. Search query filter
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase().trim()
        const titleMatch = project.title.toLowerCase().includes(query)
        const descMatch = project.description.toLowerCase().includes(query)
        const catMatch = project.category.toLowerCase().includes(query)
        const techMatch = project.techStack.some((t) => t.toLowerCase().includes(query))
        if (!titleMatch && !descMatch && !catMatch && !techMatch) return false
      }

      return true
    })
  }, [selectedCategory, selectedStatus, searchQuery])

  // Compute dynamic badge counts for filter bar
  const filterCounts: FilterCounts = useMemo(() => {
    const categoryCounts: Record<FilterCategory, number> = {
      all: projectsData.length,
      'Web Development': 0,
      'Data Science': 0,
      'AI & Machine Learning': 0,
      'Data Analytics': 0,
      'IoT & Embedded Systems': 0,
      'Python Development': 0,
      'Deep Learning & Computer Vision': 0,
    }

    const statusCounts: Record<FilterStatus, number> = {
      all: projectsData.length,
      Completed: 0,
      'In Progress': 0,
    }

    projectsData.forEach((project) => {
      const projectDomains =
        project.domains && project.domains.length > 0 ? project.domains : [project.domain]

      projectDomains.forEach((dom) => {
        if (categoryCounts[dom] !== undefined) {
          categoryCounts[dom] += 1
        }
      })

      if (statusCounts[project.status] !== undefined) {
        statusCounts[project.status] += 1
      }
    })

    return {
      categoryCounts,
      statusCounts,
      totalCount: projectsData.length,
      filteredCount: filteredProjects.length,
    }
  }, [filteredProjects.length])

  const handleResetFilters = () => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        next.delete('domain')
        return next
      },
      { replace: false },
    )
    setSelectedStatus('all')
    setSearchQuery('')
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/60" id="portfolio-grid">
      <div className="container-custom space-y-10 sm:space-y-12">
        {/* SECTION B: Filter Controls Bar */}
        <PortfolioFilterBar
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
          searchQuery={searchQuery}
          onCategoryChange={handleCategoryChange}
          onStatusChange={setSelectedStatus}
          onSearchChange={setSearchQuery}
          onResetFilters={handleResetFilters}
          counts={filterCounts}
        />

        {/* SECTION C: Responsive Project Grid (3 col desktop, 2 col tablet, 1 col mobile) */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          /* Empty State when no projects match */
          <div className="bg-white rounded-3xl border border-slate-200/90 p-10 sm:p-16 text-center max-w-xl mx-auto shadow-sm space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 text-[#0066FF] flex items-center justify-center mx-auto shadow-sm">
              <FolderSearch className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#0B132B]">No Projects Found</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                We couldn't find any projects matching your current filter criteria.
                Try selecting a different domain or reset your filters.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Filters</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PortfolioGridSection
