import { ReactElement } from 'react'
import { ArtistSummaryFragment } from '../../graphql/generated/types'

export default function ArtistSummary ({ artist }: { artist: ArtistSummaryFragment }): ReactElement {
  return <li className={'list-inline-item '} key={artist.id}>{artist.title}</li>
}
