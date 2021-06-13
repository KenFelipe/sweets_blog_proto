import * as Styled from './Home.styled'

import {
  TitleSection,
  TitleSectionProps,
} from '@/organisms/TitleSection/TitleSection'
import {
  SweetsList,
  SweetsListProps,
} from '@/organisms/SweetsList/SweetsList'
import { Footer, LicencesProps } from '@/organisms/Footer/Footer'

import { GoTop } from '@/molecules/GoTop/GoTop'

export type MainDataProps = {
  main_title: string
} & Pick<SweetsListProps, 'category_title'>

export type HomeProps = {
  titleData: TitleSectionProps
  mainData: MainDataProps
  footerData: LicencesProps
} & Pick<SweetsListProps, 'categories'>

export const Home = ({
  titleData,
  mainData,
  categories,
  footerData,
}: HomeProps) => {
  return (
    <Styled.Home>
      <TitleSection
        title={titleData.title}
        tel={titleData.tel}
        tel_label={titleData.tel_label}
        background={titleData.background}
        background_position_x={titleData.background_position_x}
        background_position_y={titleData.background_position_y}
      />

      <main id="products">
        <h2>
          <span>{mainData.main_title}</span>
        </h2>
        <SweetsList
          category_title={mainData.category_title}
          categories={categories}
        />

        <GoTop />
      </main>

      <Footer licenceData={footerData} />
    </Styled.Home>
  )
}
