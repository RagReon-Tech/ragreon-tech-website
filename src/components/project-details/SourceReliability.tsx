import React from 'react'
import {
  Database,
  FileText,
  GitCompare,
  Scale,
} from 'lucide-react'
import type { SourceReliabilityData } from '@/types/project-details.types'

interface SourceReliabilityProps {
  data?: SourceReliabilityData
  projectTitle: string
}

export const SourceReliability: React.FC<SourceReliabilityProps> = ({
  data,
  projectTitle,
}) => {
  if (!data) return null

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80" id="source-reliability">
      <div className="container-custom space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Information Provenance &amp; Verification</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Source References &amp; Response Reliability
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            How {projectTitle} structurally differentiates between authoritative statutory publications
            and user-supplied operational documents to prevent false regulatory compliance assumptions.
          </p>
        </div>

        {/* Dual Stream Comparison: BIS Knowledge vs User Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stream 1: BIS Knowledge */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 space-y-4 shadow-sm hover:border-cyan-300 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B132B]">
                    {data.bisKnowledgeStream.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    {data.bisKnowledgeStream.subtitle}
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
                {data.bisKnowledgeStream.badge}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.bisKnowledgeStream.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Representative Excerpts:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {data.bisKnowledgeStream.examples.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stream 2: User Documents */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 space-y-4 shadow-sm hover:border-indigo-300 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B132B]">
                    {data.userDocumentStream.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    {data.userDocumentStream.subtitle}
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                {data.userDocumentStream.badge}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.userDocumentStream.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Representative Excerpts:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {data.userDocumentStream.examples.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Conflict Resolution Mechanism Banner */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-slate-50 rounded-2xl border border-blue-200/90 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-white text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-200 shadow-xs">
            <GitCompare className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm sm:text-base font-bold text-[#0B132B]">
              Conflict Resolution &amp; Non-Authoritative User Status
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {data.conflictResolution}
            </p>
          </div>
        </div>

        {/* 5 Core Reliability Principles Grid */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            5 Core AI Reliability Principles
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {data.reliabilityPrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 p-4 space-y-2 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-mono text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-[#0B132B]">
                    {principle.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SourceReliability
