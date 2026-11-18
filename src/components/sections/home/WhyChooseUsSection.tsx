import React from 'react'
import { Zap, Handshake, CheckCircle2, Target } from 'lucide-react'
import { principlesData } from '@/data/company'
import { Card } from '@/components/common/Card'

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#0066FF]" />
      case 'Handshake':
        return <Handshake className="w-5 h-5 text-[#0066FF]" />
      case 'CheckCircle':
        return <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
      case 'Target':
        return <Target className="w-5 h-5 text-[#0066FF]" />
      default:
        return <Zap className="w-5 h-5 text-[#0066FF]" />
    }
  }

  return (
    <section className="py-14 sm:py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="container-custom space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>Why Choose Us</span>
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Engineered for Practical Excellence
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We combine multi-disciplinary technical rigor with direct developer
            collaboration to deliver genuine, deployable technology solutions.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principlesData.map((principle) => (
            <Card
              key={principle.id}
              hoverEffect
              padding="lg"
              className="border-slate-200/90 bg-white space-y-4"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                {getIcon(principle.icon)}
              </div>
              <h3 className="text-base font-bold text-[#0B132B] tracking-tight">
                {principle.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {principle.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
