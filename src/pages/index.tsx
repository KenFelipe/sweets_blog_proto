import Head from 'next/head'
import { GetStaticProps } from 'next'

import { fetchHomeData } from '@/api/fetchHomeData'
import { Home, MainDataProps } from '@/templates/Home/Home'
import { TitleSectionProps } from '@/organisms/TitleSection/TitleSection'
import { CategoriesProps } from '@/organisms/SweetsList/SweetsList'
import { LicencesProps } from '@/organisms/Footer/Footer'

export type IndexProps = {
  data: {
    meta: {
      site_name: string
    }
    title: TitleSectionProps
    main: MainDataProps
    licences: LicencesProps
    categories: CategoriesProps
  }
}

export default function Index({ data }: IndexProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0"
        />
        <title>{data.meta.site_name}</title>
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
