import { ReactElement, ReactNode } from 'react'
import '../styles/global.scss'
import Footer from '../components/server/Footer'
import Matomo from '../components/server/Matomo'
import { Metadata } from 'next'
import prepareMetadataTitle from '../utils/prepareMetadataTitle'

export const metadata: Metadata = {
  title: prepareMetadataTitle(),
  icons: '/harp.svg'
}

export default function RootLayout ({ children }: {
  children: ReactNode
}): ReactElement {
  return <html lang={'cs'}>
  <body>
  <Matomo>
    {children}
    <Footer/>
  </Matomo>
  </body>
  </html>
}
