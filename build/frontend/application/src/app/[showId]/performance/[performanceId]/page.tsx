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

export const metadata: Metadata = {
  title: prepareMetadataTitle('Vystopení')
}

export default async function PerformancePage ({ params }: ParamsType<PerformanceParamsInterface & ShowParamsInterface>): Promise<ReactElement> {
  const { performanceId } = params

  const graphql = createGraphqlServerClient()
  try {
    const { data } = await graphql.query({
      query: PerformanceDocument,
      variables: {
        performanceId
      }
    })
    return <Performance performance={data.Performance}/>
  } catch (e) {
    return handleError(e)
  }
}
