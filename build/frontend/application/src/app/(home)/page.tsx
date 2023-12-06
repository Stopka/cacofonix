import { ReactNode } from 'react'
import createGraphqlServerClient from '../../graphql/client/createGraphqlServerClient'
import { ShowSettingDocument } from '../../graphql/generated/types'
import { redirect } from 'next/navigation'

export default async function RootPage (): Promise<ReactNode> {
  const graphql = createGraphqlServerClient()
  const { data } = await graphql.query({
    query: ShowSettingDocument,
    variables: {
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 }
      }
    }
  })
  const showId = data?.Setting?.show?.value?.id
  if (typeof showId !== 'string') {
    return <>
    <h1>Cacofonix</h1>
    <p>Vítejte. Bohužel v tuto chvílí neprobíhá žádná akce</p>
  </>
  }
  return redirect(`/${showId}`)
}
