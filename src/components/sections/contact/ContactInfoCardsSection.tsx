import React from 'react'
import { Phone, Mail, Laptop, Share2 } from 'lucide-react'
import {
  InstagramIcon,
  YoutubeIcon,
  LinkedInIcon,
  GitHubIcon,
} from '@/components/common/SocialIcons'
import { companyData, socialLinks } from '@/data/company'

export const ContactInfoCardsSection: React.FC = () => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 mb-10 sm:mb-14">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <div className="text-xs font-bold text-slate-500 tracking-wide">
                Phone
              </div>
              <a
                href={`tel:${companyData.phone}`}
                className="block text-sm sm:text-base font-bold text-slate-900 hover:text-[#0066FF] transition-colors truncate"
              >
                {companyData.phoneDisplay}
              </a>
              <p className="text-[11px] text-slate-500 leading-tight">
                Monday – Saturday, 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <div className="text-xs font-bold text-slate-500 tracking-wide">
                Email
              </div>
              <a
                href={`mailto:${companyData.email}`}
                className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-[#0066FF] transition-colors break-all"
              >
                {companyData.email}
              </a>
              <p className="text-[11px] text-slate-500 leading-tight">
                We typically reply within 24 hours.
              </p>
            </div>
          </div>

          {/* Card 3: Work Mode */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
              <Laptop className="w-5 h-5" />
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <div className="text-xs font-bold text-slate-500 tracking-wide">
                Work Mode
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900">
                Remote &amp; Online
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Flexible and time-zone friendly.
              </p>
            </div>
          </div>

          {/* Card 4: Follow Us */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 min-w-0 flex-1">
              <div className="text-xs font-bold text-slate-500 tracking-wide">
                Follow Us
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                {/* 1. Official Instagram Link */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit RagReon Tech on Instagram"
                  title="Visit RagReon Tech on Instagram"
                  className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500/40"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                {/* 2. Official YouTube Channel Link */}
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit RagReon Tech on YouTube"
                  title="Visit RagReon Tech on YouTube"
                  className="w-8 h-8 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/40"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>

                {/* 3. Official LinkedIn Company Page */}
                {socialLinks.linkedin ? (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit RagReon Tech on LinkedIn"
                    title="Visit RagReon Tech on LinkedIn"
                    className="w-8 h-8 rounded-xl bg-blue-50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/40"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                ) : (
                  <span
                    title="LinkedIn profile URL coming soon"
                    aria-label="LinkedIn profile placeholder"
                    className="w-8 h-8 rounded-xl bg-slate-100 text-slate-400 border border-slate-200/80 flex items-center justify-center cursor-not-allowed opacity-60"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </span>
                )}

                {/* 4. Official GitHub Organization */}
                {socialLinks.github ? (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit RagReon Tech on GitHub"
                    title="Visit RagReon Tech on GitHub"
                    className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 hover:bg-[#0B132B] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-500/40"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                ) : (
                  <span
                    title="GitHub profile URL coming soon"
                    aria-label="GitHub profile placeholder"
                    className="w-8 h-8 rounded-xl bg-slate-100 text-slate-400 border border-slate-200/80 flex items-center justify-center cursor-not-allowed opacity-60"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Connect on official channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfoCardsSection
