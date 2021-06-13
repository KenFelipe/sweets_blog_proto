import { Story, Meta } from '@storybook/react'
import { mobileFirstViewportParams } from '@/utils/storybook/mobileFirstViewport'

import { TitleSection, TitleSectionProps } from './TitleSection'

export default {
  title: 'Organisms/TitleSection',
  component: TitleSection,
  args: {
    title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Eius, sed quos! Repellendus cum placeat perferendis nostrum, ipsam laboriosam molestiae.
      Est assumenda quia minima temporibus veniam fugit hic autem accusantium repellat.`,
    tel: '(11) 1234-56789',
    tel_label: 'TelLabel: ',
    background: '',
    background_position_x: 'right',
    background_position_y: 'center',
  },
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
