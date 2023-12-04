import { ReactElement, ReactNode } from 'react'
import { Container } from 'react-bootstrap'

export default function Header ({ children }: { children?: ReactNode }): ReactElement {
  return <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
    <Container>
      <a className="navbar-brand" href="/">
        <img src={'/harp.svg'} alt={'Cacofonix logo'} /> Cacofonix
      </a>
      {children}
    </Container>
  </nav>
}
