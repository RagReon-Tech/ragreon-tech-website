import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart3,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  PieChart,
  Binary,
  Layers,
  TrendingUp,
  Activity,
  MapPin,
  Globe,
} from 'lucide-react'
import type { MLVisualizationCategoryGroup } from '@/types/project-details.types'

interface MLVisualizationsProps {
  mlVisualizations?: MLVisualizationCategoryGroup[]
  projectTitle: string
}

export const MLVisualizations: React.FC<MLVisualizationsProps> = ({
  mlVisualizations,
  projectTitle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null)

  // Flatten all visualizations for lightbox indexing
  const allVisualizations = React.useMemo(() => {
    if (!mlVisualizations) return []
    return mlVisualizations.flatMap((group) =>
      group.visualizations.map((vis) => ({
        ...vis,
        category: group.category,
      })),
    )
  }, [mlVisualizations])

  // Filtered visualizations by category
  const activeVisualizations = React.useMemo(() => {
    if (selectedCategory === 'all') return allVisualizations
    return allVisualizations.filter((vis) => vis.category === selectedCategory)
  }, [selectedCategory, allVisualizations])

  // Lightbox keyboard controls
  useEffect(() => {
    if (lightboxImageIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImageIndex(null)
      } else if (e.key === 'ArrowRight') {
        setLightboxImageIndex((prev) =>
          prev !== null ? (prev + 1) % allVisualizations.length : 0,
        )
      } else if (e.key === 'ArrowLeft') {
        setLightboxImageIndex((prev) =>
          prev !== null ? (prev - 1 + allVisualizations.length) % allVisualizations.length : 0,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [lightboxImageIndex, allVisualizations.length])

  if (!mlVisualizations || mlVisualizations.length === 0) return null

  const handleNext = () => {
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex + 1) % allVisualizations.length)
    }
  }

  const handlePrev = () => {
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex(
        (lightboxImageIndex - 1 + allVisualizations.length) % allVisualizations.length,
      )
    }
  }

  const getCategoryIcon = (category: string) => {
    if (category.includes('Distribution')) return <PieChart className="w-4 h-4" />
    if (category.includes('Financial') || category.includes('Revenue')) return <TrendingUp className="w-4 h-4" />
    if (category.includes('Demand') || category.includes('Operational')) return <Activity className="w-4 h-4" />
    if (category.includes('City') || category.includes('Station')) return <MapPin className="w-4 h-4" />
    if (category.includes('Network')) return <Globe className="w-4 h-4" />
    if (category.includes('Performance')) return <BarChart3 className="w-4 h-4" />
    if (category.includes('Confusion Matrix')) return <Binary className="w-4 h-4" />
    return <Layers className="w-4 h-4" />
  }

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80"
      id="ml-visualizations"
    >
      <div className="container-custom space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Data Science &amp; Machine Learning Diagnostics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Machine Learning Analytics &amp; Visualizations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            All {allVisualizations.length} empirical charts generated during exploratory data analysis,
            performance diagnostics, and operational analytics for {projectTitle}.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#0066FF] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
            }`}
          >
            All Visualizations ({allVisualizations.length})
          </button>

          {mlVisualizations.map((group) => {
            const isSelected = selectedCategory === group.category
            return (
              <button
                key={group.category}
                type="button"
                onClick={() => setSelectedCategory(group.category)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0066FF] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                {getCategoryIcon(group.category)}
                <span>{group.category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {group.visualizations.length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeVisualizations.map((vis) => {
            const originalIndex = allVisualizations.findIndex((item) => item.image === vis.image)

            return (
              <div
                key={vis.image}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Frame with Zoom Hint */}
                  <div
                    onClick={() => setLightboxImageIndex(originalIndex)}
                    className="relative aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer border-b border-slate-100"
                    role="button"
                    tabIndex={0}
                    aria-label={`Open full image of ${vis.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setLightboxImageIndex(originalIndex)
                      }
                    }}
                  >
                    <img
                      src={vis.image}
                      alt={vis.title}
                      loading="lazy"
                      className="w-full h-full object-contain p-2 sm:p-3 transform transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Category Overlay Tag */}
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md border border-slate-700">
                      {vis.category}
                    </div>

                    {/* Hover Zoom Pill */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Inspect Chart</span>
                    </div>
                  </div>

                  {/* Text Information */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors leading-snug">
                      {vis.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {vis.description}
                    </p>

                    {/* Technical Findings Bullet Points */}
                    {vis.findings && vis.findings.length > 0 && (
                      <div className="pt-2 space-y-1.5 border-t border-slate-100">
                        {vis.findings.map((f, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1">
                  <button
                    type="button"
                    onClick={() => setLightboxImageIndex(originalIndex)}
                    className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-[#0066FF] border border-slate-200/90 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Full Resolution</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {lightboxImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setLightboxImageIndex(null)}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setLightboxImageIndex(null)}
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
                aria-label="Previous chart"
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
                aria-label="Next chart"
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
                    <span className="text-[10px] font-mono uppercase text-blue-400 bg-blue-950/80 border border-blue-800 px-2 py-0.5 rounded">
                      {allVisualizations[lightboxImageIndex].category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold mt-1">
                      {allVisualizations[lightboxImageIndex].title}
                    </h3>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {lightboxImageIndex + 1} of {allVisualizations.length}
                  </div>
                </div>

                {/* Modal Image Area */}
                <div className="p-4 sm:p-6 bg-slate-950/80 flex items-center justify-center overflow-auto max-h-[65vh]">
                  <img
                    src={allVisualizations[lightboxImageIndex].image}
                    alt={allVisualizations[lightboxImageIndex].title}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>

                {/* Modal Footer Description */}
                <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {allVisualizations[lightboxImageIndex].description}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default MLVisualizations
