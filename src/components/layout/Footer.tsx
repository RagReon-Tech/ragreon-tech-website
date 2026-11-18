import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, Globe2, ArrowUpRight, Sparkles } from 'lucide-react'
import { InstagramIcon, YoutubeIcon } from '@/components/common/SocialIcons'
import { socialLinks } from '@/data/company'
import { useConsultationModal } from '@/context/ConsultationModalContext'
import { FOOTER_CAPABILITIES } from '@/utils/domainRouting'

export const Footer: React.FC = () => {
  const { openModal } = useConsultationModal()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-[#0B132B] text-slate-300 border-t border-slate-800">
      <div className="container-custom py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group" aria-label="RagReon Tech Home">
              <div className="bg-white p-1 rounded-xl shrink-0 flex items-center justify-center border border-slate-700/40">
                <img
                  src="/images/logos/ragreon-tech-official.png"
                  alt="RagReon Tech Logo"
                  width={1254}
                  height={1254}
                  className="h-10 sm:h-11 w-10 sm:w-11 object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  RagReon <span className="text-[#0066FF]">Tech</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-400">
                  Innovate. Build. Elevate.
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A newly established, remote-first technology team engineering practical
              software, AI systems, data pipelines, and embedded IoT solutions.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <Globe2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Remote & Online — Serving Clients Globally</span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-slate-400 font-medium">Official Channels:</span>
              <div className="flex items-center gap-2">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit RagReon Tech official Instagram profile"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit RagReon Tech official YouTube channel"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10 transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_CAPABILITIES.map((capability) => (
                <li key={capability.name}>
                  <Link
                    to={`/portfolio?domain=${capability.slug}`}
                    className="text-slate-400 hover:text-white transition-colors duration-150 inline-block cursor-pointer"
                  >
                    {capability.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:ragreontechofficial@gmail.com"
                  className="hover:text-white transition-colors block group"
                >
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-400" /> Email
                  </div>
                  <div className="text-xs text-slate-300 group-hover:text-blue-400 break-all transition-colors mt-0.5 font-mono">
                    ragreontechofficial@gmail.com
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+916383309954"
                  className="hover:text-white transition-colors block group"
                >
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-400" /> Phone
                  </div>
                  <div className="text-xs text-slate-300 group-hover:text-blue-400 transition-colors mt-0.5 font-mono">
                    +91 6383309954
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} <span className="text-slate-300 font-medium">RagReon Tech</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Software, AI & Automation</span>
            <span className="text-slate-700">•</span>
            <button
              type="button"
              onClick={() => openModal()}
              className="hover:text-blue-400 transition-colors cursor-pointer text-xs"
            >
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
