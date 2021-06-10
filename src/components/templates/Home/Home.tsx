import * as Styled from './Home.styled'

import { TitleSection } from '@/organisms/TitleSection/TitleSection'
import { SweetsList } from '@/organisms/SweetsList/SweetsList'
import { Footer } from '@/organisms/Footer/Footer'
import { GoTop } from '@/molecules/GoTop/GoTop'

export type HomeProps = {
  children?: React.ReactNode
}

export const Home = ({ children }: HomeProps) => {
  return (
    <Styled.Home>
      <TitleSection />

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
