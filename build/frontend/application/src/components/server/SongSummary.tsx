import { ReactElement } from 'react'
import { SongSummaryFragment } from '../../graphql/generated/types'
import Link from 'next/link'
import Icon from './Icon'
import Badge from './Badge'

export default function SongSummary ({ song, showId }: {
  song: SongSummaryFragment
  showId: string
}): ReactElement {
  return <>
    <Link className={'stretched-link'} href={`/${showId}/song/${song.id ?? ''}`}>
      {song.title}

      <Badge className={'bg-secondary ms-2'}><Icon iconName={'music_note'}/></Badge>
    </Link>
  </>
}
