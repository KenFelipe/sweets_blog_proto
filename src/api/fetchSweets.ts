import { gql } from '@apollo/client'
import { client } from '@/api/connectServer'

export const fetchSweets = (
  limit: number,
  start = 0,
  category = '',
) => {
  const filter = `limit: ${limit}, start: ${start}, ${
    category
      ? `where: { categories: { name: "${category}" } }`
      : ''
  }`

  return client
    .query({
      query: gql`
        query FetchSweets {
          sweets(${filter}) {
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

export const fetchSweetsCount = (category = '') => {
  return client
    .query({
      query: !category
        ? gql`
            query FetchSweetsCount {
              sweetsCount
            }
          `
        : gql`
            query FetchSweetsCountWithCategory {
              sweetsConnection(where: { categories: { name: "${category}" } }) {
                aggregate {
                  count
                }
              }
            }
        `,
    })
    .then(response => ({
      count: !category
        ? response.data.sweetsCount
        : response.data.sweetsConnection.aggregate.count,
      loading: response.loading,
      networkStatus: response.networkStatus,
    }))
}
