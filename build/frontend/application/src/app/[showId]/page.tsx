import { ReactElement } from 'react'
import createGraphqlServerClient from '../../graphql/client/createGraphqlServerClient'
import { ShowDescriptionDocument } from '../../graphql/generated/types'
import Content from '../../components/server/Content'
import { ParamsType } from './ParamsType'
import ShowParamsInterface from './ShowParamsInterface'
import handleError from '../../graphql/handleError'
import { Metadata } from 'next'
import prepareMetadataTitle from '../../utils/prepareMetadataTitle'

export const metadata: Metadata = {
  title: prepareMetadataTitle('O koncertu')
}

export default async function ShowPage ({ params }: ParamsType<ShowParamsInterface>): Promise<ReactElement> {
  const { showId } = params
  const graphql = createGraphqlServerClient()
  try {
    const { data } = await graphql.query({
      query: ShowDescriptionDocument,
      variables: {
        showId
      },
      context: {
        fetchOptions: {
          next: { revalidate: 5 }
        }
      }
    })
    return <>
      <h1>{data?.Show?.title}</h1>
      <Content content={data?.Show?.description}/>
    </>
  } catch (e) {
    return handleError(e)
  }
}
