import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from 'lucide-react'
import type { GalleryItem } from '@/types/project-details.types'

interface ProjectGalleryProps {
  gallery?: GalleryItem[]
  projectTitle: string
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  gallery,
  projectTitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({})

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null)
      } else if (e.key === 'ArrowRight' && gallery) {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % gallery.length : 0))
      } else if (e.key === 'ArrowLeft' && gallery) {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedIndex, gallery])

  // Hide section if gallery is missing or empty
  if (!gallery || gallery.length === 0) return null

  // Filter out known broken images
  const validImages = gallery.filter((img) => !brokenImages[img.url])
  if (validImages.length === 0) return null

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % validImages.length)
    }
  }

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + validImages.length) % validImages.length)
    }
  }

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="project-gallery">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Evidence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Project Screenshots &amp; Gallery
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            High-resolution interface screenshots and architectural captures from {projectTitle}.
          </p>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {validImages.map((image, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer aspect-[16/10]"
              role="button"
              tabIndex={0}
              aria-label={`View screenshot ${idx + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedIndex(idx)
                }
              }}
            >
              <img
                src={image.url}
                alt={image.alt || `${projectTitle} Screenshot ${idx + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={() => setBrokenImages((prev) => ({ ...prev, [image.url]: true }))}
              />

              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                <div className="self-end p-2 rounded-full bg-slate-900/80 backdrop-blur-md">
                  <ZoomIn className="w-4 h-4 text-blue-400" />
                </div>
                {image.caption && (
                  <p className="text-xs font-medium text-slate-200 line-clamp-2 bg-slate-950/80 p-2 rounded-lg backdrop-blur-xs">
                    {image.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Next/Prev and Fullscreen */}
      <AnimatePresence>
        {selectedIndex !== null && validImages[selectedIndex] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-modal="true"
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
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close image viewer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl max-h-[75vh]">
                <img
                  src={validImages[selectedIndex].url}
                  alt={validImages[selectedIndex].alt || `${projectTitle} Screenshot`}
                  className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
                />
              </div>

              {/* Caption and Navigation Controls Bar */}
              <div className="w-full flex items-center justify-between pt-4 px-2 text-white">
                <div className="text-xs sm:text-sm text-slate-300">
                  {validImages[selectedIndex].caption ||
                    `Image ${selectedIndex + 1} of ${validImages.length}`}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 px-2">
                    {selectedIndex + 1} / {validImages.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
                    aria-label="Next image"
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

export default ProjectGallery
