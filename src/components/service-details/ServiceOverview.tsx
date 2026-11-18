import React from 'react'
import { CheckCircle2, Compass, Layers, ShieldCheck } from 'lucide-react'
import type { ServiceOverviewData } from '@/types/service-details.types'

interface ServiceOverviewProps {
  overview: ServiceOverviewData
  serviceTitle: string
}

export const ServiceOverview: React.FC<ServiceOverviewProps> = ({ overview }) => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>Domain Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            {overview.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {overview.conceptExplanation}
          </p>
        </div>

        {/* 2-Column Explanatory Cards: How It Works & Real-World Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* How It Works In Practice */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0066FF] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B132B]">
              How It Works in Practice
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {overview.howItWorks}
            </p>
          </div>

          {/* Real-World Context & Industry Impact */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B132B]">
              Real-World Context & Operations
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {overview.realWorldContext}
            </p>
          </div>
        </div>

        {/* Practical Implementations & Use Cases */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0B132B] text-white space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                Deployment Scenarios
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Common Real-World Use Cases
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Proven Implementations</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {overview.commonUseCases.map((useCase, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/60 border border-slate-700/70"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium leading-snug">
                  {useCase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceOverview

