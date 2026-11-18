import React from 'react'
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
} from 'lucide-react'
import type {
  ResolvedPersonalPortfolio,
  SkillCategoryIcon,
} from '@/types/personal-portfolio.types'

interface PersonalSkillsSectionProps {
  portfolio: ResolvedPersonalPortfolio
}

const renderCategoryIcon = (icon: SkillCategoryIcon) => {
  switch (icon) {
    case 'barChart':
      return <BarChart3 className="w-5 h-5" />
    case 'brain':
      return <BrainCircuit className="w-5 h-5" />
    case 'cpu':
      return <Cpu className="w-5 h-5" />
    case 'database':
      return <Database className="w-5 h-5" />
    case 'globe':
      return <Globe className="w-5 h-5" />
    case 'layers':
      return <Layers className="w-5 h-5" />
    case 'code':
    default:
      return <Code2 className="w-5 h-5" />
  }
}

export const PersonalSkillsSection: React.FC<PersonalSkillsSectionProps> = ({
  portfolio,
}) => {
  return (
    <section
      id="skills"
      className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80 scroll-mt-16"
    >
      <div className="container-custom space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>SKILLS &amp; EXPERTISE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Technical Stack &amp; Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Core technologies, frameworks, and tools actively used across my completed and ongoing engineering projects.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {portfolio.skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 space-y-5 group"
            >
              {/* Category Header */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-200">
                  {renderCategoryIcon(category.icon)}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B132B] tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Categorized Skill Badges */}
              <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-50/70 text-[#0B132B] border border-blue-200/70 hover:bg-blue-100/80 hover:text-[#0066FF] hover:border-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonalSkillsSection
