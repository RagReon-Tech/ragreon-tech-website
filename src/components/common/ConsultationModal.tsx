import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  X,
  User,
  Mail,
  Phone,
  Layers,
  Wallet,
  MessageSquare,
  ArrowRight,
  Loader2,
  Check,
  Copy,
  MessageCircle,
  Clock,
  Sliders,
  Globe2,
  Headphones,
  AlertCircle,
} from 'lucide-react'
import { useConsultationModal } from '@/context/ConsultationModalContext'
import {
  submitConsultationEnquiry,
  generateMailtoUrl,
  generateWhatsAppUrl,
} from '@/services/contactService'
import type {
  ConsultationFormData,
  ConsultationFormErrors,
  SubmissionStatus,
  SubmissionResponse,
} from '@/types/contact.types'

const serviceOptions = [
  'Data Analytics & Business Intelligence',
  'Data Science',
  'AI & Machine Learning',
  'Web Development',
  'Python Development & Automation',
  'IoT & Embedded Systems',
  'Deep Learning & Computer Vision',
  'Other',
]

const budgetOptions = [
  'Not decided yet',
  'Under ₹5,000',
  '₹5,000–₹15,000',
  '₹15,000–₹50,000',
  '₹50,000+',
]

export const ConsultationModal: React.FC = () => {
  const { isOpen, closeModal, initialService } = useConsultationModal()
  const prefersReducedMotion = useReducedMotion()

  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    service: initialService || '',
    budget: '',
    message: '',
  })

  const [errors, setErrors] = useState<ConsultationFormErrors>({})
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null)
  const [copied, setCopied] = useState(false)

  // Accessibility refs for focus management
  const modalRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const triggerElementRef = useRef<HTMLElement | null>(null)

  // Track initial trigger element and service on open
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement
      if (initialService) {
        setFormData((prev) => ({ ...prev, service: initialService }))
      }
      // Disable body scroll
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      // Focus first input after animation
      const timer = setTimeout(() => {
        firstInputRef.current?.focus()
      }, 150)

      return () => {
        document.body.style.overflow = originalOverflow
        clearTimeout(timer)
      }
    } else {
      // Reset state on close
      setStatus('idle')
      setErrors({})
      setSubmissionResult(null)
      setCopied(false)

      // Restore focus to trigger element
      if (triggerElementRef.current) {
        triggerElementRef.current.focus()
      }
    }
  }, [isOpen, initialService])

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && status !== 'submitting') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, status, closeModal])

  // Validation
  const validate = (): boolean => {
    const newErrors: ConsultationFormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = 'Please provide a valid email address.'
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your project.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Project details must be at least 10 characters long.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof ConsultationFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setStatus('submitting')
    try {
      const result = await submitConsultationEnquiry(formData)
      setSubmissionResult(result)

      if (result.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
      setSubmissionResult({
        success: false,
        isLiveSubmission: false,
        message: 'A network error occurred while submitting. Please try direct channels below.',
      })
    }
  }

  const handleCopySummary = () => {
    const summary = [
      `--- RagReon Tech Consultation Request ---`,
      `Full Name: ${formData.name}`,
      `Email Address: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      `Service: ${formData.service}`,
      formData.budget ? `Project Budget: ${formData.budget}` : null,
      ``,
      `Project Details:`,
      formData.message,
    ]
      .filter((line): line is string => line !== null)
      .join('\n')

    navigator.clipboard.writeText(summary)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && status !== 'submitting') {
      closeModal()
    }
  }

  const modalVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, scale: 0.94, y: 18 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.94, y: 18 },
      }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
          onClick={handleBackdropClick}
          role="presentation"
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.25 }}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-modal-title"
            tabIndex={-1}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              type: 'spring',
              damping: 26,
              stiffness: 320,
              duration: prefersReducedMotion ? 0.1 : 0.28,
            }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl shadow-blue-950/50 overflow-hidden z-10 border border-slate-700/20 my-auto max-h-[92vh] flex flex-col md:flex-row focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              disabled={status === 'submitting'}
              aria-label="Close consultation modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ========================================================= */}
            {/* LEFT PANEL: Brand & Introduction */}
            {/* ========================================================= */}
            <div className="w-full md:w-5/12 bg-gradient-to-br from-[#060D1E] via-[#0B1A3A] to-[#040814] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-slate-800">
              {/* Decorative Glow Elements */}
              <div
                className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/25 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top: Logo & Slogan */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/logos/ragreon-logo-clean.png"
                    alt="RagReon Tech Logo"
                    className="h-9 w-auto object-contain shrink-0 drop-shadow-md"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
                      RagReon <span className="text-[#0066FF]">Tech</span>
                    </span>
                    <span className="text-[9px] font-semibold tracking-wider uppercase text-blue-400">
                      Innovate. Build. Elevate.
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
                    Let's Build <br className="hidden sm:inline" />
                    Something <br className="hidden sm:inline" />
                    Amazing <br className="hidden sm:inline" />
                    <span className="text-[#0EA5E9]">Together.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Have a project in mind? Tell us what you're planning, and the
                    RagReon Tech team will help you explore the right technology
                    solution.
                  </p>
                </div>

                {/* 4 Feature Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-xs text-slate-200">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">Fast Response</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-200">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Sliders className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">Custom Solutions</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-200">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Globe2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">Remote Collaboration</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-200">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Headphones className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">End-to-End Support</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Direct Contact Details */}
              <div className="relative z-10 pt-6 mt-6 border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-col gap-1">
                <span className="text-slate-500">Official Inquiries:</span>
                <a
                  href="mailto:ragreontechofficial@gmail.com"
                  className="text-blue-300 hover:text-white transition-colors font-mono break-all"
                >
                  ragreontechofficial@gmail.com
                </a>
              </div>
            </div>

            {/* ========================================================= */}
            {/* RIGHT PANEL: Form or Success States */}
            {/* ========================================================= */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 overflow-y-auto flex-1 bg-white">
              {/* Submission State: SUCCESS */}
              {status === 'success' ? (
                <div className="py-6 sm:py-8 flex flex-col items-center text-center space-y-5 animate-fadeIn">
                  {/* Celebratory Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[3]" />
                    </div>
                    {/* Confetti dot accents */}
                    <span className="absolute -top-1 -left-2 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping opacity-75" />
                    <span className="absolute top-2 -right-2 w-2 h-2 rounded-full bg-blue-400" />
                    <span className="absolute -bottom-1 left-1 w-2 h-2 rounded-full bg-pink-400" />
                    <span className="absolute -bottom-1 -right-2 w-2.5 h-2.5 rounded-full bg-emerald-300" />
                  </div>

                  <div className="space-y-2.5 max-w-md">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Thank you for reaching out. Your project enquiry has been saved successfully.
                    </p>

                    {/* Display Server Generated Enquiry ID if available */}
                    {submissionResult?.enquiryId && (
                      <div className="pt-1">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-xs font-mono font-semibold text-[#0066FF] shadow-xs">
                          <span className="text-slate-500 font-sans">Enquiry ID:</span>
                          <span className="tracking-wide">{submissionResult.enquiryId}</span>
                        </div>
                      </div>
                    )}

                    {/* Partial Success Notice if email notification failed */}
                    {status === 'success' && submissionResult?.emailSent === false && (
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs text-left space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>Notification Delivery Notice</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-amber-700">
                          Your enquiry has been securely saved in our CRM system. However, the automated notification email delivery was delayed. You can also send a copy directly via Email or WhatsApp below.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="w-full max-w-sm space-y-2.5 pt-2">
                    <a
                      href={generateMailtoUrl(formData)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0066FF] border border-blue-200/80 font-semibold text-xs sm:text-sm transition-all shadow-sm"
                    >
                      <Mail className="w-4 h-4 text-[#0066FF]" />
                      <span>Send via Email Instead</span>
                    </a>

                    <a
                      href={generateWhatsAppUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 font-semibold text-xs sm:text-sm transition-all shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-xs sm:text-sm transition-all"
                    >
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Details'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/25 mt-2 cursor-pointer"
                    >
                      <span>Close</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM VIEW */
                <div className="space-y-4">
                  {/* Header */}
                  <div className="space-y-1.5 pr-8">
                    <div className="flex items-center gap-2 text-[#0066FF] text-[11px] font-bold tracking-widest uppercase">
                      <span className="w-4 h-0.5 bg-[#0066FF] rounded-full" />
                      <span>LET'S TALK</span>
                    </div>
                    <h2
                      id="consultation-modal-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Project Consultation
                    </h2>
                    <p className="text-xs text-slate-500">
                      Share your requirements and we'll get back to you soon.
                    </p>
                  </div>

                  {/* Submission Error Banner */}
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex flex-col gap-2.5 animate-fadeIn">
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <span className="font-bold">
                            We couldn't confirm your enquiry submission. Please try again.
                          </span>
                          {submissionResult?.details && (
                            <p className="text-[11px] text-rose-600">
                              {submissionResult.details}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-rose-200/60">
                        <button
                          type="button"
                          onClick={(e) => {
                            handleSubmit(e as unknown as React.FormEvent)
                          }}
                          className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold text-[11px] transition-colors cursor-pointer shadow-xs"
                        >
                          Retry Submission
                        </button>
                        <a
                          href={generateMailtoUrl(formData)}
                          className="px-3 py-1.5 rounded-lg bg-white border border-rose-300 text-rose-800 hover:bg-rose-100/50 font-semibold text-[11px] transition-colors inline-flex items-center gap-1.5"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Send via Email</span>
                        </a>
                        <a
                          href={generateWhatsAppUrl(formData)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] transition-colors inline-flex items-center gap-1.5"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label
                        htmlFor="consultation-name"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          ref={firstInputRef}
                          id="consultation-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 bg-transparent rounded-xl outline-none placeholder:text-slate-400"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                      <label
                        htmlFor="consultation-email"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="consultation-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 bg-transparent rounded-xl outline-none placeholder:text-slate-400"
                          aria-required="true"
                          aria-invalid={!!errors.email}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number (Optional) */}
                    <div className="space-y-1">
                      <label
                        htmlFor="consultation-phone"
                        className="block text-xs font-semibold text-slate-700 flex items-center justify-between"
                      >
                        <span>Phone Number</span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          Optional
                        </span>
                      </label>
                      <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="consultation-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your contact number"
                          className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 bg-transparent rounded-xl outline-none placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Service Interested In */}
                    <div className="space-y-1">
                      <label
                        htmlFor="consultation-service"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        Service Interested In <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Layers className="w-4 h-4" />
                        </div>
                        <select
                          id="consultation-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full pl-9 pr-8 py-2.5 text-xs sm:text-sm text-slate-900 bg-transparent rounded-xl outline-none appearance-none cursor-pointer"
                          aria-required="true"
                          aria-invalid={!!errors.service}
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((svc) => (
                            <option key={svc} value={svc}>
                              {svc}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 text-[10px]">
                          ▼
                        </div>
                      </div>
                      {errors.service && (
                        <p className="text-[11px] text-rose-500 font-medium">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Project Budget (Optional) */}
                    <div className="space-y-1">
                      <label
                        htmlFor="consultation-budget"
                        className="block text-xs font-semibold text-slate-700 flex items-center justify-between"
                      >
                        <span>Project Budget</span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          Optional
                        </span>
                      </label>
                      <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Wallet className="w-4 h-4" />
                        </div>
                        <select
                          id="consultation-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full pl-9 pr-8 py-2.5 text-xs sm:text-sm text-slate-900 bg-transparent rounded-xl outline-none appearance-none cursor-pointer"
                        >
                          <option value="">Select your budget (optional)</option>
                          {budgetOptions.map((bg) => (
                            <option key={bg} value={bg}>
                              {bg}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 text-[10px]">
                          ▼
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-400">
                        Optional range indicator to help customize recommendations.
                      </p>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-1">
                      <label
                        htmlFor="consultation-message"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        Project Details <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                        <div className="absolute top-2.5 left-3 pointer-events-none text-slate-400">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <textarea
                          id="consultation-message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your idea, requirements, or project goals..."
                          className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 bg-transparent rounded-xl outline-none resize-y placeholder:text-slate-400"
                          aria-required="true"
                          aria-invalid={!!errors.message}
                        />
                      </div>
                      {errors.message && (
                        <p className="text-[11px] text-rose-500 font-medium">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Request a Consultation</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ConsultationModal
