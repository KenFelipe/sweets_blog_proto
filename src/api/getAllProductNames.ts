import { gql } from '@apollo/client'
import { client } from '@/api/connectServer'

export const getAllProductNames = async () => {
  const products = await client.query({
    query: gql`
      query FetchProductNames {
        sweets {
          name
        }
      }
    `,
  })

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return products.data.sweets.map(product => {
    return {
      params: {
        name: product.name.toLowerCase(),
      },
    }
  })
}
