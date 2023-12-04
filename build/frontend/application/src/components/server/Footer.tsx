import { ReactElement } from 'react'

export default function Footer (): ReactElement {
  return <footer>
    <div className={'container mt-5'}>
    &copy;{(new Date()).getFullYear()} <a href={'https://skorpil.cz'}>Štěpán Škorpil</a>
    </div>
  </footer>
}
