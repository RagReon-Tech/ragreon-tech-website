import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Code2,
  BrainCircuit,
  BarChart3,
  Cpu,
  Terminal,
  ScanEye,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react'
import type { ProjectItem, ProjectDomain } from '@/types/project.types'

interface ProjectCardProps {
  project: ProjectItem
  onSelect?: (project: ProjectItem) => void
}

/**
 * Returns a domain-specific Lucide icon for projects without dedicated screenshots.
 */
const getDomainIcon = (domain: ProjectDomain) => {
  switch (domain) {
    case 'Web Development':
      return <Code2 className="w-8 h-8 text-blue-400" />
    case 'AI & Machine Learning':
      return <BrainCircuit className="w-8 h-8 text-indigo-400" />
    case 'Data Science':
      return <BarChart3 className="w-8 h-8 text-emerald-400" />
    case 'Data Analytics':
      return <BarChart3 className="w-8 h-8 text-cyan-400" />
    case 'IoT & Embedded Systems':
      return <Cpu className="w-8 h-8 text-orange-400" />
    case 'Python Development':
      return <Terminal className="w-8 h-8 text-amber-400" />
    case 'Deep Learning & Computer Vision':
      return <ScanEye className="w-8 h-8 text-emerald-400" />
    default:
      return <Sparkles className="w-8 h-8 text-blue-400" />
  }
}

/**
 * Returns subtle accent glow colors for the card fallback illustration.
 */
const getDomainGlow = (domain: ProjectDomain) => {
  switch (domain) {
    case 'Web Development':
      return 'from-blue-600/30 via-indigo-600/10 to-transparent'
    case 'AI & Machine Learning':
      return 'from-indigo-600/30 via-purple-600/10 to-transparent'
    case 'Data Science':
      return 'from-emerald-600/30 via-cyan-600/10 to-transparent'
    case 'Data Analytics':
      return 'from-cyan-600/30 via-blue-600/10 to-transparent'
    case 'IoT & Embedded Systems':
      return 'from-orange-600/30 via-amber-600/10 to-transparent'
    case 'Python Development':
      return 'from-amber-600/30 via-yellow-600/10 to-transparent'
    case 'Deep Learning & Computer Vision':
      return 'from-emerald-600/30 via-teal-600/10 to-transparent'
    default:
      return 'from-blue-600/30 via-cyan-600/10 to-transparent'
  }
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false)
  const isCompleted = project.status === 'Completed'
  const projectUrl = `/portfolio/${project.slug}`

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Thumbnail Area with 16:10 aspect ratio */}
        <Link to={projectUrl} className="block relative aspect-[16/10] bg-[#0B132B] overflow-hidden">
          {/* Status Badge in top right corner */}
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

          {/* Actual Image if available and not errored */}
          {project.image && !imageError ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Branded High-Tech Placeholder */
            <div className="w-full h-full relative flex flex-col justify-between p-4 sm:p-5 select-none overflow-hidden bg-gradient-to-br from-[#060B18] via-[#0B132B] to-[#111C3D]">
              {/* Subtle Tech Grid lines */}
              <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"
                aria-hidden="true"
              />

              {/* Ambient radial lighting */}
              <div
                className={`absolute -top-10 -left-10 w-44 h-44 bg-gradient-to-br ${getDomainGlow(
                  project.domain,
                )} rounded-full blur-2xl pointer-events-none`}
                aria-hidden="true"
              />

              {/* Domain & Watermark Category */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2 py-0.5 rounded">
                  {project.domain}
                </span>
              </div>

              {/* Central Domain Icon with subtle pulse */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <div className="w-14 h-14 rounded-2xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {getDomainIcon(project.domain)}
                </div>
              </div>

              {/* Category / Technical Indicator */}
              <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-800/80">
                <span className="truncate max-w-[200px]">{project.category}</span>
                <span className="text-slate-500">RagReon</span>
              </div>
            </div>
          )}
        </Link>

        {/* Card Content */}
        <div className="p-5 sm:p-6 space-y-3.5">
          {/* Multi-Domain badges if multiple exist */}
          {project.domains && project.domains.length > 1 && (
            <div className="flex flex-wrap items-center gap-1.5 pb-0.5">
              {project.domains.map((dom) => (
                <span
                  key={dom}
                  className="text-[10px] font-semibold text-[#0066FF] bg-blue-50/90 border border-blue-200/70 px-2 py-0.5 rounded-md"
                >
                  {dom}
                </span>
              ))}
            </div>
          )}

          {/* Project Title */}
          <h3 className="text-base sm:text-lg font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors leading-snug">
            <Link to={projectUrl} className="hover:underline">
              {project.shortTitle || project.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-blue-50 text-[#0066FF] border border-blue-200/60"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Button: Navigates directly to project details page */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1">
        <Link
          to={projectUrl}
          className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20 group-hover:shadow-blue-500/35 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
          aria-label={`View full details for ${project.title}`}
        >
          <span>View Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
