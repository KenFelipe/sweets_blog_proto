import { Story, Meta } from '@storybook/react'
import { Back, BackProps } from './Back'

export default {
  title: 'Atoms/Back',
  component: Back,
} as Meta

const Template: Story<BackProps> = args => <Back {...args} />

export const OnClick = Template.bind({})
OnClick.storyName = 'On Click'
OnClick.args = {
  onClick: () => console.log('Back clicked!!!'),
}

export const Link = Template.bind({})
Link.storyName = 'Link'
Link.args = {
  href: '#',
  newTab: true,
}
