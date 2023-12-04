'use client'
import { ReactElement, ReactNode, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useMatomo } from './context/MatomoContext'

export default function ClientMatomoTracker ({ children }: { children: ReactNode }): ReactElement {
  const tracker = useMatomo()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    tracker.trackPageView()
  }, [pathname, searchParams])
  return <>
    {children}
  </>
}
