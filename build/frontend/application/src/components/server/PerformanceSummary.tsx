import { ReactElement } from 'react'
import { PerformanceSummaryFragment } from '../../graphql/generated/types'
import ProgramItemLink from './ProgramItemLink'

export default function PerformanceSummary ({ performance, showId }: {
  performance: PerformanceSummaryFragment
  showId: string
}): ReactElement {
  return <ProgramItemLink item={performance} showId={showId} className={'stretched-link'}>
    {performance.title}
  </ProgramItemLink>
}
