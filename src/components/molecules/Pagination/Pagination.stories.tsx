import { Story, Meta } from '@storybook/react'
import { Pagination, PaginationProps } from './Pagination'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
} as Meta

const Template: Story<PaginationProps> = args => (
  <Pagination {...args} />
)

export const X = Template.bind({})
X.storyName = 'X'
X.args = {
  currentPage: 2,
  onClickPrev: () => {
    console.log('Prev clicked!')
  },
  onClickNext: () => {
    console.log('Next clicked!')
  },
}

export const XX = Template.bind({})
XX.storyName = 'XX'
XX.args = {
  ...X.args,
  currentPage: 12,
}

export const XXX = Template.bind({})
XXX.storyName = 'XXX'
XXX.args = {
  ...X.args,
  currentPage: 131,
}
