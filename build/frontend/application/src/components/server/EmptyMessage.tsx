import { ReactElement, ReactNode } from 'react'
import Icon from './Icon'

export default function EmptyMessage ({ children, icon, data, message }: { children: ReactNode, icon: string, data: unknown, message: ReactNode }): ReactElement {
  if (data === null || data === undefined || (Array.isArray(data) && data.length === 0)) {
    return <>
      {message}
      <Icon iconName={icon} className={'empty-icon'} />
    </>
  }
  return <>{ children }</>
}
