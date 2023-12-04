'use client'
import { createContext, ReactElement, ReactNode, useContext } from 'react'
import { NowSettingDocument, Setting_Now } from '../../../graphql/generated/types'
import { useQuery } from '@apollo/client'

export interface NowSettingsContextValue { now: Setting_Now | undefined, loading: boolean }

const NowSettingsContext = createContext<NowSettingsContextValue>({ now: undefined, loading: false })

export function NowSettingsProvider ({ children }: { children: ReactNode }): ReactElement {
  const { loading, error, data } = useQuery(NowSettingDocument, {
    pollInterval: 5000,
    fetchPolicy: 'no-cache'
  })
  if (error !== undefined) {
    console.error('Could not load current program item', error)
  }
  return <NowSettingsContext.Provider
    value={{
      now: data?.Setting?.now?.value ?? undefined,
      loading
    }}>
    {children}
    </NowSettingsContext.Provider>
}

export const useNowSettings = (): NowSettingsContextValue => {
  return useContext(NowSettingsContext)
}
