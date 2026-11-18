import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  Mail,
  BarChart3,
  Cpu,
  BrainCircuit,
  Code2,
  User,
  Sparkles,
  Layers,
} from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from '@/components/common/SocialIcons'
import type { ResolvedPersonalPortfolio } from '@/types/personal-portfolio.types'

interface PersonalHeroProps {
  portfolio: ResolvedPersonalPortfolio
}

export const PersonalHero: React.FC<PersonalHeroProps> = ({ portfolio }) => {
  const [imageError, setImageError] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const isDataTheme = portfolio.themeVariant === 'data-ai'

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#060B18] via-[#0B132B] to-[#111E40] text-white py-14 sm:py-20 lg:py-24 border-b border-slate-800"
    >
      {/* Domain-tailored subtle background texture */}
      {isDataTheme ? (
        /* Data Analytics & AI subtle matrix grid */
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf814_1px,transparent_1px),linear-gradient(to_bottom,#38bdf814_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_55%,transparent_100%)] pointer-events-none"
          aria-hidden="true"
        />
      ) : (
        /* IoT & Embedded Hardware subtle dot-node circuit grid */
        <div
          className="absolute inset-0 bg-[radial-gradient(#38bdf826_1.5px,transparent_1.5px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_40%,#000_55%,transparent_100%)] pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Ambient brand glow orbs */}
      <div
        className={`absolute -top-24 right-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl pointer-events-none ${
          isDataTheme ? 'bg-[#0066FF]/20' : 'bg-cyan-500/20'
        }`}
        aria-hidden="true"
      />
      <div
        className={`absolute -bottom-24 left-1/4 w-[24rem] h-[24rem] rounded-full blur-3xl pointer-events-none ${
          isDataTheme ? 'bg-cyan-500/15' : 'bg-[#0066FF]/20'
        }`}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Personal Introduction & CTAs */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1"
          >
            {/* Role & Company Affiliation Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{portfolio.role}</span>
            </div>

            {/* Greeting & Full Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-cyan-400 tracking-wide uppercase">
                {portfolio.greeting}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.1]">
                {portfolio.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-blue-300 pt-1">
                {portfolio.headlineExpertise}
              </p>
            </div>

            {/* Short Personal Introduction */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {portfolio.heroIntro}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-blue-400/50 font-semibold text-sm backdrop-blur-xs transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Direct Verified Social Strip */}
            <div className="pt-3 flex flex-wrap items-center gap-3 border-t border-slate-800/80">
              <span className="text-xs font-medium text-slate-400">
                Connect directly:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={portfolio.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${portfolio.name} on GitHub`}
                  title="GitHub Profile"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-medium transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolio.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${portfolio.name} on LinkedIn`}
                  title="LinkedIn Profile"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-[#0A66C2]/20 text-slate-300 hover:text-blue-300 border border-slate-700/80 hover:border-blue-500/50 text-xs font-medium transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${portfolio.email}`}
                  aria-label={`Email ${portfolio.name}`}
                  title="Send Email"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-blue-600/20 text-slate-300 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-500/50 text-xs font-medium transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Portrait Frame & Domain Visual Accents */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Decorative subtle border halo */}
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#0066FF]/35 via-cyan-400/20 to-blue-600/35 blur-xl opacity-75 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/60">
                  {portfolio.image && !imageError ? (
                    <img
                      src={portfolio.image}
                      alt={`${portfolio.name} - ${portfolio.role}`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: portfolio.imagePosition }}
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B132B] to-slate-800">
                      <User className="w-16 h-16 text-blue-400" />
                    </div>
                  )}

                  {/* Subtle bottom gradient overlay for legible badge */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060B18]/90 via-[#060B18]/40 to-transparent pointer-events-none" />

                  {/* Verified Portfolio Stats Pill inside frame */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-slate-950/85 border border-slate-700/80 backdrop-blur-md">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 border border-blue-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                        {isDataTheme ? (
                          <BarChart3 className="w-4 h-4" />
                        ) : (
                          <Cpu className="w-4 h-4" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          {portfolio.projects.length} Verified Projects
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {portfolio.availableDomains.length} Technical Domains
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-400/30 text-[10px] font-bold text-emerald-300 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Domain-Specific Floating Tech Accent Badges (Desktop/Tablet) */}
              <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl bg-[#0B132B]/95 border border-blue-500/40 shadow-xl backdrop-blur-md">
                {isDataTheme ? (
                  <>
                    <BrainCircuit className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white">
                      Data &amp; AI Focus
                    </span>
                  </>
                ) : (
                  <>
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white">
                      IoT &amp; Embedded Focus
                    </span>
                  </>
                )}
              </div>

              <div className="hidden sm:flex items-center gap-2 absolute -bottom-3 -left-4 px-3.5 py-2 rounded-2xl bg-[#0B132B]/95 border border-cyan-500/40 shadow-xl backdrop-blur-md">
                {isDataTheme ? (
                  <>
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold text-slate-200">
                      Power BI • SQL • Python
                    </span>
                  </>
                ) : (
                  <>
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold text-slate-200">
                      ESP32 • Python • ML
                    </span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PersonalHero
