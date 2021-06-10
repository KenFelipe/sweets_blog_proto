import { Story, Meta } from '@storybook/react'
import { Footer } from './Footer'

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as Meta

const Template: Story = args => <Footer {...args} />

export const Example = Template.bind({})
Example.storyName = 'Footer'
