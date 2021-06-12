import * as Styled from './ProductPage.styled'

import {
  ProductIntroduction,
  ProductIntroductionProps,
} from '@/organisms/ProductIntroduction/ProductIntroduction'
import { Back } from '@/atoms/Back/Back'
import { Footer } from '@/organisms/Footer/Footer'

export type ProductProps = Omit<
  ProductIntroductionProps,
  'imageUrl'
> & {
  image: {
    url: string
  }
}

export type ProductPageProps = {
  productData: ProductProps
}

export const ProductPage = ({
  productData,
}: ProductPageProps) => {
  return (
    <Styled.ProductPage>
      <main>
        <Back //
          href="../#products"
          newTab={false}
        />
        <ProductIntroduction
          name={productData.name}
          description={
            productData.description || 'No Description'
          }
          price={productData.price}
          imageUrl={productData.image.url}
        />
      </main>

      <Footer />
    </Styled.ProductPage>
  )
}
