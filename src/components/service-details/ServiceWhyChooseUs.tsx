import React from 'react'
import { Award } from 'lucide-react'
import type { WhyChooseUsItem } from '@/types/service-details.types'
import { ServiceIcon } from './ServiceIcon'

interface ServiceWhyChooseUsProps {
  items: WhyChooseUsItem[]
}

export const ServiceWhyChooseUs: React.FC<ServiceWhyChooseUsProps> = ({ items }) => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <Award className="w-4 h-4 text-[#0066FF]" />
            <span>The RagReon Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Why Choose RagReon Tech?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We operate as an agile engineering partner dedicated to clean architectures, honest communication, and quantifiable business outcomes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] group-hover:scale-105 transition-transform">
                <ServiceIcon name={item.iconName} className="w-6 h-6 text-[#0066FF]" />
              </div>

              <h3 className="text-lg font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceWhyChooseUs

