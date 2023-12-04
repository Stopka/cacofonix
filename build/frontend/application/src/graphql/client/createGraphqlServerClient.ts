import { HttpLink } from '@apollo/client'
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient
} from '@apollo/experimental-nextjs-app-support/ssr'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

import createConfig from '../../config/createConfig'

const config = createConfig().get('client.graphql')

const createGraphqlServerClient = registerApolloClient(
  () => new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: config.url
    })
  })
).getClient

export default createGraphqlServerClient
