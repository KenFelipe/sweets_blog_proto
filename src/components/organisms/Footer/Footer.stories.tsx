import { Story, Meta } from '@storybook/react'
import { Footer } from './Footer'

export default {
  title: 'Organisms/Footer',
  component: Footer,
  // decorators: [
  //   Story => (
  //     <div
  //       style={{
  //         height: '300vh',
  //       }}
  //     >
  //       <Story />
  //     </div>
  //   ),
  // ],
} as Meta

const Template: Story = args => <Footer {...args} />

export const Example = Template.bind({})
Example.storyName = 'Footer'
