import { Story, Meta } from '@storybook/react'
import { mobileFirstViewportParams } from '@/utils/storybook/mobileFirstViewport'

import {
  ProductDescription,
  ProductDescriptionProps,
} from './ProductDescription'

import { toBRLNotation } from '@/utils/toBRLNotation'

const TiramisuDescription = `Tiramisu (Italian: tiramisù) is a coffee-flavoured Italian dessert.
  It is made of ladyfingers (savoiardi) dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.
  The recipe has been adapted into many varieties of cakes and other desserts.
  Its origins are often disputed among Italian regions Veneto and Friuli Venezia Giulia.`

export default {
  title: 'Molecules/ProductDescription',
  component: ProductDescription,
  decorators: [
    Style => (
      <div style={{ background: '#f8f8ca' }}>
        <Style />
      </div>
    ),
  ],
  args: {
    name: 'Tiramisu',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Facere, modi hic delectus et debitis!`,
    // description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //   Qui cupiditate excepturi sit mollitia ea nobis.
    //   Maxime ad obcaecati ipsam nostrum quidem.
    //   Hic, possimus ullam accusantium dolore asperiores nulla facere sint.`,
    price: toBRLNotation(16.4),
  },
} as Meta

const Template: Story<ProductDescriptionProps> = args => (
  <ProductDescription {...args} />
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

export const WithLargeText = Template.bind({})
WithLargeText.storyName = 'With large text'
WithLargeText.args = {
  description:
    TiramisuDescription +
    '\n\n' +
    TiramisuDescription +
    '\n\n' +
    TiramisuDescription,
}
