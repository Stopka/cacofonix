'use client'
import { ReactElement } from 'react'
import Icon from '../server/Icon'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export default function NavigationLink ({ iconName, label, href }: { iconName: string, label: string, href: string }): ReactElement {
  const params = useParams()
  const pathname = usePathname()
  Object.keys(params).forEach(key => {
    const value = params[key]
    if (typeof value !== 'string') {
      return
    }
    href = href.replaceAll(`%${key}%`, value)
  })
  const isCurrent = pathname === href
  return <Link href={href} className={'nav-link ' + (isCurrent ? 'active' : '')}
                 aria-current={isCurrent ? 'page' : undefined}>
        <Icon iconName={iconName}/>
        <span className={'ms-1'}>{label}</span>
    </Link>
}
