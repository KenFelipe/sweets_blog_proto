import { Story, Meta } from '@storybook/react'
import { SweetsCard, SweetsCardProps } from './SweetsCard'

import { mobileFirstViewportParams } from '@/utils/storybook/mobileFirstViewport'

export default {
  title: 'Molecules/SweetsCard',
  component: SweetsCard,
  parameters: {
    ...mobileFirstViewportParams,
  },
} as Meta

const Template: Story<SweetsCardProps> = args => <SweetsCard {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Primary'

Primary.args = {
  name: 'Tiramisu',
  price: 58,
  imageUrl: 'https://picsum.photos/320',
}
