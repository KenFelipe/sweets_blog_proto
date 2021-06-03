import { Story, Meta } from '@storybook/react'
import { mobileFirstViewportParams } from '@/utils/storybook/mobileFirstViewport'

import { SweetsList, SweetsListProps } from './SweetsList'
import { sweetsListMockData } from './SweetsList.mock'

export default {
  title: 'Organisms/SweetsList',
  component: SweetsList,
  loaders: [
    async () => ({
      sweetsListData: await sweetsListMockData(),
    }),
  ],
} as Meta

const Template: Story<SweetsListProps> = (
  args,
  { loaded: { sweetsListData } },
) => <SweetsList {...args} sweetsListData={sweetsListData} />

export const MobileView = Template.bind({})
MobileView.storyName = 'Mobile View'
MobileView.parameters = {
  ...mobileFirstViewportParams.large,
}

export const LaptopView = Template.bind({})
LaptopView.storyName = 'Laptop/Desktop View'
