import * as Styled from './SweetsCard.styled'

import { Square } from '@/atoms/Square/Square'
import { toBRLNotation } from '@/utils/toBRLNotation'

export type SweetsCardProps = {
  name: string
  price: number
  imageUrl: string
  isLink?: boolean
  href?: string
}

export const SweetsCard = ({
  name,
  price,
  imageUrl,
  isLink = false,
  href = '#',
}: SweetsCardProps) => {
  const priceBRLNotation = toBRLNotation(price)

  const SweetsCardContent = (
    <Styled.Content imageUrl={imageUrl}>
      <Styled.Price>{priceBRLNotation}</Styled.Price>
      <Styled.NameSection>
        <Styled.Name>{name}</Styled.Name>
      </Styled.NameSection>
    </Styled.Content>
  )

  if (isLink) {
    return (
      <Square //
        minSide="160px"
        maxSide="320px"
        background="#eee"
      >
        <a href={href} rel="noreferrer noopener">
          {SweetsCardContent}
        </a>
      </Square>
    )
  }

  return (
    <Square //
      minSide="160px"
      maxSide="320px"
      background="#eee"
    >
      {SweetsCardContent}
    </Square>
  )
}
