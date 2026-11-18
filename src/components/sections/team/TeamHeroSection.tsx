import React from 'react'
import { Users, Lightbulb, Rocket, Sparkles } from 'lucide-react'

export const TeamHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/40 pt-10 pb-14 lg:pt-16 lg:pb-20 border-b border-slate-200/70">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle & 3 Value Pillars */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0066FF] text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
              <span>OUR TEAM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
              Meet The Minds{' '}
              <span className="block sm:inline">
                Behind <span className="text-[#0066FF]">RagReon Tech</span>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              We are a two-person technology team passionate about building
              practical digital solutions. With complementary skills and a
              shared vision, we work together to turn ideas into real-world
              impact.
            </p>

            {/* Three Compact Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {/* 1. Collaborative Approach */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#0066FF]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-[#0B132B]">
                    Collaborative Approach
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Two minds. One vision.
                  </p>
                </div>
              </div>

              {/* 2. Innovative Solutions */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4 text-[#0066FF]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-[#0B132B]">
                    Innovative Solutions
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Turning ideas into practical solutions.
                  </p>
                </div>
              </div>

              {/* 3. Client Focused */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Rocket className="w-4 h-4 text-[#0066FF]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-[#0B132B]">
                    Client Focused
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Understanding project priorities.
                  </p>
                </div>
              </div>
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
                  src="/images/hero/about-hero-developers.png"
                  alt="Two RagReon Tech developers collaborating at computer monitors displaying code, analytics, and AI interfaces"
                  className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/9] transform transition-transform duration-500 group-hover:scale-[1.02]"
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

export default TeamHeroSection
