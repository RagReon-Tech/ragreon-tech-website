import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MessageSquare, Sparkles } from 'lucide-react'
import { useConsultationModal } from '@/context/ConsultationModalContext'

interface ServiceCTAProps {
  serviceTitle: string
}

export const ServiceCTA: React.FC<ServiceCTAProps> = ({ serviceTitle }) => {
  const { openModal } = useConsultationModal()

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#060B18] via-[#0B132B] to-[#111C3D] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 max-w-4xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Turn Vision Into Scalable Reality</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have an Idea? Let&apos;s Build Something Meaningful in {serviceTitle}.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a proof-of-concept, an automated data pipeline, or a full-scale production system, RagReon Tech delivers robust architectures and reliable code.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => openModal(serviceTitle)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-lg shadow-white/10 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0066FF]" />
            <span>Schedule Free Consultation</span>
          </button>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Back to all services */}
        <div className="pt-4">
          <Link
            to="/services"
            className="text-xs text-slate-400 hover:text-white transition-colors underline decoration-slate-600 underline-offset-4"
          >
            Looking for other expertise? View all 7 technology services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceCTA
