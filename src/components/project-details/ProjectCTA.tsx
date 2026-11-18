import React from 'react'
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { useConsultationModal } from '@/context/ConsultationModalContext'

interface ProjectCTAProps {
  projectTitle: string
}

export const ProjectCTA: React.FC<ProjectCTAProps> = ({ projectTitle }) => {
  const { openModal } = useConsultationModal()

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container-custom">
        <div className="relative rounded-3xl bg-[#0B132B] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          {/* Ambient Lighting Gradients */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Collaborate</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Interested in Building Something Similar?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
              Have an idea or a challenge like{' '}
              <span className="text-white font-semibold">{projectTitle}</span>?
              Let's discuss how we can turn it into a practical technology solution.
            </p>

            {/* Primary Action Button: Triggers Consultation Modal */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => openModal()}
                variant="primary"
                size="lg"
                className="rounded-full px-8 py-3.5 shadow-xl shadow-blue-500/30 text-base font-semibold"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Discuss This Project
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                size="lg"
                className="rounded-full px-7 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800/60 text-sm sm:text-base font-semibold"
                leftIcon={<MessageSquare className="w-4 h-4 text-blue-400" />}
              >
                Explore More Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectCTA

