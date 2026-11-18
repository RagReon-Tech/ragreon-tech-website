import React, { useEffect } from 'react'
import { ContactHeroSection } from '@/components/sections/contact/ContactHeroSection'
import { ContactInfoCardsSection } from '@/components/sections/contact/ContactInfoCardsSection'
import { ContactFormSection } from '@/components/sections/contact/ContactFormSection'
import { ContactBottomCTASection } from '@/components/sections/contact/ContactBottomCTASection'

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title =
      'Contact Us | RagReon Tech - Software, AI & Automation'
  }, [])

  return (
    <div className="flex flex-col bg-[#F8FAFC]">
      {/* 1. Hero Section (Navy/Blue Technology Workspace & Heading) */}
      <ContactHeroSection />

      {/* 2. Contact Information Cards (Phone, Email, Work Mode, Follow Us) */}
      <ContactInfoCardsSection />

      {/* 3. Main Form Section & How We Work (Two-Column Layout) */}
      <ContactFormSection />

      {/* 4. Bottom Call To Action ("Have a Project in Mind?") */}
      <ContactBottomCTASection />
    </div>
  )
}

export default ContactPage
