import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Brain,
  Code2,
  Cpu,
  Sparkles,
  TrendingUp,
  Radio,
  Terminal,
} from 'lucide-react'

export interface CarouselSlide {
  id: number
  category: string
  title: string
  subtitle?: string
  description: string
  renderVisual: () => React.ReactNode
}

export const ContactHeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState<1 | -1>(1)

  const totalSlides = 5

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  // Automatic slide transition every 4.5 seconds
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      nextSlide()
    }, 4500)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  // Slide content definitions
  const slides: CarouselSlide[] = [
    // Slide 1: Company Introduction
    {
      id: 1,
      category: 'Brand & Vision',
      title: 'RagReon Tech',
      subtitle: 'SOFTWARE, AI & AUTOMATION',
      description: 'INNOVATE. BUILD. ELEVATE.',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center relative select-none">
          {/* Ambient Lighting */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/90 via-[#0B1536] to-[#0A1A3F] opacity-95 pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

          {/* Logo container */}
          <div className="relative z-10 space-y-3 sm:space-y-4">
            <div className="inline-block p-3 rounded-2xl bg-slate-900/80 border border-blue-400/30 backdrop-blur-md shadow-2xl">
              <img
                src="/logos/ragreon-logo-clean.png"
                alt="RagReon Tech Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain mx-auto filter drop-shadow-[0_0_16px_rgba(0,102,255,0.45)]"
                onError={(e) => {
                  // Fallback if clean logo is missing
                  e.currentTarget.src = '/logos/ragreon-logo.png'
                }}
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-1.5">
                RagReon{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Tech
                </span>
              </h3>
              <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-blue-300 font-mono">
                SOFTWARE, AI & AUTOMATION
              </p>
            </div>

            <div className="pt-1 flex flex-col items-center gap-2">
              <span className="font-mono text-xs sm:text-sm font-extrabold tracking-wider text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                INNOVATE. BUILD. ELEVATE.
              </span>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-[10px] text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Projects Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 2: Data Analytics & Business Intelligence
    {
      id: 2,
      category: 'Data Analytics & Business Intelligence',
      title: 'Interactive Power BI & Analytics',
      description: 'Turn your data into meaningful insights with interactive dashboards.',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 text-left relative select-none bg-gradient-to-br from-[#070D1F] via-[#0B1739] to-[#0A1A3A] overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Top Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-cyan-400 border border-blue-500/30 flex items-center justify-center">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 block uppercase tracking-wider">
                  Data Analytics
                </span>
                <span className="text-xs font-bold text-white leading-none">
                  Executive BI Scorecard
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-md font-mono">
              <TrendingUp className="w-3 h-3" />
              <span>+24.8% MoM</span>
            </div>
          </div>

          {/* Dashboard Visual Mockup */}
          <div className="relative z-10 grid grid-cols-3 gap-2 my-auto py-2">
            {/* KPI Card 1 */}
            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <span className="text-[9px] text-slate-400 uppercase font-mono">Total Volume</span>
              <span className="text-sm sm:text-base font-extrabold text-white mt-0.5">84,920</span>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-cyan-400 h-full w-[78%]" />
              </div>
            </div>

            {/* KPI Card 2 */}
            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <span className="text-[9px] text-slate-400 uppercase font-mono">Punctuality</span>
              <span className="text-sm sm:text-base font-extrabold text-cyan-300 mt-0.5">96.4%</span>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-emerald-400 h-full w-[94%]" />
              </div>
            </div>

            {/* KPI Card 3: Mini Bar Chart */}
            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <span className="text-[9px] text-slate-400 uppercase font-mono">Active Streams</span>
              <div className="flex items-end gap-1 h-7 pt-1">
                <span className="w-1.5 bg-blue-600 rounded-t h-[40%]" />
                <span className="w-1.5 bg-blue-500 rounded-t h-[65%]" />
                <span className="w-1.5 bg-cyan-400 rounded-t h-[90%]" />
                <span className="w-1.5 bg-cyan-300 rounded-t h-[75%]" />
                <span className="w-1.5 bg-blue-400 rounded-t h-[100%]" />
                <span className="w-1.5 bg-cyan-500 rounded-t h-[85%]" />
              </div>
            </div>
          </div>

          {/* Bottom Supporting Message */}
          <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
            <span className="truncate max-w-[280px]">
              Turn your data into meaningful insights with interactive dashboards.
            </span>
            <span className="text-cyan-400 text-[10px] font-mono shrink-0">DAX & SQL</span>
          </div>
        </div>
      ),
    },

    // Slide 3: AI & Machine Learning
    {
      id: 3,
      category: 'AI & Machine Learning',
      title: 'Neural Networks & Deep Learning',
      description: 'Deep learning, predictive modeling, and intelligent automation systems.',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 text-left relative select-none bg-gradient-to-br from-[#060B1E] via-[#0E1338] to-[#141238] overflow-hidden">
          {/* Radial Neural Lighting */}
          <div className="absolute -top-10 -right-10 w-52 h-52 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Top Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-indigo-400 block uppercase tracking-wider">
                  Intelligent Systems
                </span>
                <span className="text-xs font-bold text-white leading-none">
                  AI & Machine Learning
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-md font-mono">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>PyTorch & RAG</span>
            </span>
          </div>

          {/* Center Graphic: Neural Synapses Visualization */}
          <div className="relative z-10 my-auto py-1 flex items-center justify-center">
            <div className="w-full max-w-xs p-3 rounded-2xl bg-slate-900/80 border border-indigo-500/30 backdrop-blur-sm flex items-center justify-between gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-mono text-slate-300">Model Inference</span>
                  <span className="text-emerald-400 font-bold font-mono">98.2% Conf.</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                    Transformer
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Embeddings
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
            <span className="truncate max-w-[280px]">
              Neural networks, predictive modeling, and intelligent automation.
            </span>
            <span className="text-indigo-400 text-[10px] font-mono shrink-0">GPU Accelerated</span>
          </div>
        </div>
      ),
    },

    // Slide 4: Web Development
    {
      id: 4,
      category: 'Web Development',
      title: 'Full-Stack Modern Applications',
      description: 'Modern website and application development with reactive interfaces and robust APIs.',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 text-left relative select-none bg-gradient-to-br from-[#060D1E] via-[#0A162E] to-[#0D1D3A] overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-44 h-44 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Top Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-400 block uppercase tracking-wider">
                  Full-Stack Architecture
                </span>
                <span className="text-xs font-bold text-white leading-none">
                  Web & Application Systems
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>React 19 & TypeScript</span>
            </div>
          </div>

          {/* Code Editor Window Preview */}
          <div className="relative z-10 my-auto py-1">
            <div className="rounded-xl bg-slate-950/90 border border-slate-800 p-3 shadow-lg font-mono text-[11px] space-y-1">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px] text-slate-400">
                <span className="flex items-center gap-1 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> App.tsx
                </span>
                <span className="text-slate-500">200 OK</span>
              </div>
              <div className="text-slate-300">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">Application</span> = () =&gt; &#123;
              </div>
              <div className="pl-3 text-slate-400">
                <span className="text-purple-400">return</span> &lt;
                <span className="text-cyan-300">ProductionReadyApp</span> status=&quot;
                <span className="text-emerald-400">active</span>&quot; /&gt;
              </div>
              <div className="text-slate-300">&#125;</div>
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
            <span className="truncate max-w-[280px]">
              Modern web architecture, responsive interfaces, and scalable REST APIs.
            </span>
            <span className="text-emerald-400 text-[10px] font-mono shrink-0">Fast & Type-Safe</span>
          </div>
        </div>
      ),
    },

    // Slide 5: IoT & Embedded Systems
    {
      id: 5,
      category: 'IoT & Embedded Systems',
      title: 'ESP32 & Sensor Telemetry',
      description: 'Connected devices, microcontrollers, and real-time sensor automation.',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 text-left relative select-none bg-gradient-to-br from-[#070D1F] via-[#0E182A] to-[#12232E] overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Top Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-orange-400 block uppercase tracking-wider">
                  Hardware & Firmware
                </span>
                <span className="text-xs font-bold text-white leading-none">
                  IoT & Embedded Systems
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-md font-mono">
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>WiFi Live 2.4GHz</span>
            </div>
          </div>

          {/* Embedded Chip Visualization */}
          <div className="relative z-10 my-auto py-1 flex items-center justify-center">
            <div className="w-full max-w-xs p-3 rounded-2xl bg-slate-900/80 border border-orange-500/30 backdrop-blur-sm flex items-center justify-between gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center shadow-lg shrink-0">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-mono text-slate-300">ESP32 Telemetry</span>
                  <span className="text-orange-400 font-bold font-mono">GPIO Active</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-800">
                    HTTP/WS
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Sensors
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
            <span className="truncate max-w-[280px]">
              ESP32 microcontrollers, sensor telemetry, and smart connected devices.
            </span>
            <span className="text-orange-400 text-[10px] font-mono shrink-0">MicroPython/C++</span>
          </div>
        </div>
      ),
    },
  ]

  const activeSlideData = slides[currentSlide]

  return (
    <div
      className="relative w-full max-w-lg lg:max-w-none pt-4 sm:pt-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="RagReon Tech Services and Capabilities Carousel"
    >
      {/* Outer Ambient Glow */}
      <div
        className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-blue-700/30 rounded-3xl blur-2xl opacity-75"
        aria-hidden="true"
      />

      {/* Laptop Hardware Container */}
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 p-2.5 sm:p-4 shadow-2xl border border-slate-700/70">
        {/* Laptop Camera notch / bezel */}
        <div className="flex items-center justify-between pb-2 px-2 text-slate-500 text-[10px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>ragreon.tech</span>
          </div>
          <div className="text-[10px] font-mono text-slate-500">
            0{currentSlide + 1} / 0{totalSlides}
          </div>
        </div>

        {/* Laptop Screen Display with Carousel Container */}
        <div className="relative rounded-xl overflow-hidden bg-[#070D1F] border border-blue-500/20 aspect-[16/10] shadow-inner">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="w-full h-full"
            >
              {activeSlideData.renderVisual()}
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button (<) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prevSlide()
            }}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/75 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 hover:bg-slate-900 flex items-center justify-center transition-all shadow-md backdrop-blur-sm cursor-pointer z-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Right Arrow Button (>) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              nextSlide()
            }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/75 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 hover:bg-slate-900 flex items-center justify-center transition-all shadow-md backdrop-blur-sm cursor-pointer z-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Laptop Keyboard Base Bar */}
        <div className="mt-2 h-2 sm:h-2.5 w-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-b-lg shadow-sm" />
      </div>

      {/* Slide Indicator Dots Below Laptop */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {slides.map((slide, index) => {
          const isActive = currentSlide === index
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isActive
                  ? 'w-7 sm:w-8 h-2 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]'
                  : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              aria-current={isActive ? 'true' : 'false'}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ContactHeroCarousel
