import { notFound } from 'next/navigation'
import { ReactElement } from 'react'

export default function handleError (e: unknown): ReactElement {
  // @ts-expect-error
  const graphQLErrors = e?.graphQLErrors
  if (Array.isArray(graphQLErrors)) {
    graphQLErrors.forEach(graphQLError => {
      if (graphQLError.extensions.statusCode === 404) {
        console.info('Graphql Resource not found', graphQLError)
        return notFound()
      }
      console.error('GraphqlError', graphQLError)
      throw e
    })
  }

  console.error('Loading error', e)
  throw e
}
