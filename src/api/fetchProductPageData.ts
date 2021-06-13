import { gql } from '@apollo/client'
import { client } from '@/api/connectServer'

export const fetchProductPageData = async sweetsName => {
  const response = await client.query({
    query: gql`
      query fetchProductPageData {
        sweets(where: { name_contains: "${sweetsName}" }) {
          name
          description
          price
          image {
            url
          }
        }

        licenceData: licences {
          dz {
            ... on ComponentPagesLicence {
              label
              url
            }
          }
        }
      }
    `,
  })

  return {
    data: response.data,
    loading: response.loading,
    networkStatus: response.networkStatus,
  }
}
