import * as Styled from './ProductPage.styled'

import {
  ProductIntroduction,
  ProductIntroductionProps,
} from '@/organisms/ProductIntroduction/ProductIntroduction'
import { Back } from '@/atoms/Back/Back'
import { Footer, LicencesProps } from '@/organisms/Footer/Footer'

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
  footerData: LicencesProps
}

export const ProductPage = ({
  productData,
  footerData,
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

      <Footer licenceData={footerData} />
    </Styled.ProductPage>
  )
}
