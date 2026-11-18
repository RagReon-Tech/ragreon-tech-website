import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Menu, X, Mail } from 'lucide-react'
import type { ResolvedPersonalPortfolio } from '@/types/personal-portfolio.types'

interface PersonalPortfolioNavbarProps {
  portfolio: ResolvedPersonalPortfolio
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const PersonalPortfolioNavbar: React.FC<PersonalPortfolioNavbarProps> = ({
  portfolio,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace(/^#/, '')
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/70'
      }`}
    >
      <div className="container-custom">
        <div className="h-16 sm:h-18 flex items-center justify-between gap-4">
          {/* Left: RagReon Tech Logo + Individual Personal Brand */}
          <div className="flex items-center gap-3 min-w-0">
            <a
              href="#home"
              onClick={(e) => handleAnchorClick(e, '#home')}
              className="inline-flex items-center gap-2.5 group min-w-0"
              aria-label={`${portfolio.name} Personal Portfolio Home`}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/90 p-1 shrink-0 flex items-center justify-center shadow-2xs group-hover:border-blue-300 transition-colors">
                <img
                  src="/images/logos/ragreon-tech-official.png"
                  alt="RagReon Tech Logo"
                  width={1254}
                  height={1254}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-base font-extrabold text-[#0B132B] tracking-tight truncate group-hover:text-[#0066FF] transition-colors">
                  {portfolio.name}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0066FF] truncate">
                  RagReon Tech • Portfolio
                </span>
              </div>
            </a>
          </div>

          {/* Center: Desktop Section Links */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Personal Portfolio Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0066FF] hover:bg-blue-50/70 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Back to RagReon Tech + Contact Me CTAs */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 hover:border-slate-300 transition-all"
              title="Return to RagReon Tech main website"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>Back to RagReon Tech</span>
            </Link>

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0066FF] hover:bg-[#0052CC] shadow-sm shadow-blue-500/25 hover:shadow-blue-500/35 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-[#0066FF] hover:bg-blue-50 border border-slate-200/80 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/80 bg-white shadow-lg">
          <div className="container-custom py-4 space-y-3">
            <nav
              className="flex flex-col space-y-1"
              aria-label="Mobile Personal Portfolio Navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#0066FF] hover:bg-blue-50/80 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>← Back to RagReon Tech</span>
              </Link>

              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0066FF] hover:bg-[#0052CC] shadow-sm transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default PersonalPortfolioNavbar
