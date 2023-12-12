import { ReactElement, ReactNode } from 'react'

export default function Badge ({ children, className, title }: { children: ReactNode, className?: string, title?: string }): ReactElement {
  return <span className={`badge bg-secondary ${className ?? ''}`} title={title}>
    {children}
  </span>
}
