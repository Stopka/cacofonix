import { ReactElement } from 'react'
import createGraphqlServerClient from '../../../../graphql/client/createGraphqlServerClient'
import { SongDocument } from '../../../../graphql/generated/types'
import { ParamsType } from '../../ParamsType'
import SongParamsInterface from './SongParamsInterface'
import ShowParamsInterface from '../../ShowParamsInterface'
import handleError from '../../../../graphql/handleError'
import Song from '../../../../components/server/Song'
import { Metadata } from 'next'
import prepareMetadataTitle from '../../../../utils/prepareMetadataTitle'
import ProgramPaginator from '../../../../components/server/ProgramPaginator'

export const metadata: Metadata = {
  title: prepareMetadataTitle('Píseň')
}

export default async function SongPage ({ params }: ParamsType<SongParamsInterface & ShowParamsInterface>): Promise<ReactElement> {
  const { songId, showId } = params

  const graphql = createGraphqlServerClient()
  try {
    const { data } = await graphql.query({
      query: SongDocument,
      variables: {
        songId,
        showId
      },
      context: {
        fetchOptions: {
          next: { revalidate: 5 }
        }
      }
    })
    return <>
      <Song song={data.Song}/>
      <ProgramPaginator item={data?.Song} program={data?.Show?.program} showId={showId}/>
    </>
  } catch (e) {
    return handleError(e)
  }
}
