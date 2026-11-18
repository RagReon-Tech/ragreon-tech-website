import React from 'react'
import { motion } from 'framer-motion'
import {
  CalendarCheck,
  Clock,
  Layers,
  Sparkles,
  BarChart3,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Activity,
  Code2,
} from 'lucide-react'
import { getPortfolioStats } from '@/data/projects'

export const PortfolioHeroSection: React.FC = () => {
  const stats = getPortfolioStats()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50/40 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200/70">
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 space-y-12 sm:space-y-16">
        {/* Main Hero Grid: Text & 3D Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Eyebrow, Heading, Description */}
          <div className="lg:col-span-6 space-y-5 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0066FF] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
              <span>OUR WORK</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#0B132B] tracking-tight leading-[1.12]">
              Our Projects.{' '}
              <span className="block text-[#0B132B]">Our Team.</span>
              <span className="block text-[#0066FF]">Our Impact.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              RagReon Tech builds innovative software, AI, data analytics and IoT
              solutions to solve real-world problems. Explore our projects that
              showcase our technical skills, creativity and commitment to
              meaningful innovation.
            </p>
          </div>

          {/* Right Column: High-Fidelity 3D Tech & Laptop Illustration with Floating Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none py-4 px-2">
              {/* Outer Radiant Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 via-cyan-400/15 to-transparent rounded-3xl blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating Badge 1: Top Right - Ideas to Solutions */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-2 right-4 sm:right-10 z-20 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-blue-200/70 shadow-lg shadow-blue-500/10 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#0EA5E9] text-white flex items-center justify-center shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B132B]">Ideas to Solutions</div>
                  <div className="text-[10px] text-slate-500">End-to-End Delivery</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Left Middle - Data Driven Impact */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-1/3 left-0 sm:-left-4 z-20 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-blue-200/70 shadow-lg shadow-blue-500/10 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow-sm">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B132B]">Data Driven Impact</div>
                  <div className="text-[10px] text-slate-500">Measurable Results</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Right Bottom - Real World Innovation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 right-2 sm:right-6 z-20 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-blue-200/70 shadow-lg shadow-blue-500/10 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B132B]">Real World Innovation</div>
                  <div className="text-[10px] text-slate-500">Robust Architecture</div>
                </div>
              </motion.div>

              {/* Central Perspective Laptop Mockup */}
              <div className="relative z-10 pt-8 pb-4 px-4 sm:px-8">
                {/* Laptop Lid Screen Frame */}
                <div className="mx-auto max-w-[420px] rounded-t-2xl bg-[#0B132B] p-2.5 sm:p-3 shadow-2xl border-t border-x border-slate-700/60 ring-1 ring-slate-900/40">
                  {/* Laptop Camera dot */}
                  <div className="flex justify-center mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 border border-slate-600 inline-block" />
                  </div>

                  {/* Screen Content: Futuristic Analytics & Code Workspace */}
                  <div className="rounded-lg bg-slate-950 p-3 sm:p-4 border border-slate-800 text-slate-200 aspect-[16/10] overflow-hidden flex flex-col justify-between">
                    {/* Top Dashboard Nav */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="text-[10px] text-slate-400 font-mono ml-1.5">
                          ragreon.analytics.dashboard
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        LIVE
                      </div>
                    </div>

                    {/* Dashboard Metric Row */}
                    <div className="grid grid-cols-3 gap-2 py-2">
                      <div className="bg-slate-900/90 p-2 rounded-md border border-slate-800">
                        <div className="text-[9px] text-slate-400">Total Telemetry</div>
                        <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">
                          248.5K
                        </div>
                        <div className="text-[8px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
                          <TrendingUp className="w-2.5 h-2.5" /> +18.4%
                        </div>
                      </div>
                      <div className="bg-slate-900/90 p-2 rounded-md border border-slate-800">
                        <div className="text-[9px] text-slate-400">Model Inference</div>
                        <div className="text-xs sm:text-sm font-bold text-blue-400 font-mono mt-0.5">
                          99.2%
                        </div>
                        <div className="text-[8px] text-blue-300 flex items-center gap-0.5 mt-0.5">
                          <Activity className="w-2.5 h-2.5" /> Optimal
                        </div>
                      </div>
                      <div className="bg-slate-900/90 p-2 rounded-md border border-slate-800">
                        <div className="text-[9px] text-slate-400">IoT Nodes</div>
                        <div className="text-xs sm:text-sm font-bold text-cyan-400 font-mono mt-0.5">
                          Active
                        </div>
                        <div className="text-[8px] text-cyan-300 flex items-center gap-0.5 mt-0.5">
                          <Cpu className="w-2.5 h-2.5" /> ESP-NOW
                        </div>
                      </div>
                    </div>

                    {/* Chart Bars Graphic */}
                    <div className="bg-slate-900/60 p-2 rounded-md border border-slate-800 flex items-end justify-between gap-1.5 h-14">
                      <div className="w-full bg-blue-500/20 rounded-t h-[40%]" />
                      <div className="w-full bg-blue-500/40 rounded-t h-[65%]" />
                      <div className="w-full bg-cyan-400/50 rounded-t h-[50%]" />
                      <div className="w-full bg-blue-500/70 rounded-t h-[80%]" />
                      <div className="w-full bg-cyan-400/80 rounded-t h-[95%]" />
                      <div className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t h-[100%]" />
                    </div>

                    {/* Bottom Status bar */}
                    <div className="flex items-center justify-between text-[9px] text-slate-500 font-mono pt-1">
                      <span className="flex items-center gap-1">
                        <Code2 className="w-3 h-3 text-[#0066FF]" /> Full-Stack &amp; AI
                      </span>
                      <span>RagReon Tech v2.0</span>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Stand */}
                <div className="mx-auto max-w-[460px] h-3 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-b-xl shadow-xl flex justify-center items-start">
                  <div className="w-16 h-1 bg-slate-500/60 rounded-b" />
                </div>
                {/* Surface Reflection Line */}
                <div className="mx-auto max-w-[380px] h-1.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-sm mt-1" />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION A BOTTOM: 3 Statistics Cards generated dynamically */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-4">
          {/* 1. Completed Projects */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-[#0066FF] shadow-sm">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold text-[#0B132B]">Completed Projects</div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0066FF] tracking-tight">
                {stats.completedCount} Projects
              </div>
              <p className="text-xs text-slate-500 leading-snug">
                Delivered real solutions across multiple domains.
              </p>
            </div>
          </div>

          {/* 2. Ongoing Projects */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 text-purple-600 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold text-[#0B132B]">Ongoing Projects</div>
              <div className="text-xl sm:text-2xl font-extrabold text-purple-600 tracking-tight">
                {stats.ongoingCount} Projects
              </div>
              <p className="text-xs text-slate-500 leading-snug">
                Currently developing innovative solutions.
              </p>
            </div>
          </div>

          {/* 3. Technology Domains */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-600 shadow-sm">
              <Layers className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold text-[#0B132B]">Technology Domains</div>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 tracking-tight">
                {stats.domainsCount} Domains
              </div>
              <p className="text-xs text-slate-500 leading-snug">
                Web, AI/ML, Data Analytics, IoT and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioHeroSection

