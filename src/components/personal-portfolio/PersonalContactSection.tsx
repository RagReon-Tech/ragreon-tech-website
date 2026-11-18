import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  ExternalLink,
  Copy,
  Check,
  ArrowRight,
  Users,
} from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from '@/components/common/SocialIcons'
import type { ResolvedPersonalPortfolio } from '@/types/personal-portfolio.types'

interface PersonalContactSectionProps {
  portfolio: ResolvedPersonalPortfolio
}

export const PersonalContactSection: React.FC<PersonalContactSectionProps> = ({
  portfolio,
}) => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null)
  const cleanPhone = portfolio.phone.replace(/[^+\d]/g, '')

  const handleCopy = (
    text: string,
    field: 'email' | 'phone',
    e: React.MouseEvent,
  ) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => {
      setCopiedField((prev) => (prev === field ? null : prev))
    }, 2000)
  }

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 bg-[#F8FAFC] scroll-mt-16"
    >
      <div className="container-custom space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#0066FF] tracking-wider uppercase">
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
            <span>GET IN TOUCH</span>
            <span className="w-6 h-0.5 bg-[#0066FF] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Connect With {portfolio.shortName}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out directly via email, phone, or professional profiles to discuss technical projects, collaborations, or ideas.
          </p>
        </div>

        {/* 4 Interactive Contact Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {/* 1. Email Card */}
          <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-200 p-5 flex items-center justify-between gap-3">
            <a
              href={`mailto:${portfolio.email}`}
              className="flex items-center gap-4 min-w-0 flex-1 group/link"
              aria-label={`Send email to ${portfolio.name}: ${portfolio.email}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center shrink-0 group-hover/link:bg-[#0066FF] group-hover/link:text-white transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Email Address
                </span>
                <span className="block text-sm sm:text-base font-bold text-[#0B132B] group-hover/link:text-[#0066FF] truncate transition-colors">
                  {portfolio.email}
                </span>
              </div>
            </a>

            <button
              type="button"
              onClick={(e) => handleCopy(portfolio.email, 'email', e)}
              className="p-2.5 rounded-xl text-slate-400 hover:text-[#0066FF] hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-colors shrink-0 cursor-pointer"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copiedField === 'email' ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* 2. Phone Card */}
          <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-200 p-5 flex items-center justify-between gap-3">
            <a
              href={`tel:${cleanPhone}`}
              className="flex items-center gap-4 min-w-0 flex-1 group/link"
              aria-label={`Call ${portfolio.name}: ${portfolio.phone}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 group-hover/link:bg-emerald-600 group-hover/link:text-white transition-colors duration-200">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Phone Number
                </span>
                <span className="block text-sm sm:text-base font-bold text-[#0B132B] group-hover/link:text-emerald-700 truncate transition-colors">
                  {portfolio.phone}
                </span>
              </div>
            </a>

            <button
              type="button"
              onClick={(e) => handleCopy(portfolio.phone, 'phone', e)}
              className="p-2.5 rounded-xl text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 border border-transparent hover:border-emerald-200 transition-colors shrink-0 cursor-pointer"
              title="Copy phone number"
              aria-label="Copy phone number"
            >
              {copiedField === 'phone' ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* 3. LinkedIn Card */}
          <a
            href={portfolio.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${portfolio.name} on LinkedIn`}
            className="group rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-200 p-5 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0A66C2] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors duration-200">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  LinkedIn Profile
                </span>
                <span className="block text-sm sm:text-base font-bold text-[#0B132B] group-hover:text-[#0066FF] truncate transition-colors">
                  {portfolio.linkedinUrl
                    .replace('https://www.', '')
                    .replace('https://', '')}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>

          {/* 4. GitHub Card */}
          <a
            href={portfolio.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${portfolio.name} on GitHub`}
            className="group rounded-2xl bg-white border border-slate-200/90 hover:border-slate-400 shadow-xs hover:shadow-md transition-all duration-200 p-5 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-[#0B132B] group-hover:text-white transition-colors duration-200">
                <GitHubIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  GitHub Profile
                </span>
                <span className="block text-sm sm:text-base font-bold text-[#0B132B] group-hover:text-[#0066FF] truncate transition-colors">
                  {portfolio.githubUrl
                    .replace('https://www.', '')
                    .replace('https://', '')}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>
        </div>

        {/* RagReon Tech Team & Project Inquiry Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#0B132B] via-[#111E40] to-[#0B132B] border border-slate-800 p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
              <Users className="w-3.5 h-3.5" />
              <span>RagReon Tech • Innovate. Build. Elevate.</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
              Looking for a Full Team Solution?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore our complete RagReon Tech company portfolio or send a project inquiry to collaborate with our team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/contact"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all"
            >
              <span>Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/team"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-xs sm:text-sm transition-all"
            >
              <span>Our Team</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalContactSection
