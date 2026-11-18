import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FolderGit2, Sparkles } from 'lucide-react'
import { projectsData } from '@/data/projects'
import type { ProjectItem } from '@/types/project.types'
import { ProjectCard } from '@/components/sections/portfolio/ProjectCard'

interface ServiceRelatedProjectsProps {
  projectSlugs: string[]
  serviceTitle: string
}

export const ServiceRelatedProjects: React.FC<ServiceRelatedProjectsProps> = ({
  projectSlugs,
  serviceTitle,
}) => {
  // Map slugs to full ProjectItem objects in exact requested order
  const relatedProjects: ProjectItem[] = projectSlugs
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter((p): p is ProjectItem => Boolean(p))

  if (relatedProjects.length === 0) {
    return null
  }

  return (
    <section id="related-projects" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="container-custom space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
              <FolderGit2 className="w-4 h-4 text-[#0066FF]" />
              <span>Demonstrated Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Projects Built in {serviceTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Explore concrete platforms, dashboards, and automated systems we have architected and deployed in this domain.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-blue-50 text-[#0066FF] border border-blue-200">
              {relatedProjects.length} Verified {relatedProjects.length === 1 ? 'Project' : 'Projects'}
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {relatedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Portfolio Link */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
            Looking for something tailored to your industry? We architect bespoke solutions.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#0066FF] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Browse All Portfolio Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceRelatedProjects

