import React from 'react'
import { Database, Info, BookOpen } from 'lucide-react'
import type { BisKnowledgeBaseData } from '@/types/project-details.types'

interface BisKnowledgeBaseProps {
  knowledgeBase?: BisKnowledgeBaseData
  projectTitle: string
}

export const BisKnowledgeBase: React.FC<BisKnowledgeBaseProps> = ({
  knowledgeBase,
  projectTitle,
}) => {
  if (!knowledgeBase) return null

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80" id="bis-knowledge-base">
      <div className="container-custom space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200/80 text-xs font-bold uppercase tracking-wider">
            <Database className="w-3.5 h-3.5" />
            <span>Dense Vector Knowledge Repository</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            BIS Knowledge Base &amp; Vector Index
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            {knowledgeBase.description} Powers authoritative semantic retrieval for {projectTitle}.
          </p>
        </div>

        {/* Vector DB Parameters Specification Table & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Technical Parameters Table */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Database className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-sm sm:text-base">Vector Database Specifications</span>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
                ChromaDB
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {knowledgeBase.parameters.map((param, idx) => (
                <div
                  key={idx}
                  className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-600">
                    {param.label}
                  </span>
                  <div className="text-left sm:text-right">
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#0B132B]">
                      {param.value}
                    </span>
                    {param.detail && (
                      <div className="text-[11px] text-slate-400 font-mono">
                        {param.detail}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Knowledge Base Content Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-3.5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#0066FF]" />
                <span>Indexed Content Taxonomy</span>
              </div>
              <p className="text-xs text-slate-600">
                The ChromaDB collection contains segmented, vectorized excerpts drawn from authoritative regulatory sources:
              </p>
              <ul className="space-y-2">
                {knowledgeBase.contents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      ✓
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audit / Historic Figure Transparency Banner */}
            <div className="bg-blue-50/80 rounded-2xl border border-blue-200/80 p-4 sm:p-5 flex items-start gap-3 shadow-xs">
              <Info className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                  Audit Transparency Notice
                </div>
                <p className="text-xs text-blue-900/80 leading-relaxed">
                  {knowledgeBase.auditNotice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BisKnowledgeBase
