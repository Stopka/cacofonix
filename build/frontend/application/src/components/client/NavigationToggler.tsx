'use client'
import { ReactElement, ReactNode, useState } from 'react'
import Icon from '../server/Icon'

export default function NavigationToggler ({ children }: { children: ReactNode }): ReactElement {
  const [isOpen, setOpen] = useState<boolean>(false)
  return <>
        <button aria-controls="basic-navbar-nav" type="button" aria-label="Přepínač navigace"
                className={'navbar-toggler ' + (isOpen ? '' : 'collapsed')} onClick={() => setOpen(!isOpen)}>
            <Icon iconName={isOpen ? 'menu_open' : 'menu'} />
        </button>
        <div className={'navbar-collapse collapse' + (isOpen ? 'show' : '')} id="basic-navbar-nav">
            <div className="navbar-nav me-auto nav">
                {children}
            </div>
        </div>
    </>
}
