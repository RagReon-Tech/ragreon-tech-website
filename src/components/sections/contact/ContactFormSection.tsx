import React, { useState } from 'react'
import {
  User,
  Mail,
  Phone,
  Layers,
  FileText,
  Send,
  Globe2,
  Video,
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Copy,
  MessageCircle,
} from 'lucide-react'
import {
  submitContactEnquiry,
  generateMailtoUrl,
  generateWhatsAppUrl,
} from '@/services/contactService'
import type {
  ContactFormData,
  ContactFormErrors,
  SubmissionStatus,
  SubmissionResponse,
} from '@/types/contact.types'
import { socialLinks } from '@/data/company'

const serviceOptions = [
  'Data Analytics & Business Intelligence',
  'Data Science',
  'AI & Machine Learning',
  'Web Development',
  'Python Development & Automation',
  'IoT & Embedded Systems',
  'Deep Learning & Computer Vision',
  'Other / Custom Technology',
]

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: 'Project Inquiry',
    message: '',
  })

  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [submissionResult, setSubmissionResult] =
    useState<SubmissionResponse | null>(null)
  const [copied, setCopied] = useState(false)

  const maxMessageLength = 500

  // Validate required fields
  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {}

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
      newErrors.service = 'Please select a required service.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Your message is required.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.'
    } else if (formData.message.length > maxMessageLength) {
      newErrors.message = `Message cannot exceed ${maxMessageLength} characters.`
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

    if (name === 'message' && value.length > maxMessageLength) {
      // Prevent exceeding character limit
      setFormData((prev) => ({ ...prev, [name]: value.slice(0, maxMessageLength) }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear field-specific validation error on change
    if (errors[name as keyof ContactFormErrors]) {
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
      const result = await submitContactEnquiry(formData)
      setSubmissionResult(result)

      if (result.success) {
        setStatus(result.isLiveSubmission ? 'success' : 'demo_mode')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
      setSubmissionResult({
        success: false,
        isLiveSubmission: false,
        message: 'Unexpected network error.',
      })
    }
  }

  const handleCopySummary = () => {
    const summary = [
      `From: ${formData.name} <${formData.email}>`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Service: ${formData.service || 'None specified'}`,
      `Message:`,
      formData.message,
    ].join('\n')

    navigator.clipboard.writeText(summary)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section
      id="contact-form"
      className="scroll-mt-20 sm:scroll-mt-24 py-10 sm:py-16 bg-[#F8FAFC]"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ======================================================== */}
          {/* LEFT COLUMN: Project Inquiry Form Card */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm relative overflow-hidden">
            {/* Form Section Header with Envelope Icon */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Send Us a Project Inquiry
                </h2>
                <p className="text-sm text-slate-500">
                  Fill in the details below and we&apos;ll get back to you soon.
                </p>
              </div>
            </div>

            {/* Submission Feedback Banners */}
            {status === 'success' && (
              <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2.5 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Inquiry Sent Successfully!</span>
                </div>
                <p className="text-xs text-emerald-700">
                  {submissionResult?.message ||
                    'Thank you for reaching out. We will respond within 24 hours.'}
                </p>
              </div>
            )}

            {status === 'demo_mode' && (
              <div className="mb-6 p-5 rounded-2xl bg-blue-50 border border-blue-200 text-slate-800 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2.5 font-bold text-sm text-[#0066FF]">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                  <span>Inquiry Validated — Direct Channels Ready</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your inquiry has passed all validation checks. Since a production
                  email endpoint is not currently attached, you can dispatch it
                  immediately via your favorite communication client:
                </p>

                <div className="flex flex-wrap gap-2.5 pt-1">
                  <a
                    href={generateMailtoUrl(formData)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0066FF] text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </a>

                  <a
                    href={generateWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                  </button>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-1">
                <div className="flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                  <span>Submission Error</span>
                </div>
                <p>{submissionResult?.message || 'Please try again later.'}</p>
              </div>
            )}

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Row 1: Full Name and Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-slate-700"
                  >
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-transparent rounded-xl outline-none placeholder:text-slate-400"
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
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold text-slate-700"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-transparent rounded-xl outline-none placeholder:text-slate-400"
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
              </div>

              {/* Row 2: Phone Number (Optional) and Service Required */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold text-slate-700"
                  >
                    Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone || ''}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-transparent rounded-xl outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-bold text-slate-700"
                  >
                    Service Required <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-10 pr-8 py-3 text-sm text-slate-900 bg-transparent rounded-xl outline-none appearance-none cursor-pointer"
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
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
                      ▼
                    </div>
                  </div>
                  {errors.service && (
                    <p className="text-[11px] text-rose-500 font-medium">
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Your Message (Full Width) */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-700"
                  >
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-slate-400">
                    {formData.message.length}/{maxMessageLength}
                  </span>
                </div>
                <div className="relative rounded-xl border border-slate-200 bg-white focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    maxLength={maxMessageLength}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and requirements..."
                    className="w-full pl-10 pr-4 py-3 text-sm text-slate-900 bg-transparent rounded-xl outline-none resize-y placeholder:text-slate-400"
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

              {/* Submit Button & Security Message */}
              <div className="pt-2 space-y-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  <span>
                    {status === 'submitting'
                      ? 'Submitting...'
                      : 'Submit Inquiry'}
                  </span>
                </button>

                {/* Security Guarantee Message */}
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Your information is safe with us. We&apos;ll use it only to respond to your inquiry.
                  </span>
                </div>
              </div>
            </form>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: How We Work & Let's Connect */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1: How We Work (3 Cards strictly matching Reference Image 1) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#0EA5E9] text-xs font-bold tracking-widest uppercase">
                  <Layers className="w-4 h-4 text-[#0EA5E9]" />
                  <span>How We Work</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  How We Work
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  We are a freelance technology team working remotely to deliver
                  flexible, high-quality solutions to clients, wherever they are.
                </p>
              </div>

              {/* Exactly 3 Information Cards */}
              <div className="space-y-3 pt-1">
                {/* 1. Remote Collaboration */}
                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex items-start gap-3.5 hover:bg-white hover:shadow-2xs hover:border-blue-200 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900">
                      Remote Collaboration
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      We work with clients across India and worldwide.
                    </p>
                  </div>
                </div>

                {/* 2. Online Meetings */}
                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex items-start gap-3.5 hover:bg-white hover:shadow-2xs hover:border-blue-200 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Video className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900">
                      Online Meetings
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Discuss, plan, and track progress through online meetings.
                    </p>
                  </div>
                </div>

                {/* 3. Flexible Project Support */}
                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex items-start gap-3.5 hover:bg-white hover:shadow-2xs hover:border-blue-200 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900">
                      Flexible Project Support
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Tailored solutions with continuous communication and
                      post-delivery support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Let's Connect */}
            <div className="bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-8 space-y-2">
                  <div className="flex items-center gap-2 text-[#0EA5E9] text-xs font-bold tracking-widest uppercase">
                    <Users className="w-4 h-4 text-[#0EA5E9]" />
                    <span>Let&apos;s Connect</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Whether you have a question, need a consultation, or want
                    to collaborate, we&apos;re just a message away. We look forward
                    to working with you!
                  </p>
                </div>

                {/* 3D Chat Bubbles Illustration */}
                <div className="sm:col-span-4 flex justify-center sm:justify-end">
                  <img
                    src="/images/contact/chat-bubbles.png"
                    alt="Chat and collaboration speech bubbles"
                    className="w-24 sm:w-28 h-auto object-contain drop-shadow-md transform transition-transform hover:scale-105"
                  />
                </div>
              </div>

              {/* Direct Quick WhatsApp Action */}
              <div className="mt-4 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <span className="text-xs font-medium text-slate-500">
                  Need quick answers?
                </span>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold transition-all shadow-2xs hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
