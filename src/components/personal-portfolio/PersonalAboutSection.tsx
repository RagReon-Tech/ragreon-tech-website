import React from 'react'
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import type {
  ResolvedPersonalPortfolio,
  SkillCategoryIcon,
} from '@/types/personal-portfolio.types'

interface PersonalAboutSectionProps {
  portfolio: ResolvedPersonalPortfolio
}

const renderIcon = (icon: SkillCategoryIcon, className = 'w-5 h-5') => {
  switch (icon) {
    case 'barChart':
      return <BarChart3 className={className} />
    case 'brain':
      return <BrainCircuit className={className} />
    case 'cpu':
      return <Cpu className={className} />
    case 'database':
      return <Database className={className} />
    case 'globe':
      return <Globe className={className} />
    case 'layers':
      return <Layers className={className} />
    case 'code':
    default:
      return <Code2 className={className} />
  }
}

export const PersonalAboutSection: React.FC<PersonalAboutSectionProps> = ({
  portfolio,
}) => {
  const completedCount = portfolio.projects.filter(
    (p) => p.status === 'Completed',
  ).length
  const inProgressCount = portfolio.projects.filter(
    (p) => p.status === 'In Progress',
  ).length

  return (
    <section
      id="about"
      className="py-14 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-16"
    >
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Engineering Practical Technology With Real-World Value
          </h2>
        </div>

        {/* Two-Column Bio & What I Build */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Verified Personal Introduction */}
          <div className="lg:col-span-7 space-y-4">
            {portfolio.aboutParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base text-slate-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Verified Portfolio Summary Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90">
                <div className="text-2xl font-extrabold text-[#0066FF]">
                  {portfolio.projects.length}
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">
                  Verified Projects
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90">
                <div className="text-2xl font-extrabold text-[#0B132B]">
                  {completedCount}
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">
                  Completed Builds
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 col-span-2 sm:col-span-1">
                <div className="text-2xl font-extrabold text-cyan-600">
                  {inProgressCount > 0
                    ? `${portfolio.availableDomains.length} (${inProgressCount} Active)`
                    : portfolio.availableDomains.length}
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">
                  Core Domains
                </div>
              </div>
            </div>
          </div>

          {/* Right: What I Enjoy Building Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-blue-50/50 border border-slate-200/90 p-6 sm:p-7 space-y-5 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100/80 text-[#0066FF] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B132B]">
                    What I Focus On Building
                  </h3>
                  <p className="text-xs text-slate-500">
                    Core areas across my projects at RagReon Tech
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {portfolio.whatIBuild.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Core Areas of Specialization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {portfolio.focusPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 space-y-3.5 group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-200">
                {renderIcon(point.icon, 'w-5 h-5')}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B132B] tracking-tight">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonalAboutSection
