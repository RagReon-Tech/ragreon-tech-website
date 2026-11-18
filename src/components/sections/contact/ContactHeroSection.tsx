import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Send, PlayCircle, Terminal, Code2, Cpu } from 'lucide-react'
import { ContactHeroCarousel } from './ContactHeroCarousel'

export const ContactHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060B18] via-[#0B132B] to-[#0D1838] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800">
      {/* Background Decorative Tech Elements & Lighting */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      {/* Subtle background tech grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Eyebrow, Heading, Description, Buttons & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Cyan Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 text-[#0EA5E9] text-xs font-bold tracking-widest uppercase">
              <span className="w-8 h-0.5 bg-[#0EA5E9] rounded-full" />
              <span>CONTACT US</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.18]">
              Let&apos;s Build{' '}
              <span className="block">
                Something Amazing{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  Together.
                </span>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Have a project idea, need a technical solution, or want to
              collaborate? We&apos;d love to hear from you. Get in touch and let&apos;s
              turn your ideas into real-world solutions.
            </p>

            {/* Action Buttons: Start a Project & Explore Our Work */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to="/start-project"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Start a Project</span>
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-500 transition-all"
              >
                <PlayCircle className="w-4 h-4 text-cyan-400" />
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Technology Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-slate-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 font-mono">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Full-Stack &amp; APIs</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 font-mono">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>AI &amp; Data Science</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 font-mono">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>IoT &amp; Embedded</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Laptop Mockup & Interactive Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            {/* Tagline text on top right, exactly as shown in reference image */}
            <div className="absolute -top-6 sm:-top-8 right-2 sm:right-6 z-20 pointer-events-none select-none text-right">
              <span className="font-serif italic text-xl sm:text-2xl lg:text-3xl font-light text-slate-300/80 tracking-wide drop-shadow-md block">
                Innovate.
              </span>
              <span className="font-serif italic text-xl sm:text-2xl lg:text-3xl font-light text-blue-300/90 tracking-wide drop-shadow-md block -mt-1 sm:-mt-1.5 pl-3">
                Build.
              </span>
              <span className="font-serif italic text-xl sm:text-2xl lg:text-3xl font-light text-cyan-300/90 tracking-wide drop-shadow-md block -mt-1 sm:-mt-1.5 pl-6">
                Elevate.
              </span>
            </div>

            {/* Interactive 5-Slide Carousel */}
            <ContactHeroCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactHeroSection
