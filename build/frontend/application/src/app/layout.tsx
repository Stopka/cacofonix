import { ReactElement, ReactNode } from 'react'
import '../styles/global.scss'
import Footer from '../components/server/Footer'
import Matomo from '../components/server/Matomo'

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
