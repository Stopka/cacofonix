'use client'
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react'
import Icon from '../server/Icon'

export default function NavigationToggler ({ children }: { children: ReactNode }): ReactElement {
  const [isOpen, setOpen] = useState<boolean>(false)
  const btnRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const onClickOutside = (event): void => {
      if (btnRef?.current?.contains(event.target) === false) {
        setOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', onClickOutside)
    } else {
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [isOpen])
  return <>
        <button ref={btnRef} aria-controls="basic-navbar-nav" type="button" aria-label="Přepínač navigace"
                className={'navbar-toggler ' + (isOpen ? '' : 'collapsed')} onClick={() => setOpen(!isOpen)}>
            <Icon iconName={isOpen ? 'menu_open' : 'menu'} />
        </button>
        <div className={'navbar-collapse collapse' + (isOpen ? ' show' : '')} id="basic-navbar-nav">
            <div className="navbar-nav me-auto nav">
                {children}
            </div>
        </div>
    </>
}
