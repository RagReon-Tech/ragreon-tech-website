import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Clock,
  Layers,
  ExternalLink,
  Play,
  Code2,
  BrainCircuit,
  BarChart3,
  Cpu,
  Terminal,
  ScanEye,
  Sparkles,
  FileText,
} from 'lucide-react'
import { GitHubIcon } from '@/components/common/SocialIcons'
import type { ProjectDetails } from '@/types/project-details.types'
import type { ProjectDomain } from '@/types/project.types'

interface ProjectHeroProps {
  project: ProjectDetails
}

const getDomainIcon = (domain: ProjectDomain) => {
  switch (domain) {
    case 'Web Development':
      return <Code2 className="w-12 h-12 text-blue-400" />
    case 'AI & Machine Learning':
      return <BrainCircuit className="w-12 h-12 text-indigo-400" />
    case 'Data Analytics':
      return <BarChart3 className="w-12 h-12 text-cyan-400" />
    case 'IoT & Embedded Systems':
      return <Cpu className="w-12 h-12 text-orange-400" />
    case 'Python Development':
      return <Terminal className="w-12 h-12 text-amber-400" />
    case 'Deep Learning & Computer Vision':
      return <ScanEye className="w-12 h-12 text-emerald-400" />
    default:
      return <Sparkles className="w-12 h-12 text-blue-400" />
  }
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false)
  const isCompleted = project.status === 'Completed'

  // Determine cover image candidate: project.coverImage or project asset folder
  const candidateImage = project.coverImage || `${project.assetFolderPath}cover.png`

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50/40 py-10 sm:py-14 lg:py-18 border-b border-slate-200/80">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Metadata, Title, Description, Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-5 text-left"
          >
            {/* Badges: Domains/Category & Status */}
            <div className="flex flex-wrap items-center gap-2">
              {project.domains && project.domains.length > 0 ? (
                project.domains.map((dom) => (
                  <span
                    key={dom}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0066FF] border border-blue-200/80 shadow-xs"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{dom}</span>
                  </span>
                ))
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0066FF] border border-blue-200/80">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{project.category}</span>
                </span>
              )}

              {isCompleted ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#10B981] text-slate-950 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                  <span>Completed</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F59E0B] text-slate-950 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-slate-950" />
                  <span>In Progress</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-[#0B132B] tracking-tight leading-[1.18]">
              {project.title}
            </h1>

            {/* Subtitle if available */}
            {project.subtitle && (
              <p className="text-base sm:text-lg font-medium text-[#0066FF] leading-snug">
                {project.subtitle}
              </p>
            )}

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {project.shortDescription}
            </p>

            {/* Technology Stack Tags */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Technologies
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-semibold bg-white text-[#0066FF] border border-blue-200/80 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: GitHub, Demo, & Watch Demo */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {project.links?.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#0066FF] text-white hover:bg-[#0052CC] transition-colors shadow-md shadow-blue-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{project.links.liveDemoLabel || 'Visit Live Application'}</span>
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>{project.links.githubLabel || 'View Source Code'}</span>
                </a>
              )}
              {project.pdfReport && (
                <button
                  type="button"
                  onClick={() => {
                    const pdfElement =
                      document.getElementById('interactive-pdf-report') ||
                      document.getElementById('project-report-pdf')
                    if (pdfElement) {
                      pdfElement.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#0066FF] text-white hover:bg-[#0052CC] transition-colors shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>{project.pdfReport.buttonLabel || 'Explore Dashboard Report'}</span>
                </button>
              )}
              {project.demoVideo && (
                <button
                  type="button"
                  onClick={() => {
                    const videoElement =
                      document.getElementById('project-video') ||
                      document.getElementById('demo-video')
                    if (videoElement) {
                      videoElement.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                >
                  <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                  <span>Watch Demo</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Right Column: Large Cover Image or Branded Technology Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 aspect-[16/10] group">
              {candidateImage && !imageError ? (
                <img
                  src={candidateImage}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={() => setImageError(true)}
                />
              ) : (
                /* High-tech Branded Fallback Visual */
                <div className="w-full h-full relative flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-[#060B18] via-[#0B132B] to-[#111C3D] select-none">
                  {/* Subtle Tech Grid */}
                  <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Ambient Glow */}
                  <div
                    className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold tracking-wider uppercase text-blue-400 bg-blue-950/80 border border-blue-800/80 px-2.5 py-1 rounded-md">
                      {project.domain}
                    </span>
                    <span className="text-xs font-mono text-slate-400">RagReon Tech</span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-3">
                    <div className="w-20 h-20 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-xl">
                      {getDomainIcon(project.domain)}
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-white tracking-tight">
                        {project.shortTitle || project.title}
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        Technical Architecture Showcase
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-xs text-slate-500 font-mono pt-2 border-t border-slate-800">
                    <span>{project.category}</span>
                    <span>Verified Project</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero

