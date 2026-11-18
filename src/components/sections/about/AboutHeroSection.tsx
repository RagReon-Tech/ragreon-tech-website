import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/common/Button'

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B132B] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800">
      {/* Ambient background glows */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
              <span>ABOUT US</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Technology With Purpose.{' '}
              <span className="text-[#0066FF] block sm:inline">
                Innovation With Impact.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              RagReon Tech is an emerging technology team focused on building
              practical digital solutions that address real-world challenges. We
              combine technical expertise with creativity to turn ideas into
              functional, scalable, and useful solutions.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                to="/services"
                variant="primary"
                size="lg"
                className="rounded-full px-8 shadow-xl shadow-blue-500/25 text-base font-semibold"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/30 to-cyan-500/20 rounded-3xl blur-xl opacity-80"
                aria-hidden="true"
              />

              {/* Image Frame */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img
                  src="/images/hero/about-hero-developers.png"
                  alt="Two RagReon Tech developers collaborating at computer monitors with code, AI visualizations, and data analytics dashboards"
                  className="w-full h-auto object-cover object-center aspect-[16/10] sm:aspect-[16/9] transform transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero/about-hero-developers.png'
                  }}
                />

                {/* Decorative Subtle Tagline Element */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-500/30 shadow-lg text-xs font-medium text-slate-200 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span className="italic font-medium tracking-wide">
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

export default AboutHeroSection
