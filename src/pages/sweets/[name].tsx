import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

import { getAllProductNames } from '@/api/getAllProductNames'
import { fetchProductPageData } from '@/api/fetchProductPageData'

import {
  ProductPage,
  ProductProps,
} from '@/templates/ProductPage/ProductPage'
import { LicencesProps } from '@/organisms/Footer/Footer'

export type ProductPageData = {
  data: {
    sweets: ProductProps[]
    licences: LicencesProps
  }
}

export default function SweetsPage({ data }: ProductPageData) {
  return (
    <>
      <Head>
        <title>Sweets/{data.sweets[0].name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductPage
        productData={data.sweets[0]}
        footerData={data.licences}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<ProductPageData> = async ({
  params,
}) => {
  let dataFetched = null

  try {
    dataFetched = await fetchProductPageData(params.name)
  } catch (e) {
    console.error(e)
  }

  if (!dataFetched) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: dataFetched.data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProductNames()

  return {
    paths,
    fallback: false,
  }
}
