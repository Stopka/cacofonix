import { ReactElement, ReactNode } from 'react'

export default function Badge ({ children, className }: { children: ReactNode, className: string }): ReactElement {
  return <span className={`badge bg-secondary ${className}`} title={'Píseň'}>{children}</span>
}
