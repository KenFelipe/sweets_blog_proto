import { Story, Meta } from '@storybook/react'
import { mobileFirstViewportParams } from '@/utils/storybook/mobileFirstViewport'

import { TitleSection, TitleSectionProps } from './TitleSection'

export default {
  title: 'Organisms/TitleSection',
  component: TitleSection,
} as Meta

const Template: Story<TitleSectionProps> = args => (
  <TitleSection {...args} />
)

export const MobileSmall = Template.bind({})
MobileSmall.storyName = 'Mobile(sm)'
MobileSmall.parameters = { ...mobileFirstViewportParams.small }

export const MobileLarge = Template.bind({})
MobileLarge.storyName = 'Mobile(lg)'
MobileLarge.parameters = { ...mobileFirstViewportParams.large }

export const Tablet = Template.bind({})
Tablet.storyName = 'Tablet'
Tablet.parameters = { ...mobileFirstViewportParams.tablet }

export const LaptopView = Template.bind({})
LaptopView.storyName = 'Laptop/Desktop'
