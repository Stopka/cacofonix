import { ReactElement } from 'react'
import { PerformanceSummaryFragment } from '../../graphql/generated/types'
import Link from 'next/link'

export default function PerformanceSummary ({ performance, showId }: {
  performance: PerformanceSummaryFragment
  showId: string
}): ReactElement {
  return <Link className={'stretched-link'} href={`/${showId}/performance/${performance.id ?? ''}`}>
    {performance.title}
  </Link>
}
