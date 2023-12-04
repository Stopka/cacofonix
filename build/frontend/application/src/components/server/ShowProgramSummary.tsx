import { ReactElement } from 'react'
import { Show_Program } from '../../graphql/generated/types'
import SongSummary from './SongSummary'
import PerformanceSummary from './PerformanceSummary'

export default function ShowProgramSummary ({ item, showId }: {
  item?: Show_Program | null
  showId: string
}): ReactElement {
  switch (item?.__typename) {
    case 'Song':
      return <SongSummary song={item} showId={showId}/>
    case 'Performance':
      return <PerformanceSummary performance={item} showId={showId}/>
    default:
      return <></>
  }
}
