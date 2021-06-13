import { Story, Meta } from '@storybook/react'
import { mobileFirstViewportParams } from '@/utils/storybook/mobileFirstViewport'

import {
  ProductIntroduction,
  ProductIntroductionProps,
} from './ProductIntroduction'

import ProductIntroductionStory, {
  WithLargeText,
} from '@/molecules/ProductDescription/ProductDescription.stories'

export default {
  title: 'Organisms/ProductIntroduction',
  component: ProductIntroduction,
  decorators: [
    Style => (
      <div
        style={{
          background: '#f8f8ca',
          maxWidth: '1080px',
        }}
      >
        <Style />
      </div>
    ),
  ],
  args: {
    ...ProductIntroductionStory.args,
    imageUrl:
      'https://res.cloudinary.com/cloudken/image/upload/v1622946620/photo_1608906457945_eae8eecf31a5_f374106143.jpg',
  },
} as Meta

const Template: Story<ProductIntroductionProps> = args => (
  <ProductIntroduction {...args} />
)

export const MobileSmall = Template.bind({})
MobileSmall.storyName = 'Mobile(sm)'
MobileSmall.parameters = { ...mobileFirstViewportParams.small }

export const MobileLarge = Template.bind({})
MobileLarge.storyName = 'Mobile(lg)'
MobileLarge.parameters = { ...mobileFirstViewportParams.large }

export const Tablet = Template.bind({})
Tablet.storyName = 'Tablet'
Tablet.parameters = { ...mobileFirstViewportParams.tablet }

export const LaptopView = Template.bind({})
LaptopView.storyName = 'Laptop/Desktop'

export const ProductWithLargeText = Template.bind({})
ProductWithLargeText.storyName = 'ProductWith large text'
ProductWithLargeText.args = { ...WithLargeText.args }
