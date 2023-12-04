import { ReactElement } from 'react'
import createGraphqlServerClient from '../../../graphql/client/createGraphqlServerClient'
import { ShowProgramDocument } from '../../../graphql/generated/types'
import ShowParamsInterface from '../ShowParamsInterface'
import { ParamsType } from '../ParamsType'
import handleError from '../../../graphql/handleError'
import ShowProgramList from '../../../components/server/ShowProgramList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Program | Cacofonix'
}

export default async function ProgramPage ({ params }: ParamsType<ShowParamsInterface>): Promise<ReactElement> {
  const { showId } = params
  const graphql = createGraphqlServerClient()
  try {
    const { data } = await graphql.query({
      query: ShowProgramDocument,
      variables: {
        showId
      }
    })
    return <>
      <h1>Program</h1>
      <ShowProgramList program = {data?.Show?.program} showId={showId} />
    </>
  } catch (e) {
    return handleError(e)
  }
}
