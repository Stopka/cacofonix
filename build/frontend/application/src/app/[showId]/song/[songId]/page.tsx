import { ReactElement } from 'react'
import createGraphqlServerClient from '../../../../graphql/client/createGraphqlServerClient'
import { SongDocument } from '../../../../graphql/generated/types'
import { ParamsType } from '../../ParamsType'
import SongParamsInterface from './SongParamsInterface'
import ShowParamsInterface from '../../ShowParamsInterface'
import handleError from '../../../../graphql/handleError'
import Song from '../../../../components/server/Song'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Píseň | Cacofonix'
}

export default async function SongPage ({ params }: ParamsType<SongParamsInterface & ShowParamsInterface>): Promise<ReactElement> {
  const { songId } = params

  const graphql = createGraphqlServerClient()
  try {
    const { data } = await graphql.query({
      query: SongDocument,
      variables: {
        songId
      }
    })
    return <Song song={data.Song}/>
  } catch (e) {
    return handleError(e)
  }
}
