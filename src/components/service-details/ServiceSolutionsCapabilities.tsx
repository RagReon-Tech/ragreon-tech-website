import React from 'react'
import { Check, Cpu } from 'lucide-react'
import type { SolutionCapabilityItem } from '@/types/service-details.types'
import { ServiceIcon } from './ServiceIcon'

interface ServiceSolutionsCapabilitiesProps {
  solutions: SolutionCapabilityItem[]
}

export const ServiceSolutionsCapabilities: React.FC<ServiceSolutionsCapabilitiesProps> = ({ solutions }) => {
  return (
    <section id="capabilities" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <Cpu className="w-4 h-4 text-[#0066FF]" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Our Solutions & Engineering Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From technical discovery to continuous production deployment, we deliver robust, modular, and maintainable systems tailored to your technical requirements.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] group-hover:scale-105 transition-transform">
                    <ServiceIcon name={item.iconName} className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                    Capability 0{item.id}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tangible Deliverables */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Deliverables
                </div>
                <div className="space-y-1.5">
                  {item.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSolutionsCapabilities

