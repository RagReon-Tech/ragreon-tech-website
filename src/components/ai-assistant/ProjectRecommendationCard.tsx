import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, CheckCircle2, Clock, Users } from 'lucide-react'
import { GitHubIcon } from '@/components/common/SocialIcons'
import type { ProjectCardData } from '@/types/assistant.types'

interface ProjectRecommendationCardProps {
  project: ProjectCardData
  onNavigate?: () => void
}

export const ProjectRecommendationCard: React.FC<ProjectRecommendationCardProps> = ({
  project,
  onNavigate,
}) => {
  const isCompleted = project.status === 'Completed'

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 text-left my-2.5">
      {/* Cover Image if available */}
      {project.image && (
        <div className="relative w-full h-32 bg-slate-100 overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              // Hide image if missing
              ;(e.currentTarget as HTMLElement).style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Badges Overlay */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-white">
              {project.domain || project.category}
            </span>

            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-sm ${
                isCompleted
                  ? 'bg-emerald-500/90 text-white'
                  : 'bg-amber-500/90 text-white'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-3 h-3" /> Completed
                </>
              ) : (
                <>
                  <Clock className="w-3 h-3" /> In Progress
                </>
              )}
            </span>
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="p-3.5 space-y-2.5">
        <div>
          {!project.image && (
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {project.domain || project.category}
              </span>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                  isCompleted
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}
              >
                {isCompleted ? 'Completed' : 'In Progress'}
              </span>
            </div>
          )}

          <h4 className="text-sm font-bold text-[#0B132B] line-clamp-1 leading-snug">
            {project.title}
          </h4>
          <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Chips */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 bg-slate-50 text-slate-500 rounded-md">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Contributor Information */}
        {project.contributorsText && (
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-0.5">
            <Users className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="truncate">
              <strong className="text-slate-700 font-medium">Contributors:</strong>{' '}
              {project.contributorsText}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
          <Link
            to={`/portfolio/${project.slug}`}
            onClick={onNavigate}
            className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-[#0066FF] hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm hover:shadow transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="inline-flex items-center justify-center p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="inline-flex items-center justify-center p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
              title="GitHub Repository"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
