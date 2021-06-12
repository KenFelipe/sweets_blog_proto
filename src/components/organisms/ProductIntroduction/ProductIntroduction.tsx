import * as Styled from './ProductIntroduction.styled'

import { Square } from '@/atoms/Square/Square'
import { ProductDescription } from '@/molecules/ProductDescription/ProductDescription'

export type ProductIntroductionProps = {
  name: string
  description: string
  price: string
  imageUrl: string
}

export const ProductIntroduction = ({
  name,
  description,
  price,
  imageUrl,
}: ProductIntroductionProps) => {
  return (
    <Styled.Wrapper>
      <div>
        <Square>
          <img src={imageUrl} alt={`Picture of ${name}`} />
        </Square>
      </div>
      <ProductDescription
        name={name}
        description={description}
        price={price}
      />
    </Styled.Wrapper>
  )
}
