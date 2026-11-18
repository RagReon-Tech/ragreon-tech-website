import React from 'react'
import { Target, Users, Zap, BookOpen, Layers, CheckCircle2 } from 'lucide-react'
import type { ProjectOverview as IProjectOverview } from '@/types/project-details.types'

interface ProjectOverviewProps {
  overview?: IProjectOverview
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ overview }) => {
  if (!overview) return null

  const hasContent =
    overview.introduction ||
    overview.purpose ||
    overview.mainObjective ||
    overview.howItWorks ||
    (overview.targetUsers && overview.targetUsers.length > 0) ||
    (overview.highlights && overview.highlights.length > 0)

  if (!hasContent) return null

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="project-overview">
      <div className="container-custom space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Executive Summary</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Project Overview
          </h2>
        </div>

        {/* Introduction Narrative */}
        {overview.introduction && (
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
            {overview.introduction}
          </p>
        )}

        {/* Overview Highlights Badges (if provided) */}
        {overview.highlights && overview.highlights.length > 0 && (
          <div className="space-y-2.5 pt-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Platform Pillars
            </div>
            <div className="flex flex-wrap gap-2.5">
              {overview.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 text-[#0066FF] border border-blue-200/80 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                  <span>{highlight}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Structured Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* 1. Purpose */}
          {overview.purpose && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 text-[#0066FF] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B132B]">Project Purpose</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {overview.purpose}
              </p>
            </div>
          )}

          {/* 2. Main Objective */}
          {overview.mainObjective && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/80 text-indigo-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B132B]">Main Objective</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {overview.mainObjective}
              </p>
            </div>
          )}

          {/* 3. Target Users */}
          {overview.targetUsers && overview.targetUsers.length > 0 && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 sm:p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200/80 text-cyan-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B132B]">Target Users</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                {overview.targetUsers.map((user, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* How It Works Full-Width Card */}
        {overview.howItWorks && (
          <div className="bg-gradient-to-r from-blue-50/70 to-slate-50 border border-blue-200/80 rounded-2xl p-6 sm:p-7 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0066FF]">
              <Layers className="w-4 h-4" />
              <span>How the System Operates</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {overview.howItWorks}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectOverview
