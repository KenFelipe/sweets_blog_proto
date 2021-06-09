import { Story, Meta } from '@storybook/react'
import { GoTop } from './GoTop'

export default {
  title: 'Molecules/GoTopButton',
  component: GoTop,
  decorators: [
    Story => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '300vh',
        }}
      >
        <Story />
        <span>Scroll Down...</span>
      </div>
    ),
  ],
} as Meta

const Template: Story = args => <GoTop {...args} />

export const Example = Template.bind({})
Example.storyName = 'Example'
