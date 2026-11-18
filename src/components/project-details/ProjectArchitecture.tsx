import React, { useState } from 'react'
import {
  Layers,
  Server,
  Database,
  Cpu,
  Radio,
  Workflow,
  Sparkles,
} from 'lucide-react'
import type { SystemArchitecture as ISystemArchitecture } from '@/types/project-details.types'
import { RagArchitectureDiagram } from './RagArchitectureDiagram'

interface ProjectArchitectureProps {
  architecture?: ISystemArchitecture
  assetFolderPath: string
}

export const ProjectArchitecture: React.FC<ProjectArchitectureProps> = ({
  architecture,
  assetFolderPath,
}) => {
  const [imageError, setImageError] = useState(false)

  if (!architecture) return null

  const hasAnyLayer =
    architecture.frontend ||
    architecture.backend ||
    architecture.database ||
    (architecture.apis && architecture.apis.length > 0) ||
    (architecture.aiModels && architecture.aiModels.length > 0) ||
    (architecture.hardwareSensors && architecture.hardwareSensors.length > 0) ||
    (architecture.workflow && architecture.workflow.length > 0) ||
    architecture.description ||
    architecture.diagramImage

  if (!hasAnyLayer) return null

  const candidateDiagram = architecture.diagramImage || `${assetFolderPath}architecture.png`

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="system-architecture">
      <div className="container-custom space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Blueprint</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            System Architecture
          </h2>
          {architecture.description && (
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {architecture.description}
            </p>
          )}
        </div>

        {/* Interactive Architecture Flow Diagram if requested */}
        {architecture.interactiveDiagram && (
          <div className="w-full">
            <RagArchitectureDiagram />
          </div>
        )}

        {/* Diagram Image if available and valid and interactive diagram not shown */}
        {!architecture.interactiveDiagram && candidateDiagram && !imageError && (
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white p-2 sm:p-4 aspect-[16/9] max-w-4xl mx-auto flex items-center justify-center">
            <img
              src={candidateDiagram}
              alt="System Architecture Diagram"
              className="w-full h-full object-contain"
              onError={() => setImageError(true)}
            />
          </div>
        )}

        {/* Architectural Layers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend Layer */}
          {architecture.frontend && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Layers className="w-4 h-4 text-[#0066FF]" />
                <span>Frontend Layer</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                {architecture.frontend}
              </p>
            </div>
          )}

          {/* Backend Layer */}
          {architecture.backend && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Server className="w-4 h-4 text-indigo-600" />
                <span>Backend Layer</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                {architecture.backend}
              </p>
            </div>
          )}

          {/* Database Layer */}
          {architecture.database && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Database className="w-4 h-4 text-cyan-600" />
                <span>Database Layer</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                {architecture.database}
              </p>
            </div>
          )}

          {/* AI/ML Models */}
          {architecture.aiModels && architecture.aiModels.length > 0 && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-purple-600" />
                <span>AI &amp; Inference Pipeline</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {architecture.aiModels.map((model, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>{model}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hardware & Sensors */}
          {architecture.hardwareSensors && architecture.hardwareSensors.length > 0 && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Radio className="w-4 h-4 text-amber-600" />
                <span>Hardware &amp; Telemetry</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {architecture.hardwareSensors.map((sensor, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{sensor}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* APIs & Services */}
          {architecture.apis && architecture.apis.length > 0 && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>APIs &amp; Integration</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {architecture.apis.map((api, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{api}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Communication Workflow Steps */}
        {architecture.workflow && architecture.workflow.length > 0 && (
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Workflow className="w-4 h-4 text-[#0066FF]" />
              <span>Communication &amp; Data Pipeline Workflow</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {architecture.workflow.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 p-4 space-y-2"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-[#0066FF] font-mono text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectArchitecture
