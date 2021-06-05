import { Story, Meta } from '@storybook/react'
import { Tag, TagProps } from './Tag'

export default {
  title: 'Atoms/Tag',
  component: Tag,
} as Meta

const Template: Story<TagProps> = args => <Tag {...args} />

export const Active = Template.bind({})
Active.storyName = 'Active'
Active.args = {
  children: 'Tiramisu',
  active: true,
}

export const NoActive = Template.bind({})
NoActive.storyName = 'No Active'
NoActive.args = {
  children: 'Sunday',
  active: false,
}

export const FontSize2x = Template.bind({})
FontSize2x.storyName = 'Font 32px & Line: 3px'
FontSize2x.args = {
  children: 'Cherry Pie',
  fontSize: '3.2rem',
  underlineWeight: '3px',
  active: false,
}
