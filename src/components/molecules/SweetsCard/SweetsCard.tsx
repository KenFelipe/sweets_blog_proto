import * as Styled from './SweetsCard.styled'

import { Square } from '@/atoms/Square/Square'
import { toBRLNotation } from '@/utils/toBRLNotation'

export type SweetsCardProps = {
  name: string
  price: number
  imageUrl: string
}

export const SweetsCard = ({
  name,
  price,
  imageUrl,
}: SweetsCardProps) => {
  const priceBRLNotation = toBRLNotation(price)

  return (
    <Square //
      minSide="160px"
      maxSide="320px"
      background="#eee"
    >
      <Styled.Content imageUrl={imageUrl}>
        <Styled.Price>{priceBRLNotation}</Styled.Price>
        <Styled.NameSection>
          <Styled.Name>{name}</Styled.Name>
        </Styled.NameSection>
      </Styled.Content>
    </Square>
  )
}
