import React from 'react'
import { Globe, MessageSquare, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/common/Card'

interface CollabFeature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: CollabFeature[] = [
  {
    title: 'Remote Collaboration',
    description:
      'Online project coordination, flexible scheduling, and digital tools enabling seamless collaboration regardless of distance.',
    icon: <Globe className="w-6 h-6 text-[#0066FF]" />,
  },
  {
    title: 'Clear Communication',
    description:
      'Frequent milestone updates, direct developer discussions, and transparent progress reviews at each stage of work.',
    icon: <MessageSquare className="w-6 h-6 text-[#0066FF]" />,
  },
  {
    title: 'Project-Focused Delivery',
    description:
      'Direct, hands-on engineering focused strictly on developing practical, tested, and useful digital solutions tailored to requirements.',
    icon: <CheckCircle2 className="w-6 h-6 text-[#0066FF]" />,
  },
]

export const RemoteCollabSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>OPERATING MODEL</span>
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Built for Remote Collaboration
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We work remotely and collaborate online with individuals, startups,
            and businesses. Project discussions, updates, and coordination can
            be handled through digital communication and collaboration tools.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              hoverEffect
              padding="lg"
              className="bg-white border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-100/70 transition-all duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0B132B] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RemoteCollabSection
