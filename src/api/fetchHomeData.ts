import { gql } from '@apollo/client'
import { client } from '@/api/connectServer'

export const fetchHomeData = async () => {
  return client
    .query({
      query: gql`
        query FetchSweets {
          title {
            title
            tel_label
            tel
            background {
              url
            }
            background_position_x
            background_position_y
          }

          # categories {
          #   name
          # }
        }
      `,
    })
    .then(response => ({
      data: response.data,
      loading: response.loading,
      networkStatus: response.networkStatus,
    }))
}
