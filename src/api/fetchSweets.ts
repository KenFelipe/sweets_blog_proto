import { gql } from '@apollo/client'

export const fetchSweets = async (
  client,
  limit: number,
  start = 0,
) => {
  return client
    .query({
      query: gql`
        query FetchSweets {
          sweets(limit:${limit}, start:${start},) {
            id
            name
            price
            image {
              url
            }
          }
        }
      `,
    })
    .then(response => ({
      data: response.data,
      loading: response.loading,
      networkStatus: response.networkStatus,
    }))
}
