import React from 'react'
import { BarChart3, Users, Lightbulb, ShieldCheck } from 'lucide-react'
import { valuePropositions } from '@/data/company'

export const HighlightsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart2':
        return <BarChart3 className="w-6 h-6 text-[#0066FF]" />
      case 'Users':
        return <Users className="w-6 h-6 text-[#0066FF]" />
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#0066FF]" />
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#0066FF]" />
      default:
        return <BarChart3 className="w-6 h-6 text-[#0066FF]" />
    }
  }

  return (
    <section className="relative z-10 -mt-4 mb-8">
      <div className="container-custom">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/50 p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {valuePropositions.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center gap-3.5 pt-3 sm:pt-0 ${
                idx !== 0 ? 'sm:pl-6' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0">
                {getIcon(item.icon)}
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-[#0B132B] tracking-tight">
                  {item.title}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HighlightsBar
