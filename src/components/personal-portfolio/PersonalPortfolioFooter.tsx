import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Phone } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from '@/components/common/SocialIcons'
import type { ResolvedPersonalPortfolio } from '@/types/personal-portfolio.types'

interface PersonalPortfolioFooterProps {
  portfolio: ResolvedPersonalPortfolio
}

export const PersonalPortfolioFooter: React.FC<PersonalPortfolioFooterProps> = ({
  portfolio,
}) => {
  const currentYear = new Date().getFullYear()
  const cleanPhone = portfolio.phone.replace(/[^+\d]/g, '')

  return (
    <footer className="bg-[#0B132B] text-slate-300 border-t border-slate-800">
      <div className="container-custom py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Personal Brand & RagReon Tech Attribution */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl shrink-0 flex items-center justify-center border border-slate-700/40">
                <img
                  src="/images/logos/ragreon-tech-official.png"
                  alt="RagReon Tech Logo"
                  width={1254}
                  height={1254}
                  className="h-9 w-9 object-contain rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white tracking-tight">
                  {portfolio.name}
                </h2>
                <p className="text-xs font-semibold text-blue-400">
                  {portfolio.role}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {portfolio.headlineExpertise}. Part of the{' '}
              <Link
                to="/"
                className="text-white hover:text-blue-400 font-semibold transition-colors"
              >
                RagReon Tech
              </Link>{' '}
              team — <span className="text-blue-400 font-semibold">INNOVATE. BUILD. ELEVATE.</span>
            </p>

            <div className="pt-1">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-blue-400" />
                <span>Back to RagReon Tech Website</span>
              </Link>
            </div>
          </div>

          {/* Middle: Quick Portfolio Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Portfolio Sections
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Skills &amp; Expertise
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Personal Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Direct Contact & Verified Socials */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${portfolio.email}`}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{portfolio.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{portfolio.phone}</span>
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={portfolio.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${portfolio.name} on LinkedIn`}
                title="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolio.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${portfolio.name} on GitHub`}
                title="GitHub"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolio.email}`}
                aria-label={`Email ${portfolio.name}`}
                title="Email"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {currentYear} {portfolio.name} | Personal Portfolio
          </p>
          <p>
            Built with passion at{' '}
            <Link
              to="/"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              RagReon Tech
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

export default PersonalPortfolioFooter
