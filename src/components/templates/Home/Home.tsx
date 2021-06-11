import * as Styled from './Home.styled'

import {
  TitleSection,
  TitleSectionProps,
} from '@/organisms/TitleSection/TitleSection'

import { SweetsList } from '@/organisms/SweetsList/SweetsList'
import { Footer } from '@/organisms/Footer/Footer'
import { GoTop } from '@/molecules/GoTop/GoTop'

export type HomeProps = {
  titleData: TitleSectionProps
}

export const Home = ({ titleData }: HomeProps) => {
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

      <main>
        <h2>
          <span>Sweets</span>
        </h2>
        <SweetsList />

        <GoTop />
      </main>

      <Footer />
    </Styled.Home>
  )
}
