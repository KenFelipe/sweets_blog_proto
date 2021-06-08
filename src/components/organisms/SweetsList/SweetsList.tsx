import * as Styled from './SweetsList.styled'
import { useEffect, useState } from 'react'

import { client } from '@/api/connectServer'
import { fetchSweets } from '@/api/fetchSweets'

import {
  SweetsCard,
  // SweetsCardProps,
} from '@/molecules/SweetsCard/SweetsCard'

// export type SweetsData = Pick<
//   SweetsCardProps,
//   'name' | 'price' | 'imageUrl'
// > & { href: string }

// export type SweetsListProps = {
//   sweetsListData: SweetsData[]
// }

export const SweetsList = () => {
  const [sweets, setSweets] = useState([])

  useEffect(() => {
    fetchSweets(client, 6, 6).then(({ data }) => {
      setSweets(data.sweets)
      console.log(JSON.stringify(data.sweets, null, 2))
    })
  }, [])

  return (
    <Styled.Wrapper>
      {sweets.map(({ name, price, image }, i) => (
        <SweetsCard
          key={i}
          name={name}
          price={price}
          imageUrl={image.url}
          href={image.url}
          isLink={true}
        />
      ))}
    </Styled.Wrapper>
  )
}
