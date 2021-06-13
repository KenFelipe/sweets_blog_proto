import * as Styled from './ProductIntroduction.styled'

import { Square } from '@/atoms/Square/Square'
import {
  ProductDescription,
  ProductDescriptionProps,
} from '@/molecules/ProductDescription/ProductDescription'

export type ProductIntroductionProps = {
  imageUrl: string
} & ProductDescriptionProps

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
