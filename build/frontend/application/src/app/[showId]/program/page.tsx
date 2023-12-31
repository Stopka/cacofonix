import { ReactElement } from 'react'
import createGraphqlServerClient from '../../../graphql/client/createGraphqlServerClient'
import { ShowProgramDocument } from '../../../graphql/generated/types'
import ShowParamsInterface from '../ShowParamsInterface'
import { ParamsType } from '../ParamsType'
import handleError from '../../../graphql/handleError'
import ShowProgramList from '../../../components/server/ShowProgramList'
import { Metadata } from 'next'
import prepareMetadataTitle from '../../../utils/prepareMetadataTitle'
import EmptyMessage from '../../../components/server/EmptyMessage'

export const metadata: Metadata = {
  title: prepareMetadataTitle('Program')
}

export default async function ProgramPage ({ params }: ParamsType<ShowParamsInterface>): Promise<ReactElement> {
  const { showId } = params
  const graphql = createGraphqlServerClient()
  try {
    const { data } = await graphql.query({
      query: ShowProgramDocument,
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
      <h1>Program</h1>
      <EmptyMessage icon={'event_note'} data={data?.Show?.program} message={<p>Program je prázdný</p>}>
        <ShowProgramList program = {data?.Show?.program} showId={showId} />
      </EmptyMessage>
    </>
  } catch (e) {
    return handleError(e)
  }
}
