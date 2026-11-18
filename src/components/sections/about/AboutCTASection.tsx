import React from 'react'
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { useConsultationModal } from '@/context/ConsultationModalContext'

export const AboutCTASection: React.FC = () => {
  const { openModal } = useConsultationModal()

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container-custom">
        <div className="relative rounded-3xl bg-[#0B132B] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          {/* Ambient Lighting Gradients */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Have an Idea?{' '}
              <span className="text-[#0066FF]">Let's Build It Together.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
              Tell us about your project, and let's explore how technology can
              help turn your idea into a practical solution.
            </p>

            {/* Main Action Button */}
            <div className="pt-2 flex justify-center">
              <Button
                onClick={() => openModal()}
                variant="primary"
                size="lg"
                className="rounded-full px-8 py-3.5 shadow-xl shadow-blue-500/30 text-base font-semibold"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Let's Talk
              </Button>
            </div>

            {/* Direct Contact Snippets */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <a
                href="mailto:ragreontechofficial@gmail.com"
                className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                title="Send email to RagReon Tech"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="font-mono">ragreontechofficial@gmail.com</span>
              </a>
              <span className="hidden sm:inline text-slate-700">•</span>
              <a
                href="tel:+916383309954"
                className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                title="Call RagReon Tech"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="font-mono">+91 6383309954</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCTASection
