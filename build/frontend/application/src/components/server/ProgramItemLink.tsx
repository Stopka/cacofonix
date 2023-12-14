import { ReactElement, ReactNode } from 'react'
import { Setting_Now } from '../../graphql/generated/types'
import Link from 'next/link'

const resolveLink = (item?: Setting_Now | null, showId?: string | null): string => {
  if (item === null || undefined === item || showId === null || showId === undefined) {
    return ''
  }
  switch (item?.__typename) {
    case 'Song':
      return `/${showId}/song/${item.id ?? ''}`
    case 'Performance':
      return `/${showId}/performance/${item.id}` ?? ''
    default:
      return ''
  }
}

export default function ProgramItemLink ({ item, children, showId, className, alwaysShowLink }: {
  item?: Setting_Now | null
  children: ReactNode
  showId?: string | null
  className?: string
  alwaysShowLink?: boolean
}): ReactElement {
  const link = resolveLink(item, showId)
  if (link === '' && alwaysShowLink !== true) {
    return <></>
  }
  return <Link className={className} href={link}>
    {children}
  </Link>
}
