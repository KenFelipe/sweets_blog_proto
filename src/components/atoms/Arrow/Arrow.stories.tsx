import { Story, Meta } from '@storybook/react'
import { Arrow, ArrowProps } from './Arrow'

export default {
  title: 'Atoms/Arrow',
  component: Arrow,
  decorators: [
    Story => (
      <div
        style={{
          width: '500px',
          height: '300px',
          position: 'relative',
          background: '#eee',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<ArrowProps> = args => <Arrow {...args} />

export const Left = Template.bind({})
Left.storyName = 'Left'
Left.args = {
  direction: 'left',
  offsetTop: '50%',
  offsetLeft: '20px',
}

export const Right = Template.bind({})
Right.storyName = 'Right'
Right.args = {
  direction: 'right',
  offsetTop: '50%',
  offsetRight: '20px',
}

export const Top = Template.bind({})
Top.storyName = 'Top'
Top.args = {
  direction: 'up',
  offsetTop: '50%',
  offsetLeft: '50%',
}

export const Bottom = Template.bind({})
Bottom.storyName = 'Bottom'
Bottom.args = {
  direction: 'down',
  offsetTop: '50%',
  offsetLeft: '50%',
}
