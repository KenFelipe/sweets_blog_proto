import Head from 'next/head'
import { GetStaticProps } from 'next'

import { Home } from '@/templates/Home/Home'
import { fetchHomeData } from '@/api/fetchHomeData'

import { TitleSectionProps } from '@/organisms/TitleSection/TitleSection'

export type IndexProps = {
  data: {
    title: TitleSectionProps
  }
}

export default function Index({ data }: IndexProps) {
  return (
    <>
      <Head>
        <title>Next Plugin Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home titleData={data.title} />
    </>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let dataFetched = null

  try {
    dataFetched = await fetchHomeData()
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
