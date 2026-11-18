import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/common/Button'

export const ServicesHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50/50 pt-10 pb-14 lg:pt-16 lg:pb-20 border-b border-slate-200/70">
      {/* Ambient background lighting */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0066FF] text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
              <span>OUR SERVICES</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
              Technology Solutions{' '}
              <span className="text-[#0066FF] block sm:inline">
                For A Better Tomorrow.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              We offer technology services to help businesses turn ideas into
              practical digital solutions. From data analysis to software
              development, we build useful, scalable, and maintainable systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                to="/contact#contact-form"
                variant="primary"
                size="lg"
                className="rounded-full px-7 shadow-lg shadow-blue-500/25 text-sm sm:text-base font-semibold"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Get a Free Consultation
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                size="lg"
                className="rounded-full px-7 border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 text-sm sm:text-base font-semibold"
              >
                Explore Our Work
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-600/20 rounded-3xl blur-xl opacity-75"
                aria-hidden="true"
              />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 group">
                <img
                  src="/images/services/services-hero-globe.jpg"
                  alt="Futuristic digital glowing globe surrounded by AI, Data, Web, and IoT network telemetry nodes"
                  className="w-full h-auto object-cover aspect-[16/10] transform transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero/hero-developer-male.png'
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

export default ServicesHeroSection
