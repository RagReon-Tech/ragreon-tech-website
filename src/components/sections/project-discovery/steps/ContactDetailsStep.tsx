import React from 'react'
import { User, Mail, Phone, Building } from 'lucide-react'
import { cn } from '@/utils/cn'
import type { ContactDetailsData } from '@/types/projectDiscovery.types'

interface ContactDetailsStepProps {
  contact: ContactDetailsData
  errors?: Record<string, string>
  onChange: (contact: ContactDetailsData) => void
}

export const ContactDetailsStep: React.FC<ContactDetailsStepProps> = ({
  contact,
  errors = {},
  onChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    onChange({
      ...contact,
      [name]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
          How Can We Reach You?
        </h2>
        <p className="text-sm sm:text-base text-slate-500">
          Share your contact details so we can follow up about your project.
        </p>
      </div>

      <div className="space-y-4 pt-2">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-fullName"
            className="block text-xs sm:text-sm font-semibold text-slate-800"
          >
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              id="contact-fullName"
              name="fullName"
              type="text"
              value={contact.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={cn(
                'w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-all duration-150 bg-white text-slate-900',
                errors.fullName
                  ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                  : 'border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100',
              )}
            />
          </div>
          {errors.fullName && (
            <p className="text-xs text-rose-500 font-medium">{errors.fullName}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-email"
            className="block text-xs sm:text-sm font-semibold text-slate-800"
          >
            Email Address <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={contact.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className={cn(
                'w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-all duration-150 bg-white text-slate-900',
                errors.email
                  ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                  : 'border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100',
              )}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-rose-500 font-medium">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-phone"
            className="block text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-between"
          >
            <span>Phone Number</span>
            <span className="text-xs text-slate-400 font-normal">Optional</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={contact.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number (with country code)"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all duration-150 bg-white text-slate-900"
            />
          </div>
        </div>

        {/* Company or Organization */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-company"
            className="block text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-between"
          >
            <span>Company or Organization</span>
            <span className="text-xs text-slate-400 font-normal">Optional</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Building className="w-4 h-4" />
            </div>
            <input
              id="contact-company"
              name="company"
              type="text"
              value={contact.company}
              onChange={handleInputChange}
              placeholder="Enter your company or organization name"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all duration-150 bg-white text-slate-900"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
