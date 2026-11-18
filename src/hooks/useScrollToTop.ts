import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Handles window scrolling on route and hash changes.
 * When navigating with a hash (e.g. /contact#contact-form), scrolls smoothly
 * to the matching element while accounting for sticky navbar offsets.
 * Otherwise, scrolls instantly to the top of the page.
 */
export function useScrollToTop(): void {
  const { pathname, hash } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace(/^#/, '')

      const scrollToElement = () => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          return true
        }
        return false
      }

      // If switching routes, jump to top first so the page mounts cleanly,
      // then smoothly scroll down to the targeted element.
      if (prevPathname.current !== pathname) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        })
      }

      // Allow React component mount and browser paint to complete
      const timer = setTimeout(() => {
        if (!scrollToElement()) {
          // Retry briefly if layout took extra time
          const retryTimer = setTimeout(scrollToElement, 150)
          return () => clearTimeout(retryTimer)
        }
      }, 100)

      prevPathname.current = pathname
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant', // Instant prevents layout shift jank
      })
      prevPathname.current = pathname
    }
  }, [pathname, hash])
}
