import React from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart3,
  Database,
  Brain,
  Code2,
  Terminal,
  Wifi,
  Scan,
  ArrowRight,
} from 'lucide-react'
import { servicesData } from '@/data/services'
import { Card } from '@/components/common/Card'

export const ServicesSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#0066FF]" />
      case 'Database':
        return <Database className="w-6 h-6 text-cyan-600" />
      case 'Brain':
      case 'BrainCircuit':
        return <Brain className="w-6 h-6 text-indigo-600" />
      case 'Code2':
        return <Code2 className="w-6 h-6 text-emerald-600" />
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-amber-600" />
      case 'Wifi':
      case 'Cpu':
        return <Wifi className="w-6 h-6 text-orange-600" />
      case 'Scan':
      case 'ScanEye':
        return <Scan className="w-6 h-6 text-purple-600" />
      default:
        return <Code2 className="w-6 h-6 text-[#0066FF]" />
    }
  }

  const getIconBg = (highlight?: string) => {
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

  return (
    <section className="py-14 sm:py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="container-custom space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
              <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
              <span>Our Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              From data to deployment, we build solutions that create real impact.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#0066FF] bg-blue-50 border border-blue-200/80 hover:bg-blue-100 transition-colors self-start md:self-auto shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between border-slate-200/90 bg-white"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${getIconBg(
                    service.highlightColor,
                  )}`}
                >
                  {renderIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#0B132B] tracking-tight leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Skills tags preview */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {service.skills.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 text-slate-400 font-medium">
                      +{service.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-5 mt-4 border-t border-slate-100">
                <Link
                  to={`/services/${service.slug || service.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] hover:text-blue-800 transition-colors group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
