import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { cn } from '@/utils/cn'
import { useConsultationModal } from '@/context/ConsultationModalContext'

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
]

export const Navbar: React.FC = () => {
  const { openModal } = useConsultationModal()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu whenever the active route or hash changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  // Handle subtle shadow enhancement on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b',
        scrolled ? 'shadow-md shadow-slate-900/5 border-slate-200' : 'border-slate-200/80',
      )}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-lg p-1"
            aria-label="RagReon Tech Home"
          >
            <img
              src="/logos/ragreon-logo-clean.png"
              alt="RagReon Tech Logo"
              className="h-10 sm:h-11 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#0B132B] flex items-center gap-1 leading-tight">
                RagReon <span className="text-[#0066FF]">Tech</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 mt-0.5">
                Innovate. Build. Elevate.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150',
                    isActive
                      ? 'text-[#0066FF] font-semibold bg-blue-50/70'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0066FF] rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => openModal()}
              variant="primary"
              size="md"
              className="rounded-full px-5 shadow-sm shadow-blue-500/20"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 z-40 md:hidden bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        >
          <div
            className="w-full bg-white border-b border-slate-200 px-6 py-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors',
                      isActive
                        ? 'bg-blue-50 text-[#0066FF] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900',
                    )
                  }
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}
            </nav>

            <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-3">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openModal()
                }}
                variant="primary"
                size="lg"
                fullWidth
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Let's Talk
              </Button>
              <div className="text-center text-xs text-slate-500 pt-1">
                ragreontechofficial@gmail.com
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
