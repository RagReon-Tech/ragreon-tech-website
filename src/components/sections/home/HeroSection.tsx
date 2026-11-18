import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/common/Button'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-16 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/80 border border-blue-200/70 text-[#0066FF] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Software • AI • Automation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
              Turning Ideas Into{' '}
              <span className="text-[#0066FF] underline decoration-blue-200 decoration-wavy decoration-2 underline-offset-4">
                Real-World
              </span>{' '}
              Solutions.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              RagReon Tech helps businesses transform ideas into practical digital
              solutions through data analytics, AI, software development, and
              intelligent automation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                to="/start-project"
                variant="primary"
                size="lg"
                className="rounded-full px-7 shadow-lg shadow-blue-500/20"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Start a Project
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                size="lg"
                className="rounded-full px-7 border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400"
              >
                Explore Our Work
              </Button>
            </div>
          </div>

          {/* Right Column: Workstation Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-70"
                aria-hidden="true"
              />

              {/* Main Visual Container */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
                <img
                  src="/images/hero/hero-developer-male.png"
                  alt="Male software developer working on a laptop in a modern technology workspace"
                  className="w-full h-auto object-cover aspect-[16/10] transform transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to high-tech gradient if file is missing
                    e.currentTarget.style.display = 'none'
                  }}
                />

                {/* Floating Handwritten Style Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-md text-xs font-medium text-slate-800 hidden sm:flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="italic font-serif font-semibold text-slate-900">
                    Innovate. Build. Elevate.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
