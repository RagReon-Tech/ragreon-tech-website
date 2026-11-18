import React from 'react'
import { ArrowRight, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react'
import type { ServiceDetails } from '@/types/service-details.types'
import { useConsultationModal } from '@/context/ConsultationModalContext'
import { ServiceIcon } from './ServiceIcon'

interface ServiceHeroProps {
  service: ServiceDetails
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ service }) => {
  const { openModal } = useConsultationModal()

  const getAccentGradient = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-600 via-indigo-600 to-sky-600'
      case 'cyan':
        return 'from-cyan-600 via-blue-600 to-teal-600'
      case 'indigo':
        return 'from-indigo-600 via-purple-600 to-blue-600'
      case 'emerald':
        return 'from-emerald-600 via-teal-600 to-cyan-600'
      case 'amber':
        return 'from-amber-600 via-orange-600 to-yellow-600'
      case 'orange':
        return 'from-orange-600 via-amber-600 to-rose-600'
      case 'purple':
        return 'from-purple-600 via-indigo-600 to-pink-600'
      default:
        return 'from-blue-600 via-indigo-600 to-sky-600'
    }
  }

  const getAccentBg = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 text-[#0066FF] border-blue-200'
      case 'cyan':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200'
      case 'indigo':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200'
      case 'emerald':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200'
      case 'amber':
        return 'bg-amber-50 text-amber-700 border-amber-200'
      case 'orange':
        return 'bg-orange-50 text-orange-700 border-orange-200'
      case 'purple':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      default:
        return 'bg-blue-50 text-[#0066FF] border-blue-200'
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 border-b border-slate-200/80 py-12 sm:py-16 lg:py-20">
      {/* Background ambient pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Value Proposition & CTA */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs">
                Domain {service.serviceNumber}
              </span>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border shadow-2xs ${getAccentBg(
                  service.highlightColor,
                )}`}
              >
                {service.category}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
              {service.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-slate-700">
              {service.hero.subheadline}
            </p>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {service.hero.supportingText}
            </p>

            {/* Key Technologies Badges */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Core Tooling & Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {service.hero.techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs hover:border-[#0066FF] transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-[#0066FF]" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                type="button"
                onClick={() => openModal(service.title)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all cursor-pointer"
              >
                <span>{service.hero.ctaLabel || 'Discuss Your Project'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#related-projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs"
              >
                <FolderGit2 className="w-4 h-4 text-slate-500" />
                <span>View Realized Projects</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Domain Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient border */}
              <div
                className={`relative rounded-3xl p-1 bg-gradient-to-br ${getAccentGradient(
                  service.highlightColor,
                )} shadow-xl`}
              >
                <div className="bg-[#0B132B] rounded-[22px] p-6 sm:p-8 text-white relative overflow-hidden">
                  {/* Subtle Tech Grid inside */}
                  <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b22_1px,transparent_1px),linear-gradient(to_bottom,#1e293b22_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Header in Frame */}
                  <div className="relative z-10 flex items-center justify-between pb-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-blue-400">
                        <ServiceIcon name={service.iconName} className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                          Domain Focus
                        </div>
                        <div className="text-sm font-bold text-white">{service.shortTitle}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Production Ready
                    </span>
                  </div>

                  {/* Body Metrics / Highlights */}
                  <div className="relative z-10 py-6 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">Architectural Philosophy</div>
                      <div className="text-sm font-medium text-slate-200">
                        Deterministic logic, clean component boundaries, and verifiable business impact.
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className="text-[11px] text-slate-400">Delivery Velocity</div>
                        <div className="text-base font-bold text-white mt-0.5">Iterative Agile</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className="text-[11px] text-slate-400">Quality Standard</div>
                        <div className="text-base font-bold text-white mt-0.5">Strict Type-Safe</div>
                      </div>
                    </div>
                  </div>

                  {/* Footer in Frame */}
                  <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>RagReon Tech Engineering</span>
                    <span className="text-blue-400">#0{service.serviceNumber}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
