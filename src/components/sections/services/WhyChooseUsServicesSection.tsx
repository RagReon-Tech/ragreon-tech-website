import React from 'react'
import { Gem, Users, ShieldCheck, Rocket } from 'lucide-react'
import { Card } from '@/components/common/Card'

interface ValueItem {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const valueItems: ValueItem[] = [
  {
    id: 'practical-expertise',
    title: 'Practical Expertise',
    description: 'Applying relevant tools and technologies to practical problems.',
    icon: <Gem className="w-6 h-6 text-[#0066FF]" />,
  },
  {
    id: 'client-focused',
    title: 'Client Focused',
    description:
      'Understanding requirements and tailoring solutions to project needs.',
    icon: <Users className="w-6 h-6 text-[#0066FF]" />,
  },
  {
    id: 'quality-delivery',
    title: 'Quality Delivery',
    description:
      'Emphasizing maintainable code, testing, and clear communication.',
    icon: <ShieldCheck className="w-6 h-6 text-[#0066FF]" />,
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'Exploring appropriate technologies and new approaches to solve problems.',
    icon: <Rocket className="w-6 h-6 text-[#0066FF]" />,
  },
]

export const WhyChooseUsServicesSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-blue-50/40 border-t border-slate-200/70">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>WHY CHOOSE US</span>
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Your Technology Partner{' '}
            <span className="text-[#0066FF]">for Real Impact</span>
          </h2>
        </div>

        {/* 4 Value Propositions Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueItems.map((item) => (
            <Card
              key={item.id}
              hoverEffect
              padding="lg"
              className="bg-white border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-100/70 transition-all duration-200">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-[#0B132B] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsServicesSection
