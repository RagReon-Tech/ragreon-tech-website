import React from 'react'
import { Target, Eye, TrendingUp, ArrowRight } from 'lucide-react'
import { Card } from '@/components/common/Card'

interface CorePillar {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const pillars: CorePillar[] = [
  {
    id: 'mission',
    title: 'Our Mission',
    description:
      'To make technology practical, accessible, and valuable through innovative digital solutions that address real-world needs.',
    icon: <Target className="w-6 h-6 text-[#0066FF]" />,
  },
  {
    id: 'vision',
    title: 'Our Vision',
    description:
      'To become a trusted technology partner for individuals, startups, and businesses seeking intelligent, scalable, and impactful digital solutions.',
    icon: <Eye className="w-6 h-6 text-[#0066FF]" />,
  },
  {
    id: 'journey',
    title: 'Our Journey',
    description:
      'RagReon Tech began as a collaboration between two technology enthusiasts who share an interest in data, software, AI, and intelligent automation.',
    icon: <TrendingUp className="w-6 h-6 text-[#0066FF]" />,
  },
]

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <Card
              key={pillar.id}
              hoverEffect
              padding="lg"
              className="bg-white border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header with Icon and subtle accent arrow */}
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center p-3 group-hover:scale-105 group-hover:bg-blue-100/70 transition-all duration-200">
                    {pillar.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:text-[#0066FF] group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0B132B] tracking-tight pt-1">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection
