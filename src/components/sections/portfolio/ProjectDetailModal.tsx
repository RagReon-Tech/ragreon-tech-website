import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Check,
  AlertCircle,
} from 'lucide-react'
import { GitHubIcon } from '@/components/common/SocialIcons'
import type { ProjectItem } from '@/types/project.types'
import { useConsultationModal } from '@/context/ConsultationModalContext'

interface ProjectDetailModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const { openModal } = useConsultationModal()
  const modalContentRef = useRef<HTMLDivElement>(null)

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (project) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [project, onClose])

  if (!project) return null

  const isCompleted = project.status === 'Completed'

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <motion.div
          ref={modalContentRef}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Modal Top Header */}
          <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70 shrink-0">
            <div className="space-y-1.5 pr-4">
              <div className="flex flex-wrap items-center gap-2">
                {/* Category Pill */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0066FF] border border-blue-200/80">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{project.category}</span>
                </span>

                {/* Status Badge */}
                {isCompleted ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#10B981] text-slate-950">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                    <span>Completed</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#F59E0B] text-slate-950">
                    <Clock className="w-3.5 h-3.5 text-slate-950" />
                    <span>In Progress</span>
                  </span>
                )}
              </div>

              <h2
                id="project-modal-title"
                className="text-xl sm:text-2xl font-extrabold text-[#0B132B] tracking-tight leading-snug pt-1"
              >
                {project.title}
              </h2>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] cursor-pointer shrink-0"
              aria-label="Close project details modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-5 sm:p-8 space-y-6 overflow-y-auto flex-1">
            {/* Project Image Banner if available */}
            {project.image && (
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Overview / Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Project Overview
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution Grid (if verified) */}
            {(project.challenge || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {project.challenge && (
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 sm:p-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF]">
                      <Sparkles className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>Engineering Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features (if verified) */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Technical Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white border border-slate-200/90 rounded-xl p-3 shadow-xs"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Tags */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Technologies &amp; Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 text-[#0066FF] border border-blue-200/80 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50/90 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 shrink-0">
            {/* Optional Links (GitHub / Live Demo) */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#0066FF] bg-blue-50 border border-blue-200/80 hover:bg-blue-100 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            {/* Primary Action Button: Start a Project Consultation */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose()
                  openModal()
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss This Project</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ProjectDetailModal
