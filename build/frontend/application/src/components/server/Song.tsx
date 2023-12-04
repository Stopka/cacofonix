import { SongFragment } from '../../graphql/generated/types'
import { ReactElement } from 'react'
import ArtistsSummary from './ArtistsSummary'
import Content from './Content'
import H from './H'

export default function Song ({ song, shiftHLevel }: { song?: SongFragment | null, shiftHLevel?: boolean }): ReactElement {
  if (song === null || song === undefined) {
    return <></>
  }
  return <>
    <H level={1} shiftLevel={shiftHLevel}>{song.title}</H>
    {(song?.artists?.length ?? 0) > 0 || (song?.musicAuthors?.length ?? 0) > 0 || (song?.lyricsAuthors?.length ?? 0) > 0
      ? <ul className={'list-group mb-3'}>
        <ArtistsSummary header={'Umělci'} icon={'person'} artists={song.artists}/>
        <ArtistsSummary header={'Skladatelé'} icon={'music_note'} artists={song.musicAuthors}/>
        <ArtistsSummary header={'Textaři'} icon={'lyrics'} artists={song.lyricsAuthors}/>
      </ul>
      : ''}
    <Content content={song.description}/>

    {song.lyrics !== null && song.lyrics !== undefined
      ? <>
        <H level={2} shiftLevel={shiftHLevel} className={'clearfix'}>Text</H>
        <Content content={song.lyrics}/>
      </>
      : ''}
  </>
}
