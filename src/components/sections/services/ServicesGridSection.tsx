import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart3,
  Database,
  BrainCircuit,
  Code2,
  Terminal,
  Cpu,
  ScanEye,
  ArrowRight,
  Check,
} from 'lucide-react'
import { servicesData } from '@/data/services'
import { Card } from '@/components/common/Card'
import { useConsultationModal } from '@/context/ConsultationModalContext'

export const ServicesGridSection: React.FC = () => {
  const { openModal } = useConsultationModal()
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#0066FF]" />
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-600" />
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-indigo-600" />
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-600" />
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-600" />
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-orange-600" />
      case 'ScanEye':
        return <ScanEye className="w-5 h-5 text-purple-600" />
      default:
        return <Code2 className="w-5 h-5 text-[#0066FF]" />
    }
  }

  const getIconContainerStyle = (highlight?: string) => {
    switch (highlight) {
      case 'blue':
        return 'bg-blue-50 border-blue-100'
      case 'cyan':
        return 'bg-cyan-50 border-cyan-100'
      case 'indigo':
        return 'bg-indigo-50 border-indigo-100'
      case 'emerald':
        return 'bg-emerald-50 border-emerald-100'
      case 'amber':
        return 'bg-amber-50 border-amber-100'
      case 'orange':
        return 'bg-orange-50 border-orange-100'
      case 'purple':
        return 'bg-purple-50 border-purple-100'
      default:
        return 'bg-blue-50 border-blue-100'
    }
  }

  // Row 1: 4 cards (Services 01 to 04)
  const row1Services = servicesData.slice(0, 4)
  // Row 2: 3 cards (Services 05 to 07)
  const row2Services = servicesData.slice(4, 7)

  const renderCard = (service: typeof servicesData[0]) => {
    const hasImageError = imageErrors[service.id]

    return (
      <Card
        key={service.id}
        hoverEffect
        padding="none"
        className="bg-white border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
      >
        <div className="p-5 sm:p-6 flex flex-col justify-between h-full space-y-4">
          {/* Top Row: Number, Icon, Title and Right Visual */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold text-slate-400">
                  {service.serviceNumber}
                </span>
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${getIconContainerStyle(
                    service.highlightColor,
                  )} group-hover:scale-105 transition-transform`}
                >
                  {renderServiceIcon(service.icon)}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0B132B] tracking-tight leading-snug">
                {service.title}
              </h3>
            </div>

            {/* Right side Image thumbnail */}
            {service.image && !hasImageError ? (
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-900 shrink-0 shadow-inner">
                <img
                  src={service.image}
                  alt={`${service.title} visualization`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={() => handleImageError(service.id)}
                />
              </div>
            ) : (
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 rounded-xl border flex items-center justify-center shrink-0 ${getIconContainerStyle(
                  service.highlightColor,
                )}`}
              >
                {renderServiceIcon(service.icon)}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Technology Checkmarks Grid */}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] text-slate-600">
            {service.skills.map((tech) => (
              <div key={tech} className="flex items-center gap-1.5 truncate">
                <Check className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                <span className="truncate font-medium">{tech}</span>
              </div>
            ))}
          </div>

          {/* Learn More Action Link */}
          <div className="pt-2">
            <Link
              to={`/services/${service.slug || service.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors group/link"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC]">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
              <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Tailored services to help you solve real-world problems through
              technology, data, and intelligent automation.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openModal()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#0066FF] bg-white border border-blue-200/80 hover:bg-blue-50 shadow-sm transition-all self-start md:self-auto shrink-0 cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Row 1: 4 Cards on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {row1Services.map((service) => renderCard(service))}
        </div>

        {/* Row 2: 3 Cards on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {row2Services.map((service) => renderCard(service))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGridSection
