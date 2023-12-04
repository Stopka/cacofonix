import { ReactElement } from 'react'
import {
  Song_Artists_Relationship,
  Song_LyricsAuthors_Relationship,
  Song_MusicAuthors_Relationship
} from '../../graphql/generated/types'
import ArtistSummary from './ArtistSummary'
import Icon from './Icon'

export default function ArtistsSummary ({ header, artists, icon }: {
  header: string
  icon: string
  artists?: Song_Artists_Relationship[] | Song_MusicAuthors_Relationship[] | Song_LyricsAuthors_Relationship[] | null
}): ReactElement {
  if (artists === null || artists === undefined || artists.length === 0) {
    return <></>
  }
  return <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold d-inline-block me-3">
        <Icon iconName={icon} className={'d-md-none'}/>
        <span className={'d-none d-md-inline'}>{header}</span>
      </div>
      <ul className="card-text list-inline d-inline">
        {artists.map((artist) => <ArtistSummary artist={artist.value} key={artist.id}/>)}
      </ul>
    </div>
  </li>
}
