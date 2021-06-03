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
    <Styled.Content
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <Styled.Price>{priceBRLNotation}</Styled.Price>

      <Styled.Name>{name}</Styled.Name>
      <Styled.NameLayer />
    </Styled.Content>
  )

  if (isLink) {
    return (
      <Square background="#eee">
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
