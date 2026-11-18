import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react'
import { projectsData } from '@/data/projects'
import { Card } from '@/components/common/Card'

/**
 * Explicit ordered list of featured project slugs to showcase on the homepage.
 */
const FEATURED_PROJECT_SLUGS = [
  'uk-transportation-analysis',
  'bloodchain-ai',
  'bis-smartassist',
  'plant-disease-prediction',
]

export const FeaturedProjectsSection: React.FC = () => {
  // Resolve the 4 featured projects in exact designated order
  const featuredProjects = FEATURED_PROJECT_SLUGS.map((slug) =>
    projectsData.find((p) => p.slug === slug),
  ).filter((p): p is (typeof projectsData)[number] => Boolean(p))

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/60">
      <div className="container-custom space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
              <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
              <span>Featured Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Our Recent Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              A showcase of our latest projects and practical technical implementations.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#0066FF] bg-blue-50 border border-blue-200/80 hover:bg-blue-100 transition-colors self-start md:self-auto shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.slug}`}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl"
            >
              <Card
                padding="none"
                hoverEffect
                className="overflow-hidden h-full flex flex-col justify-between border-slate-200/90 bg-white shadow-sm"
              >
                <div>
                  {/* Image Container with Aspect Ratio */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-slate-500 text-xs">
                        {project.title}
                      </div>
                    )}
                    {/* Category Overlay Tag */}
                    <div className="absolute top-3 left-3 bg-[#0B132B]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold text-white border border-slate-700/60 shadow-sm">
                      {project.category}
                    </div>

                    {/* Status Badge in top right corner */}
                    <div className="absolute top-3 right-3 z-10 pointer-events-none">
                      {project.status === 'Completed' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#10B981] text-slate-950 shadow-md">
                          <CheckCircle2 className="w-3 h-3 text-slate-950" />
                          <span>Completed</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#F59E0B] text-slate-950 shadow-md">
                          <Clock className="w-3 h-3 text-slate-950" />
                          <span>In Progress</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack & Arrow Button */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1 text-[10px] text-slate-500 font-medium">
                    {project.techStack.slice(0, 2).map((tech, idx) => (
                      <span key={tech} className="inline-flex items-center">
                        {tech}
                        {idx < 1 && project.techStack.length > 1 && (
                          <span className="mx-1 text-slate-300">•</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center group-hover:bg-[#0066FF] group-hover:text-white transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectsSection
