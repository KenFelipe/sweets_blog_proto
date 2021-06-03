import { Story, Meta } from '@storybook/react'
import { mobileFirstViewportParams } from '@/utils/storybook/mobileFirstViewport'

import { SweetsList, SweetsListProps } from './SweetsList'
import { sweetsListMockData } from './SweetsList.mock'

export default {
  title: 'Organisms/SweetsList',
  component: SweetsList,
} as Meta

const Template: Story<SweetsListProps> = args => (
  <SweetsList {...args} />
)

export const MobileView = Template.bind({})
MobileView.storyName = 'Mobile View'
MobileView.args = {
  sweetsListData: sweetsListMockData,
}
MobileView.parameters = {
  ...mobileFirstViewportParams.large,
}

export const LaptopView = Template.bind({})
LaptopView.storyName = 'Laptop/Desktop View'
LaptopView.args = {
  sweetsListData: sweetsListMockData,
}
