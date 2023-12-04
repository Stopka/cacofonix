import { ReactElement, ReactNode } from 'react'
type HLevel = 1 | 2 | 3 | 4 | 5 | 6
export default function H ({ level, shiftLevel, className, children }: { level: HLevel, shiftLevel?: boolean, className?: string, children: ReactNode }): ReactElement {
  const realLevel = level + (shiftLevel === true ? 1 : 0)
  switch (realLevel) {
    case 1:
      return <h1 className={className}>{children}</h1>
    case 2:
      return <h2 className={className}>{children}</h2>
    case 3:
      return <h3 className={className}>{children}</h3>
    case 4:
      return <h4 className={className}>{children}</h4>
    case 5:
      return <h5 className={className}>{children}</h5>
    default:
      return <h6 className={className}>{children}</h6>
  }
}
