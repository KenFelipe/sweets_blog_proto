import * as Styled from './SweetsList.styled'

import {
  SweetsCard,
  SweetsCardProps,
} from '@/molecules/SweetsCard/SweetsCard'

export type SweetsData = Pick<
  SweetsCardProps,
  'name' | 'price' | 'imageUrl'
> & { href: string }

export type SweetsListProps = {
  sweetsListData: SweetsData[]
}

export const SweetsList = ({
  sweetsListData = [],
}: SweetsListProps) => {
  return (
    <Styled.Wrapper>
      {sweetsListData.map(
        ({ name, price, imageUrl, href }, i) => (
          <SweetsCard
            key={i}
            name={name}
            price={price}
            imageUrl={imageUrl}
            isLink={true}
            href={href}
          />
        ),
      )}
    </Styled.Wrapper>
  )
}
