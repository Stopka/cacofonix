'use client'
import MatomoTracker from '@datapunt/matomo-tracker-js'
import React, { ReactElement, ReactNode, useContext, useMemo } from 'react'
import MatomoConfig from '../../../config/MatomoConfig'
import { UserOptions } from '@datapunt/matomo-tracker-js/es/types'

const MatomoContext = React.createContext<MatomoTracker | undefined>(undefined)

export const MatomoProvider = ({ children, config }: { children: ReactNode, config: MatomoConfig }): ReactElement => {
  const matomo = useMemo<MatomoTracker>(() => {
    const userOptions: UserOptions = {
      urlBase: config.url === '' ? '/' : config.url,
      siteId: config.siteId <= 0 ? 1 : config.siteId,
      disabled: config.url === '' || config.siteId === 0
    }
    console.info('Starting Matomo', userOptions)
    return new MatomoTracker(userOptions)
  }, [])
  return (
    <MatomoContext.Provider value={matomo}>
      {children}
    </MatomoContext.Provider>
  )
}

export const useMatomo = (): MatomoTracker => {
  const matomo = useContext(MatomoContext)
  if (undefined === matomo) {
    throw new Error('Missing Matomo provider')
  }
  return matomo
}
