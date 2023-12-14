import { ReactElement } from 'react'
import { ParamsType } from '../../ParamsType'
import ShowParamsInterface from '../../ShowParamsInterface'
import createGraphqlServerClient from '../../../../graphql/client/createGraphqlServerClient'
import { PerformanceDocument } from '../../../../graphql/generated/types'
import handleError from '../../../../graphql/handleError'
import PerformanceParamsInterface from './PerformanceParamsInterface'
import Performance from '../../../../components/server/Performance'
import { Metadata } from 'next'
import prepareMetadataTitle from '../../../../utils/prepareMetadataTitle'
import ProgramPaginator from '../../../../components/server/ProgramPaginator'

export const metadata: Metadata = {
  title: prepareMetadataTitle('Vystopení')
}

export default async function PerformancePage ({ params }: ParamsType<PerformanceParamsInterface & ShowParamsInterface>): Promise<ReactElement> {
  const { performanceId, showId } = params

  const graphql = createGraphqlServerClient()
  try {
    const { data } = await graphql.query({
      query: PerformanceDocument,
      variables: {
        performanceId,
        showId
      },
      context: {
        fetchOptions: {
          next: { revalidate: 5 }
        }
      }
    })
    return <>
      <Performance performance={data.Performance}/>

      <ProgramPaginator item={data.Performance} program={data?.Show?.program} showId={showId}/>
    </>
  } catch (e) {
    return handleError(e)
  }
}
