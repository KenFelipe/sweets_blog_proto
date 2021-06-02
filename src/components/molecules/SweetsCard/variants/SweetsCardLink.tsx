import * as Styled from '../SweetsCard.styled'

import { Square } from '@/atoms/Square/Square'
import { toBRLNotation } from '@/utils/toBRLNotation'

import { SweetsCardProps } from '../SweetsCard'

export type SweetsCardLinkProps = SweetsCardProps & {
  href: string
}

export const SweetsCardLink = ({
  name,
  price,
  imageUrl,
  href,
}: SweetsCardLinkProps) => {
  const priceBRLNotation = toBRLNotation(price)

  return (
    <Square //
      minSide="160px"
      maxSide="320px"
      background="#eee"
    >
      <a href={href} rel="noreferrer noopener">
        <Styled.Content imageUrl={imageUrl}>
          <Styled.Price>{priceBRLNotation}</Styled.Price>
          <Styled.NameSection>
            <Styled.Name>{name}</Styled.Name>
          </Styled.NameSection>
        </Styled.Content>
      </a>
    </Square>
  )
}
