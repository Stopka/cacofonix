import { ReactElement } from 'react'
import { SongSummaryFragment } from '../../graphql/generated/types'
import Link from 'next/link'
import Icon from './Icon'
import Badge from './Badge'
import getFlagEmoji from '../../utils/getFlagEmoji'

export default function SongSummary ({ song, showId }: {
  song: SongSummaryFragment
  showId: string
}): ReactElement {
  return <>
    <Link className={'stretched-link'} href={`/${showId}/song/${song.id ?? ''}`}>
      {song.title}

      {typeof song.country === 'string'
        ? <Badge className={'bg-secondary ms-2'} title={song.country}>{getFlagEmoji(song.country)}</Badge>
        : ''}
      <Badge className={'bg-secondary ms-2'} title={'Píseň'}><Icon iconName={'music_note'}/></Badge>
    </Link>
  </>
}
