import * as Styled from './ProductPage.styled'

import {
  ProductIntroduction,
  // ProductIntroductionProps,
} from '@/organisms/ProductIntroduction/ProductIntroduction'
import { Back } from '@/atoms/Back/Back'
import { Footer } from '@/organisms/Footer/Footer'

// export type ProductPageProps = Omit<
//   ProductIntroductionProps,
//   'imageUrl'
// > & {
//   image: {
//     url: string
//   }
// }

// export const ProductPage = ({ productData }: ProductPageProps) => {
// console.log(children)
export const ProductPage = () => {
  return (
    <Styled.ProductPage>
      <main>
        <Back //
          href="../#sweets"
          newTab={false}
        />
        <ProductIntroduction
          name="SweetsName"
          description="SweetsDescription"
          price={88}
          imageUrl="https://images.unsplash.com/photo-1606077938095-6f0d071b94d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIzNTIzMjE0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480"
        />
      </main>

      <Footer />
    </Styled.ProductPage>
  )
}
