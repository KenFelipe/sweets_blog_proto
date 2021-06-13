import { Story, Meta } from '@storybook/react'
import { TagList, TagListProps } from './TagList'

export default {
  title: 'Molecules/TagList',
  component: TagList,
} as Meta

const Template: Story<TagListProps> = args => (
  <TagList {...args} />
)

// total: 12
const active = 2
const exLabels = [
  'Starbucks',
  'McCafé',
  "Dunkin' Donuts",
  'Caribou Coffee',
  'Crazy Mocha',
  'Joe Muggs',
  "Gloria Jean's",
  'The Human Bean',
  'The Coffee Bean & Tea Leaf',
  'Tully’s Coffee',
  'Saxby’s Coffee',
  'Seattle’s Best Coffee',
]

const mockData = exLabels.map(label => ({
  children: label,
  active: false,
}))
mockData[active].active = true

export const Primary = Template.bind({})
Primary.storyName = 'Example'
Primary.args = {
  tagListData: mockData,
}
