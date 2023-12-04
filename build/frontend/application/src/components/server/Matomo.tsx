import { ReactElement, ReactNode } from 'react'
import createConfig from '../../config/createConfig'
import ClientMatomoTracker from '../client/ClientMatomoTracker'
import { MatomoProvider } from '../client/context/MatomoContext'

export default function Matomo ({ children }: { children: ReactNode }): ReactElement {
  return <MatomoProvider config={createConfig().get('client.matomo')}>
    <ClientMatomoTracker>{children}</ClientMatomoTracker>
  </MatomoProvider>
}
