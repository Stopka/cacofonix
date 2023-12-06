import { ReactElement, ReactNode } from 'react'
import Header from '../../components/server/Header'

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
