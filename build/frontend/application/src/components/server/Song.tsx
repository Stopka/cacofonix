import { SongFragment } from '../../graphql/generated/types'
import { ReactElement } from 'react'
import ArtistsSummary from './ArtistsSummary'
import Content from './Content'
import H from './H'
import CountrySummary from './CountrySummary'

export default function Song ({ song, shiftHLevel }: { song?: SongFragment | null, shiftHLevel?: boolean }): ReactElement {
  if (song === null || song === undefined) {
    return <></>
  }
  return <>
    <H level={1} shiftLevel={shiftHLevel}>{song.title}</H>
    {(song.country ?? '').length > 0 ||
    (song?.artists?.length ?? 0) > 0 ||
    (song?.musicAuthors?.length ?? 0) > 0 ||
    (song?.lyricsAuthors?.length ?? 0) > 0
      ? <ul className={'list-group mb-3'}>
        <CountrySummary country={song.country}/>
        <ArtistsSummary header={'Umělci'} icon={'person'} artists={song.artists} key={'artist'}/>
        <ArtistsSummary header={'Skladatelé'} icon={'music_note'} artists={song.musicAuthors} key={'music'}/>
        <ArtistsSummary header={'Textaři'} icon={'lyrics'} artists={song.lyricsAuthors} key={'lyrics'}/>
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
