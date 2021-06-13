import { Story, Meta } from '@storybook/react'
import { mobileFirstViewportParams } from '@/utils/storybook/mobileFirstViewport'

import { SweetsList, SweetsListProps } from './SweetsList'

// import { getSweetsListMockData } from './SweetsList.mock'
// max: 20
// const mockSweetsListLength = 3

export default {
  title: 'Organisms/SweetsList',
  component: SweetsList,
  args: {
    category_title: 'Category',
    categories: [
      {
        name: 'category_1',
      },
      {
        name: 'category_2',
      },
      {
        name: 'category_3',
      },
      {
        name: 'category_4',
      },
      {
        name: 'category_5',
      },
    ],
  },
  // loaders: [
  //   async () => ({
  //     sweetsListData: await getSweetsListMockData(
  //       mockSweetsListLength,
  //     ),
  //   }),
  // ],
} as Meta

// const Template: Story<SweetsListProps> = (
//   args,
//   { loaded: { sweetsListData } },
// ) => <SweetsList {...args} sweetsListData={sweetsListData} />
const Template: Story<SweetsListProps> = args => (
  <SweetsList {...args} />
)

export const MobileSmall = Template.bind({})
MobileSmall.storyName = 'Mobile(small)'
MobileSmall.parameters = { ...mobileFirstViewportParams.small }

export const MobileLarge = Template.bind({})
MobileLarge.storyName = 'Mobile(large)'
MobileLarge.parameters = { ...mobileFirstViewportParams.large }

export const Tablet = Template.bind({})
Tablet.storyName = 'Tablet'
Tablet.parameters = { ...mobileFirstViewportParams.tablet }

export const LaptopView = Template.bind({})
LaptopView.storyName = 'Laptop/Desktop View'
