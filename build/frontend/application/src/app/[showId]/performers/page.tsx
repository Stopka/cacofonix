import { ReactElement } from 'react'
import createGraphqlServerClient from '../../../graphql/client/createGraphqlServerClient'
import { ShowPerformersDocument } from '../../../graphql/generated/types'
import Content from '../../../components/server/Content'
import ShowParamsInterface from '../ShowParamsInterface'
import { ParamsType } from '../ParamsType'
import handleError from '../../../graphql/handleError'
import { Metadata } from 'next'
import prepareMetadataTitle from '../../../utils/prepareMetadataTitle'

export const metadata: Metadata = {
  title: prepareMetadataTitle('Účinkující')
}

export default async function PerformersPage ({ params }: ParamsType<ShowParamsInterface>): Promise<ReactElement> {
  const { showId } = params
  const graphql = createGraphqlServerClient()
  try {
    const { data } = await graphql.query({
      query: ShowPerformersDocument,
      variables: {
        showId
      }
    })
    return <>
      <h1>Účinkující</h1>
      {data?.Show?.performers?.map(
        (performer) => {
          return (<article key={performer?.value?.id} className={'clearfix mb-3'}>
            <h2>{performer.value?.title}</h2>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={performer?.value?.image?.url ?? ''}
                     className="img-fluid rounded"
                     alt={performer?.value?.image?.alt ?? ''}/>
              </div>
              <div className="col-md-8">
                <div className="card-body mt-3 mt-md-0 ms-md-3">
                  <Content content={performer?.value?.description ?? ''}/>
                </div>
              </div>
            </div>

          </article>)
        }
      )}
    </>
  } catch (e) {
    return handleError(e)
  }
}
