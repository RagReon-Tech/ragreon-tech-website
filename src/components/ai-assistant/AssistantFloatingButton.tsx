import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'

interface AssistantFloatingButtonProps {
  isOpen: boolean
  onClick: () => void
}

export const AssistantFloatingButton: React.FC<AssistantFloatingButtonProps> = ({
  isOpen,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Respect user's reduced-motion preferences
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)
      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 select-none pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]">
      {/* Tooltip: Chat with RagReon AI (visible on desktop hover when closed) */}
      <AnimatePresence>
        {!isOpen && isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 6, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B132B]/95 text-white text-xs font-semibold shadow-xl border border-blue-500/30 whitespace-nowrap backdrop-blur-sm z-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF] animate-pulse" />
            <span>Chat with RagReon AI</span>
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B132B] rotate-45 border-r border-t border-blue-500/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Animated Wrapper */}
      <motion.div
        animate={
          isOpen || prefersReducedMotion
            ? { y: 0 }
            : {
                y: [0, -5, 0],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
        }
        className="relative group"
      >
        {/* Subtle Outer Pulsing Wave (only when closed and reduced motion is false) */}
        {!isOpen && !prefersReducedMotion && (
          <>
            <motion.span
              className="absolute -inset-2 rounded-full border-2 border-[#0066FF] pointer-events-none"
              initial={{ scale: 0.95, opacity: 0.7 }}
              animate={{
                scale: [0.95, 1.25, 1.35],
                opacity: [0.7, 0.25, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            <span className="absolute -inset-1 rounded-full bg-blue-500/20 blur-md pointer-events-none group-hover:bg-blue-500/35 transition-all duration-300" />
          </>
        )}

        {/* Main Floating Button */}
        <motion.button
          type="button"
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="relative w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] rounded-full bg-white text-slate-800 flex items-center justify-center p-2.5 sm:p-3 shadow-[0_8px_30px_rgba(0,102,255,0.22)] hover:shadow-[0_12px_36px_rgba(0,102,255,0.38)] border-2 border-blue-500/25 hover:border-blue-500/50 transition-all duration-300 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-blue-500/30"
          aria-label={isOpen ? 'Close RagReon AI Assistant' : 'Chat with RagReon AI'}
          title="Chat with RagReon AI"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-slate-700 hover:text-rose-500 transition-colors duration-200" />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/logos/ragreon-icon.png"
                alt="RagReon AI"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
              />
              {/* Online Green Status Indicator Dot */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-emerald-500 border-2 border-white shadow-xs" />
              </span>
            </div>
          )}
        </motion.button>
      </motion.div>
    </div>
  )
}
