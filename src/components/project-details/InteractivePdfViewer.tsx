import React, { useState, useRef } from 'react'
import {
  FileText,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  ExternalLink,
  Download,
  Maximize2,
  Minimize2,
  Sparkles,
} from 'lucide-react'
import type { PdfReportData } from '@/types/project-details.types'

interface InteractivePdfViewerProps {
  pdfReport?: PdfReportData
  projectTitle: string
}

const DEFAULT_PAGE_TITLES = [
  'Overview',
  'Currency Analysis',
  'Job Risk Analysis',
  'AI Tools Comparison',
  'Industries Deep Dive',
  'Salary Analysis',
  'AI Learning Hub',
  'Skill Insights',
  'Advanced Insights',
]

export const InteractivePdfViewer: React.FC<InteractivePdfViewerProps> = ({
  pdfReport,
  projectTitle,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  if (!pdfReport || !pdfReport.url) {
    return null
  }

  const totalPages = pdfReport.pageCount || 9
  const pageTitles = pdfReport.pageTitles || DEFAULT_PAGE_TITLES

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(200, prev + 25))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(50, prev - 25))
  }

  const handleZoomReset = () => {
    setZoom(100)
  }

  const handleToggleFullscreen = () => {
    if (!containerRef.current) return

    if (!document.fullscreenElement) {
      containerRef.current
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.error('Fullscreen request failed:', err))
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) => console.error('Exit fullscreen failed:', err))
    }
  }

  // Construct standard PDF view URL with page, zoom, and navpanes parameters
  const pdfViewUrl = `${pdfReport.url}#page=${currentPage}&zoom=${zoom}&navpanes=0`

  return (
    <section
      id="interactive-pdf-report"
      className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80 scroll-mt-20"
    >
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Power BI Documentation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            {pdfReport.title || 'Interactive Dashboard Report'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {pdfReport.description ||
              `Explore the full 9-page Power BI dashboard report with interactive page navigation, full-screen viewing, zoom controls, and direct download.`}
          </p>
        </div>

        {/* PDF Viewer Card */}
        <div
          ref={containerRef}
          className={`bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden flex flex-col transition-all duration-300 ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none p-4' : 'p-4 sm:p-6'
          }`}
        >
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
            {/* Left: Page Navigation Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-xs"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 font-mono">
                Page <span className="text-[#0066FF] font-bold">{currentPage}</span> of{' '}
                <span>{totalPages}</span>
              </div>

              <button
                type="button"
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-xs"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Current Page Title Badge */}
              <span className="hidden md:inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 text-[#0066FF] border border-blue-200/60 text-xs font-semibold">
                {pageTitles[currentPage - 1] || `Page ${currentPage}`}
              </span>
            </div>

            {/* Middle: Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl p-1">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= 50}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-40 transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleZoomReset}
                className="px-2 py-0.5 text-xs font-mono font-medium text-slate-700 hover:text-[#0066FF] transition-colors cursor-pointer"
                title="Reset Zoom to 100%"
              >
                {zoom}%
              </button>

              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= 200}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-40 transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right: Actions (Full Screen, New Tab, Download) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleToggleFullscreen}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                title={isFullscreen ? 'Exit Full Screen' : 'View Full Screen'}
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Exit Full Screen</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">View Full Report</span>
                  </>
                )}
              </button>

              <a
                href={pdfReport.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
                title="Open PDF in New Browser Tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open in New Tab</span>
              </a>

              <a
                href={pdfReport.url}
                download={pdfReport.downloadFilename || pdfReport.url.split('/').pop() || 'project_report.pdf'}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0066FF] text-white hover:bg-[#0052CC] transition-colors shadow-xs shadow-blue-500/20"
                title={`Download ${totalPages}-Page PDF Report`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Quick Jump Page Pills */}
          <div className="py-3 px-1 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-200">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 whitespace-nowrap">
              Jump To Page:
            </span>
            {pageTitles.map((title, index) => {
              const pageNum = index + 1
              const isActive = currentPage === pageNum

              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0066FF] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span className="font-mono text-[10px] mr-1 opacity-75">0{pageNum}</span>
                  <span>{title}</span>
                </button>
              )
            })}
          </div>

          {/* Embedded PDF Canvas Container */}
          <div className="relative w-full pt-4 flex-1">
            <div className="w-full h-[600px] sm:h-[720px] lg:h-[840px] rounded-xl overflow-hidden border border-slate-200/90 shadow-inner bg-slate-900 relative">
              <iframe
                key={`${pdfReport.url}-${currentPage}-${zoom}`}
                src={pdfViewUrl}
                className="w-full h-full border-0 bg-white"
                title={`${projectTitle} - Interactive PDF Report (Page ${currentPage})`}
              />
            </div>
          </div>

          {/* Bottom Caption & Mobile Notification */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-500" />
              <span>
                Report Source:{' '}
                <strong className="text-slate-700">Power BI Desktop · {projectTitle}</strong>
              </span>
            </div>

            <div className="text-slate-400 text-center sm:text-right">
              Tip: Use the jump pills above to instantly navigate between all {totalPages} dashboard pages.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
