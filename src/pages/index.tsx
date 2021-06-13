import Head from 'next/head'
import { GetStaticProps } from 'next'

import { fetchHomeData } from '@/api/fetchHomeData'
import { Home, MainDataProps } from '@/templates/Home/Home'
import { TitleSectionProps } from '@/organisms/TitleSection/TitleSection'
import { SweetsListProps } from '@/organisms/SweetsList/SweetsList'
import { LicencesProps } from '@/organisms/Footer/Footer'

export type IndexProps = {
  data: {
    title: TitleSectionProps
    main: MainDataProps
    licences: LicencesProps
  } & Pick<SweetsListProps, 'categories'>
}

export default function Index({ data }: IndexProps) {
  return (
    <>
      <Head>
        <title>Next Plugin Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home
        titleData={data.title}
        mainData={data.main}
        categories={data.categories}
        footerData={data.licences}
      />
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
