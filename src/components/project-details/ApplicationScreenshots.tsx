import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Monitor,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from 'lucide-react'
import type { ApplicationScreenshotItem } from '@/types/project-details.types'

interface ApplicationScreenshotsProps {
  screenshots?: ApplicationScreenshotItem[]
  projectTitle: string
}

export const ApplicationScreenshots: React.FC<ApplicationScreenshotsProps> = ({
  screenshots,
  projectTitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null)
      } else if (e.key === 'ArrowRight' && screenshots) {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % screenshots.length : 0))
      } else if (e.key === 'ArrowLeft' && screenshots) {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + screenshots.length) % screenshots.length : 0,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedIndex, screenshots])

  if (!screenshots || screenshots.length === 0) return null

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % screenshots.length)
    }
  }

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + screenshots.length) % screenshots.length)
    }
  }

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/80"
      id="application-screenshots"
    >
      <div className="container-custom space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Monitor className="w-3.5 h-3.5" />
            <span>Interactive Web Application UI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Application Interface &amp; Features
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            High-fidelity captures from the live deployed {projectTitle} platform, illustrating
            the complete end-to-end user workflow from applicant data intake to risk simulation and
            dossier export.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((item, idx) => (
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
                  aria-label={`Open full screenshot of ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedIndex(idx)
                    }
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Optional Badge */}
                  {item.badge && (
                    <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded border border-slate-700">
                      {item.badge}
                    </div>
                  )}

                  {/* Hover Zoom Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 text-slate-900 text-xs font-semibold shadow-lg">
                      <ZoomIn className="w-3.5 h-3.5 text-[#0066FF]" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-2">
                  <h3 className="text-base font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-[#0066FF] border border-slate-200/80 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>View Screenshot</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedIndex(null)}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
                aria-label="Close image lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Navigation Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Navigation Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-slate-700"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
                  <div>
                    {screenshots[selectedIndex].badge && (
                      <span className="text-[10px] font-mono uppercase text-blue-400 bg-blue-950/80 border border-blue-800 px-2 py-0.5 rounded">
                        {screenshots[selectedIndex].badge}
                      </span>
                    )}
                    <h3 className="text-base sm:text-lg font-bold mt-1">
                      {screenshots[selectedIndex].title}
                    </h3>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {selectedIndex + 1} of {screenshots.length}
                  </div>
                </div>

                {/* Modal Image Area */}
                <div className="p-2 sm:p-4 bg-slate-950/80 flex items-center justify-center overflow-auto max-h-[65vh]">
                  <img
                    src={screenshots[selectedIndex].image}
                    alt={screenshots[selectedIndex].title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                  />
                </div>

                {/* Modal Footer Description */}
                <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {screenshots[selectedIndex].description}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ApplicationScreenshots

