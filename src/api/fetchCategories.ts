import { gql } from '@apollo/client'
import { client } from '@/api/connectServer'

export const fetchCategories = () => {
  return client
    .query({
      query: gql`
        query FetchCategories {
          categories {
            name
          }
        }
      `,
    })
    .then(response => ({
      categories: response.data.categories,
      loading: response.loading,
      networkStatus: response.networkStatus,
    }))
}
