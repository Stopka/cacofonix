import { ReactElement } from 'react'
import { SongSummaryFragment } from '../../graphql/generated/types'
import Icon from './Icon'
import Badge from './Badge'
import getFlagEmoji from '../../utils/getFlagEmoji'
import ProgramItemLink from './ProgramItemLink'

export default function SongSummary ({ song, showId }: {
  song: SongSummaryFragment
  showId: string
}): ReactElement {
  return <>
    <ProgramItemLink item={song} showId={showId} className={'stretched-link'}>
      {song.title}

      {(song?.countries?.length ?? 0) > 0
        ? <Badge className={'bg-secondary ms-2 emoji'} title={song.countries?.join(', ')}>
          {song.countries?.map(country => getFlagEmoji(country)).join(' ')}
        </Badge>
        : ''}
      <Badge className={'bg-secondary ms-2'} title={'Píseň'}><Icon iconName={'music_note'}/></Badge>
    </ProgramItemLink>
  </>
}
