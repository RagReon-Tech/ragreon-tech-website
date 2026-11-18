import React from 'react'
import { Sparkles } from 'lucide-react'
import type { KeyFeatureItem } from '@/types/project-details.types'
import { renderNamedIcon } from './iconHelper'

interface ProjectFeaturesProps {
  features?: KeyFeatureItem[]
}

export const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ features }) => {
  if (!features || features.length === 0) return null

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200/80" id="key-features">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Functionalities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Key Features
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Key functional highlights engineered into this solution.
          </p>
        </div>

        {/* Dynamic Responsive Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-3 shadow-xs hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                {renderNamedIcon(feature.iconName, 'w-5 h-5')}
              </div>
              <h3 className="text-base font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectFeatures

