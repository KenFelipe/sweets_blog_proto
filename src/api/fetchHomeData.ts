import { gql } from '@apollo/client'
import { client } from '@/api/connectServer'

export const fetchHomeData = async () => {
  return client
    .query({
      query: gql`
        query FetchSweets {
          meta {
            site_name
          }

          title {
            title
            text_color
            align
            tel_label
            tel
            background {
              url
            }
            background_opacity
            background_layer
            background_position_x
            background_position_y
          }

          main {
            main_title
            category_title
          }

          categories {
            name
          }

          licences {
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
    .then(response => ({
      data: response.data,
      loading: response.loading,
      networkStatus: response.networkStatus,
    }))
}
