import React from 'react'
import { Layers, Terminal } from 'lucide-react'
import type { ServiceTechItem } from '@/types/service-details.types'
import { ServiceIcon } from './ServiceIcon'

interface ServiceTechStackProps {
  technologies: ServiceTechItem[]
}

export const ServiceTechStack: React.FC<ServiceTechStackProps> = ({ technologies }) => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <Layers className="w-4 h-4 text-[#0066FF]" />
            <span>Technologies & Tools</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Technology Stack & Frameworks
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We select production-grade, open-standard, and battle-tested tools to build reliable architectures that scale smoothly as your data and user base grow.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] group-hover:scale-105 transition-transform">
                      <ServiceIcon name={tech.iconName} className="w-4 h-4 text-[#0066FF]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors leading-tight">
                        {tech.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-[#0066FF] border border-blue-200/70">
                  {tech.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tech.context}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-slate-400" />
                <span>Verified in Production</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceTechStack

