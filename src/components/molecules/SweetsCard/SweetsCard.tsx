import * as Styled from './SweetsCard.styled'

import { toBRLNotation } from '@/utils/toBRLNotation'

export type SweetsCardProps = {
  name: string
  price: number
  imageUrl: string
}

export const SweetsCard = ({ name, price, imageUrl }: SweetsCardProps) => {
  const priceBRLNotation = toBRLNotation(price)

  return (
    <Styled.Wrapper imageUrl={imageUrl}>
      <Styled.ContentWrapper>
        <Styled.Content>
          <Styled.NameSection>
            <Styled.Name>{name}</Styled.Name>
          </Styled.NameSection>

          <Styled.Price>{priceBRLNotation}</Styled.Price>
        </Styled.Content>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  )
}
