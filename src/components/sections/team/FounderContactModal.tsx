import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  X,
  Mail,
  Phone,
  ExternalLink,
  ArrowRight,
  User,
  Copy,
  Check,
} from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from '@/components/common/SocialIcons'
import { Link } from 'react-router-dom'
import type { TeamMember } from '@/types/team.types'

export interface FounderContactModalProps {
  isOpen: boolean
  onClose: () => void
  founder: TeamMember | null
}

export const FounderContactModal: React.FC<FounderContactModalProps> = ({
  isOpen,
  onClose,
  founder,
}) => {
  const [imageError, setImageError] = useState(false)
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const modalRef = useRef<HTMLDivElement>(null)

  // Reset image error state when selected founder changes
  useEffect(() => {
    setImageError(false)
    setCopiedField(null)
  }, [founder?.id])

  // Prevent background body scroll while modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!founder) return null

  const isSreeram = founder.id === 'sreeram-ganesh' || founder.name.toLowerCase().includes('sreeram')
  const cleanPhone = (founder.phone || '').replace(/[^+\d]/g, '')

  const handleCopy = (text: string, field: 'email' | 'phone', e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => {
      setCopiedField((prev) => (prev === field ? null : prev))
    }, 2000)
  }

  const handlePortfolioClick = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="founder-modal-title"
        >
          {/* Backdrop with subtle blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B132B]/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.95, y: 16 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.95, y: 16 }
            }
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden my-auto flex flex-col z-10 max-h-[92vh]"
          >
            {/* Top Brand Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-[#0066FF] shrink-0" />

            {/* Close Button (X) */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40 z-20"
              aria-label="Close contact popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body with internal scrolling if needed on compact screens */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Header Section */}
              <div className="text-center space-y-3 pt-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                  <span>FOUNDER CONTACT</span>
                </div>

                {/* Profile Photo in Circular Frame */}
                <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24">
                  <div className="w-full h-full rounded-full p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-500 shadow-md">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                      {founder.image && !imageError ? (
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                          style={{
                            objectPosition: isSreeram ? '50% 10%' : '50% 15%',
                          }}
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B132B] to-slate-800 text-white font-bold text-2xl">
                          <User className="w-8 h-8 text-blue-300" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Founder Name & Designation */}
                <div className="space-y-1">
                  <h2
                    id="founder-modal-title"
                    className="text-xl sm:text-2xl font-extrabold text-[#0B132B] tracking-tight"
                  >
                    {founder.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#0066FF]">
                    {founder.role}
                  </p>
                </div>

                {/* Helper Subtitle */}
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Get in touch directly for project collaboration, technical consultations, or inquiries.
                </p>
              </div>

              {/* Contact Information Section (4 Interactive Cards) */}
              <div className="space-y-3">
                {/* 1. Email Card */}
                {founder.email && (
                  <div className="group relative rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-blue-50/50 hover:border-blue-300/80 transition-all duration-200 p-3 sm:p-3.5 flex items-center justify-between gap-3">
                    <a
                      href={`mailto:${founder.email}`}
                      className="flex items-center gap-3 min-w-0 flex-1 group/link"
                      title={`Email ${founder.name}`}
                      aria-label={`Email ${founder.name}: ${founder.email}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0066FF] flex items-center justify-center shrink-0 group-hover/link:bg-[#0066FF] group-hover/link:text-white transition-colors duration-200 shadow-2xs">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 text-left">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover/link:text-blue-600 transition-colors">
                          Email Address
                        </span>
                        <span className="block text-xs sm:text-sm font-medium text-[#0B132B] group-hover/link:text-[#0066FF] truncate transition-colors">
                          {founder.email}
                        </span>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={(e) => handleCopy(founder.email!, 'email', e)}
                      className="p-2 rounded-lg text-slate-400 hover:text-[#0066FF] hover:bg-white transition-colors shrink-0 cursor-pointer border border-transparent hover:border-blue-200"
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copiedField === 'email' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                )}

                {/* 2. LinkedIn Card */}
                {founder.linkedinUrl && (
                  <a
                    href={founder.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-blue-50/50 hover:border-blue-300/80 transition-all duration-200 p-3 sm:p-3.5 flex items-center justify-between gap-3"
                    title={`View ${founder.name}'s LinkedIn profile`}
                    aria-label={`Visit ${founder.name}'s LinkedIn Profile`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-200 shadow-2xs">
                        <LinkedInIcon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 text-left">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                          LinkedIn Profile
                        </span>
                        <span className="block text-xs sm:text-sm font-medium text-[#0B132B] group-hover:text-[#0066FF] truncate transition-colors">
                          {founder.linkedinUrl.replace('https://www.', '').replace('https://', '')}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                )}

                {/* 3. GitHub Card */}
                {founder.githubUrl && (
                  <a
                    href={founder.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-blue-50/50 hover:border-blue-300/80 transition-all duration-200 p-3 sm:p-3.5 flex items-center justify-between gap-3"
                    title={`View ${founder.name}'s GitHub profile`}
                    aria-label={`Visit ${founder.name}'s GitHub Profile`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-slate-200/70 text-slate-800 flex items-center justify-center shrink-0 group-hover:bg-[#0B132B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                        <GitHubIcon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 text-left">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                          GitHub Profile
                        </span>
                        <span className="block text-xs sm:text-sm font-medium text-[#0B132B] group-hover:text-[#0066FF] truncate transition-colors">
                          {founder.githubUrl.replace('https://www.', '').replace('https://', '')}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                )}

                {/* 4. Phone Card */}
                {founder.phone && (
                  <div className="group relative rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-blue-50/50 hover:border-blue-300/80 transition-all duration-200 p-3 sm:p-3.5 flex items-center justify-between gap-3">
                    <a
                      href={`tel:${cleanPhone}`}
                      className="flex items-center gap-3 min-w-0 flex-1 group/link"
                      title={`Call ${founder.name}`}
                      aria-label={`Call ${founder.name}: ${founder.phone}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 group-hover/link:bg-emerald-600 group-hover/link:text-white transition-colors duration-200 shadow-2xs">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 text-left">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover/link:text-emerald-700 transition-colors">
                          Phone Number
                        </span>
                        <span className="block text-xs sm:text-sm font-medium text-[#0B132B] group-hover/link:text-emerald-700 truncate transition-colors">
                          {founder.phone}
                        </span>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={(e) => handleCopy(founder.phone!, 'phone', e)}
                      className="p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-white transition-colors shrink-0 cursor-pointer border border-transparent hover:border-emerald-200"
                      title="Copy phone number to clipboard"
                      aria-label="Copy phone number"
                    >
                      {copiedField === 'phone' ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Footer Section */}
              <div className="pt-2 space-y-2.5">
                <Link
                  to={founder.portfolioUrl || (isSreeram ? '/sreeram' : '/raghuraman')}
                  onClick={handlePortfolioClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 group cursor-pointer"
                  aria-label={`View ${founder.name}'s personal portfolio`}
                >
                  <span>View Personal Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default FounderContactModal
