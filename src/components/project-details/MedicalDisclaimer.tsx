import React from 'react'
import { ShieldAlert } from 'lucide-react'

interface MedicalDisclaimerProps {
  disclaimer?: string
}

export const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({ disclaimer }) => {
  if (!disclaimer) return null

  return (
    <section className="py-8 bg-amber-50/60 border-t border-b border-amber-200/80" id="medical-disclaimer">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/90 p-5 sm:p-6 rounded-2xl border border-amber-300/80 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                {disclaimer.toLowerCase().includes('dementia') ||
                disclaimer.toLowerCase().includes('clinical') ||
                disclaimer.toLowerCase().includes('medical')
                  ? 'Responsible AI & Clinical Safety Notice'
                  : disclaimer.toLowerCase().includes('bis') ||
                    disclaimer.toLowerCase().includes('regulatory') ||
                    disclaimer.toLowerCase().includes('standard') ||
                    disclaimer.toLowerCase().includes('certification')
                  ? 'Responsible Use & Regulatory Notice'
                  : 'Responsible AI & Predictive Modeling Notice'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MedicalDisclaimer
