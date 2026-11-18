import React from 'react'
import { Search, Compass, Code2, RefreshCw } from 'lucide-react'
import { Card } from '@/components/common/Card'

interface ApproachStep {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const steps: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the problem, goals, and project requirements.',
    icon: <Search className="w-5 h-5 text-[#0066FF]" />,
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Choose the right tools, technologies, and implementation approach.',
    icon: <Compass className="w-5 h-5 text-[#0066FF]" />,
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop the solution using suitable software, data, AI, or IoT technologies.',
    icon: <Code2 className="w-5 h-5 text-[#0066FF]" />,
  },
  {
    number: '04',
    title: 'Test and Improve',
    description:
      'Test the implementation, resolve issues, and refine the solution based on feedback.',
    icon: <RefreshCw className="w-5 h-5 text-[#0066FF]" />,
  },
]

export const WorkingApproachSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>OUR APPROACH</span>
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            How We Work
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A disciplined, step-by-step engineering approach ensuring clarity,
            practicality, and continuous refinement throughout every project.
          </p>
        </div>

        {/* 4 Steps Process Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle connection line on desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-8 z-0 pointer-events-none"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <Card
              key={step.number}
              hoverEffect
              padding="md"
              className="relative z-10 bg-slate-50/70 border-slate-200/90 rounded-2xl flex flex-col justify-between group hover:bg-white hover:border-blue-300 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Step badge & icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-100/70 transition-all duration-200">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-200/60 text-slate-700 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                    Step {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#0B132B] tracking-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Indicator Dots */}
              <div className="pt-4 flex items-center gap-1.5">
                {[0, 1, 2, 3].map((dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      dotIndex === index
                        ? 'w-6 bg-[#0066FF]'
                        : dotIndex < index
                        ? 'w-2 bg-blue-300'
                        : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkingApproachSection
