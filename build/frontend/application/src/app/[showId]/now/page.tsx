import { ReactElement } from 'react'
import createGraphqlServerClient from '../../../graphql/client/createGraphqlServerClient'
import { NowSettingDocument } from '../../../graphql/generated/types'
import handleError from '../../../graphql/handleError'
import NowProgramItem from '../../../components/server/NowProgramItem'
import NowRefresher from '../../../components/client/NowRefresher'
import { Metadata } from 'next'
import prepareMetadataTitle from '../../../utils/prepareMetadataTitle'

export const metadata: Metadata = {
  title: prepareMetadataTitle('Právě hrajem')
}

export default async function NowPage (): Promise<ReactElement> {
  const graphql = createGraphqlServerClient()
  try {
    const { data } = await graphql.query({
      query: NowSettingDocument,
      variables: {},
      context: {
        fetchOptions: {
          next: { revalidate: 0.1 }
        }
      }
    })
    return <>
      <h1>Právě hrajem</h1>
      <NowRefresher item={data?.Setting?.now?.value ?? undefined}/>
      <NowProgramItem item={data?.Setting?.now?.value}/>
    </>
  } catch (e) {
    return handleError(e)
  }
}
