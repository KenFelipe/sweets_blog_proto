import { Story, Meta } from '@storybook/react'
import { Square, SquareProps } from './Square'

export default {
  title: 'Atoms/Square',
  component: Square,
  args: {
    minSide: '160px',
    maxSide: '320px',
    background: '#eee',
  },
} as Meta

const Template: Story<SquareProps> = args => <Square {...args} />

const childrenExampleStyle = {
  width: '100%',
  background: 'pink',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const Primary = Template.bind({})
Primary.storyName = 'Children Filled (160 ~ 320px)'
Primary.args = {
  children: (
    <div
      style={{
        ...childrenExampleStyle,
        height: '100%',
      }}
    >
      Children Filled
    </div>
  ),
}

export const ChildrenPosRelative = Template.bind({})
ChildrenPosRelative.storyName =
  'Children with position: relative (160 ~ 320px)'
ChildrenPosRelative.args = {
  children: (
    <div
      style={{
        ...childrenExampleStyle,
        height: '100px',
        marginTop: '-50px',
        position: 'relative',
        top: '50%',
      }}
    >
      height: 100px, &nbsp; <br />
      margin-top: -50px, &nbsp; <br />
      position: relative, &nbsp; <br />
      top: 50%,
    </div>
  ),
}

export const ChildrenPosAbsolute = Template.bind({})
ChildrenPosAbsolute.storyName =
  'Children with position: absolute (160 ~ 320px)'
ChildrenPosAbsolute.args = {
  children: (
    <div
      style={{
        ...childrenExampleStyle,
        position: 'absolute',
        bottom: '0',
      }}
    >
      position: absolute; &nbsp; <br />
      bottom: 0; &nbsp;
    </div>
  ),
}
