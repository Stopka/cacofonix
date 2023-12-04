import { ReactElement, ReactNode } from 'react'
import { Metadata } from 'next'
import Header from '../../components/server/Header'

export const metadata: Metadata = {
  title: 'Cacofonix',
  icons: '/harp.svg'
}
export default function HomeLayout ({ children }: {
  children: ReactNode
}): ReactElement {
  return <>
    <Header />
    <main className={'container'}>
      {children}
    </main>
  </>
}
