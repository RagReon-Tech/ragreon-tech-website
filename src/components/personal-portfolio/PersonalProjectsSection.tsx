import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Filter,
  FolderOpen,
  Sparkles,
} from 'lucide-react'
import { GitHubIcon } from '@/components/common/SocialIcons'
import type { ProjectDomain, ProjectItem } from '@/types/project.types'
import type { ResolvedPersonalPortfolio } from '@/types/personal-portfolio.types'

interface PersonalProjectsSectionProps {
  portfolio: ResolvedPersonalPortfolio
}

type ActiveFilter = 'all' | ProjectDomain

export const PersonalProjectsSection: React.FC<PersonalProjectsSectionProps> = ({
  portfolio,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<ActiveFilter>('all')
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  // Compute accurate counts per domain tab
  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: portfolio.projects.length,
    }
    portfolio.availableDomains.forEach((dom) => {
      counts[dom] = portfolio.projects.filter((project) => {
        const projectDomains =
          project.domains && project.domains.length > 0
            ? project.domains
            : [project.domain]
        return projectDomains.includes(dom)
      }).length
    })
    return counts
  }, [portfolio.projects, portfolio.availableDomains])

  // Filter projects according to active tab
  const filteredProjects = useMemo(() => {
    if (selectedDomain === 'all') return portfolio.projects
    return portfolio.projects.filter((project) => {
      const projectDomains =
        project.domains && project.domains.length > 0
          ? project.domains
          : [project.domain]
      return projectDomains.includes(selectedDomain)
    })
  }, [portfolio.projects, selectedDomain])

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section
      id="projects"
      className="py-14 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-16"
    >
      <div className="container-custom space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
              <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
              <span>PERSONAL PROJECTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Featured Engineering Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Verified projects built and contributed by {portfolio.shortName}. Click any project to inspect its full technical architecture, documentation, and gallery.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50/80 border border-blue-200/70 text-xs font-bold text-[#0B132B] self-start md:self-auto shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>
              Showing {filteredProjects.length} of {portfolio.projects.length} Projects
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-2 p-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90"
          role="tablist"
          aria-label="Filter projects by domain"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>Filter:</span>
          </span>

          <button
            type="button"
            role="tab"
            aria-selected={selectedDomain === 'all'}
            onClick={() => setSelectedDomain('all')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedDomain === 'all'
                ? 'bg-[#0066FF] text-white shadow-sm shadow-blue-500/25'
                : 'bg-white text-slate-700 border border-slate-200/80 hover:border-blue-300 hover:text-[#0066FF]'
            }`}
          >
            <span>All Projects</span>
            <span
              className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                selectedDomain === 'all'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {domainCounts.all}
            </span>
          </button>

          {portfolio.availableDomains.map((domain) => {
            const isActive = selectedDomain === domain
            return (
              <button
                key={domain}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedDomain(domain)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0066FF] text-white shadow-sm shadow-blue-500/25'
                    : 'bg-white text-slate-700 border border-slate-200/80 hover:border-blue-300 hover:text-[#0066FF]'
                }`}
              >
                <span>{domain}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {domainCounts[domain]}
                </span>
              </button>
            )
          })}
        </div>

        {/* Project Cards Gallery Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project: ProjectItem) => {
              const isCompleted = project.status === 'Completed'
              const hasImgError = imageErrors[project.id]
              const projectUrl = `/portfolio/${project.slug}`
              const displayDomains =
                project.domains && project.domains.length > 0
                  ? project.domains
                  : [project.domain]

              return (
                <article
                  key={project.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Real Project Cover Image */}
                    <Link
                      to={projectUrl}
                      className="block relative aspect-[16/10] bg-[#0B132B] overflow-hidden"
                      aria-label={`Open full details for ${project.title}`}
                    >
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3 z-20 pointer-events-none">
                        {isCompleted ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#10B981] text-slate-950 shadow-md">
                            <CheckCircle2 className="w-3 h-3 text-slate-950" />
                            <span>Completed</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#F59E0B] text-slate-950 shadow-md">
                            <Clock className="w-3 h-3 text-slate-950" />
                            <span>In Progress</span>
                          </span>
                        )}
                      </div>

                      {project.image && !hasImgError ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-5 text-center bg-gradient-to-br from-[#060B18] via-[#0B132B] to-[#111C3D]">
                          <FolderOpen className="w-10 h-10 text-blue-400 mb-2" />
                          <span className="text-xs font-semibold text-slate-300">
                            {project.category}
                          </span>
                        </div>
                      )}
                    </Link>

                    {/* Project Metadata & Summary */}
                    <div className="p-5 sm:p-6 space-y-3.5">
                      {/* Domain Pills */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {displayDomains.map((dom) => (
                          <span
                            key={dom}
                            className="text-[10px] font-semibold text-[#0066FF] bg-blue-50/90 border border-blue-200/70 px-2 py-0.5 rounded-md"
                          >
                            {dom}
                          </span>
                        ))}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-base sm:text-lg font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors leading-snug">
                        <Link to={projectUrl} className="hover:underline">
                          {project.title}
                        </Link>
                      </h3>

                      {/* Short Summary */}
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Verified Metrics Strip (only when present in registry) */}
                      {project.metrics && (
                        <div className="text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1.5">
                          {project.metrics}
                        </div>
                      )}

                      {/* Technology Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-slate-100/90 text-slate-700 border border-slate-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200">
                            +{project.techStack.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 flex items-center gap-2 border-t border-slate-100">
                    <Link
                      to={projectUrl}
                      className="flex-1 bg-[#0066FF] hover:bg-[#0052CC] text-white py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20 group-hover:shadow-blue-500/35 transition-all"
                      aria-label={`View full project details for ${project.title}`}
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`GitHub Repository for ${project.title}`}
                        aria-label={`Open GitHub repository for ${project.title}`}
                        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#0B132B] text-slate-700 hover:text-white border border-slate-200/80 flex items-center justify-center shrink-0 transition-colors"
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Live Demo for ${project.title}`}
                        aria-label={`Open live demo for ${project.title}`}
                        className="w-10 h-10 rounded-xl bg-blue-50 hover:bg-[#0066FF] text-[#0066FF] hover:text-white border border-blue-200/80 flex items-center justify-center shrink-0 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-10 text-center space-y-3">
            <p className="text-sm font-semibold text-[#0B132B]">
              No projects found in this category.
            </p>
            <button
              type="button"
              onClick={() => setSelectedDomain('all')}
              className="px-4 py-2 rounded-xl bg-[#0066FF] text-white text-xs font-bold hover:bg-[#0052CC] transition-colors cursor-pointer"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default PersonalProjectsSection
