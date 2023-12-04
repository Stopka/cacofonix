'use client'

import { ReactElement, ReactNode } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export default function ApolloClientProvider ({ children, graphqlUrl }: { children: ReactNode, graphqlUrl: string }): ReactElement {
  return <ApolloProvider client={new ApolloClient<any>({
    uri: graphqlUrl,
    cache: new InMemoryCache()
  })}>
    {children}
  </ApolloProvider>
}
