'use client'

import { useEffect } from 'react'

export function PageTracker() {
  useEffect(() => {
    // Don't track in development
    if (process.env.NODE_ENV === 'development') return

    const track = async () => {
      try {
        await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page: window.location.pathname,
            referer: document.referrer || null,
          }),
        })
      } catch {
        // Silently fail - tracking should never break the site
      }
    }

    // Small delay to not block initial page render
    const timer = setTimeout(track, 1000)
    return () => clearTimeout(timer)
  }, [])

  return null
}
