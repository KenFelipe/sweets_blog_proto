import { ApolloClient, InMemoryCache } from '@apollo/client'
import { graphqlServerUrl } from './config/url'

export const client = new ApolloClient({
  uri: graphqlServerUrl,
  cache: new InMemoryCache({
    addTypename: false,
  }),
})
