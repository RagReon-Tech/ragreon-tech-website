import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Layers,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from 'lucide-react'
import type { UserPortalItem } from '@/types/project-details.types'
import { renderNamedIcon } from './iconHelper'

interface ProjectPortalsProps {
  portals?: UserPortalItem[]
  projectTitle: string
}

export const ProjectPortals: React.FC<ProjectPortalsProps> = ({
  portals,
  projectTitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null)
      } else if (e.key === 'ArrowRight' && portals) {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % portals.length : 0))
      } else if (e.key === 'ArrowLeft' && portals) {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + portals.length) % portals.length : 0,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedIndex, portals])

  if (!portals || portals.length === 0) return null

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % portals.length)
    }
  }

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + portals.length) % portals.length)
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/80" id="user-portals">
      <div className="container-custom space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Role-Based System Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Four Portals. One Unified System.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            The Student Information System delivers tailored, distraction-free digital environments
            specifically designed for each institutional stakeholder.
          </p>
        </div>

        {/* Four Cards Responsive Layout (4 on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Screenshot Frame with Zoom Hint */}
                <div
                  onClick={() => setSelectedIndex(idx)}
                  className="relative aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer border-b border-slate-100"
                  role="button"
                  tabIndex={0}
                  aria-label={`Open full screenshot of ${portal.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedIndex(idx)
                    }
                  }}
                >
                  <img
                    src={portal.image}
                    alt={`${portal.name} Dashboard Screenshot`}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Portal Badge */}
                  <div className="absolute top-3 left-3 bg-[#0B132B]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold text-white border border-slate-700/60 shadow-xs flex items-center gap-1.5">
                    {renderNamedIcon(portal.iconName || 'UserCheck', 'w-3 h-3 text-blue-400')}
                    <span>{portal.subtitle || portal.name}</span>
                  </div>

                  {/* Zoom Hint */}
                  <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-lg bg-slate-950/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors">
                      {portal.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {portal.description}
                    </p>
                  </div>

                  {/* Functionalities Checklist */}
                  <div className="pt-2 space-y-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Functionalities
                    </span>
                    <ul className="space-y-1.5">
                      {portal.functionalities.map((func, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 leading-snug"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{func}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action: View Fullscreen */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-[#0066FF] bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200/60"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge Screenshot</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full-Size Screenshot Viewing */}
      <AnimatePresence>
        {selectedIndex !== null && portals[selectedIndex] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${portals[selectedIndex].name} Screenshot Fullscreen`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="Close fullscreen view"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl max-h-[75vh]">
                <img
                  src={portals[selectedIndex].image}
                  alt={`${portals[selectedIndex].name} Full Screenshot`}
                  className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
                />
              </div>

              {/* Lightbox Footer Bar with Info & Navigation */}
              <div className="w-full flex items-center justify-between pt-4 px-2 text-white">
                <div>
                  <div className="text-sm font-bold text-white">
                    {portals[selectedIndex].name}
                  </div>
                  <div className="text-xs text-slate-300">
                    {portals[selectedIndex].subtitle || projectTitle}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
                    aria-label="Previous portal screenshot"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 px-2">
                    {selectedIndex + 1} / {portals.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
                    aria-label="Next portal screenshot"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectPortals

