import React from 'react'
import type { ServiceImportanceData } from '@/types/service-details.types'
import { ServiceIcon } from './ServiceIcon'

interface ServiceImportanceProps {
  importance: ServiceImportanceData
}

export const ServiceImportance: React.FC<ServiceImportanceProps> = ({ importance }) => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>Strategic Value</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            {importance.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {importance.description}
          </p>
        </div>

        {/* 4 Impact / Strategic Importance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {importance.points.map((point, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-300 space-y-3.5 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066FF] group-hover:scale-105 transition-transform">
                  <ServiceIcon name={point.iconName} className="w-5 h-5 text-[#0066FF]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors">
                  {point.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-0.5">
                {point.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceImportance

