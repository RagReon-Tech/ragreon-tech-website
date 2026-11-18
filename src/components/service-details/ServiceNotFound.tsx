import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Layers, Sparkles } from 'lucide-react'

interface ServiceNotFoundProps {
  requestedSlug?: string
}

export const ServiceNotFound: React.FC<ServiceNotFoundProps> = ({ requestedSlug }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50/50">
      <div className="max-w-lg w-full bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center mx-auto">
          <Layers className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
            Service Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
            Technology Domain Unavailable
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The service domain <span className="font-mono font-semibold text-slate-800">{requestedSlug || 'unknown'}</span> does not match our current practice areas or has been reorganized.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] shadow-md shadow-blue-500/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore All 7 Services</span>
          </Link>
          <Link
            to="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#0066FF]" />
            <span>View Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceNotFound

