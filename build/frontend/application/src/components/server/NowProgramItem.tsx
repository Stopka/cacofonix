import { ReactElement } from 'react'
import Song from './Song'
import { Setting_Now } from '../../graphql/generated/types'
import Performance from './Performance'

export default function NowProgramItem ({ item }: { item?: Setting_Now | null }): ReactElement {
  if (item === null || undefined === item) {
    return <></>
  }
  switch (item?.__typename) {
    case 'Song':
      return <Song song={item} shiftHLevel={true} />
    case 'Performance':
      return <Performance performance={item} shiftHLevel={true}/>
    default:
      return <></>
  }
}
