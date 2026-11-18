import React from 'react'
import { Rocket, ArrowRight } from 'lucide-react'
import { useConsultationModal } from '@/context/ConsultationModalContext'

export const ContactBottomCTASection: React.FC = () => {
  const { openModal } = useConsultationModal()

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#060B18] via-[#0B132B] to-[#0E1A3C] border border-blue-950 p-6 sm:p-8 lg:p-10 text-white shadow-xl">
          {/* Subtle background glow */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            {/* Left: Rocket Icon + Text */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-cyan-400 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10">
                <Rocket className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Let&apos;s discuss your requirements and create a practical, scalable solution together.
                </p>
              </div>
            </div>

            {/* Right: Let's Talk Button */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => openModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/45 transition-all duration-200 hover:scale-105 group cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBottomCTASection
